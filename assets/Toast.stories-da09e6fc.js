import{a as _}from"./chunk-AY7I2SME-c7b6cf8a.js";import{j as n,t as m}from"./TetrislyProvider-07235cd3.js";import{R as pe}from"./tetrisly-icons.es-3ae3ef26.js";import{r as A}from"./index-76fb7be0.js";import{m as de}from"./mergeConfigWithCutom-789678df.js";import{B as E}from"./Button-7524adde.js";import{I as ue}from"./IconButton-83d763b2.js";import{u as ge}from"./useAction-275346b1.js";import"./_commonjsHelpers-de833af9.js";import"./index-dcaaca1f.js";import"./Loader-4e222d2a.js";const he={display:"inline-flex",alignItems:"center",p:"component-padding-medium component-padding-large",padding:"component-padding-medium component-padding-large",borderRadius:"large",emphasis:{high:{},low:{backgroundColor:"interaction-background-modeless",color:"content-primary",ringColor:"border-defaultA",ring:"small",boxShadow:"bottom-200"}},intent:{neutral:{backgroundColor:"background-inverted",color:"content-primary-inverted"},informative:{backgroundColor:"background-informative-strong",color:"content-primary-inverted",pl:"component-padding-medium"},success:{backgroundColor:"background-positive-strong",color:"content-primary-inverted",pl:"component-padding-medium"},warning:{backgroundColor:"background-warning-strong",color:"content-primary",pl:"component-padding-medium"},negative:{backgroundColor:"background-negative-strong",color:"content-primary-inverted",pl:"component-padding-medium"}},closeButton:{pr:"component-padding-small"},innerElements:{iconContainer:{intent:{neutral:{emphasis:{low:{},high:{}}},informative:{emphasis:{low:{color:"content-informative-secondary"},high:{color:"content-primary-inverted"}}},success:{emphasis:{low:{color:"content-positive-secondary"},high:{color:"content-primary-inverted"}}},warning:{emphasis:{low:{color:"content-warning-secondary"},high:{color:"content-primary"}}},negative:{emphasis:{low:{color:"content-negative-secondary"},high:{color:"content-primary-inverted"}}}},mr:"component-gap-small"},actionContainer:{display:"flex",alignItems:"center",justifyContent:"center",gap:"component-gap-small",ml:"component-gap-xLarge"},middleDot:{emphasis:{high:{color:"content-secondary-inverted"},low:{color:"content-tertiary"}},text:"body-medium"},closeButton:{ml:"component-padding-large"}}},ve=t=>({neutral:null,informative:"20-info-fill",success:"20-check-circle-fill",warning:"20-warning-fill",negative:"20-alert-fill"})[t],fe=({custom:t,...e})=>{const o=de({defaultConfig:he,custom:t}),{emphasis:b,intent:r,closeButton:s,innerElements:w,...i}=o,x={...r[e.intent],...b[e.emphasis],...i,...e.closeButton&&s},{actionContainer:k,closeButton:B,iconContainer:I,middleDot:j}=w,H=e.intent==="warning"?"reverseInverted":"inverted",a=e.emphasis==="high"?H:"primary",c={appearance:a},{intent:l,...le}=I,me={...l[e.intent].emphasis[e.emphasis],...le};return{actionProps:c,actionContainerStyles:k,closeButtonProps:{appearance:a},closeButtonStyles:B,containerStyles:x,iconContainerStyles:me,middleDotStyles:j}},N=({text:t,emphasis:e="low",intent:o="neutral",action:b,onCloseClick:r,custom:s,...w})=>{const{actionProps:i,actionContainerStyles:x,closeButtonProps:k,closeButtonStyles:B,containerStyles:I,iconContainerStyles:j,middleDotStyles:H}=A.useMemo(()=>fe({custom:s,emphasis:e,intent:o,closeButton:!!r}),[s,e,o,r]),[a,c]=ge(b),l=A.useMemo(()=>ve(o),[o]);return n.jsxs(m.div,{...I,"data-testid":"toast",...w,children:[!!l&&n.jsx(m.span,{...j,children:n.jsx(pe,{name:l})}),t,a&&n.jsxs(m.div,{...x,children:[n.jsx(E,{variant:"bare",...i,...a}),c&&n.jsxs(n.Fragment,{children:[n.jsx(m.div,{...H,children:"·"}),n.jsx(E,{variant:"bare",...i,...c})]})]}),!!r&&n.jsx(ue,{size:"small",variant:"ghost",intent:"none",icon:"20-close",onClick:r,...k,...B})]})};try{N.displayName="Toast",N.__docgenInfo={description:"",displayName:"Toast",props:{text:{defaultValue:null,description:"",name:"text",required:!0,type:{name:"string"}},emphasis:{defaultValue:{value:"low"},description:"",name:"emphasis",required:!1,type:{name:"enum",value:[{value:'"low"'},{value:'"high"'}]}},intent:{defaultValue:{value:"neutral"},description:"",name:"intent",required:!1,type:{name:"enum",value:[{value:'"neutral"'},{value:'"informative"'},{value:'"success"'},{value:'"warning"'},{value:'"negative"'}]}},action:{defaultValue:null,description:"",name:"action",required:!1,type:{name:"ActionProp"}},onCloseClick:{defaultValue:null,description:"",name:"onCloseClick",required:!1,type:{name:"((e: MouseEvent<HTMLButtonElement, MouseEvent>) => void)"}},custom:{defaultValue:null,description:"",name:"custom",required:!1,type:{name:"DeepPartial<ToastConfig>"}}}}}catch{}const _e={title:"Components/Toast",component:N,tags:["autodocs"],args:{text:"Toast text",action:[{label:"Action",onClick:_("onClick")},{label:"Action",onClick:_("onClick")}]}},p={},d={args:{intent:"informative"}},u={args:{intent:"success"}},g={args:{intent:"warning"}},h={args:{intent:"negative"}},v={args:{emphasis:"high"}},f={args:{intent:"informative",emphasis:"high"}},y={args:{intent:"success",emphasis:"high"}},C={args:{intent:"warning",emphasis:"high"}},S={args:{intent:"negative",emphasis:"high"}};var D,P,T;p.parameters={...p.parameters,docs:{...(D=p.parameters)==null?void 0:D.docs,source:{originalSource:"{}",...(T=(P=p.parameters)==null?void 0:P.docs)==null?void 0:T.source}}};var q,V,M;d.parameters={...d.parameters,docs:{...(q=d.parameters)==null?void 0:q.docs,source:{originalSource:`{
  args: {
    intent: 'informative'
  }
}`,...(M=(V=d.parameters)==null?void 0:V.docs)==null?void 0:M.source}}};var W,R,L;u.parameters={...u.parameters,docs:{...(W=u.parameters)==null?void 0:W.docs,source:{originalSource:`{
  args: {
    intent: 'success'
  }
}`,...(L=(R=u.parameters)==null?void 0:R.docs)==null?void 0:L.source}}};var z,F,O;g.parameters={...g.parameters,docs:{...(z=g.parameters)==null?void 0:z.docs,source:{originalSource:`{
  args: {
    intent: 'warning'
  }
}`,...(O=(F=g.parameters)==null?void 0:F.docs)==null?void 0:O.source}}};var G,J,K;h.parameters={...h.parameters,docs:{...(G=h.parameters)==null?void 0:G.docs,source:{originalSource:`{
  args: {
    intent: 'negative'
  }
}`,...(K=(J=h.parameters)==null?void 0:J.docs)==null?void 0:K.source}}};var Q,U,X;v.parameters={...v.parameters,docs:{...(Q=v.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  args: {
    emphasis: 'high'
  }
}`,...(X=(U=v.parameters)==null?void 0:U.docs)==null?void 0:X.source}}};var Y,Z,$;f.parameters={...f.parameters,docs:{...(Y=f.parameters)==null?void 0:Y.docs,source:{originalSource:`{
  args: {
    intent: 'informative',
    emphasis: 'high'
  }
}`,...($=(Z=f.parameters)==null?void 0:Z.docs)==null?void 0:$.source}}};var ee,ne,te;y.parameters={...y.parameters,docs:{...(ee=y.parameters)==null?void 0:ee.docs,source:{originalSource:`{
  args: {
    intent: 'success',
    emphasis: 'high'
  }
}`,...(te=(ne=y.parameters)==null?void 0:ne.docs)==null?void 0:te.source}}};var oe,re,ae;C.parameters={...C.parameters,docs:{...(oe=C.parameters)==null?void 0:oe.docs,source:{originalSource:`{
  args: {
    intent: 'warning',
    emphasis: 'high'
  }
}`,...(ae=(re=C.parameters)==null?void 0:re.docs)==null?void 0:ae.source}}};var se,ie,ce;S.parameters={...S.parameters,docs:{...(se=S.parameters)==null?void 0:se.docs,source:{originalSource:`{
  args: {
    intent: 'negative',
    emphasis: 'high'
  }
}`,...(ce=(ie=S.parameters)==null?void 0:ie.docs)==null?void 0:ce.source}}};const Ae=["Default","Informative","Success","Warning","Negative","NeutralHigh","InformativeHigh","SuccessHigh","WarningHigh","NegativeHigh"];export{p as Default,d as Informative,f as InformativeHigh,h as Negative,S as NegativeHigh,v as NeutralHigh,u as Success,y as SuccessHigh,g as Warning,C as WarningHigh,Ae as __namedExportsOrder,_e as default};
//# sourceMappingURL=Toast.stories-da09e6fc.js.map
