import{ar as a,as as s,at as i,au as f}from"./vendor-ea4e1b17.js";const o="H:mm:ss:SS a O ccc, LLL do";function u(e,r="UTC"){if(!e)return"";try{t(e)&&(e=c(e));const n=a(e);return r==="local"?s(n,o):r==="relative"?i(n)+" ago":f(n,"UTC",o)}catch{return""}}function c(e){if(!t(e))throw new TypeError("provided value is not a timestamp");const r=new Date(null);return r.setTime(Number(e.seconds)*1e3+e.nanos/1e3),r}function t(e){return typeof e=="object"?e.seconds!==void 0&&e.nanos!==void 0:!1}export{u as f};
