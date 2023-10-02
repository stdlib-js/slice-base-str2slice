// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var e,r;e=this,r=function(){"use strict";var e=void 0!==String.prototype.trim,r=String.prototype.trim,t=/^[\u0020\f\n\r\t\v\u00a0\u1680\u2000-\u200a\u2028\u2029\u202f\u205f\u3000\ufeff]*([\S\s]*?)[\u0020\f\n\r\t\v\u00a0\u1680\u2000-\u200a\u2028\u2029\u202f\u205f\u3000\ufeff]*$/,n=e&&""===r.call(" \n\t\r\n\f\v            \u2028\u2029  　\ufeff")&&"᠎"===r.call("᠎")?function(e){return r.call(e)}:function(e){return function(e,r,t){return e.replace(r,t)}(e,t,"$1")},i="function"==typeof Object.defineProperty?Object.defineProperty:null,a=Object.defineProperty;function o(e){return"number"==typeof e}function u(e){var r,t="";for(r=0;r<e;r++)t+="0";return t}function l(e,r,t){var n=!1,i=r-e.length;return i<0||(function(e){return"-"===e[0]}(e)&&(n=!0,e=e.substr(1)),e=t?e+u(i):u(i)+e,n&&(e="-"+e)),e}var s=String.prototype.toLowerCase,c=String.prototype.toUpperCase;function p(e){var r,t,n;switch(e.specifier){case"b":r=2;break;case"o":r=8;break;case"x":case"X":r=16;break;default:r=10}if(t=e.arg,n=parseInt(t,10),!isFinite(n)){if(!o(t))throw new Error("invalid integer. Value: "+t);n=0}return n<0&&("u"===e.specifier||10!==r)&&(n=4294967295+n+1),n<0?(t=(-n).toString(r),e.precision&&(t=l(t,e.precision,e.padRight)),t="-"+t):(t=n.toString(r),n||e.precision?e.precision&&(t=l(t,e.precision,e.padRight)):t="",e.sign&&(t=e.sign+t)),16===r&&(e.alternate&&(t="0x"+t),t=e.specifier===c.call(e.specifier)?c.call(t):s.call(t)),8===r&&e.alternate&&"0"!==t.charAt(0)&&(t="0"+t),t}function f(e){return"string"==typeof e}var g=Math.abs,d=String.prototype.toLowerCase,h=String.prototype.toUpperCase,b=String.prototype.replace,y=/e\+(\d)$/,v=/e-(\d)$/,m=/^(\d+)$/,w=/^(\d+)e/,_=/\.0$/,S=/\.0*e/,E=/(\..*[^0])0*e/;function T(e){var r,t,n=parseFloat(e.arg);if(!isFinite(n)){if(!o(e.arg))throw new Error("invalid floating-point number. Value: "+t);n=e.arg}switch(e.specifier){case"e":case"E":t=n.toExponential(e.precision);break;case"f":case"F":t=n.toFixed(e.precision);break;case"g":case"G":g(n)<1e-4?((r=e.precision)>0&&(r-=1),t=n.toExponential(r)):t=n.toPrecision(e.precision),e.alternate||(t=b.call(t,E,"$1e"),t=b.call(t,S,"e"),t=b.call(t,_,""));break;default:throw new Error("invalid double notation. Value: "+e.specifier)}return t=b.call(t,y,"e+0$1"),t=b.call(t,v,"e-0$1"),e.alternate&&(t=b.call(t,m,"$1."),t=b.call(t,w,"$1.e")),n>=0&&e.sign&&(t=e.sign+t),t=e.specifier===h.call(e.specifier)?h.call(t):d.call(t)}function x(e){var r,t="";for(r=0;r<e;r++)t+=" ";return t}function k(e,r,t){var n=r-e.length;return n<0?e:e=t?e+x(n):x(n)+e}var I=String.fromCharCode,j=isNaN,V=Array.isArray;function O(e){var r={};return r.specifier=e.specifier,r.precision=void 0===e.precision?1:e.precision,r.width=e.width,r.flags=e.flags||"",r.mapping=e.mapping,r}function $(e){var r,t,n,i,a,o,u,s,c;if(!V(e))throw new TypeError("invalid argument. First argument must be an array. Value: `"+e+"`.");for(o="",u=1,s=0;s<e.length;s++)if(f(n=e[s]))o+=n;else{if(r=void 0!==n.precision,!(n=O(n)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+s+"`. Value: `"+n+"`.");for(n.mapping&&(u=n.mapping),t=n.flags,c=0;c<t.length;c++)switch(i=t.charAt(c)){case" ":n.sign=" ";break;case"+":n.sign="+";break;case"-":n.padRight=!0,n.padZeros=!1;break;case"0":n.padZeros=t.indexOf("-")<0;break;case"#":n.alternate=!0;break;default:throw new Error("invalid flag: "+i)}if("*"===n.width){if(n.width=parseInt(arguments[u],10),u+=1,j(n.width))throw new TypeError("the argument for * width at position "+u+" is not a number. Value: `"+n.width+"`.");n.width<0&&(n.padRight=!0,n.width=-n.width)}if(r&&"*"===n.precision){if(n.precision=parseInt(arguments[u],10),u+=1,j(n.precision))throw new TypeError("the argument for * precision at position "+u+" is not a number. Value: `"+n.precision+"`.");n.precision<0&&(n.precision=1,r=!1)}switch(n.arg=arguments[u],n.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":r&&(n.padZeros=!1),n.arg=p(n);break;case"s":n.maxWidth=r?n.precision:-1;break;case"c":if(!j(n.arg)){if((a=parseInt(n.arg,10))<0||a>127)throw new Error("invalid character code. Value: "+n.arg);n.arg=j(a)?String(n.arg):I(a)}break;case"e":case"E":case"f":case"F":case"g":case"G":r||(n.precision=6),n.arg=T(n);break;default:throw new Error("invalid specifier: "+n.specifier)}n.maxWidth>=0&&n.arg.length>n.maxWidth&&(n.arg=n.arg.substring(0,n.maxWidth)),n.padZeros?n.arg=l(n.arg,n.width||n.precision,n.padRight):n.width&&(n.arg=k(n.arg,n.width,n.padRight)),o+=n.arg||"",u+=1}return o}var F=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function N(e){var r={mapping:e[1]?parseInt(e[1],10):void 0,flags:e[2],width:e[3],precision:e[5],specifier:e[6]};return"."===e[4]&&void 0===e[5]&&(r.precision="1"),r}function A(e){var r,t,n,i;for(t=[],i=0,n=F.exec(e);n;)(r=e.slice(i,F.lastIndex-n[0].length)).length&&t.push(r),t.push(N(n)),i=F.lastIndex,n=F.exec(e);return(r=e.slice(i)).length&&t.push(r),t}function P(e){return"string"==typeof e}function C(e){var r,t,n;if(!P(e))throw new TypeError(C("invalid argument. First argument must be a string. Value: `%s`.",e));for(r=A(e),(t=new Array(arguments.length))[0]=r,n=1;n<t.length;n++)t[n]=arguments[n];return $.apply(null,t)}var R=Object.prototype,G=R.toString,Z=R.__defineGetter__,W=R.__defineSetter__,L=R.__lookupGetter__,z=R.__lookupSetter__,M=function(){try{return i({},"x",{}),!0}catch(e){return!1}}()?a:function(e,r,t){var n,i,a,o;if("object"!=typeof e||null===e||"[object Array]"===G.call(e))throw new TypeError(C("invalid argument. First argument must be an object. Value: `%s`.",e));if("object"!=typeof t||null===t||"[object Array]"===G.call(t))throw new TypeError(C("invalid argument. Property descriptor must be an object. Value: `%s`.",t));if((i="value"in t)&&(L.call(e,r)||z.call(e,r)?(n=e.__proto__,e.__proto__=R,delete e[r],e[r]=t.value,e.__proto__=n):e[r]=t.value),a="get"in t,o="set"in t,i&&(a||o))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return a&&Z&&Z.call(e,r,t.get),o&&W&&W.call(e,r,t.set),e};function U(e,r,t){M(e,r,{configurable:!1,enumerable:!1,writable:!1,value:t})}function X(e,r,t){M(e,r,{configurable:!1,enumerable:!1,get:t})}function Y(e){return"number"==typeof e}var J="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function q(){return J&&"symbol"==typeof Symbol.toStringTag}var B=Object.prototype.toString,D=Object.prototype.hasOwnProperty,H="function"==typeof Symbol?Symbol:void 0,K="function"==typeof H?H.toStringTag:"",Q=q()?function(e){var r,t,n,i,a;if(null==e)return B.call(e);t=e[K],a=K,r=null!=(i=e)&&D.call(i,a);try{e[K]=void 0}catch(r){return B.call(e)}return n=B.call(e),r?e[K]=t:delete e[K],n}:function(e){return B.call(e)},ee=Number,re=ee.prototype.toString,te=q();function ne(e){return"object"==typeof e&&(e instanceof ee||(te?function(e){try{return re.call(e),!0}catch(e){return!1}}(e):"[object Number]"===Q(e)))}function ie(e){return Y(e)||ne(e)}U(ie,"isPrimitive",Y),U(ie,"isObject",ne);var ae=Number.POSITIVE_INFINITY,oe=ee.NEGATIVE_INFINITY,ue=Math.floor;function le(e){return e<ae&&e>oe&&ue(r=e)===r;var r}function se(e){return Y(e)&&le(e)}function ce(e){return ne(e)&&le(e.valueOf())}function pe(e){return se(e)||ce(e)}function fe(e){return se(e)||function(e){return null===e}(e)||function(e){return void 0===e}(e)}function ge(){var e,r,t,n;if(0===(e=arguments.length)?(r=null,t=null,n=null):1===e?(r=null,t=arguments[0],n=null):2===e?(r=arguments[0],t=arguments[1],n=null):(r=arguments[0],t=arguments[1],n=arguments[2]),!(this instanceof ge))return new ge(r,t,n);if(!fe(r))throw new TypeError(C("invalid argument. First argument must be an integer, null, or undefined. Value: `%s`.",r));if(!fe(t))throw new TypeError(C("invalid argument. Second argument must be an integer, null, or undefined. Value: `%s`.",t));if(!fe(n))throw new TypeError(C("invalid argument. Third argument must be an integer, null, or undefined. Value: `%s`.",n));if(0===n)throw new RangeError(C("invalid argument. Third argument cannot be zero. Value: `%s`.",n));return this._start=void 0===r?null:r,this._stop=void 0===t?null:t,this._step=void 0===n?null:n,this}U(pe,"isPrimitive",se),U(pe,"isObject",ce),U(ge,"name","Slice"),X(ge.prototype,"start",(function(){return this._start})),X(ge.prototype,"stop",(function(){return this._stop})),X(ge.prototype,"step",(function(){return this._step})),U(ge.prototype,"toString",(function(){return"Slice("+this._start+","+this._stop+","+this.step+")"})),U(ge.prototype,"toJSON",(function(){return{type:"Slice",data:[this._start,this._stop,this._step]}}));var de="Slice(",he=/\s*,\s*/,be=/^-?[0-9]+$/;return function(e){var r,t,i,a,o;if(e.substring(0,de.length)!==de)return null;if(")"!==e[i=e.length-1])return null;if(3!==(e=(e=n(e.substring(de.length,i))).split(he)).length)return null;for(r=[],o=0;o<3;o++){if("null"===(a=e[o]))t=null;else{if(!be.test(a))return null;t=parseInt(a,10)}r.push(t)}return new ge(r[0],r[1],r[2])}},"object"==typeof exports&&"undefined"!=typeof module?module.exports=r():"function"==typeof define&&define.amd?define(r):(e="undefined"!=typeof globalThis?globalThis:e||self).str2slice=r();
//# sourceMappingURL=browser.js.map