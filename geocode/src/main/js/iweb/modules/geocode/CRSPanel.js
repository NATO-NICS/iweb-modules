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
 define(["iweb/CoreModule","./AbstractPanel", './CoordinateController', 'ol', 'proj4'],
	function(Core, AbstractPanel, CoordinateController, ol, proj4mod) {
	const proj4 = proj4mod.default;

	return Ext.define('modules.geocode.CRSPanel', {
		extend: 'modules.geocode.AbstractPanel',
		
		controller: 'geocode.coordinatecontroller',
		
		title: Core.Translate.i18nJSON('Coordinate Reference System'),
		tooltip: Core.Translate.i18nJSON('Coordinate Reference System'),

		defaults: {
			labelWidth: 70
		},

		//fire events on this component unless otherwise specified
		defaultListenerScope: true,

		items:[{
			xtype: 'fieldcontainer',
			fieldLabel:Core.Translate.i18nJSON('CRS'),
			combineErrors: true,
			msgTarget : 'side',
			layout: 'hbox',
			reference: 'crsGroup',
			
			items: [{
				reference: 'crs',
				flex: 1,

				xtype: 'combobox',
				queryMode: 'remote',
				queryParam: 'q',
				allQuery: '',
		
				displayField: 'name',
				valueField: 'code',
				emptyText:'Search (ex. 3908 or balkans)',
				
				// For the dropdown list
				tpl: Ext.create('Ext.XTemplate',
					'<ul class="x-list-plain"><tpl for=".">',
						'<li role="option" class="x-boundlist-item">EPSG:{code} - {name}</li>',
					'</tpl></ul>'
				),

				// For the content of the text field
				displayTpl: Ext.create('Ext.XTemplate',
					'<tpl for=".">',
						'EPSG:{code} - {name}',
					'</tpl>'
				),

				store: {
					fields: ['code', 'name'],
					proxy: {
						type: 'jsonp',
						url: 'https://epsg.io/?format=json',
						reader: {
							type: 'json',
							rootProperty: 'results',
							totalProperty: 'number_results'
						}
					},
				},

				listeners: {
					'change': 'onCrsChange'
				}
			}]
		}, {
			xtype: 'fieldcontainer',
			fieldLabel:Core.Translate.i18nJSON('Longitude'),
			combineErrors: true,
			msgTarget : 'side',
			layout: 'hbox',
			reference: 'longitudeGroup',
			
			defaults: {
				hideLabel: true,
				
				maskRe: /[0-9\-.]/,
				stripCharsRe: /[^0-9\-.]/,
				
				style: {
					textAlign: 'center'
				}
			},
			items: [{
				xtype: 'textfield',
				reference: 'lng',
				flex: 1
			}]
		}, {
			xtype: 'fieldcontainer',
			fieldLabel:Core.Translate.i18nJSON('Latitude'),
			combineErrors: true,
			msgTarget : 'side',
			layout: 'hbox',
			reference: 'latitudeGroup',
			
			defaults: {
				hideLabel: true,
				
				maskRe: /[0-9\-.]/,
				stripCharsRe: /[^0-9\-.]/,
				
				style: {
					textAlign: 'center'
				}
			},
			items: [{
				xtype: 'textfield',
				reference: 'lat',
				flex: 1
			}]
		}, {
			html:Core.Translate.i18nJSON('<b>Example:</b> 40.72206, -74.00461'),
			border: false
		}],
		
		onCrsChange: function(combo, val, oldval, e) {
			var latitudeGroup = this.lookupReference('latitudeGroup');
			var longitudeGroup = this.lookupReference('longitudeGroup');

			var crs = this.getSelectedCRS();
			if (!crs || crs.kind == 'CRS-GEOGCRS') {
				latitudeGroup.setFieldLabel(Core.Translate.i18nJSON('Latitude'));
				longitudeGroup.setFieldLabel(Core.Translate.i18nJSON('Longitude'));
			} else {
				latitudeGroup.setFieldLabel(Core.Translate.i18nJSON('Y'));
				longitudeGroup.setFieldLabel(Core.Translate.i18nJSON('X'));
			}
		},

		/**
		 * Get the coordinates formatted to the selected CRS
		 */
		getFormattedLocation: function() {
			var proj = this.getProjection();
			return [
				proj.getCode(),
				' ',
			 	this.lookupReference('lat').getValue(),
			 	' ', 
			 	this.lookupReference('lng').getValue()
			 ].join('');
		},
		
		/**
		 * Get the coordinates in our prefered projection.
		 * @see getProjection()
		 */
		getCoordinate: function() {
			var latStr = this.lookupReference('lat').getValue();
			var lat = parseFloat(latStr);
			
			var lngStr = this.lookupReference('lng').getValue();
			var lng = parseFloat(lngStr);
			return [lng, lat];
		},

		/**
		 * Set the coordinates in our prefered projection.
		 * @see getProjection()
		 */
		setCoordinate: function(coord) {
			var lng = coord[0].toString();
			this.lookupReference('lng').setValue(lng);
			
			var lat = coord[1].toString();
			this.lookupReference('lat').setValue(lat);
		},

		/**
		 * Get the currently selected CRS data
		 * @returns The CRS Object or null if none selected
		 */
		getSelectedCRS: function() {
			var combo = this.lookupReference('crs');
			var record = combo.getSelectedRecord();
			if (!record) {
				return null;
			}
			return record.getData();
		},

		/**
		 * Construct an openlayers/proj4 projection from a code and definition
		 * @returns the projection or null if there was a failure
		 */
		buildProjection: function(code, proj4def) {
			var newProjCode = 'EPSG:' + code;
			proj4.defs(newProjCode, proj4def);

			ol.proj.proj4.register(proj4);

			return ol.proj.get(newProjCode);
		},

		/**
		 * Get the projection for this panel.
		 * @returns The currently selected projection or null if none selected
		 */
		getProjection: function() {
			var crs = this.getSelectedCRS();
			if (!crs) {
				return null;
			}
			return this.buildProjection(crs.code, crs.proj4);
		}
	});
});
