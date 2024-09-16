import{j as e}from"./jsx-runtime-ffb262ed.js";import{a as n}from"./chunk-WFFRPTHA-80d37c1b.js";import{C as S}from"./CornerDialog-b5025250.js";import{l as q}from"./mergeConfigWithCustom-aec35d44.js";import{S as p}from"./SectionHeader-e7c49046.js";import{t as o}from"./TetrislyProvider-679426f7.js";import{T as W}from"./TetDocs-8998b928.js";import"./index-76fb7be0.js";import"./_commonjsHelpers-de833af9.js";import"./preview-errors-60885292.js";import"./index-356e4a49.js";import"./v4-4a60fe23.js";import"./tetrisly-icons.es-12549e88.js";import"./Button-62f4c63b.js";import"./index-52c2b68d.js";import"./IconButton-9e77b08a.js";import"./index-a1db3e60.js";import"./iframe-399ee91f.js";import"../sb-preview/runtime.js";import"./index-d3ea75b5.js";import"./index-11d98b33.js";import"./index-8fd8397b.js";const E=["none","warning","negative"],P=()=>e.jsxs(o.section,{display:"flex",padding:"$dimension-500 $dimension-0",flexDirection:"column",children:[e.jsx(p,{px:"$dimension-1000",variant:"H1",my:"auto",as:"h2",children:"Intent"}),e.jsx(o.div,{py:"$dimension-300",display:"flex",flexWrap:"wrap",gap:"$dimension-300",flexDirection:"column",children:E.map(s=>e.jsxs(o.div,{px:"$dimension-1000",py:"$dimension-300",children:[e.jsx(p,{variant:"H2",as:"h3",py:"$dimension-500",children:q.capitalize(s)}),e.jsx(o.div,{display:"flex",flexDirection:"column",gap:"$dimension-300",pt:"$dimension-300",flexBasis:"100",flexShrink:"0",flexGrow:"1",children:e.jsx(S,{intent:s,title:"Title",content:"Description",actions:[{label:"Action"},{label:"Primary Action",appearance:"primary"}],onCloseClick:()=>{}})})]},s))})]}),on={title:"CornerDialog",component:S,tags:["autodocs"],argTypes:{},args:{intent:"none",title:"Corner Dialog",content:"Description",actions:void 0,onCloseClick:n("onCloseClick")},parameters:{docs:{description:{component:"A small, non-intrusive window that appears in the corner of the screen to convey contextual information or prompt user interaction. Often used for hints, tips, or non-essential notifications."},page:()=>e.jsx(W,{docs:"https://docs.tetrisly.com/components/in-progress/cornerdialog",children:e.jsx(P,{})})}}},i={args:{intent:"none",title:"Corner Dialog",content:"Description",actions:[{label:"Action",onClick:n("onClick")},{label:"Primary Action",onClick:n("onClick"),appearance:"primary"}],onCloseClick:n("onCloseClick")}},t={args:{intent:"none",title:"Title",content:"Description",actions:[{label:"Cancel",onClick:n("onCancelClick")},{label:"Accept",onClick:n("onAcceptClick"),appearance:"primary"}],onCloseClick:n("onCloseClick")}},c={args:{intent:"none",title:"Title",content:"Description",actions:[{label:"Accept",onClick:n("onAcceptClick"),appearance:"primary"}],onCloseClick:void 0}},a={args:{intent:"negative",title:"Title",content:"Description",actions:[{label:"Cancel",onClick:n("onCancelClick")},{label:"Remove",onClick:n("onRemoveClick"),appearance:"primary",intent:"destructive"}],onCloseClick:n("onCloseClick")}},r={args:{intent:"warning",title:"Title",content:"Description",actions:[{label:"Find out more",onClick:n("onFindOutMoreClick"),custom:{default:{position:"absolute",left:0}}},{label:"Cancel",onClick:n("onCancelClick")},{label:"Accept",onClick:n("onAcceptClick"),appearance:"primary"}],onCloseClick:n("onCloseClick"),custom:{innerElements:{footer:{position:"relative"}}}}},l={args:{intent:"none",title:"Corner Dialog with custom content",content:e.jsxs(o.div,{children:["Lorem ipsum dolor sit amet, consectetur adipiscing elit."," ",e.jsx(o.span,{color:"$color-blue-0",fontWeight:"$font-weight-600",children:"Morbi pellentesque elit ut sem accumsan, eget maximus erat eleifend."}),"Vestibulum ac tortor nunc."," ",e.jsx(o.span,{textDecoration:"underline",children:"Nam tincidunt nibh eget nulla aliquet, et auctor dui rhoncus. Donec bibendum rhoncus lacus vel scelerisque."}),"Suspendisse feugiat ligula quis eros interdum varius. Ut nec ex est."]}),actions:[{label:"Action",onClick:n("onClick")},{label:"Primary Action",onClick:n("onClick"),appearance:"primary"}],onCloseClick:n("onCloseClick")}};var m,C,u;i.parameters={...i.parameters,docs:{...(m=i.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    intent: 'none',
    title: 'Corner Dialog',
    content: 'Description',
    actions: [{
      label: 'Action',
      onClick: action('onClick')
    }, {
      label: 'Primary Action',
      onClick: action('onClick'),
      appearance: 'primary'
    }],
    onCloseClick: action('onCloseClick')
  }
}`,...(u=(C=i.parameters)==null?void 0:C.docs)==null?void 0:u.source}}};var d,k,g;t.parameters={...t.parameters,docs:{...(d=t.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    intent: 'none',
    title: 'Title',
    content: 'Description',
    actions: [{
      label: 'Cancel',
      onClick: action('onCancelClick')
    }, {
      label: 'Accept',
      onClick: action('onAcceptClick'),
      appearance: 'primary'
    }],
    onCloseClick: action('onCloseClick')
  }
}`,...(g=(k=t.parameters)==null?void 0:k.docs)==null?void 0:g.source}}};var f,b,x;c.parameters={...c.parameters,docs:{...(f=c.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    intent: 'none',
    title: 'Title',
    content: 'Description',
    actions: [{
      label: 'Accept',
      onClick: action('onAcceptClick'),
      appearance: 'primary'
    }],
    onCloseClick: undefined
  }
}`,...(x=(b=c.parameters)==null?void 0:b.docs)==null?void 0:x.source}}};var D,h,v;a.parameters={...a.parameters,docs:{...(D=a.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: {
    intent: 'negative',
    title: 'Title',
    content: 'Description',
    actions: [{
      label: 'Cancel',
      onClick: action('onCancelClick')
    }, {
      label: 'Remove',
      onClick: action('onRemoveClick'),
      appearance: \`primary\`,
      intent: 'destructive'
    }],
    onCloseClick: action('onCloseClick')
  }
}`,...(v=(h=a.parameters)==null?void 0:h.docs)==null?void 0:v.source}}};var A,y,j;r.parameters={...r.parameters,docs:{...(A=r.parameters)==null?void 0:A.docs,source:{originalSource:`{
  args: {
    intent: 'warning',
    title: 'Title',
    content: 'Description',
    actions: [{
      label: 'Find out more',
      onClick: action('onFindOutMoreClick'),
      custom: {
        default: {
          position: 'absolute',
          left: 0
        }
      }
    }, {
      label: 'Cancel',
      onClick: action('onCancelClick')
    }, {
      label: 'Accept',
      onClick: action('onAcceptClick'),
      appearance: 'primary'
    }],
    onCloseClick: action('onCloseClick'),
    custom: {
      innerElements: {
        footer: {
          position: 'relative'
        }
      }
    }
  }
}`,...(j=(y=r.parameters)==null?void 0:y.docs)==null?void 0:j.source}}};var $,T,w;l.parameters={...l.parameters,docs:{...($=l.parameters)==null?void 0:$.docs,source:{originalSource:`{
  args: {
    intent: 'none',
    title: 'Corner Dialog with custom content',
    content: <tet.div>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.{' '}
        <tet.span color="$color-blue-0" fontWeight="$font-weight-600">
          Morbi pellentesque elit ut sem accumsan, eget maximus erat eleifend.
        </tet.span>
        Vestibulum ac tortor nunc.{' '}
        <tet.span textDecoration="underline">
          Nam tincidunt nibh eget nulla aliquet, et auctor dui rhoncus. Donec
          bibendum rhoncus lacus vel scelerisque.
        </tet.span>
        Suspendisse feugiat ligula quis eros interdum varius. Ut nec ex est.
      </tet.div>,
    actions: [{
      label: 'Action',
      onClick: action('onClick')
    }, {
      label: 'Primary Action',
      onClick: action('onClick'),
      appearance: 'primary'
    }],
    onCloseClick: action('onCloseClick')
  }
}`,...(w=(T=l.parameters)==null?void 0:T.docs)==null?void 0:w.source}}};const tn=["Default","Decision","Confirmation","NegativeWithDestructiveButton","WarningAndAdditionalAction","CustomContent"];export{c as Confirmation,l as CustomContent,t as Decision,i as Default,a as NegativeWithDestructiveButton,r as WarningAndAdditionalAction,tn as __namedExportsOrder,on as default};
