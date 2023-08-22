import{U as h,s as k,t as d,j as i}from"./TetrislyProvider-44685265.js";import{l as S}from"./lodash-f6b38868.js";const _=h`
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
`,m=k(d.path)`
  aspect-ratio: 1;
  transform-origin: center center;
  animation: ${({shape:t})=>t==="circle"?_:x}
    1.4s infinite linear;
`;try{m.displayName="AnimatedPath",m.__docgenInfo={description:"",displayName:"AnimatedPath",props:{shape:{defaultValue:null,description:"",name:"shape",required:!0,type:{name:"string"}},ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"((instance: SVGPathElement | null) => void) | RefObject<SVGPathElement> | null"}},theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"Theme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"undefined"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"undefined"}}}}}catch{}const V={size:{circle:{large:{w:48,h:48,strokeWidth:"2"},medium:{w:32,h:32,strokeWidth:"2"},small:{w:20,h:20,strokeWidth:"2"}},bar:{large:{w:128,h:8,strokeWidth:"8"},medium:{w:128,h:6,strokeWidth:"6"},small:{w:128,h:4,strokeWidth:"4"}}},appearance:{primary:{base:{stroke:"interaction-neutral-subtle-normal"},progress:{stroke:"interaction-default-normal"}},inverted:{base:{stroke:"interaction-inverted-normal"},progress:{stroke:"interaction-default-normal"}},white:{base:{stroke:"interaction-inverted-normal",opacity:.4},progress:{stroke:"interaction-inverted-normal"}},greyscale:{base:{stroke:"interaction-neutral-subtle-normal"},progress:{stroke:"interaction-neutral-normal"}}},svg:{fill:"none",borderRadius:"large"},progress:{strokeLinecap:"round"}};function u(t,r,e,s){const a=(s-90)*Math.PI/180;return{x:t+e*Math.cos(a),y:r+e*Math.sin(a)}}function p(t,r,e,s,a){const n=u(t,r,e,a),o=u(t,r,e,s),l=a-s<=180?"0":"1";return["M",n.x,n.y,"A",e,e,0,l,0,o.x,o.y].join(" ")}function z({custom:t={},...r}){const e=S.merge(V,t),s=e.size[r.shape][r.size],{w:a,h:n,...o}=s,l={...s,viewBox:`0 0 ${a} ${n}`},c=Math.min(Math.max(r.progress??.4,0),1),f={d:r.shape==="circle"?p(a/2,a/2,a/2-3,0,359.99):`M 0 ${n/2} H ${a}`},g={d:r.shape==="circle"?p(a/2,a/2,a/2-3,0,359.99*c):`M 0 ${n/2} H ${c*a}`},v={...l,...e.svg},b={...f,...o,...e.appearance[r.appearance].base,...e.progress},w={...g,...o,...e.appearance[r.appearance].progress,...e.progress};return{svgStyles:v,baseStyles:b,progressStyles:w}}const y=({appearance:t="primary",progress:r,shape:e,size:s="medium",custom:a={}})=>{const{svgStyles:n,baseStyles:o,progressStyles:l}=z({appearance:t,progress:r,shape:e,size:s,custom:a});return i.jsxs(d.svg,{...n,xmlns:"http://www.w3.org/2000/svg","data-testid":"loader",children:[i.jsx(d.path,{...o,"data-testid":"loader-base"}),r===void 0?i.jsx(m,{shape:e,...l,"data-testid":"loader-progress"}):i.jsx(d.path,{...l,"data-testid":"loader-progress"})]})};try{y.displayName="Loader",y.__docgenInfo={description:"",displayName:"Loader",props:{appearance:{defaultValue:{value:"primary"},description:"",name:"appearance",required:!1,type:{name:"enum",value:[{value:'"white"'},{value:'"primary"'},{value:'"inverted"'},{value:'"greyscale"'}]}},size:{defaultValue:{value:"medium"},description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"large"'},{value:'"medium"'},{value:'"small"'}]}},progress:{defaultValue:null,description:"",name:"progress",required:!1,type:{name:"number"}},shape:{defaultValue:null,description:"",name:"shape",required:!0,type:{name:"enum",value:[{value:'"circle"'},{value:'"bar"'}]}},custom:{defaultValue:{value:"{}"},description:"",name:"custom",required:!1,type:{name:'DeepPartial<SystemProps<Theme> & { readonly size: { readonly circle: { readonly large: { readonly w: 48; readonly h: 48; readonly strokeWidth: "2"; }; readonly medium: { readonly w: 32; readonly h: 32; readonly strokeWidth: "2"; }; readonly small: { ...; }; }; readonly bar: { ...; }; }; readonly appearance: { ...; }...'}}}}}catch{}export{y as L};
//# sourceMappingURL=Loader-ffba041d.js.map
