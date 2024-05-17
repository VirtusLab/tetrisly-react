import{j as e}from"./jsx-runtime-ffb262ed.js";import{a as n}from"./chunk-WFFRPTHA-a68c42c5.js";import{R as k}from"./tetrisly-icons.es-12549e88.js";import{m as V,l as M}from"./mergeConfigWithCustom-aec35d44.js";import{B as P}from"./Button-11c88cf7.js";import{I as z}from"./IconButton-aa4fafe6.js";import{t}from"./TetrislyProvider-fe6220a9.js";import{S as x}from"./SectionHeader-0e90dab1.js";import{T as O}from"./TetDocs-d7bd6205.js";import"./index-76fb7be0.js";import"./_commonjsHelpers-de833af9.js";import"./preview-errors-dde4324f.js";import"./index-356e4a49.js";import"./index-f58a1733.js";import"./index-40824922.js";import"./iframe-e7bad3bc.js";import"../sb-preview/runtime.js";import"./index-d3ea75b5.js";import"./index-11d98b33.js";import"./index-8fd8397b.js";const F={display:"flex",w:"fit-content",minWidth:"420px",p:"$space-component-padding-2xLarge",flexDirection:"row",alignItems:"flex-start",gap:"$space-component-padding-large",borderRadius:"$border-radius-xLarge",bg:"$color-interaction-background-modeless",boxShadow:"$elevation-bottom-300",borderWidth:"$border-width-small",borderStyle:"$border-style-solid",borderColor:"$color-border-defaultA",overflow:"hidden",innerElements:{intentIndicator:{h:"$size-xSmall",display:"flex",alignItems:"flex-end"},intentWarning:{color:"$color-content-warning-secondary"},intentNegative:{color:"$color-content-negative-secondary"},body:{display:"flex",flexGrow:1,flexDirection:"column",justifyContent:"space-between",gap:"$space-component-padding-large"},header:{display:"flex",alignSelf:"stretch",alignItems:"center"},headerTitle:{display:"flex",flexGrow:1,alignItems:"center",justifyContent:"space-between",color:"$color-content-primary",text:"$typo-body-strong-large"},closeButton:{},content:{text:"$typo-body-medium",color:"$color-content-secondary"},footer:{display:"flex",alignSelf:"stretch",justifyContent:"flex-end",gap:"$space-component-padding-small"}}},L=a=>{const{innerElements:o,...u}=V({defaultConfig:F,custom:a});return{container:u,intentIndicator:o.intentIndicator,intentWarning:o.intentWarning,intentNegative:o.intentNegative,body:o.body,header:o.header,headerTitle:o.headerTitle,closeButton:o.closeButton,content:o.content,footer:o.footer}},m=({custom:a,intent:o="none",title:u,content:R,actions:C,onCloseClick:g})=>{const i=L(a);return e.jsxs(t.div,{"data-testid":"corner-dialog",...i.container,children:[o==="warning"&&e.jsx(t.div,{...i.intentIndicator,...i.intentWarning,children:e.jsx(k,{name:"20-warning-fill","data-testid":"warning-icon"})}),o==="negative"&&e.jsx(t.div,{...i.intentIndicator,...i.intentNegative,children:e.jsx(k,{name:"20-alert-fill","data-testid":"negative-icon"})}),e.jsxs(t.div,{...i.body,children:[e.jsx(t.div,{"data-testid":"corner-dialog-header",...i.header,children:e.jsxs(t.div,{"data-testid":"corner-dialog-header-title",...i.headerTitle,children:[e.jsx(t.div,{children:u}),!!g&&e.jsx(z,{variant:"bare",icon:"20-close",size:"medium",onClick:g,"data-testid":"close-icon",...i.closeButton})]})}),e.jsx(t.div,{"data-testid":"corner-dialog-content",...i.content,children:R}),C&&e.jsx(t.div,{"data-testid":"corner-dialog-footer",...i.footer,children:C.map(f=>e.jsx(P,{size:"small",...f},f.label))})]})]})};try{m.displayName="CornerDialog",m.__docgenInfo={description:"",displayName:"CornerDialog",props:{custom:{defaultValue:null,description:"",name:"custom",required:!1,type:{name:"CornerDialogConfig"}},intent:{defaultValue:{value:"none"},description:"",name:"intent",required:!1,type:{name:"enum",value:[{value:'"none"'},{value:'"warning"'},{value:'"negative"'}]}},title:{defaultValue:null,description:"",name:"title",required:!0,type:{name:"string"}},content:{defaultValue:null,description:"",name:"content",required:!0,type:{name:"ReactNode"}},actions:{defaultValue:null,description:"",name:"actions",required:!1,type:{name:'DistributiveOmit<DefaultButtonProps, "size" | "hasDropdownIndicator">[]'}},onCloseClick:{defaultValue:null,description:"",name:"onCloseClick",required:!1,type:{name:"((e?: MouseEvent<Element, MouseEvent>) => void)"}}}}}catch{}const G=["none","warning","negative"],H=()=>e.jsxs(t.section,{display:"flex",padding:"$dimension-500 $dimension-0",flexDirection:"column",children:[e.jsx(x,{px:"$dimension-1000",variant:"H1",my:"auto",as:"h2",children:"Intent"}),e.jsx(t.div,{py:"$dimension-300",display:"flex",flexWrap:"wrap",gap:"$dimension-300",flexDirection:"column",children:G.map(a=>e.jsxs(t.div,{px:"$dimension-1000",py:"$dimension-300",children:[e.jsx(x,{variant:"H2",as:"h3",py:"$dimension-500",children:M.capitalize(a)}),e.jsx(t.div,{display:"flex",flexDirection:"column",gap:"$dimension-300",pt:"$dimension-300",flexBasis:"100",flexShrink:"0",flexGrow:"1",children:e.jsx(m,{intent:a,title:"Title",content:"Description",actions:[{label:"Action"},{label:"Primary Action",appearance:"primary"}],onCloseClick:()=>{}})})]},a))})]}),ue={title:"CornerDialog",component:m,tags:["autodocs"],argTypes:{},args:{intent:"none",title:"Corner Dialog",content:"Description",actions:void 0,onCloseClick:n("onCloseClick")},parameters:{docs:{description:{component:"A small, non-intrusive window that appears in the corner of the screen to convey contextual information or prompt user interaction. Often used for hints, tips, or non-essential notifications."},page:()=>e.jsx(O,{docs:"https://docs.tetrisly.com/components/in-progress/cornerdialog",children:e.jsx(H,{})})}}},r={args:{intent:"none",title:"Corner Dialog",content:"Description",actions:[{label:"Action",onClick:n("onClick")},{label:"Primary Action",onClick:n("onClick"),appearance:"primary"}],onCloseClick:n("onCloseClick")}},l={args:{intent:"none",title:"Title",content:"Description",actions:[{label:"Cancel",onClick:n("onCancelClick")},{label:"Accept",onClick:n("onAcceptClick"),appearance:"primary"}],onCloseClick:n("onCloseClick")}},c={args:{intent:"none",title:"Title",content:"Description",actions:[{label:"Accept",onClick:n("onAcceptClick"),appearance:"primary"}],onCloseClick:void 0}},s={args:{intent:"negative",title:"Title",content:"Description",actions:[{label:"Cancel",onClick:n("onCancelClick")},{label:"Remove",onClick:n("onRemoveClick"),appearance:"primary",intent:"destructive"}],onCloseClick:n("onCloseClick")}},d={args:{intent:"warning",title:"Title",content:"Description",actions:[{label:"Find out more",onClick:n("onFindOutMoreClick"),custom:{default:{position:"absolute",left:0}}},{label:"Cancel",onClick:n("onCancelClick")},{label:"Accept",onClick:n("onAcceptClick"),appearance:"primary"}],onCloseClick:n("onCloseClick"),custom:{innerElements:{footer:{position:"relative"}}}}},p={args:{intent:"none",title:"Corner Dialog with custom content",content:e.jsxs(t.div,{children:["Lorem ipsum dolor sit amet, consectetur adipiscing elit."," ",e.jsx(t.span,{color:"$color-blue-0",fontWeight:"$font-weight-600",children:"Morbi pellentesque elit ut sem accumsan, eget maximus erat eleifend."}),"Vestibulum ac tortor nunc."," ",e.jsx(t.span,{textDecoration:"underline",children:"Nam tincidunt nibh eget nulla aliquet, et auctor dui rhoncus. Donec bibendum rhoncus lacus vel scelerisque."}),"Suspendisse feugiat ligula quis eros interdum varius. Ut nec ex est."]}),actions:[{label:"Action",onClick:n("onClick")},{label:"Primary Action",onClick:n("onClick"),appearance:"primary"}],onCloseClick:n("onCloseClick")}};var b,h,y;r.parameters={...r.parameters,docs:{...(b=r.parameters)==null?void 0:b.docs,source:{originalSource:`{
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
}`,...(y=(h=r.parameters)==null?void 0:h.docs)==null?void 0:y.source}}};var v,D,$;l.parameters={...l.parameters,docs:{...(v=l.parameters)==null?void 0:v.docs,source:{originalSource:`{
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
}`,...($=(D=l.parameters)==null?void 0:D.docs)==null?void 0:$.source}}};var j,A,w;c.parameters={...c.parameters,docs:{...(j=c.parameters)==null?void 0:j.docs,source:{originalSource:`{
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
}`,...(w=(A=c.parameters)==null?void 0:A.docs)==null?void 0:w.source}}};var S,T,q;s.parameters={...s.parameters,docs:{...(S=s.parameters)==null?void 0:S.docs,source:{originalSource:`{
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
}`,...(q=(T=s.parameters)==null?void 0:T.docs)==null?void 0:q.source}}};var I,W,B;d.parameters={...d.parameters,docs:{...(I=d.parameters)==null?void 0:I.docs,source:{originalSource:`{
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
}`,...(B=(W=d.parameters)==null?void 0:W.docs)==null?void 0:B.source}}};var N,E,_;p.parameters={...p.parameters,docs:{...(N=p.parameters)==null?void 0:N.docs,source:{originalSource:`{
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
}`,...(_=(E=p.parameters)==null?void 0:E.docs)==null?void 0:_.source}}};const Ce=["Default","Decision","Confirmation","NegativeWithDestructiveButton","WarningAndAdditionalAction","CustomContent"];export{c as Confirmation,p as CustomContent,l as Decision,r as Default,s as NegativeWithDestructiveButton,d as WarningAndAdditionalAction,Ce as __namedExportsOrder,ue as default};
