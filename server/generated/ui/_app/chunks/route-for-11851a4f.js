var r=Object.getOwnPropertySymbols;var v=Object.prototype.hasOwnProperty,k=Object.prototype.propertyIsEnumerable;var u=(o,n)=>{var t={};for(var f in o)v.call(o,f)&&n.indexOf(f)<0&&(t[f]=o[f]);if(o!=null&&r)for(var f of r(o))n.indexOf(f)<0&&k.call(o,f)&&(t[f]=o[f]);return t};const $=({namespace:o})=>`/namespaces/${o}`,w=o=>`${$(o)}/workflows`,e=f=>{var c=f,{workflowId:o,runId:n}=c,t=u(c,["workflowId","runId"]);return`${w(t)}/${o}/${n}`},i=(o,n)=>n?`${e(o)}/history/${n}`:`${e(o)}/history`,l=(o,n,t,f)=>`${i(o,n)}/${t}-${f}`,s=(o,n,t,f,c)=>`${i(o,n)}/${t}-${c}/events/${f}`,y=o=>`${e(o)}/workers`;function d(o,n){let t;return o==="workflows"&&(t=w(n)),o==="workflow"&&(t=e(n)),o==="workflow.events"&&(t=i(n)),o==="workflow.events.full"&&(t=i(n,"full")),o==="workflow.events.compact"&&(t=i(n,"compact")),o==="workflow.events.json"&&(t=i(n,"json")),o==="workflow.events.full.event"&&(t=l(n,"full","event",n.eventId)),o==="workflow.events.full.pending"&&(t=l(n,"full","pending",n.eventId)),o==="workflow.events.compact.activity"&&(t=l(n,"compact","activity",n.eventId)),o==="workflow.events.compact.activity.event"&&(t=s(n,"compact","activity",n.eventId,n.activityId)),o==="workflow.query"&&(t=e(n)+"/query"),o==="workflow.stack-trace"&&(t=e(n)+"/stack-trace"),o==="workers"&&(t=y(n)),n.query?`${t}?${n.query}`:t}export{d as r};
