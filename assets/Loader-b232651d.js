import{U as h,s as S,t as d,j as l}from"./TetrislyProvider-67542124.js";import{l as _}from"./lodash-f6b38868.js";const k=h`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`,x=h`
  0% {
    transform: translate(-50%, 0px);
  }
  100% {
    transform: translate(150%, 0px);
  }
`,c=S(d.path)`
  aspect-ratio: 1;
  transform-origin: center center;
  animation: ${({shape:e})=>e==="circle"?k:x}
    1.4s infinite linear;
`;try{c.displayName="AnimatedPath",c.__docgenInfo={description:"",displayName:"AnimatedPath",props:{ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"((instance: SVGPathElement | null) => void) | RefObject<SVGPathElement> | null"}},shape:{defaultValue:null,description:"",name:"shape",required:!0,type:{name:"string"}},theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"Theme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"undefined"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"undefined"}}}}}catch{}const m={size:{circle:{large:{w:48,h:48,strokeWidth:"2"},medium:{w:32,h:32,strokeWidth:"2"},small:{w:20,h:20,strokeWidth:"2"}},bar:{large:{w:128,h:8,strokeWidth:"8"},medium:{w:128,h:6,strokeWidth:"6"},small:{w:128,h:4,strokeWidth:"4"}}},appearance:{primary:{base:{stroke:"interaction-neutral-subtle-normal"},progress:{stroke:"interaction-default-normal"}},inverted:{base:{stroke:"interaction-inverted-normal"},progress:{stroke:"interaction-default-normal"}},white:{base:{stroke:"interaction-inverted-normal",opacity:.4},progress:{stroke:"interaction-inverted-normal"}},greyscale:{base:{stroke:"interaction-neutral-subtle-normal"},progress:{stroke:"interaction-neutral-normal"}}},svg:{fill:"none",borderRadius:"large"},progress:{strokeLinecap:"round"}};function p(e,t,r,a){const s=(a-90)*Math.PI/180;return{x:e+r*Math.cos(s),y:t+r*Math.sin(s)}}function f(e,t,r,a,s){const n=p(e,t,r,s),o=p(e,t,r,a),i=s-a<=180?"0":"1";return["M",n.x,n.y,"A",r,r,0,i,0,o.x,o.y].join(" ")}const V=e=>{const t=e.custom?_.merge(m,e.custom):m,r=t.size[e.shape][e.size],{w:a,h:s,...n}=r,o={...r,viewBox:`0 0 ${a} ${s}`},i=Math.min(Math.max(e.progress??.4,0),1),u={d:e.shape==="circle"?f(a/2,a/2,a/2-3,0,359.99):`M 0 ${s/2} H ${a}`},y={d:e.shape==="circle"?f(a/2,a/2,a/2-3,0,359.99*i):`M 0 ${s/2} H ${i*a}`},v={...o,...t.svg},b={...u,...n,...t.appearance[e.appearance].base,...t.progress},w={...y,...n,...t.appearance[e.appearance].progress,...t.progress};return{svgStyles:v,baseStyles:b,progressStyles:w}},g=({appearance:e="primary",progress:t,shape:r,size:a="medium",custom:s})=>{const{svgStyles:n,baseStyles:o,progressStyles:i}=V({appearance:e,progress:t,shape:r,size:a,custom:s});return l.jsxs(d.svg,{...n,xmlns:"http://www.w3.org/2000/svg","data-testid":"loader",children:[l.jsx(d.path,{...o,"data-testid":"loader-base"}),t===void 0?l.jsx(c,{shape:r,...i,"data-testid":"loader-progress"}):l.jsx(d.path,{...i,"data-testid":"loader-progress"})]})};try{g.displayName="Loader",g.__docgenInfo={description:"",displayName:"Loader",props:{appearance:{defaultValue:{value:"primary"},description:"",name:"appearance",required:!1,type:{name:"enum",value:[{value:'"primary"'},{value:'"inverted"'},{value:'"white"'},{value:'"greyscale"'}]}},size:{defaultValue:{value:"medium"},description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"medium"'},{value:'"small"'},{value:'"large"'}]}},progress:{defaultValue:null,description:"",name:"progress",required:!1,type:{name:"number"}},shape:{defaultValue:null,description:"",name:"shape",required:!0,type:{name:"enum",value:[{value:'"circle"'},{value:'"bar"'}]}},custom:{defaultValue:null,description:"",name:"custom",required:!1,type:{name:"DeepPartial<LoaderConfig>"}}}}}catch{}export{g as L};
//# sourceMappingURL=Loader-b232651d.js.map
