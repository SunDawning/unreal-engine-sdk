"use strict";(self.webpackChunkafd_unreal_engine_sdk_doc=self.webpackChunkafd_unreal_engine_sdk_doc||[]).push([[7022],{67022:function(t,e,n){n.r(e),n.d(e,{calcite_handle:function(){return l}});var a=n(63291),r=function(t,e,n,a){function r(t){return t instanceof n?t:new n((function(e){e(t)}))}return new(n||(n=Promise))((function(n,o){function i(t){try{c(a.next(t))}catch(e){o(e)}}function s(t){try{c(a.throw(t))}catch(e){o(e)}}function c(t){t.done?n(t.value):r(t.value).then(i,s)}c((a=a.apply(t,e||[])).next())}))},o=function(t,e){var n,a,r,o,i={label:0,sent:function(){if(1&r[0])throw r[1];return r[1]},trys:[],ops:[]};return o={next:s(0),throw:s(1),return:s(2)},"function"==typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function s(t){return function(e){return c([t,e])}}function c(o){if(n)throw new TypeError("Generator is already executing.");for(;i;)try{if(n=1,a&&(r=2&o[0]?a.return:o[0]?a.throw||((r=a.return)&&r.call(a),0):a.next)&&!(r=r.call(a,o[1])).done)return r;switch(a=0,r&&(o=[2&o[0],r.value]),o[0]){case 0:case 1:r=o;break;case 4:return i.label++,{value:o[1],done:!1};case 5:i.label++,a=o[1],o=[0];continue;case 7:o=i.ops.pop(),i.trys.pop();continue;default:if(!(r=i.trys,(r=r.length>0&&r[r.length-1])||6!==o[0]&&2!==o[0])){i=0;continue}if(3===o[0]&&(!r||o[1]>r[0]&&o[1]<r[3])){i.label=o[1];break}if(6===o[0]&&i.label<r[1]){i.label=r[1],r=o;break}if(r&&i.label<r[2]){i.label=r[2],i.ops.push(o);break}r[2]&&i.ops.pop(),i.trys.pop();continue}o=e.call(t,i)}catch(s){o=[6,s],a=0}finally{n=r=0}if(5&o[0])throw o[1];return{value:o[0]?o[1]:void 0,done:!0}}},i="handle",s="handle--activated",c="drag",l=function(){function t(t){var e=this;(0,a.r)(this,t),this.calciteHandleNudge=(0,a.c)(this,"calciteHandleNudge",7),this.activated=!1,this.textTitle="handle",this.handleKeyDown=function(t){switch(t.key){case" ":e.activated=!e.activated;break;case"ArrowUp":case"ArrowDown":if(!e.activated)return;var n=t.key.toLowerCase().replace("arrow","");e.calciteHandleNudge.emit({handle:e.el,direction:n})}},this.handleBlur=function(){e.activated=!1}}return t.prototype.setFocus=function(){return r(this,void 0,void 0,(function(){return o(this,(function(t){return this.handleButton.focus(),[2]}))}))},t.prototype.render=function(){var t,e=this;return(0,a.h)("span",{"aria-pressed":this.activated.toString(),class:(t={},t[i]=!0,t[s]=this.activated,t),onBlur:this.handleBlur,onKeyDown:this.handleKeyDown,ref:function(t){e.handleButton=t},role:"button",tabindex:"0",title:this.textTitle},(0,a.h)("calcite-icon",{icon:c,scale:"s"}))},Object.defineProperty(t.prototype,"el",{get:function(){return(0,a.g)(this)},enumerable:!1,configurable:!0}),t}();l.style="@-webkit-keyframes in{0%{opacity:0}100%{opacity:1}}@keyframes in{0%{opacity:0}100%{opacity:1}}@-webkit-keyframes in-down{0%{opacity:0;-webkit-transform:translate3D(0, -5px, 0);transform:translate3D(0, -5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@keyframes in-down{0%{opacity:0;-webkit-transform:translate3D(0, -5px, 0);transform:translate3D(0, -5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@-webkit-keyframes in-up{0%{opacity:0;-webkit-transform:translate3D(0, 5px, 0);transform:translate3D(0, 5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@keyframes in-up{0%{opacity:0;-webkit-transform:translate3D(0, 5px, 0);transform:translate3D(0, 5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@-webkit-keyframes in-scale{0%{opacity:0;-webkit-transform:scale3D(0.95, 0.95, 1);transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;-webkit-transform:scale3D(1, 1, 1);transform:scale3D(1, 1, 1)}}@keyframes in-scale{0%{opacity:0;-webkit-transform:scale3D(0.95, 0.95, 1);transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;-webkit-transform:scale3D(1, 1, 1);transform:scale3D(1, 1, 1)}}:root{--calcite-popper-transition:150ms ease-in-out}:host([hidden]){display:none}:host{display:-ms-flexbox;display:flex}.handle{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-item-align:stretch;align-self:stretch;-ms-flex-pack:center;justify-content:center;background-color:transparent;border-style:none;cursor:move;outline-offset:0;outline-color:transparent;-webkit-transition:outline-offset 100ms ease-in-out, outline-color 100ms ease-in-out;transition:outline-offset 100ms ease-in-out, outline-color 100ms ease-in-out;color:var(--calcite-ui-border-3);padding:0.75rem 0.25rem;line-height:0}.handle:hover{background-color:var(--calcite-ui-foreground-2);color:var(--calcite-ui-text-1)}.handle:focus{color:var(--calcite-ui-text-1);outline:2px solid var(--calcite-ui-brand);outline-offset:-2px}.handle--activated{background-color:var(--calcite-ui-foreground-3);color:var(--calcite-ui-text-1)}.handle calcite-icon{color:inherit}"}}]);