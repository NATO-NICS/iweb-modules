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
define(['iweb/CoreModule', "ext", "loglevel",
 		"nics/modules/UserProfileModule"], 

	function(Core, Ext, loglevel, UserProfile) {
		
	
		/** Local copy of the Core config object */
		var coreConfig = null;			
				
		/**
		 * Whether or not to prepend a timestamp
		 * Set by the logging.prefix.timestamp property.
		 */
		var prependTimestamp = false;
		
		/**
		 * Whether or not to prepend the specified prefix to all logged messages
		 * Set by the logging.prefix.use property.
		 */
		var usePrefix = false;
		
		/**
		 * String content to prepend to logged messages
		 * Can be overridden by logging.prefix.content property
		 */
		var prefixContent = "IWEB -";
		
		/** 
		 * Holds log level. Whatever is set here will be set on the logger until
		 * a value is loaded from the config. Can be: error, warn, info, debug, trace.
		 * Set by the logging.level property.
		 */
		var level = "warn";
		
		/**
		 * Human readable level mappings
		 */
		var levels = "0=trace, 1=debug, 2=info, 3=warn, 4=error, 5=silent";
		
		/**
		 * Mapping of log level to its integer representation
		 */
		var levelMap = {"trace":0, "debug":1, "info":2, "warn":3, "error":4};
				
		/** 
		 * Flag for whether or not to publish the log message to the logger endpoint of the API.
		 * Set by the logging.remote property 
		 */
		var remote = false;
		
		/** Holds the logtypes */
		var logtypes = null;
		
		/** Flag for whether the controller has initialized certain required properties */
		var inited = false;
		
		/** Flag for whether the UserProfile.LOADED event has been received */
		var profileLoaded = false;
		
		/** Array for storing queued up log requests */
		var logQueue = [];
		
		/** Array for storing queued up log event requests */
		var logEventQueue = [];
		
		/** Holds the current user's userSessionId, retrieved from the UserProfile */
		var userSessionId;
		
		/** Flag for whether or not to publish caught errors to the API. Only takes action if the 'logger.onerror'
		 *  property is set to true. Populated by the logger.publisherrors property.
		 */
		var publishErrors;
			
		/**
		 * Logging level to set on LoggerController.simpleLog(). Default is it will log
		 * if the proper log level is less than info. Mostly for internal logger debugging.
		 */
		var simpleLogLevel = "debug";
		
		/**
		 * LoggerController
		 */
		var LoggerController = function() {
						
			// Sets the third-party loglevel object to a LoggerController member
			log = loglevel;
			
			this.simpleLog("Initializing LoggerController....");			
			this.simpleLog(Ext.String.format("Initial level is: {0} - ({1})", log.getLevel(), levels));
		};
		
		
		/**
		 * Subscribe to events
		 */
		LoggerController.prototype.bindEvents = function() {			
			Core.EventManager.addListener(UserProfile.PROFILE_LOADED, this.populateModel.bind(this));
			Core.EventManager.addListener("iweb.config.loaded", this.onLoadConfig.bind(this));
			
			// TODO: make all event/topics Constants, and use proper naming scheme
			Core.EventManager.addListener("iweb.logger.remotelog", this.onRemoteLog.bind(this));
			Core.EventManager.addListener("iweb.logger.logtypes", this.onLogTypes.bind(this));
			Core.EventManager.addListener("iweb.logger.isconfigured", this.checkAndPublishQueue.bind(this));
			
			// Register multiple log levels with same logging handler
			Core.EventManager.addListener("iweb.logger.log.trace", this.handleLoggerEvent.bind(this));
			Core.EventManager.addListener("iweb.logger.log.debug", this.handleLoggerEvent.bind(this));
			Core.EventManager.addListener("iweb.logger.log.info", this.handleLoggerEvent.bind(this));
			Core.EventManager.addListener("iweb.logger.log.warn", this.handleLoggerEvent.bind(this));
			Core.EventManager.addListener("iweb.logger.log.error", this.handleLoggerEvent.bind(this));
		};

		
		/** 
		 * Callback handler for the UserProfile.PROFILE_LOADED event 
		 */
		LoggerController.prototype.populateModel = function(e, userProfile) {
			//this.simpleLog("Got user profile loaded event, and usersession id is: " + UserProfile.getUserSessionId());
			userSessionId = UserProfile.getUserSessionId();
			profileLoaded = true;
			
			if(inited === true) {
				Core.EventManager.fireEvent("iweb.logger.isconfigured", {"configured":true});
			}
		};
		
		
		/**
		 * Validates the logLevel argument. Must be one of:
		 * 		trace, debug, info, warn, error, silent
		 * 
		 * @return true if specified level matches one of the allowed values, false otherwise
		 */
		LoggerController.prototype.validateLevel = function(logLevel) {
			if(!logLevel) {
				return false;
			}
			
			if(logLevel === "trace" || logLevel === "info" || logLevel === "warn" || logLevel === "error" || 
					logLevel === "debug" || logLevel === "silent") {
				return true;
			}
			
			return false;
		};
		
		
		LoggerController.prototype.validateRemoteLogTypes = function(logLevel) {
			if(!logLevel || !logLevel.name) {
				return false;
			}
			
			logLevel = logLevel.name.toLowerCase();
			
			if(logLevel === "trace" || logLevel === "info" || logLevel === "warn" || logLevel === "error" || 
					logLevel === "debug" || logLevel === "exception") {
				return true;
			}
			
			return false;
		};
		
		
		/**
		 * Process logger related configuration properties
		 */
		LoggerController.prototype.onLoadConfig = function(e, config) {
			coreConfig = config;
			
			// Initialize mediator
			mediator = Core.Mediator.getInstance();
			
			if(config.logging) {
				
				if(config.logging.simple) {
					this.simpleLog("Read simple logging level property: ", config.logging.simple.level);
					if(this.validateLevel(config.logging.simple.level) === true) {
						simpleLogLevel = config.logging.simple.level;
					} else {
						this.simpleLog("WARNING: Specified logging.simple.level invalid. Default of 'debug' will be used.", 
								config.logging.simple.level);
					}
				}
				
				this.simpleLog("Read logging level property: ", config.logging.level);
				if(config.logging.level) {
					level = config.logging.level;
				}
				if(this.validateLevel(level) === true) {
					log.setLevel(level);
				} else {
					this.simpleLog(Ext.String.format("WARNING: Specified level is invalid ({0}). " +
							"Expected: trace, debug, info, warn, error, or silent. Default of 'warn' will be used.", level));
				}
				
				this.simpleLog("Read remote property: ", config.logging.remote);
				if(config.logging.remote && config.logging.remote === 'true') {
					remote = config.logging.remote;
				}
				
				this.simpleLog("Read onerror property: ", config.logging.onerror);
				if(config.logging.onerror && config.logging.onerror === 'true') {
					// TODO: may want separate flag for ability to use the window.onerror
					// 		instead of listening for event topic
					//window.onerror = this.onError.bind(this);
					window.addEventListener('error', this.errorHandler.bind(this));
				}
				
				this.simpleLog("Read publisherrors property: ", config.logging.publisherrors);
				if(config.logging.publisherrors && config.logging.publisherrors === 'true') {
					publishErrors = true;
				}
				
				if(config.logging.prefix) {
					this.simpleLog("Read prefix.use property: ", config.logging.prefix.use);
					if(config.logging.prefix.use && config.logging.prefix.use === 'true') {
						usePrefix = true;
					}
					
					this.simpleLog("Read prefix.timestamp property: ", config.logging.prefix.timestamp);
					if(config.logging.prefix.timestamp && config.logging.prefix.timestamp === 'true') {
						prependTimestamp = true;
					}
					
					this.simpleLog("read prefix.content property: ", config.logging.prefix.content);
					if(config.logging.prefix.content) {
						prefixContent = config.logging.prefix.content;
					}
				}
				
			} else {
				this.simpleLog("WARNING: No logging properties set in core.properties");
			}
			
			mediator.sendRequestMessage(coreConfig.endpoint.rest + '/logger/types', 'iweb.logger.logtypes');
			
		};
		
		
		/**
		 * isConfigured
		 * 
		 * Returns true if
		 * 	- onLoadConfig has been called
		 *  - onLogTypes has been called, and
		 *  - populateModel has been called
		 */
		LoggerController.prototype.isConfigured = function() {
			return inited && profileLoaded;
		};
		
		
		/**
		 * onLogTypes
		 * 
		 * Handler for 'iweb.logger.logtypes' event, which returns the logtype entities from the API.
		 */
		LoggerController.prototype.onLogTypes = function(e, types) {
				
			if(types.types) {
				this.simpleLog("Got remotelogtypes: ", types.types);
				logtypes = types.types;
				for(var i = 0; i < logtypes.length; i++){
					if(!this.validateRemoteLogTypes(logtypes[i])) {
						this.simpleLog("WARNING: One or more invalid remotelogtypes were loaded: " + logtypes);						
						break;
					}
				}
			} else {
				this.simpleLog("WARNING: No remotelogtypes were returned from the database");
			}
			
			// Setting init to true, even if there were errors.
			// An extra logtype in the db shouldn't stop the rest from working
			inited = true;
			
			if(profileLoaded === true) {
				Core.EventManager.fireEvent("iweb.logger.isconfigured", {"configured":true});
			}
		};
		
		
		/**
		 * queue
		 * 
		 * Pushes the specified argsObj onto the logQueue array. This queue
		 * is used for calls to remoteLog that can't be completed due to 
		 * configuration not yet being complete.
		 * 
		 * TODO: probably deprecating in favor of event queue
		 */
		LoggerController.prototype.queue = function(argsObj) {
			logQueue.push(argsObj);
		};
		
		
		/**
		 * queueEvent
		 * 
		 * Pushes the specified argsObj onto the logEventQueue array
		 */
		LoggerController.prototype.queueEvent = function(argsObj) {
			logEventQueue.push(argsObj);
		};
		
		
		/**
		 * checkAndPublishQueue
		 * 
		 * If isConfigured returns true, and there are queued messages to send,
		 * this function iterates over the unsent logs and handles publishing
		 * them to the logger endpoint
		 */
		LoggerController.prototype.checkAndPublishQueue = function() {
			if(this.isConfigured() === true && logQueue.length > 0) {
				this.simpleLog("Queue size: " + logQueue.length);
				for(var i in logQueue) {
					this.simpleLog("Sending queued message...");
					this.remoteLog.apply(this, logQueue[i]);
				}
				this.simpleLog("Clearing queue after sending.");
				logQueue.length = 0;
			}
			
			if(this.isConfigured() === true && logEventQueue.length > 0) {
				this.simpleLog("Event Queue size: " + logEventQueue.length);
				for(var j in logEventQueue) {
					this.simpleLog("Logging queued event message...");
					this.handleLoggerEvent.apply(this, [null, logEventQueue[j]]);
				}
				this.simpleLog("Clearing logEventQueue after sending.");
				logEventQueue.length = 0;
			}
		};
		
		
		/**
		 * onError - Overrides the window.onerror function so it can publish the error
		 * message to the logger endpoint
		 * 
		 * TODO: no longer using, in favor of listening to 'error' event, rather than
		 * 		overriding the window.onerror function. Although, for full browser compatibility,
		 * 		both may need tried and checked to be thorough
		 */
		LoggerController.prototype.onError = function(msg, url, lineNo, columnNo, error) {
			if(console) {
				// Share error with regular console
				console.error(msg, error);
			}
						
			var msg = Ext.String.format("Caught error event: message ({0}), url({1}), line({2}), column({3}), Error: ",
					msg, url, lineNo, columnNo);
				
			if(publishErrors) {
				this.remoteLog(msg, error, "exception");
			}
			
		};
		
		
		/**
		 * errorHandler - Function registered to 'error' event
		 */
		LoggerController.prototype.errorHandler = function(err) {
			var error = err.error;
			var msg = Ext.String.format("Caught error event: message ({0}), url({1}), line({2}), column({3}), Error: ",
					err.message, err.filename, err.lineno, err.colno);
				
			if(publishErrors) {
				this.remoteLog(msg, error, "exception");
			}
		};
		
		
		/**
		 * Receives log event requests, and sends it along to the proper
		 * logging function. Also called directly by checkAndPublishQueue, in which
		 * case 'event' is expected to be null, and is handled differently. 
		 */
		LoggerController.prototype.handleLoggerEvent = function(event, data) {
						
			if(this.isConfigured() === false) {
				this.simpleLog("An event log request arrived while not yet Configured, queuing...");
				this.queueEvent(data);
				return;
			}
						
			switch(event) {
				case 'iweb.logger.log.trace':
					this.trace.apply(this, data);
					break;
				case 'iweb.logger.log.debug':
					this.debug.apply(this, data);
					break;
				case 'iweb.logger.log.info':
					this.info.apply(this, data);
					break;
				case 'iweb.logger.log.warn':
					this.warn.apply(this, data);
					break;
				case 'iweb.logger.log.error':
					this.error.apply(this, data);
					break;
				default:
					this.debug.apply(this, data);
			}
		};
		
		
		/**
		 * simpleLog - Checks if console exists, and if so, calls console.log with the
		 * arguments passed to simpleLog
		 */
		LoggerController.prototype.simpleLog = function() {
			// Only log if the configured simpleLogLevel is at least the same as the set level on the log object
			if(levelMap[simpleLogLevel] >= log.getLevel()) {
				//Broken in FF
				/*if(console) {
					console.log.apply(this, this.modifyArgs(arguments));
				}*/
			}
		};
		
		
		LoggerController.prototype.getLogTypeId = function(name) {
			if(!logtypes || !name) {
				return -1;
			}
			
			var curType;
			for(var i = 0; i < logtypes.length; i++) {
				curType = logtypes[i].name;
				if(curType) {
					curType = curType.toLowerCase();
				}
				
				if(curType === name.toLowerCase()) {
					return logtypes[i].id;
				}
			}
			
			return -1;
		};
		
		
		/**
		 * remoteLog - If the LoggerController is fully initialized/configured, this
		 * function publishes the logged message to the logger endpoint
		 */
		LoggerController.prototype.remoteLog = function() {
			
			if(!this.isConfigured()) {
				this.simpleLog("LoggerController not fully configured yet, queuing remote log request...");
				this.queue(arguments);
				return;
			}
			
			var message = "";
			var status = 0;
			var error = "";
			var logtype = "debug"; // Default to debug
					
						
			try {
				this.simpleLog("Level passed to remoteLog: ", arguments[arguments.length-1]);
				logtype = arguments[arguments.length-1];
			} catch(e) {
				this.simpleLog("Exception attempting to get level parameter", e);
			}
		
			var curArg = null;
			var argsToIter;
			if(toString.call(arguments[0]) === '[object Arguments]') {
				argsToIter = arguments[0];
			} else {
				argsToIter = arguments;
			}
			
			for(var i = 0; i < argsToIter.length; ++i) {
				curArg = argsToIter[i];
									
				if(curArg instanceof Error) {
					error = Ext.JSON.encode({message: curArg.message, stack: curArg.stack});
					logtype = "exception";
					
				} else if(typeof curArg === 'object') {
					message += ((message === "") ? "" : ", ") + Ext.JSON.encode(curArg);
				} else {
					message += ((message === "") ? "" : ", ") + curArg;
				}
			}	
			
			var logtypeid = this.getLogTypeId(logtype);
			if(logtypeid === -1) {
				log.warn("WARNING: Failed to retrieve logtypeid for type '"+logtype+"', so using a default of logtypeid 0 (unknown)!!");
				logtypeid = 0;
			}

        	var logEntity = {
        		//logid: -1, // No need to specify ID, it's a serial field
        		type: logtypeid,
            	message: message,
            	created: Core.Util.getUTCTimestampZ(),
            	username: UserProfile.getUsername(),
            	workspaceid: UserProfile.getWorkspaceId(),
            	usersessionid: UserProfile.getUserSessionId(),
            	error: error
            };
        	
        	try {
        		mediator.sendPostMessage(coreConfig.endpoint.rest + "/logger", "iweb.logger.remotelog", logEntity);
        	} catch(e) {
        		if(console) {
        			console.error("Error making request to send log to logger endpoint", e);
        		}
        	}
        	
		};
		
		
		/**
		 * onRemoteLog - Callback handler for remoteLog function
		 */
		LoggerController.prototype.onRemoteLog = function(e, response) {
			log.trace("Status from remote log request: ", response);
		};		
		
		
		/*
		 * Each of the following pass-through functions for loglevel also
		 * check to add a prefix string, and whether or not to publish the
		 * message via the remoteLog function		 
		 */
		
		/**
		 * info - Pass-through function for log.info
		 */
		LoggerController.prototype.info = function() {
			log.info.apply(this, this.checkModAndRemote(arguments, "info"));
		};
		
		
		/**
		 * debug - Pass-through function for log.debug
		 */
		LoggerController.prototype.debug = function() {
			log.debug.apply(this, this.checkModAndRemote(arguments, "debug"));
		};
		
		
		/**
		 * warn - Pass-through function for log.warn
		 */
		LoggerController.prototype.warn = function() {
			log.warn.apply(this, this.checkModAndRemote(arguments, "warn"));
		};
		
		
		/**
		 * trace - Pass-through function for log.trace
		 */
		LoggerController.prototype.trace = function() {
			log.trace.apply(this, this.checkModAndRemote(arguments, "trace"));
		};
		
		
		/**
		 * error - Pass-through function for log.error
		 */
		LoggerController.prototype.error = function() {
			log.error.apply(this, this.checkModAndRemote(arguments, "error"));
		};
		
		
		/**
		 * checkModAndRemote - Applies the argument modification if it's enabled,
		 * and passes the args to the remoteLog function if the remote property is
		 * true
		 */
		LoggerController.prototype.checkModAndRemote = function(argsObj, level) {
			var newArgs = this.modifyArgs(argsObj);
			
			if(remote) {				
				[].push.call(newArgs, level);
				this.remoteLog.apply(this, newArgs, level);
			}
			
			return newArgs;
		};
		
		
		/**
		 * modifyArgs - If the usePrefix property is true, this function prepends the
		 * prefixContent to the first argument
		 * 
		 * TODO: NOTE: Modifying the arguments object makes it so Javascript VMs can't
		 * 		optimize function calls that do this. So if FULL logging is turned on, it
		 * 		could result in some slowdown. Needs a deep dive testing with timings to
		 * 		to see if there's any noticeable impact.
		 */
		LoggerController.prototype.modifyArgs = function(argsObj) {
			if(argsObj && usePrefix == true) {
				var prefix = ((prependTimestamp===true) ? this.getTimestampPrefix() : "");
				prefix = Ext.String.format("{0}{1} ", prefix, prefixContent);
				
				if(argsObj[0] && typeof argsObj[0] === 'string') {
					argsObj[0] = prefix + argsObj[0];
				} else {
					this.simpleLog("Got object as first param, so breaking down to array and inserting prefix...");
					if(argsObj.length === 1) {
						var arrArgs = [prefix, argsObj[0]];
						return arrArgs;
					} else if(argsObj.length > 1) {
						var arrArgs = Array.prototype.slice.call(argsObj);
						arrArgs.unshift(prefix);
						return arrArgs;
					}
				} 
			}
			
			return argsObj;
		};
		
		
		/**
		 * getTimestampPrefix - Returns the current UTC timestamp, followed by
		 * a hyphen spacer: " - "
		 */
		LoggerController.prototype.getTimestampPrefix = function() {
			return Core.Util.getUTCTimestamp() + " - ";
		};

		return LoggerController;
	
});