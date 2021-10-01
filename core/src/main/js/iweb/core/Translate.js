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
define(["jquery"], function(jQuery) {
    "use strict";
    
    return function Translate(Mediator, EventManager) {
		var translation;
		var systemLanguages;
		var translationUrl;
		var translationCode;
		var browserLanguage = [];

		function onLanguagesLoaded(evt, data) {
			if (data && data.message && data.message.toLowerCase() === 'success' && data.translations) {
				systemLanguages = data.translations;
				EventManager.fireEvent("iweb.translations.loaded");
			} else {
				alert('There was an error loading the translations!');
			}
		};

		function loadLanguages(url){
			translationUrl = url;
			let codesUrl = translationUrl + '/codes';
			EventManager.addListener('iweb.translations.get', onLanguagesLoaded.bind(this));

			Mediator.getInstance().sendRequestMessage(codesUrl,'iweb.translations.get');
        };
        
        function loadDefaultTranslation(){
	    	var defaultLanguage = getBrowserLanguage();
    		if(defaultLanguage){
    			let found = false;
    			for(var i=0; i<defaultLanguage.length; i++){
					if (systemLanguages) {
						systemLanguages.forEach( (lang) => {
							if (lang.code && lang.code.toLowerCase() === defaultLanguage[i].toLowerCase()) {
								found = true;
								loadTranslation(lang.code);
							}
						});
					}
    			}

    			if (!found) {
    				loadTranslation('en');
				}
    		}
	    };
	    
	    function getBrowserLanguage() {
	    	if(browserLanguage.length == 0){
				//Figure out which ones we have loaded,
				var navigatorLanguage = navigator.languages ? navigator.languages[0] : (navigator.language || navigator.userLanguage);
				
				//remove hyphen
				browserLanguage.push(navigatorLanguage.replace(/-/i, "")); 
				browserLanguage.push(navigatorLanguage.split("-")[0]);
			}
			return browserLanguage;
		};

	    function onTranslationLoaded(evt, data) {
			if (data && data.translations && data.translations.length == 1) {
				let obj = data.translations[0];
				translationCode = obj.code;
				translation = JSON.parse(obj.translations);
				EventManager.fireEvent("nics.translation.loaded");
			}
		}

	    function loadTranslation(code){
	     	// Don't reload if the language has already been loaded
	     	if(code != translationCode){
	     		let url = translationUrl + '/codes/'+ code;
				EventManager.addListener('iweb.translations.code.loaded', onTranslationLoaded.bind(this));
				Mediator.getInstance().sendRequestMessage(url,'iweb.translations.code.loaded');
			}
    	};
    	
    	function selectAnOrg(){
    		if(systemLanguages){
	    		for(var i=0; i<systemLanguages.length; i++){
	    			if(systemLanguages[i].default){
	    				var defaultLanguage = systemLanguages[i];
	    				if(defaultLanguage && defaultLanguage.code && defaultLanguage.selectAnOrg){
			    			return defaultLanguage.selectAnOrg;
			    		}
	    			}
	    		}
	    	}
	    	return "Select an organization for this session";
    	};
        
        return {
	    	
	    	init: function(url){
	    		if(url){
		    		loadLanguages(url);
		    	}
	    	},
	    	
	    	/**
	         * Translate String
	         * @param string
	         */
	        i18nJSON: function(string){
	        	return (translation && translation[string]) ? (translation[string]) : string;
	        }, // i18JSON
	        
	        getSystemLanguages: function() {
	        	if(systemLanguages){
	        		return systemLanguages;
	        	}	
	        	//return languages not loaded error
	        },
	        
	        setDefaultLanguage: function(){
	        	loadDefaultTranslation();
	        },
	        
	        setSystemLanguage: function(code){
	        	loadTranslation(code);
	        },
	        
	        selectAnOrganization: function(){
	        	return selectAnOrg();
	        }
	    };
	};
});