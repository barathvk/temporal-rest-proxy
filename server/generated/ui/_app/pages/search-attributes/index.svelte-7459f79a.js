import{S as b,i as p,s as _,e as m,t as y,k,j as v,c as f,a as d,g as A,d as u,n as $,m as g,b as x,f as j,E as h,o as S,x as E,u as w,v as K}from"../../chunks/vendor-b03dee8a.js";import{K as q}from"../../chunks/key-value-table-6f1fd705.js";import"../../chunks/code-block-184469bd.js";function C(r){let t,a,i,c,s,l;return s=new q({props:{headings:["Attribute","Type"],data:r[0].keys,full:!0}}),{c(){t=m("main"),a=m("h2"),i=y("Search Attributes"),c=k(),v(s.$$.fragment),this.h()},l(e){t=f(e,"MAIN",{});var n=d(t);a=f(n,"H2",{class:!0});var o=d(a);i=A(o,"Search Attributes"),o.forEach(u),c=$(n),g(s.$$.fragment,n),n.forEach(u),this.h()},h(){x(a,"class","text-4xl my-6 font-bold mx-4")},m(e,n){j(e,t,n),h(t,a),h(a,i),h(t,c),S(s,t,null),l=!0},p(e,[n]){const o={};n&1&&(o.data=e[0].keys),s.$set(o)},i(e){l||(E(s.$$.fragment,e),l=!0)},o(e){w(s.$$.fragment,e),l=!1},d(e){e&&u(t),K(s)}}}async function T({fetch:r}){return{props:{searchAttributes:await r("http://localhost:8080/api/v1/search-attributes").then(a=>a.json())}}}function H(r,t,a){let{searchAttributes:i}=t;return r.$$set=c=>{"searchAttributes"in c&&a(0,i=c.searchAttributes)},[i]}class z extends b{constructor(t){super();p(this,t,H,C,_,{searchAttributes:0})}}export{z as default,T as load};