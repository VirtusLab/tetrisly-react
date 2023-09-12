import{a as f}from"./chunk-AY7I2SME-c7b6cf8a.js";import{j as e,t as c}from"./TetrislyProvider-07235cd3.js";import{R as S}from"./tetrisly-icons.es-3ae3ef26.js";import{r as C}from"./index-76fb7be0.js";import{m as q}from"./mergeConfigWithCutom-789678df.js";import{B as x}from"./Button-7524adde.js";import{I as M}from"./IconButton-83d763b2.js";import{u as V}from"./useAction-275346b1.js";import"./_commonjsHelpers-de833af9.js";import"./index-dcaaca1f.js";import"./Loader-4e222d2a.js";const R={p:"component-padding-medium",pl:"component-padding-2xLarge",display:"flex",alignItems:"center",text:"body-medium",intent:{none:{backgroundColor:"background-neutral-strong",color:"content-primary-inverted"},positive:{backgroundColor:"background-positive-strong",color:"content-primary-inverted"},warning:{backgroundColor:"background-warning-strong",color:"content-primary"},negative:{backgroundColor:"background-negative-strong",color:"content-primary-inverted"}},innerElements:{iconContainer:{mr:"component-gap-small"},actionContainer:{display:"flex",alignItems:"center",justifyContent:"center",gap:"component-gap-small",ml:"component-gap-large"},closeButton:{ml:"auto"}}},W=t=>({none:"20-info-fill",positive:"20-info-fill",warning:"20-warning-fill",negative:"20-alert-fill"})[t],D=(t,o)=>{const{intent:r,innerElements:{iconContainer:u,actionContainer:a,closeButton:g},...n}=q({defaultConfig:R,custom:o}),i={appearance:t==="warning"?"reverseInverted":"inverted"},s={appearance:t==="warning"?"primary":"inverted"};return{container:{...r[t],...n},iconContainer:u,actionContainer:a,actionProps:i,closeButtonProps:s,closeButton:g}},v=({text:t,intent:o="none",custom:r,action:u,onCloseClick:a,...g})=>{const n=C.useMemo(()=>D(o,r),[o,r]),[i,s]=V(u),N=C.useMemo(()=>W(o),[o]);return e.jsxs(c.div,{...n.container,"data-testid":"alert-banner",...g,children:[e.jsx(c.span,{...n.iconContainer,"data-testid":"alert-banner-iconContainer",children:e.jsx(S,{name:N})}),t,i&&e.jsxs(c.div,{...n.actionContainer,"data-testid":"alert-banner-actionContainer",children:[e.jsx(x,{variant:"bare",...n.actionProps,...i}),s&&e.jsxs(e.Fragment,{children:[e.jsx(c.div,{children:"·"}),e.jsx(x,{variant:"bare",...n.actionProps,...s})]})]}),!!a&&e.jsx(M,{size:"small",variant:"ghost",intent:"none",icon:"20-close",onClick:a,...n.closeButton,...n.closeButtonProps,"data-testid":"alert-banner-closeButton"})]})};try{v.displayName="AlertBanner",v.__docgenInfo={description:"",displayName:"AlertBanner",props:{text:{defaultValue:null,description:"",name:"text",required:!0,type:{name:"string"}},intent:{defaultValue:{value:"none"},description:"",name:"intent",required:!1,type:{name:"enum",value:[{value:'"warning"'},{value:'"negative"'},{value:'"none"'},{value:'"positive"'}]}},action:{defaultValue:null,description:"",name:"action",required:!1,type:{name:"ActionProp"}},onCloseClick:{defaultValue:null,description:"",name:"onCloseClick",required:!1,type:{name:"((e: MouseEvent<HTMLButtonElement, MouseEvent>) => void)"}},custom:{defaultValue:null,description:"",name:"custom",required:!1,type:{name:"AlertBannerConfig"}}}}}catch{}const X={title:"Components/AlertBanner",component:v,tags:["autodocs"],args:{text:"Alert text",action:[{label:"Action",onClick:f("onClick")},{label:"Action",onClick:f("onClick")}]}},l={},m={args:{intent:"positive"}},p={args:{intent:"warning"}},d={args:{intent:"negative"}};var y,b,B;l.parameters={...l.parameters,docs:{...(y=l.parameters)==null?void 0:y.docs,source:{originalSource:"{}",...(B=(b=l.parameters)==null?void 0:b.docs)==null?void 0:B.source}}};var k,j,A;m.parameters={...m.parameters,docs:{...(k=m.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    intent: 'positive'
  }
}`,...(A=(j=m.parameters)==null?void 0:j.docs)==null?void 0:A.source}}};var _,w,h;p.parameters={...p.parameters,docs:{...(_=p.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    intent: 'warning'
  }
}`,...(h=(w=p.parameters)==null?void 0:w.docs)==null?void 0:h.source}}};var E,P,I;d.parameters={...d.parameters,docs:{...(E=d.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    intent: 'negative'
  }
}`,...(I=(P=d.parameters)==null?void 0:P.docs)==null?void 0:I.source}}};const Y=["Default","Positive","Warning","Negative"];export{l as Default,d as Negative,m as Positive,p as Warning,Y as __namedExportsOrder,X as default};
//# sourceMappingURL=AlertBanner.stories-799b77da.js.map
