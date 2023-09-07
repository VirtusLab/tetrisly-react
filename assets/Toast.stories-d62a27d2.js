import{a as _}from"./chunk-AY7I2SME-c7b6cf8a.js";import{j as n,t as p}from"./TetrislyProvider-e2de8794.js";import{R as de}from"./tetrisly-icons.es-3ae3ef26.js";import{r as ge}from"./index-76fb7be0.js";import{m as ue}from"./mergeConfigWithCutom-789678df.js";import{B as E}from"./Button-080d7a62.js";import{I as he}from"./IconButton-a56e72f5.js";import"./_commonjsHelpers-de833af9.js";import"./index-d903fd8e.js";import"./Loader-65d02216.js";const ve={display:"inline-flex",alignItems:"center",p:"component-padding-medium component-padding-large",padding:"component-padding-medium component-padding-large",borderRadius:"large",emphasis:{high:{},low:{backgroundColor:"interaction-background-modeless",color:"content-primary",ringColor:"border-defaultA",ring:"small",boxShadow:"bottom-200"}},intent:{neutral:{backgroundColor:"background-inverted",color:"content-primary-inverted"},informative:{backgroundColor:"background-informative-strong",color:"content-primary-inverted",pl:"component-padding-medium"},success:{backgroundColor:"background-positive-strong",color:"content-primary-inverted",pl:"component-padding-medium"},warning:{backgroundColor:"background-warning-strong",color:"content-primary",pl:"component-padding-medium"},negative:{backgroundColor:"background-negative-strong",color:"content-primary-inverted",pl:"component-padding-medium"}},closeButton:{pr:"component-padding-small"},innerElements:{iconContainer:{intent:{neutral:{emphasis:{low:{},high:{}}},informative:{emphasis:{low:{color:"content-informative-secondary"},high:{color:"content-primary-inverted"}}},success:{emphasis:{low:{color:"content-positive-secondary"},high:{color:"content-primary-inverted"}}},warning:{emphasis:{low:{color:"content-warning-secondary"},high:{color:"content-primary"}}},negative:{emphasis:{low:{color:"content-negative-secondary"},high:{color:"content-primary-inverted"}}}},mr:"component-gap-small"},actionContainer:{display:"flex",alignItems:"center",justifyContent:"center",gap:"component-gap-small",ml:"component-gap-xLarge"},middleDot:{emphasis:{high:{color:"content-secondary-inverted"},low:{color:"content-tertiary"}},text:"body-medium"},closeButton:{ml:"component-padding-large"}}},fe=({custom:r,...e})=>{const s=ue({defaultConfig:ve,custom:r}),{emphasis:o,intent:t,closeButton:i,innerElements:w,...c}=s,x={...t[e.intent],...o[e.emphasis],...c,...e.closeButton&&i},{actionContainer:k,closeButton:B,iconContainer:I,middleDot:a}=w,j=e.intent==="warning"?"reverseInverted":"inverted",l=e.emphasis==="high"?j:"primary",m={appearance:l},ce={...{intent:{neutral:{},informative:{name:"20-info-fill"},success:{name:"20-check-circle-fill"},warning:{name:"20-warning-fill"},negative:{name:"20-alert-fill"}}}.intent[e.intent]},{intent:le,...me}=I,pe={...le[e.intent].emphasis[e.emphasis],...me};return{actionProps:m,actionContainerStyles:k,closeButtonProps:{appearance:l},closeButtonStyles:B,containerStyles:x,iconProps:ce,iconContainerStyles:pe,middleDotStyles:a}},A=({text:r,emphasis:e="low",intent:s="neutral",action:o,onCloseClick:t,custom:i,...w})=>{const{actionProps:c,actionContainerStyles:x,closeButtonProps:k,closeButtonStyles:B,containerStyles:I,iconProps:a,iconContainerStyles:j,middleDotStyles:l}=ge.useMemo(()=>fe({custom:i,emphasis:e,intent:s,closeButton:!!t}),[i,e,s,t]),[m,H]=Array.isArray(o)?o:[o,void 0];return n.jsxs(p.div,{...I,...w,"data-testid":"toast",children:[!!a.name&&n.jsx(p.span,{...j,children:n.jsx(de,{...a,name:a.name})}),r,m&&n.jsxs(p.div,{...x,children:[n.jsx(E,{variant:"bare",...c,...m}),H&&n.jsxs(n.Fragment,{children:[n.jsx(p.div,{...l,children:"·"}),n.jsx(E,{variant:"bare",...c,...H})]})]}),!!t&&n.jsx(he,{size:"small",variant:"ghost",intent:"none",icon:"20-close",onClick:t,...k,...B})]})};try{A.displayName="Toast",A.__docgenInfo={description:"",displayName:"Toast",props:{text:{defaultValue:null,description:"",name:"text",required:!0,type:{name:"string"}},emphasis:{defaultValue:{value:"low"},description:"",name:"emphasis",required:!1,type:{name:"enum",value:[{value:'"low"'},{value:'"high"'}]}},intent:{defaultValue:{value:"neutral"},description:"",name:"intent",required:!1,type:{name:"enum",value:[{value:'"neutral"'},{value:'"informative"'},{value:'"success"'},{value:'"warning"'},{value:'"negative"'}]}},action:{defaultValue:null,description:"",name:"action",required:!1,type:{name:"ActionProp"}},onCloseClick:{defaultValue:null,description:"",name:"onCloseClick",required:!1,type:{name:"((e: MouseEvent<HTMLButtonElement, MouseEvent>) => void)"}},custom:{defaultValue:null,description:"",name:"custom",required:!1,type:{name:"DeepPartial<ToastConfig>"}}}}}catch{}const Ae={title:"Components/Toast",component:A,tags:["autodocs"],args:{text:"Toast text",action:[{label:"Action",onClick:_("onClick")},{label:"Action",onClick:_("onClick")}]}},d={},g={args:{intent:"informative"}},u={args:{intent:"success"}},h={args:{intent:"warning"}},v={args:{intent:"negative"}},f={args:{emphasis:"high"}},y={args:{intent:"informative",emphasis:"high"}},S={args:{intent:"success",emphasis:"high"}},C={args:{intent:"warning",emphasis:"high"}},b={args:{intent:"negative",emphasis:"high"}};var P,N,D;d.parameters={...d.parameters,docs:{...(P=d.parameters)==null?void 0:P.docs,source:{originalSource:"{}",...(D=(N=d.parameters)==null?void 0:N.docs)==null?void 0:D.source}}};var T,q,V;g.parameters={...g.parameters,docs:{...(T=g.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    intent: 'informative'
  }
}`,...(V=(q=g.parameters)==null?void 0:q.docs)==null?void 0:V.source}}};var W,M,R;u.parameters={...u.parameters,docs:{...(W=u.parameters)==null?void 0:W.docs,source:{originalSource:`{
  args: {
    intent: 'success'
  }
}`,...(R=(M=u.parameters)==null?void 0:M.docs)==null?void 0:R.source}}};var L,z,F;h.parameters={...h.parameters,docs:{...(L=h.parameters)==null?void 0:L.docs,source:{originalSource:`{
  args: {
    intent: 'warning'
  }
}`,...(F=(z=h.parameters)==null?void 0:z.docs)==null?void 0:F.source}}};var O,G,J;v.parameters={...v.parameters,docs:{...(O=v.parameters)==null?void 0:O.docs,source:{originalSource:`{
  args: {
    intent: 'negative'
  }
}`,...(J=(G=v.parameters)==null?void 0:G.docs)==null?void 0:J.source}}};var K,Q,U;f.parameters={...f.parameters,docs:{...(K=f.parameters)==null?void 0:K.docs,source:{originalSource:`{
  args: {
    emphasis: 'high'
  }
}`,...(U=(Q=f.parameters)==null?void 0:Q.docs)==null?void 0:U.source}}};var X,Y,Z;y.parameters={...y.parameters,docs:{...(X=y.parameters)==null?void 0:X.docs,source:{originalSource:`{
  args: {
    intent: 'informative',
    emphasis: 'high'
  }
}`,...(Z=(Y=y.parameters)==null?void 0:Y.docs)==null?void 0:Z.source}}};var $,ee,ne;S.parameters={...S.parameters,docs:{...($=S.parameters)==null?void 0:$.docs,source:{originalSource:`{
  args: {
    intent: 'success',
    emphasis: 'high'
  }
}`,...(ne=(ee=S.parameters)==null?void 0:ee.docs)==null?void 0:ne.source}}};var te,oe,ae;C.parameters={...C.parameters,docs:{...(te=C.parameters)==null?void 0:te.docs,source:{originalSource:`{
  args: {
    intent: 'warning',
    emphasis: 'high'
  }
}`,...(ae=(oe=C.parameters)==null?void 0:oe.docs)==null?void 0:ae.source}}};var re,se,ie;b.parameters={...b.parameters,docs:{...(re=b.parameters)==null?void 0:re.docs,source:{originalSource:`{
  args: {
    intent: 'negative',
    emphasis: 'high'
  }
}`,...(ie=(se=b.parameters)==null?void 0:se.docs)==null?void 0:ie.source}}};const _e=["Default","Informative","Success","Warning","Negative","NeutralHigh","InformativeHigh","SuccessHigh","WarningHigh","NegativeHigh"];export{d as Default,g as Informative,y as InformativeHigh,v as Negative,b as NegativeHigh,f as NeutralHigh,u as Success,S as SuccessHigh,h as Warning,C as WarningHigh,_e as __namedExportsOrder,Ae as default};
//# sourceMappingURL=Toast.stories-d62a27d2.js.map
