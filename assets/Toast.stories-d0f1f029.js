import{a as E}from"./chunk-AY7I2SME-c7b6cf8a.js";import{j as n,t as p}from"./TetrislyProvider-e2de8794.js";import{R as pe}from"./tetrisly-icons.es-3ae3ef26.js";import{r as de}from"./index-76fb7be0.js";import{l as ge}from"./lodash-f6b38868.js";import{B as _}from"./Button-dc8f78a9.js";import{I as ue}from"./IconButton-dd0ddbcd.js";import"./_commonjsHelpers-de833af9.js";import"./isKeyOf-b77e0457.js";import"./index-81a3469c.js";import"./Loader-52d55376.js";const he={display:"inline-flex",alignItems:"center",p:"component-padding-medium component-padding-large",padding:"component-padding-medium component-padding-large",borderRadius:"large",emphasis:{high:{},low:{backgroundColor:"interaction-background-modeless",color:"content-primary",ringColor:"border-defaultA",ring:"small",boxShadow:"bottom-200"}},intent:{neutral:{backgroundColor:"background-inverted",color:"content-primary-inverted"},informative:{backgroundColor:"background-informative-strong",color:"content-primary-inverted",pl:"component-padding-medium"},success:{backgroundColor:"background-positive-strong",color:"content-primary-inverted",pl:"component-padding-medium"},warning:{backgroundColor:"background-warning-strong",color:"content-primary",pl:"component-padding-medium"},negative:{backgroundColor:"background-negative-strong",color:"content-primary-inverted",pl:"component-padding-medium"}},closeButton:{pr:"component-padding-small"},innerElements:{iconContainer:{intent:{neutral:{emphasis:{low:{},high:{}}},informative:{emphasis:{low:{color:"content-informative-secondary"},high:{color:"content-primary-inverted"}}},success:{emphasis:{low:{color:"content-positive-secondary"},high:{color:"content-primary-inverted"}}},warning:{emphasis:{low:{color:"content-warning-secondary"},high:{color:"content-primary"}}},negative:{emphasis:{low:{color:"content-negative-secondary"},high:{color:"content-primary-inverted"}}}},mr:"component-gap-small"},actionContainer:{display:"flex",alignItems:"center",justifyContent:"center",gap:"component-gap-small",ml:"component-gap-xLarge"},middleDot:{emphasis:{high:{color:"content-secondary-inverted"},low:{color:"content-tertiary"}},text:"body-medium"},closeButton:{ml:"component-padding-large"}}},ve=e=>{const r=ge.merge(he,e.custom),{emphasis:s,intent:o,closeButton:t,innerElements:i,...b}=r,c={...o[e.intent],...s[e.emphasis],...b,...e.closeButton&&t},{actionContainer:w,closeButton:k,iconContainer:B,middleDot:I}=i,a=e.intent==="warning"?"reverseInverted":"inverted",l=e.emphasis==="high"?a:"primary",j={appearance:l},m={...{intent:{neutral:{},informative:{name:"20-info-fill"},success:{name:"20-check-circle-fill"},warning:{name:"20-warning-fill"},negative:{name:"20-alert-fill"}}}.intent[e.intent]},{intent:ce,...le}=B,me={...ce[e.intent].emphasis[e.emphasis],...le};return{actionProps:j,actionContainerStyles:w,closeButtonProps:{appearance:l},closeButtonStyles:k,containerStyles:c,iconProps:m,iconContainerStyles:me,middleDotStyles:I}},H=({text:e,emphasis:r="low",intent:s="neutral",action:o,onCloseClick:t,custom:i,...b})=>{const{actionProps:c,actionContainerStyles:w,closeButtonProps:k,closeButtonStyles:B,containerStyles:I,iconProps:a,iconContainerStyles:l,middleDotStyles:j}=de.useMemo(()=>ve({custom:i,emphasis:r,intent:s,closeButton:!!t}),[i,r,s,t]),[A,m]=Array.isArray(o)?o:[o,void 0];return n.jsxs(p.div,{...I,...b,"data-testid":"toast",children:[!!a.name&&n.jsx(p.span,{...l,children:n.jsx(pe,{...a,name:a.name})}),e,A&&n.jsxs(p.div,{...w,children:[n.jsx(_,{variant:"bare",...c,...A}),m&&n.jsxs(n.Fragment,{children:[n.jsx(p.div,{...j,children:"·"}),n.jsx(_,{variant:"bare",...c,...m})]})]}),!!t&&n.jsx(ue,{size:"small",variant:"ghost",intent:"none",icon:"20-close",onClick:t,...k,...B})]})};try{H.displayName="Toast",H.__docgenInfo={description:"",displayName:"Toast",props:{text:{defaultValue:null,description:"",name:"text",required:!0,type:{name:"string"}},emphasis:{defaultValue:{value:"low"},description:"",name:"emphasis",required:!1,type:{name:"enum",value:[{value:'"low"'},{value:'"high"'}]}},intent:{defaultValue:{value:"neutral"},description:"",name:"intent",required:!1,type:{name:"enum",value:[{value:'"neutral"'},{value:'"informative"'},{value:'"success"'},{value:'"warning"'},{value:'"negative"'}]}},action:{defaultValue:null,description:"",name:"action",required:!1,type:{name:"Action | [Action, Action]"}},onCloseClick:{defaultValue:null,description:"",name:"onCloseClick",required:!1,type:{name:"((e: MouseEvent<HTMLButtonElement, MouseEvent>) => void)"}},custom:{defaultValue:null,description:"",name:"custom",required:!1,type:{name:"DeepPartial<ToastConfig>"}}}}}catch{}const He={title:"Components/Toast",component:H,tags:["autodocs"],args:{text:"Toast text",action:[{label:"Action",onClick:E("onClick")},{label:"Action",onClick:E("onClick")}]}},d={},g={args:{intent:"informative"}},u={args:{intent:"success"}},h={args:{intent:"warning"}},v={args:{intent:"negative"}},y={args:{emphasis:"high"}},f={args:{intent:"informative",emphasis:"high"}},S={args:{intent:"success",emphasis:"high"}},C={args:{intent:"warning",emphasis:"high"}},x={args:{intent:"negative",emphasis:"high"}};var N,P,D;d.parameters={...d.parameters,docs:{...(N=d.parameters)==null?void 0:N.docs,source:{originalSource:"{}",...(D=(P=d.parameters)==null?void 0:P.docs)==null?void 0:D.source}}};var T,q,V;g.parameters={...g.parameters,docs:{...(T=g.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    intent: 'informative'
  }
}`,...(V=(q=g.parameters)==null?void 0:q.docs)==null?void 0:V.source}}};var M,R,W;u.parameters={...u.parameters,docs:{...(M=u.parameters)==null?void 0:M.docs,source:{originalSource:`{
  args: {
    intent: 'success'
  }
}`,...(W=(R=u.parameters)==null?void 0:R.docs)==null?void 0:W.source}}};var L,z,F;h.parameters={...h.parameters,docs:{...(L=h.parameters)==null?void 0:L.docs,source:{originalSource:`{
  args: {
    intent: 'warning'
  }
}`,...(F=(z=h.parameters)==null?void 0:z.docs)==null?void 0:F.source}}};var O,$,G;v.parameters={...v.parameters,docs:{...(O=v.parameters)==null?void 0:O.docs,source:{originalSource:`{
  args: {
    intent: 'negative'
  }
}`,...(G=($=v.parameters)==null?void 0:$.docs)==null?void 0:G.source}}};var J,K,Q;y.parameters={...y.parameters,docs:{...(J=y.parameters)==null?void 0:J.docs,source:{originalSource:`{
  args: {
    emphasis: 'high'
  }
}`,...(Q=(K=y.parameters)==null?void 0:K.docs)==null?void 0:Q.source}}};var U,X,Y;f.parameters={...f.parameters,docs:{...(U=f.parameters)==null?void 0:U.docs,source:{originalSource:`{
  args: {
    intent: 'informative',
    emphasis: 'high'
  }
}`,...(Y=(X=f.parameters)==null?void 0:X.docs)==null?void 0:Y.source}}};var Z,ee,ne;S.parameters={...S.parameters,docs:{...(Z=S.parameters)==null?void 0:Z.docs,source:{originalSource:`{
  args: {
    intent: 'success',
    emphasis: 'high'
  }
}`,...(ne=(ee=S.parameters)==null?void 0:ee.docs)==null?void 0:ne.source}}};var te,oe,ae;C.parameters={...C.parameters,docs:{...(te=C.parameters)==null?void 0:te.docs,source:{originalSource:`{
  args: {
    intent: 'warning',
    emphasis: 'high'
  }
}`,...(ae=(oe=C.parameters)==null?void 0:oe.docs)==null?void 0:ae.source}}};var re,se,ie;x.parameters={...x.parameters,docs:{...(re=x.parameters)==null?void 0:re.docs,source:{originalSource:`{
  args: {
    intent: 'negative',
    emphasis: 'high'
  }
}`,...(ie=(se=x.parameters)==null?void 0:se.docs)==null?void 0:ie.source}}};const Ee=["Default","Informative","Success","Warning","Negative","NeutralHigh","InformativeHigh","SuccessHigh","WarningHigh","NegativeHigh"];export{d as Default,g as Informative,f as InformativeHigh,v as Negative,x as NegativeHigh,y as NeutralHigh,u as Success,S as SuccessHigh,h as Warning,C as WarningHigh,Ee as __namedExportsOrder,He as default};
//# sourceMappingURL=Toast.stories-d0f1f029.js.map
