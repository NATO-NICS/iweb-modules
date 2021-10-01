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
	return Ext.define("drawmenu.LineController", {
		extend: 'Ext.app.ViewController',
		alias: "controller.drawmenu.linebutton",

		selectedInteraction: null,
		featureInProgress: null,
		drawingColor: null,

		init: function() {

			MapModule.getMapStyle().addStyleFunction(this.lineStyleFunction.bind(this));

			var defaultTool = this.getView().menu.lookupReference("thin");
			this.updateButton(this.getView(), defaultTool);
			defaultTool.toggle(true, true);

			this.drawingColor = Core.Ext.Map.getDrawingColor();
			Core.EventManager.addListener("map-color-change", this.onMapColorChange.bind(this));
		},

		updateButton: function(parent, button) {
			parent.setIconAlign(button.getIconAlign());
			parent.setIcon(button.icon);
			parent.setIconCls(button.iconCls);
			parent.setTextAlign(button.getTextAlign());
			parent.setText(button.getText());
		},

		onToggle: function(btn, pressed) {
			if (!pressed) {
				this.hideFreehandButton();
				return;
			}

			if (!this.clickHandler) {
				this.clickHandler = this.onThinClick;
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

		onThinClick: function(btn) {
			var interactions = this.buildLineInteraction(3, false, this.isFreehand());
			Core.Ext.Map.setInteractions(interactions);

			this.setFreehandToggleCallback(function(freehand){
				var interactions = this.buildLineInteraction(3, false, freehand);
				Core.Ext.Map.setInteractions(interactions);
			}.bind(this));

			this.clickHandler = this.onThinClick;
			this.updateButton(this.getView(), btn);
			this.getView().toggle(true);
		},

		onMediumClick: function(btn) {
			var interactions = this.buildLineInteraction(9, false, this.isFreehand());
			Core.Ext.Map.setInteractions(interactions);

			this.setFreehandToggleCallback(function(freehand){
				var interactions = this.buildLineInteraction(9, false, freehand);
				Core.Ext.Map.setInteractions(interactions);
			}.bind(this));

			this.clickHandler = this.onMediumClick;
			this.updateButton(this.getView(), btn);
			this.getView().toggle(true);
		},

		onThickClick: function(btn) {
			var interactions = this.buildLineInteraction(15, false, this.isFreehand());
			Core.Ext.Map.setInteractions(interactions);

			this.setFreehandToggleCallback(function(freehand){
				var interactions = this.buildLineInteraction(15, false, freehand);
				Core.Ext.Map.setInteractions(interactions);
			}.bind(this));

			this.clickHandler = this.onThickClick;
			this.updateButton(this.getView(), btn);
			this.getView().toggle(true);
		},

		onDashedClick: function(btn) {
			var interactions = this.buildLineInteraction(3, true, this.isFreehand());
			Core.Ext.Map.setInteractions(interactions);

			this.setFreehandToggleCallback(function(freehand){
				var interactions = this.buildLineInteraction(3, true, freehand);
				Core.Ext.Map.setInteractions(interactions);
			}.bind(this));

			this.clickHandler = this.onDashedClick;
			this.updateButton(this.getView(), btn);
			this.getView().toggle(true);
		},

		buildLineInteraction: function(strokeWidth, dashed, freehand) {
			var interactions = Interactions.drawLine(
				Core.Ext.Map.getSource(), Core.Ext.Map.getStyle, freehand);

			interactions.forEach(function(interaction){
				interaction.on("drawstart", this.onDrawStart.bind(this, strokeWidth, dashed));
				interaction.on("drawend", this.onDrawEnd.bind(this));
			}.bind(this));

			return interactions;
		},

		onDrawStart: function(strokeWidth, dashed, drawEvent) {

			var feature = drawEvent.feature;
			feature.setProperties({
				type: 'sketch',
				strokeWidth: strokeWidth,
				strokeColor: this.drawingColor
			});
			if (dashed) {
				feature.setProperties({
					dashStyle: 'dashed'
				});
			}
			this.featureInProgress = feature;
		},

		onDrawEnd: function(drawEvent) {
			this.featureInProgress = null;
		},

		onMapColorChange: function(eventName, color) {
			this.drawingColor = color;

			//if there is feature drawing in progress, update it immediately
			if(this.featureInProgress){
				this.featureInProgress.set("strokeColor", color);
			}
		},

		lineStyleFunction: function(feature, resolution, selected) {
			if (feature.get('type') !== 'sketch') {
				return;
			}

			var strokeColor = feature.get("strokeColor"),
				strokeWidth = feature.get("strokeWidth"),
				dashStyle = feature.get("dashStyle");

			if (dashStyle && (dashStyle === 'primary-fire-line' ||
				dashStyle === 'secondary-fire-line' ||
				dashStyle === 'action-point' ||
				dashStyle === 'completed-dozer-line' ||
				dashStyle === 'proposed-dozer-line' ||
				dashStyle === 'fire-edge-line')) {
				return;
			}

				if (selected) {
				strokeColor = "aqua";
			}

			var style = this.buildDefaultLineStyle();

			var stroke = style.getStroke();
			stroke.setColor(strokeColor);
			stroke.setWidth(strokeWidth);
			
			if (dashStyle === "dashed") {
				stroke.setLineDash([12, 12]);
			}

			return [style];
		},

		buildDefaultLineStyle: function() {
			return new ol.style.Style({
				stroke: new ol.style.Stroke({
					color: 'black',
					width: 9
				})
			});
		}
	});

});
