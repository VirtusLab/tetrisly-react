import{j as e,t as r}from"./TetrislyProvider-51cc1c11.js";import{R as _}from"./tetrisly-icons.es-9149c524.js";import{l as Pe}from"./lodash-f6b38868.js";import{r as a}from"./index-61bf1805.js";import{B as I}from"./Button-962c3051.js";import{I as ve}from"./IconButton-613f270f.js";import{e as De}from"./extractMarginProps-92c75e8c.js";import"./_commonjsHelpers-de833af9.js";import"./isKeyOf-b77e0457.js";import"./index-88b89087.js";import"./Loader-902820ca.js";const we={display:"flex",alignItems:"center",h:"medium",padding:"component-padding-small component-padding-large",flexShrink:0,ring:"100",ringColor:{_:"interaction-border-neutral-normal",hover:"interaction-border-hover",focus:"interaction-focus-default",alert:"interaction-border-alert"},borderRadius:"medium",opacity:{disabled:"disabled"},outlineStyle:{focusWithin:"solid"},outlineColor:{focusWithin:"interaction-focus-default"},outlineWidth:{focusWithin:"focus"},outlineOffset:{alert:"focus"},transition:!0,transitionDuration:50,cursor:"text",pointerEvents:{disabled:"none"},innerComponents:{input:{w:"100%",h:"100%",outline:"none",text:"body-medium",color:{placeholder:"content-tertiary"},backgroundColor:"interaction-background-formField"},icon:{color:"content-secondary"},text:{text:"body-medium",color:"content-secondary"},clearButton:{marginLeft:"component-gap-small"}},spacing:{beforeComponent:{Icon:{marginLeft:"component-padding-medium",marginRight:"component-padding-small"},Avatar:{margin:"0 component-padding-small"},Prefix:{margin:"0 component-padding-large"},Dropdown:{marginLeft:"component-padding-xSmall",marginRight:"component-padding-small"}},afterComponent:{Icon:{marginLeft:"component-padding-small",marginRight:"component-padding-large"},Sufix:{marginLeft:"component-padding-small",marginRight:"component-padding-large"},Button:{marginLeft:"component-padding-small",marginRight:"component-padding-xSmall"},IconButton:{marginLeft:"component-padding-small",marginRight:"component-padding-xSmall"},Dropdown:{marginLeft:"component-padding-small",marginRight:"component-padding-xSmall"}}}},h=a.forwardRef(({type:S="text",beforeComponent:t,afterComponent:n,state:B,hasClearButton:me,custom:P,value:s,onChange:o,...ue},ge)=>{const[v,D]=a.useState(""),[fe,xe]=De(ue),ye=a.useMemo(()=>Pe.merge(P,we),[P]),{innerComponents:{input:be,icon:w,text:A,clearButton:Ce},spacing:j,...Ie}=ye,p=a.useRef(null),he=a.useCallback(i=>{var R;if(i.target===p.current){const k=(R=p.current)==null?void 0:R.querySelector("input");k&&k.focus()}},[p]),Se=a.useCallback(i=>{s===void 0?D(i.target.value):o==null||o(i)},[o,s]),Be=a.useCallback(()=>{s===void 0?D(""):o==null||o({target:{value:""}})},[o,s]);return e.jsxs(r.div,{ref:p,onClick:he,...Ie,pl:!!t&&"0",pr:!!n&&"0",...fe,"data-state":B,"data-testid":"text-input",children:[!!t&&e.jsxs(r.span,{...j.beforeComponent[t.type],children:[t.type==="Icon"&&e.jsx(r.span,{...w,children:e.jsx(_,{...t.props})}),t.type==="Prefix"&&e.jsx(r.span,{...A,children:t.props.text}),t.type==="Dropdown"&&e.jsx(I,{size:"small",variant:"ghost",label:t.props.label,dropdownIndicator:!0})]}),e.jsx(r.input,{...be,value:s||v,onChange:Se,...xe,type:S,disabled:B==="disabled",ref:ge,"data-testid":"text-input-input"}),!!me&&(s||v)&&e.jsx(ve,{variant:"bare",icon:"20-close",onClick:Be,...Ce,"data-testid":"text-input-clear-button"}),!!n&&e.jsxs(r.span,{...j.afterComponent[n.type],children:[n.type==="Icon"&&e.jsx(r.span,{...w,children:e.jsx(_,{...n.props})}),n.type==="Sufix"&&e.jsx(r.span,{...A,children:n.props.text}),n.type==="Button"&&e.jsx(I,{size:"small",variant:"ghost",label:"Label"}),n.type==="Dropdown"&&e.jsx(I,{size:"small",variant:"ghost",label:n.props.label,dropdownIndicator:!0})]})]})});try{h.displayName="TextInput",h.__docgenInfo={description:"",displayName:"TextInput",props:{type:{defaultValue:{value:"text"},description:"",name:"type",required:!1,type:{name:"enum",value:[{value:'"text"'},{value:'"email"'},{value:'"password"'},{value:'"search"'},{value:'"tel"'},{value:'"url"'}]}},beforeComponent:{defaultValue:null,description:"",name:"beforeComponent",required:!1,type:{name:'InnerComponent<"Icon", IconProps> | InnerComponent<"Prefix", { text: string; }> | InnerComponent<"Dropdown", Pick<ButtonProps<"ghost">, "onClick" | "label">>'}},afterComponent:{defaultValue:null,description:"",name:"afterComponent",required:!1,type:{name:'InnerComponent<"Icon", IconProps> | InnerComponent<"Dropdown", Pick<ButtonProps<"ghost">, "onClick" | "label">> | InnerComponent<...> | InnerComponent<...>'}},state:{defaultValue:null,description:"",name:"state",required:!1,type:{name:"enum",value:[{value:'"disabled"'},{value:'"alert"'}]}},hasClearButton:{defaultValue:null,description:"",name:"hasClearButton",required:!1,type:{name:"boolean"}},custom:{defaultValue:null,description:"",name:"custom",required:!1,type:{name:"DeepPartial<TextInputConfig>"}}}}}catch{}const Oe={title:"Components/Text Input",component:h,tags:["autodocs"],args:{placeholder:"Placeholder"}},l={},c={args:{state:"disabled"}},d={args:{state:"alert"}},m={args:{hasClearButton:!0}},u={args:{beforeComponent:{type:"Icon",props:{name:"20-bolt"}}}},g={args:{beforeComponent:{type:"Prefix",props:{text:"Prefix"}}}},f={args:{beforeComponent:{type:"Dropdown",props:{label:"Action"}}}},x={args:{afterComponent:{type:"Dropdown",props:{label:"Action"}}}},y={args:{afterComponent:{type:"Icon",props:{name:"20-bolt"}}}},b={args:{afterComponent:{type:"Sufix",props:{text:"Sufix"}}}},C={args:{afterComponent:{type:"Button",props:{label:"Action"}}}};var L,V,q;l.parameters={...l.parameters,docs:{...(L=l.parameters)==null?void 0:L.docs,source:{originalSource:"{}",...(q=(V=l.parameters)==null?void 0:V.docs)==null?void 0:q.source}}};var W,E,T;c.parameters={...c.parameters,docs:{...(W=c.parameters)==null?void 0:W.docs,source:{originalSource:`{
  args: {
    state: 'disabled'
  }
}`,...(T=(E=c.parameters)==null?void 0:E.docs)==null?void 0:T.source}}};var O,z,M;d.parameters={...d.parameters,docs:{...(O=d.parameters)==null?void 0:O.docs,source:{originalSource:`{
  args: {
    state: 'alert'
  }
}`,...(M=(z=d.parameters)==null?void 0:z.docs)==null?void 0:M.source}}};var N,F,$;m.parameters={...m.parameters,docs:{...(N=m.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: {
    hasClearButton: true
  }
}`,...($=(F=m.parameters)==null?void 0:F.docs)==null?void 0:$.source}}};var G,H,J;u.parameters={...u.parameters,docs:{...(G=u.parameters)==null?void 0:G.docs,source:{originalSource:`{
  args: {
    beforeComponent: {
      type: 'Icon',
      props: {
        name: '20-bolt'
      }
    }
  }
}`,...(J=(H=u.parameters)==null?void 0:H.docs)==null?void 0:J.source}}};var K,Q,U;g.parameters={...g.parameters,docs:{...(K=g.parameters)==null?void 0:K.docs,source:{originalSource:`{
  args: {
    beforeComponent: {
      type: 'Prefix',
      props: {
        text: 'Prefix'
      }
    }
  }
}`,...(U=(Q=g.parameters)==null?void 0:Q.docs)==null?void 0:U.source}}};var X,Y,Z;f.parameters={...f.parameters,docs:{...(X=f.parameters)==null?void 0:X.docs,source:{originalSource:`{
  args: {
    beforeComponent: {
      type: 'Dropdown',
      props: {
        label: 'Action'
      }
    }
  }
}`,...(Z=(Y=f.parameters)==null?void 0:Y.docs)==null?void 0:Z.source}}};var ee,ne,te;x.parameters={...x.parameters,docs:{...(ee=x.parameters)==null?void 0:ee.docs,source:{originalSource:`{
  args: {
    afterComponent: {
      type: 'Dropdown',
      props: {
        label: 'Action'
      }
    }
  }
}`,...(te=(ne=x.parameters)==null?void 0:ne.docs)==null?void 0:te.source}}};var oe,re,ae;y.parameters={...y.parameters,docs:{...(oe=y.parameters)==null?void 0:oe.docs,source:{originalSource:`{
  args: {
    afterComponent: {
      type: 'Icon',
      props: {
        name: '20-bolt'
      }
    }
  }
}`,...(ae=(re=y.parameters)==null?void 0:re.docs)==null?void 0:ae.source}}};var se,pe,ie;b.parameters={...b.parameters,docs:{...(se=b.parameters)==null?void 0:se.docs,source:{originalSource:`{
  args: {
    afterComponent: {
      type: 'Sufix',
      props: {
        text: 'Sufix'
      }
    }
  }
}`,...(ie=(pe=b.parameters)==null?void 0:pe.docs)==null?void 0:ie.source}}};var le,ce,de;C.parameters={...C.parameters,docs:{...(le=C.parameters)==null?void 0:le.docs,source:{originalSource:`{
  args: {
    afterComponent: {
      type: 'Button',
      props: {
        label: 'Action'
      }
    }
  }
}`,...(de=(ce=C.parameters)==null?void 0:ce.docs)==null?void 0:de.source}}};const ze=["Default","Disabled","Alert","WithClearButton","BeforeIconComponent","BeforePrefixComponent","BeforeDropdownComponent","AfterDropdownComponent","AfterIconComponent","AfterPrefixComponent","AfterButtonComponent"];export{C as AfterButtonComponent,x as AfterDropdownComponent,y as AfterIconComponent,b as AfterPrefixComponent,d as Alert,f as BeforeDropdownComponent,u as BeforeIconComponent,g as BeforePrefixComponent,l as Default,c as Disabled,m as WithClearButton,ze as __namedExportsOrder,Oe as default};
//# sourceMappingURL=TextInput.stories-8e4299dc.js.map
