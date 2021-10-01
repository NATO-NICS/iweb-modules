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
define(['ext', 'iweb/CoreModule'], function(Ext, Core){

  return Ext.define('map.HoverListener', {
    popupSpacingX: 10,
    popupSpacingY: 10,
    isActive: true,
    containerWidth: 400,
    containerHeight: 400,

    constructor: function(renderers) {
      this.renderers = renderers;
      this.activeFeature = null;
      this.activeFeatures = null;

      this.onRemoveFeature = this.onRemoveFeature.bind(this);
			this.onChangeFeature = this.onChangeFeature.bind(this);

      this.container = new Ext.window.Window({
        title: Core.Translate.i18nJSON('Feature Details'),
        width: this.containerWidth,
        componentCls:'form-feature-detail',
        renderTo: "cMainComponent-body",
        closeAction: 'hide',
        listeners: {
          close: this.onWindowClose,
          scope: this
        },
        tbar: [{
          itemId: 'previous',
          text: Core.Translate.i18nJSON('Previous'),
          iconCls: Ext.baseCSSPrefix + 'tbar-page-prev',
          handler: "onPreviousClicked",
          scope: this,
          flex: 1
        },"->",{
          itemId: 'next',
          text: Core.Translate.i18nJSON('Next'),
          iconCls: Ext.baseCSSPrefix + 'tbar-page-next',
          iconAlign: 'right',
          handler: "onNextClicked",
          scope: this,
          flex: 1
        }]
      });

      //we listen to the select event so we get click details
      this.olMap = Core.Ext.Map.getMap();
      this.olMap.on("moveend", this.onMapMoveEnd, this);

      this.olMap.on('pointermove', this.onPointerMove, this);

      // var select = Core.Ext.Map.getSelectInteraction();
      // select.on("select", this.onMapViewSelect.bind(this));

      Core.EventManager.addListener("map-source-set", this.onMapSourceSet.bind(this));
      Core.EventManager.addListener("iweb.map.feature.selected", this.onFeatureSelected.bind(this));
      Core.EventManager.addListener("iweb.map.feature.deselected", this.onFeatureDeselected.bind(this));

      this.bufferedRender = Ext.Function.createBuffered(this.render, 100, this);
    },

    onFeatureSelected: function(evt) {
      this.isActive = false;
      this.cleanup();
    },

    onFeatureDeselected: function(evt) {
      this.isActive = true;
    },

    addRenderer: function(renderer) {
      for(var i=0; i<this.renderers.length; i++){
        if(this.renderers[i].$className != undefined &&
          (this.renderers[i].$className == renderer.$className)){
          return;
        }
      }
      this.renderers.push(renderer);
    },

    onWindowClose: function() {
      this.cleanup();
    },

    calculatePopupPosition: function(pixel) {
      var x = pixel[0],
          y = pixel[1];

      if (x && y) {
        // compare position to width of screen

        // popup is off screen to the right
        if ((x + this.containerWidth + this.popupSpacingX) > document.body.clientWidth) {
          x = x - this.containerWidth - this.popupSpacingX;
        } else {
          x += this.popupSpacingX;
        }

        if ((y + this.containerHeight) > document.body.clientHeight) {
          y = document.body.clientHeight - this.containerHeight - this.popupSpacingY;
        }

        return [x,y];
      }

      return pixel;
    },

    onPointerMove: function(evt) {
      if (!this.isActive) return;

      var pixel = this.olMap.getEventPixel(evt.originalEvent);
      var hit = this.olMap.hasFeatureAtPixel(pixel);
      var handled = false;

      // ignore event if no features at map pixel
      if (hit) {
        var features = this.getFeaturesAtPixel(pixel);
        if (features.length) {
          this.activeFeature = features[0];

          // TODO should we require a user click to see multiple features?
          this.container.getDockedItems()[1].hide();
          // if (features.length > 1) {
          //   this.container.getDockedItems()[1].show();
          // } else {
          //   this.container.getDockedItems()[1].hide();
          // }

          if (this.activeFeature && this.activeFeature.getId()) {
            this.container.show();
            this.container.setLocalXY(this.calculatePopupPosition(pixel));

            handled = this.render(this.activeFeature);
          }
        }
      }

      if (!handled) {
        this.cleanup();
      }
    },

    onPreviousClicked: function() {
      var idx = this.activeFeatures.indexOf(this.activeFeature);
      var newIdx = (idx - 1);
      if (newIdx < 0) {
        newIdx = (this.activeFeatures.length - 1);
      }

      this.activeFeature = this.activeFeatures[newIdx];
      this.render(this.activeFeature);

      select.getFeatures().clear();
      select.getFeatures().push(this.activeFeature);
    },

    onNextClicked: function() {
      var idx = this.activeFeatures.indexOf(this.activeFeature);
      var newIdx = (idx + 1) % this.activeFeatures.length;

      this.activeFeature = this.activeFeatures[newIdx];
      this.render(this.activeFeature);

      select.getFeatures().clear();
      select.getFeatures().push(this.activeFeature);
    },

    onMapSourceSet: function(eventName, oldSource, source) {
      this.unlistenToSource(oldSource);

      //clear the overlay on source change (i.e. change rooms)
      this.cleanup();

      this.listenToSource(source);
    },

    listenToSource: function(source) {
      if(source){
        source.on('removefeature', this.onRemoveFeature);
        source.on('changefeature', this.onChangeFeature);
      }
    },

    unlistenToSource: function(source) {
      if(source){
        source.un('removefeature', this.onRemoveFeature);
        source.un('changefeature', this.onChangeFeature);
      }
    },

    cleanup: function() {
      //setting position undefined hides the overlay
      this.container.hide();
      this.container.removeAll();
      this.activeFeature = null;
      this.activeFeatures = null;
    },

    onRemoveFeature: function(event) {
      if (this.activeFeatures) {
        var idx = this.activeFeatures.indexOf(this.activeFeature);
        if (idx >= 0) {
          this.cleanup();
          return;
        }
      }

      if (event.feature == this.activeFeature) {
        this.cleanup();
      }
    },

    onChangeFeature: function(event) {
      if (event.feature == this.activeFeature) {
        this.bufferedRender(this.activeFeature);


        this.lastClickCoord = event.feature.getGeometry()
          .getClosestPoint(this.container.getXY());
        this.container.setLocalXY(
          this.olMap.getPixelFromCoordinate(this.lastClickCoord));
      }
    },

    onMapMoveEnd: function() {
      if (this.activeFeature) {
        this.container.setLocalXY(
          this.olMap.getPixelFromCoordinate(this.lastClickCoord));
      }
    },

    render: function(feature) {
      //clear the container before rendering
      this.container.removeAll();

      return this.delegateRender(this.container, feature);
    },

    delegateRender: function(container, feature) {
      return this.renderers.reduce(function(prev, curr, idx, arr){
        return curr.render.call(curr, container, feature) || prev;
      }, false);
    },

    getFeaturesAtPixel: function(px) {
      var features = [];
      this.olMap.forEachFeatureAtPixel(px, function(feature, layer){
        features.push(feature);
      });
      return features;
    }

  });

});
