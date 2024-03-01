// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var e,r;e=this,r=function(){"use strict";var e=void 0!==String.prototype.trim,r=String.prototype.trim,t=/^[\u0020\f\n\r\t\v\u00a0\u1680\u2000-\u200a\u2028\u2029\u202f\u205f\u3000\ufeff]*([\S\s]*?)[\u0020\f\n\r\t\v\u00a0\u1680\u2000-\u200a\u2028\u2029\u202f\u205f\u3000\ufeff]*$/,n=e&&""===r.call(" \n\t\r\n\f\v            \u2028\u2029  　\ufeff")&&"᠎"===r.call("᠎")?function(e){return r.call(e)}:function(e){return function(e,r,t){return e.replace(r,t)}(e,t,"$1")},i="function"==typeof Object.defineProperty?Object.defineProperty:null,a=Object.defineProperty;function o(e){return"number"==typeof e}function u(e){var r,t="";for(r=0;r<e;r++)t+="0";return t}function l(e,r,t){var n=!1,i=r-e.length;return i<0||(function(e){return"-"===e[0]}(e)&&(n=!0,e=e.substr(1)),e=t?e+u(i):u(i)+e,n&&(e="-"+e)),e}var s=String.prototype.toLowerCase,c=String.prototype.toUpperCase;function p(e){var r,t,n;switch(e.specifier){case"b":r=2;break;case"o":r=8;break;case"x":case"X":r=16;break;default:r=10}if(t=e.arg,n=parseInt(t,10),!isFinite(n)){if(!o(t))throw new Error("invalid integer. Value: "+t);n=0}return n<0&&("u"===e.specifier||10!==r)&&(n=4294967295+n+1),n<0?(t=(-n).toString(r),e.precision&&(t=l(t,e.precision,e.padRight)),t="-"+t):(t=n.toString(r),n||e.precision?e.precision&&(t=l(t,e.precision,e.padRight)):t="",e.sign&&(t=e.sign+t)),16===r&&(e.alternate&&(t="0x"+t),t=e.specifier===c.call(e.specifier)?c.call(t):s.call(t)),8===r&&e.alternate&&"0"!==t.charAt(0)&&(t="0"+t),t}var f=Math.abs,g=String.prototype.toLowerCase,d=String.prototype.toUpperCase,h=String.prototype.replace,b=/e\+(\d)$/,y=/e-(\d)$/,v=/^(\d+)$/,m=/^(\d+)e/,w=/\.0$/,_=/\.0*e/,S=/(\..*[^0])0*e/;function E(e){var r,t,n=parseFloat(e.arg);if(!isFinite(n)){if(!o(e.arg))throw new Error("invalid floating-point number. Value: "+t);n=e.arg}switch(e.specifier){case"e":case"E":t=n.toExponential(e.precision);break;case"f":case"F":t=n.toFixed(e.precision);break;case"g":case"G":f(n)<1e-4?((r=e.precision)>0&&(r-=1),t=n.toExponential(r)):t=n.toPrecision(e.precision),e.alternate||(t=h.call(t,S,"$1e"),t=h.call(t,_,"e"),t=h.call(t,w,""));break;default:throw new Error("invalid double notation. Value: "+e.specifier)}return t=h.call(t,b,"e+0$1"),t=h.call(t,y,"e-0$1"),e.alternate&&(t=h.call(t,v,"$1."),t=h.call(t,m,"$1.e")),n>=0&&e.sign&&(t=e.sign+t),t=e.specifier===d.call(e.specifier)?d.call(t):g.call(t)}function T(e){var r,t="";for(r=0;r<e;r++)t+=" ";return t}var x=String.fromCharCode,k=isNaN,I=Array.isArray;function j(e){var r={};return r.specifier=e.specifier,r.precision=void 0===e.precision?1:e.precision,r.width=e.width,r.flags=e.flags||"",r.mapping=e.mapping,r}function V(e){var r,t,n,i,a,o,u,s,c,f,g,d,h;if(!I(e))throw new TypeError("invalid argument. First argument must be an array. Value: `"+e+"`.");for(o="",u=1,s=0;s<e.length;s++)if("string"==typeof(n=e[s]))o+=n;else{if(r=void 0!==n.precision,!(n=j(n)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+s+"`. Value: `"+n+"`.");for(n.mapping&&(u=n.mapping),t=n.flags,c=0;c<t.length;c++)switch(i=t.charAt(c)){case" ":n.sign=" ";break;case"+":n.sign="+";break;case"-":n.padRight=!0,n.padZeros=!1;break;case"0":n.padZeros=t.indexOf("-")<0;break;case"#":n.alternate=!0;break;default:throw new Error("invalid flag: "+i)}if("*"===n.width){if(n.width=parseInt(arguments[u],10),u+=1,k(n.width))throw new TypeError("the argument for * width at position "+u+" is not a number. Value: `"+n.width+"`.");n.width<0&&(n.padRight=!0,n.width=-n.width)}if(r&&"*"===n.precision){if(n.precision=parseInt(arguments[u],10),u+=1,k(n.precision))throw new TypeError("the argument for * precision at position "+u+" is not a number. Value: `"+n.precision+"`.");n.precision<0&&(n.precision=1,r=!1)}switch(n.arg=arguments[u],n.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":r&&(n.padZeros=!1),n.arg=p(n);break;case"s":n.maxWidth=r?n.precision:-1;break;case"c":if(!k(n.arg)){if((a=parseInt(n.arg,10))<0||a>127)throw new Error("invalid character code. Value: "+n.arg);n.arg=k(a)?String(n.arg):x(a)}break;case"e":case"E":case"f":case"F":case"g":case"G":r||(n.precision=6),n.arg=E(n);break;default:throw new Error("invalid specifier: "+n.specifier)}n.maxWidth>=0&&n.arg.length>n.maxWidth&&(n.arg=n.arg.substring(0,n.maxWidth)),n.padZeros?n.arg=l(n.arg,n.width||n.precision,n.padRight):n.width&&(n.arg=(f=n.arg,g=n.width,d=n.padRight,h=void 0,(h=g-f.length)<0?f:f=d?f+T(h):T(h)+f)),o+=n.arg||"",u+=1}return o}var O=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function $(e){var r={mapping:e[1]?parseInt(e[1],10):void 0,flags:e[2],width:e[3],precision:e[5],specifier:e[6]};return"."===e[4]&&void 0===e[5]&&(r.precision="1"),r}function F(e){var r,t,n,i;for(t=[],i=0,n=O.exec(e);n;)(r=e.slice(i,O.lastIndex-n[0].length)).length&&t.push(r),t.push($(n)),i=O.lastIndex,n=O.exec(e);return(r=e.slice(i)).length&&t.push(r),t}function N(e){var r,t;if("string"!=typeof e)throw new TypeError(N("invalid argument. First argument must be a string. Value: `%s`.",e));for(r=[F(e)],t=1;t<arguments.length;t++)r.push(arguments[t]);return V.apply(null,r)}var P=Object.prototype,A=P.toString,C=P.__defineGetter__,R=P.__defineSetter__,G=P.__lookupGetter__,Z=P.__lookupSetter__,W=function(){try{return i({},"x",{}),!0}catch(e){return!1}}()?a:function(e,r,t){var n,i,a,o;if("object"!=typeof e||null===e||"[object Array]"===A.call(e))throw new TypeError(N("invalid argument. First argument must be an object. Value: `%s`.",e));if("object"!=typeof t||null===t||"[object Array]"===A.call(t))throw new TypeError(N("invalid argument. Property descriptor must be an object. Value: `%s`.",t));if((i="value"in t)&&(G.call(e,r)||Z.call(e,r)?(n=e.__proto__,e.__proto__=P,delete e[r],e[r]=t.value,e.__proto__=n):e[r]=t.value),a="get"in t,o="set"in t,i&&(a||o))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return a&&C&&C.call(e,r,t.get),o&&R&&R.call(e,r,t.set),e};function L(e,r,t){W(e,r,{configurable:!1,enumerable:!1,writable:!1,value:t})}function z(e,r,t){W(e,r,{configurable:!1,enumerable:!1,get:t})}function M(e){return"number"==typeof e}var U="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function X(){return U&&"symbol"==typeof Symbol.toStringTag}var Y=Object.prototype.toString,J=Object.prototype.hasOwnProperty,q="function"==typeof Symbol?Symbol:void 0,B="function"==typeof q?q.toStringTag:"",D=X()?function(e){var r,t,n,i,a;if(null==e)return Y.call(e);t=e[B],a=B,r=null!=(i=e)&&J.call(i,a);try{e[B]=void 0}catch(r){return Y.call(e)}return n=Y.call(e),r?e[B]=t:delete e[B],n}:function(e){return Y.call(e)},H=Number,K=H.prototype.toString,Q=X();function ee(e){return"object"==typeof e&&(e instanceof H||(Q?function(e){try{return K.call(e),!0}catch(e){return!1}}(e):"[object Number]"===D(e)))}function re(e){return M(e)||ee(e)}L(re,"isPrimitive",M),L(re,"isObject",ee);var te=Number.POSITIVE_INFINITY,ne=H.NEGATIVE_INFINITY,ie=Math.floor;function ae(e){return e<te&&e>ne&&ie(r=e)===r;var r}function oe(e){return M(e)&&ae(e)}function ue(e){return ee(e)&&ae(e.valueOf())}function le(e){return oe(e)||ue(e)}function se(e){return oe(e)||function(e){return null===e}(e)||function(e){return void 0===e}(e)}function ce(){var e,r,t,n;if(0===(e=arguments.length)?(r=null,t=null,n=null):1===e?(r=null,t=arguments[0],n=null):2===e?(r=arguments[0],t=arguments[1],n=null):(r=arguments[0],t=arguments[1],n=arguments[2]),!(this instanceof ce))return new ce(r,t,n);if(!se(r))throw new TypeError(N("invalid argument. First argument must be an integer, null, or undefined. Value: `%s`.",r));if(!se(t))throw new TypeError(N("invalid argument. Second argument must be an integer, null, or undefined. Value: `%s`.",t));if(!se(n))throw new TypeError(N("invalid argument. Third argument must be an integer, null, or undefined. Value: `%s`.",n));if(0===n)throw new RangeError(N("invalid argument. Third argument cannot be zero. Value: `%s`.",n));return this._start=void 0===r?null:r,this._stop=void 0===t?null:t,this._step=void 0===n?null:n,this}L(le,"isPrimitive",oe),L(le,"isObject",ue),L(ce,"name","Slice"),z(ce.prototype,"start",(function(){return this._start})),z(ce.prototype,"stop",(function(){return this._stop})),z(ce.prototype,"step",(function(){return this._step})),L(ce.prototype,"toString",(function(){return"Slice("+this._start+","+this._stop+","+this.step+")"})),L(ce.prototype,"toJSON",(function(){return{type:"Slice",data:[this._start,this._stop,this._step]}}));var pe="Slice(",fe=/\s*,\s*/,ge=/^-?[0-9]+$/;return function(e){var r,t,i,a,o;if(e.substring(0,6)!==pe)return null;if(")"!==e[i=e.length-1])return null;if(3!==(e=(e=n(e.substring(6,i))).split(fe)).length)return null;for(r=[],o=0;o<3;o++){if("null"===(a=e[o]))t=null;else{if(!ge.test(a))return null;t=parseInt(a,10)}r.push(t)}return new ce(r[0],r[1],r[2])}},"object"==typeof exports&&"undefined"!=typeof module?module.exports=r():"function"==typeof define&&define.amd?define(r):(e="undefined"!=typeof globalThis?globalThis:e||self).str2slice=r();
//# sourceMappingURL=index.js.map
