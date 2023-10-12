import{j as o}from"./jsx-runtime-ffb262ed.js";import{R as $}from"./tetrisly-icons.es-3ae3ef26.js";import{r as _}from"./index-76fb7be0.js";import{m as V,l as D,T as E}from"./TetDocs-d097c0ab.js";import{t as e}from"./TetrislyProvider-e15ac01a.js";import{S as v}from"./SectionHeader-922ceba2.js";import{S as y}from"./States-73889586.js";import{a as S}from"./Appearance-35507110.js";import"./_commonjsHelpers-de833af9.js";import"./index-18143201.js";import"./iframe-0fecf2e6.js";import"../sb-preview/runtime.js";import"./index-ffc7e5ff.js";import"./index-d37d4223.js";import"./index-356e4a49.js";const H={display:"flex",w:"fit-content",h:"$size-xSmall",borderRadius:"$border-radius-medium",flexShrink:0,alignItems:"center",gap:"$space-component-gap-xSmall",p:"$space-component-padding-xSmall",hasLabel:{px:"$space-component-padding-small"},text:"$typo-body-medium",appearance:{blue:{emphasis:{high:{color:"$color-nonSemantic-white-content-primary",backgroundColor:"$color-nonSemantic-blue-background-strong"},medium:{color:"$color-nonSemantic-blue-content-primary",backgroundColor:"$color-nonSemantic-blue-background-muted"},low:{color:"$color-nonSemantic-grey-content-primary",backgroundColor:"$color-nonSemantic-blue-background-onSubtle"}}},green:{emphasis:{high:{color:"$color-nonSemantic-white-content-primary",backgroundColor:"$color-nonSemantic-green-background-strong"},medium:{color:"$color-nonSemantic-green-content-primary",backgroundColor:"$color-nonSemantic-green-background-muted"},low:{color:"$color-nonSemantic-grey-content-primary",backgroundColor:"$color-nonSemantic-green-background-onSubtle"}}},grey:{emphasis:{high:{color:"$color-nonSemantic-white-content-primary",backgroundColor:"$color-nonSemantic-grey-background-strong"},medium:{color:"$color-nonSemantic-grey-content-primary",backgroundColor:"$color-nonSemantic-grey-background-muted"},low:{color:"$color-nonSemantic-grey-content-primary",backgroundColor:"$color-nonSemantic-grey-background-onSubtle"}}},red:{emphasis:{high:{color:"$color-nonSemantic-white-content-primary",backgroundColor:"$color-nonSemantic-red-background-strong"},medium:{color:"$color-nonSemantic-red-content-primary",backgroundColor:"$color-nonSemantic-red-background-muted"},low:{color:"$color-nonSemantic-grey-content-primary",backgroundColor:"$color-nonSemantic-red-background-onSubtle"}}},orange:{emphasis:{high:{color:"$color-nonSemantic-grey-content-primary",backgroundColor:"$color-nonSemantic-orange-background-strong"},medium:{color:"$color-nonSemantic-orange-content-primary",backgroundColor:"$color-nonSemantic-orange-background-muted"},low:{color:"$color-nonSemantic-grey-content-primary",backgroundColor:"$color-nonSemantic-orange-background-onSubtle"}}},raspberry:{emphasis:{high:{color:"$color-nonSemantic-white-content-primary",backgroundColor:"$color-nonSemantic-raspberry-background-strong"},medium:{color:"$color-nonSemantic-raspberry-content-primary",backgroundColor:"$color-nonSemantic-raspberry-background-muted"},low:{color:"$color-nonSemantic-grey-content-primary",backgroundColor:"$color-nonSemantic-raspberry-background-onSubtle"}}},magenta:{emphasis:{high:{color:"$color-nonSemantic-white-content-primary",backgroundColor:"$color-nonSemantic-magenta-background-strong"},medium:{color:"$color-nonSemantic-magenta-content-primary",backgroundColor:"$color-nonSemantic-magenta-background-muted"},low:{color:"$color-nonSemantic-grey-content-primary",backgroundColor:"$color-nonSemantic-magenta-background-onSubtle"}}},purple:{emphasis:{high:{color:"$color-nonSemantic-white-content-primary",backgroundColor:"$color-nonSemantic-purple-background-strong"},medium:{color:"$color-nonSemantic-purple-content-primary",backgroundColor:"$color-nonSemantic-purple-background-muted"},low:{color:"$color-nonSemantic-grey-content-primary",backgroundColor:"$color-nonSemantic-purple-background-onSubtle"}}},grape:{emphasis:{high:{color:"$color-nonSemantic-white-content-primary",backgroundColor:"$color-nonSemantic-grape-background-strong"},medium:{color:"$color-nonSemantic-grape-content-primary",backgroundColor:"$color-nonSemantic-grape-background-muted"},low:{color:"$color-nonSemantic-grey-content-primary",backgroundColor:"$color-nonSemantic-grape-background-onSubtle"}}},violet:{emphasis:{high:{color:"$color-nonSemantic-white-content-primary",backgroundColor:"$color-nonSemantic-violet-background-strong"},medium:{color:"$color-nonSemantic-violet-content-primary",backgroundColor:"$color-nonSemantic-violet-background-muted"},low:{color:"$color-nonSemantic-grey-content-primary",backgroundColor:"$color-nonSemantic-violet-background-onSubtle"}}},cyan:{emphasis:{high:{color:"$color-nonSemantic-white-content-primary",backgroundColor:"$color-nonSemantic-cyan-background-strong"},medium:{color:"$color-nonSemantic-cyan-content-primary",backgroundColor:"$color-nonSemantic-cyan-background-muted"},low:{color:"$color-nonSemantic-grey-content-primary",backgroundColor:"$color-nonSemantic-cyan-background-onSubtle"}}},teal:{emphasis:{high:{color:"$color-nonSemantic-white-content-primary",backgroundColor:"$color-nonSemantic-teal-background-strong"},medium:{color:"$color-nonSemantic-teal-content-primary",backgroundColor:"$color-nonSemantic-teal-background-muted"},low:{color:"$color-nonSemantic-grey-content-primary",backgroundColor:"$color-nonSemantic-teal-background-onSubtle"}}},aquamarine:{emphasis:{high:{color:"$color-nonSemantic-white-content-primary",backgroundColor:"$color-nonSemantic-aquamarine-background-strong"},medium:{color:"$color-nonSemantic-aquamarine-content-primary",backgroundColor:"$color-nonSemantic-aquamarine-background-muted"},low:{color:"$color-nonSemantic-grey-content-primary",backgroundColor:"$color-nonSemantic-aquamarine-background-onSubtle"}}},emerald:{emphasis:{high:{color:"$color-nonSemantic-white-content-primary",backgroundColor:"$color-nonSemantic-emerald-background-strong"},medium:{color:"$color-nonSemantic-emerald-content-primary",backgroundColor:"$color-nonSemantic-emerald-background-muted"},low:{color:"$color-nonSemantic-grey-content-primary",backgroundColor:"$color-nonSemantic-emerald-background-onSubtle"}}},outline:{emphasis:{high:{border:"1px solid",borderColor:"$color-nonSemantic-grey-border-strong",color:"$color-nonSemantic-grey-content-primary",backgroundColor:"$color-nonSemantic-white-background-strong"},medium:{border:"1px solid",borderColor:"$color-nonSemantic-grey-border-strong",color:"$color-nonSemantic-grey-content-primary",backgroundColor:"$color-nonSemantic-white-background-strong"},low:{border:"1px solid",borderColor:"$color-nonSemantic-grey-border-strong",color:"$color-nonSemantic-grey-content-primary",backgroundColor:"$color-nonSemantic-white-background-strong"}}}},intent:{neutral:{emphasis:{high:{color:"$color-content-primary-inverted",backgroundColor:"$color-background-neutral-strong"},medium:{color:"$color-content-primary",backgroundColor:"$color-background-neutral-muted"},low:{color:"$color-nonSemantic-grey-content-primary",backgroundColor:"$color-background-neutral-onSubtle"}}},informative:{emphasis:{high:{color:"$color-content-primary-inverted",backgroundColor:"$color-background-informative-strong"},medium:{color:"$color-content-informative-primary",backgroundColor:"$color-background-informative-muted"},low:{color:"$color-nonSemantic-grey-content-primary",backgroundColor:"$color-background-informative-onSubtle"}}},positive:{emphasis:{high:{color:"$color-content-primary-inverted",backgroundColor:"$color-background-positive-strong"},medium:{color:"$color-content-positive-primary",backgroundColor:"$color-background-positive-muted"},low:{color:"$color-nonSemantic-grey-content-primary",backgroundColor:"$color-background-positive-onSubtle"}}},warning:{emphasis:{high:{color:"$color-content-primary",backgroundColor:"$color-background-warning-strong"},medium:{color:"$color-content-warning-primary",backgroundColor:"$color-background-warning-muted"},low:{color:"$color-nonSemantic-grey-content-primary",backgroundColor:"$color-background-warning-onSubtle"}}},negative:{emphasis:{high:{color:"$color-content-primary-inverted",backgroundColor:"$color-background-negative-strong"},medium:{color:"$color-content-negative-primary",backgroundColor:"$color-background-negative-muted"},low:{color:"$color-nonSemantic-grey-content-primary",backgroundColor:"$color-background-negative-onSubtle"}}}},innerElements:{label:{},iconContainer:{}}},R=(r,n,m,b,c)=>{const{innerElements:t,hasLabel:i,intent:u,appearance:h,...d}=V({defaultConfig:H,custom:m}),l=c?h[c].emphasis[n]:u[r].emphasis[n];return{container:{...d,...l,...b?i:{}},iconContainer:t.iconContainer,label:t.label}},a=({appearance:r,intent:n="neutral",emphasis:m="high",icon:b,beforeIcon:c=b,afterIcon:t,label:i,custom:u,...h})=>{const d=!!i,l=_.useMemo(()=>R(n,m,u,d,r),[u,n,m,d,r]);return o.jsxs(e.div,{...l.container,"data-testid":"badge",...h,children:[!!c&&o.jsx(e.span,{...l.iconContainer,"data-testid":"badge-iconContainer",children:o.jsx($,{name:c,"data-testid":"badge-icon"})}),!!i&&o.jsx(e.span,{...l.label,"data-testid":"badge-label",children:i}),!!t&&o.jsx(e.span,{...l.iconContainer,"data-testid":"badge-iconContainer",children:o.jsx($,{name:t,"data-testid":"badge-icon"})})]})};try{a.displayName="Badge",a.__docgenInfo={description:"",displayName:"Badge",props:{appearance:{defaultValue:null,description:"",name:"appearance",required:!1,type:{name:"enum",value:[{value:'"outline"'},{value:'"red"'},{value:'"green"'},{value:'"orange"'},{value:'"grey"'},{value:'"blue"'},{value:'"aquamarine"'},{value:'"cyan"'},{value:'"magenta"'},{value:'"purple"'},{value:'"teal"'},{value:'"violet"'},{value:'"raspberry"'},{value:'"grape"'},{value:'"emerald"'}]}},intent:{defaultValue:{value:"neutral"},description:"",name:"intent",required:!1,type:{name:"enum",value:[{value:'"neutral"'},{value:'"informative"'},{value:'"warning"'},{value:'"negative"'},{value:'"positive"'}]}},label:{defaultValue:null,description:"",name:"label",required:!1,type:{name:"string"}},beforeIcon:{defaultValue:null,description:"",name:"beforeIcon",required:!1,type:{name:"enum",value:[{value:'"16-alert-full"'},{value:'"16-arrowhead-down-small"'},{value:'"16-arrowhead-down"'},{value:'"16-arrowhead-left-small"'},{value:'"16-arrowhead-left"'},{value:'"16-arrowhead-right-small"'},{value:'"16-arrowhead-right"'},{value:'"16-arrowhead-top-small"'},{value:'"16-arrowhead-top"'},{value:'"16-bolt"'},{value:'"16-check"'},{value:'"16-chevron-down"'},{value:'"16-chevron-left"'},{value:'"16-chevron-right"'},{value:'"16-chevron-top"'},{value:'"16-close"'},{value:'"16-dot"'},{value:'"16-info"'},{value:'"16-minus"'},{value:'"16-plus"'}]}},afterIcon:{defaultValue:null,description:"",name:"afterIcon",required:!1,type:{name:"enum",value:[{value:'"16-alert-full"'},{value:'"16-arrowhead-down-small"'},{value:'"16-arrowhead-down"'},{value:'"16-arrowhead-left-small"'},{value:'"16-arrowhead-left"'},{value:'"16-arrowhead-right-small"'},{value:'"16-arrowhead-right"'},{value:'"16-arrowhead-top-small"'},{value:'"16-arrowhead-top"'},{value:'"16-bolt"'},{value:'"16-check"'},{value:'"16-chevron-down"'},{value:'"16-chevron-left"'},{value:'"16-chevron-right"'},{value:'"16-chevron-top"'},{value:'"16-close"'},{value:'"16-dot"'},{value:'"16-info"'},{value:'"16-minus"'},{value:'"16-plus"'}]}},icon:{defaultValue:null,description:"",name:"icon",required:!1,type:{name:"enum",value:[{value:'"16-alert-full"'},{value:'"16-arrowhead-down-small"'},{value:'"16-arrowhead-down"'},{value:'"16-arrowhead-left-small"'},{value:'"16-arrowhead-left"'},{value:'"16-arrowhead-right-small"'},{value:'"16-arrowhead-right"'},{value:'"16-arrowhead-top-small"'},{value:'"16-arrowhead-top"'},{value:'"16-bolt"'},{value:'"16-check"'},{value:'"16-chevron-down"'},{value:'"16-chevron-left"'},{value:'"16-chevron-right"'},{value:'"16-chevron-top"'},{value:'"16-close"'},{value:'"16-dot"'},{value:'"16-info"'},{value:'"16-minus"'},{value:'"16-plus"'}]}},emphasis:{defaultValue:{value:"high"},description:"",name:"emphasis",required:!1,type:{name:"enum",value:[{value:'"low"'},{value:'"high"'},{value:'"medium"'}]}},custom:{defaultValue:null,description:"",name:"custom",required:!1,type:{name:"BadgeConfig"}}}}}catch{}const k=["neutral","informative","positive","warning","negative"],T=["high","medium","low"],A=()=>o.jsx(o.Fragment,{children:T.map(r=>o.jsxs(e.section,{display:"flex",padding:"40px 0px",flexDirection:"column",children:[o.jsxs(v,{px:"$dimension-1000",variant:"H1",my:"auto",as:"h2",children:[D.capitalize(r)," Emphasis"]}),o.jsxs(e.div,{px:"$dimension-1000",borderBottomWidth:"1px",borderBottomColor:"$color-border-neutral-subtle",children:[o.jsx(v,{variant:"H2",as:"h3",py:"$dimension-500",children:"Intent"}),o.jsx(y,{states:k,gap:"$dimension-500",flexBasis:"$dimension-100"}),o.jsx(e.div,{py:"$dimension-500",display:"flex",gap:"$dimension-500",children:k.map(n=>o.jsxs(e.div,{display:"flex",flexDirection:"column",gap:"$dimension-400",flexBasis:"100",flexShrink:"0",flexGrow:"1",children:[o.jsx(a,{intent:n,emphasis:r,label:"Badge Text"}),o.jsx(a,{intent:n,emphasis:r,icon:"16-bolt"})]},n))})]}),o.jsxs(e.div,{px:"$dimension-1000",children:[o.jsx(v,{variant:"H2",as:"h3",py:"$dimension-500",children:"Appearance"}),o.jsxs(e.div,{overflowX:"scroll",children:[o.jsx(y,{states:S,gap:"$dimension-500",itemWidth:"96px"}),o.jsx(e.div,{py:"$dimension-500",display:"flex",gap:"39px",children:S.map(n=>o.jsxs(e.div,{display:"flex",flexDirection:"column",gap:"$dimension-400",flexShrink:"0",children:[o.jsx(a,{appearance:n,emphasis:r,label:"Badge Text"}),o.jsx(a,{appearance:n,emphasis:r,icon:"16-bolt"})]},n))})]})]})]},r))}),oo={title:"Badge",component:a,tags:["autodocs"],parameters:{docs:{description:{component:"A small, visually distinct element used to display numbers, small pieces of information, or statuses. Badges are often paired with icons or other components to convey relevant information or updates."},page:()=>o.jsx(E,{docs:"https://docs.tetrisly.com/components/list/badge",children:o.jsx(A,{})})}}},s={args:{intent:"informative",emphasis:"high",label:"Label"}},g={args:{appearance:"blue",icon:"16-bolt"}},p={args:{intent:"informative",label:"Label",beforeIcon:"16-bolt",afterIcon:"16-bolt"}};var f,w,C;s.parameters={...s.parameters,docs:{...(f=s.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    intent: 'informative',
    emphasis: 'high',
    label: 'Label'
  }
}`,...(C=(w=s.parameters)==null?void 0:w.docs)==null?void 0:C.source}}};var x,j,I;g.parameters={...g.parameters,docs:{...(x=g.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    appearance: 'blue',
    icon: '16-bolt'
  }
}`,...(I=(j=g.parameters)==null?void 0:j.docs)==null?void 0:I.source}}};var q,B,L;p.parameters={...p.parameters,docs:{...(q=p.parameters)==null?void 0:q.docs,source:{originalSource:`{
  args: {
    intent: 'informative',
    label: 'Label',
    beforeIcon: '16-bolt',
    afterIcon: '16-bolt'
  }
}`,...(L=(B=p.parameters)==null?void 0:B.docs)==null?void 0:L.source}}};const no=["Default","Icon","LabelIcons"];export{s as Default,g as Icon,p as LabelIcons,no as __namedExportsOrder,oo as default};
//# sourceMappingURL=Badge.stories-9f4a8dc5.js.map
