import{j as e,t}from"./TetrislyProvider-51cc1c11.js";import{R as y}from"./tetrisly-icons.es-9149c524.js";import{l as u}from"./lodash-f6b38868.js";const n={text:"medium-175",color:"content-primary",display:"flex",alignItems:"flex-start",gap:"component-gap-xSmall",tooltip:{color:"content-secondary",display:"flex",alignItems:"center",minHeight:"xSmall"},optional:{color:"content-tertiary"}},r=({label:l,tooltip:i,optional:a,custom:o,...s})=>{const p=o?u.merge(n,o):n,{optional:d,tooltip:m,...c}=p;return e.jsxs(t.div,{...c,...s,"data-testid":"label",children:[l,!!a&&e.jsx(t.span,{...d,"data-testid":"label-optional",children:a}),i&&e.jsx(t.span,{...m,"data-testid":"label-tooltip",children:e.jsx(y,{name:"16-info"})})]})};try{r.displayName="Label",r.__docgenInfo={description:"",displayName:"Label",props:{label:{defaultValue:null,description:"",name:"label",required:!0,type:{name:"string"}},tooltip:{defaultValue:null,description:"",name:"tooltip",required:!1,type:{name:"boolean"}},optional:{defaultValue:null,description:"",name:"optional",required:!1,type:{name:"string"}},custom:{defaultValue:null,description:"",name:"custom",required:!1,type:{name:'DeepPartial<SystemProps<Theme> & { readonly text: "medium-175"; readonly color: "content-primary"; readonly display: "flex"; readonly alignItems: "flex-start"; readonly gap: "component-gap-xSmall"; readonly tooltip: { ...; }; readonly optional: { ...; }; }>'}}}}}catch{}export{r as L};
//# sourceMappingURL=Label-772bdb47.js.map
