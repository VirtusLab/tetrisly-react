import{j as e,t as m}from"./TetrislyProvider-51cc1c11.js";import{l as E}from"./lodash-f6b38868.js";import{r as s}from"./index-61bf1805.js";import{H as p}from"./HelperText-8d36a06e.js";import{L as u}from"./Label-f9f8c1bf.js";import{R as V}from"./RadioButton-f99c56de.js";import"./_commonjsHelpers-de833af9.js";import"./tetrisly-icons.es-9149c524.js";import"./isKeyOf-b77e0457.js";import"./extractMarginProps-92c75e8c.js";const C={display:"flex",flexDirection:"column",gap:"component-gap-small",innerElements:{radioButtonContainer:{display:"grid",gap:"component-gap-small component-gap-large"}}},t=({name:a,column:j=1,label:r,helperText:n,custom:y,children:I,...B})=>{const{innerElements:{radioButtonContainer:L},...R}=E.merge(C,y),_=s.Children.map(I,o=>(s.isValidElement(o)&&(o==null?void 0:o.type)!==t.Item&&console.error("You should use only RadioButtonGroup.Item as a child of a RadioButtonGroup component."),s.isValidElement(o)?s.cloneElement(o,{name:a}):o));return e.jsxs(m.div,{...R,...B,"data-testid":"radio-button-group",children:[!!r&&(typeof r=="string"?e.jsx(u,{label:r}):e.jsx(u,{...r})),e.jsx(m.div,{...L,gridTemplateColumns:`repeat(${j}, 1fr)`,"data-testid":"radio-button-group-container",children:_}),!!n&&(typeof n=="string"?e.jsx(p,{text:n}):e.jsx(p,{...n}))]})},G=a=>e.jsx(V,{...a});t.Item=G;try{t.displayName="RadioButtonGroup",t.__docgenInfo={description:"",displayName:"RadioButtonGroup",props:{name:{defaultValue:null,description:"",name:"name",required:!0,type:{name:"string"}},column:{defaultValue:{value:"1"},description:"",name:"column",required:!1,type:{name:"number"}},label:{defaultValue:null,description:"",name:"label",required:!1,type:{name:'string | Pick<LabelProps, "label" | "tooltip" | "optional">'}},helperText:{defaultValue:null,description:"",name:"helperText",required:!1,type:{name:'string | Pick<HelperTextProps, "text" | "intent" | "beforeIcon" | "counter">'}},custom:{defaultValue:null,description:"",name:"custom",required:!1,type:{name:"DeepPartial<RadioButtonGroupConfig>"}}}}}catch{}const O={title:"Components/Radio Button Group",component:t,tags:["autodocs"],args:{name:"radiobuttons",label:"Label",helperText:"Helper text",children:[e.jsx(t.Item,{label:"Label"}),e.jsx(t.Item,{label:"Label"}),e.jsx(t.Item,{label:"Label"}),e.jsx(t.Item,{label:"Label"}),e.jsx(t.Item,{label:"Label"}),e.jsx(t.Item,{label:"Label"}),e.jsx(t.Item,{label:"Label"}),e.jsx(t.Item,{label:"Label"})]}},l={args:{column:4}},i={args:{column:1}};var d,c,f;l.parameters={...l.parameters,docs:{...(d=l.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    column: 4
  }
}`,...(f=(c=l.parameters)==null?void 0:c.docs)==null?void 0:f.source}}};var g,x,b;i.parameters={...i.parameters,docs:{...(g=i.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    column: 1
  }
}`,...(b=(x=i.parameters)==null?void 0:x.docs)==null?void 0:b.source}}};const Y=["Horizontal","Vertical"];export{l as Horizontal,i as Vertical,Y as __namedExportsOrder,O as default};
//# sourceMappingURL=RadioButtonGroup.stories-5fbac2df.js.map
