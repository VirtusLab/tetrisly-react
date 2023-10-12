import{j as a,t as r}from"./TetrislyProvider-66490fd0.js";import{R as I}from"./tetrisly-icons.es-3ae3ef26.js";import{r as s}from"./index-76fb7be0.js";import{m as D}from"./TetDocs-ce3911fc.js";import{A as L}from"./Avatar-6e432a4c.js";import{B as h}from"./Button-3bb89c93.js";import{I as b}from"./IconButton-0fe7a55c.js";import{e as _}from"./extractInputProps-bea3ee83.js";const q={display:"flex",alignItems:"center",h:"$size-medium",padding:"$space-component-padding-small $space-component-padding-large",flexShrink:0,ring:"$border-width-small",ringColor:{_:"$color-interaction-border-neutral-normal",hoverWithoutButton:"$color-interaction-border-hover",alert:"$color-interaction-border-alert"},borderRadius:"$border-radius-large",opacity:{disabled:"$opacity-disabled"},outlineStyle:{"&:has(input:focus)":"solid"},outlineColor:{focusWithin:"$color-interaction-focus-default"},outlineWidth:{"&:has(input:focus)":"$border-width-focus"},outlineOffset:{alert:"$border-width-focus"},transition:!0,transitionDuration:50,cursor:"text",pointerEvents:{disabled:"none"},innerElements:{input:{w:"100%",h:"100%",outline:"none",text:"$typo-body-medium",color:{placeholder:"$color-content-tertiary"},backgroundColor:"$color-interaction-background-formField"},icon:{color:"$color-content-secondary"},text:{text:"$typo-body-medium",color:"$color-content-secondary"},clearButton:{marginLeft:"$space-component-gap-small"},beforeComponent:{spacing:{Icon:{marginLeft:"$space-component-padding-medium",marginRight:"$space-component-padding-small"},Avatar:{margin:"0 $space-component-padding-small"},Prefix:{margin:"0 $space-component-padding-large"},Dropdown:{marginLeft:"$space-component-padding-xSmall",marginRight:"$space-component-padding-small"}}},afterComponent:{spacing:{Icon:{marginLeft:"$space-component-padding-small",marginRight:"$space-component-padding-large"},Sufix:{marginLeft:"$space-component-padding-small",marginRight:"$space-component-padding-large"},Button:{marginLeft:"$space-component-padding-small",marginRight:"$space-component-padding-xSmall"},IconButton:{marginLeft:"$space-component-padding-small",marginRight:"$space-component-padding-xSmall"},Dropdown:{marginLeft:"$space-component-padding-small",marginRight:"$space-component-padding-xSmall"}}}}},V=(l,e,t)=>{const{innerElements:{input:o,icon:x,text:c,clearButton:p,beforeComponent:{spacing:n,...y},afterComponent:{spacing:f,...d}},...u}=D({defaultConfig:q,custom:l});return{container:u,input:o,icon:x,text:c,clearButton:p,beforeComponent:{...y,...e&&n[e]},afterComponent:{...d,...t&&f[t]}}},j=s.forwardRef(({type:l="text",beforeComponent:e,afterComponent:t,state:o,hasClearButton:x,custom:c,value:p,onChange:n,...y},f)=>{const[d,u]=s.useState(""),i=s.useMemo(()=>V(c,e==null?void 0:e.type,t==null?void 0:t.type),[t==null?void 0:t.type,e==null?void 0:e.type,c]),[B,S]=_(y),m=s.useRef(null),w=s.useCallback(g=>{var v;if(g.target===m.current){const $=(v=m.current)==null?void 0:v.querySelector("input");$==null||$.focus()}},[m]),R=s.useCallback(g=>{u(g.target.value),n==null||n(g)},[n]),k=s.useCallback(()=>{u(""),n==null||n({target:{value:""}})},[n]);return a.jsxs(r.div,{ref:m,onClick:w,...i.container,pl:!!e&&"0",pr:!!t&&"0","data-testid":"text-input","data-state":o,tabIndex:0,...S,children:[!!e&&a.jsxs(r.span,{...i.beforeComponent,"data-testid":"text-input-before-component",children:[e.type==="Icon"&&a.jsx(r.span,{...i.icon,children:a.jsx(I,{...e.props})}),e.type==="Prefix"&&a.jsx(r.span,{...i.text,children:e.props.text}),e.type==="Dropdown"&&a.jsx(h,{size:"small",variant:"ghost",label:e.props.label,hasDropdownIndicator:!0}),e.type==="Avatar"&&a.jsx(L,{...e.props,shape:"square",size:"xSmall"})]}),a.jsx(r.input,{...i.input,value:p||d,onChange:R,"data-testid":"text-input-input",...B,type:l,disabled:o==="disabled",ref:f}),!!x&&(p||d)&&a.jsx(b,{variant:"bare",icon:"20-close",onClick:k,...i.clearButton,"data-testid":"text-input-clear-button"}),!!t&&a.jsxs(r.span,{...i.afterComponent,"data-testid":"text-input-after-component",children:[t.type==="Icon"&&a.jsx(r.span,{...i.icon,children:a.jsx(I,{...t.props})}),t.type==="IconButton"&&a.jsx(b,{variant:"ghost",size:"small",...t.props}),t.type==="Sufix"&&a.jsx(r.span,{...i.text,children:t.props.text}),t.type==="Button"&&a.jsx(h,{size:"small",variant:"ghost",label:"Label"}),t.type==="Dropdown"&&a.jsx(h,{size:"small",variant:"ghost",label:t.props.label,hasDropdownIndicator:!0})]})]})});try{j.displayName="TextInput",j.__docgenInfo={description:"",displayName:"TextInput",props:{type:{defaultValue:{value:"text"},description:"",name:"type",required:!1,type:{name:"enum",value:[{value:'"text"'},{value:'"email"'},{value:'"password"'},{value:'"search"'},{value:'"tel"'},{value:'"url"'}]}},beforeComponent:{defaultValue:null,description:"",name:"beforeComponent",required:!1,type:{name:"Icon | Avatar | Prefix | Dropdown"}},afterComponent:{defaultValue:null,description:"",name:"afterComponent",required:!1,type:{name:"Icon | Dropdown | IconButton | Sufix | Button"}},state:{defaultValue:null,description:"",name:"state",required:!1,type:{name:"enum",value:[{value:'"disabled"'},{value:'"alert"'}]}},hasClearButton:{defaultValue:null,description:"",name:"hasClearButton",required:!1,type:{name:"boolean"}},custom:{defaultValue:null,description:"",name:"custom",required:!1,type:{name:"TextInputConfig"}}}}}catch{}export{j as T};
//# sourceMappingURL=TextInput-ddb573e0.js.map
