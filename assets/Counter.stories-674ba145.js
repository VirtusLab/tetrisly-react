import{j as re,t as ae}from"./TetrislyProvider-dd60e1dd.js";import{r as ne}from"./index-76fb7be0.js";import{m as oe}from"./mergeConfigWithCutom-32643429.js";import"./_commonjsHelpers-de833af9.js";const se={display:"inline-flex",flexDirection:"column",justifyContent:"center",alignItems:"center",borderRadius:"full",padding:"0 component-padding-xSmall",minWidth:"20px",text:"body-small",textAlign:"center",appearance:{default:{emphasis:{high:{ring:"small",ringColor:"border-neutral-strong",backgroundColor:"background-default",color:"content-primary"},low:{ring:"small",ringColor:"border-neutral-subtle",backgroundColor:"background-default",color:"content-primary"}}},red:{emphasis:{high:{backgroundColor:"nonSemantic-red-background-strong",color:"nonSemantic-white-content-primary"},low:{backgroundColor:"nonSemantic-red-background-onSubtle",color:"nonSemantic-grey-content-primary"}}},grey:{emphasis:{high:{backgroundColor:"nonSemantic-grey-background-strong",color:"nonSemantic-white-content-primary"},low:{backgroundColor:"nonSemantic-grey-background-onSubtle",color:"nonSemantic-grey-content-primary"}}},blue:{emphasis:{high:{backgroundColor:"nonSemantic-blue-background-strong",color:"nonSemantic-white-content-primary"},low:{backgroundColor:"nonSemantic-blue-background-onSubtle",color:"nonSemantic-grey-content-primary"}}},green:{emphasis:{high:{backgroundColor:"nonSemantic-green-background-strong",color:"nonSemantic-white-content-primary"},low:{backgroundColor:"nonSemantic-green-background-onSubtle",color:"nonSemantic-grey-content-primary"}}},orange:{emphasis:{high:{backgroundColor:"nonSemantic-orange-background-strong",color:"nonSemantic-grey-content-primary"},low:{backgroundColor:"nonSemantic-orange-background-onSubtle",color:"nonSemantic-grey-content-primary"}}}}},te=({appearance:e,emphasis:r,custom:a})=>{const{appearance:n,...b}=oe({defaultConfig:se,custom:a}),{emphasis:y}=n[e];return{container:{...y[r],...b}}},S=({number:e,appearance:r="default",emphasis:a="low",custom:n,...b})=>{const y=ne.useMemo(()=>te({appearance:r,emphasis:a,custom:n}),[r,a,n]);return re.jsx(ae.div,{...y.container,"data-testid":"counter",...b,children:e})};try{S.displayName="Counter",S.__docgenInfo={description:"",displayName:"Counter",props:{number:{defaultValue:null,description:"",name:"number",required:!0,type:{name:"string | number"}},appearance:{defaultValue:{value:"default"},description:"",name:"appearance",required:!1,type:{name:"enum",value:[{value:'"red"'},{value:'"green"'},{value:'"orange"'},{value:'"default"'},{value:'"grey"'},{value:'"blue"'}]}},emphasis:{defaultValue:{value:"low"},description:"",name:"emphasis",required:!1,type:{name:"enum",value:[{value:'"low"'},{value:'"high"'}]}},custom:{defaultValue:null,description:"",name:"custom",required:!1,type:{name:"CounterConfig"}}}}}catch{}const ue={title:"Components/Counter",component:S,tags:["autodocs"],args:{number:24}},o={},s={args:{appearance:"red"}},t={args:{appearance:"grey"}},c={args:{appearance:"blue"}},i={args:{appearance:"green"}},p={args:{appearance:"orange"}},g={args:{emphasis:"high"}},u={args:{appearance:"red",emphasis:"high"}},m={args:{appearance:"grey",emphasis:"high"}},l={args:{appearance:"blue",emphasis:"high"}},d={args:{appearance:"green",emphasis:"high"}},h={args:{appearance:"orange",emphasis:"high"}};var f,C,k;o.parameters={...o.parameters,docs:{...(f=o.parameters)==null?void 0:f.docs,source:{originalSource:"{}",...(k=(C=o.parameters)==null?void 0:C.docs)==null?void 0:k.source}}};var v,w,x;s.parameters={...s.parameters,docs:{...(v=s.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    appearance: 'red'
  }
}`,...(x=(w=s.parameters)==null?void 0:w.docs)==null?void 0:x.source}}};var H,_,G;t.parameters={...t.parameters,docs:{...(H=t.parameters)==null?void 0:H.docs,source:{originalSource:`{
  args: {
    appearance: 'grey'
  }
}`,...(G=(_=t.parameters)==null?void 0:_.docs)==null?void 0:G.source}}};var R,B,D;c.parameters={...c.parameters,docs:{...(R=c.parameters)==null?void 0:R.docs,source:{originalSource:`{
  args: {
    appearance: 'blue'
  }
}`,...(D=(B=c.parameters)==null?void 0:B.docs)==null?void 0:D.source}}};var O,j,q;i.parameters={...i.parameters,docs:{...(O=i.parameters)==null?void 0:O.docs,source:{originalSource:`{
  args: {
    appearance: 'green'
  }
}`,...(q=(j=i.parameters)==null?void 0:j.docs)==null?void 0:q.source}}};var V,E,I;p.parameters={...p.parameters,docs:{...(V=p.parameters)==null?void 0:V.docs,source:{originalSource:`{
  args: {
    appearance: 'orange'
  }
}`,...(I=(E=p.parameters)==null?void 0:E.docs)==null?void 0:I.source}}};var N,W,A;g.parameters={...g.parameters,docs:{...(N=g.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: {
    emphasis: 'high'
  }
}`,...(A=(W=g.parameters)==null?void 0:W.docs)==null?void 0:A.source}}};var M,z,F;u.parameters={...u.parameters,docs:{...(M=u.parameters)==null?void 0:M.docs,source:{originalSource:`{
  args: {
    appearance: 'red',
    emphasis: 'high'
  }
}`,...(F=(z=u.parameters)==null?void 0:z.docs)==null?void 0:F.source}}};var J,K,L;m.parameters={...m.parameters,docs:{...(J=m.parameters)==null?void 0:J.docs,source:{originalSource:`{
  args: {
    appearance: 'grey',
    emphasis: 'high'
  }
}`,...(L=(K=m.parameters)==null?void 0:K.docs)==null?void 0:L.source}}};var P,Q,T;l.parameters={...l.parameters,docs:{...(P=l.parameters)==null?void 0:P.docs,source:{originalSource:`{
  args: {
    appearance: 'blue',
    emphasis: 'high'
  }
}`,...(T=(Q=l.parameters)==null?void 0:Q.docs)==null?void 0:T.source}}};var U,X,Y;d.parameters={...d.parameters,docs:{...(U=d.parameters)==null?void 0:U.docs,source:{originalSource:`{
  args: {
    appearance: 'green',
    emphasis: 'high'
  }
}`,...(Y=(X=d.parameters)==null?void 0:X.docs)==null?void 0:Y.source}}};var Z,$,ee;h.parameters={...h.parameters,docs:{...(Z=h.parameters)==null?void 0:Z.docs,source:{originalSource:`{
  args: {
    appearance: 'orange',
    emphasis: 'high'
  }
}`,...(ee=($=h.parameters)==null?void 0:$.docs)==null?void 0:ee.source}}};const me=["Default","Red","Grey","Blue","Green","Orange","DefaultHigh","RedHigh","GreyHigh","BlueHigh","GreenHigh","OrangeHigh"];export{c as Blue,l as BlueHigh,o as Default,g as DefaultHigh,i as Green,d as GreenHigh,t as Grey,m as GreyHigh,p as Orange,h as OrangeHigh,s as Red,u as RedHigh,me as __namedExportsOrder,ue as default};
//# sourceMappingURL=Counter.stories-674ba145.js.map
