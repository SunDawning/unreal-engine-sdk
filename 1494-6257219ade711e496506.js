"use strict";(self.webpackChunkafd_unreal_engine_sdk_doc=self.webpackChunkafd_unreal_engine_sdk_doc||[]).push([[1494],{41494:function(t,e,i){i.r(e),i.d(e,{calcite_radio_group:function(){return l},calcite_radio_group_item:function(){return c}});var n=i(63291),r=i(46350),o=i(1775),a=function(t,e,i,n){function r(t){return t instanceof i?t:new i((function(e){e(t)}))}return new(i||(i=Promise))((function(i,o){function a(t){try{l(n.next(t))}catch(e){o(e)}}function s(t){try{l(n.throw(t))}catch(e){o(e)}}function l(t){t.done?i(t.value):r(t.value).then(a,s)}l((n=n.apply(t,e||[])).next())}))},s=function(t,e){var i,n,r,o,a={label:0,sent:function(){if(1&r[0])throw r[1];return r[1]},trys:[],ops:[]};return o={next:s(0),throw:s(1),return:s(2)},"function"==typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function s(t){return function(e){return l([t,e])}}function l(o){if(i)throw new TypeError("Generator is already executing.");for(;a;)try{if(i=1,n&&(r=2&o[0]?n.return:o[0]?n.throw||((r=n.return)&&r.call(n),0):n.next)&&!(r=r.call(n,o[1])).done)return r;switch(n=0,r&&(o=[2&o[0],r.value]),o[0]){case 0:case 1:r=o;break;case 4:return a.label++,{value:o[1],done:!1};case 5:a.label++,n=o[1],o=[0];continue;case 7:o=a.ops.pop(),a.trys.pop();continue;default:if(!(r=a.trys,(r=r.length>0&&r[r.length-1])||6!==o[0]&&2!==o[0])){a=0;continue}if(3===o[0]&&(!r||o[1]>r[0]&&o[1]<r[3])){a.label=o[1];break}if(6===o[0]&&a.label<r[1]){a.label=r[1],r=o;break}if(r&&a.label<r[2]){a.label=r[2],a.ops.push(o);break}r[2]&&a.ops.pop(),a.trys.pop();continue}o=e.call(t,a)}catch(s){o=[6,s],n=0}finally{i=r=0}if(5&o[0])throw o[1];return{value:o[0]?o[1]:void 0,done:!0}}},l=function(){function t(t){var e=this;(0,n.r)(this,t),this.calciteRadioGroupChange=(0,n.c)(this,"calciteRadioGroupChange",7),this.appearance="solid",this.layout="horizontal",this.scale="m",this.width="auto",this.hiddenInput=function(){var t=document.createElement("input");return t.type="hidden",e.el.appendChild(t),t}()}return t.prototype.handleNameChange=function(t){this.hiddenInput.name=t},t.prototype.handleSelectedItemChange=function(t,e){if(t!==e){var i=this.getItems(),n=Array.from(i).filter((function(e){return e===t})).pop();n?(this.selectItem(n),this.calciteRadioGroupChange.emit(n.value)):i[0]&&(i[0].tabIndex=0)}},t.prototype.connectedCallback=function(){var t=this.getItems(),e=Array.from(t).filter((function(t){return t.checked})).pop();e?this.selectItem(e):t[0]&&(t[0].tabIndex=0);var i=this.hiddenInput,n=this.name;n&&(i.name=n),e&&(i.value=e.value)},t.prototype.componentDidLoad=function(){this.hasLoaded=!0},t.prototype.render=function(){return(0,n.h)(n.H,{role:"radiogroup",tabIndex:this.disabled?-1:null},(0,n.h)("slot",null))},t.prototype.handleLabelFocus=function(t){(0,r.h)(t.detail.labelEl,this.el)&&this.setFocus()},t.prototype.handleClick=function(t){"calcite-radio-group-item"===t.target.localName&&this.selectItem(t.target)},t.prototype.handleSelected=function(t){this.hasLoaded&&(t.stopPropagation(),t.preventDefault(),this.selectItem(t.target))},t.prototype.handleKeyDown=function(t){var e=(0,o.g)(t.key),i=this.el,n=this.selectedItem;if(-1!==["ArrowLeft","ArrowUp","ArrowRight","ArrowDown"," "].indexOf(e)){var a=e;"rtl"===(0,r.g)(i)&&("ArrowRight"===e&&(a="ArrowLeft"),"ArrowLeft"===e&&(a="ArrowRight"));var s=this.getItems(),l=-1;switch(s.forEach((function(t,e){t===n&&(l=e)})),a){case"ArrowLeft":case"ArrowUp":t.preventDefault();var c=l<1?s.item(s.length-1):s.item(l-1);return void this.selectItem(c);case"ArrowRight":case"ArrowDown":t.preventDefault();var u=-1===l?s.item(1):s.item(l+1)||s.item(0);return void this.selectItem(u);case" ":return t.preventDefault(),void this.selectItem(t.target);default:return}}},t.prototype.setFocus=function(){return a(this,void 0,void 0,(function(){var t;return s(this,(function(e){return null===(t=this.selectedItem||this.getItems()[0])||void 0===t||t.focus(),[2]}))}))},t.prototype.getItems=function(){return this.el.querySelectorAll("calcite-radio-group-item")},t.prototype.selectItem=function(t){if(t!==this.selectedItem){var e=this.getItems(),i=null;e.forEach((function(e){var n=e.value===t.value;(n&&!e.checked||!n&&e.checked)&&(e.checked=n),e.tabIndex=n?0:-1,n&&(i=e)})),this.selectedItem=i,this.syncWithInputProxy(i),i&&i.focus()}},t.prototype.syncWithInputProxy=function(t){this.hiddenInput.value=t?t.value:""},Object.defineProperty(t.prototype,"el",{get:function(){return(0,n.g)(this)},enumerable:!1,configurable:!0}),Object.defineProperty(t,"watchers",{get:function(){return{name:["handleNameChange"],selectedItem:["handleSelectedItemChange"]}},enumerable:!1,configurable:!0}),t}();l.style="@-webkit-keyframes in{0%{opacity:0}100%{opacity:1}}@keyframes in{0%{opacity:0}100%{opacity:1}}@-webkit-keyframes in-down{0%{opacity:0;-webkit-transform:translate3D(0, -5px, 0);transform:translate3D(0, -5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@keyframes in-down{0%{opacity:0;-webkit-transform:translate3D(0, -5px, 0);transform:translate3D(0, -5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@-webkit-keyframes in-up{0%{opacity:0;-webkit-transform:translate3D(0, 5px, 0);transform:translate3D(0, 5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@keyframes in-up{0%{opacity:0;-webkit-transform:translate3D(0, 5px, 0);transform:translate3D(0, 5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@-webkit-keyframes in-scale{0%{opacity:0;-webkit-transform:scale3D(0.95, 0.95, 1);transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;-webkit-transform:scale3D(1, 1, 1);transform:scale3D(1, 1, 1)}}@keyframes in-scale{0%{opacity:0;-webkit-transform:scale3D(0.95, 0.95, 1);transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;-webkit-transform:scale3D(1, 1, 1);transform:scale3D(1, 1, 1)}}:root{--calcite-popper-transition:150ms ease-in-out}:host([hidden]){display:none}:host([scale=s]){min-height:1.5rem}:host([scale=m]){min-height:2rem}:host([scale=l]){min-height:3rem}:host{display:-ms-flexbox;display:flex;background-color:var(--calcite-ui-foreground-1);width:-webkit-fit-content;width:-moz-fit-content;width:fit-content;outline:1px solid var(--calcite-ui-border-input);outline-offset:-1px}:host([layout=vertical]){-ms-flex-direction:column;flex-direction:column;-ms-flex-align:start;align-items:flex-start;-ms-flex-item-align:start;align-self:flex-start}:host([width=full]){width:100%;min-width:-webkit-fit-content;min-width:-moz-fit-content;min-width:fit-content}:host([width=full]) ::slotted(calcite-radio-group-item){-ms-flex:1 1 auto;flex:1 1 auto}:host([width=full][layout=vertical]) ::slotted(calcite-radio-group-item){-ms-flex-pack:start;justify-content:flex-start}::slotted(calcite-radio-group-item[checked]),::slotted(calcite-radio-group-item:focus){z-index:0}:host([disabled]){opacity:0.5;pointer-events:none}";var c=function(){function t(t){(0,n.r)(this,t),this.calciteRadioGroupItemChange=(0,n.c)(this,"calciteRadioGroupItemChange",7),this.checked=!1,this.iconPosition="start",this.mutationObserver=this.getMutationObserver()}return t.prototype.handleCheckedChange=function(){this.calciteRadioGroupItemChange.emit(),this.syncToExternalInput()},t.prototype.connectedCallback=function(){var t=this.el.querySelector('input[slot="input"]');t&&(this.value=t.value,this.checked=t.checked,this.mutationObserver.observe(t,{attributes:!0})),this.inputProxy=t},t.prototype.disconnectedCallback=function(){this.mutationObserver.disconnect()},t.prototype.componentWillLoad=function(){var t=this.el.querySelector("label");this.useFallback=!t||""===t.textContent},t.prototype.render=function(){var t=this,e=t.checked,i=t.useFallback,o=t.value,a=(0,r.g)(this.el),s=(0,r.d)(this.el,"scale","m"),l=(0,r.d)(this.el,"appearance","solid"),c=(0,r.d)(this.el,"layout","horizontal"),u=(0,n.h)("calcite-icon",{class:"radio-group-item-icon",dir:a,flipRtl:this.iconFlipRtl,icon:this.icon,scale:"s"});return(0,n.h)(n.H,{"aria-checked":e.toString(),role:"radio"},(0,n.h)("label",{class:{"label--scale-s":"s"===s,"label--scale-m":"m"===s,"label--scale-l":"l"===s,"label--horizontal":"horizontal"===c,"label--outline":"outline"===l}},this.icon&&"start"===this.iconPosition?u:null,(0,n.h)("slot",null,i?o:""),(0,n.h)("slot",{name:"input"}),this.icon&&"end"===this.iconPosition?u:null))},t.prototype.getMutationObserver=function(){var t=this;return new MutationObserver((function(){return t.syncFromExternalInput()}))},t.prototype.syncFromExternalInput=function(){this.inputProxy&&(this.value=this.inputProxy.value,this.checked=this.inputProxy.checked)},t.prototype.syncToExternalInput=function(){this.inputProxy&&(this.inputProxy.value=this.value,this.checked?this.inputProxy.setAttribute("checked",""):this.inputProxy.removeAttribute("checked"))},Object.defineProperty(t.prototype,"el",{get:function(){return(0,n.g)(this)},enumerable:!1,configurable:!0}),Object.defineProperty(t,"watchers",{get:function(){return{checked:["handleCheckedChange"]}},enumerable:!1,configurable:!0}),t}();c.style="@-webkit-keyframes in{0%{opacity:0}100%{opacity:1}}@keyframes in{0%{opacity:0}100%{opacity:1}}@-webkit-keyframes in-down{0%{opacity:0;-webkit-transform:translate3D(0, -5px, 0);transform:translate3D(0, -5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@keyframes in-down{0%{opacity:0;-webkit-transform:translate3D(0, -5px, 0);transform:translate3D(0, -5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@-webkit-keyframes in-up{0%{opacity:0;-webkit-transform:translate3D(0, 5px, 0);transform:translate3D(0, 5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@keyframes in-up{0%{opacity:0;-webkit-transform:translate3D(0, 5px, 0);transform:translate3D(0, 5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@-webkit-keyframes in-scale{0%{opacity:0;-webkit-transform:scale3D(0.95, 0.95, 1);transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;-webkit-transform:scale3D(1, 1, 1);transform:scale3D(1, 1, 1)}}@keyframes in-scale{0%{opacity:0;-webkit-transform:scale3D(0.95, 0.95, 1);transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;-webkit-transform:scale3D(1, 1, 1);transform:scale3D(1, 1, 1)}}:root{--calcite-popper-transition:150ms ease-in-out}:host([hidden]){display:none}:host{display:-ms-flexbox;display:flex;-ms-flex-item-align:stretch;align-self:stretch;cursor:pointer;-webkit-transition:background-color 0.1s ease-in-out, border-color 0.1s ease-in-out;transition:background-color 0.1s ease-in-out, border-color 0.1s ease-in-out}:host label{display:-ms-flexbox;display:flex;-ms-flex:1 1 0%;flex:1 1 0%;color:var(--calcite-ui-text-3);-webkit-box-sizing:border-box;box-sizing:border-box;pointer-events:none;-ms-flex-align:center;align-items:center;-webkit-transition:background-color 0.1s ease-in-out, border-color 0.1s ease-in-out;transition:background-color 0.1s ease-in-out, border-color 0.1s ease-in-out;margin:2px}.label--horizontal{-ms-flex-pack:center;justify-content:center}:host{outline-offset:0;outline-color:transparent;-webkit-transition:outline-offset 100ms ease-in-out, outline-color 100ms ease-in-out;transition:outline-offset 100ms ease-in-out, outline-color 100ms ease-in-out}:host(:focus){outline:2px solid var(--calcite-ui-brand);outline-offset:-2px;outline-offset:-1px}.label--scale-s{font-size:var(--calcite-font-size--2);line-height:1rem;padding-left:0.5rem;padding-right:0.5rem;padding-top:0.125rem;padding-bottom:0.125rem}.label--scale-m{font-size:var(--calcite-font-size--1);line-height:1rem;padding-left:0.75rem;padding-right:0.75rem;padding-top:0.375rem;padding-bottom:0.375rem}.label--scale-l{font-size:var(--calcite-font-size-1);line-height:1.5rem;padding-left:1rem;padding-right:1rem;padding-top:0.625rem;padding-bottom:0.625rem}:host(:hover) label{background-color:var(--calcite-ui-foreground-2);color:var(--calcite-ui-text-1)}:host(:active) label{background-color:var(--calcite-ui-foreground-3)}:host([checked]) label{background-color:var(--calcite-ui-brand);border-color:var(--calcite-ui-brand);cursor:default;color:var(--calcite-ui-background)}:host([checked]) .label--outline{background-color:var(--calcite-ui-foreground-1);border-color:var(--calcite-ui-brand);-webkit-box-shadow:inset 0 0 0 1px var(--calcite-ui-brand);box-shadow:inset 0 0 0 1px var(--calcite-ui-brand);color:var(--calcite-ui-brand)}::slotted(input){display:none}.radio-group-item-icon{display:-ms-inline-flexbox;display:inline-flex;position:relative;margin:0;-webkit-transition-property:all;transition-property:all;-webkit-transition-duration:150ms;transition-duration:150ms;-webkit-transition-timing-function:ease-in-out;transition-timing-function:ease-in-out;-webkit-transition-delay:0s;transition-delay:0s;line-height:inherit}:host([icon-position=start]) .radio-group-item-icon{margin-right:0.5rem}:host([icon-position=start][dir=rtl]) .radio-group-item-icon{margin-right:0;margin-left:0.5rem}:host([icon-position=end]) .radio-group-item-icon{margin-left:0.5rem}:host([icon-position=end][dir=rtl]) .radio-group-item-icon{margin-left:0;margin-right:0.5rem}"}}]);