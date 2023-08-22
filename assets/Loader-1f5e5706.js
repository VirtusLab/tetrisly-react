import{U as f,s as k,t as d,j as i}from"./TetrislyProvider-1d2dd998.js";import{l as S}from"./lodash-f6b38868.js";const _=f`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`,x=f`
  0% {
    transform: translate(-50%, 0px);
  }
  100% {
    transform: translate(150%, 0px);
  }
`,c=k(d.path)`
  aspect-ratio: 1;
  transform-origin: center center;
  animation: ${({shape:e})=>e==="circle"?_:x}
    1.4s infinite linear;
`;try{c.displayName="AnimatedPath",c.__docgenInfo={description:"",displayName:"AnimatedPath",props:{ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"((instance: SVGPathElement | null) => void) | RefObject<SVGPathElement> | null"}},shape:{defaultValue:null,description:"",name:"shape",required:!0,type:{name:"string"}},theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"Theme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"undefined"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"undefined"}}}}}catch{}const u={size:{circle:{large:{w:48,h:48,strokeWidth:"2"},medium:{w:32,h:32,strokeWidth:"2"},small:{w:20,h:20,strokeWidth:"2"}},bar:{large:{w:128,h:8,strokeWidth:"8"},medium:{w:128,h:6,strokeWidth:"6"},small:{w:128,h:4,strokeWidth:"4"}}},appearance:{primary:{base:{stroke:"interaction-neutral-subtle-normal"},progress:{stroke:"interaction-default-normal"}},inverted:{base:{stroke:"interaction-inverted-normal"},progress:{stroke:"interaction-default-normal"}},white:{base:{stroke:"interaction-inverted-normal",opacity:.4},progress:{stroke:"interaction-inverted-normal"}},greyscale:{base:{stroke:"interaction-neutral-subtle-normal"},progress:{stroke:"interaction-neutral-normal"}}},svg:{fill:"none",borderRadius:"large"},progress:{strokeLinecap:"round"}};function p(e,r,t,a){const s=(a-90)*Math.PI/180;return{x:e+t*Math.cos(s),y:r+t*Math.sin(s)}}function y(e,r,t,a,s){const n=p(e,r,t,s),l=p(e,r,t,a),o=s-a<=180?"0":"1";return["M",n.x,n.y,"A",t,t,0,o,0,l.x,l.y].join(" ")}function V(e){const r=e.custom?S.merge(u,e.custom):u,t=r.size[e.shape][e.size],{w:a,h:s,...n}=t,l={...t,viewBox:`0 0 ${a} ${s}`},o=Math.min(Math.max(e.progress??.4,0),1),m={d:e.shape==="circle"?y(a/2,a/2,a/2-3,0,359.99):`M 0 ${s/2} H ${a}`},g={d:e.shape==="circle"?y(a/2,a/2,a/2-3,0,359.99*o):`M 0 ${s/2} H ${o*a}`},v={...l,...r.svg},b={...m,...n,...r.appearance[e.appearance].base,...r.progress},w={...g,...n,...r.appearance[e.appearance].progress,...r.progress};return{svgStyles:v,baseStyles:b,progressStyles:w}}const h=({appearance:e="primary",progress:r,shape:t,size:a="medium",custom:s})=>{const{svgStyles:n,baseStyles:l,progressStyles:o}=V({appearance:e,progress:r,shape:t,size:a,custom:s});return i.jsxs(d.svg,{...n,xmlns:"http://www.w3.org/2000/svg","data-testid":"loader",children:[i.jsx(d.path,{...l,"data-testid":"loader-base"}),r===void 0?i.jsx(c,{shape:t,...o,"data-testid":"loader-progress"}):i.jsx(d.path,{...o,"data-testid":"loader-progress"})]})};try{h.displayName="Loader",h.__docgenInfo={description:"",displayName:"Loader",props:{appearance:{defaultValue:{value:"primary"},description:"",name:"appearance",required:!1,type:{name:"enum",value:[{value:'"primary"'},{value:'"inverted"'},{value:'"white"'},{value:'"greyscale"'}]}},size:{defaultValue:{value:"medium"},description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"medium"'},{value:'"large"'},{value:'"small"'}]}},progress:{defaultValue:null,description:"",name:"progress",required:!1,type:{name:"number"}},shape:{defaultValue:null,description:"",name:"shape",required:!0,type:{name:"enum",value:[{value:'"circle"'},{value:'"bar"'}]}},custom:{defaultValue:null,description:"",name:"custom",required:!1,type:{name:'DeepPartial<SystemProps<Theme> & { readonly size: { readonly circle: { readonly large: { readonly w: 48; readonly h: 48; readonly strokeWidth: "2"; }; readonly medium: { readonly w: 32; readonly h: 32; readonly strokeWidth: "2"; }; readonly small: { ...; }; }; readonly bar: { ...; }; }; readonly appearance: { ...; }...'}}}}}catch{}export{h as L};
//# sourceMappingURL=Loader-1f5e5706.js.map
