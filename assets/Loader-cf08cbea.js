import{U as v,s as A,t as c,j as d}from"./TetrislyProvider-dd60e1dd.js";import{r as q}from"./index-76fb7be0.js";import{m as M}from"./mergeConfigWithCutom-32643429.js";const P=v`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`,E=v`
  0% {
    transform: translate(-50%, 0px);
  }
  100% {
    transform: translate(150%, 0px);
  }
`,u=A(c.path)`
  aspect-ratio: 1;
  transform-origin: center center;
  animation: ${({shape:a})=>a==="circle"?P:E}
    1.4s infinite linear;
`;try{u.displayName="AnimatedProgress",u.__docgenInfo={description:"",displayName:"AnimatedProgress",props:{ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"((instance: SVGPathElement | null) => void) | RefObject<SVGPathElement> | null"}},shape:{defaultValue:null,description:"",name:"shape",required:!0,type:{name:"string"}},theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"Theme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"undefined"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"undefined"}}}}}catch{}const j={fill:"none",borderRadius:"large",shape:{circle:{size:{large:{w:48,h:48,strokeWidth:"2"},medium:{w:32,h:32,strokeWidth:"2"},small:{w:20,h:20,strokeWidth:"2"}}},bar:{size:{large:{w:128,h:8,strokeWidth:"8"},medium:{w:128,h:6,strokeWidth:"6"},small:{w:128,h:4,strokeWidth:"4"}}}},innerElements:{base:{appearance:{primary:{stroke:"interaction-neutral-subtle-normal"},inverted:{stroke:"interaction-inverted-normal"},white:{stroke:"interaction-inverted-normal",opacity:.4},greyscale:{stroke:"interaction-neutral-subtle-normal"}}},progress:{strokeLinecap:"round",appearance:{primary:{stroke:"interaction-default-normal"},inverted:{stroke:"interaction-default-normal"},white:{stroke:"interaction-inverted-normal"},greyscale:{stroke:"interaction-neutral-normal"}}}}},z=.4,h=(a,e,t,n)=>{const r=(n-90)*Math.PI/180;return{x:a+t*Math.cos(r),y:e+t*Math.sin(r)}},y=(a,e,t,n,r)=>{const o=h(a,e,t,r),i=h(a,e,t,n),l=r-n<=180?"0":"1";return["M",o.x,o.y,"A",t,t,0,l,0,i.x,i.y].join(" ")},C=({custom:a,...e})=>{const t=M({defaultConfig:j,custom:a}),{shape:n,innerElements:{base:r,progress:o},...i}=t,l=n[e.shape].size[e.size],{w:s,h:m,...p}=l,_={...l,viewBox:`0 0 ${s} ${m}`},f=Math.min(Math.max(e.progress??z,0),1),w={d:e.shape==="circle"?y(s/2,s/2,s/2-3,0,359.99):`M 0 ${m/2} H ${s}`},S={d:e.shape==="circle"?y(s/2,s/2,s/2-3,0,359.99*f):`M 0 ${m/2} H ${f*s}`},{appearance:b,...k}=r,{appearance:x,...V}=o;return{container:{..._,...i},base:{...w,...p,...b[e.appearance],...k},progress:{...S,...p,...x[e.appearance],...V}}},g=({appearance:a="primary",progress:e,shape:t,size:n="medium",custom:r,...o})=>{const i=q.useMemo(()=>C({appearance:a,progress:e,shape:t,size:n,custom:r}),[a,e,t,n,r]);return d.jsxs(c.svg,{...i.container,xmlns:"http://www.w3.org/2000/svg","data-testid":"loader",...o,children:[d.jsx(c.path,{...i.base,"data-testid":"loader-base"}),e===void 0?d.jsx(u,{shape:t,...i.progress,"data-testid":"loader-progress"}):d.jsx(c.path,{...i.progress,"data-testid":"loader-progress"})]})};try{g.displayName="Loader",g.__docgenInfo={description:"",displayName:"Loader",props:{appearance:{defaultValue:{value:"primary"},description:"",name:"appearance",required:!1,type:{name:"enum",value:[{value:'"primary"'},{value:'"white"'},{value:'"inverted"'},{value:'"greyscale"'}]}},size:{defaultValue:{value:"medium"},description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"large"'},{value:'"medium"'},{value:'"small"'}]}},progress:{defaultValue:null,description:"",name:"progress",required:!1,type:{name:"number"}},shape:{defaultValue:null,description:"",name:"shape",required:!0,type:{name:"enum",value:[{value:'"circle"'},{value:'"bar"'}]}},custom:{defaultValue:null,description:"",name:"custom",required:!1,type:{name:"LoaderConfig"}}}}}catch{}export{g as L};
//# sourceMappingURL=Loader-cf08cbea.js.map
