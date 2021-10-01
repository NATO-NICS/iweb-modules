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
define(["iweb/CoreModule", "iweb/modules/MapModule", "../Interactions", "./MarkerWindow",
		"./MarkersDefs", "ol", "nics/modules/UserProfileModule"],
		function(Core, MapModule, Interactions, MarkerWindow, markersDefs, ol, UserProfile) {

	return Ext.define("drawmenu.SymbologyController", {
		extend: 'Ext.app.ViewController',
		alias: "controller.drawmenu.symbology",

		/** Holds symbology entries fetched from the api */
		symbologies: [],

		init: function() {
			this.fetchSymbology();
		},

		/**
		 * Makes an ajax request to the Symbology endpoint to request Symbology enabled for
		 * the Org the user is in.
		 */
		fetchSymbology: function() {
			var endpoint = Core.Config.getProperty("endpoint").rest;
			var url = Ext.String.format("{0}/symbology/org/{1}",
				endpoint,
				UserProfile.getOrgId());

			Ext.Ajax.request({
				url: url,
				method: 'GET',
				headers: { 'Content-Type': 'application/json' },
				scope: this,
				success: function(resp) {
					var respObj;
					if(resp && resp.status === 200) {
						respObj = this.decode(resp.responseText);
					} else {
						Ext.Msg.alert(Core.Translate.i18nJSON("Symbology Error"), this.buildErrorMessage(resp));
						return;
					}

					if(resp.status === 200 && respObj !== null) {
						this.handleSymbology("symbology", respObj);
					} else {
						Ext.Msg.alert(Core.Translate.i18nJSON("Symbology Error"), this.buildErrorMessage(resp));
					}

				},
				failure: function(res) {
					if(res && res.timedout && res.timedout === true) {
						Ext.Msg.alert(Core.Translate.i18nJSON("Symbology Error"),
							Core.Translate.i18nJSON("Server timed out fetching Symbologies."));
						return; // TODO: fire event for re-querying?
					}

					Ext.Msg.alert(Core.Translate.i18nJSON("Symbology Error"), this.buildErrorMessage(res));
				}
			});

		},

		/**
		 * Handles the response for a get request to the Symbology Endpoint. Populates the local symbologies
		 * array if found, otherwise notifies user of No active Symbologies.
		 *
		 * @param {Object} evt Event that fired this handler
		 * @param {Object} symbologyResponse the SymbologyResponse from the em-api
		 */
		handleSymbology: function(evt, symbologyResponse) {
			var symbologies = symbologyResponse.symbologies;
			if(symbologies && symbologies.length > 0) {
				this.populateSymbologies(symbologies);
			} else {
				Ext.Msg.alert(Core.Translate.i18nJSON("Symbology"),
					Core.Translate.i18nJSON("No Symbologies are enabled for your Organization (or none exist)"));
			}
		},

		/**
		 * Sets the local symbologies property with the given symbologies, as well as fires the
		 * iweb.symbology.load event.
		 *
		 * @param {[]} symbologies JSON array of symbologies
		 */
		populateSymbologies: function(symbologies) {
			this.symbologies = symbologies;
			// TODO: could push the symbologies here
			Core.EventManager.fireEvent("iweb.symbology.load", {"loaded":true});
		},

		/**
		 Utility method for decoding a jsonString into a json object

		 @function decode

		 @param {string} jsonString - a json string

		 @return {Object} - a JSON object initialized from the jsonString if successful, null otherwise
		 */
		decode: function(jsonString) {
			var json;
			try {
				json = Ext.JSON.decode(jsonString);
			} catch(e) {
				json = null;
			}

			return json;
		},

		/**
		 Utility method for building error messages from AJAX request responses

		 @function buildErrorMessage

		 @param {Object} response - a response object returned by the AJAX call

		 @return {string} - An appropriate message based on error, message, and status code
		 contained in the response object
		 */
		buildErrorMessage: function(response) {
			if(!response || response === null || response === "") {
				return Core.Translate.i18nJSON("Undefined response");
			}

			var status = response.status;
			var respObj = this.decode(response.responseText);
			var message = "";

			if(respObj && respObj !== null) {

				if(respObj.message) {
					message = Ext.String.format("{0} {1}", message, respObj.message);
				}

				if(respObj.error) {
					message = Ext.String.format("{0} {1}", message, respObj.error);
				}

				message = Ext.String.format("{0} ({1})", message, status);
			} else {

				try {
					throw new Error("ERROR");
				} catch(e) {
					console.error("Catching exception to debug comm failure below");
				}

				if(response.statusText) {
					message = Ext.String.format("{0}: {1} ({2}: {3})",
						Core.Translate.i18nJSON("Problem with response from server"),
							response.statusText, Core.Translate.i18nJSON("status"), status);
				} else {
					message = Ext.String.format("{0}: {1}",
						Core.Translate.i18nJSON("Unknown response from server with status"), status);
				}
			}

			return message;
		},

		/**
		 * Getter for the symbologies property.
		 *
		 * @return {[]}
		 */
		getSymbologies: function() {
			return this.symbologies;
		}

	});

});