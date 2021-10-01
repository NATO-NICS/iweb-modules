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
define(["iweb/CoreModule", "iweb/modules/MapModule", "../Interactions", "ol"],
		function(Core, MapModule, Interactions, ol) {

	var Relationship = {
		UNKNOWN: 0,
		INTERSECTING: 1,
		ABOVE: 2,
		RIGHT: 4,
		BELOW: 8,
		LEFT: 16
	};

    return Ext.define("drawmenu.FireLineController", {
       extend: 'Ext.app.ViewController',
       alias: "controller.drawmenu.firelinebutton",

       selectedInteraction: null,

       init: function() {

    	   MapModule.getMapStyle().addStyleFunction(this.primaryFirelineStyleFunction.bind(this));
    	   MapModule.getMapStyle().addStyleFunction(this.secondaryFirelineStyleFunction.bind(this));
    	   MapModule.getMapStyle().addStyleFunction(this.actionPointStyleFunction.bind(this));
    	   MapModule.getMapStyle().addStyleFunction(this.completedDozerlineStyleFunction.bind(this));
    	   MapModule.getMapStyle().addStyleFunction(this.proposedDozerlineStyleFunction.bind(this));
    	   MapModule.getMapStyle().addStyleFunction(this.firelineStyleFunction.bind(this));

    	  var defaultTool = this.getView().menu.lookupReference("planned");
    	  this.updateButton(this.getView(), defaultTool);
    	  defaultTool.toggle(true, true);
       },

       updateButton: function(parent, button) {
    	   parent.setIcon(button.icon);
    	   parent.setIconCls(button.iconCls);
    	   parent.setTooltip(button.tooltip);
       },

       onToggle: function(btn, pressed) {
		   if (!pressed) {
				this.hideFreehandButton();
				return;
			}

			if (!this.clickHandler) {
				this.clickHandler = this.onPlannedClick;
			}
			this.clickHandler(btn);
	   },
	   
	   isFreehand: function(callback){
			var freeHandButton = Ext.ComponentQuery.query('freehand-button');
			if (freeHandButton && freeHandButton.length) {
				return freeHandButton[0].pressed;
			}
		},

		setFreehandToggleCallback: function(callback){
			var freeHandButton = Ext.ComponentQuery.query('freehand-button');
			if (freeHandButton && freeHandButton.length) {
				this.hideFreehandButton();
				freeHandButton[0].addToggleCallback(callback);
				this.freehandEnabled = true;
			}
		},

		hideFreehandButton: function(){
			var freeHandButton = Ext.ComponentQuery.query('freehand-button');
			if (freeHandButton && freeHandButton.length && this.freehandEnabled) {
				freeHandButton[0].removeToggleCallback();
				this.freehandEnabled = false;
			}
		},

       onPlannedClick: function(btn) {
			var interactions = this.buildLineInteraction(
    			   "#000000", 7, 'primary-fire-line', btn.tooltip, this.isFreehand());
			Core.Ext.Map.setInteractions(interactions);

			this.setFreehandToggleCallback(function(freehand){
				var interactions = this.buildLineInteraction(
					"#000000", 7, 'primary-fire-line', btn.tooltip, freehand);
				Core.Ext.Map.setInteractions(interactions);
			}.bind(this));

			this.clickHandler = this.onPlannedClick;
			this.updateButton(this.getView(), btn);
			this.getView().toggle(true);
       },

       onSecondaryClick: function(btn) {
			var interactions = this.buildLineInteraction(
    			   "#000000", 5, 'secondary-fire-line', btn.tooltip, this.isFreehand());
			Core.Ext.Map.setInteractions(interactions);

			this.setFreehandToggleCallback(function(freehand){
				var interactions = this.buildLineInteraction(
					"#000000", 5, 'secondary-fire-line', btn.tooltip, freehand);
				Core.Ext.Map.setInteractions(interactions);
			}.bind(this));

			this.clickHandler = this.onSecondaryClick;
			this.updateButton(this.getView(), btn);
			this.getView().toggle(true);
       },

       onCompletedFireClick: function(btn) {
			var interactions = this.buildLineInteraction(
		   		"#000000", 3, undefined, btn.tooltip, this.isFreehand());
			Core.Ext.Map.setInteractions(interactions);

			this.setFreehandToggleCallback(function(freehand){
				var interactions = this.buildLineInteraction(
					"#000000", 3, undefined, btn.tooltip, freehand);
				Core.Ext.Map.setInteractions(interactions);
			}.bind(this));

			this.clickHandler = this.onCompletedFireClick;
			this.updateButton(this.getView(), btn);
			this.getView().toggle(true);
       },

       onSpreadClick: function(btn) {
			var interactions = this.buildLineInteraction(
		   		"#FFA500", 3, undefined, btn.tooltip, this.isFreehand());
			Core.Ext.Map.setInteractions(interactions);

			this.setFreehandToggleCallback(function(freehand){
				var interactions = this.buildLineInteraction(
					"#FFA500", 3, undefined, btn.tooltip, freehand);
				Core.Ext.Map.setInteractions(interactions);
			}.bind(this));

			this.clickHandler = this.onSpreadClick;
			this.updateButton(this.getView(), btn);
			this.getView().toggle(true);
       },

       onActionPointClick: function(btn) {
			var interactions = this.buildLineInteraction(
    			"#FFA500", 7, 'action-point', btn.tooltip, this.isFreehand());
			Core.Ext.Map.setInteractions(interactions);

			this.setFreehandToggleCallback(function(freehand){
				var interactions = this.buildLineInteraction(
    				"#FFA500", 7, 'action-point', btn.tooltip, freehand);
    	   		Core.Ext.Map.setInteractions(interactions);
			}.bind(this));

			this.clickHandler = this.onActionPointClick;
			this.updateButton(this.getView(), btn);
			this.getView().toggle(true);
       },

       onCompletedDozerClick: function(btn) {
			var interactions = this.buildLineInteraction(
    			"#000000", 3, 'completed-dozer-line', btn.tooltip, this.isFreehand());
			Core.Ext.Map.setInteractions(interactions);

			this.setFreehandToggleCallback(function(freehand){
				var interactions = this.buildLineInteraction(
    				"#000000", 3, 'completed-dozer-line', btn.tooltip, freehand);
    	   		Core.Ext.Map.setInteractions(interactions);
			}.bind(this));

			this.clickHandler = this.onCompletedDozerClick;
			this.updateButton(this.getView(), btn);
			this.getView().toggle(true);
       },

       onProposedDozerClick: function(btn) {
			var interactions = this.buildLineInteraction(
    			"#000000", 3, 'proposed-dozer-line', btn.tooltip, this.isFreehand());
			Core.Ext.Map.setInteractions(interactions);

			this.setFreehandToggleCallback(function(freehand){
				var interactions = this.buildLineInteraction(
					"#000000", 3, 'completed-dozer-line', btn.tooltip, freehand);
				Core.Ext.Map.setInteractions(interactions);
			}.bind(this));

			this.clickHandler = this.onProposedDozerClick;
			this.updateButton(this.getView(), btn);
			this.getView().toggle(true);
       },

       onFireEdgeClick: function(btn) {
			var interactions = this.buildLineInteraction(
    			"#000000", 3, 'fire-edge-line', btn.tooltip, this.isFreehand());
			Core.Ext.Map.setInteractions(interactions);

			this.setFreehandToggleCallback(function(freehand){
				var interactions = this.buildLineInteraction(
    				"#000000", 3, 'fire-edge-line', btn.tooltip, freehand);
    	   		Core.Ext.Map.setInteractions(interactions);
			}.bind(this));

			this.clickHandler = this.onFireEdgeClick;
			this.updateButton(this.getView(), btn);
			this.getView().toggle(true);
       },

       buildLineInteraction: function(color, strokeWidth, dashStyle, description, freehand) {
			var interactions = Interactions.drawLine(
    			   Core.Ext.Map.getSource(), Core.Ext.Map.getStyle, freehand);
			interactions.forEach(function(interaction){
				interaction.on("drawstart",
    			   this.onDrawStart.bind(this, color, strokeWidth, dashStyle, description));
			}.bind(this));
    	   		
			return interactions;
       },

       onDrawStart: function(color, strokeWidth, dashStyle, description, drawEvent) {

    	   var feature = drawEvent.feature;
		   feature.setProperties({
			   type: 'sketch',
			   strokeWidth: strokeWidth,
			   strokeColor: color,
			   dashStyle: dashStyle,
			   description: description
		   });
       },

       primaryFirelineStyleFunction: function(feature, resolution, selected) {
			if (! (feature.get('type') === 'sketch'
				&& feature.get("dashStyle") === 'primary-fire-line')) {
				return;
			}

			var strokeColor = feature.get("strokeColor"),
				strokeWidth = feature.get("strokeWidth");

			if (selected) {
				strokeColor = "aqua";
			}

			var style = this.buildDefaultLineStyle();
			var stroke = style.getStroke();
			stroke.setColor(strokeColor);
			stroke.setWidth(strokeWidth);
			stroke.setLineDash([strokeWidth, 20]);
			stroke.setLineCap('butt');

			//we add a non-dashed, nearly invisible line to make
			//hit detection more user friendly
			var invisibleStyle = this.buildDefaultLineStyle();
			invisibleStyle.getStroke().setColor("rgba(0, 0, 0, 0.01)");

			return [invisibleStyle, style];
       },

       secondaryFirelineStyleFunction: function(feature, resolution, selected) {
			if (! (feature.get('type') === 'sketch'
				&& feature.get("dashStyle") === 'secondary-fire-line')) {
				return;
			}

			var strokeColor = feature.get("strokeColor"),
				strokeWidth = feature.get("strokeWidth");

			if (selected) {
				strokeColor = "aqua";
			}

			var style = this.buildDefaultLineStyle();
			var stroke = style.getStroke();
			stroke.setColor(strokeColor);
			stroke.setWidth(strokeWidth);
			stroke.setLineDash([0.5, 30]);
			stroke.setLineCap('round');

			//we add a non-dashed, nearly invisible line to make
			//hit detection more user friendly
			var invisibleStyle = this.buildDefaultLineStyle();
			invisibleStyle.getStroke().setColor("rgba(0, 0, 0, 0.01)");

			return [invisibleStyle, style];
       },

       actionPointStyleFunction: function(feature, resolution, selected) {
			if (! (feature.get('type') === 'sketch'
				&& feature.get("dashStyle") === 'action-point')) {
				return;
			}

			var strokeColor = feature.get("strokeColor"),
				strokeWidth = feature.get("strokeWidth");

			if (selected) {
				strokeColor = "aqua";
			}

			var outlineStyle = this.buildDefaultLineStyle();
			outlineStyle.getStroke().setColor('black');
			outlineStyle.getStroke().setWidth(strokeWidth);

			var lineStyle = this.buildDefaultLineStyle();
			lineStyle.getStroke().setColor(strokeColor);
			lineStyle.getStroke().setWidth(strokeWidth - 2);

			var pointStyle = new ol.style.Style({
				image: new ol.style.Circle({
					radius: strokeWidth,
					fill: new ol.style.Fill({
						color: strokeColor
					})
				}),
				geometry: function(feature) {
					var coords = feature.getGeometry().getCoordinates();
					return new ol.geom.MultiPoint([coords[0], coords[coords.length-1]]);
				}
			});

			return [outlineStyle, lineStyle, pointStyle];
       },

		completedDozerlineStyleFunction: function(feature, resolution, selected) {
			if (! (feature.get('type') === 'sketch' &&
						feature.get("dashStyle") === 'completed-dozer-line')) {
				return;
			}
			
			var styles = this.lineToSegmentPoints(
				feature.getGeometry(), 'x', 12 * resolution);
			
			var color = selected ? 'rgba(0,255,255,0.5)' : 'rgba(0,255,255,0.01)';
			styles.push(new ol.style.Style({
				stroke: new ol.style.Stroke({
					color: color,
					width: 10
				})
			}));
			return styles;
		},

		proposedDozerlineStyleFunction: function(feature, resolution, selected) {
			if (! (feature.get('type') === 'sketch' &&
						feature.get("dashStyle") === 'proposed-dozer-line')) {
				return;
			}
			
			var styles = this.lineToSegmentPoints(
				feature.getGeometry(), 'X•', 20 * resolution);
			
			var color = selected ? 'rgba(0,255,255,0.5)' : 'rgba(0,255,255,0.01)';
			styles.push(new ol.style.Style({
				stroke: new ol.style.Stroke({
					color: color,
					width: 10
				})
			}));
			return styles;
		},

		firelineStyleFunction: function(feature, resolution, selected) {
			if (! (feature.get('type') === 'sketch' &&
						feature.get("dashStyle") === 'fire-edge-line')) {
				return;
			}
			var lineColor = 'rgb(255,0,0)';
			var styles = this.lineToSegmentPoints(
				feature.getGeometry(), '|', 9 * resolution, {
					color: lineColor,
					font: '15px sans-serif',
					textBaseline: 'ideographic'
				});
			
			var lineStyle = this.buildDefaultLineStyle();
			lineStyle.getStroke().setColor(lineColor);
			lineStyle.getStroke().setWidth(3);
			styles.push(lineStyle);
			
			var color = selected ? 'rgba(0,255,255,0.5)' : 'rgba(0,255,255,0.01)';
			styles.push(new ol.style.Style({
				stroke: new ol.style.Stroke({
					color: color,
					width: 10
				})
			}));
			return styles;
		},

		buildDefaultLineStyle: function() {
			return new ol.style.Style({
				stroke: new ol.style.Stroke({
					color: 'black',
					width: 9
				})
			});
		},
		
		lineToSegmentPoints: function(linestring, text, segmentLength, options) {
			var map = MapModule.getMap(),
					extent = map.getView().calculateExtent(map.getSize()),
					coords = linestring.getCoordinates(),
					styles = [],
					controller = this;
					
			color = options && options.color || 'black';
			font = options && options.font || 'bold 18px sans-serif';
			textBaseline = options && options.textBaseline || 'middle';
			
			if (coords.length > 1) {
				//preprocess our line, filtering non-visible segments
				var visibleCoords = [];
				coords.reduceRight(function(p1, p2){
					//ignore lines totally off screen
					if (controller.intersectsSegment(extent, p1, p2)) {
						visibleCoords.push(p1, p2);
					}
					return p2;
				}, this);
				coords = visibleCoords;
				
				var accumulatedLength = 0,
				p1, p2, pt, dx, dy,
				length, fraction, rotation;
				while (coords.length > 1) {
					p1 = coords.pop();
					p2 = coords.pop();
					
					//if partially off screen
					if (!ol.extent.containsCoordinate(extent, p1) ||
					!ol.extent.containsCoordinate(extent, p2)){
						//only consider the portion on screen
						var line = this.clipLine(extent, p1, p2);
						if (line) {
							p1 = line[0];
							p2 = line[1];
						}
					}
					
					dx = p2[0] - p1[0];
					dy = p2[1] - p1[1];
					length = Math.sqrt(dx * dx + dy * dy);
					
					if (length + accumulatedLength >= segmentLength) {
						fraction = (segmentLength - accumulatedLength) / length;
						pt = [p1[0] + (dx * fraction), p1[1] + (dy * fraction)];
						
						rotation = Math.atan2(dy, dx);
						styles.push(new ol.style.Style({
							geometry: new ol.geom.Point(pt),
							text: new ol.style.Text({
								rotation: -rotation,
								text: text,
								textAlign: 'center',
								textBaseline: textBaseline,
								fill: new ol.style.Fill({
									color: color
								}),
								font: font
							})
						}));
						accumulatedLength = 0 ;
						
						//continue iteration with new point
						coords.push(p2, pt);
					} else {
						accumulatedLength += length;
					}
				}
			}
			return styles;
		},
		
		/**
		 *  Liang–Barsky line clipping
		 */
		clipLine: function(extent, p1, p2) {
			var ax = p1[0], ay = p1[1],
					bx = p2[0],	by = p2[1],
					x0 = extent[0], y0 = extent[1],
					x1 = extent[2], y1 = extent[3],
					t0 = 0, t1 = 1,
					dx = bx - ax,
					dy = by - ay,
					r;
			
			r = x0 - ax;
			if (!dx && r > 0) return;
			r /= dx;
			if (dx < 0) {
				if (r < t0) return;
				if (r < t1) t1 = r;
			} else if (dx > 0) {
				if (r > t1) return;
				if (r > t0) t0 = r;
			}
			
			r = x1 - ax;
			if (!dx && r < 0) return;
			r /= dx;
			if (dx < 0) {
				if (r > t1) return;
				if (r > t0) t0 = r;
			} else if (dx > 0) {
				if (r < t0) return;
				if (r < t1) t1 = r;
			}
			
			r = y0 - ay;
			if (!dy && r > 0) return;
			r /= dy;
			if (dy < 0) {
				if (r < t0) return;
				if (r < t1) t1 = r;
			} else if (dy > 0) {
				if (r > t1) return;
				if (r > t0) t0 = r;
			}
			
			r = y1 - ay;
			if (!dy && r < 0) return;
			r /= dy;
			if (dy < 0) {
				if (r > t1) return;
				if (r > t0) t0 = r;
			} else if (dy > 0) {
				if (r < t0) return;
				if (r < t1) t1 = r;
			}
			
			return [
				[ax + t0 * dx, ay + t0 * dy],
				[ax + t1 * dx, ay + t1 * dy]
			];
		},


		/** Taken from ol.extent since it wasnt public */
		intersectsSegment: function(extent, start, end) {
			var intersects = false;
			var startRel = this.coordinateRelationship(extent, start);
			var endRel = this.coordinateRelationship(extent, end);
			if (startRel === Relationship.INTERSECTING ||
				endRel === Relationship.INTERSECTING) {
			  intersects = true;
			} else {
			  var minX = extent[0];
			  var minY = extent[1];
			  var maxX = extent[2];
			  var maxY = extent[3];
			  var startX = start[0];
			  var startY = start[1];
			  var endX = end[0];
			  var endY = end[1];
			  var slope = (endY - startY) / (endX - startX);
			  var x, y;
			  if (!!(endRel & Relationship.ABOVE) &&
				  !(startRel & Relationship.ABOVE)) {
				// potentially intersects top
				x = endX - ((endY - maxY) / slope);
				intersects = x >= minX && x <= maxX;
			  }
			  if (!intersects && !!(endRel & Relationship.RIGHT) &&
				  !(startRel & Relationship.RIGHT)) {
				// potentially intersects right
				y = endY - ((endX - maxX) * slope);
				intersects = y >= minY && y <= maxY;
			  }
			  if (!intersects && !!(endRel & Relationship.BELOW) &&
				  !(startRel & Relationship.BELOW)) {
				// potentially intersects bottom
				x = endX - ((endY - minY) / slope);
				intersects = x >= minX && x <= maxX;
			  }
			  if (!intersects && !!(endRel & Relationship.LEFT) &&
				  !(startRel & Relationship.LEFT)) {
				// potentially intersects left
				y = endY - ((endX - minX) * slope);
				intersects = y >= minY && y <= maxY;
			  }
		  
			}
			return intersects;
		  },

		/** Taken from ol.extent since it wasnt public */
		coordinateRelationship: function(extent, coordinate) {
			var minX = extent[0];
			var minY = extent[1];
			var maxX = extent[2];
			var maxY = extent[3];
			var x = coordinate[0];
			var y = coordinate[1];
			var relationship = Relationship.UNKNOWN;
			if (x < minX) {
			  relationship = relationship | Relationship.LEFT;
			} else if (x > maxX) {
			  relationship = relationship | Relationship.RIGHT;
			}
			if (y < minY) {
			  relationship = relationship | Relationship.BELOW;
			} else if (y > maxY) {
			  relationship = relationship | Relationship.ABOVE;
			}
			if (relationship === Relationship.UNKNOWN) {
			  relationship = Relationship.INTERSECTING;
			}
			return relationship;
		  }
	});

});
