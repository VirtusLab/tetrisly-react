import{j as o}from"./jsx-runtime-ffb262ed.js";import{R as $}from"./tetrisly-icons.es-3ae3ef26.js";import{r as B}from"./index-76fb7be0.js";import{m as L,l as _,T as D}from"./TetDocs-48bdb334.js";import{t as e}from"./TetrislyProvider-e15ac01a.js";import{S as v}from"./SectionHeader-25e04435.js";import{S as V,a as E}from"./States-169872e7.js";import{a as T}from"./Appearance-35507110.js";import"./_commonjsHelpers-de833af9.js";import"./index-434e8b00.js";import"./iframe-7f6a535b.js";import"../sb-preview/runtime.js";import"./index-d3ea75b5.js";import"./index-11d98b33.js";import"./index-8fd8397b.js";import"./index-356e4a49.js";const W={display:"flex",w:"fit-content",h:"$size-xSmall",borderRadius:"$border-radius-medium",flexShrink:0,alignItems:"center",gap:"$space-component-gap-xSmall",p:"$space-component-padding-xSmall",hasLabel:{px:"$space-component-padding-small"},text:"$typo-body-medium",appearance:{blue:{emphasis:{high:{color:"$color-nonSemantic-white-content-primary",backgroundColor:"$color-nonSemantic-blue-background-strong"},medium:{color:"$color-nonSemantic-blue-content-primary",backgroundColor:"$color-nonSemantic-blue-background-muted"},low:{color:"$color-nonSemantic-grey-content-primary",backgroundColor:"$color-nonSemantic-blue-background-onSubtle"}}},green:{emphasis:{high:{color:"$color-nonSemantic-white-content-primary",backgroundColor:"$color-nonSemantic-green-background-strong"},medium:{color:"$color-nonSemantic-green-content-primary",backgroundColor:"$color-nonSemantic-green-background-muted"},low:{color:"$color-nonSemantic-grey-content-primary",backgroundColor:"$color-nonSemantic-green-background-onSubtle"}}},grey:{emphasis:{high:{color:"$color-nonSemantic-white-content-primary",backgroundColor:"$color-nonSemantic-grey-background-strong"},medium:{color:"$color-nonSemantic-grey-content-primary",backgroundColor:"$color-nonSemantic-grey-background-muted"},low:{color:"$color-nonSemantic-grey-content-primary",backgroundColor:"$color-nonSemantic-grey-background-onSubtle"}}},red:{emphasis:{high:{color:"$color-nonSemantic-white-content-primary",backgroundColor:"$color-nonSemantic-red-background-strong"},medium:{color:"$color-nonSemantic-red-content-primary",backgroundColor:"$color-nonSemantic-red-background-muted"},low:{color:"$color-nonSemantic-grey-content-primary",backgroundColor:"$color-nonSemantic-red-background-onSubtle"}}},orange:{emphasis:{high:{color:"$color-nonSemantic-grey-content-primary",backgroundColor:"$color-nonSemantic-orange-background-strong"},medium:{color:"$color-nonSemantic-orange-content-primary",backgroundColor:"$color-nonSemantic-orange-background-muted"},low:{color:"$color-nonSemantic-grey-content-primary",backgroundColor:"$color-nonSemantic-orange-background-onSubtle"}}},raspberry:{emphasis:{high:{color:"$color-nonSemantic-white-content-primary",backgroundColor:"$color-nonSemantic-raspberry-background-strong"},medium:{color:"$color-nonSemantic-raspberry-content-primary",backgroundColor:"$color-nonSemantic-raspberry-background-muted"},low:{color:"$color-nonSemantic-grey-content-primary",backgroundColor:"$color-nonSemantic-raspberry-background-onSubtle"}}},magenta:{emphasis:{high:{color:"$color-nonSemantic-white-content-primary",backgroundColor:"$color-nonSemantic-magenta-background-strong"},medium:{color:"$color-nonSemantic-magenta-content-primary",backgroundColor:"$color-nonSemantic-magenta-background-muted"},low:{color:"$color-nonSemantic-grey-content-primary",backgroundColor:"$color-nonSemantic-magenta-background-onSubtle"}}},purple:{emphasis:{high:{color:"$color-nonSemantic-white-content-primary",backgroundColor:"$color-nonSemantic-purple-background-strong"},medium:{color:"$color-nonSemantic-purple-content-primary",backgroundColor:"$color-nonSemantic-purple-background-muted"},low:{color:"$color-nonSemantic-grey-content-primary",backgroundColor:"$color-nonSemantic-purple-background-onSubtle"}}},grape:{emphasis:{high:{color:"$color-nonSemantic-white-content-primary",backgroundColor:"$color-nonSemantic-grape-background-strong"},medium:{color:"$color-nonSemantic-grape-content-primary",backgroundColor:"$color-nonSemantic-grape-background-muted"},low:{color:"$color-nonSemantic-grey-content-primary",backgroundColor:"$color-nonSemantic-grape-background-onSubtle"}}},violet:{emphasis:{high:{color:"$color-nonSemantic-white-content-primary",backgroundColor:"$color-nonSemantic-violet-background-strong"},medium:{color:"$color-nonSemantic-violet-content-primary",backgroundColor:"$color-nonSemantic-violet-background-muted"},low:{color:"$color-nonSemantic-grey-content-primary",backgroundColor:"$color-nonSemantic-violet-background-onSubtle"}}},cyan:{emphasis:{high:{color:"$color-nonSemantic-white-content-primary",backgroundColor:"$color-nonSemantic-cyan-background-strong"},medium:{color:"$color-nonSemantic-cyan-content-primary",backgroundColor:"$color-nonSemantic-cyan-background-muted"},low:{color:"$color-nonSemantic-grey-content-primary",backgroundColor:"$color-nonSemantic-cyan-background-onSubtle"}}},teal:{emphasis:{high:{color:"$color-nonSemantic-white-content-primary",backgroundColor:"$color-nonSemantic-teal-background-strong"},medium:{color:"$color-nonSemantic-teal-content-primary",backgroundColor:"$color-nonSemantic-teal-background-muted"},low:{color:"$color-nonSemantic-grey-content-primary",backgroundColor:"$color-nonSemantic-teal-background-onSubtle"}}},aquamarine:{emphasis:{high:{color:"$color-nonSemantic-white-content-primary",backgroundColor:"$color-nonSemantic-aquamarine-background-strong"},medium:{color:"$color-nonSemantic-aquamarine-content-primary",backgroundColor:"$color-nonSemantic-aquamarine-background-muted"},low:{color:"$color-nonSemantic-grey-content-primary",backgroundColor:"$color-nonSemantic-aquamarine-background-onSubtle"}}},emerald:{emphasis:{high:{color:"$color-nonSemantic-white-content-primary",backgroundColor:"$color-nonSemantic-emerald-background-strong"},medium:{color:"$color-nonSemantic-emerald-content-primary",backgroundColor:"$color-nonSemantic-emerald-background-muted"},low:{color:"$color-nonSemantic-grey-content-primary",backgroundColor:"$color-nonSemantic-emerald-background-onSubtle"}}},outline:{emphasis:{high:{border:"1px solid",borderColor:"$color-nonSemantic-grey-border-strong",color:"$color-nonSemantic-grey-content-primary",backgroundColor:"$color-nonSemantic-white-background-strong"},medium:{border:"1px solid",borderColor:"$color-nonSemantic-grey-border-subtle",color:"$color-nonSemantic-grey-content-primary",backgroundColor:"$color-nonSemantic-white-background-strong"},low:{border:"1px solid",borderColor:"$color-nonSemantic-grey-border-strong",color:"$color-nonSemantic-grey-content-primary",backgroundColor:"$color-nonSemantic-white-background-strong"}}}},intent:{neutral:{emphasis:{high:{color:"$color-content-primary-inverted",backgroundColor:"$color-background-neutral-strong"},medium:{color:"$color-content-primary",backgroundColor:"$color-background-neutral-muted"},low:{color:"$color-nonSemantic-grey-content-primary",backgroundColor:"$color-background-neutral-onSubtle"}}},informative:{emphasis:{high:{color:"$color-content-primary-inverted",backgroundColor:"$color-background-informative-strong"},medium:{color:"$color-content-informative-primary",backgroundColor:"$color-background-informative-muted"},low:{color:"$color-nonSemantic-grey-content-primary",backgroundColor:"$color-background-informative-onSubtle"}}},positive:{emphasis:{high:{color:"$color-content-primary-inverted",backgroundColor:"$color-background-positive-strong"},medium:{color:"$color-content-positive-primary",backgroundColor:"$color-background-positive-muted"},low:{color:"$color-nonSemantic-grey-content-primary",backgroundColor:"$color-background-positive-onSubtle"}}},warning:{emphasis:{high:{color:"$color-content-primary",backgroundColor:"$color-background-warning-strong"},medium:{color:"$color-content-warning-primary",backgroundColor:"$color-background-warning-muted"},low:{color:"$color-nonSemantic-grey-content-primary",backgroundColor:"$color-background-warning-onSubtle"}}},negative:{emphasis:{high:{color:"$color-content-primary-inverted",backgroundColor:"$color-background-negative-strong"},medium:{color:"$color-content-negative-primary",backgroundColor:"$color-background-negative-muted"},low:{color:"$color-nonSemantic-grey-content-primary",backgroundColor:"$color-background-negative-onSubtle"}}}},innerElements:{label:{},iconContainer:{}}},H=(r,n,m,b,c)=>{const{innerElements:t,hasLabel:i,intent:u,appearance:h,...d}=L({defaultConfig:W,custom:m}),l=c?h[c].emphasis[n]:u[r].emphasis[n];return{container:{...d,...l,...b?i:{}},iconContainer:t.iconContainer,label:t.label}},a=({appearance:r,intent:n="neutral",emphasis:m="high",icon:b,beforeIcon:c=b,afterIcon:t,label:i,custom:u,...h})=>{const d=!!i,l=B.useMemo(()=>H(n,m,u,d,r),[u,n,m,d,r]);return o.jsxs(e.div,{...l.container,"data-testid":"badge",...h,children:[!!c&&o.jsx(e.span,{...l.iconContainer,"data-testid":"badge-iconContainer",children:o.jsx($,{name:c,"data-testid":"badge-icon"})}),!!i&&o.jsx(e.span,{...l.label,"data-testid":"badge-label",children:i}),!!t&&o.jsx(e.span,{...l.iconContainer,"data-testid":"badge-iconContainer",children:o.jsx($,{name:t,"data-testid":"badge-icon"})})]})};try{a.displayName="Badge",a.__docgenInfo={description:"",displayName:"Badge",props:{appearance:{defaultValue:null,description:"",name:"appearance",required:!1,type:{name:"enum",value:[{value:'"outline"'},{value:'"blue"'},{value:'"green"'},{value:'"grey"'},{value:'"red"'},{value:'"orange"'},{value:'"raspberry"'},{value:'"magenta"'},{value:'"purple"'},{value:'"grape"'},{value:'"violet"'},{value:'"cyan"'},{value:'"teal"'},{value:'"aquamarine"'},{value:'"emerald"'}]}},intent:{defaultValue:{value:"neutral"},description:"",name:"intent",required:!1,type:{name:"enum",value:[{value:'"warning"'},{value:'"negative"'},{value:'"neutral"'},{value:'"informative"'},{value:'"positive"'}]}},label:{defaultValue:null,description:"",name:"label",required:!1,type:{name:"string"}},beforeIcon:{defaultValue:null,description:"",name:"beforeIcon",required:!1,type:{name:"enum",value:[{value:'"16-alert-full"'},{value:'"16-arrowhead-down-small"'},{value:'"16-arrowhead-down"'},{value:'"16-arrowhead-left-small"'},{value:'"16-arrowhead-left"'},{value:'"16-arrowhead-right-small"'},{value:'"16-arrowhead-right"'},{value:'"16-arrowhead-top-small"'},{value:'"16-arrowhead-top"'},{value:'"16-bolt"'},{value:'"16-check"'},{value:'"16-chevron-down"'},{value:'"16-chevron-left"'},{value:'"16-chevron-right"'},{value:'"16-chevron-top"'},{value:'"16-close"'},{value:'"16-dot"'},{value:'"16-info"'},{value:'"16-minus"'},{value:'"16-plus"'}]}},afterIcon:{defaultValue:null,description:"",name:"afterIcon",required:!1,type:{name:"enum",value:[{value:'"16-alert-full"'},{value:'"16-arrowhead-down-small"'},{value:'"16-arrowhead-down"'},{value:'"16-arrowhead-left-small"'},{value:'"16-arrowhead-left"'},{value:'"16-arrowhead-right-small"'},{value:'"16-arrowhead-right"'},{value:'"16-arrowhead-top-small"'},{value:'"16-arrowhead-top"'},{value:'"16-bolt"'},{value:'"16-check"'},{value:'"16-chevron-down"'},{value:'"16-chevron-left"'},{value:'"16-chevron-right"'},{value:'"16-chevron-top"'},{value:'"16-close"'},{value:'"16-dot"'},{value:'"16-info"'},{value:'"16-minus"'},{value:'"16-plus"'}]}},icon:{defaultValue:null,description:"",name:"icon",required:!1,type:{name:"enum",value:[{value:'"16-alert-full"'},{value:'"16-arrowhead-down-small"'},{value:'"16-arrowhead-down"'},{value:'"16-arrowhead-left-small"'},{value:'"16-arrowhead-left"'},{value:'"16-arrowhead-right-small"'},{value:'"16-arrowhead-right"'},{value:'"16-arrowhead-top-small"'},{value:'"16-arrowhead-top"'},{value:'"16-bolt"'},{value:'"16-check"'},{value:'"16-chevron-down"'},{value:'"16-chevron-left"'},{value:'"16-chevron-right"'},{value:'"16-chevron-top"'},{value:'"16-close"'},{value:'"16-dot"'},{value:'"16-info"'},{value:'"16-minus"'},{value:'"16-plus"'}]}},emphasis:{defaultValue:{value:"high"},description:"",name:"emphasis",required:!1,type:{name:"enum",value:[{value:'"low"'},{value:'"high"'},{value:'"medium"'}]}},custom:{defaultValue:null,description:"",name:"custom",required:!1,type:{name:"BadgeConfig"}}}}}catch{}const y=["neutral","informative","positive","warning","negative"],R=["high","medium","low"],A=()=>o.jsx(o.Fragment,{children:R.map(r=>o.jsxs(e.section,{display:"flex",padding:"40px 0px",flexDirection:"column",children:[o.jsxs(v,{px:"$dimension-1000",variant:"H1",my:"auto",as:"h2",children:[_.capitalize(r)," Emphasis"]}),o.jsxs(e.div,{px:"$dimension-1000",borderBottomWidth:"1px",borderBottomColor:"$color-border-neutral-subtle",children:[o.jsx(v,{variant:"H2",as:"h3",py:"$dimension-500",children:"Intent"}),o.jsx(V,{states:y,gap:"$dimension-500",flexBasis:"$dimension-100"}),o.jsx(e.div,{py:"$dimension-500",display:"flex",flexWrap:"wrap",gap:"$dimension-500",children:y.map(n=>o.jsxs(e.div,{display:"flex",flexDirection:"column",gap:"$dimension-400",flexBasis:"100",flexShrink:"0",flexGrow:"1",children:[o.jsx(a,{intent:n,emphasis:r,label:"Badge Text"}),o.jsx(a,{intent:n,emphasis:r,icon:"16-bolt"})]},n))})]}),o.jsxs(e.div,{px:"$dimension-1000",w:"100%",children:[o.jsx(v,{variant:"H2",as:"h3",py:"$dimension-500",children:"Appearance"}),o.jsx(e.div,{children:o.jsx(e.div,{py:"$dimension-500",display:"flex",gap:"48px",flexWrap:"wrap",children:T.map(n=>o.jsxs(e.div,{display:"flex",gap:"72px",my:"20",flexDirection:"column",children:[o.jsx(E,{state:n}),o.jsxs(e.div,{display:"flex",flexWrap:"wrap",flexDirection:"column",gap:"$dimension-400",flexShrink:"0",children:[o.jsx(a,{appearance:n,emphasis:r,label:"Badge Text"}),o.jsx(a,{appearance:n,emphasis:r,icon:"16-bolt"})]},n)]}))})})]})]},r))}),eo={title:"Badge",component:a,tags:["autodocs"],argTypes:{emphasis:{control:{type:"select",options:["high","medium","low"]}}},parameters:{docs:{description:{component:"A small, visually distinct element used to display numbers, small pieces of information, or statuses. Badges are often paired with icons or other components to convey relevant information or updates."},page:()=>o.jsx(D,{docs:"https://docs.tetrisly.com/components/list/badge",children:o.jsx(A,{})})}}},s={args:{intent:"informative",emphasis:"high",label:"Label"}},g={args:{appearance:"blue",icon:"16-bolt"}},p={args:{intent:"informative",label:"Label",beforeIcon:"16-bolt",afterIcon:"16-bolt"}};var S,k,f;s.parameters={...s.parameters,docs:{...(S=s.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    intent: 'informative',
    emphasis: 'high',
    label: 'Label'
  }
}`,...(f=(k=s.parameters)==null?void 0:k.docs)==null?void 0:f.source}}};var w,C,x;g.parameters={...g.parameters,docs:{...(w=g.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    appearance: 'blue',
    icon: '16-bolt'
  }
}`,...(x=(C=g.parameters)==null?void 0:C.docs)==null?void 0:x.source}}};var j,I,q;p.parameters={...p.parameters,docs:{...(j=p.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    intent: 'informative',
    label: 'Label',
    beforeIcon: '16-bolt',
    afterIcon: '16-bolt'
  }
}`,...(q=(I=p.parameters)==null?void 0:I.docs)==null?void 0:q.source}}};const ro=["Default","Icon","LabelIcons"];export{s as Default,g as Icon,p as LabelIcons,ro as __namedExportsOrder,eo as default};