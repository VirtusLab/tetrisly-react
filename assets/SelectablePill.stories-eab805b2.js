import{j as e}from"./jsx-runtime-ffb262ed.js";import{S as te}from"./SelectablePill-7fddae97.js";import{l as ae}from"./mergeConfigWithCustom-aec35d44.js";import{S as h}from"./SectionHeader-0e90dab1.js";import{t as o}from"./TetrislyProvider-fe6220a9.js";import{T as ne}from"./TetDocs-bba3a41d.js";import"./index-76fb7be0.js";import"./_commonjsHelpers-de833af9.js";import"./tetrisly-icons.es-12549e88.js";import"./Avatar-cbae65d6.js";import"./index-e1a16de4.js";import"./iframe-5caa9cdc.js";import"../sb-preview/runtime.js";import"./index-d3ea75b5.js";import"./index-11d98b33.js";import"./index-8fd8397b.js";import"./index-356e4a49.js";const S=["default","disabled"],ie=[!1,!0],pe=[!1,!0],ce=[{id:"0",text:"Value"},{id:"1",text:"Value",prefix:"Prefix"},{id:"2",text:"Value",beforeComponent:{type:"icon",props:{name:"20-tree"}}},{id:"3",text:"Value",prefix:"Prefix",beforeComponent:{type:"icon",props:{name:"20-tree"}}},{id:"4",text:"Value",beforeComponent:{type:"avatar",props:{initials:"M"}}},{id:"5",text:"Value",beforeComponent:{type:"avatar",props:{image:"https://thispersondoesnotexist.com/"}}},{id:"6",text:"Value",prefix:"Prefix",beforeComponent:{type:"avatar",props:{image:"https://thispersondoesnotexist.com/"}}}],b=()=>e.jsx(e.Fragment,{children:S.map(r=>e.jsxs(o.section,{display:"flex",pt:"$dimension-500",flexDirection:"column",children:[e.jsx(h,{variant:"Hero",as:"h2",px:"$dimension-1000",children:ae.startCase(r)}),ie.map(t=>e.jsxs(o.div,{display:"flex",flexDirection:"column",bg:t?"$color-background-neutral-subtle":void 0,children:[e.jsx(h,{variant:"H2",as:"h3",px:"$dimension-1000",py:"$dimension-500",borderBottom:"$color-neutral-strong",children:t?"Inverted":"Primary"}),pe.map(s=>e.jsxs(o.div,{px:"$dimension-1000",pb:"$dimension-500",children:[e.jsxs(h,{variant:"H3",as:"h4",pt:"$dimension-500",children:["Selected: ",String(s)]}),e.jsx(o.div,{display:"flex",flexBasis:"180px",flexGrow:"1",flexShrink:"0",alignItems:"flex-start",flexWrap:"wrap",justifyContent:"flex-start",flexDirection:"row",gap:"$dimension-300",py:"$dimension-500",children:ce.map(({id:se,...oe})=>e.jsx(te,{state:r,isInverted:t,isSelected:s,...oe},`${S}-${t}-${s}-${se}`))})]},`${r}-${t}-${s}`))]},`${r}-${t}`))]},r))});try{b.displayName="SelectablePillDocs",b.__docgenInfo={description:"",displayName:"SelectablePillDocs",props:{}}}catch{}const je={title:"SelectablePill",component:te,tags:["autodocs"],argTypes:{},args:{state:"default",text:"Value"},parameters:{docs:{description:{component:"A compact, rounded indicator used to represent tags, categories, or statuses. Pills often include text and/or icons and can be interactive, such as allowing users to remove a filter or tag."},page:()=>e.jsx(ne,{docs:"https://docs.tetrisly.com/components/in-progress/pill",children:e.jsx(b,{})})}}},a={args:{state:"default"}},n={args:{state:"disabled"}},i={args:{isSelected:!0}},p={args:{isInverted:!0}},c={args:{beforeComponent:{type:"icon",props:{name:"20-tree"}}}},d={args:{state:"disabled",beforeComponent:{type:"icon",props:{name:"20-tree"}}}},m={args:{prefix:"Prefix",beforeComponent:{type:"icon",props:{name:"20-tree"}}}},l={args:{isSelected:!0,beforeComponent:{type:"icon",props:{name:"20-tree"}}}},u={args:{isInverted:!0,prefix:"Prefix"}},f={args:{beforeComponent:{type:"avatar",props:{image:"https://thispersondoesnotexist.com/"}}}},x={args:{prefix:"Prefix",beforeComponent:{type:"avatar",props:{appearance:"blue",initials:"M"}}}},g={args:{prefix:"Prefix",isSelected:!0}};var v,y,P;a.parameters={...a.parameters,docs:{...(v=a.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    state: 'default'
  }
}`,...(P=(y=a.parameters)==null?void 0:y.docs)==null?void 0:P.source}}};var I,$,C;n.parameters={...n.parameters,docs:{...(I=n.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    state: 'disabled'
  }
}`,...(C=($=n.parameters)==null?void 0:$.docs)==null?void 0:C.source}}};var W,j,D;i.parameters={...i.parameters,docs:{...(W=i.parameters)==null?void 0:W.docs,source:{originalSource:`{
  args: {
    isSelected: true
  }
}`,...(D=(j=i.parameters)==null?void 0:j.docs)==null?void 0:D.source}}};var _,A,V;p.parameters={...p.parameters,docs:{...(_=p.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    isInverted: true
  }
}`,...(V=(A=p.parameters)==null?void 0:A.docs)==null?void 0:V.source}}};var w,H,E;c.parameters={...c.parameters,docs:{...(w=c.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    beforeComponent: {
      type: 'icon',
      props: {
        name: '20-tree'
      }
    }
  }
}`,...(E=(H=c.parameters)==null?void 0:H.docs)==null?void 0:E.source}}};var M,T,k;d.parameters={...d.parameters,docs:{...(M=d.parameters)==null?void 0:M.docs,source:{originalSource:`{
  args: {
    state: 'disabled',
    beforeComponent: {
      type: 'icon',
      props: {
        name: '20-tree'
      }
    }
  }
}`,...(k=(T=d.parameters)==null?void 0:T.docs)==null?void 0:k.source}}};var B,N,F;m.parameters={...m.parameters,docs:{...(B=m.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    prefix: 'Prefix',
    beforeComponent: {
      type: 'icon',
      props: {
        name: '20-tree'
      }
    }
  }
}`,...(F=(N=m.parameters)==null?void 0:N.docs)==null?void 0:F.source}}};var G,O,R;l.parameters={...l.parameters,docs:{...(G=l.parameters)==null?void 0:G.docs,source:{originalSource:`{
  args: {
    isSelected: true,
    beforeComponent: {
      type: 'icon',
      props: {
        name: '20-tree'
      }
    }
  }
}`,...(R=(O=l.parameters)==null?void 0:O.docs)==null?void 0:R.source}}};var q,z,J;u.parameters={...u.parameters,docs:{...(q=u.parameters)==null?void 0:q.docs,source:{originalSource:`{
  args: {
    isInverted: true,
    prefix: 'Prefix'
  }
}`,...(J=(z=u.parameters)==null?void 0:z.docs)==null?void 0:J.source}}};var K,L,Q;f.parameters={...f.parameters,docs:{...(K=f.parameters)==null?void 0:K.docs,source:{originalSource:`{
  args: {
    beforeComponent: {
      type: 'avatar',
      props: {
        image: 'https://thispersondoesnotexist.com/'
      }
    }
  }
}`,...(Q=(L=f.parameters)==null?void 0:L.docs)==null?void 0:Q.source}}};var U,X,Y;x.parameters={...x.parameters,docs:{...(U=x.parameters)==null?void 0:U.docs,source:{originalSource:`{
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
}`,...(Y=(X=x.parameters)==null?void 0:X.docs)==null?void 0:Y.source}}};var Z,ee,re;g.parameters={...g.parameters,docs:{...(Z=g.parameters)==null?void 0:Z.docs,source:{originalSource:`{
  args: {
    prefix: 'Prefix',
    isSelected: true
  }
}`,...(re=(ee=g.parameters)==null?void 0:ee.docs)==null?void 0:re.source}}};const De=["Default","Disabled","Selected","Inverted","WithIcon","DisabledWithIcon","WithIconAndPrefix","SelectedWithIcon","InvertedWithPrefix","WithAvatar","WithAvatarInitialsAndPrefix","SelectedWithPrefix"];export{a as Default,n as Disabled,d as DisabledWithIcon,p as Inverted,u as InvertedWithPrefix,i as Selected,l as SelectedWithIcon,g as SelectedWithPrefix,f as WithAvatar,x as WithAvatarInitialsAndPrefix,c as WithIcon,m as WithIconAndPrefix,De as __namedExportsOrder,je as default};
