"use strict";(self.webpackChunkafd_unreal_engine_sdk_doc=self.webpackChunkafd_unreal_engine_sdk_doc||[]).push([[1490],{41490:function(t,e,a){a.r(e),a.d(e,{calcite_filter:function(){return m}});var n=a(63291),i=a(46350),r=a(81580),o=a(21308),s=function(t,e,a,n){function i(t){return t instanceof a?t:new a((function(e){e(t)}))}return new(a||(a=Promise))((function(a,r){function o(t){try{l(n.next(t))}catch(e){r(e)}}function s(t){try{l(n.throw(t))}catch(e){r(e)}}function l(t){t.done?a(t.value):i(t.value).then(o,s)}l((n=n.apply(t,e||[])).next())}))},l=function(t,e){var a,n,i,r,o={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return r={next:s(0),throw:s(1),return:s(2)},"function"==typeof Symbol&&(r[Symbol.iterator]=function(){return this}),r;function s(t){return function(e){return l([t,e])}}function l(r){if(a)throw new TypeError("Generator is already executing.");for(;o;)try{if(a=1,n&&(i=2&r[0]?n.return:r[0]?n.throw||((i=n.return)&&i.call(n),0):n.next)&&!(i=i.call(n,r[1])).done)return i;switch(n=0,i&&(r=[2&r[0],i.value]),r[0]){case 0:case 1:i=r;break;case 4:return o.label++,{value:r[1],done:!1};case 5:o.label++,n=r[1],r=[0];continue;case 7:r=o.ops.pop(),o.trys.pop();continue;default:if(!(i=o.trys,(i=i.length>0&&i[i.length-1])||6!==r[0]&&2!==r[0])){o=0;continue}if(3===r[0]&&(!i||r[1]>i[0]&&r[1]<i[3])){o.label=r[1];break}if(6===r[0]&&o.label<i[1]){o.label=i[1],i=r;break}if(i&&o.label<i[2]){o.label=i[2],o.ops.push(r);break}i[2]&&o.ops.pop(),o.trys.pop();continue}r=e.call(t,o)}catch(s){r=[6,s],n=0}finally{a=i=0}if(5&r[0])throw r[1];return{value:r[0]?r[1]:void 0,done:!0}}},c="container",u="search-icon",p="clear-button",f="filter",d="Clear filter",h="search",b="x",m=function(){function t(t){var e=this;(0,n.r)(this,t),this.calciteFilterChange=(0,n.c)(this,"calciteFilterChange",7),this.disabled=!1,this.empty=!0,this.filter=(0,r.d)((function(t){var a=new RegExp(t,"ig");if(0===e.data.length)return console.warn("No data was passed to calcite-filter.\n      The data property expects an array of objects"),void e.calciteFilterChange.emit([]);var n=function t(e,a){var n=!1;return(0,o.f)(e,(function(e){"function"!=typeof e&&(Array.isArray(e)||"object"==typeof e&&null!==e?t(e,a)&&(n=!0):a.test(e)&&(n=!0))})),n},i=e.data.filter((function(t){return n(t,a)}));e.calciteFilterChange.emit(i)}),250),this.inputHandler=function(t){var a=t.target;e.empty=""===a.value,e.filter(a.value)},this.keyDownHandler=function(t){"Escape"===t.key&&e.clear()},this.clear=function(){e.textInput.value="",e.empty=!0,e.calciteFilterChange.emit(e.data),e.setFocus()}}return t.prototype.setFocus=function(){return s(this,void 0,void 0,(function(){return l(this,(function(t){return(0,i.f)(this.textInput),[2]}))}))},t.prototype.render=function(){var t=this,e="rtl"===(0,i.g)(this.el),a=this.disabled;return(0,n.h)(n.F,null,a?(0,n.h)("calcite-scrim",null):null,(0,n.h)("div",{class:c},(0,n.h)("label",{class:e?i.C.rtl:null},(0,n.h)("input",{"aria-label":this.intlLabel||f,disabled:this.disabled,onInput:this.inputHandler,onKeyDown:this.keyDownHandler,placeholder:this.placeholder,ref:function(e){t.textInput=e},type:"text",value:""}),(0,n.h)("div",{class:u},(0,n.h)("calcite-icon",{icon:h,scale:"s"}))),this.empty?null:(0,n.h)("button",{"aria-label":this.intlClear||d,class:p,onClick:this.clear},(0,n.h)("calcite-icon",{icon:b}))))},Object.defineProperty(t.prototype,"el",{get:function(){return(0,n.g)(this)},enumerable:!1,configurable:!0}),t}();m.style="@-webkit-keyframes in{0%{opacity:0}100%{opacity:1}}@keyframes in{0%{opacity:0}100%{opacity:1}}@-webkit-keyframes in-down{0%{opacity:0;-webkit-transform:translate3D(0, -5px, 0);transform:translate3D(0, -5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@keyframes in-down{0%{opacity:0;-webkit-transform:translate3D(0, -5px, 0);transform:translate3D(0, -5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@-webkit-keyframes in-up{0%{opacity:0;-webkit-transform:translate3D(0, 5px, 0);transform:translate3D(0, 5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@keyframes in-up{0%{opacity:0;-webkit-transform:translate3D(0, 5px, 0);transform:translate3D(0, 5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@-webkit-keyframes in-scale{0%{opacity:0;-webkit-transform:scale3D(0.95, 0.95, 1);transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;-webkit-transform:scale3D(1, 1, 1);transform:scale3D(1, 1, 1)}}@keyframes in-scale{0%{opacity:0;-webkit-transform:scale3D(0.95, 0.95, 1);transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;-webkit-transform:scale3D(1, 1, 1);transform:scale3D(1, 1, 1)}}:host{-webkit-box-sizing:border-box;box-sizing:border-box;background-color:var(--calcite-ui-foreground-1);color:var(--calcite-ui-text-2);font-size:var(--calcite-font-size--1)}:host *{-webkit-box-sizing:border-box;box-sizing:border-box}:root{--calcite-popper-transition:150ms ease-in-out}:host([hidden]){display:none}:host{display:-ms-flexbox;display:flex;width:100%}.container{display:-ms-flexbox;display:flex;width:100%;padding:0.5rem}label{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;overflow:hidden;position:relative;width:100%;margin-left:0.25rem;margin-right:0.25rem;margin-top:0;margin-bottom:0}input[type=text]{background-color:transparent;border-style:none;font-family:inherit;color:var(--calcite-ui-text-1);font-size:var(--calcite-font-size--2);line-height:1rem;margin-bottom:0.25rem;width:100%;padding-top:0.25rem;padding-bottom:0.25rem;padding-right:0.25rem;padding-left:1.5rem;-webkit-transition:padding 150ms ease-in-out, -webkit-box-shadow 150ms ease-in-out;transition:padding 150ms ease-in-out, -webkit-box-shadow 150ms ease-in-out;transition:padding 150ms ease-in-out, box-shadow 150ms ease-in-out;transition:padding 150ms ease-in-out, box-shadow 150ms ease-in-out, -webkit-box-shadow 150ms ease-in-out}input[type=text]::-ms-clear{display:none}.search-icon{display:-ms-flexbox;display:flex;left:0;position:absolute;color:var(--calcite-ui-text-2);-webkit-transition:left 150ms ease-in-out, right 150ms ease-in-out, opacity 150ms ease-in-out;transition:left 150ms ease-in-out, right 150ms ease-in-out, opacity 150ms ease-in-out}.calcite--rtl .search-icon{right:0}input[type=text]:focus{border-color:var(--calcite-ui-brand);outline:2px solid transparent;outline-offset:2px;padding-left:0.25rem;padding-right:0.25rem;-webkit-box-shadow:0 2px 0 var(--calcite-ui-brand);box-shadow:0 2px 0 var(--calcite-ui-brand)}input[type=text]:focus~.search-icon{left:calc(1rem * -1);opacity:0}.calcite--rtl input[type=text]{padding-left:0.25rem;padding-right:1.5rem}.calcite--rtl input[type=text]:focus{padding-right:1.25rem}.calcite--rtl input[type=text]:focus~.search-icon{right:calc(1rem * -1)}.clear-button{color:var(--calcite-ui-text-2);background-color:transparent;border-width:0;cursor:pointer}.clear-button:hover,.clear-button:focus{color:var(--calcite-ui-text-1)}"}}]);