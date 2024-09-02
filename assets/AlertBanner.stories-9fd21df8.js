import{j as e}from"./jsx-runtime-ffb262ed.js";import{a as i}from"./chunk-WFFRPTHA-80d37c1b.js";import{A as m}from"./AlertBanner-7664c47f.js";import{l as k}from"./mergeConfigWithCustom-aec35d44.js";import{S as a}from"./SectionHeader-0e90dab1.js";import{t as c}from"./TetrislyProvider-fe6220a9.js";import{T as $}from"./TetDocs-4ed65de2.js";import"./index-76fb7be0.js";import"./_commonjsHelpers-de833af9.js";import"./preview-errors-60885292.js";import"./index-356e4a49.js";import"./v4-4a60fe23.js";import"./tetrisly-icons.es-12549e88.js";import"./Button-2de68136.js";import"./index-516c723e.js";import"./IconButton-d23d9973.js";import"./useAction-275346b1.js";import"./index-dddcfdcb.js";import"./iframe-8ad7e6f8.js";import"../sb-preview/runtime.js";import"./index-d3ea75b5.js";import"./index-11d98b33.js";import"./index-8fd8397b.js";const C=["none","success","warning","negative"],S=()=>e.jsx(e.Fragment,{children:C.map(r=>e.jsxs(c.section,{children:[e.jsxs(a,{px:{md:"$dimension-1000",_:"$dimension-500"},py:"$dimension-500",variant:"H1",children:["Intent: ",k.capitalize(r)]}),e.jsxs(c.div,{px:{md:"$dimension-1000",_:"$dimension-500"},children:[e.jsx(a,{py:"$dimension-500",variant:"H2",children:"Action: No"}),e.jsx(m,{text:"Alert text",intent:r})]}),e.jsxs(c.div,{px:{md:"$dimension-1000",_:"$dimension-500"},children:[e.jsx(a,{py:"$dimension-500",variant:"H2",children:"Action: Yes"}),e.jsx(m,{text:"Alert text",intent:r,my:"$dimension-500",action:[{label:"Click me",onClick:i("onClick")},{label:"Or click me",onClick:i("onClick")}]})]})]},r))}),M={title:"AlertBanner",component:m,tags:["autodocs"],args:{text:"Alert text",action:[{label:"Action",onClick:i("onClick")},{label:"Action",onClick:i("onClick")}]},argTypes:{intent:{options:["none","success","warning","negative"],defaultValue:"none",control:{type:"radio"}}},parameters:{docs:{description:{component:"Prominent element used to display important messages or notifications to users. Alert Banners can convey various levels of urgency, such as success, warning, or error. They are designed to capture the user's attention and provide a clear and concise message."},page:()=>e.jsx($,{docs:"https://docs.tetrisly.com/components/list/alertbanner",children:e.jsx(S,{})})}}},t={},n={args:{intent:"success"}},s={args:{intent:"warning"}},o={args:{intent:"negative"}};var p,l,d;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:"{}",...(d=(l=t.parameters)==null?void 0:l.docs)==null?void 0:d.source}}};var g,u,x;n.parameters={...n.parameters,docs:{...(g=n.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    intent: 'success'
  }
}`,...(x=(u=n.parameters)==null?void 0:u.docs)==null?void 0:x.source}}};var v,f,h;s.parameters={...s.parameters,docs:{...(v=s.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    intent: 'warning'
  }
}`,...(h=(f=s.parameters)==null?void 0:f.docs)==null?void 0:h.source}}};var j,A,y;o.parameters={...o.parameters,docs:{...(j=o.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    intent: 'negative'
  }
}`,...(y=(A=o.parameters)==null?void 0:A.docs)==null?void 0:y.source}}};const Q=["Default","Positive","Warning","Negative"];export{t as Default,o as Negative,n as Positive,s as Warning,Q as __namedExportsOrder,M as default};
