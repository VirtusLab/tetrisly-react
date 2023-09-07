import{j as S,t as y}from"./TetrislyProvider-e2de8794.js";import{i as b}from"./isKeyOf-b77e0457.js";import{m as _}from"./mergeConfigWithCutom-789678df.js";import"./index-76fb7be0.js";import"./_commonjsHelpers-de833af9.js";const C={w:"12px",h:"12px",borderRadius:"full",appearance:{red:{backgroundColor:"nonSemantic-red-background-strong"},green:{backgroundColor:"nonSemantic-green-background-strong"},orange:{backgroundColor:"nonSemantic-orange-background-strong"}},stroked:{ring:"medium",ringColor:"border-inverted"}},t=({appearance:e,stroked:i=!1,custom:l,...m})=>{const{appearance:o,stroked:g,...f}=_({defaultConfig:C,custom:l});if(!b(o,e))throw new Error(`${e} is not a valid appearance`);const k={...f,...o[e],...i?g:{}};return S.jsx(y.div,{...k,...m,"data-testid":"status-dot"})};try{t.displayName="StatusDot",t.__docgenInfo={description:"",displayName:"StatusDot",props:{appearance:{defaultValue:null,description:"",name:"appearance",required:!0,type:{name:"enum",value:[{value:'"red"'},{value:'"green"'},{value:'"orange"'}]}},stroked:{defaultValue:{value:"false"},description:"",name:"stroked",required:!1,type:{name:"boolean"}},custom:{defaultValue:null,description:"",name:"custom",required:!1,type:{name:"DeepPartial<StatusDotConfig>"}}}}}catch{}const q={title:"Components/Status Dot",component:t,tags:["autodocs"]},r={args:{appearance:"red"}},a={args:{appearance:"green",stroked:!0},parameters:{backgrounds:{default:"dark"}}};var n,s,d;r.parameters={...r.parameters,docs:{...(n=r.parameters)==null?void 0:n.docs,source:{originalSource:`{
  args: {
    appearance: 'red'
  }
}`,...(d=(s=r.parameters)==null?void 0:s.docs)==null?void 0:d.source}}};var u,c,p;a.parameters={...a.parameters,docs:{...(u=a.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    appearance: 'green',
    stroked: true
  },
  parameters: {
    backgrounds: {
      default: 'dark'
    }
  }
}`,...(p=(c=a.parameters)==null?void 0:c.docs)==null?void 0:p.source}}};const w=["Default","Stroked"];export{r as Default,a as Stroked,w as __namedExportsOrder,q as default};
//# sourceMappingURL=StatusDot.stories-898837be.js.map
