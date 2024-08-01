"use strict";var g=function(r,e){return function(){return e||r((e={exports:{}}).exports,e),e.exports}};var v=g(function(S,s){
var f=require('@stdlib/string-base-trim/dist'),c=require('@stdlib/slice-ctor/dist'),a="Slice(",t=3,E=/\s*,\s*/,h=/^-?[0-9]+$/;function p(r){var e,i,u,n,l;if(r.substring(0,a.length)!==a||(u=r.length-1,r[u]!==")")||(r=f(r.substring(a.length,u)),r=r.split(E),r.length!==t))return null;for(e=[],l=0;l<t;l++){if(n=r[l],n==="null")i=null;else if(h.test(n))i=parseInt(n,10);else return null;e.push(i)}return new c(e[0],e[1],e[2])}s.exports=p
});var R=v();module.exports=R;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
