import{j as t}from"./jsx-runtime-ffb262ed.js";import{R as o}from"./tetrisly-icons.es-12549e88.js";import{r as T}from"./index-76fb7be0.js";import{u as _}from"./useTextInput-1fa22b1a.js";import{A as b}from"./Avatar-fa7da47e.js";import{B as n}from"./Button-2ba8575b.js";import{I as d}from"./IconButton-fbe54fb7.js";import{t as r}from"./TetrislyProvider-8c69fae3.js";const c=T.forwardRef(({type:i="text",beforeComponent:a,afterComponent:e,state:l,hasClearButton:x,value:p,defaultValue:m,...y},h)=>{const{containerRef:f,handleContainerClick:j,styles:s,containerProps:I,innerValue:u,handleOnChange:v,handleOnClear:B,textInputProps:g}=_({beforeComponent:a,afterComponent:e,defaultValue:m,...y});return t.jsxs(r.div,{ref:f,onClick:j,...s.container,pl:!!a&&"0",pr:!!e&&"0","data-testid":"text-input","data-state":l,...I,children:[!!a&&t.jsxs(r.span,{...s.beforeComponent,"data-testid":"text-input-before-component",children:[a.type==="Icon"&&t.jsx(r.span,{...s.icon,children:t.jsx(o,{...a.props})}),a.type==="Prefix"&&t.jsx(r.span,{...s.text,children:a.props.text}),a.type==="Dropdown"&&t.jsx(n,{size:"small",variant:"ghost",label:a.props.label,hasDropdownIndicator:!0}),a.type==="Avatar"&&t.jsx(b,{...a.props,shape:"square",size:"xSmall"})]}),t.jsx(r.input,{...s.input,value:p||u,onChange:v,"data-testid":"text-input-input",...g,type:i,disabled:l==="disabled",ref:h}),!!x&&(p||u)&&t.jsx(d,{variant:"bare",icon:"20-close",onClick:B,...s.clearButton,"data-testid":"text-input-clear-button"}),!!e&&t.jsxs(r.span,{...s.afterComponent,"data-testid":"text-input-after-component",children:[e.type==="Icon"&&t.jsx(r.span,{...s.icon,children:t.jsx(o,{...e.props})}),e.type==="IconButton"&&t.jsx(d,{variant:"ghost",size:"small",...e.props}),e.type==="Sufix"&&t.jsx(r.span,{...s.text,children:e.props.text}),e.type==="Button"&&t.jsx(n,{size:"small",variant:"ghost",label:"Label"}),e.type==="Dropdown"&&t.jsx(n,{size:"small",variant:"ghost",label:e.props.label,hasDropdownIndicator:!0})]})]})});try{c.displayName="TextInput",c.__docgenInfo={description:"",displayName:"TextInput",props:{type:{defaultValue:{value:"text"},description:"",name:"type",required:!1,type:{name:"HTMLInputTypeAttribute"}},beforeComponent:{defaultValue:null,description:"",name:"beforeComponent",required:!1,type:{name:"Dropdown | Icon | Avatar | Prefix"}},afterComponent:{defaultValue:null,description:"",name:"afterComponent",required:!1,type:{name:"IconButton | Dropdown | Icon | Sufix | Button"}},state:{defaultValue:null,description:"",name:"state",required:!1,type:{name:"enum",value:[{value:'"disabled"'},{value:'"alert"'}]}},hasClearButton:{defaultValue:null,description:"",name:"hasClearButton",required:!1,type:{name:"boolean"}},custom:{defaultValue:null,description:"",name:"custom",required:!1,type:{name:"TextInputConfig"}}}}}catch{}export{c as T};
