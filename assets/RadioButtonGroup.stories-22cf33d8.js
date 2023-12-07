import{j as e}from"./jsx-runtime-ffb262ed.js";import{r as s}from"./index-76fb7be0.js";import{m as B,T}from"./TetDocs-2be21399.js";import{H as d}from"./HelperText-5a21c21b.js";import{L as b}from"./Label-57509d36.js";import{R as H}from"./RadioButton-1b968324.js";import{t as c}from"./TetrislyProvider-e15ac01a.js";import{S as x}from"./SectionHeader-25e04435.js";import"./_commonjsHelpers-de833af9.js";import"./index-f395c73a.js";import"./iframe-77b73892.js";import"../sb-preview/runtime.js";import"./index-d3ea75b5.js";import"./index-11d98b33.js";import"./index-8fd8397b.js";import"./index-356e4a49.js";import"./tetrisly-icons.es-3ae3ef26.js";import"./Button-c029b701.js";import"./index-0f4c63fc.js";import"./extractInputProps-bea3ee83.js";const R={display:"flex",flexDirection:"column",gap:"$space-component-gap-small",innerElements:{radioButtonContainer:{display:"grid",gap:"$space-component-gap-small $space-component-gap-large"},label:{},helperText:{}}},G=a=>{const{innerElements:{radioButtonContainer:u,label:r,helperText:l},...i}=B({defaultConfig:R,custom:a});return{container:i,radioButtonContainer:u,label:r,helperText:l}},t=({name:a,column:u=1,label:r,helperText:l,custom:i,children:I,...C})=>{const n=s.useMemo(()=>G(i),[i]),k=s.Children.map(I,o=>(s.isValidElement(o)&&(o==null?void 0:o.type)!==t.Item&&console.error("You should use only RadioButtonGroup.Item as a child of a RadioButtonGroup component."),s.isValidElement(o)?s.cloneElement(o,{name:a}):o));return e.jsxs(c.div,{...n.container,"data-testid":"radio-button-group",...C,children:[!!r&&(typeof r=="string"?e.jsx(b,{label:r,custom:n.label,"data-testid":"radio-button-group-label"}):e.jsx(b,{...r,custom:n.label,"data-testid":"radio-button-group-label"})),e.jsx(c.div,{...n.radioButtonContainer,gridTemplateColumns:`repeat(${u}, 1fr)`,"data-testid":"radio-button-group-radioButtonContainer",children:k}),!!l&&(typeof l=="string"?e.jsx(d,{text:l,custom:n.helperText,"data-testid":"radio-button-group-helperText"}):e.jsx(d,{...l,custom:n.helperText,"data-testid":"radio-button-group-helperText"}))]})},V=a=>e.jsx(H,{...a});t.Item=V;try{t.displayName="RadioButtonGroup",t.__docgenInfo={description:"",displayName:"RadioButtonGroup",props:{name:{defaultValue:null,description:"",name:"name",required:!0,type:{name:"string"}},column:{defaultValue:{value:"1"},description:"",name:"column",required:!1,type:{name:"number"}},label:{defaultValue:null,description:"",name:"label",required:!1,type:{name:"LabelProp"}},helperText:{defaultValue:null,description:"",name:"helperText",required:!1,type:{name:"HelperTextProp"}},custom:{defaultValue:null,description:"",name:"custom",required:!1,type:{name:"RadioButtonGroupConfig"}}}}}catch{}const _=()=>e.jsxs(e.Fragment,{children:[e.jsxs(c.section,{display:"flex",flexDirection:"column",justifyContent:"center",children:[e.jsx(x,{variant:"H1",as:"h2",px:"$dimension-1000",py:"$dimension-500",children:"Horizontal Group"}),e.jsxs(t,{my:"$dimension-500",mx:"auto",label:"Label",name:"my-radio-group",helperText:"Helper text",column:4,children:[e.jsx(t.Item,{label:"Checkbox Label 1"}),e.jsx(t.Item,{label:"Checkbox Label 2"}),e.jsx(t.Item,{label:"Checkbox Label 3"}),e.jsx(t.Item,{label:"Checkbox Label 4"}),e.jsx(t.Item,{label:"Checkbox Label 5"}),e.jsx(t.Item,{label:"Checkbox Label 6"}),e.jsx(t.Item,{label:"Checkbox Label 7"}),e.jsx(t.Item,{label:"Checkbox Label 8"})]})]}),e.jsxs(c.section,{display:"flex",flexDirection:"column",justifyContent:"center",children:[e.jsx(x,{variant:"H1",as:"h2",px:"$dimension-1000",py:"$dimension-500",children:"Vertical Group"}),e.jsxs(t,{my:"$dimension-500",mx:"auto",label:"Label",name:"another-radio-group",helperText:"Helper text",column:1,children:[e.jsx(t.Item,{label:"Checkbox Label 1"}),e.jsx(t.Item,{label:"Checkbox Label 2"}),e.jsx(t.Item,{label:"Checkbox Label 3"}),e.jsx(t.Item,{label:"Checkbox Label 4"}),e.jsx(t.Item,{label:"Checkbox Label 5"}),e.jsx(t.Item,{label:"Checkbox Label 6"}),e.jsx(t.Item,{label:"Checkbox Label 7"}),e.jsx(t.Item,{label:"Checkbox Label 8"})]})]})]}),X={title:"RadioButtonGroup",component:t,tags:["autodocs"],args:{label:"Label",helperText:"Helper text",children:[e.jsx(t.Item,{label:"Label"}),e.jsx(t.Item,{label:"Label"}),e.jsx(t.Item,{label:"Label"}),e.jsx(t.Item,{label:"Label"}),e.jsx(t.Item,{label:"Label"}),e.jsx(t.Item,{label:"Label"}),e.jsx(t.Item,{label:"Label"}),e.jsx(t.Item,{label:"Label"})]},parameters:{docs:{description:{component:"A component that enables users to choose a single option from a set of mutually exclusive choices. Radio buttons provide clear visual feedback for the selected state, and are commonly used in forms and settings."},page:()=>e.jsx(T,{docs:"https://docs.tetrisly.com/components/list/radiobutton",children:e.jsx(_,{})})}}},m={args:{column:4,name:"my-radio-group"}},p={args:{column:1,name:"another-radio-group"}};var j,f,h;m.parameters={...m.parameters,docs:{...(j=m.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    column: 4,
    name: 'my-radio-group'
  }
}`,...(h=(f=m.parameters)==null?void 0:f.docs)==null?void 0:h.source}}};var g,y,L;p.parameters={...p.parameters,docs:{...(g=p.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    column: 1,
    name: 'another-radio-group'
  }
}`,...(L=(y=p.parameters)==null?void 0:y.docs)==null?void 0:L.source}}};const Z=["Horizontal","Vertical"];export{m as Horizontal,p as Vertical,Z as __namedExportsOrder,X as default};
