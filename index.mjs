// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import t from"https://cdn.jsdelivr.net/gh/stdlib-js/string-base-trim@v0.2.1-esm/index.mjs";import s from"https://cdn.jsdelivr.net/gh/stdlib-js/slice-ctor@v0.2.0-esm/index.mjs";var n="Slice(",r=/\s*,\s*/,e=/^-?[0-9]+$/;function l(l){var i,u,f,d,m;if(l.substring(0,6)!==n)return null;if(")"!==l[f=l.length-1])return null;if(3!==(l=(l=t(l.substring(6,f))).split(r)).length)return null;for(i=[],m=0;m<3;m++){if("null"===(d=l[m]))u=null;else{if(!e.test(d))return null;u=parseInt(d,10)}i.push(u)}return new s(i[0],i[1],i[2])}export{l as default};
//# sourceMappingURL=index.mjs.map
