import{j as e}from"./jsx-runtime-ffb262ed.js";import{N as u}from"./NewItemButton-c3b9d909.js";import{S as g}from"./SectionHeader-0e90dab1.js";import{S as b}from"./States-30cbbb93.js";import{t}from"./TetrislyProvider-fe6220a9.js";import{T as h}from"./TetDocs-7383a1aa.js";import"./index-76fb7be0.js";import"./_commonjsHelpers-de833af9.js";import"./tetrisly-icons.es-12549e88.js";import"./mergeConfigWithCustom-aec35d44.js";import"./index-ea07a585.js";import"./iframe-a3ca221c.js";import"../sb-preview/runtime.js";import"./index-d3ea75b5.js";import"./index-11d98b33.js";import"./index-8fd8397b.js";import"./index-356e4a49.js";const j=["normal","alert","disabled"],w=()=>e.jsxs(t.section,{py:"$dimension-500",children:[e.jsx(g,{px:"$dimension-1000",py:"$dimension-500",variant:"H1",as:"h2",children:"State"}),e.jsxs(t.div,{px:"$dimension-1000",pb:"$dimension-500",children:[e.jsx(b,{states:["normal","alert","disabled"],flexBasis:"130px",gap:"$dimension-300"}),e.jsx(t.div,{display:"flex",flexDirection:"row",gap:"$dimension-300",pt:"$dimension-300",flexBasis:"130px",flexShrink:"0",flexGrow:"1",children:j.map(f=>e.jsx(t.div,{flexBasis:"130px",flexGrow:"1",flexShrink:"0",children:e.jsx(u,{state:f,text:"Text"})}))})]})]}),q={title:"NewItemButton",component:u,tags:["autodocs"],argTypes:{},args:{state:"normal",text:"text"},parameters:{docs:{description:{component:"A dedicated button for creating new items, such as files, events, or tasks, typically placed in a prominent location and distinguished by an icon or label."},page:()=>e.jsx(h,{docs:"https://docs.tetrisly.com/components/in-progress/newitembutton",children:e.jsx(w,{})})}}},s={args:{state:"normal",text:"New category"}},r={args:{state:"alert",text:"Alert!"}},a={args:{state:"disabled",text:"Disabled"}};var o,i,n;s.parameters={...s.parameters,docs:{...(o=s.parameters)==null?void 0:o.docs,source:{originalSource:`{
  args: {
    state: 'normal',
    text: 'New category'
  }
}`,...(n=(i=s.parameters)==null?void 0:i.docs)==null?void 0:n.source}}};var m,p,d;r.parameters={...r.parameters,docs:{...(m=r.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    state: 'alert',
    text: 'Alert!'
  }
}`,...(d=(p=r.parameters)==null?void 0:p.docs)==null?void 0:d.source}}};var c,l,x;a.parameters={...a.parameters,docs:{...(c=a.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    state: 'disabled',
    text: 'Disabled'
  }
}`,...(x=(l=a.parameters)==null?void 0:l.docs)==null?void 0:x.source}}};const z=["Default","Alert","Disabled"];export{r as Alert,s as Default,a as Disabled,z as __namedExportsOrder,q as default};
