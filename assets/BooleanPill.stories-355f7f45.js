import{j as e}from"./jsx-runtime-ffb262ed.js";import{R}from"./tetrisly-icons.es-12549e88.js";import{r as y}from"./index-76fb7be0.js";import{m as T,l as z}from"./mergeConfigWithCustom-aec35d44.js";import{A as O}from"./Avatar-cbae65d6.js";import{t as i}from"./TetrislyProvider-fe6220a9.js";import{S as v}from"./SectionHeader-0e90dab1.js";import{T as G}from"./TetDocs-759de7ff.js";import"./_commonjsHelpers-de833af9.js";import"./index-e1ed029a.js";import"./iframe-e64c4104.js";import"../sb-preview/runtime.js";import"./index-d3ea75b5.js";import"./index-11d98b33.js";import"./index-8fd8397b.js";import"./index-356e4a49.js";const J={display:"inline-flex",justifyContent:"center",alignItems:"center",textAlign:"center",whiteSpace:"nowrap",h:"$size-small",padding:"$space-component-padding-xSmall $space-component-padding-medium",gap:"$space-component-gap-small",borderRadius:"$border-radius-large",color:"$color-content-primary",borderWidth:"$border-width-small",borderColor:"$color-transparent",transition:!0,transitionDuration:200,outline:{focus:"solid"},outlineColor:{_:"$color-interaction-focus-default",focus:"$color-interaction-focus-default"},outlineWidth:{focus:"$border-width-focus"},outlineOffset:1,hasAvatar:{pl:"$space-component-padding-xSmall"},isSelected:{pl:"$space-component-padding-small",backgroundColor:"$color-interaction-background-formField",borderColor:{_:"$color-interaction-border-neutral-normal",hover:"$color-interaction-border-neutral-hover",active:"$color-interaction-border-neutral-active"}},state:{default:{primary:{backgroundColor:{_:"$color-interaction-neutral-subtle-normal",hover:"$color-interaction-neutral-subtle-hover",active:"$color-interaction-neutral-subtle-active"}},inverted:{backgroundColor:"$color-interaction-background-formField",borderColor:{_:"$color-interaction-border-neutral-normal",hover:"$color-interaction-border-neutral-hover",active:"$color-interaction-border-neutral-active"}}},disabled:{primary:{backgroundColor:"$color-interaction-neutral-subtle-normal",opacity:"$opacity-disabled",pointerEvents:"none"},inverted:{backgroundColor:"$color-interaction-background-formField",borderColor:"$color-interaction-border-neutral-normal",opacity:"$opacity-disabled",pointerEvents:"none"}}}},K=({state:a,isInverted:r,isSelected:o,hasAvatar:s,custom:t})=>{const{state:l,...n}=T({defaultConfig:J,custom:t}),x=r?l[a].inverted:l[a].primary,h=s?n.hasAvatar:{},c=o?n.isSelected:{};return{container:{...n,...x,...h,...c}}},b=({state:a="default",isSelected:r=!1,isInverted:o=!1,tabIndex:s=0,avatar:t,text:l,custom:n,...x})=>{const h=y.useMemo(()=>K({state:a,custom:n,isSelected:r,isInverted:o,hasAvatar:!!t}),[n,o,a,t,r]),c=y.useMemo(()=>t&&("image"in t?{img:{src:t.image,alt:"avatar"},appearance:"image"}:{initials:t.initials,appearance:t.appearance}),[t]);return e.jsxs(i.span,{tabIndex:s,"data-state":a,"data-testid":"boolean-pill",...h.container,...x,children:[r&&e.jsx(R,{"data-testid":"boolean-pill-checkmark",name:"20-check-large"}),!!c&&e.jsx(O,{emphasis:"low",shape:"rounded",size:"xSmall","data-testid":"boolean-pill-avatar",...c}),l]})};try{b.displayName="BooleanPill",b.__docgenInfo={description:"",displayName:"BooleanPill",props:{text:{defaultValue:null,description:"",name:"text",required:!0,type:{name:"string"}},state:{defaultValue:{value:"default"},description:"",name:"state",required:!1,type:{name:"enum",value:[{value:'"disabled"'},{value:'"default"'}]}},isSelected:{defaultValue:{value:"false"},description:"",name:"isSelected",required:!1,type:{name:"boolean"}},isInverted:{defaultValue:{value:"false"},description:"",name:"isInverted",required:!1,type:{name:"boolean"}},tabIndex:{defaultValue:{value:"0"},description:"",name:"tabIndex",required:!1,type:{name:"number"}},custom:{defaultValue:null,description:"",name:"custom",required:!1,type:{name:"BooleanPillConfig"}},avatar:{defaultValue:null,description:"",name:"avatar",required:!1,type:{name:'{ appearance?: "image"; image: string; } | { appearance: "blue" | "green" | "grey" | "red" | "orange" | "raspberry" | "magenta" | "purple" | "grape" | "violet" | "cyan" | "teal" | "aquamarine" | "emerald"; initials: string; }'}}}}}catch{}const S=["default","disabled"],L=[!1,!0],Q=[!1,!0],U=[{id:"0",text:"Value",onChange:()=>{}},{id:"1",text:"Value",avatar:{initials:"M"}},{id:"2",text:"Value",avatar:{image:"https://thispersondoesnotexist.com/"}}],$=()=>e.jsx(e.Fragment,{children:S.map(a=>e.jsxs(i.section,{display:"flex",pt:"$dimension-500",flexDirection:"column",children:[e.jsx(v,{variant:"Hero",as:"h2",px:"$dimension-1000",children:z.startCase(a)}),L.map(r=>e.jsxs(i.div,{display:"flex",flexDirection:"column",bg:r?"$color-background-neutral-subtle":void 0,children:[e.jsx(v,{variant:"H2",as:"h3",px:"$dimension-1000",py:"$dimension-500",borderBottom:"$color-neutral-strong",children:r?"Inverted":"Primary"}),Q.map(o=>e.jsxs(i.div,{px:"$dimension-1000",pb:"$dimension-500",children:[e.jsxs(v,{variant:"H3",as:"h4",pt:"$dimension-500",children:["Selected: ",String(o)]}),e.jsx(i.div,{display:"flex",flexBasis:"180px",flexGrow:"1",flexShrink:"0",alignItems:"flex-start",flexWrap:"wrap",justifyContent:"flex-start",flexDirection:"row",gap:"$dimension-300",py:"$dimension-500",children:U.map(({id:s,...t})=>e.jsx(b,{state:a,isInverted:r,isSelected:o,...t},s))})]},`${S}-${r}-${o}`))]},`${a}-${r}`))]},a))});try{$.displayName="BooleanPillDocs",$.__docgenInfo={description:"",displayName:"BooleanPillDocs",props:{}}}catch{}const ue={title:"BooleanPill",component:b,tags:["autodocs"],argTypes:{},args:{state:"default",text:"Value"},parameters:{docs:{description:{component:"A compact, rounded indicator used to represent tags, categories, or statuses. Pills often include text and/or icons and can be interactive, such as allowing users to remove a filter or tag."},page:()=>e.jsx(G,{docs:"https://docs.tetrisly.com/components/in-progress/pill",children:e.jsx($,{})})}}},d={args:{state:"default"}},p={args:{state:"default",avatar:{image:"https://thispersondoesnotexist.com/"}}},m={args:{state:"disabled"}},u={args:{isSelected:!0}},g={args:{isSelected:!0,state:"disabled"}},f={args:{isSelected:!0,avatar:{appearance:"magenta",initials:"M"}}};var _,j,C;d.parameters={...d.parameters,docs:{...(_=d.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    state: 'default'
  }
}`,...(C=(j=d.parameters)==null?void 0:j.docs)==null?void 0:C.source}}};var D,A,k;p.parameters={...p.parameters,docs:{...(D=p.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: {
    state: 'default',
    avatar: {
      image: 'https://thispersondoesnotexist.com/'
    }
  }
}`,...(k=(A=p.parameters)==null?void 0:A.docs)==null?void 0:k.source}}};var w,B,P;m.parameters={...m.parameters,docs:{...(w=m.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    state: 'disabled'
  }
}`,...(P=(B=m.parameters)==null?void 0:B.docs)==null?void 0:P.source}}};var V,I,q;u.parameters={...u.parameters,docs:{...(V=u.parameters)==null?void 0:V.docs,source:{originalSource:`{
  args: {
    isSelected: true
  }
}`,...(q=(I=u.parameters)==null?void 0:I.docs)==null?void 0:q.source}}};var W,E,M;g.parameters={...g.parameters,docs:{...(W=g.parameters)==null?void 0:W.docs,source:{originalSource:`{
  args: {
    isSelected: true,
    state: 'disabled'
  }
}`,...(M=(E=g.parameters)==null?void 0:E.docs)==null?void 0:M.source}}};var F,H,N;f.parameters={...f.parameters,docs:{...(F=f.parameters)==null?void 0:F.docs,source:{originalSource:`{
  args: {
    isSelected: true,
    avatar: {
      appearance: 'magenta',
      initials: 'M'
    }
  }
}`,...(N=(H=f.parameters)==null?void 0:H.docs)==null?void 0:N.source}}};const ge=["Default","DefaultWithAvatar","Disabled","Selected","DisabledAndSelected","SelectedWithAvatar"];export{d as Default,p as DefaultWithAvatar,m as Disabled,g as DisabledAndSelected,u as Selected,f as SelectedWithAvatar,ge as __namedExportsOrder,ue as default};
