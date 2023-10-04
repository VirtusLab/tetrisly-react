import{j as e,t as i}from"./TetrislyProvider-df511b46.js";import{a as B}from"./chunk-AY7I2SME-5eb1ab46.js";import{R as ie}from"./tetrisly-icons.es-3ae3ef26.js";import{r as k}from"./index-76fb7be0.js";import{m as ce,T as me}from"./TetDocs-1bded8c1.js";import{B as H}from"./Button-c0facfbd.js";import{I as le}from"./IconButton-fb773157.js";import{u as de}from"./useAction-275346b1.js";import"./_commonjsHelpers-de833af9.js";import"./index-546e7334.js";import"./iframe-64dbbcf8.js";import"../sb-preview/runtime.js";import"./index-ffc7e5ff.js";import"./index-d37d4223.js";import"./index-356e4a49.js";import"./index-55018d08.js";const pe={display:"inline-flex",alignItems:"center",p:"component-padding-medium component-padding-large",padding:"component-padding-medium component-padding-large",borderRadius:"large",emphasis:{high:{},low:{backgroundColor:"interaction-background-modeless",color:"content-primary",ringColor:"border-defaultA",ring:"small",boxShadow:"bottom-200"}},intent:{neutral:{backgroundColor:"background-inverted",color:"content-primary-inverted"},informative:{backgroundColor:"background-informative-strong",color:"content-primary-inverted",pl:"component-padding-medium"},success:{backgroundColor:"background-positive-strong",color:"content-primary-inverted",pl:"component-padding-medium"},warning:{backgroundColor:"background-warning-strong",color:"content-primary",pl:"component-padding-medium"},negative:{backgroundColor:"background-negative-strong",color:"content-primary-inverted",pl:"component-padding-medium"}},closeButton:{pr:"component-padding-small"},innerElements:{iconContainer:{intent:{neutral:{emphasis:{low:{},high:{}}},informative:{emphasis:{low:{color:"content-informative-secondary"},high:{color:"content-primary-inverted"}}},success:{emphasis:{low:{color:"content-positive-secondary"},high:{color:"content-primary-inverted"}}},warning:{emphasis:{low:{color:"content-warning-secondary"},high:{color:"content-primary"}}},negative:{emphasis:{low:{color:"content-negative-secondary"},high:{color:"content-primary-inverted"}}}},mr:"component-gap-small"},actionContainer:{display:"flex",alignItems:"center",justifyContent:"center",gap:"component-gap-small",ml:"component-gap-xLarge"},middleDot:{emphasis:{high:{color:"content-secondary-inverted"},low:{color:"content-tertiary"}},text:"body-medium"},closeButton:{ml:"component-padding-large"}}},ue=a=>({neutral:null,informative:"20-info-fill",success:"20-check-circle-fill",warning:"20-warning-fill",negative:"20-alert-fill"})[a],ge=({custom:a,...n})=>{const t=ce({defaultConfig:pe,custom:a}),{emphasis:b,intent:r,closeButton:c,innerElements:{actionContainer:S,closeButton:o,iconContainer:m,middleDot:l},...d}=t,s={...r[n.intent],...b[n.emphasis],...d,...!!n.onCloseClick&&c},{intent:I,...re}=m,se={...I[n.intent].emphasis[n.emphasis],...re};return{container:s,actionContainer:S,iconContainer:se,closeButton:o,middleDot:l}},j=({text:a,emphasis:n="low",intent:t="neutral",action:b,onCloseClick:r,custom:c,...S})=>{const o=k.useMemo(()=>ge({custom:c,emphasis:n,intent:t,onCloseClick:r}),[c,n,t,r]),[m,l]=de(b),d=k.useMemo(()=>ue(t),[t]),s=k.useMemo(()=>n==="high"?t==="warning"?"reverseInverted":"inverted":"primary",[t,n]);return e.jsxs(i.div,{...o.container,"data-testid":"toast",...S,children:[!!d&&e.jsx(i.span,{...o.iconContainer,"data-testid":"toast-iconContainer",children:e.jsx(ie,{name:d})}),a,m&&e.jsxs(i.div,{...o.actionContainer,"data-testid":"toast-actionContainer",children:[e.jsx(H,{variant:"bare",appearance:s,...m}),l&&e.jsxs(e.Fragment,{children:[e.jsx(i.div,{...o.middleDot,"data-testid":"toast-middleDot",children:"·"}),e.jsx(H,{variant:"bare",appearance:s,...l})]})]}),!!r&&e.jsx(le,{size:"small",variant:"ghost",intent:"none",icon:"20-close",onClick:r,appearance:s,...o.closeButton,"data-testid":"toast-closeButton"})]})};try{j.displayName="Toast",j.__docgenInfo={description:"",displayName:"Toast",props:{text:{defaultValue:null,description:"",name:"text",required:!0,type:{name:"string"}},emphasis:{defaultValue:{value:"low"},description:"",name:"emphasis",required:!1,type:{name:"enum",value:[{value:'"low"'},{value:'"high"'}]}},intent:{defaultValue:{value:"neutral"},description:"",name:"intent",required:!1,type:{name:"enum",value:[{value:'"neutral"'},{value:'"informative"'},{value:'"success"'},{value:'"warning"'},{value:'"negative"'}]}},action:{defaultValue:null,description:"",name:"action",required:!1,type:{name:"ActionProp"}},onCloseClick:{defaultValue:null,description:"",name:"onCloseClick",required:!1,type:{name:"((e: MouseEvent<HTMLButtonElement, MouseEvent>) => void)"}},custom:{defaultValue:null,description:"",name:"custom",required:!1,type:{name:"ToastConfig"}}}}}catch{}const he=()=>e.jsx(i.div,{}),_e={title:"Toast",component:j,tags:["autodocs"],args:{text:"Toast text",action:[{label:"Action",onClick:B("onClick")},{label:"Action",onClick:B("onClick")}]},parameters:{docs:{description:{component:"A temporary, non-intrusive notification displayed to provide users with feedback, alerts, or updates. Toasts are typically placed at the edge of the screen and disappear automatically after a set duration or when the user interacts with them."},page:()=>e.jsx(me,{docs:"https://docs.tetrisly.com/components/in-progress/toast",children:e.jsx(he,{})})}}},p={},u={args:{intent:"informative"}},g={args:{intent:"success"}},h={args:{intent:"warning"}},v={args:{intent:"negative"}},f={args:{emphasis:"high"}},y={args:{intent:"informative",emphasis:"high"}},C={args:{intent:"success",emphasis:"high"}},w={args:{intent:"warning",emphasis:"high"}},x={args:{intent:"negative",emphasis:"high"}};var T,A,N;p.parameters={...p.parameters,docs:{...(T=p.parameters)==null?void 0:T.docs,source:{originalSource:"{}",...(N=(A=p.parameters)==null?void 0:A.docs)==null?void 0:N.source}}};var _,D,E;u.parameters={...u.parameters,docs:{...(_=u.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    intent: 'informative'
  }
}`,...(E=(D=u.parameters)==null?void 0:D.docs)==null?void 0:E.source}}};var q,M,V;g.parameters={...g.parameters,docs:{...(q=g.parameters)==null?void 0:q.docs,source:{originalSource:`{
  args: {
    intent: 'success'
  }
}`,...(V=(M=g.parameters)==null?void 0:M.docs)==null?void 0:V.source}}};var W,R,L;h.parameters={...h.parameters,docs:{...(W=h.parameters)==null?void 0:W.docs,source:{originalSource:`{
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
}`,...(Z=(Y=C.parameters)==null?void 0:Y.docs)==null?void 0:Z.source}}};var $,ee,ne;w.parameters={...w.parameters,docs:{...($=w.parameters)==null?void 0:$.docs,source:{originalSource:`{
  args: {
    intent: 'warning',
    emphasis: 'high'
  }
}`,...(ne=(ee=w.parameters)==null?void 0:ee.docs)==null?void 0:ne.source}}};var te,oe,ae;x.parameters={...x.parameters,docs:{...(te=x.parameters)==null?void 0:te.docs,source:{originalSource:`{
  args: {
    intent: 'negative',
    emphasis: 'high'
  }
}`,...(ae=(oe=x.parameters)==null?void 0:oe.docs)==null?void 0:ae.source}}};const De=["Default","Informative","Success","Warning","Negative","NeutralHigh","InformativeHigh","SuccessHigh","WarningHigh","NegativeHigh"];export{p as Default,u as Informative,y as InformativeHigh,v as Negative,x as NegativeHigh,f as NeutralHigh,g as Success,C as SuccessHigh,h as Warning,w as WarningHigh,De as __namedExportsOrder,_e as default};
//# sourceMappingURL=Toast.stories-985f37d5.js.map
