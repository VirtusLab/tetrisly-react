import{j as e}from"./jsx-runtime-ffb262ed.js";import{B as I}from"./BooleanPill-6a0c7ceb.js";import{l as E}from"./mergeConfigWithCustom-aec35d44.js";import{S as p}from"./SectionHeader-0e90dab1.js";import{t as a}from"./TetrislyProvider-fe6220a9.js";import{T as M}from"./TetDocs-45582a01.js";import"./index-76fb7be0.js";import"./_commonjsHelpers-de833af9.js";import"./tetrisly-icons.es-12549e88.js";import"./Avatar-cbae65d6.js";import"./index-576ce100.js";import"./iframe-e1b27985.js";import"../sb-preview/runtime.js";import"./index-d3ea75b5.js";import"./index-11d98b33.js";import"./index-8fd8397b.js";import"./index-356e4a49.js";const u=["default","disabled"],T=[!1,!0],k=[!1,!0],N=[{id:"0",text:"Value",onChange:()=>{}},{id:"1",text:"Value",avatar:{initials:"M"}},{id:"2",text:"Value",avatar:{image:"https://thispersondoesnotexist.com/"}}],m=()=>e.jsx(e.Fragment,{children:u.map(t=>e.jsxs(a.section,{display:"flex",pt:"$dimension-500",flexDirection:"column",children:[e.jsx(p,{variant:"Hero",as:"h2",px:"$dimension-1000",children:E.startCase(t)}),T.map(s=>e.jsxs(a.div,{display:"flex",flexDirection:"column",bg:s?"$color-background-neutral-subtle":void 0,children:[e.jsx(p,{variant:"H2",as:"h3",px:"$dimension-1000",py:"$dimension-500",borderBottom:"$color-neutral-strong",children:s?"Inverted":"Primary"}),k.map(l=>e.jsxs(a.div,{px:"$dimension-1000",pb:"$dimension-500",children:[e.jsxs(p,{variant:"H3",as:"h4",pt:"$dimension-500",children:["Selected: ",String(l)]}),e.jsx(a.div,{display:"flex",flexBasis:"180px",flexGrow:"1",flexShrink:"0",alignItems:"flex-start",flexWrap:"wrap",justifyContent:"flex-start",flexDirection:"row",gap:"$dimension-300",py:"$dimension-500",children:N.map(({id:V,...C})=>e.jsx(I,{state:t,isInverted:s,isSelected:l,...C},V))})]},`${u}-${s}-${l}`))]},`${t}-${s}`))]},t))});try{m.displayName="BooleanPillDocs",m.__docgenInfo={description:"",displayName:"BooleanPillDocs",props:{}}}catch{}const ae={title:"BooleanPill",component:I,tags:["autodocs"],argTypes:{},args:{state:"default",text:"Value"},parameters:{docs:{description:{component:"A compact, rounded indicator used to represent tags, categories, or statuses. Pills often include text and/or icons and can be interactive, such as allowing users to remove a filter or tag."},page:()=>e.jsx(M,{docs:"https://docs.tetrisly.com/components/in-progress/pill",children:e.jsx(m,{})})}}},r={args:{state:"default"}},o={args:{state:"default",avatar:{image:"https://thispersondoesnotexist.com/"}}},i={args:{state:"disabled"}},n={args:{isSelected:!0}},d={args:{isSelected:!0,state:"disabled"}},c={args:{isSelected:!0,avatar:{appearance:"magenta",initials:"M"}}};var g,x,f;r.parameters={...r.parameters,docs:{...(g=r.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    state: 'default'
  }
}`,...(f=(x=r.parameters)==null?void 0:x.docs)==null?void 0:f.source}}};var h,S,v;o.parameters={...o.parameters,docs:{...(h=o.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    state: 'default',
    avatar: {
      image: 'https://thispersondoesnotexist.com/'
    }
  }
}`,...(v=(S=o.parameters)==null?void 0:S.docs)==null?void 0:v.source}}};var $,b,D;i.parameters={...i.parameters,docs:{...($=i.parameters)==null?void 0:$.docs,source:{originalSource:`{
  args: {
    state: 'disabled'
  }
}`,...(D=(b=i.parameters)==null?void 0:b.docs)==null?void 0:D.source}}};var j,y,_;n.parameters={...n.parameters,docs:{...(j=n.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    isSelected: true
  }
}`,...(_=(y=n.parameters)==null?void 0:y.docs)==null?void 0:_.source}}};var B,A,P;d.parameters={...d.parameters,docs:{...(B=d.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    isSelected: true,
    state: 'disabled'
  }
}`,...(P=(A=d.parameters)==null?void 0:A.docs)==null?void 0:P.source}}};var W,w,H;c.parameters={...c.parameters,docs:{...(W=c.parameters)==null?void 0:W.docs,source:{originalSource:`{
  args: {
    isSelected: true,
    avatar: {
      appearance: 'magenta',
      initials: 'M'
    }
  }
}`,...(H=(w=c.parameters)==null?void 0:w.docs)==null?void 0:H.source}}};const re=["Default","DefaultWithAvatar","Disabled","Selected","DisabledAndSelected","SelectedWithAvatar"];export{r as Default,o as DefaultWithAvatar,i as Disabled,d as DisabledAndSelected,n as Selected,c as SelectedWithAvatar,re as __namedExportsOrder,ae as default};
