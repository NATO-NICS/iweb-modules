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
define(['iweb/CoreModule'], function(Core) {
    return Ext.define(null, {
       extend: 'Ext.container.ButtonGroup',
       
       frame: false,
       
       defaults: {
          xtype: 'button',
          icon: 'images/drawmenu/nics-sprites.png',
          scale: "medium",
          
          toggleGroup: "toolsGroup",
          bubbleEvents: ["toggle"]
       },
       
       listeners: {
    	   toggle: "onToggle"
       },
       
       items: [{
          iconCls: 'sprite-hand',
          tooltip: Core.Translate.i18nJSON("Navigation"),
          reference: "nav",
          toggleHandler: "onNavClick",
          allowReadOnly: true,
          
          allowDepress: false
       },{
          iconCls: 'sprite-selection-select',
          tooltip: Core.Translate.i18nJSON("Select Box"),
          reference: "select",
          toggleHandler: "onSelectClick"
       },{
          iconCls: 'sprite-magnifier-left',
          tooltip: Core.Translate.i18nJSON("Zoom Box"),
          reference: "zoom",
          toggleHandler: "onZoomClick",
          allowReadOnly: true
       },{
          iconCls: 'sprite-eraser',
          tooltip: Core.Translate.i18nJSON("Erase"),
          reference: "erase",
          toggleHandler: "onEraseClick"
       },{
           iconCls: 'sprite-paint-brush',
           tooltip: Core.Translate.i18nJSON("Drawing Tools"),
           reference: "draw",
           handler: "onDrawClick",
           toggleHandler: "onDrawToggle",
           text: Core.Translate.i18nJSON("Draw"),
           textAlign: 'left',
           iconAlign: 'top'
       }]
       
    });

});
