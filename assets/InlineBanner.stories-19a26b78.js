import{j as n}from"./jsx-runtime-ffb262ed.js";import{a as r}from"./chunk-AY7I2SME-5eb1ab46.js";import{R as F}from"./tetrisly-icons.es-3ae3ef26.js";import{r as $}from"./index-76fb7be0.js";import{m as L,l as Y,T as G}from"./TetDocs-d097c0ab.js";import{B as h}from"./Button-f755ee30.js";import{I as J}from"./IconButton-0bbb783c.js";import{u as K}from"./useAction-275346b1.js";import{t as o}from"./TetrislyProvider-e15ac01a.js";import{S as x}from"./SectionHeader-922ceba2.js";import"./_commonjsHelpers-de833af9.js";import"./index-18143201.js";import"./iframe-0fecf2e6.js";import"../sb-preview/runtime.js";import"./index-ffc7e5ff.js";import"./index-d37d4223.js";import"./index-356e4a49.js";import"./index-299b5ac3.js";const Q={display:"flex",p:"$space-component-padding-xLarge",gap:"$space-component-gap-large",borderRadius:"$border-radius-large",ring:"$border-width-small",ringInset:!0,intent:{none:{backgroundColor:"$color-background-neutral-subtle",ringColor:"$color-border-neutral-subtle"},informative:{backgroundColor:"$color-background-informative-subtle",ringColor:"$color-border-informative-subtle"},success:{backgroundColor:"$color-background-positive-subtle",ringColor:"$color-border-positive-subtle"},warning:{backgroundColor:"$color-background-warning-subtle",ringColor:"$color-border-warning-subtle"},negative:{backgroundColor:"$color-background-negative-subtle",ringColor:"$color-border-negative-subtle"}},innerElements:{iconContainer:{h:"xSmall",display:"flex",alignItems:"center",intent:{none:{color:"$color-content-secondary"},informative:{color:"$color-content-informative-secondary"},success:{color:"$color-content-positive-secondary"},warning:{color:"$color-content-warning-secondary"},negative:{color:"$color-content-negative-secondary"}}},contentContainer:{display:"flex",flexDirection:"column"},actionContainer:{display:"flex",gap:"$space-component-gap-small",mt:"$space-component-gap-large"},description:{color:"$color-content-secondary",text:"$typo-body-medium"},title:{text:"$typo-body-strong-medium",mb:"$space-component-gap-xSmall",intent:{none:{color:"$color-content-primary"},informative:{color:"$color-content-informative-primary"},success:{color:"$color-content-positive-primary"},warning:{color:"$color-content-warning-primary"},negative:{color:"$color-content-negative-primary"}}},closeButton:{ml:"auto"}},spacing:{closeButton:{pr:"$space-component-padding-large"}}},U=e=>({none:"20-info-fill",informative:"20-info-fill",success:"20-check-circle-fill",warning:"20-warning-fill",negative:"20-alert-fill"})[e],X=({intent:e,hasCloseButton:s,custom:a})=>{const{intent:C,innerElements:{iconContainer:i,contentContainer:l,actionContainer:y,description:t,title:d,closeButton:m},spacing:b,...H}=L({defaultConfig:Q,custom:a}),{intent:M,...R}=d,z={...M[e],...R},{intent:en,...W}=i,O={...i.intent[e],...W};return{container:{...H,...C[e],...s&&b.closeButton},iconContainer:O,contentContainer:l,actionContainer:y,description:t,title:z,closeButton:m}},c=({title:e,description:s,intent:a="none",action:C,onCloseClick:i,custom:l,...y})=>{const t=$.useMemo(()=>X({intent:a,hasCloseButton:!!i,custom:l}),[a,i,l]),[d,m]=K(C),b=$.useMemo(()=>U(a),[a]);return n.jsxs(o.div,{...t.container,"data-testid":"inline-banner",...y,children:[n.jsx(o.span,{...t.iconContainer,"data-testid":"inline-banner-iconContainer",children:n.jsx(F,{name:b})}),n.jsxs(o.div,{...t.contentContainer,"data-testid":"inline-banner-contentContainer",children:[n.jsx(o.span,{...t.title,"data-testid":"inline-banner-title",children:e}),!!s&&n.jsx(o.span,{...t.description,"data-testid":"inline-banner-description",children:s}),d&&n.jsxs(o.div,{...t.actionContainer,"data-testid":"inline-banner-actionContainer",children:[n.jsx(h,{variant:"default",appearance:"secondary",intent:"none",size:"small",...d}),m&&n.jsx(h,{variant:"ghost",appearance:"secondary",intent:"none",size:"small",...m})]})]}),!!i&&n.jsx(J,{size:"small",variant:"ghost",intent:"none",icon:"20-close",onClick:i,...t.closeButton,"data-testid":"inline-banner-closeButton"})]})};try{c.displayName="InlineBanner",c.__docgenInfo={description:"",displayName:"InlineBanner",props:{title:{defaultValue:null,description:"",name:"title",required:!0,type:{name:"string"}},description:{defaultValue:null,description:"",name:"description",required:!1,type:{name:"string"}},intent:{defaultValue:{value:"none"},description:"",name:"intent",required:!1,type:{name:"enum",value:[{value:'"informative"'},{value:'"success"'},{value:'"warning"'},{value:'"negative"'},{value:'"none"'}]}},action:{defaultValue:null,description:"",name:"action",required:!1,type:{name:"ActionProp"}},onCloseClick:{defaultValue:null,description:"",name:"onCloseClick",required:!1,type:{name:"((e: MouseEvent<Element, MouseEvent>) => void)"}},custom:{defaultValue:null,description:"",name:"custom",required:!1,type:{name:"InlineBannerConfig"}}}}}catch{}const Z=["none","informative","success","warning","negative"],nn=()=>n.jsx(n.Fragment,{children:Z.map(e=>n.jsx(o.section,{px:"$dimension-1000",py:"$dimension-500",children:n.jsxs(x,{variant:"H1",as:"h2",children:["Intent: ",Y.startCase(e),n.jsxs(o.div,{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"$dimension-1000",children:[n.jsxs(o.div,{children:[n.jsx(x,{variant:"H2",as:"h3",py:"$dimension-500",children:"Close Button: No"}),n.jsx(c,{mt:"$dimension-500",title:"Title",description:"Description",intent:e,action:[{label:"Primary action",onClick:r("onClick")},{label:"Secondary action",onClick:r("onClick")}]})]}),n.jsxs(o.div,{children:[n.jsx(x,{variant:"H2",as:"h3",py:"$dimension-500",children:"Close Button: Yes"}),n.jsx(c,{mt:"$dimension-500",title:"Title",description:"Description",intent:e,action:[{label:"Primary action",onClick:r("onClick")},{label:"Secondary action",onClick:r("onClick")}],onCloseClick:r("onCloseClick")})]})]})]})},e))}),$n={title:"InlineBanner",component:c,tags:["autodocs"],args:{title:"Title",description:"Description",action:[{label:"Primary action",onClick:r("onClick")},{label:"Secondary action",onClick:r("onClick")}],onCloseClick:r("onCloseClick")},parameters:{docs:{description:{component:"A narrow visual element that displays relevant messages or prompts within the context of the main content. Often used to show alerts, promotions, or feature highlights."},page:()=>n.jsx(G,{docs:"https://docs.tetrisly.com/components/in-progress/inlinebanner",children:n.jsx(nn,{})})}}},p={},u={args:{intent:"informative"}},g={args:{intent:"success"}},f={args:{intent:"warning"}},v={args:{intent:"negative"}};var k,j,S;p.parameters={...p.parameters,docs:{...(k=p.parameters)==null?void 0:k.docs,source:{originalSource:"{}",...(S=(j=p.parameters)==null?void 0:j.docs)==null?void 0:S.source}}};var B,w,I;u.parameters={...u.parameters,docs:{...(B=u.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    intent: 'informative'
  }
}`,...(I=(w=u.parameters)==null?void 0:w.docs)==null?void 0:I.source}}};var _,E,D;g.parameters={...g.parameters,docs:{...(_=g.parameters)==null?void 0:_.docs,source:{originalSource:`{
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
}`,...(P=(A=v.parameters)==null?void 0:A.docs)==null?void 0:P.source}}};const hn=["Default","Informative","Success","Warning","Negative"];export{p as Default,u as Informative,v as Negative,g as Success,f as Warning,hn as __namedExportsOrder,$n as default};
//# sourceMappingURL=InlineBanner.stories-19a26b78.js.map
