import{j as f,t as S}from"./TetrislyProvider-44685265.js";import{l as b}from"./lodash-f6b38868.js";import{i as x}from"./isKeyOf-b77e0457.js";import"./index-61bf1805.js";import"./_commonjsHelpers-de833af9.js";const _={w:"12px",h:"12px",borderRadius:"full",appearance:{red:{backgroundColor:"nonSemantic-red-background-strong"},green:{backgroundColor:"nonSemantic-green-background-strong"},orange:{backgroundColor:"nonSemantic-orange-background-strong"}},stroked:{ring:"medium",ringColor:"border-inverted"}},o=({appearance:e,stroked:u=!1,custom:i={},...m})=>{const{appearance:t,stroked:g,...k}=b.merge(_,i);if(!x(t,e))throw new Error(`${e} is not a valid appearance`);const y={...k,...t[e],...u?g:{}};return f.jsx(S.div,{...y,...m,"data-testid":"status-dot"})};try{o.displayName="StatusDot",o.__docgenInfo={description:"",displayName:"StatusDot",props:{appearance:{defaultValue:null,description:"",name:"appearance",required:!0,type:{name:"enum",value:[{value:'"red"'},{value:'"green"'},{value:'"orange"'}]}},stroked:{defaultValue:{value:"false"},description:"",name:"stroked",required:!1,type:{name:"boolean"}},custom:{defaultValue:{value:"{}"},description:"",name:"custom",required:!1,type:{name:'DeepPartial<SystemProps<Theme> & { readonly w: "12px"; readonly h: "12px"; readonly borderRadius: "full"; readonly appearance: { readonly red: { readonly backgroundColor: "nonSemantic-red-background-strong"; }; readonly green: { ...; }; readonly orange: { ...; }; }; readonly stroked: { ...; }; }>'}}}}}catch{}const E={title:"Components/Status Dot",component:o,tags:["autodocs"]},r={args:{appearance:"red"}},a={args:{appearance:"green",stroked:!0},parameters:{backgrounds:{default:"dark"}}};var n,s,d;r.parameters={...r.parameters,docs:{...(n=r.parameters)==null?void 0:n.docs,source:{originalSource:`{
  args: {
    appearance: 'red'
  }
}`,...(d=(s=r.parameters)==null?void 0:s.docs)==null?void 0:d.source}}};var c,p,l;a.parameters={...a.parameters,docs:{...(c=a.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    appearance: 'green',
    stroked: true
  },
  parameters: {
    backgrounds: {
      default: 'dark'
    }
  }
}`,...(l=(p=a.parameters)==null?void 0:p.docs)==null?void 0:l.source}}};const j=["Default","Stroked"];export{r as Default,a as Stroked,j as __namedExportsOrder,E as default};
//# sourceMappingURL=StatusDot.stories-421c254d.js.map
