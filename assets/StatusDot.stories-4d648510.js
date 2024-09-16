import{j as e}from"./jsx-runtime-ffb262ed.js";import{S as n}from"./StatusDot-b2e63962.js";import{S as i}from"./SectionHeader-e7c49046.js";import{S as d}from"./States-c70e8d91.js";import{t as r}from"./TetrislyProvider-679426f7.js";import{T as f}from"./TetDocs-85781681.js";import"./index-76fb7be0.js";import"./_commonjsHelpers-de833af9.js";import"./mergeConfigWithCustom-aec35d44.js";import"./index-74beb656.js";import"./iframe-e2d638c9.js";import"../sb-preview/runtime.js";import"./index-d3ea75b5.js";import"./index-11d98b33.js";import"./index-8fd8397b.js";import"./index-356e4a49.js";const a=["red","green","orange"],g=()=>e.jsxs(e.Fragment,{children:[e.jsxs(r.section,{py:"$space-component-padding-4xLarge",children:[e.jsx(i,{variant:"H1",as:"h2",children:"Stroked: No"}),e.jsxs(r.div,{px:"$dimension-1000",py:"$dimension-500",children:[e.jsx(d,{states:a,flexBasis:"300px"}),e.jsx(r.div,{display:"flex",children:a.map(s=>e.jsx(r.div,{display:"flex",flexBasis:"300px",flexShrink:"0",flexGrow:"1",children:e.jsx(n,{appearance:s})},s))})]})]}),e.jsxs(r.section,{bg:"$color-background-neutral-subtle",py:"$space-component-padding-4xLarge",children:[e.jsx(i,{variant:"H1",as:"h2",py:"$dimension-500",children:"Stroked: Yes"}),e.jsxs(r.div,{px:"$dimension-1000",py:"$dimension-500",children:[e.jsx(d,{states:a,flexBasis:"300px"}),e.jsx(r.div,{display:"flex",children:a.map(s=>e.jsx(r.div,{display:"flex",flexBasis:"300px",flexShrink:"0",flexGrow:"1",children:e.jsx(n,{appearance:s,hasStroke:!0})},s))})]})]})]}),_={title:"Global Primitives / StatusDot",component:n,tags:["autodocs"],args:{hasStroke:!1},parameters:{backgrounds:{default:"dark"},docs:{page:()=>e.jsx(f,{docs:null,children:e.jsx(g,{})})}}},t={args:{appearance:"red"}},o={args:{appearance:"green",hasStroke:!0},parameters:{backgrounds:{default:"dark"}}};var p,c,m;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    appearance: 'red'
  }
}`,...(m=(c=t.parameters)==null?void 0:c.docs)==null?void 0:m.source}}};var l,x,u;o.parameters={...o.parameters,docs:{...(l=o.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    appearance: 'green',
    hasStroke: true
  },
  parameters: {
    backgrounds: {
      default: 'dark'
    }
  }
}`,...(u=(x=o.parameters)==null?void 0:x.docs)==null?void 0:u.source}}};const F=["Default","Stroked"];export{t as Default,o as Stroked,F as __namedExportsOrder,_ as default};
