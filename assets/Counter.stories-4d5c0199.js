import{j as e,t as n}from"./TetrislyProvider-df511b46.js";import{r as se}from"./index-76fb7be0.js";import{m as te,l as C,T as ce}from"./TetDocs-1bded8c1.js";import{S as ie}from"./SectionHeader-c96d0f4f.js";import{S as pe}from"./States-5f906dad.js";import"./_commonjsHelpers-de833af9.js";import"./index-546e7334.js";import"./iframe-64dbbcf8.js";import"../sb-preview/runtime.js";import"./index-ffc7e5ff.js";import"./index-d37d4223.js";import"./index-356e4a49.js";const me={display:"inline-flex",flexDirection:"column",justifyContent:"center",alignItems:"center",borderRadius:"full",padding:"0 component-padding-xSmall",minWidth:"20px",text:"body-small",textAlign:"center",appearance:{default:{emphasis:{high:{ring:"small",ringColor:"border-neutral-strong",backgroundColor:"background-default",color:"content-primary"},low:{ring:"small",ringColor:"border-neutral-subtle",backgroundColor:"background-default",color:"content-primary"}}},red:{emphasis:{high:{backgroundColor:"nonSemantic-red-background-strong",color:"nonSemantic-white-content-primary"},low:{backgroundColor:"nonSemantic-red-background-onSubtle",color:"nonSemantic-grey-content-primary"}}},grey:{emphasis:{high:{backgroundColor:"nonSemantic-grey-background-strong",color:"nonSemantic-white-content-primary"},low:{backgroundColor:"nonSemantic-grey-background-onSubtle",color:"nonSemantic-grey-content-primary"}}},blue:{emphasis:{high:{backgroundColor:"nonSemantic-blue-background-strong",color:"nonSemantic-white-content-primary"},low:{backgroundColor:"nonSemantic-blue-background-onSubtle",color:"nonSemantic-grey-content-primary"}}},green:{emphasis:{high:{backgroundColor:"nonSemantic-green-background-strong",color:"nonSemantic-white-content-primary"},low:{backgroundColor:"nonSemantic-green-background-onSubtle",color:"nonSemantic-grey-content-primary"}}},orange:{emphasis:{high:{backgroundColor:"nonSemantic-orange-background-strong",color:"nonSemantic-grey-content-primary"},low:{backgroundColor:"nonSemantic-orange-background-onSubtle",color:"nonSemantic-grey-content-primary"}}}}},le=({appearance:r,emphasis:a,custom:o})=>{const{appearance:s,...f}=te({defaultConfig:me,custom:o}),{emphasis:x}=s[r];return{container:{...x[a],...f}}},S=({number:r,appearance:a="default",emphasis:o="low",custom:s,...f})=>{const x=se.useMemo(()=>le({appearance:a,emphasis:o,custom:s}),[a,o,s]);return e.jsx(n.div,{...x.container,"data-testid":"counter",...f,children:r})};try{S.displayName="Counter",S.__docgenInfo={description:"",displayName:"Counter",props:{number:{defaultValue:null,description:"",name:"number",required:!0,type:{name:"string | number"}},appearance:{defaultValue:{value:"default"},description:"",name:"appearance",required:!1,type:{name:"enum",value:[{value:'"red"'},{value:'"green"'},{value:'"orange"'},{value:'"default"'},{value:'"grey"'},{value:'"blue"'}]}},emphasis:{defaultValue:{value:"low"},description:"",name:"emphasis",required:!1,type:{name:"enum",value:[{value:'"low"'},{value:'"high"'}]}},custom:{defaultValue:null,description:"",name:"custom",required:!1,type:{name:"CounterConfig"}}}}}catch{}const ge=["high","low"],k=["default","red","grey","blue","green","orange"],ue=()=>e.jsx(e.Fragment,{children:ge.map(r=>e.jsx(n.section,{py:"500",children:e.jsxs(ie,{variant:"H1",as:"h2",children:[C.capitalize(r)," Emphasis",e.jsxs(n.div,{py:"500",children:[e.jsx(pe,{states:k.map(C.capitalize),flexBasis:"96px",gap:"40px"}),e.jsx(n.div,{display:"flex",gap:"40px",children:k.map(a=>e.jsx(n.div,{display:"flex",flexBasis:"96px",flexShrink:"0",flexGrow:"1",children:e.jsx(S,{number:24,emphasis:r,appearance:a})}))})]})]})},r))}),He={title:"Counter",component:S,tags:["autodocs"],args:{number:24},parameters:{docs:{description:{component:"A numerical indicator displaying the current count of items, events, or actions. Counters can be used to show unread messages, items in a shopping cart, or other quantities that require the user’s attention."},page:()=>e.jsx(ce,{docs:"https://docs.tetrisly.com/components/list/counter",children:e.jsx(ue,{})})}}},t={},c={args:{appearance:"red"}},i={args:{appearance:"grey"}},p={args:{appearance:"blue"}},m={args:{appearance:"green"}},l={args:{appearance:"orange"}},g={args:{emphasis:"high"}},u={args:{appearance:"red",emphasis:"high"}},d={args:{appearance:"grey",emphasis:"high"}},h={args:{appearance:"blue",emphasis:"high"}},y={args:{appearance:"green",emphasis:"high"}},b={args:{appearance:"orange",emphasis:"high"}};var v,w,j;t.parameters={...t.parameters,docs:{...(v=t.parameters)==null?void 0:v.docs,source:{originalSource:"{}",...(j=(w=t.parameters)==null?void 0:w.docs)==null?void 0:j.source}}};var H,_,G;c.parameters={...c.parameters,docs:{...(H=c.parameters)==null?void 0:H.docs,source:{originalSource:`{
  args: {
    appearance: 'red'
  }
}`,...(G=(_=c.parameters)==null?void 0:_.docs)==null?void 0:G.source}}};var B,D,q;i.parameters={...i.parameters,docs:{...(B=i.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    appearance: 'grey'
  }
}`,...(q=(D=i.parameters)==null?void 0:D.docs)==null?void 0:q.source}}};var R,E,O;p.parameters={...p.parameters,docs:{...(R=p.parameters)==null?void 0:R.docs,source:{originalSource:`{
  args: {
    appearance: 'blue'
  }
}`,...(O=(E=p.parameters)==null?void 0:E.docs)==null?void 0:O.source}}};var V,z,A;m.parameters={...m.parameters,docs:{...(V=m.parameters)==null?void 0:V.docs,source:{originalSource:`{
  args: {
    appearance: 'green'
  }
}`,...(A=(z=m.parameters)==null?void 0:z.docs)==null?void 0:A.source}}};var I,N,T;l.parameters={...l.parameters,docs:{...(I=l.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    appearance: 'orange'
  }
}`,...(T=(N=l.parameters)==null?void 0:N.docs)==null?void 0:T.source}}};var W,F,M;g.parameters={...g.parameters,docs:{...(W=g.parameters)==null?void 0:W.docs,source:{originalSource:`{
  args: {
    emphasis: 'high'
  }
}`,...(M=(F=g.parameters)==null?void 0:F.docs)==null?void 0:M.source}}};var J,K,L;u.parameters={...u.parameters,docs:{...(J=u.parameters)==null?void 0:J.docs,source:{originalSource:`{
  args: {
    appearance: 'red',
    emphasis: 'high'
  }
}`,...(L=(K=u.parameters)==null?void 0:K.docs)==null?void 0:L.source}}};var P,Q,U;d.parameters={...d.parameters,docs:{...(P=d.parameters)==null?void 0:P.docs,source:{originalSource:`{
  args: {
    appearance: 'grey',
    emphasis: 'high'
  }
}`,...(U=(Q=d.parameters)==null?void 0:Q.docs)==null?void 0:U.source}}};var X,Y,Z;h.parameters={...h.parameters,docs:{...(X=h.parameters)==null?void 0:X.docs,source:{originalSource:`{
  args: {
    appearance: 'blue',
    emphasis: 'high'
  }
}`,...(Z=(Y=h.parameters)==null?void 0:Y.docs)==null?void 0:Z.source}}};var $,ee,re;y.parameters={...y.parameters,docs:{...($=y.parameters)==null?void 0:$.docs,source:{originalSource:`{
  args: {
    appearance: 'green',
    emphasis: 'high'
  }
}`,...(re=(ee=y.parameters)==null?void 0:ee.docs)==null?void 0:re.source}}};var ae,ne,oe;b.parameters={...b.parameters,docs:{...(ae=b.parameters)==null?void 0:ae.docs,source:{originalSource:`{
  args: {
    appearance: 'orange',
    emphasis: 'high'
  }
}`,...(oe=(ne=b.parameters)==null?void 0:ne.docs)==null?void 0:oe.source}}};const _e=["Default","Red","Grey","Blue","Green","Orange","DefaultHigh","RedHigh","GreyHigh","BlueHigh","GreenHigh","OrangeHigh"];export{p as Blue,h as BlueHigh,t as Default,g as DefaultHigh,m as Green,y as GreenHigh,i as Grey,d as GreyHigh,l as Orange,b as OrangeHigh,c as Red,u as RedHigh,_e as __namedExportsOrder,He as default};
//# sourceMappingURL=Counter.stories-4d5c0199.js.map
