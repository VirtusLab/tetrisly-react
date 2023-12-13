import{j as e}from"./jsx-runtime-ffb262ed.js";import{r as se}from"./index-76fb7be0.js";import{m as te,l as $}from"./mergeConfigWithCutom-aec35d44.js";import{t as o}from"./TetrislyProvider-8c69fae3.js";import{S as ce}from"./SectionHeader-c9c7fa6d.js";import{S as ie}from"./States-1bb354e8.js";import{T as pe}from"./TetDocs-d39705f2.js";import"./_commonjsHelpers-de833af9.js";import"./index-102ca831.js";import"./iframe-501fb906.js";import"../sb-preview/runtime.js";import"./index-d3ea75b5.js";import"./index-11d98b33.js";import"./index-8fd8397b.js";import"./index-356e4a49.js";const le={display:"inline-flex",flexDirection:"column",justifyContent:"center",alignItems:"center",borderRadius:"$border-radius-full",padding:"0 $space-component-padding-xSmall",minWidth:"20px",text:"$typo-body-small",textAlign:"center",appearance:{default:{emphasis:{high:{boxShadow:"0 0 #0000",ring:"$border-width-small",ringColor:"$color-border-neutral-strong",backgroundColor:"$color-background-default",color:"$color-content-primary"},low:{boxShadow:"0 0 #0000",ring:"$border-width-small",ringColor:"$color-border-neutral-subtle",backgroundColor:"$color-background-default",color:"$color-content-primary"}}},red:{emphasis:{high:{backgroundColor:"$color-nonSemantic-red-background-strong",color:"$color-nonSemantic-white-content-primary"},low:{backgroundColor:"$color-nonSemantic-red-background-onSubtle",color:"$color-nonSemantic-grey-content-primary"}}},grey:{emphasis:{high:{backgroundColor:"$color-nonSemantic-grey-background-strong",color:"$color-nonSemantic-white-content-primary"},low:{backgroundColor:"$color-nonSemantic-grey-background-onSubtle",color:"$color-nonSemantic-grey-content-primary"}}},blue:{emphasis:{high:{backgroundColor:"$color-nonSemantic-blue-background-strong",color:"$color-nonSemantic-white-content-primary"},low:{backgroundColor:"$color-nonSemantic-blue-background-onSubtle",color:"$color-nonSemantic-grey-content-primary"}}},green:{emphasis:{high:{backgroundColor:"$color-nonSemantic-green-background-strong",color:"$color-nonSemantic-white-content-primary"},low:{backgroundColor:"$color-nonSemantic-green-background-onSubtle",color:"$color-nonSemantic-grey-content-primary"}}},orange:{emphasis:{high:{backgroundColor:"$color-nonSemantic-orange-background-strong",color:"$color-nonSemantic-grey-content-primary"},low:{backgroundColor:"$color-nonSemantic-orange-background-onSubtle",color:"$color-nonSemantic-grey-content-primary"}}}}},me=({appearance:r,emphasis:a,custom:n})=>{const{appearance:s,...f}=te({defaultConfig:le,custom:n}),{emphasis:x}=s[r];return{container:{...x[a],...f}}},S=({number:r,appearance:a="default",emphasis:n="low",custom:s,...f})=>{const x=se.useMemo(()=>me({appearance:a,emphasis:n,custom:s}),[a,n,s]);return e.jsx(o.div,{...x.container,"data-testid":"counter",...f,children:r})};try{S.displayName="Counter",S.__docgenInfo={description:"",displayName:"Counter",props:{number:{defaultValue:null,description:"",name:"number",required:!0,type:{name:"string | number"}},appearance:{defaultValue:{value:"default"},description:"",name:"appearance",required:!1,type:{name:"enum",value:[{value:'"blue"'},{value:'"green"'},{value:'"grey"'},{value:'"red"'},{value:'"orange"'},{value:'"default"'}]}},emphasis:{defaultValue:{value:"low"},description:"",name:"emphasis",required:!1,type:{name:"enum",value:[{value:'"low"'},{value:'"high"'}]}},custom:{defaultValue:null,description:"",name:"custom",required:!1,type:{name:"CounterConfig"}}}}}catch{}const ue=["high","low"],C=["default","red","grey","blue","green","orange"],ge=()=>e.jsx(e.Fragment,{children:ue.map(r=>e.jsx(o.section,{py:"$dimension-500",px:"$dimension-1000",children:e.jsxs(ce,{variant:"H1",as:"h2",children:[$.capitalize(r)," Emphasis",e.jsxs(o.div,{py:"$dimension-500",children:[e.jsx(ie,{states:C.map($.capitalize),flexBasis:"96px",gap:"40px"}),e.jsx(o.div,{display:"flex",gap:"40px",children:C.map(a=>e.jsx(o.div,{display:"flex",flexBasis:"96px",flexShrink:"0",flexGrow:"1",children:e.jsx(S,{number:24,emphasis:r,appearance:a})}))})]})]})},r))}),Ge={title:"Counter",component:S,tags:["autodocs"],args:{number:24},parameters:{docs:{description:{component:"A numerical indicator displaying the current count of items, events, or actions. Counters can be used to show unread messages, items in a shopping cart, or other quantities that require the user’s attention."},page:()=>e.jsx(pe,{docs:"https://docs.tetrisly.com/components/list/counter",children:e.jsx(ge,{})})}}},t={},c={args:{appearance:"red"}},i={args:{appearance:"grey"}},p={args:{appearance:"blue"}},l={args:{appearance:"green"}},m={args:{appearance:"orange"}},u={args:{emphasis:"high"}},g={args:{appearance:"red",emphasis:"high"}},d={args:{appearance:"grey",emphasis:"high"}},h={args:{appearance:"blue",emphasis:"high"}},b={args:{appearance:"green",emphasis:"high"}},y={args:{appearance:"orange",emphasis:"high"}};var k,w,v;t.parameters={...t.parameters,docs:{...(k=t.parameters)==null?void 0:k.docs,source:{originalSource:"{}",...(v=(w=t.parameters)==null?void 0:w.docs)==null?void 0:v.source}}};var j,H,_;c.parameters={...c.parameters,docs:{...(j=c.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    appearance: 'red'
  }
}`,...(_=(H=c.parameters)==null?void 0:H.docs)==null?void 0:_.source}}};var G,B,D;i.parameters={...i.parameters,docs:{...(G=i.parameters)==null?void 0:G.docs,source:{originalSource:`{
  args: {
    appearance: 'grey'
  }
}`,...(D=(B=i.parameters)==null?void 0:B.docs)==null?void 0:D.source}}};var q,R,E;p.parameters={...p.parameters,docs:{...(q=p.parameters)==null?void 0:q.docs,source:{originalSource:`{
  args: {
    appearance: 'blue'
  }
}`,...(E=(R=p.parameters)==null?void 0:R.docs)==null?void 0:E.source}}};var O,V,z;l.parameters={...l.parameters,docs:{...(O=l.parameters)==null?void 0:O.docs,source:{originalSource:`{
  args: {
    appearance: 'green'
  }
}`,...(z=(V=l.parameters)==null?void 0:V.docs)==null?void 0:z.source}}};var A,I,N;m.parameters={...m.parameters,docs:{...(A=m.parameters)==null?void 0:A.docs,source:{originalSource:`{
  args: {
    appearance: 'orange'
  }
}`,...(N=(I=m.parameters)==null?void 0:I.docs)==null?void 0:N.source}}};var T,W,F;u.parameters={...u.parameters,docs:{...(T=u.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    emphasis: 'high'
  }
}`,...(F=(W=u.parameters)==null?void 0:W.docs)==null?void 0:F.source}}};var M,J,K;g.parameters={...g.parameters,docs:{...(M=g.parameters)==null?void 0:M.docs,source:{originalSource:`{
  args: {
    appearance: 'red',
    emphasis: 'high'
  }
}`,...(K=(J=g.parameters)==null?void 0:J.docs)==null?void 0:K.source}}};var L,P,Q;d.parameters={...d.parameters,docs:{...(L=d.parameters)==null?void 0:L.docs,source:{originalSource:`{
  args: {
    appearance: 'grey',
    emphasis: 'high'
  }
}`,...(Q=(P=d.parameters)==null?void 0:P.docs)==null?void 0:Q.source}}};var U,X,Y;h.parameters={...h.parameters,docs:{...(U=h.parameters)==null?void 0:U.docs,source:{originalSource:`{
  args: {
    appearance: 'blue',
    emphasis: 'high'
  }
}`,...(Y=(X=h.parameters)==null?void 0:X.docs)==null?void 0:Y.source}}};var Z,ee,re;b.parameters={...b.parameters,docs:{...(Z=b.parameters)==null?void 0:Z.docs,source:{originalSource:`{
  args: {
    appearance: 'green',
    emphasis: 'high'
  }
}`,...(re=(ee=b.parameters)==null?void 0:ee.docs)==null?void 0:re.source}}};var ae,oe,ne;y.parameters={...y.parameters,docs:{...(ae=y.parameters)==null?void 0:ae.docs,source:{originalSource:`{
  args: {
    appearance: 'orange',
    emphasis: 'high'
  }
}`,...(ne=(oe=y.parameters)==null?void 0:oe.docs)==null?void 0:ne.source}}};const Be=["Default","Red","Grey","Blue","Green","Orange","DefaultHigh","RedHigh","GreyHigh","BlueHigh","GreenHigh","OrangeHigh"];export{p as Blue,h as BlueHigh,t as Default,u as DefaultHigh,l as Green,b as GreenHigh,i as Grey,d as GreyHigh,m as Orange,y as OrangeHigh,c as Red,g as RedHigh,Be as __namedExportsOrder,Ge as default};
