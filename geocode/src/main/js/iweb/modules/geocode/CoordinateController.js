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
define(['ext', 'ol', "iweb/modules/MapModule", "./AbstractController"], 
	function(Ext, ol, MapModule, AbstractController){
	
		return Ext.define('modules.geocode.CoordinateController', {
			extend : 'modules.geocode.AbstractController',
			
			alias: 'controller.geocode.coordinatecontroller',
			
			onSearchClick: function() {
				var formProjection = this.getView().getProjection();
				if (!formProjection) {
					Ext.Msg.alert('Search', 'Search requires a projection');
					return;
				}

				var coord = this.getView().getCoordinate();
				if (!coord || Number.isNaN(coord[0]) || Number.isNaN(coord[1]) ) {
					Ext.Msg.alert('Search', 'Search requires a valid coordinate');
					return;
				}
				var descr = this.getView().getFormattedLocation();

				var mapView = MapModule.getMap().getView();
				var mapProjection = mapView.getProjection();
				
				var point = this.buildPoint(coord, formProjection, mapProjection);
				var feature = this.buildFeature(point, descr);
				this.plotFeature(feature);
				
				mapView.setCenter(point.getCoordinates());
			},
			
			onLocateCallback: function(feature) {			
				var formProjection = this.getView().getProjection();
				if (!formProjection) {
					return;
				}

				var mapProjection = MapModule.getMap().getView().getProjection();

				var clone = feature.getGeometry().clone()
					.transform(mapProjection, formProjection);
				var coord = clone.getCoordinates();
				this.getView().setCoordinate(coord);
				
				var descr = this.getView().getFormattedLocation();
				feature.setProperties({
					type: 'Geocoded Location',
					description: descr
				});

				//turn off our drawing interaction
				var controller = MapModule.getMapController();
				controller.setInteractions(controller.getDefaultInteractions());
			}
		});
});
