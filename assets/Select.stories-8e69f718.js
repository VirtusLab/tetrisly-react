import{j as e}from"./jsx-runtime-ffb262ed.js";import{R as W}from"./tetrisly-icons.es-3ae3ef26.js";import{A as M}from"./Avatar-a3d20894.js";import{I as f}from"./IconButton-5b77088f.js";import{u as $}from"./useTextInput-3cc8ed2f.js";import{m as F,T as G}from"./TetDocs-e278ae14.js";import{t as a}from"./TetrislyProvider-e15ac01a.js";import"./index-76fb7be0.js";import"./_commonjsHelpers-de833af9.js";import"./Button-74c67a4e.js";import"./index-089407de.js";import"./extractInputProps-bea3ee83.js";import"./index-b46c796a.js";import"./iframe-31d3a9db.js";import"../sb-preview/runtime.js";import"./index-ffc7e5ff.js";import"./index-d37d4223.js";import"./index-356e4a49.js";const H={innerElements:{afterComponent:{spacing:{IconButton:{marginRight:"$space-component-padding-medium"}}}}},J={type:"IconButton",props:{icon:"20-chevron-down-small"}},m=({state:i,beforeComponent:t,hasClearButton:R,value:l,custom:T,...N})=>{const d=J,q=F({defaultConfig:H,custom:T}),{containerRef:V,handleContainerClick:E,styles:o,containerProps:P,innerValue:u,handleOnChange:k,handleOnClear:w,textInputProps:z}=$({beforeComponent:t,afterComponent:d,custom:q,...N});return e.jsxs(a.div,{ref:V,onClick:E,...o.container,pl:!!t&&"0",pr:"0","data-testid":"select","data-state":i,tabIndex:0,...P,children:[!!t&&e.jsxs(a.span,{...o.beforeComponent,"data-testid":"select-before-component",children:[t.type==="Icon"&&e.jsx(a.span,{...o.icon,children:e.jsx(W,{...t.props})}),t.type==="Avatar"&&e.jsx(M,{...t.props,shape:"square",size:"xSmall"})]}),e.jsx(a.input,{...o.input,value:l||u,onChange:k,"data-testid":"select-input",...z,disabled:i==="disabled"}),!!R&&(l||u)&&e.jsx(f,{variant:"bare",icon:"20-close",size:"medium",onClick:w,...o.clearButton,"data-testid":"select-clear-button"}),e.jsx(a.span,{...o.afterComponent,"data-testid":"select-after-component",children:e.jsx(f,{variant:"bare",size:"medium",...d.props})})]})};try{m.displayName="Select",m.__docgenInfo={description:"",displayName:"Select",props:{custom:{defaultValue:null,description:"",name:"custom",required:!1,type:{name:"TextInputConfig"}},state:{defaultValue:null,description:"",name:"state",required:!1,type:{name:"enum",value:[{value:'"disabled"'},{value:'"alert"'}]}},hasClearButton:{defaultValue:null,description:"",name:"hasClearButton",required:!1,type:{name:"boolean"}},beforeComponent:{defaultValue:null,description:"",name:"beforeComponent",required:!1,type:{name:"Icon | Avatar"}}}}}catch{}const K=()=>e.jsx(a.div,{}),de={title:"Select",component:m,tags:["autodocs"],args:{placeholder:"Input placeholder"},argTypes:{},parameters:{docs:{description:{component:"A component that allows users to choose one or more options from a list, typically presented as a dropdown or pop-up menu. Select components are commonly used in forms and settings."},page:()=>e.jsx(G,{docs:"https://docs.tetrisly.com/components/list/select",children:e.jsx(K,{})})}}},r={},s={args:{state:"disabled"}},n={args:{state:"alert"}},p={args:{beforeComponent:{type:"Icon",props:{name:"20-bolt"}}}},c={args:{beforeComponent:{type:"Avatar",props:{initials:"A"}}}};var g,C,h;r.parameters={...r.parameters,docs:{...(g=r.parameters)==null?void 0:g.docs,source:{originalSource:"{}",...(h=(C=r.parameters)==null?void 0:C.docs)==null?void 0:h.source}}};var x,y,I;s.parameters={...s.parameters,docs:{...(x=s.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    state: 'disabled'
  }
}`,...(I=(y=s.parameters)==null?void 0:y.docs)==null?void 0:I.source}}};var b,v,j;n.parameters={...n.parameters,docs:{...(b=n.parameters)==null?void 0:b.docs,source:{originalSource:`{
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
}`,...(O=(D=c.parameters)==null?void 0:D.docs)==null?void 0:O.source}}};const ue=["Default","Disabled","Alert","BeforeIconComponent","BeforeAvatarComponent"];export{n as Alert,c as BeforeAvatarComponent,p as BeforeIconComponent,r as Default,s as Disabled,ue as __namedExportsOrder,de as default};
//# sourceMappingURL=Select.stories-8e69f718.js.map