import{j as e}from"./jsx-runtime-ffb262ed.js";import{R as W}from"./tetrisly-icons.es-12549e88.js";import{r as A}from"./index-76fb7be0.js";import{m as Ce,l as je}from"./mergeConfigWithCustom-aec35d44.js";import{A as _e}from"./Avatar-cbae65d6.js";import{t as o}from"./TetrislyProvider-fe6220a9.js";import{S as V}from"./SectionHeader-0e90dab1.js";import{T as We}from"./TetDocs-f375e9a7.js";import"./_commonjsHelpers-de833af9.js";import"./index-777e8637.js";import"./iframe-5f3f7e5a.js";import"../sb-preview/runtime.js";import"./index-d3ea75b5.js";import"./index-11d98b33.js";import"./index-8fd8397b.js";import"./index-356e4a49.js";const Ae={display:"inline-flex",justifyContent:"center",alignItems:"center",text:"$typo-body-medium",textAlign:"center",whiteSpace:"nowrap",h:"$size-small",padding:"$space-component-padding-xSmall $space-component-padding-small",pl:"$space-component-padding-medium",gap:"$space-component-gap-small",borderRadius:"$border-radius-large",color:"$color-content-primary",borderWidth:"$border-width-small",borderColor:"$color-transparent",transition:!0,transitionDuration:200,outline:{focus:"solid"},outlineColor:{_:"$color-interaction-focus-default",focus:"$color-interaction-focus-default"},outlineWidth:{focus:"$border-width-focus"},outlineOffset:1,hasIcon:{pl:"$space-component-padding-small"},hasPrefix:{pl:"$space-component-padding-medium"},hasAvatar:{pl:"$space-component-padding-xSmall"},isSelected:{backgroundColor:"$color-interaction-background-formField",borderColor:{_:"$color-interaction-border-neutral-normal",hover:"$color-interaction-border-neutral-hover",active:"$color-interaction-border-neutral-active"}},innerElements:{icon:{color:"$color-content-secondary"},actionIcon:{color:"$color-action-neutral-normal"},prefix:{text:"$typo-body-medium",color:"$color-content-secondary"},textContainer:{display:"inline-flex",alignItems:"center",gap:"$space-component-gap-xSmall"},contentContainer:{xSmall:{display:"inline-flex",alignItems:"center",gap:"$space-component-gap-xSmall"},small:{display:"inline-flex",alignItems:"center",gap:"$space-component-gap-small"}}},state:{default:{primary:{backgroundColor:{_:"$color-interaction-neutral-subtle-normal",hover:"$color-interaction-neutral-subtle-hover",active:"$color-interaction-neutral-subtle-active"}},inverted:{backgroundColor:"$color-interaction-background-formField",borderColor:{_:"$color-interaction-border-neutral-normal",hover:"$color-interaction-border-neutral-hover",active:"$color-interaction-border-neutral-active"}}},disabled:{primary:{backgroundColor:"$color-interaction-neutral-subtle-normal",opacity:"$opacity-disabled",pointerEvents:"none"},inverted:{backgroundColor:"$color-interaction-background-formField",borderColor:"$color-interaction-border-neutral-normal",opacity:"$opacity-disabled",pointerEvents:"none"}}}},Ve=({state:t,isInverted:a,isSelected:n,beforeComponent:i,prefix:r,custom:j})=>{const{state:c,innerElements:{icon:d,actionIcon:_,textContainer:s,contentContainer:l,prefix:m},...p}=Ce({defaultConfig:Ae,custom:j}),he=a?c[t].inverted:c[t].primary,be=!!r,D=!!i,k=D&&i.type==="avatar",ye=D&&i.type==="icon",ve=k?p.hasAvatar:{},$e=be?p.hasPrefix:{},Se=ye?p.hasIcon:{},Ie=n?p.isSelected:{},Pe=k?l.small:l.xSmall;return{container:{...p,...he,...ve,...$e,...Se,...Ie},icon:d,actionIcon:_,textContainer:s,prefix:m,contentContainer:Pe}},C=({state:t="default",isSelected:a=!1,isInverted:n=!1,tabIndex:i=0,beforeComponent:r,text:j,prefix:c,custom:d,..._})=>{const s=A.useMemo(()=>Ve({state:t,custom:d,prefix:c,isSelected:a,isInverted:n,beforeComponent:r}),[d,n,t,r,a,c]),l=A.useMemo(()=>r&&r.type==="avatar"&&("image"in r.props?{img:{src:r.props.image,alt:"avatar"},appearance:"image"}:{initials:r.props.initials,appearance:r.props.appearance}),[r]),m=A.useMemo(()=>r&&r.type==="icon"&&r.props,[r]);return e.jsxs(o.span,{tabIndex:i,"data-state":t,"data-testid":"selectable-pill",...s.container,..._,children:[!!m&&e.jsx(o.span,{...s.icon,children:e.jsx(W,{"data-testid":"selectable-pill-icon",name:m.name})}),e.jsxs(o.div,{...s.contentContainer,children:[!!c&&e.jsxs(o.span,{...s.prefix,children:[c,":"]}),!!l&&e.jsx(_e,{emphasis:"low",shape:"rounded",size:"xSmall","data-testid":"selectable-pill-avatar",...l}),e.jsxs(o.div,{...s.textContainer,children:[j,e.jsx(o.span,{...s.actionIcon,children:a?e.jsx(W,{"data-testid":"selectable-pill-selected-icon",name:"20-close"}):e.jsx(W,{"data-testid":"selectable-pill-unselected-icon",name:"20-chevron-down-small"})})]})]})]})};try{C.displayName="SelectablePill",C.__docgenInfo={description:"",displayName:"SelectablePill",props:{text:{defaultValue:null,description:"",name:"text",required:!0,type:{name:"string"}},prefix:{defaultValue:null,description:"",name:"prefix",required:!1,type:{name:"string"}},state:{defaultValue:{value:"default"},description:"",name:"state",required:!1,type:{name:"enum",value:[{value:'"disabled"'},{value:'"default"'}]}},isSelected:{defaultValue:{value:"false"},description:"",name:"isSelected",required:!1,type:{name:"boolean"}},isInverted:{defaultValue:{value:"false"},description:"",name:"isInverted",required:!1,type:{name:"boolean"}},tabIndex:{defaultValue:{value:"0"},description:"",name:"tabIndex",required:!1,type:{name:"number"}},custom:{defaultValue:null,description:"",name:"custom",required:!1,type:{name:"SelectablePillConfig"}},beforeComponent:{defaultValue:null,description:"",name:"beforeComponent",required:!1,type:{name:"Avatar | Icon"}}}}}catch{}const E=["default","disabled"],we=[!1,!0],De=[!1,!0],ke=[{id:"0",text:"Value"},{id:"1",text:"Value",prefix:"Prefix"},{id:"2",text:"Value",beforeComponent:{type:"icon",props:{name:"20-tree"}}},{id:"3",text:"Value",prefix:"Prefix",beforeComponent:{type:"icon",props:{name:"20-tree"}}},{id:"4",text:"Value",beforeComponent:{type:"avatar",props:{initials:"M"}}},{id:"5",text:"Value",beforeComponent:{type:"avatar",props:{image:"https://thispersondoesnotexist.com/"}}},{id:"6",text:"Value",prefix:"Prefix",beforeComponent:{type:"avatar",props:{image:"https://thispersondoesnotexist.com/"}}}],w=()=>e.jsx(e.Fragment,{children:E.map(t=>e.jsxs(o.section,{display:"flex",pt:"$dimension-500",flexDirection:"column",children:[e.jsx(V,{variant:"Hero",as:"h2",px:"$dimension-1000",children:je.startCase(t)}),we.map(a=>e.jsxs(o.div,{display:"flex",flexDirection:"column",bg:a?"$color-background-neutral-subtle":void 0,children:[e.jsx(V,{variant:"H2",as:"h3",px:"$dimension-1000",py:"$dimension-500",borderBottom:"$color-neutral-strong",children:a?"Inverted":"Primary"}),De.map(n=>e.jsxs(o.div,{px:"$dimension-1000",pb:"$dimension-500",children:[e.jsxs(V,{variant:"H3",as:"h4",pt:"$dimension-500",children:["Selected: ",String(n)]}),e.jsx(o.div,{display:"flex",flexBasis:"180px",flexGrow:"1",flexShrink:"0",alignItems:"flex-start",flexWrap:"wrap",justifyContent:"flex-start",flexDirection:"row",gap:"$dimension-300",py:"$dimension-500",children:ke.map(({id:i,...r})=>e.jsx(C,{state:t,isInverted:a,isSelected:n,...r},`${E}-${a}-${n}-${i}`))})]},`${t}-${a}-${n}`))]},`${t}-${a}`))]},t))});try{w.displayName="SelectablePillDocs",w.__docgenInfo={description:"",displayName:"SelectablePillDocs",props:{}}}catch{}const Ue={title:"SelectablePill",component:C,tags:["autodocs"],argTypes:{},args:{state:"default",text:"Value"},parameters:{docs:{description:{component:"A compact, rounded indicator used to represent tags, categories, or statuses. Pills often include text and/or icons and can be interactive, such as allowing users to remove a filter or tag."},page:()=>e.jsx(We,{docs:"https://docs.tetrisly.com/components/in-progress/pill",children:e.jsx(w,{})})}}},u={args:{state:"default"}},f={args:{state:"disabled"}},x={args:{isSelected:!0}},g={args:{isInverted:!0}},h={args:{beforeComponent:{type:"icon",props:{name:"20-tree"}}}},b={args:{state:"disabled",beforeComponent:{type:"icon",props:{name:"20-tree"}}}},y={args:{prefix:"Prefix",beforeComponent:{type:"icon",props:{name:"20-tree"}}}},v={args:{isSelected:!0,beforeComponent:{type:"icon",props:{name:"20-tree"}}}},$={args:{isInverted:!0,prefix:"Prefix"}},S={args:{beforeComponent:{type:"avatar",props:{image:"https://thispersondoesnotexist.com/"}}}},I={args:{prefix:"Prefix",beforeComponent:{type:"avatar",props:{appearance:"blue",initials:"M"}}}},P={args:{prefix:"Prefix",isSelected:!0}};var q,M,B;u.parameters={...u.parameters,docs:{...(q=u.parameters)==null?void 0:q.docs,source:{originalSource:`{
  args: {
    state: 'default'
  }
}`,...(B=(M=u.parameters)==null?void 0:M.docs)==null?void 0:B.source}}};var F,H,N;f.parameters={...f.parameters,docs:{...(F=f.parameters)==null?void 0:F.docs,source:{originalSource:`{
  args: {
    state: 'disabled'
  }
}`,...(N=(H=f.parameters)==null?void 0:H.docs)==null?void 0:N.source}}};var R,T,z;x.parameters={...x.parameters,docs:{...(R=x.parameters)==null?void 0:R.docs,source:{originalSource:`{
  args: {
    isSelected: true
  }
}`,...(z=(T=x.parameters)==null?void 0:T.docs)==null?void 0:z.source}}};var O,G,J;g.parameters={...g.parameters,docs:{...(O=g.parameters)==null?void 0:O.docs,source:{originalSource:`{
  args: {
    isInverted: true
  }
}`,...(J=(G=g.parameters)==null?void 0:G.docs)==null?void 0:J.source}}};var K,L,Q;h.parameters={...h.parameters,docs:{...(K=h.parameters)==null?void 0:K.docs,source:{originalSource:`{
  args: {
    beforeComponent: {
      type: 'icon',
      props: {
        name: '20-tree'
      }
    }
  }
}`,...(Q=(L=h.parameters)==null?void 0:L.docs)==null?void 0:Q.source}}};var U,X,Y;b.parameters={...b.parameters,docs:{...(U=b.parameters)==null?void 0:U.docs,source:{originalSource:`{
  args: {
    state: 'disabled',
    beforeComponent: {
      type: 'icon',
      props: {
        name: '20-tree'
      }
    }
  }
}`,...(Y=(X=b.parameters)==null?void 0:X.docs)==null?void 0:Y.source}}};var Z,ee,re;y.parameters={...y.parameters,docs:{...(Z=y.parameters)==null?void 0:Z.docs,source:{originalSource:`{
  args: {
    prefix: 'Prefix',
    beforeComponent: {
      type: 'icon',
      props: {
        name: '20-tree'
      }
    }
  }
}`,...(re=(ee=y.parameters)==null?void 0:ee.docs)==null?void 0:re.source}}};var te,ae,oe;v.parameters={...v.parameters,docs:{...(te=v.parameters)==null?void 0:te.docs,source:{originalSource:`{
  args: {
    isSelected: true,
    beforeComponent: {
      type: 'icon',
      props: {
        name: '20-tree'
      }
    }
  }
}`,...(oe=(ae=v.parameters)==null?void 0:ae.docs)==null?void 0:oe.source}}};var ne,se,ie;$.parameters={...$.parameters,docs:{...(ne=$.parameters)==null?void 0:ne.docs,source:{originalSource:`{
  args: {
    isInverted: true,
    prefix: 'Prefix'
  }
}`,...(ie=(se=$.parameters)==null?void 0:se.docs)==null?void 0:ie.source}}};var ce,le,pe;S.parameters={...S.parameters,docs:{...(ce=S.parameters)==null?void 0:ce.docs,source:{originalSource:`{
  args: {
    beforeComponent: {
      type: 'avatar',
      props: {
        image: 'https://thispersondoesnotexist.com/'
      }
    }
  }
}`,...(pe=(le=S.parameters)==null?void 0:le.docs)==null?void 0:pe.source}}};var de,me,ue;I.parameters={...I.parameters,docs:{...(de=I.parameters)==null?void 0:de.docs,source:{originalSource:`{
  args: {
    prefix: 'Prefix',
    beforeComponent: {
      type: 'avatar',
      props: {
        appearance: 'blue',
        initials: 'M'
      }
    }
  }
}`,...(ue=(me=I.parameters)==null?void 0:me.docs)==null?void 0:ue.source}}};var fe,xe,ge;P.parameters={...P.parameters,docs:{...(fe=P.parameters)==null?void 0:fe.docs,source:{originalSource:`{
  args: {
    prefix: 'Prefix',
    isSelected: true
  }
}`,...(ge=(xe=P.parameters)==null?void 0:xe.docs)==null?void 0:ge.source}}};const Xe=["Default","Disabled","Selected","Inverted","WithIcon","DisabledWithIcon","WithIconAndPrefix","SelectedWithIcon","InvertedWithPrefix","WithAvatar","WithAvatarInitialsAndPrefix","SelectedWithPrefix"];export{u as Default,f as Disabled,b as DisabledWithIcon,g as Inverted,$ as InvertedWithPrefix,x as Selected,v as SelectedWithIcon,P as SelectedWithPrefix,S as WithAvatar,I as WithAvatarInitialsAndPrefix,h as WithIcon,y as WithIconAndPrefix,Xe as __namedExportsOrder,Ue as default};
