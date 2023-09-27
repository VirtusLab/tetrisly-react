import{j as e,t as o}from"./TetrislyProvider-dd60e1dd.js";import{a as g}from"./chunk-AY7I2SME-c7b6cf8a.js";import{R as q}from"./tetrisly-icons.es-3ae3ef26.js";import{r as y}from"./index-76fb7be0.js";import{m as H,l as M,T as V}from"./TetDocs-04998d33.js";import{B as C}from"./Button-67032d5f.js";import{I as D}from"./IconButton-dd57e112.js";import{u as T}from"./useAction-275346b1.js";import{S as f}from"./SectionHeader-9752124f.js";import"./_commonjsHelpers-de833af9.js";import"./index-812ad9f8.js";import"./iframe-f4ac13df.js";import"../sb-preview/runtime.js";import"./index-ffc7e5ff.js";import"./index-d37d4223.js";import"./index-356e4a49.js";import"./index-7258ec25.js";const R={p:"component-padding-medium",pl:"component-padding-2xLarge",display:"flex",alignItems:"center",text:"body-medium",intent:{none:{backgroundColor:"background-neutral-strong",color:"content-primary-inverted"},positive:{backgroundColor:"background-positive-strong",color:"content-primary-inverted"},warning:{backgroundColor:"background-warning-strong",color:"content-primary"},negative:{backgroundColor:"background-negative-strong",color:"content-primary-inverted"}},innerElements:{iconContainer:{mr:"component-gap-small"},actionContainer:{display:"flex",alignItems:"center",justifyContent:"center",gap:"component-gap-small",ml:"component-gap-large"},closeButton:{ml:"auto"}}},W=n=>({none:"20-info-fill",positive:"20-info-fill",warning:"20-warning-fill",negative:"20-alert-fill"})[n],z=(n,r)=>{const{intent:i,innerElements:{iconContainer:v,actionContainer:s,closeButton:x},...t}=H({defaultConfig:R,custom:r}),c={appearance:n==="warning"?"reverseInverted":"inverted"},l={appearance:n==="warning"?"primary":"inverted"};return{container:{...i[n],...t},iconContainer:v,actionContainer:s,actionProps:c,closeButtonProps:l,closeButton:x}},a=({text:n,intent:r="none",custom:i,action:v,onCloseClick:s,...x})=>{const t=y.useMemo(()=>z(r,i),[r,i]),[c,l]=T(v),N=y.useMemo(()=>W(r),[r]);return e.jsxs(o.div,{...t.container,"data-testid":"alert-banner",...x,children:[e.jsx(o.span,{...t.iconContainer,"data-testid":"alert-banner-iconContainer",children:e.jsx(q,{name:N})}),n,c&&e.jsxs(o.div,{...t.actionContainer,"data-testid":"alert-banner-actionContainer",children:[e.jsx(C,{variant:"bare",...t.actionProps,...c}),l&&e.jsxs(e.Fragment,{children:[e.jsx(o.div,{children:"·"}),e.jsx(C,{variant:"bare",...t.actionProps,...l})]})]}),!!s&&e.jsx(D,{size:"small",variant:"ghost",intent:"none",icon:"20-close",onClick:s,...t.closeButton,...t.closeButtonProps,"data-testid":"alert-banner-closeButton"})]})};try{a.displayName="AlertBanner",a.__docgenInfo={description:"",displayName:"AlertBanner",props:{text:{defaultValue:null,description:"",name:"text",required:!0,type:{name:"string"}},intent:{defaultValue:{value:"none"},description:"",name:"intent",required:!1,type:{name:"enum",value:[{value:'"warning"'},{value:'"negative"'},{value:'"none"'},{value:'"positive"'}]}},action:{defaultValue:null,description:"",name:"action",required:!1,type:{name:"ActionProp"}},onCloseClick:{defaultValue:null,description:"",name:"onCloseClick",required:!1,type:{name:"((e: MouseEvent<HTMLButtonElement, MouseEvent>) => void)"}},custom:{defaultValue:null,description:"",name:"custom",required:!1,type:{name:"AlertBannerConfig"}}}}}catch{}const F=["none","positive","warning","negative"],L=()=>e.jsx(e.Fragment,{children:F.map(n=>e.jsxs(o.section,{children:[e.jsxs(f,{px:{md:"1000",_:"500"},py:"500",variant:"H1",children:["Intent: ",M.capitalize(n)]}),e.jsxs(o.div,{px:{md:"1000",_:"500"},children:[e.jsx(f,{py:"500",variant:"H2",children:"Action: No"}),e.jsx(a,{text:"Alert text",intent:n})]}),e.jsxs(o.div,{px:{md:"1000",_:"500"},children:[e.jsx(f,{py:"500",variant:"H2",children:"Action: Yes"}),e.jsx(a,{text:"Alert text",intent:n,my:"500",action:[{label:"Click me",onClick:g("onClick")},{label:"Or click me",onClick:g("onClick")}]})]})]},n))}),se={title:"AlertBanner",component:a,tags:["autodocs"],args:{text:"Alert text",action:[{label:"Action",onClick:g("onClick")},{label:"Action",onClick:g("onClick")}]},parameters:{docs:{description:{component:"Prominent element used to display important messages or notifications to users. Alert Banners can convey various levels of urgency, such as success, warning, or error. They are designed to capture the user's attention and provide a clear and concise message."},page:()=>e.jsx(V,{docs:"https://docs.tetrisly.com/components/list/alertbanner",children:e.jsx(L,{})})}}},p={},m={args:{intent:"positive"}},d={args:{intent:"warning"}},u={args:{intent:"negative"}};var j,h,b;p.parameters={...p.parameters,docs:{...(j=p.parameters)==null?void 0:j.docs,source:{originalSource:"{}",...(b=(h=p.parameters)==null?void 0:h.docs)==null?void 0:b.source}}};var k,A,B;m.parameters={...m.parameters,docs:{...(k=m.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    intent: 'positive'
  }
}`,...(B=(A=m.parameters)==null?void 0:A.docs)==null?void 0:B.source}}};var _,w,E;d.parameters={...d.parameters,docs:{...(_=d.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    intent: 'warning'
  }
}`,...(E=(w=d.parameters)==null?void 0:w.docs)==null?void 0:E.source}}};var P,I,S;u.parameters={...u.parameters,docs:{...(P=u.parameters)==null?void 0:P.docs,source:{originalSource:`{
  args: {
    intent: 'negative'
  }
}`,...(S=(I=u.parameters)==null?void 0:I.docs)==null?void 0:S.source}}};const ce=["Default","Positive","Warning","Negative"];export{p as Default,u as Negative,m as Positive,d as Warning,ce as __namedExportsOrder,se as default};
//# sourceMappingURL=AlertBanner.stories-e84f177d.js.map
