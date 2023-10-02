// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import t from"https://cdn.jsdelivr.net/gh/stdlib-js/string-base-trim@v0.1.0-esm/index.mjs";import e from"https://cdn.jsdelivr.net/gh/stdlib-js/slice-ctor@v0.1.0-esm/index.mjs";var n=/\s*,\s*/,l=/^-?[0-9]+$/;function s(s){var r,i,u,f,d;if("Slice("!==s.substring(0,"Slice(".length))return null;if(")"!==s[u=s.length-1])return null;if(3!==(s=(s=t(s.substring("Slice(".length,u))).split(n)).length)return null;for(r=[],d=0;d<3;d++){if("null"===(f=s[d]))i=null;else{if(!l.test(f))return null;i=parseInt(f,10)}r.push(i)}return new e(r[0],r[1],r[2])}export{s as default};
//# sourceMappingURL=index.mjs.map
