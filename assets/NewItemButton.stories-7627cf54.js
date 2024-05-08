import{j as e}from"./jsx-runtime-ffb262ed.js";import{R as j}from"./tetrisly-icons.es-12549e88.js";import{r as S}from"./index-76fb7be0.js";import{m as v}from"./mergeConfigWithCustom-aec35d44.js";import{t as r}from"./TetrislyProvider-fe6220a9.js";import{S as D}from"./SectionHeader-0e90dab1.js";import{S as _}from"./States-30cbbb93.js";import{T as B}from"./TetDocs-7395d577.js";import"./_commonjsHelpers-de833af9.js";import"./index-ec2e1905.js";import"./iframe-35b1ea11.js";import"../sb-preview/runtime.js";import"./index-d3ea75b5.js";import"./index-11d98b33.js";import"./index-8fd8397b.js";import"./index-356e4a49.js";const C={display:"inline-flex",flexDirection:"column",justifyContent:"center",alignItems:"center",gap:"$space-component-gap-small",minH:"120px",minWidth:"120px",h:"100%",w:"100%",borderWidth:"$border-width-small",borderStyle:"$border-style-dashed",borderRadius:"$border-radius-large",padding:"$space-component-padding-xLarge",text:"$typo-body-medium",textAlign:"center",whiteSpace:"nowrap",color:"$color-action-neutral-normal",backgroundColor:"$color-interaction-background-formField",transition:!0,transitionDuration:200,outline:{focus:"solid"},outlineColor:{focus:"$color-interaction-focus-default"},outlineWidth:{focus:"$border-width-focus"},outlineOffset:1,state:{normal:{borderColor:{_:"$color-border-neutral-subtle",hover:"$color-interaction-border-hover"}},alert:{borderColor:"$color-interaction-border-alert"},disabled:{borderColor:"$color-border-neutral-subtle",opacity:"$opacity-disabled",pointerEvents:"none"}},innerElements:{text:{text:"$typo-body-medium",color:"$color-content-primary"}}},N=(t,o)=>{const{innerElements:a,state:c,...n}=v({defaultConfig:C,custom:o}),{text:$}=a,w=c[t];return{container:{...n,...w},text:$}},d=({state:t="normal",text:o,custom:a,...c})=>{const n=S.useMemo(()=>N(t,a),[a,t]);return e.jsxs(r.button,{...n.container,...c,"data-testid":"new-item-button",disabled:t==="disabled",children:[e.jsx(j,{name:"20-plus"}),!!o&&e.jsx(r.span,{...n.text,children:o})]})};try{d.displayName="NewItemButton",d.__docgenInfo={description:"",displayName:"NewItemButton",props:{state:{defaultValue:{value:"normal"},description:"",name:"state",required:!1,type:{name:"enum",value:[{value:'"disabled"'},{value:'"alert"'},{value:'"normal"'}]}},text:{defaultValue:null,description:"",name:"text",required:!1,type:{name:"string"}},custom:{defaultValue:null,description:"",name:"custom",required:!1,type:{name:"NewItemButtonConfig"}}}}}catch{}const I=["normal","alert","disabled"],A=()=>e.jsxs(r.section,{py:"$dimension-500",children:[e.jsx(D,{px:"$dimension-1000",py:"$dimension-500",variant:"H1",as:"h2",children:"State"}),e.jsxs(r.div,{px:"$dimension-1000",pb:"$dimension-500",children:[e.jsx(_,{states:["normal","alert","disabled"],flexBasis:"130px",gap:"$dimension-300"}),e.jsx(r.div,{display:"flex",flexDirection:"row",gap:"$dimension-300",pt:"$dimension-300",flexBasis:"130px",flexShrink:"0",flexGrow:"1",children:I.map(t=>e.jsx(r.div,{flexBasis:"130px",flexGrow:"1",flexShrink:"0",children:e.jsx(d,{state:t,text:"Text"})}))})]})]}),P={title:"NewItemButton",component:d,tags:["autodocs"],argTypes:{},args:{state:"normal",text:"text"},parameters:{docs:{description:{component:"A dedicated button for creating new items, such as files, events, or tasks, typically placed in a prominent location and distinguished by an icon or label."},page:()=>e.jsx(B,{docs:"https://docs.tetrisly.com/components/in-progress/newitembutton",children:e.jsx(A,{})})}}},s={args:{state:"normal",text:"New category"}},i={args:{state:"alert",text:"Alert!"}},l={args:{state:"disabled",text:"Disabled"}};var m,p,u;s.parameters={...s.parameters,docs:{...(m=s.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    state: 'normal',
    text: 'New category'
  }
}`,...(u=(p=s.parameters)==null?void 0:p.docs)==null?void 0:u.source}}};var x,f,b;i.parameters={...i.parameters,docs:{...(x=i.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    state: 'alert',
    text: 'Alert!'
  }
}`,...(b=(f=i.parameters)==null?void 0:f.docs)==null?void 0:b.source}}};var g,y,h;l.parameters={...l.parameters,docs:{...(g=l.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    state: 'disabled',
    text: 'Disabled'
  }
}`,...(h=(y=l.parameters)==null?void 0:y.docs)==null?void 0:h.source}}};const Q=["Default","Alert","Disabled"];export{i as Alert,s as Default,l as Disabled,Q as __namedExportsOrder,P as default};
