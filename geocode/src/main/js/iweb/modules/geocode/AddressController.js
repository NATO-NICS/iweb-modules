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
	
		return Ext.define('modules.geocode.AddressController', {
			extend : 'modules.geocode.AbstractController',
			
			alias: 'controller.geocode.addresscontroller',
			
			onSearchClick: function() {
				var address = this.getView().getAddressInput().getValue();
				var restrict = this.getView().getRestrictionCheckbox().getValue();
				this.osmGeocode(address, restrict);
			},

			/**
				@param  address - A free text search to attempt to geocode
				@param restrict - boolean, restrict search to viewport if true
			*/
			osmGeocode: function(address, restrict) {

				// Get map view
				var map = MapModule.getMap();
				var ext = map.getView().calculateExtent();
				var proj = ol.proj.getTransform(map.getView().getProjection(), 'EPSG:4326');
				var extent = ol.extent.applyTransform(ext, proj);

				var viewbox = Ext.String.format("{0},{1},{2},{3}", extent[0],extent[1],extent[2],extent[3]);

				// TODO: should sanitize the address input
				var _this = this;
				var url = Ext.String.format('https://nominatim.openstreetmap.org/search/{0}', address);
				Ext.Ajax.request({
				  method: 'GET',
				  url: url,
				  useDefaultXhrHeader: false,
				  params: {
					format: 'json',
					limit: 2, // TODO: no need to specify this if we aren't going to show results to pick from, default is 10
					bounded: restrict ? 1 : 0,
					viewbox: viewbox
				  },
				  success: function(response, opts) {
					var status;
					if(response) {
						status = response.status;
					} else {
						status = "No response";
					}
					var json = Ext.decode(response.responseText);
					if (json) {
					  _this.osmGeocodeCallback(json, response.status);
					} else {
						Ext.Msg.alert("Geocode", Ext.String.format("Error! ({0})", status));
					}
				  },
				  failure: function(response) {
					var json = Ext.decode(response.responseText);
					if(json) {
						if(console) {
							console.log("Geocode failed with response: ", json);
						}
					}
					Ext.Msg.alert("Geocode", Ext.String.format("Request failed! ({0})", response.status));
				  }
				});

			},

			/**
				@param results Result object from OSM
				@param status Status code from OSM
			*/
			osmGeocodeCallback: function(results, status) {

				/* Response example:
					boundingbox: (4) ["48.8574753", "48.8590465", "2.2933084", "2.2956897"]
					class: "tourism"
					display_name: "Eiffel Tower, 5, Avenue Anatole France, Gros-Caillou, 7th Arrondissement, Paris, Ile-de-France, Metropolitan France, 75007, France"
					icon: "https://nominatim.openstreetmap.org/images/mapicons/poi_point_of_interest.p.20.png"
					importance: 0.7537721029714171
					lat: "48.8582602"
					licence: "Data © OpenStreetMap contributors, ODbL 1.0. https://osm.org/copyright"
					lon: "2.29449905431968"
					osm_id: "5013364"
					osm_type: "way"
					place_id: "69121935"
					type: "attraction"
				*/

				if(status && status === 200) {
					if(results && Array.isArray(results) && results.length > 0) {
						// TODO: For now just taking first result... but really should offer result list?
						var result = results[0];
						var lat = parseFloat(result.lat);
						var lon = parseFloat(result.lon);

						var bb = [];
						for(i = 0; i < 4; i++) {
							bb[i] = parseFloat(result.boundingbox[i]);
						}

						this.jumpToResultFeature(lat, lon, bb, result.display_name);

					} else {
						Ext.Msg.alert("Geocode", "No results!");
					}
				} else {
					Ext.Msg.alert("Geocode", Ext.String.format("Problem geocoding, received HTTP Status code: {0}",
						status));
				}

			},

			/**
				@param locateResponse An object with a location property containing lat and lng properties
				@param feature the feature created on the map used to get the location object
			*/
			osmReverseGeocode: function(locateResponse, feature) {
				var location = locateResponse.location;
				var _this = this;
				var url = 'https://nominatim.openstreetmap.org/reverse';
				Ext.Ajax.request({
				  method: 'GET',
				  url: url,
				  useDefaultXhrHeader: false,
				  params: {
					format: 'json',
					lat: location.lat,
					lon: location.lng
				  },
				  success: function(response, opts) {
					var status;
					if(response) {
						status = response.status;
					} else {
						status = "No response";
					}
					var json = Ext.decode(response.responseText);
					if (json) {
					  _this.osmReverseGeocodeCallback(json, response.status, feature);
					} else {
						Ext.Msg.alert("Geocode", Ext.String.format("Error! ({0})", status));
					}
				  },
				  failure: function(response) {
					var message = "Geocode failed. ";
					var status;
					var json;
					if(response) {
						status = response.status;
						json = Ext.decode(response.responseText);
						if(json) {
							if(json.error && json.error.message) {
								message = Ext.String.format("{0}Error: {1}", message, json.error.message);
							}
						} else {
							message = Ext.String.format("{0}Error: {1}", message, status);
						}
					}

					if(console) {
						console.log("Geocode response failure:", response);
					}
					Ext.Msg.alert("Geocode", message);
				  }
				});
			},

			osmReverseGeocodeCallback: function(results, status, feature) {
				var address = results.display_name;
				this.getView().getAddressInput().setValue(address);
				feature.set("description", address);
			},

			jumpToResultFeature: function(lat, lon, boundingbox, address) {
				var map = MapModule.getMap();
				var view = map.getView();

				var loc = {lat: lat, lng: lon};
				var point = this.buildPoint(loc, view);
				var feature = this.buildFeature(point, address);
				this.plotFeature(feature);

				// bbox: south Latitude, north Latitude, west Longitude, east Longitude
				var neLoc = {lat: boundingbox[1], lng: boundingbox[3]};
				var swLoc = {lat: boundingbox[0], lng: boundingbox[2]};
				var nePt = this.buildPoint(neLoc, view);
				var swPt = this.buildPoint(swLoc, view);
				var extent = ol.extent.boundingExtent([nePt.getCoordinates(), swPt.getCoordinates()]);
				MapModule.getMapController().zoomToExtent(extent);
			},
			
			buildPoint: function(loc, view) {
				return new ol.geom.Point([loc.lng, loc.lat])
					.transform(ol.proj.get('EPSG:4326'), view.getProjection());
			},
			
			onLocateCallback: function(feature) {
				feature.setProperties({
					type: 'Geocoded Location'
				});
				
				var view = MapModule.getMap().getView();
				var clone = feature.getGeometry().clone()
					.transform(view.getProjection(), ol.proj.get('EPSG:4326'));
				var coord = clone.getCoordinates();

				this.osmReverseGeocode({'location': {'lat': coord[1], 'lng': coord[0]}}, feature);
			}
		});
});
