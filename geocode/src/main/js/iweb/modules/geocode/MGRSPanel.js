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
 define(["iweb/CoreModule","./AbstractPanel", './CoordinateController', 'usng.js'],
	function(Core, AbstractPanel, CoordinateController, USNG) {
	 
	return Ext.define('modules.geocode.MGRSPanel', {
		extend: 'modules.geocode.AbstractPanel',
		
		controller: 'geocode.coordinatecontroller',
		
		title: Core.Translate.i18nJSON('USNG / MGRS'),
		tooltip: Core.Translate.i18nJSON('US National Grid System (USNG) / Military Grid Reference System (MGRS)'),

		defaults: {
			labelWidth: 70
		},
		
		items:[{
			xtype: 'textfield',
			fieldLabel: Core.Translate.i18nJSON('MGRS'),
			reference: 'mgrs',
			msgTarget : 'side',
			maskRe: /[a-zA-Z0-9]/,
			stripCharsRe: /[^a-zA-Z0-9]/
		},{
			xtype: 'displayfield',
			value: ''
		},{
			html:  Core.Translate.i18nJSON('<b>Example:</b> 17TMH7737560452'),
			border: false
		}],
		
		initComponent: function() {
			this.callSuper();
			
			this.converter = new USNG.Converter();
		},
		
		getFormattedLocation: function() {
			return this.lookupReference('mgrs').getValue();
		},
		
		getCoordinate: function() {
			var mgrs = this.lookupReference('mgrs').getValue();
			var ll = this.converter.USNGtoLL(mgrs, true);
			return [ll.lon, ll.lat];
		},

		setCoordinate: function(coord) {
			var lng = coord[0],
				lat = coord[1];
			
			var mgrs = this.converter.LLtoMGRS(lat, lng, 5);
			this.lookupReference('mgrs').setValue(mgrs);
		}
	});
});
