import{j as e}from"./jsx-runtime-ffb262ed.js";import{R as E}from"./tetrisly-icons.es-3ae3ef26.js";import{A as z}from"./Avatar-a804e4b5.js";import{I as f}from"./IconButton-de217a00.js";import{u as M}from"./useTextInput-bc301f40.js";import{t as o}from"./TetrislyProvider-e15ac01a.js";import{T as W}from"./TetDocs-d5050730.js";import"./index-76fb7be0.js";import"./_commonjsHelpers-de833af9.js";import"./Button-7a612bb7.js";import"./index-fd9fb995.js";import"./extractInputProps-bea3ee83.js";import"./index-05ce313b.js";import"./iframe-c7de07d2.js";import"../sb-preview/runtime.js";import"./index-ffc7e5ff.js";import"./index-d37d4223.js";import"./index-356e4a49.js";const F={type:"IconButton",props:{icon:"20-chevron-down-small"}},l=({state:i,beforeComponent:t,hasClearButton:T,value:m,...N})=>{const d=F,{containerRef:R,handleContainerClick:q,styles:a,containerProps:V,innerValue:u,handleOnChange:P,handleOnClear:k,textInputProps:w}=M({beforeComponent:t,afterComponent:d,...N});return e.jsxs(o.div,{ref:R,onClick:q,...a.container,pl:!!t&&"0",pr:"0","data-testid":"select","data-state":i,tabIndex:0,...V,children:[!!t&&e.jsxs(o.span,{...a.beforeComponent,"data-testid":"select-before-component",children:[t.type==="Icon"&&e.jsx(o.span,{...a.icon,children:e.jsx(E,{...t.props})}),t.type==="Avatar"&&e.jsx(z,{...t.props,shape:"square",size:"xSmall"})]}),e.jsx(o.input,{...a.input,value:m||u,onChange:P,"data-testid":"select-input",...w,disabled:i==="disabled"}),!!T&&(m||u)&&e.jsx(f,{variant:"bare",icon:"20-close",onClick:k,...a.clearButton,"data-testid":"select-clear-button"}),e.jsx(o.span,{...a.afterComponent,"data-testid":"select-after-component",children:e.jsx(f,{variant:"bare",size:"medium",...d.props})})]})};try{l.displayName="Select",l.__docgenInfo={description:"",displayName:"Select",props:{custom:{defaultValue:null,description:"",name:"custom",required:!1,type:{name:"TextInputConfig"}},state:{defaultValue:null,description:"",name:"state",required:!1,type:{name:"enum",value:[{value:'"disabled"'},{value:'"alert"'}]}},hasClearButton:{defaultValue:null,description:"",name:"hasClearButton",required:!1,type:{name:"boolean"}},beforeComponent:{defaultValue:null,description:"",name:"beforeComponent",required:!1,type:{name:"Icon | Avatar"}}}}}catch{}const G=()=>e.jsx(o.div,{}),ce={title:"Select",component:l,tags:["autodocs"],args:{placeholder:"Input placeholder"},argTypes:{},parameters:{docs:{description:{component:"A component that allows users to choose one or more options from a list, typically presented as a dropdown or pop-up menu. Select components are commonly used in forms and settings."},page:()=>e.jsx(W,{docs:"https://docs.tetrisly.com/components/list/select",children:e.jsx(G,{})})}}},r={},s={args:{state:"disabled"}},n={args:{state:"alert"}},p={args:{beforeComponent:{type:"Icon",props:{name:"20-bolt"}}}},c={args:{beforeComponent:{type:"Avatar",props:{initials:"A"}}}};var g,x,y;r.parameters={...r.parameters,docs:{...(g=r.parameters)==null?void 0:g.docs,source:{originalSource:"{}",...(y=(x=r.parameters)==null?void 0:x.docs)==null?void 0:y.source}}};var h,C,I;s.parameters={...s.parameters,docs:{...(h=s.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    state: 'disabled'
  }
}`,...(I=(C=s.parameters)==null?void 0:C.docs)==null?void 0:I.source}}};var b,v,j;n.parameters={...n.parameters,docs:{...(b=n.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    state: 'alert'
  }
}`,...(j=(v=n.parameters)==null?void 0:v.docs)==null?void 0:j.source}}};var A,S,_;p.parameters={...p.parameters,docs:{...(A=p.parameters)==null?void 0:A.docs,source:{originalSource:`{
  args: {
    beforeComponent: {
      type: 'Icon',
      props: {
        name: '20-bolt'
      }
    }
  }
}`,...(_=(S=p.parameters)==null?void 0:S.docs)==null?void 0:_.source}}};var B,D,O;c.parameters={...c.parameters,docs:{...(B=c.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    beforeComponent: {
      type: 'Avatar',
      props: {
        initials: 'A'
      }
    }
  }
}`,...(O=(D=c.parameters)==null?void 0:D.docs)==null?void 0:O.source}}};const ie=["Default","Disabled","Alert","BeforeIconComponent","BeforeAvatarComponent"];export{n as Alert,c as BeforeAvatarComponent,p as BeforeIconComponent,r as Default,s as Disabled,ie as __namedExportsOrder,ce as default};
//# sourceMappingURL=Select.stories-87ff3d9c.js.map
