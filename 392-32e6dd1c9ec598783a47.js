"use strict";(self.webpackChunkafd_unreal_engine_sdk_doc=self.webpackChunkafd_unreal_engine_sdk_doc||[]).push([[392],{80392:function(t,e,a){a.r(e),a.d(e,{calcite_input_date_picker:function(){return h}});var i=a(63291),n=a(87747),r=a(46350),o=a(1775),s=a(54654),l=function(t,e,a,i){function n(t){return t instanceof a?t:new a((function(e){e(t)}))}return new(a||(a=Promise))((function(a,r){function o(t){try{l(i.next(t))}catch(e){r(e)}}function s(t){try{l(i.throw(t))}catch(e){r(e)}}function l(t){t.done?a(t.value):n(t.value).then(o,s)}l((i=i.apply(t,e||[])).next())}))},c=function(t,e){var a,i,n,r,o={label:0,sent:function(){if(1&n[0])throw n[1];return n[1]},trys:[],ops:[]};return r={next:s(0),throw:s(1),return:s(2)},"function"==typeof Symbol&&(r[Symbol.iterator]=function(){return this}),r;function s(t){return function(e){return l([t,e])}}function l(r){if(a)throw new TypeError("Generator is already executing.");for(;o;)try{if(a=1,i&&(n=2&r[0]?i.return:r[0]?i.throw||((n=i.return)&&n.call(i),0):i.next)&&!(n=n.call(i,r[1])).done)return n;switch(i=0,n&&(r=[2&r[0],n.value]),r[0]){case 0:case 1:n=r;break;case 4:return o.label++,{value:r[1],done:!1};case 5:o.label++,i=r[1],r=[0];continue;case 7:r=o.ops.pop(),o.trys.pop();continue;default:if(!(n=o.trys,(n=n.length>0&&n[n.length-1])||6!==r[0]&&2!==r[0])){o=0;continue}if(3===r[0]&&(!n||r[1]>n[0]&&r[1]<n[3])){o.label=r[1];break}if(6===r[0]&&o.label<n[1]){o.label=n[1],n=r;break}if(n&&o.label<n[2]){o.label=n[2],o.ops.push(r);break}n[2]&&o.ops.pop(),o.trys.pop();continue}r=e.call(t,o)}catch(s){r=[6,s],i=0}finally{a=n=0}if(5&r[0])throw r[1];return{value:r[0]?r[1]:void 0,done:!0}}},p="bottom-leading",h=function(){function t(t){var e=this;(0,i.r)(this,t),this.calciteDatePickerChange=(0,i.c)(this,"calciteDatePickerChange",7),this.calciteDatePickerRangeChange=(0,i.c)(this,"calciteDatePickerRangeChange",7),this.active=!1,this.intlPrevMonth=n.T.prevMonth,this.intlNextMonth=n.T.nextMonth,this.locale=document.documentElement.lang||"en",this.scale="m",this.range=!1,this.overlayPositioning="absolute",this.proximitySelectionDisabled=!1,this.layout="horizontal",this.focusedInput="start",this.hasShadow=!!document.head.attachShadow,this.setEndInput=function(t){e.endInput=t},this.deactivate=function(){e.active=!1},this.keyUpHandler=function(t){"Escape"===(0,o.g)(t.key)&&(e.active=!1)},this.inputBlur=function(t){e.blur(t.detail)},this.startInputFocus=function(){e.active=!0,e.focusedInput="start"},this.endInputFocus=function(){e.active=!0,e.focusedInput="end"},this.inputInput=function(t){e.input(t.detail.value)},this.setMenuEl=function(t){t&&(e.menuEl=t,e.createPopper())},this.setStartWrapper=function(t){e.startWrapper=t,e.setReferenceEl()},this.setEndWrapper=function(t){e.endWrapper=t,e.setReferenceEl()},this.handleDateChange=function(t){e.range||(e.valueAsDate=t.detail)},this.handleDateRangeChange=function(t){if(e.range&&t.detail){var a=t.detail,i=a.startDate,n=a.endDate;e.startAsDate=i,e.endAsDate=n,clearTimeout(e.endInputFocusTimeout),i&&"start"===e.focusedInput&&(e.endInputFocusTimeout=window.setTimeout((function(){var t;return null===(t=e.endInput)||void 0===t?void 0:t.setFocus()}),150))}}}return t.prototype.activeHandler=function(){this.reposition()},t.prototype.focusInHandler=function(t){this.hasShadow||this.el.contains(t.target)||(this.active=!1)},t.prototype.calciteDaySelectHandler=function(){this.active=!1},t.prototype.reposition=function(){return l(this,void 0,void 0,(function(){var t,e,a,i;return c(this,(function(n){return e=(t=this).popper,a=t.menuEl,i=this.getModifiers(),e?(0,s.u)({el:a,modifiers:i,placement:p,popper:e}):this.createPopper(),[2]}))}))},t.prototype.connectedCallback=function(){this.loadLocaleData(),this.value&&(this.valueAsDate=(0,n.d)(this.value)),this.start&&this.setStartAsDate((0,n.d)(this.start)),this.end&&this.setEndAsDate((0,n.d)(this.end)),this.min&&(this.minAsDate=(0,n.d)(this.min)),this.max&&(this.maxAsDate=(0,n.d)(this.max)),this.createPopper()},t.prototype.disconnectedCallback=function(){this.destroyPopper()},t.prototype.render=function(){var t,e,a,o=(0,n.a)(this.range?this.startAsDate:this.valueAsDate,this.minAsDate,this.maxAsDate),l=this.range?(0,n.a)(this.endAsDate,this.minAsDate,this.maxAsDate):null,c=l?l.toLocaleDateString(this.locale):"",p=o?o.toLocaleDateString(this.locale):"",h=(0,r.g)(this.el);return(0,i.h)(i.H,{onBlur:this.deactivate,onKeyUp:this.keyUpHandler,role:"application"},this.localeData&&(0,i.h)("div",{"aria-expanded":this.active.toString(),class:"input-container",dir:h,role:"application"},(0,i.h)("div",{class:"input-wrapper",ref:this.setStartWrapper},(0,i.h)("calcite-input",{class:"input "+("vertical"===this.layout&&this.range?"no-bottom-border":""),icon:"calendar","number-button-type":"none",onCalciteInputBlur:this.inputBlur,onCalciteInputFocus:this.startInputFocus,onCalciteInputInput:this.inputInput,placeholder:null===(e=this.localeData)||void 0===e?void 0:e.placeholder,scale:this.scale,type:"text",value:p})),(0,i.h)("div",{"aria-hidden":(!this.active).toString(),class:"menu-container",ref:this.setMenuEl},(0,i.h)("div",{class:(t={},t["calendar-picker-wrapper"]=!0,t["calendar-picker-wrapper--end"]="end"===this.focusedInput,t[s.C.animation]=!0,t[s.C.animationActive]=this.active,t)},(0,i.h)("calcite-date-picker",{activeRange:this.focusedInput,endAsDate:this.endAsDate,headingLevel:this.headingLevel,intlNextMonth:this.intlNextMonth,intlPrevMonth:this.intlPrevMonth,locale:this.locale,max:this.max,maxAsDate:this.maxAsDate,min:this.min,minAsDate:this.minAsDate,onCalciteDatePickerChange:this.handleDateChange,onCalciteDatePickerRangeChange:this.handleDateRangeChange,proximitySelectionDisabled:this.proximitySelectionDisabled,range:this.range,scale:this.scale,startAsDate:this.startAsDate,tabIndex:0,valueAsDate:this.valueAsDate}))),this.range&&"horizontal"===this.layout&&(0,i.h)("div",{class:"horizontal-arrow-container"},(0,i.h)("calcite-icon",{flipRtl:!0,icon:"arrow-right",scale:"s"})),this.range&&"vertical"===this.layout&&(0,i.h)("div",{class:"vertical-arrow-container"},(0,i.h)("calcite-icon",{icon:"arrow-down",scale:"s"})),this.range&&(0,i.h)("div",{class:"input-wrapper",ref:this.setEndWrapper},(0,i.h)("calcite-input",{class:"input",icon:"calendar","number-button-type":"none",onCalciteInputBlur:this.inputBlur,onCalciteInputFocus:this.endInputFocus,onCalciteInputInput:this.inputInput,placeholder:null===(a=this.localeData)||void 0===a?void 0:a.placeholder,ref:this.setEndInput,scale:this.scale,type:"text",value:c}))))},t.prototype.setReferenceEl=function(){var t=this,e=t.focusedInput,a=t.layout,i=t.endWrapper,n=t.startWrapper;this.referenceEl="end"===e||"vertical"===a?i||n:n||i,this.createPopper()},t.prototype.getModifiers=function(){var t={name:"flip",enabled:!0,options:{fallbackPlacements:["top-start","top","top-end","bottom-start","bottom","bottom-end"]}};return[t]},t.prototype.createPopper=function(){this.destroyPopper();var t=this,e=t.menuEl,a=t.referenceEl,i=t.overlayPositioning;if(e&&a){var n=this.getModifiers();this.popper=(0,s.c)({el:e,modifiers:n,overlayPositioning:i,placement:p,referenceEl:a})}},t.prototype.destroyPopper=function(){var t=this.popper;t&&t.destroy(),this.popper=null},t.prototype.valueWatcher=function(t){this.valueAsDate=(0,n.d)(t)},t.prototype.startWatcher=function(t){this.setStartAsDate((0,n.d)(t))},t.prototype.endWatcher=function(t){this.setEndAsDate((0,n.d)(t))},t.prototype.loadLocaleData=function(){return l(this,void 0,void 0,(function(){var t,e;return c(this,(function(a){switch(a.label){case 0:return t=this.locale,e=this,[4,(0,n.g)(t)];case 1:return e.localeData=a.sent(),[2]}}))}))},t.prototype.setStartAsDate=function(t){this.startAsDate=t},t.prototype.setEndAsDate=function(t){this.endAsDate=t},t.prototype.input=function(t){var e=this.getDateFromInput(t);if(e)if(this.range){"start"===this.focusedInput?(!this.startAsDate||!(0,n.s)(e,this.startAsDate))&&(this.startAsDate=e):"end"===this.focusedInput&&(!this.endAsDate||!(0,n.s)(e,this.endAsDate))&&(this.endAsDate=e)}else this.valueAsDate=e},t.prototype.blur=function(t){var e=this,a=e.locale,i=e.focusedInput,n=e.endAsDate,r=e.range,o=e.startAsDate,s=e.valueAsDate;this.getDateFromInput(t.value)||(!r&&s?t.value=s.toLocaleDateString(a):"start"===i&&o?t.value=o.toLocaleDateString(a):"end"===i&&n&&(t.value=n.toLocaleDateString(a)))},t.prototype.getDateFromInput=function(t){if(!this.localeData)return!1;var e=this.localeData.separator,a=(0,n.p)(t,this.localeData),i=a.day,r=a.month,o=a.year,s=i>0,l=r>-1,c=new Date(o,r,i);c.setFullYear(o);var p=!isNaN(c.getTime()),h=t.split(e).filter((function(t){return t})).length>2,u=o.toString().length>0;return!!(s&&l&&p&&h&&u&&(0,n.i)(c,this.min,this.max))&&c},Object.defineProperty(t.prototype,"el",{get:function(){return(0,i.g)(this)},enumerable:!1,configurable:!0}),Object.defineProperty(t,"watchers",{get:function(){return{active:["activeHandler"],layout:["setReferenceEl"],focusedInput:["setReferenceEl"],value:["valueWatcher"],start:["startWatcher"],end:["endWatcher"],locale:["loadLocaleData"]}},enumerable:!1,configurable:!0}),t}();h.style="@-webkit-keyframes in{0%{opacity:0}100%{opacity:1}}@keyframes in{0%{opacity:0}100%{opacity:1}}@-webkit-keyframes in-down{0%{opacity:0;-webkit-transform:translate3D(0, -5px, 0);transform:translate3D(0, -5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@keyframes in-down{0%{opacity:0;-webkit-transform:translate3D(0, -5px, 0);transform:translate3D(0, -5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@-webkit-keyframes in-up{0%{opacity:0;-webkit-transform:translate3D(0, 5px, 0);transform:translate3D(0, 5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@keyframes in-up{0%{opacity:0;-webkit-transform:translate3D(0, 5px, 0);transform:translate3D(0, 5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@-webkit-keyframes in-scale{0%{opacity:0;-webkit-transform:scale3D(0.95, 0.95, 1);transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;-webkit-transform:scale3D(1, 1, 1);transform:scale3D(1, 1, 1)}}@keyframes in-scale{0%{opacity:0;-webkit-transform:scale3D(0.95, 0.95, 1);transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;-webkit-transform:scale3D(1, 1, 1);transform:scale3D(1, 1, 1)}}:host{--calcite-icon-size:1rem;--calcite-spacing-quarter:0.25rem;--calcite-spacing-half:0.5rem;--calcite-spacing-three-quarters:0.75rem;--calcite-spacing:1rem;--calcite-spacing-plus-quarter:1.25rem;--calcite-spacing-plus-half:1.5rem;--calcite-spacing-double:2rem;--calcite-menu-min-width:10rem;--calcite-header-min-height:3rem;--calcite-footer-min-height:3rem}:root{--calcite-popper-transition:150ms ease-in-out}:host([hidden]){display:none}:host{display:inline-block;vertical-align:top;width:100%;position:relative;overflow:visible;-webkit-box-shadow:none;box-shadow:none}:host .menu-container .calcite-popper-anim{position:relative;z-index:1;-webkit-transition:var(--calcite-popper-transition);transition:var(--calcite-popper-transition);visibility:hidden;-webkit-transition-property:visibility, opacity, -webkit-transform;transition-property:visibility, opacity, -webkit-transform;transition-property:transform, visibility, opacity;transition-property:transform, visibility, opacity, -webkit-transform;opacity:0;-webkit-box-shadow:0 0 16px 0 rgba(0, 0, 0, 0.16);box-shadow:0 0 16px 0 rgba(0, 0, 0, 0.16);border-radius:0.25rem}:host .menu-container[data-popper-placement^=bottom] .calcite-popper-anim{-webkit-transform:translateY(-5px);transform:translateY(-5px)}:host .menu-container[data-popper-placement^=top] .calcite-popper-anim{-webkit-transform:translateY(5px);transform:translateY(5px)}:host .menu-container[data-popper-placement^=left] .calcite-popper-anim{-webkit-transform:translateX(5px);transform:translateX(5px)}:host .menu-container[data-popper-placement^=right] .calcite-popper-anim{-webkit-transform:translateX(-5px);transform:translateX(-5px)}:host .menu-container[data-popper-placement] .calcite-popper-anim--active{opacity:1;visibility:visible;-webkit-transform:translate(0);transform:translate(0)}.calendar-picker-wrapper{-webkit-box-shadow:none;box-shadow:none;position:static;-webkit-transform:translate3d(0, 0, 0);transform:translate3d(0, 0, 0);width:100%;line-height:0}.input-wrapper{position:relative}:host([range]) .input-container{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center}:host([range]) .input-wrapper{-ms-flex:1 1 auto;flex:1 1 auto}:host([range]) .horizontal-arrow-container{background-color:var(--calcite-ui-background);padding:0 var(--calcite-spacing-quarter);border:1px solid var(--calcite-ui-border-1);border-left:none;border-right:none;height:42px;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex:0 0 auto;flex:0 0 auto}:host([range][layout=vertical]) .input-wrapper{width:100%}:host([range][layout=vertical]) .input-container{-ms-flex-direction:column;flex-direction:column;-ms-flex-align:start;align-items:start}:host([range][layout=vertical]) .calendar-picker-wrapper--end{-webkit-transform:translate3d(0, 0, 0);transform:translate3d(0, 0, 0)}:host([range][layout=vertical]) .vertical-arrow-container{position:absolute;left:0;top:36px;z-index:1;background-color:var(--calcite-ui-foreground-1);padding-left:0.625rem;padding-right:0.625rem;margin-left:1px;margin-right:1px}:host([scale=s][range]:not([layout=vertical])) .calendar-picker-wrapper{width:216px}:host([scale=s][range]:not([layout=vertical])) .horizontal-arrow-container{height:30px}:host([scale=m][range]:not([layout=vertical])) .calendar-picker-wrapper{width:286px}:host([scale=l][range]:not([layout=vertical])) .calendar-picker-wrapper{width:398px}:host([scale=l][range]:not([layout=vertical])) .horizontal-arrow-container{height:54px}.menu-container{display:block;position:absolute;z-index:900;-webkit-transform:scale(0);transform:scale(0);visibility:hidden;pointer-events:none}:host([active]) .menu-container{pointer-events:initial;visibility:visible}.input .calcite-input-wrapper{margin-top:0}:host([range][layout=vertical][scale=s]) .vertical-arrow-container{top:24px}:host([range][layout=vertical][scale=l]) .vertical-arrow-container{top:50px;padding-left:0.875rem;padding-right:0.875rem}:host([range][layout=vertical][active]) .vertical-arrow-container{display:none}"}}]);