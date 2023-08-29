import{j as e,t as p}from"./TetrislyProvider-51cc1c11.js";import{l as I}from"./lodash-f6b38868.js";import{r as c}from"./index-61bf1805.js";import{C as L}from"./Checkbox-6e527528.js";import{H as i}from"./HelperText-71301648.js";import{L as u}from"./Label-772bdb47.js";import"./_commonjsHelpers-de833af9.js";import"./tetrisly-icons.es-9149c524.js";import"./extractMarginProps-92c75e8c.js";import"./isKeyOf-b77e0457.js";const _={display:"flex",flexDirection:"column",gap:"component-gap-small",innerElements:{checkboxContainer:{display:"grid",gap:"component-gap-small component-gap-large"}}},o=({column:t=1,label:r,helperText:a,children:m,custom:y,...C})=>{const{innerElements:{checkboxContainer:k},...h}=I.merge(_,y);return c.Children.map(m,s=>{c.isValidElement(s)&&(s==null?void 0:s.type)!==o.Item&&console.error("You should use only CheckboxGroup.Item as a child of a CheckboxGroup component.")}),e.jsxs(p.div,{...h,...C,"data-testid":"checkbox-group",children:[!!r&&(typeof r=="string"?e.jsx(u,{label:r}):e.jsx(u,{...r})),e.jsx(p.div,{...k,gridTemplateColumns:`repeat(${t}, 1fr)`,"data-testid":"checkbox-group-container",children:m}),!!a&&(typeof a=="string"?e.jsx(i,{text:a}):e.jsx(i,{...a}))]})},E=t=>e.jsx(L,{...t});o.Item=E;try{o.displayName="CheckboxGroup",o.__docgenInfo={description:"",displayName:"CheckboxGroup",props:{column:{defaultValue:{value:"1"},description:"",name:"column",required:!1,type:{name:"number"}},label:{defaultValue:null,description:"",name:"label",required:!1,type:{name:'string | Pick<LabelProps, "label" | "tooltip" | "optional">'}},helperText:{defaultValue:null,description:"",name:"helperText",required:!1,type:{name:'string | Pick<HelperTextProps, "text" | "intent" | "beforeIcon" | "counter">'}},custom:{defaultValue:null,description:"",name:"custom",required:!1,type:{name:"DeepPartial<CheckboxGroupConfig>"}}}}}catch{}const N={title:"Components/Checkbox Group",component:o,tags:["autodocs"],args:{label:"Label",helperText:"Helper text",children:[e.jsx(o.Item,{label:"Label"}),e.jsx(o.Item,{label:"Label"}),e.jsx(o.Item,{label:"Label"}),e.jsx(o.Item,{label:"Label"}),e.jsx(o.Item,{label:"Label"}),e.jsx(o.Item,{label:"Label"}),e.jsx(o.Item,{label:"Label"}),e.jsx(o.Item,{label:"Label"})]}},n={args:{column:4}},l={args:{column:1}};var x,d,b;n.parameters={...n.parameters,docs:{...(x=n.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    column: 4
  }
}`,...(b=(d=n.parameters)==null?void 0:d.docs)==null?void 0:b.source}}};var g,f,j;l.parameters={...l.parameters,docs:{...(g=l.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    column: 1
  }
}`,...(j=(f=l.parameters)==null?void 0:f.docs)==null?void 0:j.source}}};const O=["Horizontal","Vertical"];export{n as Horizontal,l as Vertical,O as __namedExportsOrder,N as default};
//# sourceMappingURL=CheckboxGroup.stories-3b1fd3f8.js.map
