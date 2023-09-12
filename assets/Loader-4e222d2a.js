import{U as g,s as S,t as d,j as l}from"./TetrislyProvider-07235cd3.js";import{r as _}from"./index-76fb7be0.js";import{m as k}from"./mergeConfigWithCutom-789678df.js";const x=g`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`,V=g`
  0% {
    transform: translate(-50%, 0px);
  }
  100% {
    transform: translate(150%, 0px);
  }
`,m=S(d.path)`
  aspect-ratio: 1;
  transform-origin: center center;
  animation: ${({shape:r})=>r==="circle"?x:V}
    1.4s infinite linear;
`;try{m.displayName="AnimatedPath",m.__docgenInfo={description:"",displayName:"AnimatedPath",props:{ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"((instance: SVGPathElement | null) => void) | RefObject<SVGPathElement> | null"}},shape:{defaultValue:null,description:"",name:"shape",required:!0,type:{name:"string"}},theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"Theme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"undefined"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"undefined"}}}}}catch{}const q={size:{circle:{large:{w:48,h:48,strokeWidth:"2"},medium:{w:32,h:32,strokeWidth:"2"},small:{w:20,h:20,strokeWidth:"2"}},bar:{large:{w:128,h:8,strokeWidth:"8"},medium:{w:128,h:6,strokeWidth:"6"},small:{w:128,h:4,strokeWidth:"4"}}},appearance:{primary:{base:{stroke:"interaction-neutral-subtle-normal"},progress:{stroke:"interaction-default-normal"}},inverted:{base:{stroke:"interaction-inverted-normal"},progress:{stroke:"interaction-default-normal"}},white:{base:{stroke:"interaction-inverted-normal",opacity:.4},progress:{stroke:"interaction-inverted-normal"}},greyscale:{base:{stroke:"interaction-neutral-subtle-normal"},progress:{stroke:"interaction-neutral-normal"}}},svg:{fill:"none",borderRadius:"large"},progress:{strokeLinecap:"round"}};function u(r,t,e,s){const a=(s-90)*Math.PI/180;return{x:r+e*Math.cos(a),y:t+e*Math.sin(a)}}function p(r,t,e,s,a){const n=u(r,t,e,a),i=u(r,t,e,s),o=a-s<=180?"0":"1";return["M",n.x,n.y,"A",e,e,0,o,0,i.x,i.y].join(" ")}const z=({custom:r,...t})=>{const e=k({defaultConfig:q,custom:r}),s=e.size[t.shape][t.size],{w:a,h:n,...i}=s,o={...s,viewBox:`0 0 ${a} ${n}`},c=Math.min(Math.max(t.progress??.4,0),1),h={d:t.shape==="circle"?p(a/2,a/2,a/2-3,0,359.99):`M 0 ${n/2} H ${a}`},y={d:t.shape==="circle"?p(a/2,a/2,a/2-3,0,359.99*c):`M 0 ${n/2} H ${c*a}`},v={...o,...e.svg},b={...h,...i,...e.appearance[t.appearance].base,...e.progress},w={...y,...i,...e.appearance[t.appearance].progress,...e.progress};return{svgStyles:v,baseStyles:b,progressStyles:w}},f=({appearance:r="primary",progress:t,shape:e,size:s="medium",custom:a})=>{const{svgStyles:n,baseStyles:i,progressStyles:o}=_.useMemo(()=>z({appearance:r,progress:t,shape:e,size:s,custom:a}),[r,t,e,s,a]);return l.jsxs(d.svg,{...n,xmlns:"http://www.w3.org/2000/svg","data-testid":"loader",children:[l.jsx(d.path,{...i,"data-testid":"loader-base"}),t===void 0?l.jsx(m,{shape:e,...o,"data-testid":"loader-progress"}):l.jsx(d.path,{...o,"data-testid":"loader-progress"})]})};try{f.displayName="Loader",f.__docgenInfo={description:"",displayName:"Loader",props:{appearance:{defaultValue:{value:"primary"},description:"",name:"appearance",required:!1,type:{name:"enum",value:[{value:'"primary"'},{value:'"inverted"'},{value:'"white"'},{value:'"greyscale"'}]}},size:{defaultValue:{value:"medium"},description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"large"'},{value:'"medium"'},{value:'"small"'}]}},progress:{defaultValue:null,description:"",name:"progress",required:!1,type:{name:"number"}},shape:{defaultValue:null,description:"",name:"shape",required:!0,type:{name:"enum",value:[{value:'"circle"'},{value:'"bar"'}]}},custom:{defaultValue:null,description:"",name:"custom",required:!1,type:{name:"DeepPartial<LoaderConfig>"}}}}}catch{}export{f as L};
//# sourceMappingURL=Loader-4e222d2a.js.map
