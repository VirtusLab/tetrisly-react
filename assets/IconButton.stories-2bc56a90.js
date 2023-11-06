import{j as e}from"./jsx-runtime-ffb262ed.js";import{r as m}from"./index-76fb7be0.js";import{I as l}from"./IconButton-b749a909.js";import{l as i,T as j}from"./TetDocs-f92ba7f6.js";import{S as a}from"./SectionHeader-922ceba2.js";import{u as y}from"./useLoading-c162a1b9.js";import{t as s}from"./TetrislyProvider-e15ac01a.js";import"./_commonjsHelpers-de833af9.js";import"./Button-fddf0526.js";import"./tetrisly-icons.es-3ae3ef26.js";import"./index-c0a46a9c.js";import"./index-8e7fbb03.js";import"./iframe-edbef846.js";import"../sb-preview/runtime.js";import"./index-ffc7e5ff.js";import"./index-d37d4223.js";import"./index-356e4a49.js";const $=["default","ghost","bare"],b=o=>o==="default"?["primary","inverted"]:["primary","inverted","reverseInverted"],I=o=>o==="primary"?["none","success","destructive"]:["none"],p=o=>{const[t,r]=y();return e.jsx(l,{...o,state:t?"loading":void 0,onClick:r})},k=()=>e.jsx(e.Fragment,{children:$.map(o=>e.jsxs(s.section,{children:[e.jsx(a,{variant:"Hero",as:"h2",px:"$dimension-1000",children:i.capitalize(o)}),e.jsx(s.div,{children:b(o).map(t=>e.jsxs(s.div,{bg:t==="inverted"?"$color-background-inverted":void 0,children:[e.jsx(a,{inverted:t==="inverted",variant:"H1",as:"h3",py:"$dimension-500",px:"$dimension-1000",children:i.startCase(t)}),I(t).map(r=>{const n={appearance:t,intent:r,icon:"20-placeholder"};return e.jsxs(s.div,{display:"grid",gridTemplateColumns:"1fr 1fr",px:"$dimension-1000",children:[e.jsxs(s.div,{py:"$dimension-500",children:[e.jsx(a,{variant:"H2",as:"h4",inverted:t==="inverted",labels:[`Intent: ${i.capitalize(r)}`,"Dropdown: false"]}),e.jsx(p,{mt:"$dimension-500",...n})]}),e.jsxs(s.div,{py:"$dimension-500",children:[e.jsx(a,{variant:"H2",as:"h4",inverted:t==="inverted",labels:[`Intent: ${i.capitalize(r)}`,"Dropdown: true"]}),e.jsx(p,{mt:"$dimension-500",...n,hasDropdownIndicator:!0})]})]},`${o}${t}${r}`)})]},`${o}${t}`))})]},o))}),G={title:"IconButton",component:l,tags:["autodocs"],argTypes:{variant:{description:'Figma "Type" props',table:{defaultValue:{summary:"default"}}},appearance:{table:{defaultValue:{summary:"primary"}}}},parameters:{docs:{description:{component:"Specific  Button that lacks the accompanying text label, relying only on an icon or symbol to convey its purpose. The Icon Button helps to design within limited space, as well as allows for a maintaining cleaner interface."},page:()=>e.jsx(j,{docs:"https://docs.tetrisly.com/components/in-progress/iconbutton",children:e.jsx(k,{})})}}},c={args:{icon:"20-placeholder"}},C=o=>{const[t,r]=m.useState(!1);return m.useEffect(()=>{t&&setTimeout(()=>r(!1),1e3)},[t]),e.jsx(l,{...o,state:t?"loading":void 0,onClick:()=>r(n=>!n)})},d={args:{icon:"20-placeholder"},render:C};var u,g,f;c.parameters={...c.parameters,docs:{...(u=c.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    icon: '20-placeholder'
  }
}`,...(f=(g=c.parameters)==null?void 0:g.docs)==null?void 0:f.source}}};var h,x,v;d.parameters={...d.parameters,docs:{...(h=d.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    icon: '20-placeholder'
  },
  render: ClickableRender
}`,...(v=(x=d.parameters)==null?void 0:x.docs)==null?void 0:v.source}}};const J=["Default","Clickable"];export{d as Clickable,c as Default,J as __namedExportsOrder,G as default};
//# sourceMappingURL=IconButton.stories-2bc56a90.js.map
