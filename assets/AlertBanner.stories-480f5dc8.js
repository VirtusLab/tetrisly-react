import{j as e}from"./jsx-runtime-ffb262ed.js";import{a as g}from"./chunk-AY7I2SME-5eb1ab46.js";import{R as N}from"./tetrisly-icons.es-3ae3ef26.js";import{r as y}from"./index-76fb7be0.js";import{m as q,l as H,T as M}from"./TetDocs-f92ba7f6.js";import{B as C}from"./Button-fddf0526.js";import{I as V}from"./IconButton-b749a909.js";import{u as D}from"./useAction-275346b1.js";import{t as r}from"./TetrislyProvider-e15ac01a.js";import{S as x}from"./SectionHeader-922ceba2.js";import"./_commonjsHelpers-de833af9.js";import"./index-8e7fbb03.js";import"./iframe-edbef846.js";import"../sb-preview/runtime.js";import"./index-ffc7e5ff.js";import"./index-d37d4223.js";import"./index-356e4a49.js";import"./index-c0a46a9c.js";const T={p:"$space-component-padding-medium",pl:"$space-component-padding-2xLarge",display:"flex",alignItems:"center",text:"$typo-body-medium",intent:{none:{backgroundColor:"$color-background-neutral-strong",color:"$color-content-primary-inverted"},positive:{backgroundColor:"$color-background-positive-strong",color:"$color-content-primary-inverted"},warning:{backgroundColor:"$color-background-warning-strong",color:"$color-content-primary"},negative:{backgroundColor:"$color-background-negative-strong",color:"$color-content-primary-inverted"}},innerElements:{iconContainer:{mr:"$space-component-gap-small"},actionContainer:{display:"flex",alignItems:"center",justifyContent:"center",gap:"$space-component-gap-small",ml:"$space-component-gap-large"},closeButton:{ml:"auto"}}},R=n=>({none:"20-info-fill",positive:"20-info-fill",warning:"20-warning-fill",negative:"20-alert-fill"})[n],W=(n,o)=>{const{intent:i,innerElements:{iconContainer:v,actionContainer:s,closeButton:f},...t}=q({defaultConfig:T,custom:o}),c={appearance:n==="warning"?"reverseInverted":"inverted"},l={appearance:n==="warning"?"primary":"inverted"};return{container:{...i[n],...t},iconContainer:v,actionContainer:s,actionProps:c,closeButtonProps:l,closeButton:f}},a=({text:n,intent:o="none",custom:i,action:v,onCloseClick:s,...f})=>{const t=y.useMemo(()=>W(o,i),[o,i]),[c,l]=D(v),S=y.useMemo(()=>R(o),[o]);return e.jsxs(r.div,{...t.container,"data-testid":"alert-banner",...f,children:[e.jsx(r.span,{...t.iconContainer,"data-testid":"alert-banner-iconContainer",children:e.jsx(N,{name:S})}),n,c&&e.jsxs(r.div,{...t.actionContainer,"data-testid":"alert-banner-actionContainer",children:[e.jsx(C,{variant:"bare",...t.actionProps,...c}),l&&e.jsxs(e.Fragment,{children:[e.jsx(r.div,{children:"·"}),e.jsx(C,{variant:"bare",...t.actionProps,...l})]})]}),!!s&&e.jsx(V,{size:"small",variant:"ghost",intent:"none",icon:"20-close",onClick:s,...t.closeButton,...t.closeButtonProps,"data-testid":"alert-banner-closeButton"})]})};try{a.displayName="AlertBanner",a.__docgenInfo={description:"",displayName:"AlertBanner",props:{text:{defaultValue:null,description:"",name:"text",required:!0,type:{name:"string"}},intent:{defaultValue:{value:"none"},description:"",name:"intent",required:!1,type:{name:"enum",value:[{value:'"warning"'},{value:'"negative"'},{value:'"none"'},{value:'"positive"'}]}},action:{defaultValue:null,description:"",name:"action",required:!1,type:{name:"ActionProp"}},onCloseClick:{defaultValue:null,description:"",name:"onCloseClick",required:!1,type:{name:"((e: MouseEvent<HTMLButtonElement, MouseEvent>) => void)"}},custom:{defaultValue:null,description:"",name:"custom",required:!1,type:{name:"AlertBannerConfig"}}}}}catch{}const z=["none","positive","warning","negative"],F=()=>e.jsx(e.Fragment,{children:z.map(n=>e.jsxs(r.section,{children:[e.jsxs(x,{px:{md:"$dimension-1000",_:"$dimension-500"},py:"$dimension-500",variant:"H1",children:["Intent: ",H.capitalize(n)]}),e.jsxs(r.div,{px:{md:"$dimension-1000",_:"$dimension-500"},children:[e.jsx(x,{py:"$dimension-500",variant:"H2",children:"Action: No"}),e.jsx(a,{text:"Alert text",intent:n})]}),e.jsxs(r.div,{px:{md:"$dimension-1000",_:"$dimension-500"},children:[e.jsx(x,{py:"$dimension-500",variant:"H2",children:"Action: Yes"}),e.jsx(a,{text:"Alert text",intent:n,my:"$dimension-500",action:[{label:"Click me",onClick:g("onClick")},{label:"Or click me",onClick:g("onClick")}]})]})]},n))}),ce={title:"AlertBanner",component:a,tags:["autodocs"],args:{text:"Alert text",action:[{label:"Action",onClick:g("onClick")},{label:"Action",onClick:g("onClick")}]},parameters:{docs:{description:{component:"Prominent element used to display important messages or notifications to users. Alert Banners can convey various levels of urgency, such as success, warning, or error. They are designed to capture the user's attention and provide a clear and concise message."},page:()=>e.jsx(M,{docs:"https://docs.tetrisly.com/components/list/alertbanner",children:e.jsx(F,{})})}}},m={},p={args:{intent:"positive"}},d={args:{intent:"warning"}},u={args:{intent:"negative"}};var $,j,h;m.parameters={...m.parameters,docs:{...($=m.parameters)==null?void 0:$.docs,source:{originalSource:"{}",...(h=(j=m.parameters)==null?void 0:j.docs)==null?void 0:h.source}}};var b,k,A;p.parameters={...p.parameters,docs:{...(b=p.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    intent: 'positive'
  }
}`,...(A=(k=p.parameters)==null?void 0:k.docs)==null?void 0:A.source}}};var B,_,w;d.parameters={...d.parameters,docs:{...(B=d.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    intent: 'warning'
  }
}`,...(w=(_=d.parameters)==null?void 0:_.docs)==null?void 0:w.source}}};var E,P,I;u.parameters={...u.parameters,docs:{...(E=u.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    intent: 'negative'
  }
}`,...(I=(P=u.parameters)==null?void 0:P.docs)==null?void 0:I.source}}};const le=["Default","Positive","Warning","Negative"];export{m as Default,u as Negative,p as Positive,d as Warning,le as __namedExportsOrder,ce as default};
//# sourceMappingURL=AlertBanner.stories-480f5dc8.js.map
