!function(n,e){if("object"==typeof exports&&"object"==typeof module)module.exports=e();else if("function"==typeof define&&define.amd)define([],e);else{var t=e();for(var r in t)("object"==typeof exports?exports:n)[r]=t[r]}}(window,function(){return function(n){var e={};function t(r){if(e[r])return e[r].exports;var o=e[r]={i:r,l:!1,exports:{}};return n[r].call(o.exports,o,o.exports,t),o.l=!0,o.exports}return t.m=n,t.c=e,t.d=function(n,e,r){t.o(n,e)||Object.defineProperty(n,e,{enumerable:!0,get:r})},t.r=function(n){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},t.t=function(n,e){if(1&e&&(n=t(n)),8&e)return n;if(4&e&&"object"==typeof n&&n&&n.__esModule)return n;var r=Object.create(null);if(t.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:n}),2&e&&"string"!=typeof n)for(var o in n)t.d(r,o,function(e){return n[e]}.bind(null,o));return r},t.n=function(n){var e=n&&n.__esModule?function(){return n.default}:function(){return n};return t.d(e,"a",e),e},t.o=function(n,e){return Object.prototype.hasOwnProperty.call(n,e)},t.p="",t(t.s=4)}([function(n,e,t){var r=t(2);"string"==typeof r&&(r=[[n.i,r,""]]),r.locals&&(n.exports=r.locals);(0,t(5).default)("5b0ebbd4",r,!1,{})},function(n,e,t){"use strict";var r=t(0);t.n(r).a},function(n,e,t){(n.exports=t(3)(!1)).push([n.i,".action-panel-wrapper .oMask[data-v-bbf3ae74] {\n  position: fixed;\n  top: 0;\n  left: 0;\n  height: 100vh;\n  width: 100vw;\n  z-index: 98;\n  background: rgba(0, 0, 0, 0.7);\n}\n.action-panel-wrapper .action-panel-bar[data-v-bbf3ae74] {\n  position: fixed;\n  bottom: 0;\n  transition: all .3s;\n  z-index: 99;\n  transform: translateY(338px);\n}\n.action-panel-wrapper .action-panel-active[data-v-bbf3ae74] {\n  transform: translateY(0);\n}\n.action-panel-wrapper .action-panel[data-v-bbf3ae74] {\n  border-radius: 6px 6px 0 0;\n  width: 100vw;\n  background: white;\n  height: 232px;\n  z-index: 99;\n  padding: 60px;\n  display: flex;\n  justify-content: flex-start;\n  align-items: center;\n  flex: 1;\n  flex-direction: row;\n}\n.action-panel-wrapper .action-panel .action-item[data-v-bbf3ae74] {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    flex: none;\n    flex-direction: column;\n    margin-right: 82px;\n}\n.action-panel-wrapper .action-panel .action-item .action-icon[data-v-bbf3ae74] {\n      font-size: 60px;\n      margin-bottom: 12px;\n}\n.action-panel-wrapper .action-panel .action-item .action-text[data-v-bbf3ae74] {\n      font-size: 24px;\n      color: #333333;\n      letter-spacing: 0;\n      text-align: center;\n      line-height: 24px;\n}\n.action-panel-wrapper .action-panel .action-item[data-v-bbf3ae74]:nth-last-child(1) {\n    margin-right: 0;\n}\n.action-panel-wrapper .action-button[data-v-bbf3ae74] {\n  height: 106px;\n  width: 100vw;\n  background: white;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex: 1;\n  flex-direction: row;\n  font-size: 30px;\n  border-top: 1px solid #E6E7E8;\n  color: #919699;\n  letter-spacing: 0;\n  text-align: center;\n  line-height: 30px;\n}\n",""])},function(n,e,t){"use strict";n.exports=function(n){var e=[];return e.toString=function(){return this.map(function(e){var t=function(n,e){var t=n[1]||"",r=n[3];if(!r)return t;if(e&&"function"==typeof btoa){var o=(a=r,"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(a))))+" */"),i=r.sources.map(function(n){return"/*# sourceURL="+r.sourceRoot+n+" */"});return[t].concat(i).concat([o]).join("\n")}var a;return[t].join("\n")}(e,n);return e[2]?"@media "+e[2]+"{"+t+"}":t}).join("")},e.i=function(n,t){"string"==typeof n&&(n=[[null,n,""]]);for(var r={},o=0;o<this.length;o++){var i=this[o][0];null!=i&&(r[i]=!0)}for(o=0;o<n.length;o++){var a=n[o];null!=a[0]&&r[a[0]]||(t&&!a[2]?a[2]=t:t&&(a[2]="("+a[2]+") and ("+t+")"),e.push(a))}},e}},function(n,e,t){"use strict";t.r(e);var r=function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("div",{staticClass:"action-panel-wrapper"},[t("transition",{attrs:{name:"fade"}},[n.open?t("div",{staticClass:"oMask",on:{click:n.closePannel}}):n._e()]),t("div",{staticClass:"action-panel-bar",class:{"action-panel-active":n.open},on:{transitionend:n.transitionEnd}},[t("div",{staticClass:"action-panel"},n._l(n.actions,function(e,r){return t("div",{staticClass:"action-item",on:{click:function(t){return n.clickHandle(e,r)}}},[t("div",{staticClass:"action-icon iconfont",class:e.icon}),t("div",{staticClass:"action-text"},[n._v(n._s(e.text))])])}),0),t("div",{staticClass:"action-button",on:{click:n.closePannel}},[n._v("取消")])])],1)};r._withStripped=!0;var o={name:"action-pannel",props:{actions:{type:Array,default:()=>[{icon:"icon-fenxiang",text:"分享"},{icon:"icon-fenxiang",text:"分享"},{icon:"icon-fenxiang",text:"分享"},{icon:"icon-fenxiang",text:"分享"}]}},data:()=>({open:!1}),methods:{closePannel:function(){this.open=!1},transitionEnd:function(){this.open||this.remove()},clickHandle:function(n,e){this.$emit("select",{item:n,idx:e})}},mounted(){this.open=!0}};t(1);var i=function(n,e,t,r,o,i,a,c){var s,u="function"==typeof n?n.options:n;if(e&&(u.render=e,u.staticRenderFns=t,u._compiled=!0),r&&(u.functional=!0),i&&(u._scopeId="data-v-"+i),a?(s=function(n){(n=n||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(n=__VUE_SSR_CONTEXT__),o&&o.call(this,n),n&&n._registeredComponents&&n._registeredComponents.add(a)},u._ssrRegister=s):o&&(s=c?function(){o.call(this,this.$root.$options.shadowRoot)}:o),s)if(u.functional){u._injectStyles=s;var p=u.render;u.render=function(n,e){return s.call(e),p(n,e)}}else{var l=u.beforeCreate;u.beforeCreate=l?[].concat(l,s):[s]}return{exports:n,options:u}}(o,r,[],!1,null,"bbf3ae74",null);i.options.__file="src/action-pannel.vue";var a=i.exports,c=Object.assign||function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n},s=/-(\w)/g;
/**
 * vue-create-api v0.2.0
 * (c) 2018 ustbhuangyi
 * @license MIT
 */function u(n){return(n+"").replace(s,function(n,e){return e?e.toUpperCase():""})}function p(n){return void 0===n}function l(n,e,t,r,o){var i=void 0,a=void 0,s=new n(c({},o,{render:function(n){var t=a&&a(n);return t&&!Array.isArray(t)&&(t=[t]),n(e,c({},i),t||[])},methods:{init:function(){document.body.appendChild(this.$el)},destroy:function(){this.$destroy(),document.body.removeChild(this.$el)}}}));s.updateRenderData=function(n,e){i=n,a=e},s.updateRenderData(t,r),s.$mount(),s.init();var u=s.$children[0];return u.$updateProps=function(n){c(i.props,n),s.$forceUpdate()},u}function f(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};e=function(n){var e={};return n.forEach(function(n){e[n]=u("on-"+n)}),e}(e);var t=c({},n),r={};for(var o in e)if(e.hasOwnProperty(o)){var i=e[o];t[i]&&(r[o]=t[i],delete t[i])}return{props:t,on:r}}var d="hook:beforeDestroy";function v(n){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],t=arguments.length>2&&void 0!==arguments[2]&&arguments[2],r=this,o={},i=[];return{before:function(n){i.push(n)},create:function(a,c,s){"function"!=typeof c&&p(s)&&(s=c,c=null),p(s)&&(s=t);var u=this,v=!!u.$on,h={};v&&(h.parent=u,u.__unwatchFns__||(u.__unwatchFns__=[]));var m=f(a,e),g=null;return function(n,e,t,r){var o=e.props.$props;if(o){delete e.props.$props;var i=[],a=[];if(Object.keys(o).forEach(function(t){var r=o[t];"string"==typeof r&&r in n?(e.props[t]=n[r],i.push(t),a.push(r)):e.props[t]=r}),t){var c=n.$watch(function(){var e={};return i.forEach(function(t,r){e[t]=n[a[r]]}),e},r);n.__unwatchFns__.push(c)}}}(u,m,v,function(n){g&&g.$updateProps(n)}),function(n,e){var t=n.props.$events;t&&(delete n.props.$events,Object.keys(t).forEach(function(r){var o=t[r];"string"==typeof o&&(o=e[o]),n.on[r]=o}))}(m,u),function(n){var e=n.props;Object.keys(e).forEach(function(t){"$"===t.charAt(0)&&(n[t.slice(1)]=e[t],delete e[t])})}(m),g=function(e,t,a,c){i.forEach(function(n){n(e,t,c)});var s=a.parent?a.parent._uid:-1,u=o[s]?o[s]:{},p=u.comp,f=u.ins;if(c&&p&&f)return f.updateRenderData(e,t),f.$forceUpdate(),p;var d=l(r,n,e,t,a),v=d.$parent,h=d.remove;d.remove=function(){if(c){if(!o[s])return;o[s]=null}h&&h.call(this),v.destroy()};var m=d.show;d.show=function(){return m&&m.call(this),this};var g=d.hide;return d.hide=function(){return g&&g.call(this),this},c&&(o[s]={comp:d,ins:v}),d}(m,c,h,s),v&&u.$on(d,function(){(function(n){n.__unwatchFns__&&(n.__unwatchFns__.forEach(function(n){n()}),n.__unwatchFns__=null)})(u),g.remove(),g=null}),g}}}var h=!1;var m={install:function(n){var e,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if(h)return e="[vue-create-api] already installed. Vue.use(CreateAPI) should be called only once.",void console.error("[vue-create-api warn]: "+e);h=!0;var r=t.componentPrefix,o=void 0===r?"":r,i=t.apiPrefix,a=void 0===i?"$create-":i;n.createAPI=function(e,t,r){"boolean"==typeof t&&(r=t,t=[]);var i=v.call(this,e,t,r),c=function(n,e){var t=e.componentPrefix,r=e.apiPrefix,o=n.name;!function(n,e){if(!n)throw new Error("[vue-create-api error]: "+e)}(o,"Component must have name while using create-api!");var i,a=new RegExp("^"+(t+"").replace(new RegExp("[.\\\\+*?\\[\\^\\]$(){}=!<>|:\\"+(i||"")+"-]","g"),"\\$&"),"i"),c=o.replace(a,"");return""+u(""+r+c)}(e,{componentPrefix:o,apiPrefix:a});return n.prototype[c]=e.$create=i.create,i}},instantiateComponent:l,version:"0.2.0"};t.d(e,"install",function(){return g});const g=n=>{n.use(m),n.createAPI(a,!0)}},function(n,e,t){"use strict";function r(n,e){for(var t=[],r={},o=0;o<e.length;o++){var i=e[o],a=i[0],c={id:n+":"+o,css:i[1],media:i[2],sourceMap:i[3]};r[a]?r[a].parts.push(c):t.push(r[a]={id:a,parts:[c]})}return t}t.r(e),t.d(e,"default",function(){return v});var o="undefined"!=typeof document;if("undefined"!=typeof DEBUG&&DEBUG&&!o)throw new Error("vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.");var i={},a=o&&(document.head||document.getElementsByTagName("head")[0]),c=null,s=0,u=!1,p=function(){},l=null,f="data-vue-ssr-id",d="undefined"!=typeof navigator&&/msie [6-9]\b/.test(navigator.userAgent.toLowerCase());function v(n,e,t,o){u=t,l=o||{};var a=r(n,e);return h(a),function(e){for(var t=[],o=0;o<a.length;o++){var c=a[o];(s=i[c.id]).refs--,t.push(s)}e?h(a=r(n,e)):a=[];for(o=0;o<t.length;o++){var s;if(0===(s=t[o]).refs){for(var u=0;u<s.parts.length;u++)s.parts[u]();delete i[s.id]}}}}function h(n){for(var e=0;e<n.length;e++){var t=n[e],r=i[t.id];if(r){r.refs++;for(var o=0;o<r.parts.length;o++)r.parts[o](t.parts[o]);for(;o<t.parts.length;o++)r.parts.push(g(t.parts[o]));r.parts.length>t.parts.length&&(r.parts.length=t.parts.length)}else{var a=[];for(o=0;o<t.parts.length;o++)a.push(g(t.parts[o]));i[t.id]={id:t.id,refs:1,parts:a}}}}function m(){var n=document.createElement("style");return n.type="text/css",a.appendChild(n),n}function g(n){var e,t,r=document.querySelector("style["+f+'~="'+n.id+'"]');if(r){if(u)return p;r.parentNode.removeChild(r)}if(d){var o=s++;r=c||(c=m()),e=y.bind(null,r,o,!1),t=y.bind(null,r,o,!0)}else r=m(),e=function(n,e){var t=e.css,r=e.media,o=e.sourceMap;r&&n.setAttribute("media",r);l.ssrId&&n.setAttribute(f,e.id);o&&(t+="\n/*# sourceURL="+o.sources[0]+" */",t+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(o))))+" */");if(n.styleSheet)n.styleSheet.cssText=t;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(t))}}.bind(null,r),t=function(){r.parentNode.removeChild(r)};return e(n),function(r){if(r){if(r.css===n.css&&r.media===n.media&&r.sourceMap===n.sourceMap)return;e(n=r)}else t()}}var b,x=(b=[],function(n,e){return b[n]=e,b.filter(Boolean).join("\n")});function y(n,e,t,r){var o=t?"":r.css;if(n.styleSheet)n.styleSheet.cssText=x(e,o);else{var i=document.createTextNode(o),a=n.childNodes;a[e]&&n.removeChild(a[e]),a.length?n.insertBefore(i,a[e]):n.appendChild(i)}}}])});