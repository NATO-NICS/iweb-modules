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
define(["iweb/CoreModule", "./MarkersDefs", "./SymbologyController"],
        function(Core, MarkersDefs, SymbologyController) {

	return Ext.define(null, {
	       extend: 'Ext.Window',

			SYMBOLOGY_PROPERTY: "endpoint.symbology",

			cls: 'marker-window',
			title: Core.Translate.i18nJSON('Symbology'),
			bodyCls: 'marker-window',
			closeAction: 'hide',
			shadow: false,
			renderTo: Ext.getBody(),
			layout: 'fit',

			x: 155,
			y: 175,	
			
			minWidth: 225,
			width: 445,

			minHeight: 150,
			height: 225,

			controller: 'drawmenu.symbology',

			defs: null,

			symbologyPath: null,
			
			listeners: {
				click: function(event){
					var target = event.target;
					this.component.fireEvent('marker-clicked',
						target.attributes['src'].value, //img
						target.height, //height
						target.width, //width
						target.attributes['data-qtip'].value //description
					);
				},
				element: 'el',
				delegate: 'img',
				scope: "self"
			},

			/**
			 * Implements the initComponent method, initializing the symbologyPath, and registerint listeners.
			 *
			 * @param defs
			 */
			initComponent: function(defs) {
				this.defs = defs;
				this.symbologyPath = Core.Config.getProperty(this.SYMBOLOGY_PROPERTY);
				Core.EventManager.addListener("iweb.symbology.load", this.doBuildTab.bind(this, arguments));
				this.callParent(arguments);
			},

			/**
			 * Utility method that creates a TabPanel, builds the items, and adds the items to the
			 * TabPanel, where the items are individual tab elements populated with symbology.
			 *
			 * @param evt
			 * @param msg
			 */
			doBuildTab: function(evt, msg) {

	       		var symbPanel = this.add({xtype:'tabpanel', reference:'markerTabs'});

				var items = this.buildMarkerTabs();

				/* Our current environment doesn't support 'const' or the Object.entries?
				for (const [key, value] of Object.entries(items)) {
					symbPanel.add(value);
				}*/
				for(var prop in items) {
					if(items.hasOwnProperty(prop)) {
						symbPanel.add(items[prop]);
					}
				}

			},

			/**
			 * Fetches the symbologies via the SymbologyController, and builds
			 * a Tab for every symbology returned.
			 */
		    buildMarkerTabs: function() {
				var tabs = {};
				var symbologies = this.getController().getSymbologies();
				for(var i = 0; i < symbologies.length; i++) {
					var symbology = symbologies[i];
					tabs[symbology.name] = this.buildSymbologyTab(symbology);
				}

				return tabs;
			},

			/**
			 * Creates and returns a Tab Panel view with a tab per symbology.
			 *
			 * @param symbology the SymbologyResponse from the em-api
			 * @return a TabView with a tab per Symbology
			 */
			buildSymbologyTab: function(symbology) {
				return {
					title: Core.Translate.i18nJSON(symbology.name),
					tooltip: Core.Translate.i18nJSON(symbology.description),
					autoScroll: true,

					layoutConfig: {
						columns: 14,
						tableAttrs: {
							cls: 'x-table-layout marker-table',
							style: {
								width: '100%'
							}
						}
					},

					defaults: {
						cellCls: 'marker-cell'
					},

					items: this.buildSymbologies(JSON.parse(symbology.listing))
				};
			},

			/**
			 * Utility method that loops through each Symbology in the listing, and builds a Symbology
			 * container for each one.
			 *
			 * @param symbologyListing the metadata listing of a Symbology (contains a list of filenames
			 * 			and descriptions)
			 *
			 * @return a collection of Symbology container elements
			 */
			buildSymbologies: function(symbologyListing) {
				var symbologyContainers = [];
				var listing = symbologyListing.listing;
				for(var i = 0; i < listing.length; i++) {
					symbologyContainers.push(this.buildSymbology(symbologyListing.parentPath, listing[i]));
				}
				return symbologyContainers;
			},

			/**
			 * Utility method that builds a Container containing img tags for each of the Symbols
			 * found in the given Symbology.
			 *
			 * @param parentPath the directory the Symbology can be found in
			 * @param item the entry in the Symbology listing, which contains a filename and desc property
			 *
			 * @return a Container containing a collection of Symbols shown via img elements
			 */
			buildSymbology: function(parentPath, item) {
				return {
					xtype: 'container',
					autoEl: {
						tag: 'span'
					},

					items: {
						xtype: 'box',
						autoEl: {
							tag: 'img',
							src: Ext.String.format(
								"{0}//{1}/{2}/{3}/{4}",
								location.protocol,
								location.hostname,
								// Symbology path default: /opt/nics/upload/symbology
								this.symbologyPath,
								parentPath,
								item.filename),
							'data-qtip': item.desc === "" ? item.filename : item.desc
						}
					}
				};
			}
	       
	    });
});