import{j as e}from"./jsx-runtime-ffb262ed.js";import{B as r}from"./Badge-a283a779.js";import{l as j}from"./mergeConfigWithCutom-aec35d44.js";import{S as l}from"./SectionHeader-c9c7fa6d.js";import{S as v,a as y}from"./States-1bb354e8.js";import{t as o}from"./TetrislyProvider-8c69fae3.js";import{a as $}from"./Appearance-35507110.js";import{T as B}from"./TetDocs-03bc5c84.js";import"./index-76fb7be0.js";import"./_commonjsHelpers-de833af9.js";import"./tetrisly-icons.es-12549e88.js";import"./index-43890eef.js";import"./iframe-c4da43eb.js";import"../sb-preview/runtime.js";import"./index-d3ea75b5.js";import"./index-11d98b33.js";import"./index-8fd8397b.js";import"./index-356e4a49.js";const p=["neutral","informative","positive","warning","negative"],I=["high","medium","low"],S=()=>e.jsx(e.Fragment,{children:I.map(a=>e.jsxs(o.section,{display:"flex",padding:"40px 0px",flexDirection:"column",children:[e.jsxs(l,{px:"$dimension-1000",variant:"H1",my:"auto",as:"h2",children:[j.capitalize(a)," Emphasis"]}),e.jsxs(o.div,{px:"$dimension-1000",borderBottomWidth:"1px",borderBottomColor:"$color-border-neutral-subtle",children:[e.jsx(l,{variant:"H2",as:"h3",py:"$dimension-500",children:"Intent"}),e.jsx(v,{states:p,gap:"$dimension-500",flexBasis:"$dimension-100"}),e.jsx(o.div,{py:"$dimension-500",display:"flex",flexWrap:"wrap",gap:"$dimension-500",children:p.map(s=>e.jsxs(o.div,{display:"flex",flexDirection:"column",gap:"$dimension-400",flexBasis:"100",flexShrink:"0",flexGrow:"1",children:[e.jsx(r,{intent:s,emphasis:a,label:"Badge Text"}),e.jsx(r,{intent:s,emphasis:a,icon:"16-bolt"})]},s))})]}),e.jsxs(o.div,{px:"$dimension-1000",w:"100%",children:[e.jsx(l,{variant:"H2",as:"h3",py:"$dimension-500",children:"Appearance"}),e.jsx(o.div,{children:e.jsx(o.div,{py:"$dimension-500",display:"flex",gap:"48px",flexWrap:"wrap",children:$.map(s=>e.jsxs(o.div,{display:"flex",gap:"72px",my:"20",flexDirection:"column",children:[e.jsx(y,{state:s}),e.jsxs(o.div,{display:"flex",flexWrap:"wrap",flexDirection:"column",gap:"$dimension-400",flexShrink:"0",children:[e.jsx(r,{appearance:s,emphasis:a,label:"Badge Text"}),e.jsx(r,{appearance:s,emphasis:a,icon:"16-bolt"})]},s)]}))})})]})]},a))}),K={title:"Badge",component:r,tags:["autodocs"],argTypes:{emphasis:{control:{type:"select",options:["high","medium","low"]}}},parameters:{docs:{description:{component:"A small, visually distinct element used to display numbers, small pieces of information, or statuses. Badges are often paired with icons or other components to convey relevant information or updates."},page:()=>e.jsx(B,{docs:"https://docs.tetrisly.com/components/list/badge",children:e.jsx(S,{})})}}},i={args:{intent:"informative",emphasis:"high",label:"Label"}},n={args:{appearance:"blue",icon:"16-bolt"}},t={args:{intent:"informative",label:"Label",beforeIcon:"16-bolt",afterIcon:"16-bolt"}};var m,c,d;i.parameters={...i.parameters,docs:{...(m=i.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    intent: 'informative',
    emphasis: 'high',
    label: 'Label'
  }
}`,...(d=(c=i.parameters)==null?void 0:c.docs)==null?void 0:d.source}}};var x,f,g;n.parameters={...n.parameters,docs:{...(x=n.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    appearance: 'blue',
    icon: '16-bolt'
  }
}`,...(g=(f=n.parameters)==null?void 0:f.docs)==null?void 0:g.source}}};var h,b,u;t.parameters={...t.parameters,docs:{...(h=t.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    intent: 'informative',
    label: 'Label',
    beforeIcon: '16-bolt',
    afterIcon: '16-bolt'
  }
}`,...(u=(b=t.parameters)==null?void 0:b.docs)==null?void 0:u.source}}};const M=["Default","Icon","LabelIcons"];export{i as Default,n as Icon,t as LabelIcons,M as __namedExportsOrder,K as default};
