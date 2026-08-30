"use strict";var g=function(r,e){return function(){try{return e||r((e={exports:{}}).exports,e),e.exports}catch(n){throw (e=0, n)}};};var v=g(function(S,s){
var f=require('@stdlib/string-base-trim/dist'),c=require('@stdlib/slice-ctor/dist'),a="Slice(",t=3,E=/\s*,\s*/,h=/^-?[0-9]+$/;function p(r){var e,n,u,l,i;if(r.substring(0,a.length)!==a||(u=r.length-1,r[u]!==")")||(r=f(r.substring(a.length,u)),r=r.split(E),r.length!==t))return null;for(e=[],i=0;i<t;i++){if(l=r[i],l==="null")n=null;else if(h.test(l))n=parseInt(l,10);else return null;e.push(n)}return new c(e[0],e[1],e[2])}s.exports=p
});var R=v();module.exports=R;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
