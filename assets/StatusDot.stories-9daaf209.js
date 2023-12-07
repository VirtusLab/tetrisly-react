import{j as e}from"./jsx-runtime-ffb262ed.js";import{r as j}from"./index-76fb7be0.js";import{m as b,T as v}from"./TetDocs-48bdb334.js";import{t as a}from"./TetrislyProvider-e15ac01a.js";import{S as p}from"./SectionHeader-25e04435.js";import{S as u}from"./States-169872e7.js";import"./_commonjsHelpers-de833af9.js";import"./index-434e8b00.js";import"./iframe-7f6a535b.js";import"../sb-preview/runtime.js";import"./index-d3ea75b5.js";import"./index-11d98b33.js";import"./index-8fd8397b.js";import"./index-356e4a49.js";const $={w:"12px",h:"12px",borderRadius:"$border-radius-full",appearance:{red:{backgroundColor:"$color-nonSemantic-red-background-strong"},green:{backgroundColor:"$color-nonSemantic-green-background-strong"},orange:{backgroundColor:"$color-nonSemantic-orange-background-strong"}},hasStroke:{boxShadow:"0 0 #0000",ring:"$border-width-medium",ringColor:"$color-border-inverted"}},D=({appearance:r,hasStroke:s,custom:t})=>{const c=b({defaultConfig:$,custom:t}),{appearance:l,hasStroke:k,...y}=c;return{container:{...y,...l[r],...s&&k}}},o=({appearance:r="red",hasStroke:s=!1,custom:t,...c})=>{const l=j.useMemo(()=>D({appearance:r,hasStroke:s,custom:t}),[r,s,t]);return e.jsx(a.div,{...l.container,"data-testid":"status-dot",...c})};try{o.displayName="StatusDot",o.__docgenInfo={description:"",displayName:"StatusDot",props:{appearance:{defaultValue:{value:"red"},description:"",name:"appearance",required:!1,type:{name:"enum",value:[{value:'"green"'},{value:'"red"'},{value:'"orange"'}]}},hasStroke:{defaultValue:{value:"false"},description:"You can change the color of a stroke using the custom prop",name:"hasStroke",required:!1,type:{name:"boolean"}},custom:{defaultValue:null,description:"",name:"custom",required:!1,type:{name:"StatusDotConfig"}}}}}catch{}const n=["red","green","orange"],_=()=>e.jsxs(e.Fragment,{children:[e.jsxs(a.section,{py:"$space-component-padding-4xLarge",children:[e.jsx(p,{variant:"H1",as:"h2",children:"Stroked: No"}),e.jsxs(a.div,{px:"$dimension-1000",py:"$dimension-500",children:[e.jsx(u,{states:n,flexBasis:"300px"}),e.jsx(a.div,{display:"flex",children:n.map(r=>e.jsx(a.div,{display:"flex",flexBasis:"300px",flexShrink:"0",flexGrow:"1",children:e.jsx(o,{appearance:r})},r))})]})]}),e.jsxs(a.section,{bg:"$color-background-neutral-subtle",py:"$space-component-padding-4xLarge",children:[e.jsx(p,{variant:"H1",as:"h2",py:"$dimension-500",children:"Stroked: Yes"}),e.jsxs(a.div,{px:"$dimension-1000",py:"$dimension-500",children:[e.jsx(u,{states:n,flexBasis:"300px"}),e.jsx(a.div,{display:"flex",children:n.map(r=>e.jsx(a.div,{display:"flex",flexBasis:"300px",flexShrink:"0",flexGrow:"1",children:e.jsx(o,{appearance:r,hasStroke:!0})},r))})]})]})]}),I={title:"Global Primitives / StatusDot",component:o,tags:["autodocs"],args:{hasStroke:!1},parameters:{backgrounds:{default:"dark"},docs:{page:()=>e.jsx(v,{docs:null,children:e.jsx(_,{})})}}},d={args:{appearance:"red"}},i={args:{appearance:"green",hasStroke:!0},parameters:{backgrounds:{default:"dark"}}};var m,g,x;d.parameters={...d.parameters,docs:{...(m=d.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    appearance: 'red'
  }
}`,...(x=(g=d.parameters)==null?void 0:g.docs)==null?void 0:x.source}}};var f,S,h;i.parameters={...i.parameters,docs:{...(f=i.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    appearance: 'green',
    hasStroke: true
  },
  parameters: {
    backgrounds: {
      default: 'dark'
    }
  }
}`,...(h=(S=i.parameters)==null?void 0:S.docs)==null?void 0:h.source}}};const M=["Default","Stroked"];export{d as Default,i as Stroked,M as __namedExportsOrder,I as default};