import{j as a}from"./jsx-runtime-ffb262ed.js";import{A as u}from"./Avatar-f7fffa05.js";import{l as h,T as j}from"./TetDocs-0df82f5b.js";import{C as y}from"./Cols-d5f7c3cb.js";import{S as t}from"./SectionHeader-922ceba2.js";import{a as f}from"./Appearance-35507110.js";import{t as n}from"./TetrislyProvider-e15ac01a.js";import"./index-76fb7be0.js";import"./_commonjsHelpers-de833af9.js";import"./index-525b0908.js";import"./iframe-d66e8cb6.js";import"../sb-preview/runtime.js";import"./index-ffc7e5ff.js";import"./index-d37d4223.js";import"./index-356e4a49.js";const v=["large","medium","small","xSmall","2xSmall"],$=["rounded","square"],S=["low","high"],p=({size:s,...e})=>a.jsx(n.div,{display:"flex",gap:"40px",alignItems:"center",children:v.map(r=>a.jsx(u,{...e,size:r},r))}),A=()=>a.jsx(a.Fragment,{children:S.map(s=>a.jsxs(n.section,{pb:"$space-component-padding-4xLarge",py:"$dimension-500",children:[a.jsxs(t,{px:{md:"$dimension-1000",_:"$dimension-500"},variant:"H1",as:"h2",children:[h.capitalize(s)," Emphasis"]}),a.jsx(y,{gap:"80px",px:{md:"$dimension-1000",_:"$dimension-500"},children:$.map(e=>a.jsxs(n.div,{display:"flex",flexDirection:"column",children:[a.jsx(t,{variant:"H2",as:"h3",py:"$dimension-500",children:e==="rounded"?"Shape: Rounded (Default)":"Shape: Square"}),a.jsx(n.hr,{}),a.jsxs(n.div,{display:"flex",flexDirection:"column",gap:"$space-component-gap-xLarge",py:"$space-component-padding-2xLarge",children:[s==="low"&&a.jsx(p,{appearance:"image",shape:e,img:{src:"https://thispersondoesnotexist.com/"}}),f.map(r=>a.jsx(p,{appearance:r,shape:e,emphasis:s,initials:"M"},`${r}${e}${s}`))]})]},e))})]},s))}),O={title:"Avatar",component:u,tags:["autodocs"],args:{img:{src:"https://thispersondoesnotexist.com/"}},argTypes:{img:{if:{arg:"appearance",eq:"image"}},initials:{if:{arg:"appearance",neq:"image"}},emphasis:{if:{arg:"appearance",neq:"image"}}},parameters:{controls:{sort:"alpha"},docs:{description:{component:"A visual representation of a user's identity, often displayed as a small image or icon. Avatars can be personalized with user-uploaded photos or auto-generated images and are commonly used in profile sections, comments, and messaging interfaces."},page:()=>a.jsx(j,{docs:"https://docs.tetrisly.com/components/list/avatar",children:a.jsx(A,{})})}}},o={argTypes:{appearance:f},args:{initials:"M",appearance:"cyan"}},i={args:{appearance:"image"}};var m,c,d;o.parameters={...o.parameters,docs:{...(m=o.parameters)==null?void 0:m.docs,source:{originalSource:`{
  argTypes: {
    appearance: appearances
  },
  args: {
    initials: 'M',
    appearance: 'cyan'
  }
}`,...(d=(c=o.parameters)==null?void 0:c.docs)==null?void 0:d.source}}};var l,g,x;i.parameters={...i.parameters,docs:{...(l=i.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    appearance: 'image'
  }
}`,...(x=(g=i.parameters)==null?void 0:g.docs)==null?void 0:x.source}}};const k=["Initials","Image"];export{i as Image,o as Initials,k as __namedExportsOrder,O as default};
//# sourceMappingURL=Avatar.stories-f06a96fa.js.map