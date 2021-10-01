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
define(['ext', 'ol', 'iweb/CoreModule', '@turf/boolean-intersects'], function(Ext, ol, Core, turfBooleanIntersects){
	booleanIntersects = turfBooleanIntersects.default;
	
	return Ext.define('map.DescriptionDetailRenderer', {
		
		constructor: function() {
		},
		
		addBeforePanels: function(container, item) {
			var panels = container.query('panel');
			container.add(item);
			if (panels.length) {
				container.moveBefore(item, panels[0]);
			}
		},

		render: function(container, feature, handled) {
		
			if (!handled) {
				var props = feature.getProperties();
				for (var property in props) {
					var type = typeof props[property];
					if (type != "object") {
						var value = props[property] ? props[property] : "";

						//Replace null string with empty value
						if (value == "null") {
							value = "";
						}

						// check if property contains the time
						if (property === 'timestamp' && value !== "") {
							var date = new Date(value);
							value = date.toISOString();
						}

						if (property.indexOf("OBJECTID") == -1) {

							container.add(new Ext.form.field.Display({
								fieldLabel: Core.Translate.i18nJSON(property),
								value: value
							}));
						}
					}
				}
			}
		

				
			var desc = feature.get('description');
			if (desc) {
				var desc = new Ext.form.field.Display({
					fieldLabel: Core.Translate.i18nJSON('Description'),
					value: desc
				});
				this.addBeforePanels(container, desc);
				
				//make all (non-mailto) links open in a new window
				desc.getEl().select("a:not([href^='mailto'])").set({"target" : "_blank"});
			}


			var geometry = feature.getGeometry();
			if(geometry.getType() === 'Polygon' || geometry.getType() === 'MultiPolygon') {
				var editButton = new Ext.Button({
					text: Core.Translate.i18nJSON("Select Intersecting Features"),
					handler: function() {
						var possiblyIntersecting = Core.Ext.Map.getSource().getFeaturesInExtent(geometry.getExtent());

						var gjFmt = new ol.format.GeoJSON();
						var polyGeoJSON =  gjFmt.writeGeometryObject(geometry);
						var intersecting = possiblyIntersecting.filter(function (f) {
							// exclude the current feature from intersection
							if (feature === f) {
								return false;
							}
							var featureGeoJSON = gjFmt.writeGeometryObject(f.getGeometry());
							return booleanIntersects(polyGeoJSON, featureGeoJSON);
						});

						var selection = Core.Ext.Map.getSelection();
						selection.clear();
						selection.extend(intersecting);

						container.hide();
					}
				});
				this.addBeforePanels(container, editButton);
			}

			return true;
		}
	});

});
