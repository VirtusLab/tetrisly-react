import{j as b,t as x}from"./TetrislyProvider-51cc1c11.js";import{l as _}from"./lodash-f6b38868.js";import{i as v}from"./isKeyOf-b77e0457.js";import"./index-61bf1805.js";import"./_commonjsHelpers-de833af9.js";const s={w:"12px",h:"12px",borderRadius:"full",appearance:{red:{backgroundColor:"nonSemantic-red-background-strong"},green:{backgroundColor:"nonSemantic-green-background-strong"},orange:{backgroundColor:"nonSemantic-orange-background-strong"}},stroked:{ring:"medium",ringColor:"border-inverted"}},o=({appearance:e,stroked:m=!1,custom:t,...g})=>{const k=t?_.merge(s,t):s,{appearance:n,stroked:y,...f}=k;if(!v(n,e))throw new Error(`${e} is not a valid appearance`);const S={...f,...n[e],...m?y:{}};return b.jsx(x.div,{...S,...g,"data-testid":"status-dot"})};try{o.displayName="StatusDot",o.__docgenInfo={description:"",displayName:"StatusDot",props:{appearance:{defaultValue:null,description:"",name:"appearance",required:!0,type:{name:"enum",value:[{value:'"green"'},{value:'"orange"'},{value:'"red"'}]}},stroked:{defaultValue:{value:"false"},description:"",name:"stroked",required:!1,type:{name:"boolean"}},custom:{defaultValue:null,description:"",name:"custom",required:!1,type:{name:'DeepPartial<SystemProps<Theme> & { readonly w: "12px"; readonly h: "12px"; readonly borderRadius: "full"; readonly appearance: { readonly red: { readonly backgroundColor: "nonSemantic-red-background-strong"; }; readonly green: { ...; }; readonly orange: { ...; }; }; readonly stroked: { ...; }; }>'}}}}}catch{}const j={title:"Components/Status Dot",component:o,tags:["autodocs"]},r={args:{appearance:"red"}},a={args:{appearance:"green",stroked:!0},parameters:{backgrounds:{default:"dark"}}};var d,p,c;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    appearance: 'red'
  }
}`,...(c=(p=r.parameters)==null?void 0:p.docs)==null?void 0:c.source}}};var l,u,i;a.parameters={...a.parameters,docs:{...(l=a.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    appearance: 'green',
    stroked: true
  },
  parameters: {
    backgrounds: {
      default: 'dark'
    }
  }
}`,...(i=(u=a.parameters)==null?void 0:u.docs)==null?void 0:i.source}}};const q=["Default","Stroked"];export{r as Default,a as Stroked,q as __namedExportsOrder,j as default};
//# sourceMappingURL=StatusDot.stories-0b544e83.js.map
