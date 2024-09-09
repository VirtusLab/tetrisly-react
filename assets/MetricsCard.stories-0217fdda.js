import{j as e}from"./jsx-runtime-ffb262ed.js";import{M as d}from"./MetricsCard-bf3b6092.js";import{S as u}from"./SectionHeader-0e90dab1.js";import{t as r}from"./TetrislyProvider-fe6220a9.js";import{T as f}from"./TetDocs-7383a1aa.js";import"./index-76fb7be0.js";import"./_commonjsHelpers-de833af9.js";import"./tetrisly-icons.es-12549e88.js";import"./mergeConfigWithCustom-aec35d44.js";import"./InlineMetrics-94946443.js";import"./Label-61eb41d0.js";import"./Button-2de68136.js";import"./index-516c723e.js";import"./Tooltip-2817a465.js";import"./index-d3ea75b5.js";import"./index-ea07a585.js";import"./iframe-a3ca221c.js";import"../sb-preview/runtime.js";import"./index-11d98b33.js";import"./index-8fd8397b.js";import"./index-356e4a49.js";const h=["None","Positive","Negative"],x=["Top","Left"],g={None:"Neutral",Positive:"Positive",Negative:"Negative"},v=()=>e.jsx(r.section,{display:"flex",flexWrap:"wrap",justifyContent:"center",children:x.map(n=>e.jsxs(e.Fragment,{children:[e.jsxs(u,{variant:"H1",as:"h2",px:"$dimension-1000",py:"$dimension-1000",children:[n," Icon Position"]}),h.map(o=>e.jsxs(r.section,{display:"flex",flexDirection:"column",px:"$dimension-300",py:"$dimension-300",my:"auto",children:[e.jsxs(r.div,{color:"$color-content-secondary",text:"$typo-body-large",borderBottom:"1px solid",borderColor:"$color-border-default",children:["Intent: ",g[o]]}),e.jsx(r.div,{display:"flex",flexBasis:"100px",flexShrink:"0",flexGrow:"1",mt:40,children:e.jsx(d,{trend:o,trendValue:"24%",metrics:"$123.12",label:"Total Earnings",iconPosition:n,hasIcon:!0,hasTrend:!0})},o)]},o))]}))}),F={title:"Metrics / MetricsCard",component:d,tags:["autodocs"],args:{},parameters:{backgrounds:{},docs:{description:{component:"A set of several grouped components that displays numerical data, such as, for example, key performance indicators (KPIs). Metrics provide users with a clear, visual representation of essential statistics or progress."},page:()=>e.jsx(f,{docs:"https://docs.tetrisly.com/components/in-progress/metrics",children:e.jsx(v,{})})}}},t={args:{trend:"Positive",trendValue:"+24%",metrics:"$123.12",label:"Total Earnings",hasIcon:!0,hasMoreIcon:!0,hasTrend:!0,iconPosition:"Top"}},s={args:{trend:"Negative",trendValue:"-24%",metrics:"$123.12",label:"Total Earnings",hasIcon:!0,hasMoreIcon:!0,hasTrend:!0,iconPosition:"Left"}};var i,a,c;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    trend: 'Positive',
    trendValue: '+24%',
    metrics: '$123.12',
    label: 'Total Earnings',
    hasIcon: true,
    hasMoreIcon: true,
    hasTrend: true,
    iconPosition: 'Top'
  }
}`,...(c=(a=t.parameters)==null?void 0:a.docs)==null?void 0:c.source}}};var m,p,l;s.parameters={...s.parameters,docs:{...(m=s.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    trend: 'Negative',
    trendValue: '-24%',
    metrics: '$123.12',
    label: 'Total Earnings',
    hasIcon: true,
    hasMoreIcon: true,
    hasTrend: true,
    iconPosition: 'Left'
  }
}`,...(l=(p=s.parameters)==null?void 0:p.docs)==null?void 0:l.source}}};const G=["Default","IconPositionLeft"];export{t as Default,s as IconPositionLeft,G as __namedExportsOrder,F as default};
