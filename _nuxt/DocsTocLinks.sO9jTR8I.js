import{r as d,$ as _,ag as g,ac as y,d as k,u as b,b as u,c as m,F as x,ah as B,n as h,e as C,t as H,J as S,ai as A,X as $,f as q,l as M}from"./entry.B8hXqZmj.js";const T=()=>{const a=d(),s=d([]),c=d([]),l=e=>e.forEach(t=>{const r=t.target.id;t.isIntersecting?s.value.push(r):s.value=s.value.filter(n=>n!==r)}),i=e=>e.forEach(t=>{a.value.observe(t)});return _(s,(e,t)=>{e.length===0?c.value=t:c.value=e},{deep:!0}),g(()=>a.value=new IntersectionObserver(l)),y(()=>{var e;return(e=a.value)==null?void 0:e.disconnect()}),{visibleHeadings:s,activeHeadings:c,updateHeadings:i}},w={class:"docs-toc-links"},D=["href","onClick"],E=k({__name:"DocsTocLinks",props:{links:{type:Array,default:()=>[]}},emits:["move"],setup(a,{emit:s}){const c=s,l=b(),{activeHeadings:i,updateHeadings:e}=T();setTimeout(()=>{e([...document.querySelectorAll(".document-driven-page h1, .docus-content h1"),...document.querySelectorAll(".document-driven-page h2, .docus-content h2"),...document.querySelectorAll(".document-driven-page h3, .docus-content h3"),...document.querySelectorAll(".document-driven-page h4, .docus-content h4")])},300);function t(n){l.push(`#${n}`),c("move",n)}function r(n){c("move",n)}return(n,v)=>{const f=I;return u(),m("ul",w,[(u(!0),m(x,null,B(a.links,o=>(u(),m("li",{key:o.text,class:h([`depth-${o.depth}`])},[C("a",{href:`#${o.id}`,class:h([S(i).includes(o.id)&&"active"]),onClick:A(p=>t(o.id),["prevent"])},H(o.text),11,D),o.children?(u(),$(f,{key:0,links:o.children,onMove:v[0]||(v[0]=p=>r(p))},null,8,["links"])):q("",!0)],2))),128))])}}}),I=M(E,[["__scopeId","data-v-2e78dd64"]]);export{I as default};
