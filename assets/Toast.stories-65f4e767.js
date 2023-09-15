import{a as B}from"./chunk-AY7I2SME-c7b6cf8a.js";import{j as n,t as d}from"./TetrislyProvider-dd60e1dd.js";import{R as ie}from"./tetrisly-icons.es-3ae3ef26.js";import{r as k}from"./index-76fb7be0.js";import{m as ce}from"./mergeConfigWithCutom-32643429.js";import{B as H}from"./Button-9fdfd33c.js";import{I as me}from"./IconButton-10984f46.js";import{u as le}from"./useAction-275346b1.js";import"./_commonjsHelpers-de833af9.js";import"./index-dfd78af2.js";import"./Loader-e0fd410e.js";const de={display:"inline-flex",alignItems:"center",p:"component-padding-medium component-padding-large",padding:"component-padding-medium component-padding-large",borderRadius:"large",emphasis:{high:{},low:{backgroundColor:"interaction-background-modeless",color:"content-primary",ringColor:"border-defaultA",ring:"small",boxShadow:"bottom-200"}},intent:{neutral:{backgroundColor:"background-inverted",color:"content-primary-inverted"},informative:{backgroundColor:"background-informative-strong",color:"content-primary-inverted",pl:"component-padding-medium"},success:{backgroundColor:"background-positive-strong",color:"content-primary-inverted",pl:"component-padding-medium"},warning:{backgroundColor:"background-warning-strong",color:"content-primary",pl:"component-padding-medium"},negative:{backgroundColor:"background-negative-strong",color:"content-primary-inverted",pl:"component-padding-medium"}},closeButton:{pr:"component-padding-small"},innerElements:{iconContainer:{intent:{neutral:{emphasis:{low:{},high:{}}},informative:{emphasis:{low:{color:"content-informative-secondary"},high:{color:"content-primary-inverted"}}},success:{emphasis:{low:{color:"content-positive-secondary"},high:{color:"content-primary-inverted"}}},warning:{emphasis:{low:{color:"content-warning-secondary"},high:{color:"content-primary"}}},negative:{emphasis:{low:{color:"content-negative-secondary"},high:{color:"content-primary-inverted"}}}},mr:"component-gap-small"},actionContainer:{display:"flex",alignItems:"center",justifyContent:"center",gap:"component-gap-small",ml:"component-gap-xLarge"},middleDot:{emphasis:{high:{color:"content-secondary-inverted"},low:{color:"content-tertiary"}},text:"body-medium"},closeButton:{ml:"component-padding-large"}}},pe=a=>({neutral:null,informative:"20-info-fill",success:"20-check-circle-fill",warning:"20-warning-fill",negative:"20-alert-fill"})[a],ge=({custom:a,...e})=>{const t=ce({defaultConfig:de,custom:a}),{emphasis:x,intent:r,closeButton:i,innerElements:{actionContainer:S,closeButton:o,iconContainer:c,middleDot:m},...l}=t,s={...r[e.intent],...x[e.emphasis],...l,...!!e.onCloseClick&&i},{intent:j,...re}=c,se={...j[e.intent].emphasis[e.emphasis],...re};return{container:s,actionContainer:S,iconContainer:se,closeButton:o,middleDot:m}},I=({text:a,emphasis:e="low",intent:t="neutral",action:x,onCloseClick:r,custom:i,...S})=>{const o=k.useMemo(()=>ge({custom:i,emphasis:e,intent:t,onCloseClick:r}),[i,e,t,r]),[c,m]=le(x),l=k.useMemo(()=>pe(t),[t]),s=k.useMemo(()=>e==="high"?t==="warning"?"reverseInverted":"inverted":"primary",[t,e]);return n.jsxs(d.div,{...o.container,"data-testid":"toast",...S,children:[!!l&&n.jsx(d.span,{...o.iconContainer,"data-testid":"toast-iconContainer",children:n.jsx(ie,{name:l})}),a,c&&n.jsxs(d.div,{...o.actionContainer,"data-testid":"toast-actionContainer",children:[n.jsx(H,{variant:"bare",appearance:s,...c}),m&&n.jsxs(n.Fragment,{children:[n.jsx(d.div,{...o.middleDot,"data-testid":"toast-middleDot",children:"·"}),n.jsx(H,{variant:"bare",appearance:s,...m})]})]}),!!r&&n.jsx(me,{size:"small",variant:"ghost",intent:"none",icon:"20-close",onClick:r,appearance:s,...o.closeButton,"data-testid":"toast-closeButton"})]})};try{I.displayName="Toast",I.__docgenInfo={description:"",displayName:"Toast",props:{text:{defaultValue:null,description:"",name:"text",required:!0,type:{name:"string"}},emphasis:{defaultValue:{value:"low"},description:"",name:"emphasis",required:!1,type:{name:"enum",value:[{value:'"low"'},{value:'"high"'}]}},intent:{defaultValue:{value:"neutral"},description:"",name:"intent",required:!1,type:{name:"enum",value:[{value:'"neutral"'},{value:'"informative"'},{value:'"success"'},{value:'"warning"'},{value:'"negative"'}]}},action:{defaultValue:null,description:"",name:"action",required:!1,type:{name:"ActionProp"}},onCloseClick:{defaultValue:null,description:"",name:"onCloseClick",required:!1,type:{name:"((e: MouseEvent<HTMLButtonElement, MouseEvent>) => void)"}},custom:{defaultValue:null,description:"",name:"custom",required:!1,type:{name:"ToastConfig"}}}}}catch{}const Ie={title:"Components/Toast",component:I,tags:["autodocs"],args:{text:"Toast text",action:[{label:"Action",onClick:B("onClick")},{label:"Action",onClick:B("onClick")}]}},p={},g={args:{intent:"informative"}},u={args:{intent:"success"}},h={args:{intent:"warning"}},v={args:{intent:"negative"}},f={args:{emphasis:"high"}},y={args:{intent:"informative",emphasis:"high"}},C={args:{intent:"success",emphasis:"high"}},b={args:{intent:"warning",emphasis:"high"}},w={args:{intent:"negative",emphasis:"high"}};var N,_,A;p.parameters={...p.parameters,docs:{...(N=p.parameters)==null?void 0:N.docs,source:{originalSource:"{}",...(A=(_=p.parameters)==null?void 0:_.docs)==null?void 0:A.source}}};var E,T,q;g.parameters={...g.parameters,docs:{...(E=g.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    intent: 'informative'
  }
}`,...(q=(T=g.parameters)==null?void 0:T.docs)==null?void 0:q.source}}};var D,M,V;u.parameters={...u.parameters,docs:{...(D=u.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: {
    intent: 'success'
  }
}`,...(V=(M=u.parameters)==null?void 0:M.docs)==null?void 0:V.source}}};var W,R,L;h.parameters={...h.parameters,docs:{...(W=h.parameters)==null?void 0:W.docs,source:{originalSource:`{
  args: {
    intent: 'warning'
  }
}`,...(L=(R=h.parameters)==null?void 0:R.docs)==null?void 0:L.source}}};var z,F,O;v.parameters={...v.parameters,docs:{...(z=v.parameters)==null?void 0:z.docs,source:{originalSource:`{
  args: {
    intent: 'negative'
  }
}`,...(O=(F=v.parameters)==null?void 0:F.docs)==null?void 0:O.source}}};var P,G,J;f.parameters={...f.parameters,docs:{...(P=f.parameters)==null?void 0:P.docs,source:{originalSource:`{
  args: {
    emphasis: 'high'
  }
}`,...(J=(G=f.parameters)==null?void 0:G.docs)==null?void 0:J.source}}};var K,Q,U;y.parameters={...y.parameters,docs:{...(K=y.parameters)==null?void 0:K.docs,source:{originalSource:`{
  args: {
    intent: 'informative',
    emphasis: 'high'
  }
}`,...(U=(Q=y.parameters)==null?void 0:Q.docs)==null?void 0:U.source}}};var X,Y,Z;C.parameters={...C.parameters,docs:{...(X=C.parameters)==null?void 0:X.docs,source:{originalSource:`{
  args: {
    intent: 'success',
    emphasis: 'high'
  }
}`,...(Z=(Y=C.parameters)==null?void 0:Y.docs)==null?void 0:Z.source}}};var $,ee,ne;b.parameters={...b.parameters,docs:{...($=b.parameters)==null?void 0:$.docs,source:{originalSource:`{
  args: {
    intent: 'warning',
    emphasis: 'high'
  }
}`,...(ne=(ee=b.parameters)==null?void 0:ee.docs)==null?void 0:ne.source}}};var te,oe,ae;w.parameters={...w.parameters,docs:{...(te=w.parameters)==null?void 0:te.docs,source:{originalSource:`{
  args: {
    intent: 'negative',
    emphasis: 'high'
  }
}`,...(ae=(oe=w.parameters)==null?void 0:oe.docs)==null?void 0:ae.source}}};const je=["Default","Informative","Success","Warning","Negative","NeutralHigh","InformativeHigh","SuccessHigh","WarningHigh","NegativeHigh"];export{p as Default,g as Informative,y as InformativeHigh,v as Negative,w as NegativeHigh,f as NeutralHigh,u as Success,C as SuccessHigh,h as Warning,b as WarningHigh,je as __namedExportsOrder,Ie as default};
//# sourceMappingURL=Toast.stories-65f4e767.js.map
