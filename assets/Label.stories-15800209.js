import{j as e,t as l}from"./TetrislyProvider-0a31fa6a.js";import{q as D}from"./tetrisly-icons.es-4ed30ffb.js";import{l as E}from"./lodash-bc5bedbb.js";import"./index-8db94870.js";import"./_commonjsHelpers-042e6b4d.js";const O={text:"medium-175",color:"content-primary",display:"flex",alignItems:"flex-start",gap:"component-gap-xSmall",tooltip:{color:"content-secondary",display:"flex",alignItems:"center",minHeight:"xSmall"},optional:{color:"content-tertiary"}},s=({label:n,tooltip:h,optional:i,custom:j={},...q})=>{const{optional:L,tooltip:I,...V}=E.merge(O,j);return e.jsxs(l.div,{...V,...q,"data-testid":"label",children:[n,!!i&&e.jsx(l.span,{...L,"data-testid":"label-optional",children:i}),h&&e.jsx(l.span,{...I,"data-testid":"label-tooltip",children:e.jsx(D,{name:"16-info"})})]})};try{s.displayName="Label",s.__docgenInfo={description:"",displayName:"Label",props:{label:{defaultValue:null,description:"",name:"label",required:!0,type:{name:"string"}},tooltip:{defaultValue:null,description:"",name:"tooltip",required:!1,type:{name:"boolean"}},optional:{defaultValue:null,description:"",name:"optional",required:!1,type:{name:"string"}},custom:{defaultValue:{value:"{}"},description:"",name:"custom",required:!1,type:{name:'DeepPartial<SystemProps<Theme> & { readonly text: "medium-175"; readonly color: "content-primary"; readonly display: "flex"; readonly alignItems: "flex-start"; readonly gap: "component-gap-xSmall"; readonly tooltip: { ...; }; readonly optional: { ...; }; }>'}}}}}catch{}const C={title:"Components/Label",component:s,tags:["autodocs"],args:{label:"Label"}},t={},o={args:{optional:"(optional)"}},a={args:{tooltip:!0}},r={args:{optional:"(optional)",tooltip:!0}};var p,c,m;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:"{}",...(m=(c=t.parameters)==null?void 0:c.docs)==null?void 0:m.source}}};var d,u,g;o.parameters={...o.parameters,docs:{...(d=o.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    optional: '(optional)'
  }
}`,...(g=(u=o.parameters)==null?void 0:u.docs)==null?void 0:g.source}}};var y,f,x;a.parameters={...a.parameters,docs:{...(y=a.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    tooltip: true
  }
}`,...(x=(f=a.parameters)==null?void 0:f.docs)==null?void 0:x.source}}};var b,S,_;r.parameters={...r.parameters,docs:{...(b=r.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    optional: '(optional)',
    tooltip: true
  }
}`,...(_=(S=r.parameters)==null?void 0:S.docs)==null?void 0:_.source}}};const H=["Default","Optional","Tooltip","All"];export{r as All,t as Default,o as Optional,a as Tooltip,H as __namedExportsOrder,C as default};
//# sourceMappingURL=Label.stories-15800209.js.map
