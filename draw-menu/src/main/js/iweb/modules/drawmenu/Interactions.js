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
define(['ol', './RotateInteraction'], function(ol, RotateInteraction) {
		
    return {
    	selectBox: function(map, selectedCollection) {

    		var box = new ol.interaction.DragBox({
                  boxEndCondition: ol.events.condition.always
    		});
    		
            box.on("boxend", function(e) {
                if (!ol.events.condition.shiftKeyOnly(e.mapBrowserEvent)) {
                    selectedCollection.clear();
                }

                var extent = box.getGeometry().getExtent(),
                    selectedArray = selectedCollection.getArray(),
                    toSelect = [];

                //check each layer source for intersecting features
                map.getLayers().forEach(function(layer){
                  var source = layer.getSource();
                  if(layer.getVisible() && source.forEachFeatureIntersectingExtent) {
                    source.forEachFeatureIntersectingExtent(extent,
                    function(feature) {
                      if (-1 === selectedArray.indexOf(feature)) {
                        toSelect.push(feature);
                      } else {
                        selectedCollection.remove(feature);
                      }
                    });
                  }
                });
                toSelect.forEach(selectedCollection.push, selectedCollection);
            });
            
            box.on("boxstart", function(e) {
            	var target = e.mapBrowserEvent.map.getTarget();
           		Ext.get(target).addCls("ol-drawbox");
    		});
    		
            box.on("boxend", function(e) {
              var target = e.mapBrowserEvent.map.getTarget();
              Ext.get(target).removeCls("ol-drawbox");
            });
            
            return [box];
	
    	},
    	
    	zoomBox: function() {
    		var zoom = new ol.interaction.DragZoom({
          condition: ol.events.condition.always,
          boxEndCondition: function(mapBrowserEvent, startPixel, endPixel) {
            var target = mapBrowserEvent.map.getTarget();
            Ext.get(target).removeCls("ol-drawbox");

            //we repeat the default dragbox condition
            var width = endPixel[0] - startPixel[0];
            var height = endPixel[1] - startPixel[1];
            return width * width + height * height >= (64);
          }
		    });
    		
            zoom.on("boxstart", function(e) {
            	var target = e.mapBrowserEvent.map.getTarget();
           		Ext.get(target).addCls("ol-drawbox");
    		});
    		
    		return [zoom];
    	},
    	
    	erase: function(source, selectStyle, callback) {
    		var select = new ol.interaction.Select({
    		    style: selectStyle,
    			filter: function(feature, layer) {
    				return source.getFeatureById(feature.getId()) !== null;
    			}
    		});
            var selectedCollection = select.getFeatures();

    		var box = new ol.interaction.DragBox({
          boxEndCondition: ol.events.condition.always
    		});

            //when a box is drawn, add any intersecting features to selection
            box.on("boxend", function(e) {
                selectedCollection.clear();
                var extent = box.getGeometry().getExtent();
                source.forEachFeatureIntersectingExtent(extent, function(feature) {
                    selectedCollection.push(feature);
                });
            });
    		
            //when a feature is selected, fire our callback. buffered for multiple adds
    		selectedCollection.on("add", Ext.Function.createBuffered(function() {
                callback(selectedCollection);
            }, 10));
    		
            box.on("boxstart", function(e) {
            	var target = e.mapBrowserEvent.map.getTarget();
           		Ext.get(target).addCls("ol-drawbox");
    		});
    		
            box.on("boxend", function(e) {
            	var target = e.mapBrowserEvent.map.getTarget();
    			Ext.get(target).removeCls("ol-drawbox");
            });
    		
    		return [select, box];
    	},
    	
    	rotate: function(selectedCollection, style, callback) {
    		var rotate = new RotateInteraction({
    		    style: style,
    		    features: selectedCollection
    		});
			
			rotate.on(["rotatestart"], function(e){
				var feature = e.feature;
				feature.persistChange = false;
				feature.oldGeom = feature.getGeometry().clone();
			});

			rotate.on(["rotateend"], function(e){
				var feature = e.feature;
				/** Note: the Undo/Redo controller needs a single event transition,
				 * so we do a little value juggling to achieve that.
				 */
				
				// hold the new value
				var newGeom = feature.getGeometry().clone();

				// set the old geometry value back
				feature.setGeometry(feature.oldGeom);
				delete feature.oldGeom;

				//enable event handling
				feature.persistChange = true;

				// set the new value back.
				// This ensures the propertychange event has oldValue properly set
				feature.setGeometry(newGeom);
			});

    		rotate.on(["rotate"], function(e){
    			callback(e.feature, e.angle);
    		});

    		return [rotate];
    	},
    	
    	drawRegularPoly: function(source, style, sides, freehand){
    		var draw = new ol.interaction.Draw({
				source: source,
				type: 'Circle',
				geometryFunction: ol.interaction.Draw.createRegularPolygon(sides),
				style: style,
				freehand: freehand
    		});

    		return [draw];
    	},
    	
    	drawPolygon: function(source, style, freehand){
    		var drawMouse = new ol.interaction.Draw({
    		    source: source,
    		    style: function(feature, resolution){
    		    	//draw interaction draws a Polygon and LineString placeholder.
    		    	//purposely don't render LineString during draw
    		    	if(feature.getGeometry().getType() === "LineString"){
    		    		return null;
    		    	}
    		    	return (typeof style === "function") ? style(feature, resolution) : style;
    		    },
				type: /** @type {ol.geom.GeometryType} */ ('Polygon'),
				condition: ol.events.condition.mouseOnly,
				freehand: freehand,
    		    clickTolerance: 1.4,
    		    snapTolerance: 1.5,
    		});

    		var drawTouch = new ol.interaction.Draw({
    		    source: source,
    		    style: function(feature, resolution){
    		    	//draw interaction draws a Polygon and LineString placeholder.
    		    	//purposely don't render LineString during draw
    		    	if(feature.getGeometry().getType() === "LineString"){
    		    		return null;
    		    	}
    		    	return (typeof style === "function") ? style(feature, resolution) : style;
    		    },
				type: /** @type {ol.geom.GeometryType} */ ('Polygon'),
				condition: ol.events.condition.touchOnly,
				freehand: freehand
    		});

    		return [drawMouse, drawTouch];
    	},
    	
    	drawLine: function(source, style, freehand) {
    		var drawMouse = new ol.interaction.Draw({
    		    source: source,
    		    style: style,
				type: /** @type {ol.geom.GeometryType} */ ('LineString'),
				condition: ol.events.condition.mouseOnly,
				freehand: freehand,
    		    clickTolerance: 1.4,
    		    snapTolerance: 1.5
    		});
			
			var drawTouch = new ol.interaction.Draw({
    		    source: source,
    		    style: style,
				type: /** @type {ol.geom.GeometryType} */ ('LineString'),
				condition: ol.events.condition.touchOnly,
				freehand: freehand
    		});

    		return [drawMouse, drawTouch];
    	},
    	
    	drawPoint: function(source, style) {
    		var draw = new ol.interaction.Draw({
    		    source: source,
    		    style: style,
    		    type: /** @type {ol.geom.GeometryType} */ ('Point')
    		});
    		
    		return draw;
    	}
    };

});
