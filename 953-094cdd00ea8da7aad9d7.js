"use strict";(self.webpackChunkafd_unreal_engine_sdk_doc=self.webpackChunkafd_unreal_engine_sdk_doc||[]).push([[953],{70953:function(e,t,i){i.r(t),i.d(t,{calcite_tree:function(){return o},calcite_tree_item:function(){return s}});var r,a,c=i(63291),n=i(46350),l=i(1775);(a=r||(r={})).Single="single",a.Multi="multi",a.Children="children",a.MultiChildren="multi-children",a.Ancestors="ancestors";var o=function(){function e(e){(0,c.r)(this,e),this.calciteTreeSelect=(0,c.c)(this,"calciteTreeSelect",7),this.lines=!1,this.inputEnabled=!1,this.scale="m",this.selectionMode=r.Single}return e.prototype.componentWillRender=function(){var e=this.el.parentElement.closest("calcite-tree");this.lines=e?e.lines:this.lines,this.scale=e?e.scale:this.scale,this.inputEnabled=e?e.inputEnabled:this.inputEnabled,this.selectionMode=e?e.selectionMode:this.selectionMode,this.child=!!e},e.prototype.render=function(){return(0,c.h)(c.H,{"aria-multiselectable":this.selectionMode===r.Multi||this.selectionMode===r.MultiChildren,role:this.child?void 0:"tree",tabindex:this.child?void 0:"0"},(0,c.h)("slot",null))},e.prototype.onFocus=function(){if(!this.child){var e=this.el.querySelector("calcite-tree-item[selected]"),t=this.el.querySelector("calcite-tree-item");(e||t).focus()}},e.prototype.onClick=function(e){var t=e.target,i=(0,n.n)(t.querySelectorAll("calcite-tree-item"));if(this.child||(e.preventDefault(),e.stopPropagation()),this.selectionMode!==r.Ancestors||this.child){var a=null!==this.selectionMode&&(!t.hasChildren||t.hasChildren&&(this.selectionMode===r.Children||this.selectionMode===r.MultiChildren)),c=e.detail.modifyCurrentSelection&&(this.selectionMode===r.Multi||this.selectionMode===r.MultiChildren),l=this.selectionMode===r.MultiChildren||this.selectionMode===r.Children,o=!c&&((this.selectionMode===r.Single||this.selectionMode===r.Multi)&&i.length<=0||this.selectionMode===r.Children||this.selectionMode===r.MultiChildren),s=this.selectionMode===r.Children||this.selectionMode===r.MultiChildren;if(!this.child){var d=[];if(a&&d.push(t),l&&i.forEach((function(e){d.push(e)})),o)(0,n.n)(this.el.querySelectorAll("calcite-tree-item[selected]")).forEach((function(e){d.includes(e)||(e.selected=!1)}));s&&!e.detail.forceToggle&&(t.expanded=!0),c&&window.getSelection().removeAllRanges(),c&&t.selected||l&&e.detail.forceToggle?d.forEach((function(e){e.selected=!1})):d.forEach((function(e){e.selected=!0}))}this.calciteTreeSelect.emit({selected:(0,n.n)(this.el.querySelectorAll("calcite-tree-item")).filter((function(e){return e.selected}))})}else this.updateAncestorTree(e)},e.prototype.updateAncestorTree=function(e){for(var t=e.target,i=t.querySelectorAll("calcite-tree-item"),r=[],a=t.parentElement.closest("calcite-tree-item");a;)r.push(a),a=a.parentElement.closest("calcite-tree-item");t.selected=!t.selected,t.indeterminate=!1,(null==i?void 0:i.length)&&i.forEach((function(e){e.selected=t.selected,e.indeterminate=!1})),r&&r.forEach((function(e){var t=(0,n.n)(e.querySelectorAll("calcite-tree-item")),i=t.filter((function(e){return e.selected}));if(0===i.length)return e.selected=!1,void(e.indeterminate=!1);var r=i.length<t.length;e.indeterminate=r,e.selected=!r})),this.calciteTreeSelect.emit({selected:(0,n.n)(this.el.querySelectorAll("calcite-tree-item")).filter((function(e){return e.selected}))})},Object.defineProperty(e.prototype,"el",{get:function(){return(0,c.g)(this)},enumerable:!1,configurable:!0}),e}();o.style="@-webkit-keyframes in{0%{opacity:0}100%{opacity:1}}@keyframes in{0%{opacity:0}100%{opacity:1}}@-webkit-keyframes in-down{0%{opacity:0;-webkit-transform:translate3D(0, -5px, 0);transform:translate3D(0, -5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@keyframes in-down{0%{opacity:0;-webkit-transform:translate3D(0, -5px, 0);transform:translate3D(0, -5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@-webkit-keyframes in-up{0%{opacity:0;-webkit-transform:translate3D(0, 5px, 0);transform:translate3D(0, 5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@keyframes in-up{0%{opacity:0;-webkit-transform:translate3D(0, 5px, 0);transform:translate3D(0, 5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@-webkit-keyframes in-scale{0%{opacity:0;-webkit-transform:scale3D(0.95, 0.95, 1);transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;-webkit-transform:scale3D(1, 1, 1);transform:scale3D(1, 1, 1)}}@keyframes in-scale{0%{opacity:0;-webkit-transform:scale3D(0.95, 0.95, 1);transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;-webkit-transform:scale3D(1, 1, 1);transform:scale3D(1, 1, 1)}}:root{--calcite-popper-transition:150ms ease-in-out}:host([hidden]){display:none}:host{display:block;outline:2px solid transparent;outline-offset:2px}";var s=function(){function e(e){var t=this;(0,c.r)(this,e),this.calciteTreeItemSelect=(0,c.c)(this,"calciteTreeItemSelect",7),this.selected=!1,this.expanded=!1,this.parentExpanded=!1,this.depth=-1,this.hasChildren=null,this.iconClickHandler=function(e){e.stopPropagation(),t.expanded=!t.expanded,t.inputEnabled||t.calciteTreeItemSelect.emit({modifyCurrentSelection:e.shiftKey,forceToggle:!0})},this.childrenClickHandler=function(e){return e.stopPropagation()},this.checkboxClickHandler=function(e){e.stopPropagation(),t.calciteTreeItemSelect.emit({modifyCurrentSelection:e.shiftKey,forceToggle:!0}),t.el.focus()}}return e.prototype.expandedHandler=function(e){(0,n.c)(this.el,"children",{all:!0,selector:"calcite-tree-item"}).forEach((function(t){return t.parentExpanded=e}))},e.prototype.connectedCallback=function(){this.expandedHandler(this.expanded)},e.prototype.componentWillRender=function(){this.hasChildren=!!this.el.querySelector("calcite-tree"),this.depth=0,this.el.dir=(0,n.g)(this.el);var e,t=this.el.closest("calcite-tree");if(t)for(this.selectionMode=t.selectionMode,this.scale=t.scale||"m",this.lines=t.lines,this.inputEnabled=t.inputEnabled;t&&(e=t.parentElement.closest("calcite-tree"))!==t;)t=e,this.depth=this.depth+1},e.prototype.render=function(){var e=this,t=this.hasChildren?(0,c.h)("calcite-icon",{class:"calcite-tree-chevron","data-test-id":"icon",icon:"chevron-right",onClick:this.iconClickHandler,scale:"s"}):null,i=this.inputEnabled?(0,c.h)("label",{class:"calcite-tree-label"},(0,c.h)("calcite-checkbox",{checked:this.selected,class:"calcite-tree-checkbox","data-test-id":"checkbox",indeterminate:this.hasChildren&&this.indeterminate,onClick:this.checkboxClickHandler,scale:this.scale,tabIndex:-1}),(0,c.h)("slot",null)):null,a=!(this.parentExpanded||1===this.depth);return(0,c.h)(c.H,{"aria-expanded":this.hasChildren?this.expanded.toString():void 0,"aria-hidden":a.toString(),"aria-selected":this.selected?"true":this.selectionMode===r.Multi||this.selectionMode===r.MultiChildren?"false":void 0,"calcite-hydrated-hidden":a,role:"treeitem",tabindex:this.parentExpanded||1===this.depth?"0":"-1"},(0,c.h)("div",{class:"calcite-tree-node",ref:function(t){return e.defaultSlotWrapper=t}},t,i||(0,c.h)("slot",null)),(0,c.h)("div",{class:"calcite-tree-children","data-test-id":"calcite-tree-children",onClick:this.childrenClickHandler,ref:function(t){return e.childrenSlotWrapper=t},role:this.hasChildren?"group":void 0},(0,c.h)("slot",{name:"children"})))},e.prototype.onClick=function(e){var t=(0,n.i)(this.el,"a")[0];if(t&&"a"!==e.composedPath()[0].tagName.toLowerCase()){var i=""===t.target?"_self":t.target;window.open(t.href,i)}this.expanded=!this.expanded,this.calciteTreeItemSelect.emit({modifyCurrentSelection:e.shiftKey,forceToggle:!1})},e.prototype.keyDownHandler=function(e){var t;switch((0,l.g)(e.key)){case" ":this.calciteTreeItemSelect.emit({modifyCurrentSelection:e.shiftKey,forceToggle:!0}),e.preventDefault(),e.stopPropagation();break;case"Enter":var i=(0,n.n)(this.el.children).find((function(e){return e.matches("a")}));i?(i.click(),this.selected=!0):this.calciteTreeItemSelect.emit({modifyCurrentSelection:e.shiftKey,forceToggle:!0}),e.preventDefault(),e.stopPropagation();break;case"ArrowLeft":if(this.hasChildren&&this.expanded){this.expanded=!1,e.preventDefault(),e.stopPropagation();break}var r=this.el.parentElement.closest("calcite-tree-item");if(r&&(!this.hasChildren||!1===this.expanded)){r.focus(),e.preventDefault(),e.stopPropagation();break}break;case"ArrowRight":if(this.hasChildren&&!1===this.expanded){this.expanded=!0,e.preventDefault(),e.stopPropagation();break}if(this.hasChildren&&this.expanded){this.el.querySelector("calcite-tree-item").focus();break}break;case"ArrowUp":var a=this.el.previousElementSibling;a&&a.matches("calcite-tree-item")&&a.focus();break;case"ArrowDown":var c=this.el.nextElementSibling;c&&c.matches("calcite-tree-item")&&c.focus();break;case"Home":(t=this.el.closest("calcite-tree:not([child])")).querySelector("calcite-tree-item").focus();break;case"End":for(var o=(t=this.el.closest("calcite-tree:not([child])")).children[t.children.length-1],s=(0,n.n)(o.children).find((function(e){return e.matches("calcite-tree")}));s;)o=s.children[t.children.length-1],s=(0,n.n)(o.children).find((function(e){return e.matches("calcite-tree")}));o.focus()}},Object.defineProperty(e.prototype,"el",{get:function(){return(0,c.g)(this)},enumerable:!1,configurable:!0}),Object.defineProperty(e,"watchers",{get:function(){return{expanded:["expandedHandler"]}},enumerable:!1,configurable:!0}),e}();s.style='@charset "UTF-8";@-webkit-keyframes in{0%{opacity:0}100%{opacity:1}}@keyframes in{0%{opacity:0}100%{opacity:1}}@-webkit-keyframes in-down{0%{opacity:0;-webkit-transform:translate3D(0, -5px, 0);transform:translate3D(0, -5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@keyframes in-down{0%{opacity:0;-webkit-transform:translate3D(0, -5px, 0);transform:translate3D(0, -5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@-webkit-keyframes in-up{0%{opacity:0;-webkit-transform:translate3D(0, 5px, 0);transform:translate3D(0, 5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@keyframes in-up{0%{opacity:0;-webkit-transform:translate3D(0, 5px, 0);transform:translate3D(0, 5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@-webkit-keyframes in-scale{0%{opacity:0;-webkit-transform:scale3D(0.95, 0.95, 1);transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;-webkit-transform:scale3D(1, 1, 1);transform:scale3D(1, 1, 1)}}@keyframes in-scale{0%{opacity:0;-webkit-transform:scale3D(0.95, 0.95, 1);transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;-webkit-transform:scale3D(1, 1, 1);transform:scale3D(1, 1, 1)}}:root{--calcite-popper-transition:150ms ease-in-out}:host([hidden]){display:none}:host{display:block;color:var(--calcite-tree-text);cursor:pointer;outline:none;font-size:0.875rem;line-height:1.5;max-width:100%;--calcite-tree-text:var(--calcite-ui-text-2);--calcite-tree-text:var(--calcite-ui-text-1);--calcite-tree-text:var(--calcite-ui-text-1);--calcite-tree-chevron:var(--calcite-ui-border-1);--calcite-tree-chevron-hover:var(--calcite-ui-text-3);--calcite-tree-vertical-padding:0.375rem;--calcite-tree-indicator:var(--calcite-ui-border-1);--calcite-tree-indicator-active:var(--calcite-ui-brand);--calcite-tree-indicator-first-start:0.1rem;--calcite-tree-indicator-first-end:auto;--calcite-tree-indicator-distance-start:0.15rem;--calcite-tree-indicator-distance-end:auto;--calcite-tree-icon-edge-distance-start:-0.2rem;--calcite-tree-icon-edge-distance-end:0;--calcite-tree-icon-content-distance-start:0.375rem;--calcite-tree-icon-content-distance-end:0;--calcite-tree-indent-start:1.4rem;--calcite-tree-indent-end:0;--calcite-tree-children-indent-start:0.25rem;--calcite-tree-children-indent-end:0;--calcite-tree-children-padding-start:1rem;--calcite-tree-children-padding-end:0;--calcite-tree-checkbox-padding-start:0;--calcite-tree-checkbox-padding-end:0.5rem;--calcite-tree-line-position-start:0.05rem;--calcite-tree-line-position-end:0;--calcite-tree-parent-line-position-start:-0.95rem;--calcite-tree-parent-line-position-end:0;--calcite-tree-line-width:1px;--calcite-tree-hover-line-width:3px}:host([lines]){--calcite-tree-line:var(--calcite-ui-border-3);--calcite-tree-line-hover:var(--calcite-ui-border-1)}:host([lines]) .calcite-tree-node:before{display:none}:host(:not([lines])) .calcite-tree-node:after{display:none}:host([scale=s]){--calcite-tree-hover-line-width:2px;--calcite-tree-vertical-padding:0.1875rem;--calcite-tree-children-indent-start:0rem;--calcite-tree-children-padding-start:0.8rem;--calcite-tree-line-position-start:0.3rem;--calcite-tree-parent-line-position-start:-0.5rem}:host([dir=rtl]){--calcite-tree-indicator-first-start:0;--calcite-tree-indicator-first-end:0.1rem;--calcite-tree-indicator-distance-start:auto;--calcite-tree-indicator-distance-end:0.15rem;--calcite-tree-icon-edge-distance-start:auto;--calcite-tree-icon-edge-distance-end:-0.2rem;--calcite-tree-icon-content-distance-start:0;--calcite-tree-icon-content-distance-end:0.375rem;--calcite-tree-indent-start:0;--calcite-tree-indent-end:1.4rem;--calcite-tree-children-indent-start:0;--calcite-tree-children-indent-end:0.25rem;--calcite-tree-children-padding-start:0;--calcite-tree-children-padding-end:1rem;--calcite-tree-checkbox-padding-start:0.5rem;--calcite-tree-checkbox-padding-end:0;--calcite-tree-line-position-start:0;--calcite-tree-line-position-end:0.05rem;--calcite-tree-parent-line-position-start:0;--calcite-tree-parent-line-position-end:-0.95rem}:host([dir=rtl][scale=s]){--calcite-tree-children-indent-end:0rem;--calcite-tree-children-padding-end:0.8rem;--calcite-tree-line-position-end:0.3rem;--calcite-tree-parent-line-position-end:-0.5rem}::slotted(*){color:inherit;font-size:0.875rem;line-height:1.5;text-decoration:none !important;word-wrap:break-word;overflow-wrap:break-word;min-width:0;max-width:100%}::slotted(*):hover{text-decoration:none !important}::slotted(a){width:100%;text-decoration:none}:host{outline-offset:0;outline-color:transparent;-webkit-transition:outline-offset 100ms ease-in-out, outline-color 100ms ease-in-out;transition:outline-offset 100ms ease-in-out, outline-color 100ms ease-in-out}:host(:focus){outline:2px solid var(--calcite-ui-brand);outline-offset:-2px}.calcite-tree-checkbox{line-height:0;padding-left:var(--calcite-tree-checkbox-padding-start);padding-right:var(--calcite-tree-checkbox-padding-end);outline:none}.calcite-tree-label{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center}.calcite-tree-children{z-index:1;margin-left:var(--calcite-tree-children-indent-start);margin-right:var(--calcite-tree-children-indent-end);padding-left:var(--calcite-tree-children-padding-start);padding-right:var(--calcite-tree-children-padding-end);position:relative;-webkit-transform:scaleY(0);transform:scaleY(0);opacity:0;overflow:hidden;-webkit-transition:0.15s cubic-bezier(0.215, 0.44, 0.42, 0.88), opacity 0.15s cubic-bezier(0.215, 0.44, 0.42, 0.88), all 0.15s ease-in-out;transition:0.15s cubic-bezier(0.215, 0.44, 0.42, 0.88), opacity 0.15s cubic-bezier(0.215, 0.44, 0.42, 0.88), all 0.15s ease-in-out;height:0;-webkit-transform-origin:top;transform-origin:top}.calcite-tree-children:after{-webkit-transition:all 150ms ease-in-out;transition:all 150ms ease-in-out;content:"";height:100%;width:var(--calcite-tree-line-width);background:var(--calcite-tree-line);left:var(--calcite-tree-line-position-start);right:var(--calcite-tree-line-position-end);top:0;position:absolute}:host([expanded])>.calcite-tree-children{-webkit-transform:scaleY(1);transform:scaleY(1);opacity:1;height:auto}:host([has-children]) .calcite-tree-children:hover:after,:host([has-children]) .calcite-tree-children:focus:after{background:var(--calcite-tree-line-hover)}.calcite-tree-node{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;padding:var(--calcite-tree-vertical-padding) 0;padding-left:var(--calcite-tree-indent-start);padding-right:var(--calcite-tree-indent-end);position:relative}.calcite-tree-node:before{content:"•";position:absolute;left:var(--calcite-tree-indicator-distance-start);right:var(--calcite-tree-indicator-distance-end);opacity:0;color:var(--calcite-tree-indicator);-webkit-transition:all 150ms ease-in-out;transition:all 150ms ease-in-out}.calcite-tree-node:after{-webkit-transition:all 150ms ease-in-out;transition:all 150ms ease-in-out;content:"";height:100%;width:var(--calcite-tree-line-width);background:var(--calcite-tree-line);left:var(--calcite-tree-parent-line-position-start);right:var(--calcite-tree-parent-line-position-end);top:0;position:absolute}:host([depth="1"])>.calcite-tree-node:after{display:none}:host([input-enabled]) .calcite-tree-node:before{display:none}:host([has-children])>.calcite-tree-node{padding-left:0;padding-right:0}:host([has-children])>.calcite-tree-node:before{display:none}:host([depth="1"])>.calcite-tree-node:before,:host([depth="1"])>.calcite-tree-children:before{left:var(--calcite-tree-indicator-first-start);right:var(--calcite-tree-indicator-first-end)}.calcite-tree-node:hover:before,:host([selected]) .calcite-tree-node:hover:before,:host(:focus) .calcite-tree-node:before{opacity:1}.calcite-tree-node:hover:after,:host([selected]) .calcite-tree-node:hover:after,:host(:focus) .calcite-tree-node:after{width:var(--calcite-tree-hover-line-width);background:var(--calcite-tree-line-hover);z-index:2}.calcite-tree-node:hover ::slotted(*),:host([selected]) .calcite-tree-node:hover ::slotted(*),:host(:focus) .calcite-tree-node ::slotted(*){color:var(--calcite-tree-text-hover)}.calcite-tree-node:hover .calcite-tree-chevron,:host([selected]) .calcite-tree-node:hover .calcite-tree-chevron,:host(:focus) .calcite-tree-node .calcite-tree-chevron{fill:var(--calcite-tree-chevron-hover)}.calcite-tree-node:hover .calcite-tree-indicator,:host([selected]) .calcite-tree-node:hover .calcite-tree-indicator,:host(:focus) .calcite-tree-node .calcite-tree-indicator{fill:var(--calcite-tree-indicator-hover)}:host([selected])>.calcite-tree-node,:host([selected])>.calcite-tree-node:hover{color:var(--calcite-tree-text-active);font-weight:500}:host([selected])>.calcite-tree-node:before,:host([selected])>.calcite-tree-node:hover:before{opacity:1;color:var(--calcite-tree-indicator-active)}:host([selected])>.calcite-tree-node:after,:host([selected])>.calcite-tree-node:hover:after{background:var(--calcite-ui-brand);width:var(--calcite-tree-hover-line-width);z-index:2}:host([selected])>.calcite-tree-node ::slotted(*),:host([selected])>.calcite-tree-node:hover ::slotted(*){color:var(--calcite-tree-text-active)}:host([has-children][expanded])>.calcite-tree-node{color:var(--calcite-tree-text-active);font-weight:500}:host([has-children][expanded])>.calcite-tree-node:after{background:var(--calcite-ui-brand)}:host([has-children][expanded])>.calcite-tree-node:before{opacity:1;color:var(--calcite-tree-indicator-active)}:host([has-children][expanded])>.calcite-tree-node ::slotted(*){color:var(--calcite-tree-text-active)}:host([has-children][expanded][selected])>.calcite-tree-node:after{background:var(--calcite-ui-brand);width:var(--calcite-tree-hover-line-width);z-index:2}.calcite-tree-chevron{-webkit-transition:all 150ms ease-in-out;transition:all 150ms ease-in-out;-ms-flex:0 0 auto;flex:0 0 auto;position:relative;-ms-flex-item-align:center;align-self:center;left:var(--calcite-tree-icon-edge-distance-start);right:var(--calcite-tree-icon-edge-distance-end);margin-right:var(--calcite-tree-icon-content-distance-start);margin-left:var(--calcite-tree-icon-content-distance-end);-webkit-transform:rotate(0deg);transform:rotate(0deg);fill:var(--calcite-tree-chevron)}:host([dir=rtl]) .calcite-tree-chevron{-webkit-transform:rotate(180deg);transform:rotate(180deg)}:host(:hover) .calcite-tree-chevron,:host(:focus) .calcite-tree-chevron{fill:var(--calcite-tree-chevron-hover);stroke:var(--calcite-tree-chevron-hover);stroke-width:0.75}:host([expanded])>.calcite-tree-node>.calcite-tree-chevron{-webkit-transform:rotate(90deg);transform:rotate(90deg);fill:var(--calcite-ui-brand);stroke-width:0.75;stroke:var(--calcite-ui-brand)}'}}]);