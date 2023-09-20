import{j as t,t as p}from"./TetrislyProvider-dd60e1dd.js";import{r as i}from"./index-76fb7be0.js";import{m as x}from"./TetDocs-709b28a1.js";import{H as d}from"./HelperText-52b844af.js";import{L as m}from"./Label-2e68fea1.js";import{R as y}from"./RadioButton-51ed7aea.js";const b={display:"flex",flexDirection:"column",gap:"component-gap-small",innerElements:{radioButtonContainer:{display:"grid",gap:"component-gap-small component-gap-large"},label:{},helperText:{}}},B=o=>{const{innerElements:{radioButtonContainer:l,label:r,helperText:a},...s}=x({defaultConfig:b,custom:o});return{container:s,radioButtonContainer:l,label:r,helperText:a}},u=({name:o,column:l=1,label:r,helperText:a,custom:s,children:c,...f})=>{const n=i.useMemo(()=>B(s),[s]),g=i.Children.map(c,e=>(i.isValidElement(e)&&(e==null?void 0:e.type)!==u.Item&&console.error("You should use only RadioButtonGroup.Item as a child of a RadioButtonGroup component."),i.isValidElement(e)?i.cloneElement(e,{name:o}):e));return t.jsxs(p.div,{...n.container,"data-testid":"radio-button-group",...f,children:[!!r&&(typeof r=="string"?t.jsx(m,{label:r,custom:n.label,"data-testid":"radio-button-group-label"}):t.jsx(m,{...r,custom:n.label,"data-testid":"radio-button-group-label"})),t.jsx(p.div,{...n.radioButtonContainer,gridTemplateColumns:`repeat(${l}, 1fr)`,"data-testid":"radio-button-group-radioButtonContainer",children:g}),!!a&&(typeof a=="string"?t.jsx(d,{text:a,custom:n.helperText,"data-testid":"radio-button-group-helperText"}):t.jsx(d,{...a,custom:n.helperText,"data-testid":"radio-button-group-helperText"}))]})},C=o=>t.jsx(y,{...o});u.Item=C;try{u.displayName="RadioButtonGroup",u.__docgenInfo={description:"",displayName:"RadioButtonGroup",props:{name:{defaultValue:null,description:"",name:"name",required:!0,type:{name:"string"}},column:{defaultValue:{value:"1"},description:"",name:"column",required:!1,type:{name:"number"}},label:{defaultValue:null,description:"",name:"label",required:!1,type:{name:"LabelProp"}},helperText:{defaultValue:null,description:"",name:"helperText",required:!1,type:{name:"HelperTextProp"}},custom:{defaultValue:null,description:"",name:"custom",required:!1,type:{name:"RadioButtonGroupConfig"}}}}}catch{}export{u as R};
//# sourceMappingURL=RadioButtonGroup-61a495a4.js.map
