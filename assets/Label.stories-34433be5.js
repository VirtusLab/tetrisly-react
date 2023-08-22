import{j as e,t as l}from"./TetrislyProvider-1d2dd998.js";import{R as O}from"./tetrisly-icons.es-11665055.js";import{l as R}from"./lodash-f6b38868.js";import"./index-61bf1805.js";import"./_commonjsHelpers-de833af9.js";const c={text:"medium-175",color:"content-primary",display:"flex",alignItems:"flex-start",gap:"component-gap-xSmall",tooltip:{color:"content-secondary",display:"flex",alignItems:"center",minHeight:"xSmall"},optional:{color:"content-tertiary"}},n=({label:s,tooltip:L,optional:i,custom:p,...q})=>{const I=p?R.merge(c,p):c,{optional:V,tooltip:D,...E}=I;return e.jsxs(l.div,{...E,...q,"data-testid":"label",children:[s,!!i&&e.jsx(l.span,{...V,"data-testid":"label-optional",children:i}),L&&e.jsx(l.span,{...D,"data-testid":"label-tooltip",children:e.jsx(O,{name:"16-info"})})]})};try{n.displayName="Label",n.__docgenInfo={description:"",displayName:"Label",props:{label:{defaultValue:null,description:"",name:"label",required:!0,type:{name:"string"}},tooltip:{defaultValue:null,description:"",name:"tooltip",required:!1,type:{name:"boolean"}},optional:{defaultValue:null,description:"",name:"optional",required:!1,type:{name:"string"}},custom:{defaultValue:null,description:"",name:"custom",required:!1,type:{name:'DeepPartial<SystemProps<Theme> & { readonly text: "medium-175"; readonly color: "content-primary"; readonly display: "flex"; readonly alignItems: "flex-start"; readonly gap: "component-gap-xSmall"; readonly tooltip: { ...; }; readonly optional: { ...; }; }>'}}}}}catch{}const C={title:"Components/Label",component:n,tags:["autodocs"],args:{label:"Label"}},o={},t={args:{optional:"(optional)"}},a={args:{tooltip:!0}},r={args:{optional:"(optional)",tooltip:!0}};var m,d,u;o.parameters={...o.parameters,docs:{...(m=o.parameters)==null?void 0:m.docs,source:{originalSource:"{}",...(u=(d=o.parameters)==null?void 0:d.docs)==null?void 0:u.source}}};var g,y,f;t.parameters={...t.parameters,docs:{...(g=t.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    optional: '(optional)'
  }
}`,...(f=(y=t.parameters)==null?void 0:y.docs)==null?void 0:f.source}}};var x,b,S;a.parameters={...a.parameters,docs:{...(x=a.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    tooltip: true
  }
}`,...(S=(b=a.parameters)==null?void 0:b.docs)==null?void 0:S.source}}};var _,h,j;r.parameters={...r.parameters,docs:{...(_=r.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    optional: '(optional)',
    tooltip: true
  }
}`,...(j=(h=r.parameters)==null?void 0:h.docs)==null?void 0:j.source}}};const H=["Default","Optional","Tooltip","All"];export{r as All,o as Default,t as Optional,a as Tooltip,H as __namedExportsOrder,C as default};
//# sourceMappingURL=Label.stories-34433be5.js.map
