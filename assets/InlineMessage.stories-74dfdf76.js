import{j as e}from"./jsx-runtime-ffb262ed.js";import{R as P}from"./tetrisly-icons.es-12549e88.js";import{r as H}from"./index-76fb7be0.js";import{m as U,l as W}from"./mergeConfigWithCustom-aec35d44.js";import{t}from"./TetrislyProvider-8c69fae3.js";import{C as L}from"./Cols-33da84a1.js";import{S as v}from"./SectionHeader-c9c7fa6d.js";import{T as R}from"./TetDocs-abc2e172.js";import"./_commonjsHelpers-de833af9.js";import"./index-285c0c63.js";import"./iframe-f0bbaec6.js";import"../sb-preview/runtime.js";import"./index-d3ea75b5.js";import"./index-11d98b33.js";import"./index-8fd8397b.js";import"./index-356e4a49.js";const k={display:"flex",alignItems:"flex-start",gap:"$space-component-gap-small",text:"$typo-body-medium",innerElements:{title:{marginRight:"$space-component-gap-small",intent:{informative:{color:"$color-content-informative-primary"},success:{color:"$color-content-positive-primary"},warning:{color:"$color-content-warning-primary"},negative:{color:"$color-content-negative-primary"}}},iconContainer:{display:"flex",alignItems:"center",minHeight:"$size-xSmall",intent:{informative:{color:"$color-content-informative-secondary"},success:{color:"$color-content-positive-secondary"},warning:{color:"$color-content-warning-secondary"},negative:{color:"$color-content-negative-secondary"}}},description:{color:"$color-content-secondary",display:"inline-block"}}},A=i=>({informative:"20-info-fill",success:"20-check-circle-fill",warning:"20-warning-fill",negative:"20-alert-fill"})[i],F=(i,a)=>{const{innerElements:r,...o}=U({defaultConfig:k,custom:a}),{description:d,title:s,iconContainer:g}=r,{intent:_,...T}=s,{intent:V,...E}=g;return{container:o,description:d,title:{..._[i],...T},iconContainer:{...V[i],...E}}},n=({intent:i="informative",title:a,description:r,custom:o,...d})=>{const s=H.useMemo(()=>F(i,o),[i,o]),g=A(i);return e.jsxs(t.div,{...s.container,"data-testid":"inline-message",...d,children:[e.jsx(t.span,{...s.iconContainer,"data-testid":"inline-message-iconContainer",children:e.jsx(P,{name:g,"data-testid":"inline-message-icon"})}),e.jsxs(t.span,{children:[e.jsx(t.span,{...s.title,"data-testid":"inline-message-title",children:a}),r&&e.jsx(t.div,{...s.description,"data-testid":"inline-message-description",children:r})]})]})};try{n.displayName="InlineMessage",n.__docgenInfo={description:"",displayName:"InlineMessage",props:{title:{defaultValue:null,description:"",name:"title",required:!0,type:{name:"string"}},intent:{defaultValue:{value:"informative"},description:"",name:"intent",required:!1,type:{name:"enum",value:[{value:'"success"'},{value:'"warning"'},{value:'"negative"'},{value:'"informative"'}]}},description:{defaultValue:null,description:"",name:"description",required:!1,type:{name:"string"}},custom:{defaultValue:null,description:"",name:"custom",required:!1,type:{name:"InlineMessageConfig"}}}}}catch{}const z=["informative","success","warning","negative"],B=()=>e.jsx(e.Fragment,{children:z.map(i=>e.jsxs(t.section,{px:"$dimension-1000",py:"$dimension-500",children:[e.jsxs(v,{variant:"H1",as:"h2",py:"$dimension-500",children:["Intent: ",W.capitalize(i)]}),e.jsxs(L,{children:[e.jsxs(t.div,{children:[e.jsx(v,{variant:"H2",as:"h3",py:"$dimension-500",children:"Description: Yes"}),e.jsx(n,{intent:i,title:"Title",description:"Description",mt:"$dimension-500"})]}),e.jsxs(t.div,{children:[e.jsx(v,{variant:"H2",as:"h3",py:"$dimension-500",children:"Description: No"}),e.jsx(n,{intent:i,title:"Title",mt:"$dimension-500"})]})]})]},i))}),ce={title:"InlineMessage",component:n,tags:["autodocs"],args:{title:"Title",description:"Description",intent:"informative"},argTypes:{intent:{options:["informative","success","warning","negative"],defaultValue:"informative",control:{type:"radio"}}},parameters:{docs:{description:{component:"A concise, contextual message displayed within the UI to provide users with feedback, guidance, or supplementary information. Inline messages often use color and iconography to convey tone or importance."},page:()=>e.jsx(R,{docs:"https://docs.tetrisly.com/components/in-progress/inlinemessage",children:e.jsx(B,{})})}}},c={},l={args:{intent:"success"}},m={args:{intent:"warning"}},u={args:{intent:"negative"}},p={args:{description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut eu leo suscipit, interdum sapien vitae, finibus arcu. Duis at orci sit amet nunc ullamcorper faucibus. Nullam vitae elit tellus. Aliquam magna risus, placerat nec ornare nec, facilisis sed lectus. Morbi dignissim varius lacus, at molestie tellus bibendum quis. Phasellus ac lacus et nulla viverra vehicula at sed urna. Ut neque eros, egestas eget varius in, condimentum eu sapien. Praesent placerat luctus magna, sed imperdiet augue sodales non. Fusce facilisis dui diam, eget volutpat ligula aliquet eu. Nullam ac nisi in nisi feugiat varius et vel mi. Maecenas vitae elit at neque porttitor sagittis eget ullamcorper nisl. Phasellus sollicitudin risus sit amet semper laoreet."}};var f,y,h;c.parameters={...c.parameters,docs:{...(f=c.parameters)==null?void 0:f.docs,source:{originalSource:"{}",...(h=(y=c.parameters)==null?void 0:y.docs)==null?void 0:h.source}}};var x,j,I;l.parameters={...l.parameters,docs:{...(x=l.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    intent: 'success'
  }
}`,...(I=(j=l.parameters)==null?void 0:j.docs)==null?void 0:I.source}}};var $,C,q;m.parameters={...m.parameters,docs:{...($=m.parameters)==null?void 0:$.docs,source:{originalSource:`{
  args: {
    intent: 'warning'
  }
}`,...(q=(C=m.parameters)==null?void 0:C.docs)==null?void 0:q.source}}};var b,w,S;u.parameters={...u.parameters,docs:{...(b=u.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    intent: 'negative'
  }
}`,...(S=(w=u.parameters)==null?void 0:w.docs)==null?void 0:S.source}}};var M,D,N;p.parameters={...p.parameters,docs:{...(M=p.parameters)==null?void 0:M.docs,source:{originalSource:`{
  args: {
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut eu leo suscipit, interdum sapien vitae, finibus arcu. Duis at orci sit amet nunc ullamcorper faucibus. Nullam vitae elit tellus. Aliquam magna risus, placerat nec ornare nec, facilisis sed lectus. Morbi dignissim varius lacus, at molestie tellus bibendum quis. Phasellus ac lacus et nulla viverra vehicula at sed urna. Ut neque eros, egestas eget varius in, condimentum eu sapien. Praesent placerat luctus magna, sed imperdiet augue sodales non. Fusce facilisis dui diam, eget volutpat ligula aliquet eu. Nullam ac nisi in nisi feugiat varius et vel mi. Maecenas vitae elit at neque porttitor sagittis eget ullamcorper nisl. Phasellus sollicitudin risus sit amet semper laoreet.'
  }
}`,...(N=(D=p.parameters)==null?void 0:D.docs)==null?void 0:N.source}}};const le=["Informative","Success","Warning","Negative","InformativeWithVeryLongDescription"];export{c as Informative,p as InformativeWithVeryLongDescription,u as Negative,l as Success,m as Warning,le as __namedExportsOrder,ce as default};
