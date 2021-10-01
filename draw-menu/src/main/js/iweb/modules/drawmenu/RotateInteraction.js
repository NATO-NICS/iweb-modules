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
define(['ol'], function(ol) {

    /**
     * @enum {string}
     */
    RotateEventType = {
        /**
         * Triggered upon rotate start.
         * @event RotateEvent#rotatestart
         * @api stable
         */
        ROTATESTART: 'rotatestart',
        /**
         * Triggered upon rotate.
         * @event RotateEvent#rotate
         * @api stable
         */
        ROTATE: 'rotate',
        /**
         * Triggered upon rotate end.
         * @event RotateEvent#rotateend
         * @api stable
         */
        ROTATEEND: 'rotateend'
    };

    /**
     * @classdesc
     * Interaction that allows drawing geometries.
     *
     * @constructor
     * @extends {ol.interaction.Pointer}
     * @fires RotateEvent
     * @param {olx.interaction.RotateOptions} options Options.
     * @api stable
     */
    RotateInteraction = function(options) {

    ol.interaction.Pointer.call(this, {
        handleDownEvent: RotateInteraction.handleDownEvent_,
        handleDragEvent: RotateInteraction.handleDragEvent_,
        handleUpEvent: RotateInteraction.handleUpEvent_
    });

    /**
     * Target collection for drawn features.
     * @type {ol.Collection.<ol.Feature>}
     * @private
     */
    this.features_ = (options.features !== undefined) ? options.features : null;

    /**
     * Draw overlay where our sketch features are drawn.
     * @type {ol.layer.Vector}
     * @private
     */
    this.overlay_ = new ol.layer.Vector({
        source: new ol.source.Vector({
        useSpatialIndex: false,
        //features: options.features,
        wrapX: options.wrapX ? options.wrapX : false
        }),
        style: (options.style !== undefined) ?
            options.style : ol.interaction.Draw.getDefaultStyleFunction(),
        updateWhileAnimating: true,
        updateWhileInteracting: true
    });

    /**
     * @private
     * @type {ol.EventsConditionType}
     */
    this.condition_ = (options.condition !== undefined) ?
        options.condition : ol.events.condition.noModifierKeys;

    /**
     * Active feature to rotate.
     * @type {ol.Feature}
     * @private
     */
    this.activeFeature_ = null;

    /**
     * Number to track initial rotation angle.
     * @type {number}
     * @private
     */
    this.firstTheta_ = 0;

    /**
     * Number to track most recent rotation angle.
     * @type {number}
     * @private
     */
    this.lastTheta_ = 0;


    this.addEventListener(this, 'change:active', this.updateState_, this);
    };
    //ol.inherits(RotateInteraction, ol.interaction.Pointer);
    RotateInteraction.prototype = Object.create(ol.interaction.Pointer.prototype);
    RotateInteraction.prototype.constructor = RotateInteraction;


    /**
     * @inheritDoc
     */
    RotateInteraction.prototype.setMap = function(map) {
        ol.interaction.Pointer.prototype.setMap.call(this, map);
        this.updateState_();
    };


    /**
     * Handle mouse down events.
     * @param {ol.MapBrowserPointerEvent} evt Event.
     * @return {boolean} Start drag sequence?
     * @this {RotateInteraction}
     * @private
     */
    RotateInteraction.handleDownEvent_ = function(evt) {
    if (this.condition_(evt)) {
        var map = evt.map;
        var features = (this.features_ !== null) ?
                this.features_.getArray() : null;
        var feature = map.forEachFeatureAtPixel(evt.pixel,
            function(feature) {
                if (features === null || features.indexOf(feature) >= 0) {
                    return feature;
                }
            });

        if (feature) {
        this.startRotate_(evt.coordinate, feature);
        return true;
        }

    }
    return false;
    };


    /**
     * Handle mouse up events.
     * @param {ol.MapBrowserPointerEvent} evt Event.
     * @return {boolean} Stop drag sequence?
     * @this {RotateInteraction}
     * @private
     */
    RotateInteraction.handleUpEvent_ = function(evt) {
    if (this.activeFeature_) {
        this.finishRotate_();
    }
    return false;
    };


    /**
     * Handle drag events.
     * @param {ol.MapBrowserPointerEvent} evt Event.
     * @this {RotateInteraction}
     * @private
     */
    RotateInteraction.handleDragEvent_ = function(evt) {
    if (this.activeFeature_) {
        this.rotate_(evt.coordinate);
    }
    };


    /**
     * Start the drawing.
     * @param {ol.Coordinate} coordinate Coordinate.
     * @param {ol.Feature} feature Feature.
     * @private
     */
    RotateInteraction.prototype.startRotate_ = function(coordinate, feature) {
    this.activeFeature_ = feature;

    var center = this.getCentroid_(feature.getGeometry());
    this.overlay_.getSource().addFeature(new ol.Feature({
        geometry: new ol.geom.Point(center)
    }));

    this.firstTheta_ = this.lastTheta_ = Math.atan2(
        coordinate[1] - center[1], coordinate[0] - center[0]);

    this.dispatchEvent(
        new RotateInteraction.Event(RotateEventType.ROTATESTART, feature, 0));
    };


    /**
     * Modify the drawing.
     * @param {ol.Coordinate} coordinate Coordinate.
     * @private
     */
    RotateInteraction.prototype.rotate_ = function(coordinate) {
    var feature = this.activeFeature_;

    var center = this.getCentroid_(feature.getGeometry());
    var theta = Math.atan2(coordinate[1] - center[1], coordinate[0] - center[0]);
    var delta = theta - this.lastTheta_;
    this.lastTheta_ = theta;

    this.rotateFeature_(feature.getGeometry(), delta, center);

    this.dispatchEvent(new RotateInteraction.Event(RotateEventType.ROTATE,
        feature, delta));
    };


    /**
     * Stop drawing and add the sketch feature to the target layer.
     * @private
     */
    RotateInteraction.prototype.finishRotate_ = function() {
    var feature = this.abortRotate_();

    this.dispatchEvent(new RotateInteraction.Event(RotateEventType.ROTATEEND,
        feature, this.lastTheta_ - this.firstTheta_));
    };


    /**
     * Stop drawing without adding the sketch feature to the target layer.
     * @return {ol.Feature} The sketch feature (or null if none).
     * @private
     */
    RotateInteraction.prototype.abortRotate_ = function() {
    var activeFeature = this.activeFeature_;
    if (activeFeature !== null) {
        this.activeFeature_ = null;
        this.overlay_.getSource().clear(true);
    }
    return activeFeature;
    };


    /**
     * Get an approximation to the center of a geometry.
     * @param {ol.geom.Geometry|undefined} geometry Geometry.
     * @param {number} angle The angle in radians.
     * @param {ol.Coordinate} center Center to rotate around.
     * @private
     */
    RotateInteraction.prototype.rotateFeature_ =
    function(geometry, angle, center) {
    geometry.rotate(angle, center);
    };


    /**
     * Get an approximation to the center of a geometry.
     * @param {ol.geom.Geometry|undefined} geometry Geometry.
     * @return {?ol.Coordinate} The approximate center of the geometry.
     * @private
     * @suppress {checkTypes}
     */
    RotateInteraction.prototype.getCentroid_ = function(geometry) {
    if (geometry) {
        var coords = geometry.getFlatCoordinates();
        var stride = geometry.getStride();
        var len = coords.length;
        var count = len / stride;

        if (count > 0 && count <= 1) {
        return coords;
        } else if (count > 1) {
        var x = 0.0, y = 0.0;
        var sumX = 0.0, sumY = 0.0, sumA = 0.0;
        if (geometry.getArea) {
            for (var i = 0; i < len - stride; i += stride) {
            var bx = coords[i], by = coords[i + 1];
            var cx = coords[i + stride], cy = coords[i + stride + 1];
            var a = ((bx * cy) - (cx * by));
            sumX += (bx + cx) * a;
            sumY += (by + cy) * a;
            sumA += a;
            }
            var area = sumA / 2;
            x = sumX / (6 * area);
            y = sumY / (6 * area);
        } else {
            for (var j = 0; j < len - 1; j += stride) {
            sumX += coords[j];
            sumY += coords[j + 1];
            }
            x = sumX / count;
            y = sumY / count;
        }
        return [x, y];
        }
    }
    return null;
    };


    /**
     * @private
     */
    RotateInteraction.prototype.updateState_ = function() {
    var map = this.getMap();
    var active = this.getActive();
    if (map === null || !active) {
        this.abortRotate_();
    }
    this.overlay_.setMap(active ? map : null);
    };


    /**
     * @classdesc
     * Events emitted by {@link RotateInteraction} instances are instances of
     * this type.
     *
     * @param {string} type The event type.
     * @param {ol.Feature} feature The feature being rotated.
     * @param {number} angle The new angle of rotation, in radians.
     * @extends {ol.events.Event}
     * @constructor
     */
    RotateInteraction.Event = function(type, feature, angle) {
    //ol.events.Event.call(this, type);

    this.type = type;

    /**
     * The feature being rotated.
     * @const
     * @type {ol.Feature}
     * @api stable
     */
    this.feature = feature;

    /**
     * The angle of rotation of the drag event, in radians.
     * @const
     * @type {number}
     * @api stable
     */
    this.angle = angle;

    };
    //ol.inherits(RotateInteraction.Event, ol.events.Event);
    //RotateInteraction.Event.prototype = Object.create(ol.events.Event);
    //RotateInteraction.Event.prototype.constructor = ol.events.Event;

    return RotateInteraction;
});