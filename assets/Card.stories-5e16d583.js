import{j as e}from"./jsx-runtime-ffb262ed.js";import{B as O}from"./Button-5170f306.js";import{t as n}from"./TetrislyProvider-8c69fae3.js";import{A as b}from"./Avatar-7354bd97.js";import{I as R}from"./Icon-c509f708.js";import{m as J}from"./mergeConfigWithCustom-aec35d44.js";import{B as K}from"./Badge-e2f807c2.js";import{T as Q}from"./TetDocs-abc2e172.js";import"./index-76fb7be0.js";import"./_commonjsHelpers-de833af9.js";import"./tetrisly-icons.es-12549e88.js";import"./index-34929236.js";import"./index-285c0c63.js";import"./iframe-f0bbaec6.js";import"../sb-preview/runtime.js";import"./index-d3ea75b5.js";import"./index-11d98b33.js";import"./index-8fd8397b.js";import"./index-356e4a49.js";const U={display:"flex",w:"fit-content",p:"$space-component-padding-null",flexDirection:"column",alignItems:"flex-start",gap:"$space-component-padding-null",borderRadius:"$border-radius-xLarge",bg:"$color-background-default",boxShadow:"$elevation-bottom-200",borderWidth:"$border-width-small",borderStyle:"$border-style-solid",borderColor:"$color-border-defaultA",overflow:"hidden",innerElements:{header:{display:"flex",w:"100%",py:"$space-component-padding-large",px:"$space-component-padding-2xLarge",alignItems:"center",gap:"$space-component-gap-large",borderBottomWidth:"$border-width-small",borderStyle:"$border-style-solid",borderColor:"$color-border-defaultA",beforeComponent:{display:"flex",padding:"$space-component-padding-null",alignItems:"center",gap:"$space-component-gap-null"},content:{display:"flex",padding:"$space-component-padding-null",flexDirection:"column",alignItems:"flex-start",gap:"$space-component-padding-null",flex:"1 0 0"},title:{color:"$color-content-primary",text:"$typo-body-strong-large"},description:{color:"$color-content-secondary",text:"$typo-body-medium"},actions:{display:"flex",padding:"$space-component-padding-null",justifyContent:"flex-end",alignItems:"center",gap:"$space-component-gap-large"}},content:{padding:"$space-component-padding-2xLarge",w:"100%"},footer:{display:"flex",px:"$space-component-padding-medium",pb:"$space-component-padding-medium",w:"100%",actions:{w:"100%",display:"flex",padding:"$space-component-padding-null",justifyContent:"flex-end",alignItems:"center",gap:"$space-component-gap-small"}}}},x=({styles:r,actions:a,...t})=>{const o=Y(r);return e.jsx(n.div,{"data-testid":"card-footer",...o.container,...t,children:e.jsx(X,{styles:o.actions,actions:a})})},X=({actions:r,styles:a})=>e.jsx(n.div,{"data-testid":"card-footer-actions",...a,children:r.map(t=>e.jsx(O,{size:"small",variant:"ghost",...t},t.label))});function Y(r){const{actions:a,...t}=r;return{actions:a,container:t}}try{x.displayName="CardFooter",x.__docgenInfo={description:"",displayName:"CardFooter",props:{styles:{defaultValue:null,description:"",name:"styles",required:!0,type:{name:"CardFooterConfig"}},actions:{defaultValue:null,description:"",name:"actions",required:!0,type:{name:"GhostButtonProps[]"}}}}}catch{}const C=({styles:r,...a})=>{const{beforeComponent:t,title:o,description:d,actions:s}=a,i=ne(r);return e.jsxs(n.div,{"data-testid":"card-header",...i.container,children:[e.jsx(Z,{styles:i.beforeComponent,beforeComponent:t}),e.jsxs(n.div,{"data-testid":"card-header-content",...i.content,children:[e.jsx(n.div,{"data-testid":"card-header-title",...i.title,children:o}),e.jsx(ae,{styles:i.description,description:d})]}),e.jsx(re,{styles:i.actions,actions:s})]})},Z=({styles:r,beforeComponent:a})=>a?(ee(a),"icon"in a?e.jsx(n.div,{"data-testid":"card-header-beforeComponent",...r,children:e.jsx(R,{name:a.icon.name})}):"avatar"in a?"image"in a.avatar?e.jsx(n.div,{"data-testid":"card-header-beforeComponent",...r,children:e.jsx(b,{shape:"rounded",size:"medium",emphasis:"low",img:{src:a.avatar.image,alt:"avatar"},appearance:"image"})}):e.jsx(n.div,{"data-testid":"card-header-beforeComponent",...r,children:e.jsx(b,{shape:"rounded",size:"medium",emphasis:"low",appearance:a.avatar.appearance,initials:a.avatar.initials})}):(console.warn("No icon or avatar in beforeComponent."),null)):null;function ee(r){"icon"in r&&"avatar"in r&&console.warn("Both icon and avatar props are present in CardHeader beforeComponent. Icon will be rendered.")}const ae=({styles:r,description:a})=>a?e.jsx(n.div,{"data-testid":"card-header-description",...r,children:a}):null,re=({styles:r,actions:a})=>a?e.jsx(n.div,{"data-testid":"card-header-actions",...r,children:a.map(t=>e.jsx(O,{variant:"bare",...t},t.label))}):null;function ne(r){const{title:a,description:t,actions:o,content:d,beforeComponent:s,...i}=r;return{title:a,description:t,actions:o,content:d,beforeComponent:s,container:i}}try{C.displayName="CardHeader",C.__docgenInfo={description:"",displayName:"CardHeader",props:{title:{defaultValue:null,description:"",name:"title",required:!0,type:{name:"string"}},description:{defaultValue:null,description:"",name:"description",required:!1,type:{name:"string"}},beforeComponent:{defaultValue:null,description:"",name:"beforeComponent",required:!1,type:{name:"BeforeComponentProps"}},styles:{defaultValue:null,description:"",name:"styles",required:!0,type:{name:"CardHeaderConfig"}},actions:{defaultValue:null,description:"",name:"actions",required:!1,type:{name:"BareButtonProps[]"}}}}}catch{}const h=({custom:r,children:a,header:t,footer:o,...d})=>{const s=te(r);return e.jsxs(n.div,{"data-testid":"card",...s.container,...d,children:[t&&e.jsx(C,{styles:s.header,...t}),e.jsx(n.div,{"data-testid":"card-content",...s.content,children:a}),o&&e.jsx(x,{styles:s.footer,...o})]})};function te(r){const{innerElements:a,...t}=J({defaultConfig:U,custom:r});return{...a,container:t}}try{h.displayName="Card",h.__docgenInfo={description:"",displayName:"Card",props:{custom:{defaultValue:null,description:"",name:"custom",required:!1,type:{name:"CardConfig"}},header:{defaultValue:null,description:"",name:"header",required:!1,type:{name:'Omit<CardHeaderProps, "styles">'}},footer:{defaultValue:null,description:"",name:"footer",required:!1,type:{name:'Omit<CardFooterProps, "styles">'}}}}}catch{}const _e={title:"Card",component:h,tags:["autodocs"],argTypes:{},args:{children:e.jsxs(n.div,{display:"flex",flexDirection:"column",gap:"$space-component-gap-2xLarge",minWidth:"432px",children:[e.jsx(K,{appearance:"blue",emphasis:"medium",label:"In Progress"}),e.jsxs(n.div,{display:"flex",flexDirection:"column",children:[e.jsx(n.span,{color:"$color-content-secondary",text:"$typo-body-small",children:"Task:"}),e.jsx(n.span,{color:"$color-content-primary",text:"$typo-body-large",children:"Creating React components"})]}),e.jsxs(n.div,{display:"flex",gap:"$space-component-gap-2xLarge",children:[e.jsxs(n.div,{display:"flex",flexDirection:"column",flexGrow:1,children:[e.jsx(n.span,{color:"$color-content-secondary",text:"$typo-body-small",children:"Created"}),e.jsx(n.span,{color:"$color-content-primary",text:"$typo-body-medium",children:"Mon, 14 Feb 2023"})]}),e.jsxs(n.div,{display:"flex",flexDirection:"column",flexGrow:1,children:[e.jsx(n.span,{color:"$color-content-secondary",text:"$typo-body-small",children:"Last modified"}),e.jsx(n.span,{color:"$color-content-primary",text:"$typo-body-medium",children:"Today, 5:23 am"})]})]})]})},parameters:{docs:{description:{component:"A Modal that displays content and actions in a visually organized manner. Cards are typically used to present grouped information, like products, articles, or user profiles, within a grid or list."},page:()=>e.jsx(Q,{docs:"https://docs.tetrisly.com/components/in-progress/card"})}}},l={args:{header:{title:"Card Title",description:"Card Description",beforeComponent:{icon:{name:"20-wallet"}},actions:[{label:"Add",onClick:()=>{},beforeIcon:"20-plus"},{label:"Cancel",onClick:()=>{}}]},footer:{actions:[{label:"Details",appearance:"secondary"},{label:"Mark as resolved",appearance:"primary"}]}}},c={},p={args:{header:{title:"Card Title"}}},m={args:{header:{title:"Card Title",description:"Card Description"}}},u={args:{header:{title:"Card Title",beforeComponent:{icon:{name:"20-wallet"}}}}},f={args:{header:{title:"Card Title",beforeComponent:{avatar:{image:"https://thispersondoesnotexist.com/"}}}}},g={args:{header:{title:"Card Title",actions:[{label:"Add",onClick:()=>{},beforeIcon:"20-plus"},{label:"Cancel",onClick:()=>{}}]}}},y={args:{footer:{actions:[{label:"Add",onClick:()=>{},beforeIcon:"20-plus"},{label:"Cancel",onClick:()=>{}}]}}};var $,j,v;l.parameters={...l.parameters,docs:{...($=l.parameters)==null?void 0:$.docs,source:{originalSource:`{
  args: {
    header: {
      title: 'Card Title',
      description: 'Card Description',
      beforeComponent: {
        icon: {
          name: '20-wallet'
        }
      },
      actions: [{
        label: 'Add',
        onClick: () => {},
        beforeIcon: '20-plus'
      }, {
        label: 'Cancel',
        onClick: () => {}
      }]
    },
    footer: {
      actions: [{
        label: 'Details',
        appearance: 'secondary'
      }, {
        label: 'Mark as resolved',
        appearance: 'primary'
      }]
    }
  }
}`,...(v=(j=l.parameters)==null?void 0:j.docs)==null?void 0:v.source}}};var _,I,w;c.parameters={...c.parameters,docs:{...(_=c.parameters)==null?void 0:_.docs,source:{originalSource:"{}",...(w=(I=c.parameters)==null?void 0:I.docs)==null?void 0:w.source}}};var A,D,k;p.parameters={...p.parameters,docs:{...(A=p.parameters)==null?void 0:A.docs,source:{originalSource:`{
  args: {
    header: {
      title: 'Card Title'
    }
  }
}`,...(k=(D=p.parameters)==null?void 0:D.docs)==null?void 0:k.source}}};var T,H,S;m.parameters={...m.parameters,docs:{...(T=m.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    header: {
      title: 'Card Title',
      description: 'Card Description'
    }
  }
}`,...(S=(H=m.parameters)==null?void 0:H.docs)==null?void 0:S.source}}};var B,q,V;u.parameters={...u.parameters,docs:{...(B=u.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    header: {
      title: 'Card Title',
      beforeComponent: {
        icon: {
          name: '20-wallet'
        }
      }
    }
  }
}`,...(V=(q=u.parameters)==null?void 0:q.docs)==null?void 0:V.source}}};var P,F,N;f.parameters={...f.parameters,docs:{...(P=f.parameters)==null?void 0:P.docs,source:{originalSource:`{
  args: {
    header: {
      title: 'Card Title',
      beforeComponent: {
        avatar: {
          image: 'https://thispersondoesnotexist.com/'
        }
      }
    }
  }
}`,...(N=(F=f.parameters)==null?void 0:F.docs)==null?void 0:N.source}}};var L,z,E;g.parameters={...g.parameters,docs:{...(L=g.parameters)==null?void 0:L.docs,source:{originalSource:`{
  args: {
    header: {
      title: 'Card Title',
      actions: [{
        label: 'Add',
        onClick: () => {},
        beforeIcon: '20-plus'
      }, {
        label: 'Cancel',
        onClick: () => {}
      }]
    }
  }
}`,...(E=(z=g.parameters)==null?void 0:z.docs)==null?void 0:E.source}}};var M,W,G;y.parameters={...y.parameters,docs:{...(M=y.parameters)==null?void 0:M.docs,source:{originalSource:`{
  args: {
    footer: {
      actions: [{
        label: 'Add',
        onClick: () => {},
        beforeIcon: '20-plus'
      }, {
        label: 'Cancel',
        onClick: () => {}
      }]
    }
  }
}`,...(G=(W=y.parameters)==null?void 0:W.docs)==null?void 0:G.source}}};const Ie=["Default","Content","Header","HeaderDescription","HeaderIcon","HeaderAvatar","HeaderActions","Footer"];export{c as Content,l as Default,y as Footer,p as Header,g as HeaderActions,f as HeaderAvatar,m as HeaderDescription,u as HeaderIcon,Ie as __namedExportsOrder,_e as default};
