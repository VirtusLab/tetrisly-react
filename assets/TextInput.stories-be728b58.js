import{j as n,t}from"./TetrislyProvider-44685265.js";import{R as D}from"./tetrisly-icons.es-11665055.js";import{l as de}from"./lodash-f6b38868.js";import{r as v}from"./index-61bf1805.js";import{B as b}from"./Button-26e6d459.js";import"./_commonjsHelpers-de833af9.js";import"./isKeyOf-b77e0457.js";import"./Loader-529f1a35.js";const ue={display:"flex",alignItems:"center",h:"medium",padding:"component-padding-small component-padding-large",flexShrink:0,ring:"100",ringColor:{_:"interaction-border-neutral-normal",hover:"interaction-border-hover",focus:"interaction-focus-default",alert:"interaction-border-alert"},borderRadius:"medium",opacity:{disabled:"disabled"},outlineStyle:{focusWithin:"solid"},outlineColor:{focusWithin:"interaction-focus-default"},outlineWidth:{focusWithin:"focus"},outlineOffset:{alert:"focus"},transition:!0,transitionDuration:50,cursor:"text",pointerEvents:{disabled:"none"},innerComponents:{input:{w:"100%",h:"100%",outline:"none",text:"body-medium",color:{placeholder:"content-tertiary"},backgroundColor:"interaction-background-formField"},icon:{color:"content-secondary"},text:{text:"body-medium",color:"content-secondary"}},spacing:{beforeComponent:{Icon:{marginLeft:"component-padding-medium",marginRight:"component-padding-small"},Avatar:{margin:"0 component-padding-small"},Prefix:{margin:"0 component-padding-large"},Dropdown:{marginLeft:"component-padding-xSmall",marginRight:"component-padding-small"}},afterComponent:{Icon:{marginLeft:"component-padding-small",marginRight:"component-padding-large"},Sufix:{marginLeft:"component-padding-small",marginRight:"component-padding-large"},Button:{marginLeft:"component-padding-small",marginRight:"component-padding-xSmall"},IconButton:{marginLeft:"component-padding-small",marginRight:"component-padding-xSmall"},Dropdown:{marginLeft:"component-padding-small",marginRight:"component-padding-xSmall"}}}},ge=["m","margin","mt","marginTop","mr","marginRight","mb","marginBottom","ml","marginLeft","mx","my"],fe=a=>{if(!(a instanceof Object))return[{},{}];const o={},e={};return Object.entries(a).forEach(([r,s])=>{ge.includes(r)?o[r]=s:e[r]=s}),[o,e]},h=v.forwardRef(({type:a="text",beforeComponent:o,afterComponent:e,state:r,custom:s={},...te},re)=>{const[ae,se]=fe(te),pe=de.merge(s,ue),{innerComponents:{input:ie,icon:C,text:I},spacing:S,...ce}=pe,y=v.useRef(null),le=me=>{var P;if(me.target===y.current){const B=(P=y.current)==null?void 0:P.querySelector("input");B&&B.focus()}};return n.jsxs(t.div,{ref:y,onClick:le,...ce,pl:!!o&&"0",pr:!!e&&"0",...ae,"data-state":r,"data-testid":"text-input",children:[!!o&&n.jsxs(t.span,{...S.beforeComponent[o.type],children:[o.type==="Icon"&&n.jsx(t.span,{...C,children:n.jsx(D,{...o.props})}),o.type==="Prefix"&&n.jsx(t.span,{...I,children:o.props.text}),o.type==="Dropdown"&&n.jsx(b,{size:"small",variant:"ghost",label:o.props.label,dropdownIndicator:!0})]}),n.jsx(t.input,{...ie,...se,type:a,disabled:r==="disabled",ref:re}),!!e&&n.jsxs(t.span,{...S.afterComponent[e.type],children:[e.type==="Icon"&&n.jsx(t.span,{...C,children:n.jsx(D,{...e.props})}),e.type==="Sufix"&&n.jsx(t.span,{...I,children:e.props.text}),e.type==="Button"&&n.jsx(b,{size:"small",variant:"ghost",label:"Label"}),e.type==="Dropdown"&&n.jsx(b,{size:"small",variant:"ghost",label:e.props.label,dropdownIndicator:!0})]})]})});try{h.displayName="TextInput",h.__docgenInfo={description:"",displayName:"TextInput",props:{type:{defaultValue:{value:"text"},description:"",name:"type",required:!1,type:{name:"enum",value:[{value:'"text"'},{value:'"email"'},{value:'"password"'},{value:'"search"'},{value:'"tel"'},{value:'"url"'}]}},beforeComponent:{defaultValue:null,description:"",name:"beforeComponent",required:!1,type:{name:'InnerComponent<"Icon", IconProps> | InnerComponent<"Prefix", { text: string; }> | InnerComponent<"Dropdown", Pick<ButtonProps<"ghost">, "onClick" | "label">>'}},afterComponent:{defaultValue:null,description:"",name:"afterComponent",required:!1,type:{name:'InnerComponent<"Icon", IconProps> | InnerComponent<"Dropdown", Pick<ButtonProps<"ghost">, "onClick" | "label">> | InnerComponent<...> | InnerComponent<...>'}},state:{defaultValue:null,description:"",name:"state",required:!1,type:{name:"enum",value:[{value:'"disabled"'},{value:'"alert"'}]}},hasClearButton:{defaultValue:null,description:"",name:"hasClearButton",required:!1,type:{name:"boolean"}},custom:{defaultValue:{value:"{}"},description:"",name:"custom",required:!1,type:{name:'DeepPartial<SystemProps<Theme> & { readonly display: "flex"; readonly alignItems: "center"; readonly h: "medium"; readonly padding: "component-padding-small component-padding-large"; ... 14 more ...; readonly spacing: { ...; }; }>'}}}}}catch{}const Be={title:"Components/Text Input",component:h,tags:["autodocs"],args:{placeholder:"Placeholder"}},p={},i={args:{state:"disabled"}},c={args:{state:"alert"}},l={args:{beforeComponent:{type:"Icon",props:{name:"20-bolt"}}}},m={args:{beforeComponent:{type:"Prefix",props:{text:"Prefix"}}}},d={args:{beforeComponent:{type:"Dropdown",props:{label:"Action"}}}},u={args:{afterComponent:{type:"Dropdown",props:{label:"Action"}}}},g={args:{afterComponent:{type:"Icon",props:{name:"20-bolt"}}}},f={args:{afterComponent:{type:"Sufix",props:{text:"Sufix"}}}},x={args:{afterComponent:{type:"Button",props:{label:"Action"}}}};var w,j,A;p.parameters={...p.parameters,docs:{...(w=p.parameters)==null?void 0:w.docs,source:{originalSource:"{}",...(A=(j=p.parameters)==null?void 0:j.docs)==null?void 0:A.source}}};var R,_,L;i.parameters={...i.parameters,docs:{...(R=i.parameters)==null?void 0:R.docs,source:{originalSource:`{
  args: {
    state: 'disabled'
  }
}`,...(L=(_=i.parameters)==null?void 0:_.docs)==null?void 0:L.source}}};var k,q,E;c.parameters={...c.parameters,docs:{...(k=c.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    state: 'alert'
  }
}`,...(E=(q=c.parameters)==null?void 0:q.docs)==null?void 0:E.source}}};var T,V,O;l.parameters={...l.parameters,docs:{...(T=l.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    beforeComponent: {
      type: 'Icon',
      props: {
        name: '20-bolt'
      }
    }
  }
}`,...(O=(V=l.parameters)==null?void 0:V.docs)==null?void 0:O.source}}};var W,z,N;m.parameters={...m.parameters,docs:{...(W=m.parameters)==null?void 0:W.docs,source:{originalSource:`{
  args: {
    beforeComponent: {
      type: 'Prefix',
      props: {
        text: 'Prefix'
      }
    }
  }
}`,...(N=(z=m.parameters)==null?void 0:z.docs)==null?void 0:N.source}}};var F,K,M;d.parameters={...d.parameters,docs:{...(F=d.parameters)==null?void 0:F.docs,source:{originalSource:`{
  args: {
    beforeComponent: {
      type: 'Dropdown',
      props: {
        label: 'Action'
      }
    }
  }
}`,...(M=(K=d.parameters)==null?void 0:K.docs)==null?void 0:M.source}}};var $,G,H;u.parameters={...u.parameters,docs:{...($=u.parameters)==null?void 0:$.docs,source:{originalSource:`{
  args: {
    afterComponent: {
      type: 'Dropdown',
      props: {
        label: 'Action'
      }
    }
  }
}`,...(H=(G=u.parameters)==null?void 0:G.docs)==null?void 0:H.source}}};var J,Q,U;g.parameters={...g.parameters,docs:{...(J=g.parameters)==null?void 0:J.docs,source:{originalSource:`{
  args: {
    afterComponent: {
      type: 'Icon',
      props: {
        name: '20-bolt'
      }
    }
  }
}`,...(U=(Q=g.parameters)==null?void 0:Q.docs)==null?void 0:U.source}}};var X,Y,Z;f.parameters={...f.parameters,docs:{...(X=f.parameters)==null?void 0:X.docs,source:{originalSource:`{
  args: {
    afterComponent: {
      type: 'Sufix',
      props: {
        text: 'Sufix'
      }
    }
  }
}`,...(Z=(Y=f.parameters)==null?void 0:Y.docs)==null?void 0:Z.source}}};var ee,ne,oe;x.parameters={...x.parameters,docs:{...(ee=x.parameters)==null?void 0:ee.docs,source:{originalSource:`{
  args: {
    afterComponent: {
      type: 'Button',
      props: {
        label: 'Action'
      }
    }
  }
}`,...(oe=(ne=x.parameters)==null?void 0:ne.docs)==null?void 0:oe.source}}};const De=["Default","Disabled","Alert","BeforeIconComponent","BeforePrefixComponent","BeforeDropdownComponent","AfterDropdownComponent","AfterIconComponent","AfterPrefixComponent","AfterButtonComponent"];export{x as AfterButtonComponent,u as AfterDropdownComponent,g as AfterIconComponent,f as AfterPrefixComponent,c as Alert,d as BeforeDropdownComponent,l as BeforeIconComponent,m as BeforePrefixComponent,p as Default,i as Disabled,De as __namedExportsOrder,Be as default};
//# sourceMappingURL=TextInput.stories-be728b58.js.map
