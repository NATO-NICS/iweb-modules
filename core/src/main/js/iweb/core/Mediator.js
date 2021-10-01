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
define(["ext", "jquery", "atmosphere", "./EventManager", "./Util", "./Config"], 
		function(Ext, jQuery, atmosphere, EventManager, Util, Config) {
    "use strict";

    var _mediator = null;

    var ws = null;
    
    var sessionId = null;
    
    var currentUserSessionId = null;

    var SUCCESS = "Success";
    
    var NOT_LOGGED_IN = "not_logged_in";

    var message = "/mediator";
    
    var messageQueue = [];
    
    var topics = []; //maintain a list of topics for reinitialization
    
    var initiated = false;
    
    var timeOfDisconnect = null;
    
    var requestLogging = false;
    
    var config = null;
    
    var reqLogLevel = 'info';

    
    function Mediator() {}

    function init(initTopics) {
    
    	var onConfig = function(evt, payload) {
        	config = payload;        	
        	
        	if(config && config.logging && config.logging.request && config.logging.request === 'true') {
        		EventManager.fireEvent('iweb.logger.log.debug', ["Setting requestLogging to: " + config.logging.request]);
        		requestLogging = true;
        	} else {
        		requestLogging = false;
        	}
        	
        	// TODO: NOTE, it's too late to set this here, so unless we delay, can't
        	// alter the request object's logLevel
        	if(config.atmosphere) {
        		try {
        			reqLogLevel = config.atmosphere.logging.level;
        			EventManager.fireEvent('iweb.logger.log.info', ["Set logging level to: " + reqLogLevel]);
        		} catch(e) {
        			// properties file doesn't have logging property, can't set it        			
        			EventManager.fireEvent('iweb.logger.log.warn', 
        					["Config file missing property: atmosphere.logging.level. Setting to default of 'info'"]);
        			reqLogLevel = "info";
        		}
        	}
        };
    	        
    	EventManager.addListener('iweb.config.loaded', onConfig);
    	
    	_mediator = new Mediator();

        var socket = atmosphere;
        
        var request = { 
        	url: 'mediator',
 	        contentType : "application/json", 	        
 	        logLevel : reqLogLevel,	// TODO: nics-314 make configurable on the fly
 	        transport : 'websocket' ,
 	        trackMessageLength : true,
 	        reconnectInterval : 5000,
 	        fallbackTransport: 'long-polling',
 	        maxReconnectOnClose : 17280, //24 hours -- whatever the token expiration is...
 	        closeAsync: true //synchronous close call locks IE on connection drop
 	    };
         
		request.onOpen = function(){
			if(!initiated){
				_mediator.setTimeOfDisconnect(null);
				initiated = true;
				if(initTopics){
					_mediator.subscribe(initTopics);
				}
				//Load the config once the websocket is established
				_mediator.sendMessage({ type: "config" });
			}else{
				_mediator.onReconnect();
			}
		};
 	
 		request.onError = function(error){
 			_mediator.onDisconnect();
 		};
 		
 		request.onClose = function(error){
 			_mediator.onDisconnect();
 		};
 		
 		request.onReconnect = function(){
 			var onReconnect = 'reconnect';
 		};
 		
 		request.onReopen = function(){
 			//var onReopen = 'reconnect';
 			_mediator.onReconnect();
 		};
 		
 		var onResponse = function(response) {
 			var responseBody = response.responseBody; //JSON string

			if(!responseBody || responseBody === "") {
				// No message to process?
				return;
			}

			var message = JSON.parse(responseBody);

 	 		if(requestLogging) {
 	 			EventManager.fireEvent('iweb.logger.log.debug', 
 	 					[Ext.String.format("!!! Response with requestId: {0}", message.requestId), message]);
        	}
 	 		
            if (message.data != null) { //Check to see if there is data
            	if(message.responseType == "json"){
            		try{
            			message.data = JSON.parse(message.data);
            		}catch(e) {
            			EventManager.fireEvent('iweb.logger.log.warn',
							["Expected message.data to be valid JSON", e]);
            		}
            	}
                EventManager.fireEvent(message.eventName, message.data);
            }else if(message.errorMessage){
            	Ext.MessageBox.alert('Error', message.errorMessage);
            }
 		};
 		
 		request.onMessage = onResponse;
 		request.onMessagePublished = onResponse;
 		
 		ws = socket.subscribe(request);
    };
        
    Mediator.prototype.setTimeOfDisconnect = function(time){
    	timeOfDisconnect = time;
    };
    
    Mediator.prototype.onReconnect = function(){
    	if(timeOfDisconnect != null){
			//Fire reconnect event
			EventManager.fireEvent("iweb.connection.reconnected", timeOfDisconnect);
	    	
			var completed = true;
	    	
	    	this.setTimeOfDisconnect(null);
			
			//Send queued messages
			for(var i=0; i<messageQueue.length; i++){
				//Connection was lost again
				if(!this.sendMessage(messageQueue[i])){
					completed = false;
					break;
				}
			}
			
			if(completed){
				messageQueue = []; //reset
			}else{
				messageQueue.splice(0,i); //remove successfully sent messages
			}
			
			for(var j=0; j<topics.length; j++){
				this.subscribe(topics[j]);
			}
    	}
    };
    
    Mediator.prototype.onDisconnect = function(){
    	this.setTimeOfDisconnect((new Date()).getTime());
    	EventManager.fireEvent("iweb.connection.disconnected");
    };
    
    Mediator.prototype.close = function(){
    	atmosphere.unsubscribe();
    };

    //Set rest api
    Mediator.prototype.setRestAPI = function(url) {
        this.restApiUrl = url;
    };

    //Return configured rest api url
    Mediator.prototype.getRestAPI = function() {
        return this.restApiUrl;
    };

    //Send Message on Rabbit Bus
    Mediator.prototype.sendMessage = function(message) {
    	if(message) {
    		var reqid = Util.generateUUID();
    		if(requestLogging) {
    			EventManager.fireEvent('iweb.logger.log.debug', ["Attaching client-side requestId to message: ", reqid, message]);
    		}
    		message.requestId = reqid;
    	}
    	
    	if(timeOfDisconnect == null){
    		ws.push(JSON.stringify(message));
    		return true;
		}else{
			messageQueue.push(message);
		}
    	return false;
    };
    
    Mediator.prototype.publishMessage = function(topic, message){
    	this.sendMessage({
			type: "publish",
			message: JSON.stringify(message),
			topic: topic
		});
    };

    //Subscribe to Message Bus
    Mediator.prototype.subscribe = function(topic) {
    	if(jQuery.inArray(topic, topics) == -1) { topics.push(topic); }
        this.sendMessage({ type: "subscribe", topic: topic });
    };

    //Unsubscribe from Message Bus
    Mediator.prototype.unsubscribe = function(topic) {
    	var index = jQuery.inArray(topic, topics);
    	if(index != -1){ topics.splice(index,1); }
    	
        this.sendMessage({ type: "unsubscribe", topic: topic });
    };
    
    Mediator.prototype.attachHandlers = function(eventName, request){
    	var _eventName = eventName;
    	var handleSuccessResponse = function(response, opts){
	    	try{
	     		var message = JSON.parse(response.responseText);
	     		if(!Ext.isEmpty(message)){
	        		EventManager.fireEvent(_eventName, message);
	        	}
	        }catch(e){
	        	//Log error...
	        	if(response.responseText){
	        		EventManager.fireEvent(_eventName, response.responseText);
	        	}
	        }
	    };
    
    	var handleFailureResponse = function(response, opts){
    		try{
	     		var message = JSON.parse(response.responseText);
	     		if(!Ext.isEmpty(message)){
	        		EventManager.fireEvent(_eventName, message);
	        	}
	        }catch(e){
	        	//Log error...
	        	if(response.responseText){
	        		EventManager.fireEvent(_eventName, response.responseText);
	        	}
	        }
	    };
    
    	request.success = handleSuccessResponse;
    	request.failure = handleFailureResponse;
    	
    	if(!request.headers) { request.headers = {}; };
    	//CAN WE REMOVE THIS?
    	request.headers['requestid'] = Util.generateUUID();	
    	return request;
	};
    
    // Send delete message to the rest api
	Mediator.prototype.sendDeleteMessage = function(url, eventName, responseType) {
		Ext.Ajax.request(this.attachHandlers(eventName, {
			url: url,
			method: 'DELETE'
		}));
	};
    
    // Send post message to the rest api
	Mediator.prototype.sendPostMessage = function(url, eventName, payload, responseType) {
		var request = {
			url: url,
			jsonData: payload,
		    method: 'POST'
		};
		
		if(!responseType || responseType.indexOf('json')){
			request.headers = { 'Content-Type': 'application/json' };
		}
	
		Ext.Ajax.request(this.attachHandlers(eventName, request));
	};

	// Send PUT message to the rest api
	Mediator.prototype.sendPutMessage = function(url, eventName, payload, responseType) {
		var request = {
			url: url,
			jsonData: payload,
			method: 'PUT'
		};

		if(!responseType || responseType.indexOf('json')){
			request.headers = { 'Content-Type': 'application/json' };
		}

		Ext.Ajax.request(this.attachHandlers(eventName, request));
	};


	//Send request message to rest api
    Mediator.prototype.sendRequestMessage = function(url, eventName, responseType){
    	Ext.Ajax.request(this.attachHandlers(eventName, { url: url }));
    };

    Mediator.prototype.setSessionId = function(id){
		sessionId = id;
	};
		
	Mediator.prototype.getSessionId = function(){
		return sessionId;
	};
	
	Mediator.prototype.setReinitalizeUrl = function(url){
		ws.request.url = url;
	};
	
	/*** NEED TO MOVE THIS OUT ***/
	Mediator.prototype.setCurrentUserSessionId = function(id){
		currentUserSessionId = id;
	};
		
	Mediator.prototype.getCurrentUserSessionId = function(){
		return currentUserSessionId;
	};
	/****************************/
	
		
    return {
        initialize: function(initTopics, callback) {
            init(initTopics, callback);
        },

        getInstance: function() {
            if (_mediator) {
                return _mediator;
            }
            //throw not initialized exception
        }
    };
});
