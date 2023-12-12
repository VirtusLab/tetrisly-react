import{j as n}from"./jsx-runtime-ffb262ed.js";import{u as O,a as r}from"./useAction-291fcc9d.js";import{R as F}from"./tetrisly-icons.es-12549e88.js";import{r as $}from"./index-76fb7be0.js";import{m as Y,l as G}from"./mergeConfigWithCutom-aec35d44.js";import{B as h}from"./Button-2ba8575b.js";import{I as J}from"./IconButton-fbe54fb7.js";import{t as o}from"./TetrislyProvider-8c69fae3.js";import{S as x}from"./SectionHeader-c9c7fa6d.js";import{T as K}from"./TetDocs-1847b611.js";import"./preview-errors-dde4324f.js";import"./index-356e4a49.js";import"./_commonjsHelpers-de833af9.js";import"./index-60ef7482.js";import"./index-5c036f3f.js";import"./iframe-3522887a.js";import"../sb-preview/runtime.js";import"./index-d3ea75b5.js";import"./index-11d98b33.js";import"./index-8fd8397b.js";const Q={position:"relative",display:"flex",p:"$space-component-padding-xLarge",gap:"$space-component-gap-large",borderRadius:"$border-radius-large",boxShadow:"0 0 #0000",ring:"$border-width-small",ringInset:!0,intent:{none:{backgroundColor:"$color-background-neutral-subtle",ringColor:"$color-border-neutral-subtle"},informative:{backgroundColor:"$color-background-informative-subtle",ringColor:"$color-border-informative-subtle"},success:{backgroundColor:"$color-background-positive-subtle",ringColor:"$color-border-positive-subtle"},warning:{backgroundColor:"$color-background-warning-subtle",ringColor:"$color-border-warning-subtle"},negative:{backgroundColor:"$color-background-negative-subtle",ringColor:"$color-border-negative-subtle"}},innerElements:{iconContainer:{h:"$size-xSmall",display:"flex",alignItems:"center",intent:{none:{color:"$color-content-secondary"},informative:{color:"$color-content-informative-secondary"},success:{color:"$color-content-positive-secondary"},warning:{color:"$color-content-warning-secondary"},negative:{color:"$color-content-negative-secondary"}}},contentContainer:{display:"flex",flexDirection:"column",maxW:"90%"},actionContainer:{display:"flex",gap:"$space-component-gap-small",mt:"$space-component-gap-large"},description:{color:"$color-content-secondary",text:"$typo-body-medium"},title:{text:"$typo-body-strong-medium",mb:"$space-component-gap-xSmall",intent:{none:{color:"$color-content-primary"},informative:{color:"$color-content-informative-primary"},success:{color:"$color-content-positive-primary"},warning:{color:"$color-content-warning-primary"},negative:{color:"$color-content-negative-primary"}}},closeButton:{position:"absolute",top:"$space-component-padding-large",right:"$space-component-padding-large"}},spacing:{container:{pr:"$space-component-padding-6xLarge"}}},U=e=>({none:"20-info-fill",informative:"20-info-fill",success:"20-check-circle-fill",warning:"20-warning-fill",negative:"20-alert-fill"})[e],X=({intent:e,hasCloseButton:s,custom:a})=>{const{intent:C,innerElements:{iconContainer:i,contentContainer:l,actionContainer:y,description:t,title:d,closeButton:p},spacing:b,...z}=Y({defaultConfig:Q,custom:a}),{intent:H,...M}=d,R={...H[e],...M},{intent:en,...W}=i,L={...i.intent[e],...W};return{container:{...z,...C[e],...s&&b.container},iconContainer:L,contentContainer:l,actionContainer:y,description:t,title:R,closeButton:p}},c=({title:e,description:s,intent:a="none",action:C,onCloseClick:i,custom:l,...y})=>{const t=$.useMemo(()=>X({intent:a,hasCloseButton:!!i,custom:l}),[a,i,l]),[d,p]=O(C),b=$.useMemo(()=>U(a),[a]);return n.jsxs(o.div,{...t.container,style:{wordBreak:"break-word"},"data-testid":"inline-banner",...y,children:[n.jsx(o.span,{...t.iconContainer,"data-testid":"inline-banner-iconContainer",children:n.jsx(F,{name:b})}),n.jsxs(o.div,{...t.contentContainer,"data-testid":"inline-banner-contentContainer",children:[n.jsx(o.span,{...t.title,"data-testid":"inline-banner-title",children:e}),!!s&&n.jsx(o.span,{...t.description,"data-testid":"inline-banner-description",children:s}),d&&n.jsxs(o.div,{...t.actionContainer,"data-testid":"inline-banner-actionContainer",children:[n.jsx(h,{variant:"default",appearance:"secondary",intent:"none",size:"small",...d}),p&&n.jsx(h,{variant:"ghost",appearance:"secondary",intent:"none",size:"small",...p})]})]}),!!i&&n.jsx(J,{size:"small",variant:"ghost",intent:"none",icon:"20-close",onClick:i,...t.closeButton,"data-testid":"inline-banner-closeButton"})]})};try{c.displayName="InlineBanner",c.__docgenInfo={description:"",displayName:"InlineBanner",props:{title:{defaultValue:null,description:"",name:"title",required:!0,type:{name:"string"}},description:{defaultValue:null,description:"",name:"description",required:!1,type:{name:"string"}},intent:{defaultValue:{value:"none"},description:"",name:"intent",required:!1,type:{name:"enum",value:[{value:'"none"'},{value:'"success"'},{value:'"warning"'},{value:'"negative"'},{value:'"informative"'}]}},action:{defaultValue:null,description:"",name:"action",required:!1,type:{name:"ActionProp"}},onCloseClick:{defaultValue:null,description:"",name:"onCloseClick",required:!1,type:{name:"((e: MouseEvent<Element, MouseEvent>) => void)"}},custom:{defaultValue:null,description:"",name:"custom",required:!1,type:{name:"InlineBannerConfig"}}}}}catch{}const Z=["none","informative","success","warning","negative"],nn=()=>n.jsx(n.Fragment,{children:Z.map(e=>n.jsx(o.section,{px:"$dimension-1000",py:"$dimension-500",children:n.jsxs(x,{variant:"H1",as:"h2",children:["Intent: ",G.startCase(e),n.jsxs(o.div,{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"$dimension-1000",children:[n.jsxs(o.div,{children:[n.jsx(x,{variant:"H2",as:"h3",py:"$dimension-500",children:"Close Button: No"}),n.jsx(c,{mt:"$dimension-500",title:"Title",description:"Description",intent:e,action:[{label:"Primary action",onClick:r("onClick")},{label:"Secondary action",onClick:r("onClick")}]})]}),n.jsxs(o.div,{children:[n.jsx(x,{variant:"H2",as:"h3",py:"$dimension-500",children:"Close Button: Yes"}),n.jsx(c,{mt:"$dimension-500",title:"Title",description:"Description",intent:e,action:[{label:"Primary action",onClick:r("onClick")},{label:"Secondary action",onClick:r("onClick")}],onCloseClick:r("onCloseClick")})]})]})]})},e))}),kn={title:"InlineBanner",component:c,tags:["autodocs"],args:{title:"Title",description:"Description",action:[{label:"Primary action",onClick:r("onClick")},{label:"Secondary action",onClick:r("onClick")}],onCloseClick:r("onCloseClick")},parameters:{docs:{description:{component:"A narrow visual element that displays relevant messages or prompts within the context of the main content. Often used to show alerts, promotions, or feature highlights."},page:()=>n.jsx(K,{docs:"https://docs.tetrisly.com/components/in-progress/inlinebanner",children:n.jsx(nn,{})})}}},m={},u={args:{intent:"informative"}},g={args:{intent:"success"}},f={args:{intent:"warning"}},v={args:{intent:"negative"}};var k,j,S;m.parameters={...m.parameters,docs:{...(k=m.parameters)==null?void 0:k.docs,source:{originalSource:"{}",...(S=(j=m.parameters)==null?void 0:j.docs)==null?void 0:S.source}}};var w,B,I;u.parameters={...u.parameters,docs:{...(w=u.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    intent: 'informative'
  }
}`,...(I=(B=u.parameters)==null?void 0:B.docs)==null?void 0:I.source}}};var _,E,D;g.parameters={...g.parameters,docs:{...(_=g.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    intent: 'success'
  }
}`,...(D=(E=g.parameters)==null?void 0:E.docs)==null?void 0:D.source}}};var T,N,q;f.parameters={...f.parameters,docs:{...(T=f.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    intent: 'warning'
  }
}`,...(q=(N=f.parameters)==null?void 0:N.docs)==null?void 0:q.source}}};var V,A,P;v.parameters={...v.parameters,docs:{...(V=v.parameters)==null?void 0:V.docs,source:{originalSource:`{
  args: {
    intent: 'negative'
  }
}`,...(P=(A=v.parameters)==null?void 0:A.docs)==null?void 0:P.source}}};const jn=["Default","Informative","Success","Warning","Negative"];export{m as Default,u as Informative,v as Negative,g as Success,f as Warning,jn as __namedExportsOrder,kn as default};
