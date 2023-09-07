import{a as C}from"./chunk-AY7I2SME-c7b6cf8a.js";import{j as e,t as c}from"./TetrislyProvider-e2de8794.js";import{R as S}from"./tetrisly-icons.es-3ae3ef26.js";import{r as q}from"./index-76fb7be0.js";import{m as N}from"./mergeConfigWithCutom-789678df.js";import{B as y}from"./Button-080d7a62.js";import{I as V}from"./IconButton-a56e72f5.js";import"./_commonjsHelpers-de833af9.js";import"./index-d903fd8e.js";import"./Loader-65d02216.js";const M={p:"component-padding-medium",pl:"component-padding-2xLarge",display:"flex",alignItems:"center",text:"body-medium",intent:{none:{backgroundColor:"background-neutral-strong",color:"content-primary-inverted"},positive:{backgroundColor:"background-positive-strong",color:"content-primary-inverted"},warning:{backgroundColor:"background-warning-strong",color:"content-primary"},negative:{backgroundColor:"background-negative-strong",color:"content-primary-inverted"}},innerElements:{iconContainer:{mr:"component-gap-small"},actionContainer:{display:"flex",alignItems:"center",justifyContent:"center",gap:"component-gap-small",ml:"component-gap-large"},closeButton:{marginLeft:"auto"}}},L=t=>({none:"20-info-fill",positive:"20-info-fill",warning:"20-warning-fill",negative:"20-alert-fill"})[t],R=(t,r)=>{const{intent:a,innerElements:{iconContainer:o,actionContainer:i,closeButton:u},...n}=N({defaultConfig:M,custom:r}),g={appearance:t==="warning"?"reverseInverted":"inverted"},s={appearance:t==="warning"?"primary":"inverted"};return{container:{...a[t],...n},iconContainer:o,actionContainer:i,actionProps:g,closeButtonProps:s,closeButton:u}},v=({text:t,intent:r="none",custom:a,action:o,onCloseClick:i,...u})=>{const n=q.useMemo(()=>R(r,a),[r,a]),g=L(r),[s,f]=Array.isArray(o)?o:[o,void 0];return e.jsxs(c.div,{...n.container,...u,"data-testid":"alert-banner",children:[e.jsx(c.span,{...n.iconContainer,"data-testid":"alert-banner-iconContainer",children:e.jsx(S,{name:g})}),t,s&&e.jsxs(c.div,{...n.actionContainer,"data-testid":"alert-banner-actionContainer",children:[e.jsx(y,{variant:"bare",...n.actionProps,...s}),f&&e.jsxs(e.Fragment,{children:[e.jsx(c.div,{children:"·"}),e.jsx(y,{variant:"bare",...n.actionProps,...f})]})]}),!!i&&e.jsx(V,{size:"small",variant:"ghost",intent:"none",icon:"20-close",onClick:i,...n.closeButton,...n.closeButtonProps,"data-testid":"alert-banner-closeButton"})]})};try{v.displayName="AlertBanner",v.__docgenInfo={description:"",displayName:"AlertBanner",props:{text:{defaultValue:null,description:"",name:"text",required:!0,type:{name:"string"}},intent:{defaultValue:{value:"none"},description:"",name:"intent",required:!1,type:{name:"enum",value:[{value:'"warning"'},{value:'"negative"'},{value:'"none"'},{value:'"positive"'}]}},action:{defaultValue:null,description:"",name:"action",required:!1,type:{name:"ActionProp"}},onCloseClick:{defaultValue:null,description:"",name:"onCloseClick",required:!1,type:{name:"((e: MouseEvent<HTMLButtonElement, MouseEvent>) => void)"}},custom:{defaultValue:null,description:"",name:"custom",required:!1,type:{name:"AlertBannerConfig"}}}}}catch{}const Q={title:"Components/AlertBanner",component:v,tags:["autodocs"],args:{text:"Alert text",action:[{label:"Action",onClick:C("onClick")},{label:"Action",onClick:C("onClick")}]}},l={},p={args:{intent:"positive"}},m={args:{intent:"warning"}},d={args:{intent:"negative"}};var x,b,B;l.parameters={...l.parameters,docs:{...(x=l.parameters)==null?void 0:x.docs,source:{originalSource:"{}",...(B=(b=l.parameters)==null?void 0:b.docs)==null?void 0:B.source}}};var k,A,j;p.parameters={...p.parameters,docs:{...(k=p.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    intent: 'positive'
  }
}`,...(j=(A=p.parameters)==null?void 0:A.docs)==null?void 0:j.source}}};var _,w,h;m.parameters={...m.parameters,docs:{...(_=m.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    intent: 'warning'
  }
}`,...(h=(w=m.parameters)==null?void 0:w.docs)==null?void 0:h.source}}};var E,P,I;d.parameters={...d.parameters,docs:{...(E=d.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    intent: 'negative'
  }
}`,...(I=(P=d.parameters)==null?void 0:P.docs)==null?void 0:I.source}}};const U=["Default","Positive","Warning","Negative"];export{l as Default,d as Negative,p as Positive,m as Warning,U as __namedExportsOrder,Q as default};
//# sourceMappingURL=AlertBanner.stories-63227a03.js.map
