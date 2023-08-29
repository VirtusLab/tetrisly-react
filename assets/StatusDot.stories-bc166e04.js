import{j as b,t as _}from"./TetrislyProvider-51cc1c11.js";import{l as v}from"./lodash-f6b38868.js";import{i as x}from"./isKeyOf-b77e0457.js";import"./index-61bf1805.js";import"./_commonjsHelpers-de833af9.js";const s={w:"12px",h:"12px",borderRadius:"full",appearance:{red:{backgroundColor:"nonSemantic-red-background-strong"},green:{backgroundColor:"nonSemantic-green-background-strong"},orange:{backgroundColor:"nonSemantic-orange-background-strong"}},stroked:{ring:"medium",ringColor:"border-inverted"}},t=({appearance:e,stroked:m=!1,custom:o,...g})=>{const f=o?v.merge(s,o):s,{appearance:n,stroked:k,...S}=f;if(!x(n,e))throw new Error(`${e} is not a valid appearance`);const y={...S,...n[e],...m?k:{}};return b.jsx(_.div,{...y,...g,"data-testid":"status-dot"})};try{t.displayName="StatusDot",t.__docgenInfo={description:"",displayName:"StatusDot",props:{appearance:{defaultValue:null,description:"",name:"appearance",required:!0,type:{name:"enum",value:[{value:'"red"'},{value:'"green"'},{value:'"orange"'}]}},stroked:{defaultValue:{value:"false"},description:"",name:"stroked",required:!1,type:{name:"boolean"}},custom:{defaultValue:null,description:"",name:"custom",required:!1,type:{name:"DeepPartial<StatusDotConfig>"}}}}}catch{}const q={title:"Components/Status Dot",component:t,tags:["autodocs"]},r={args:{appearance:"red"}},a={args:{appearance:"green",stroked:!0},parameters:{backgrounds:{default:"dark"}}};var d,c,p;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    appearance: 'red'
  }
}`,...(p=(c=r.parameters)==null?void 0:c.docs)==null?void 0:p.source}}};var u,l,i;a.parameters={...a.parameters,docs:{...(u=a.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    appearance: 'green',
    stroked: true
  },
  parameters: {
    backgrounds: {
      default: 'dark'
    }
  }
}`,...(i=(l=a.parameters)==null?void 0:l.docs)==null?void 0:i.source}}};const w=["Default","Stroked"];export{r as Default,a as Stroked,w as __namedExportsOrder,q as default};
//# sourceMappingURL=StatusDot.stories-bc166e04.js.map
