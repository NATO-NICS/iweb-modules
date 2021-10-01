/*
 * Copyright (c) 2008-2021, Massachusetts Institute of Technology (MIT)
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, with or without
 * modification, are permitted provided that the following conditions are met:
 *
 * 1. Redistributions of source code must retain the above copyright notice, this
 * list of conditions and the following disclaimer.
 *
 * 2. Redistributions in binary form must reproduce the above copyright notice,
 * this list of conditions and the following disclaimer in the documentation
 * and/or other materials provided with the distribution.
 *
 * 3. Neither the name of the copyright holder nor the names of its contributors
 * may be used to endorse or promote products derived from this software without
 * specific prior written permission.
 *
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"
 * AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
 * IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
 * DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE
 * FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL
 * DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR
 * SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER
 * CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY,
 * OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
 * OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 */
package edu.mit.ll.iweb.websocket;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.databind.ObjectWriter;
import edu.mit.ll.iweb.message.MessageDecoder;
import edu.mit.ll.iweb.message.MessageEncoder;
import edu.mit.ll.iweb.message.RequestMessage;
import edu.mit.ll.iweb.message.ResponseMessage;
import edu.mit.ll.nics.common.rabbitmq.RabbitFactory;
import edu.mit.ll.nics.common.rabbitmq.RabbitPubSubProducer;
import java.io.IOException;
import java.util.ArrayList;
import java.util.Collection;
import java.util.HashMap;
import java.util.Iterator;
import java.util.List;
import java.util.Map;
import java.util.concurrent.TimeoutException;
import javax.servlet.http.HttpSession;
import org.apache.camel.Message;
import org.apache.commons.configuration2.Configuration;
import org.atmosphere.cache.UUIDBroadcasterCache;
import org.atmosphere.client.TrackMessageSizeInterceptor;
import org.atmosphere.config.service.AtmosphereHandlerService;
import org.atmosphere.config.service.ManagedService;
import org.atmosphere.cpr.AtmosphereHandler;
import org.atmosphere.cpr.AtmosphereRequest;
import org.atmosphere.cpr.AtmosphereResource;
import org.atmosphere.cpr.AtmosphereResource.TRANSPORT;
import org.atmosphere.cpr.AtmosphereResourceEvent;
import org.atmosphere.cpr.AtmosphereResponse;
import org.atmosphere.cpr.BroadcasterCache;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

/**
 * Simple annotated class that demonstrate the power of Atmosphere. This class supports all transports, support message
 * length guarantee, heart beat, message cache thanks to the {@link ManagedService}.
 */
@AtmosphereHandlerService(path = "/mediator", broadcasterCache = UUIDBroadcasterCache.class,
        interceptors = TrackMessageSizeInterceptor.class, supportSession = true)
public class Mediator implements AtmosphereHandler {
    private static final Logger LOGGER = LoggerFactory.getLogger(Mediator.class);

    public static String HANDLER_PATH = "/mediator";

    private static final String INVALID_MESSAGE_FORMAT = "Invalid Message Format";
    private static final String SUBSCRIBE_EXCEPTION = "Exception subscribing";
    private static final String PUBLISH_EXCEPTION = "Exception publishing";
    private static final String SUCCESS = "Success";

    private static final String SUBSCRIBE = "subscribe";
    private static final String UNSUBSCRIBE = "unsubscribe";
    private static final String PUBLISH = "publish";
    private static final String LOAD_CONFIG = "config";

    private static final String GET = "GET";
    private static final String POST = "POST";
    private static final String TOPICS = "topics";

    private static final String PRIVATE = "private";

    private static final String RECEIVED_PREFIX = "\n!!! Received incoming request: ";
    private static final String RESPONDING_PREFIX = "\n!!! Responding to request  id: ";

    private RabbitPubSubProducer rabbitProducer;

    private final ObjectWriter objectWriter;

    private Collection<SubscriptionValidator> subscriptionValidators;

    public Mediator() {
        objectWriter = new ObjectMapper().writer();
        subscriptionValidators = new ArrayList<SubscriptionValidator>();
    }

    public void addSubscriptionValidator(
            SubscriptionValidator subscriptionValidator) {
        this.subscriptionValidators.add(subscriptionValidator);
    }

    @Override
    public void onRequest(AtmosphereResource r) throws IOException {
        AtmosphereRequest req = r.getRequest();

        if(req.getMethod().equalsIgnoreCase(GET)) {

            // caching is necessary for polling transports, disable for others
            BroadcasterCache cache = r.getBroadcaster().getBroadcasterConfig()
                    .getBroadcasterCache();
            if(r.transport().equals(TRANSPORT.POLLING)
                    || r.transport().equals(TRANSPORT.LONG_POLLING)) {
                cache.cacheCandidate(r.getBroadcaster().getID(), r.uuid());
            } else {
                cache.excludeFromCache(r.getBroadcaster().getID(), r);
            }

            LOGGER.debug("Suspending session id {}", req.getSession().getId());

            // Tell Atmosphere to allow bi-directional communication by
            // suspending.
            r.suspend();
        }

        // Message Received from the Client
        else if(req.getMethod().equalsIgnoreCase(POST)) {
            try {
                if(req.getReader() != null) {
                    String body = req.getReader().readLine().trim();

                    RequestMessage request = new MessageDecoder().decode(body);
                    LOGGER.debug("{}{}", RECEIVED_PREFIX, request.getRequestId());
                    ResponseMessage response = this.onMessage(request, r);

                    if(response != null) {
                        r.getResponse().getWriter()
                                .write(new MessageEncoder().encode(response));
                    }
                }
            } catch(Exception e) {
                e.printStackTrace();
            }
        }
    }

    @Override
    public void onStateChange(AtmosphereResourceEvent event) throws IOException {
        AtmosphereResource resource = event.getResource();
        AtmosphereResponse res = resource.getResponse();

        if(resource.isSuspended()) {

            Object message = event.getMessage();
            if(message == null) {
                LOGGER.warn("Message was null for AtmosphereEvent");
                return;
            }

            if(message instanceof List) {
                for(Object s : (List<Object>) message) {
                    res.getWriter().write((String) s);
                }
            } else {
                res.getWriter().write((String) message);
            }

            switch(resource.transport()) {
                case JSONP:
                case LONG_POLLING:
                    event.getResource().resume();// need to send message back if
                    // this is failover
                    break;
                default:
                    res.getWriter().flush();
                    break;
            }
        } else if(!event.isResuming()) {
            LOGGER.info("Not Resuming HTTP Session ID <{}>",
                    resource.getRequest().getSession().getId());
        }
    }

    @Override
    public void destroy() {
    }

    /**
     * @param message an INSTANCE of {@link Message}
     * @return
     *
     * @throws IOException
     */
    private ResponseMessage onMessage(RequestMessage message,
                                      AtmosphereResource resource) throws IOException {
        ResponseMessage response = new ResponseMessage(message.getRequestId());
        try {
            String type = message.getType();
            if(type == null) {
                response.setErrorMessage(INVALID_MESSAGE_FORMAT);
            } else {
                if(type.equalsIgnoreCase(SUBSCRIBE)) {
                    return this.subscribe(message, resource);
                } else if(type.equalsIgnoreCase(UNSUBSCRIBE)) {
                    return this.unsubscribe(message, resource);
                } else if(type.equalsIgnoreCase(PUBLISH)) {
                    return this.publish(message);
                } else if(type.equalsIgnoreCase(LOAD_CONFIG)) {
                    return this.loadConfig(message.getRequestId(), resource.getRequest().getSession()
                            .getId());
                }
            }
        } catch(Exception e) {
            // log exception
            e.printStackTrace();
        }
        return response;
    }

    /**
     * Return the producer template used to publish messages
     *
     * @return
     */
    private RabbitPubSubProducer getRabbitProducer() throws IOException, TimeoutException {
        if(rabbitProducer == null) {
            rabbitProducer = RabbitFactory.makeRabbitPubSubProducer(
                    Config.getInstance().getConfiguration().getString(Config.RABBIT_HOSTNAME_KEY),
                    Config.getInstance().getConfiguration().getString(Config.RABBIT_EXCHANGENAME_KEY),
                    Config.getInstance().getConfiguration().getString(Config.RABBIT_USERNAME_KEY),
                    Config.getInstance().getConfiguration().getString(Config.RABBIT_USERPWD_KEY));
        }

        return rabbitProducer;
    }

    /**
     * Return array of subscribed topics for this request
     *
     * @param request
     * @return
     */
    private List<String> getTopics(AtmosphereRequest request) {
        HttpSession session = request.getSession();
        List<String> topics = (List<String>) session.getAttribute(TOPICS);
        if(topics == null) {
            topics = new ArrayList<String>();
            session.setAttribute(TOPICS, topics);
        }
        return topics;
    }

    /**
     * Add the topic the Atmosphere request Subscribe to the topic on the rabbit listener
     *
     * @param reqMessage the request message
     * @param resource   the atmosphere resource
     * @return
     */
    private ResponseMessage subscribe(RequestMessage reqMessage, AtmosphereResource resource) {
        final String topic = reqMessage.getTopic();
        LOGGER.info("User({}) subscribing to topic {}", reqMessage.getUserId(), topic);
        ResponseMessage message = new ResponseMessage(reqMessage.getRequestId());

        try {

            /** Blocking **/
            /*for (SubscriptionValidator sv : this.subscriptionValidators) {
                if (!sv.validate(resource, topic)) {
                    // Send back exception
                    message.setSuccessMessage(SUBSCRIBE_EXCEPTION);
                    return message;
                }
            }*/

            // Add new pattern to the topic array stored in the request
            getTopics(resource.getRequest()).add(topic);

            // Send back success
            message.setSuccessMessage(SUCCESS);

        } catch(Exception e) {
            // log exception
            e.printStackTrace();
            message.setErrorMessage(SUBSCRIBE_EXCEPTION);
        }

        LOGGER.debug("{}{}", RESPONDING_PREFIX, reqMessage.getRequestId());
        return message;
    }

    /**
     * Remove the topic from the Atmosphere request Unsubscribe the topic from the rabbit listener
     *
     * @param reqMessage the request message
     * @param resource   the atmosphere resource
     * @return
     */
    private ResponseMessage unsubscribe(RequestMessage reqMessage,
                                        AtmosphereResource resource) {

        final String topic = reqMessage.getTopic();
        LOGGER.info("User({}) unsubscribing from topic {}", reqMessage.getUserId(), topic);
        ResponseMessage message = new ResponseMessage(reqMessage.getRequestId());
        try {
            // Remove topic from request
            getTopics(resource.getRequest()).remove(topic);

            // Send back success
            message.setSuccessMessage(SUCCESS);
        } catch(Exception e) {
            // log exception
            e.printStackTrace();
            message.setErrorMessage(SUBSCRIBE_EXCEPTION);
        }
        LOGGER.debug("{}{}", RESPONDING_PREFIX, reqMessage.getRequestId());
        return message;
    }

    /**
     * Publish a request message
     *
     * @param reqMessage the request message
     * @return
     */
    private ResponseMessage publish(RequestMessage reqMessage) {
        final String topic = reqMessage.getTopic();
        final String message = reqMessage.getMessage();
        ResponseMessage responseMessage = new ResponseMessage(reqMessage.getRequestId());
        try {
            LOGGER.debug("in Publish method");

            getRabbitProducer().produce(topic, message);
            LOGGER.info("Publishing on topic: {}\nPublishing message: {}", topic, message);

            responseMessage.setSuccessMessage(SUCCESS);
        } catch(Exception e) {
            e.printStackTrace();
            responseMessage.setErrorMessage(PUBLISH_EXCEPTION);
        }
        LOGGER.debug("{}{}", RESPONDING_PREFIX, reqMessage.getRequestId());
        return responseMessage;
    }

    /**
     * Load the config file
     *
     * @param sessionId
     * @return
     *
     * @throws IOException
     */
    private ResponseMessage loadConfig(String reqId, String sessionId) throws IOException {
        Map<String, Object> config = new HashMap<>();
        ResponseMessage response = new ResponseMessage(reqId);

        Configuration systemConfig = Config.getInstance().getConfiguration();
        try {
            for(Iterator<String> itr = systemConfig.getKeys(); itr.hasNext(); ) {
                String key = itr.next();

                String[] properties = key.split("\\.");

                if(properties.length != 0
                        && !properties[0].equalsIgnoreCase(PRIVATE)) {

                    // No dot notation
                    if(properties.length == 1) {
                        config.put(key, systemConfig.getProperty(key));
                    } else {
                        boolean newProperty = true;
                        Map<String, Object> root;
                        Map<String, Object> currentMap;

                        if(config.containsKey(properties[0])) {
                            root = (Map) config.get(properties[0]);
                            newProperty = false;
                        } else {
                            root = new HashMap<String, Object>();
                        }
                        currentMap = root;

                        for(int i = 1; i < properties.length; i++) {
                            if(i == properties.length - 1) {
                                currentMap.put(properties[i],
                                        systemConfig.getProperty(key));
                            } else {
                                if(i == 1 && root.containsKey(properties[i])) {
                                    currentMap = (Map) root.get(properties[i]);
                                } else if(currentMap
                                        .containsKey(properties[i])) {
                                    currentMap = (Map) currentMap
                                            .get(properties[i]);
                                } else {
                                    Map<String, Object> newMap = new HashMap<String, Object>();
                                    currentMap.put(properties[i], newMap);
                                    currentMap = newMap;
                                }
                            }
                        }
                        if(properties.length > 0 && newProperty) {
                            config.put(properties[0], root);
                        }
                    }
                }
            }
        } catch(Exception e) {
            e.printStackTrace();
        }
        response.setEventName(LOAD_CONFIG);
        response.setData(objectWriter.writeValueAsString(config));

        LOGGER.debug("{}{}", RESPONDING_PREFIX, reqId);
        return response;
    }

}
