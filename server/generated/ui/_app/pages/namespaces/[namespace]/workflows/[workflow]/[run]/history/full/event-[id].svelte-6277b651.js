import{S as o,i,s as c,j as u,m,o as f,x as l,u as d,v as p}from"../../../../../../../../chunks/vendor-8450f4eb.js";import{E as v}from"../../../../../../../../chunks/event-details-536afca1.js";import"../../../../../../../../chunks/format-camel-case-8b7e013d.js";import"../../../../../../../../chunks/code-block-75ba3175.js";function _(s){let e,n;return e=new v({props:{attributes:s[0].attributes}}),{c(){u(e.$$.fragment)},l(t){m(e.$$.fragment,t)},m(t,a){f(e,t,a),n=!0},p(t,[a]){const r={};a&1&&(r.attributes=t[0].attributes),e.$set(r)},i(t){n||(l(e.$$.fragment,t),n=!0)},o(t){d(e.$$.fragment,t),n=!1},d(t){p(e,t)}}}async function k({stuff:s,page:e}){const{events:n}=s;return{props:{event:n.find(t=>t.id===e.params.id)}}}function $(s,e,n){let{event:t}=e;return s.$$set=a=>{"event"in a&&n(0,t=a.event)},[t]}class x extends o{constructor(e){super();i(this,e,$,_,c,{event:0})}}export{x as default,k as load};