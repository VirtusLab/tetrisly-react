import{j as k,t as S}from"./TetrislyProvider-dd60e1dd.js";import{r as y}from"./index-76fb7be0.js";import{m as b}from"./mergeConfigWithCutom-789678df.js";import"./_commonjsHelpers-de833af9.js";const _={w:"12px",h:"12px",borderRadius:"full",appearance:{red:{backgroundColor:"nonSemantic-red-background-strong"},green:{backgroundColor:"nonSemantic-green-background-strong"},orange:{backgroundColor:"nonSemantic-orange-background-strong"}},stroked:{ring:"medium",ringColor:"border-inverted"}},C=({appearance:e,stroked:r,custom:a})=>{const n=b({defaultConfig:_,custom:a}),{appearance:s,stroked:g,...f}=n;return{container:{...f,...s[e],...r&&g}}},d=({appearance:e="red",stroked:r=!1,custom:a,...n})=>{const s=y.useMemo(()=>C({appearance:e,stroked:r,custom:a}),[e,r,a]);return k.jsx(S.div,{...s.container,"data-testid":"status-dot",...n})};try{d.displayName="StatusDot",d.__docgenInfo={description:"",displayName:"StatusDot",props:{appearance:{defaultValue:{value:"red"},description:"",name:"appearance",required:!1,type:{name:"enum",value:[{value:'"red"'},{value:'"green"'},{value:'"orange"'}]}},stroked:{defaultValue:{value:"false"},description:"",name:"stroked",required:!1,type:{name:"boolean"}},custom:{defaultValue:null,description:"",name:"custom",required:!1,type:{name:"StatusDotConfig"}}}}}catch{}const j={title:"Components/StatusDot",component:d,tags:["autodocs"]},t={args:{appearance:"red"}},o={args:{appearance:"green",stroked:!0},parameters:{backgrounds:{default:"dark"}}};var c,u,p;t.parameters={...t.parameters,docs:{...(c=t.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    appearance: 'red'
  }
}`,...(p=(u=t.parameters)==null?void 0:u.docs)==null?void 0:p.source}}};var l,i,m;o.parameters={...o.parameters,docs:{...(l=o.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    appearance: 'green',
    stroked: true
  },
  parameters: {
    backgrounds: {
      default: 'dark'
    }
  }
}`,...(m=(i=o.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};const q=["Default","Stroked"];export{t as Default,o as Stroked,q as __namedExportsOrder,j as default};
//# sourceMappingURL=StatusDot.stories-69da0325.js.map
