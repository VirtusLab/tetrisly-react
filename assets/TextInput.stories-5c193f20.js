import{j as e,t}from"./TetrislyProvider-1d2dd998.js";import{R as v}from"./tetrisly-icons.es-11665055.js";import{l as me}from"./lodash-f6b38868.js";import{r as D}from"./index-61bf1805.js";import{B as f}from"./Button-bf59d070.js";import{e as ue}from"./extractMarginProps-92c75e8c.js";import"./_commonjsHelpers-de833af9.js";import"./isKeyOf-b77e0457.js";import"./Loader-1f5e5706.js";const ge={display:"flex",alignItems:"center",h:"medium",padding:"component-padding-small component-padding-large",flexShrink:0,ring:"100",ringColor:{_:"interaction-border-neutral-normal",hover:"interaction-border-hover",focus:"interaction-focus-default",alert:"interaction-border-alert"},borderRadius:"medium",opacity:{disabled:"disabled"},outlineStyle:{focusWithin:"solid"},outlineColor:{focusWithin:"interaction-focus-default"},outlineWidth:{focusWithin:"focus"},outlineOffset:{alert:"focus"},transition:!0,transitionDuration:50,cursor:"text",pointerEvents:{disabled:"none"},innerComponents:{input:{w:"100%",h:"100%",outline:"none",text:"body-medium",color:{placeholder:"content-tertiary"},backgroundColor:"interaction-background-formField"},icon:{color:"content-secondary"},text:{text:"body-medium",color:"content-secondary"}},spacing:{beforeComponent:{Icon:{marginLeft:"component-padding-medium",marginRight:"component-padding-small"},Avatar:{margin:"0 component-padding-small"},Prefix:{margin:"0 component-padding-large"},Dropdown:{marginLeft:"component-padding-xSmall",marginRight:"component-padding-small"}},afterComponent:{Icon:{marginLeft:"component-padding-small",marginRight:"component-padding-large"},Sufix:{marginLeft:"component-padding-small",marginRight:"component-padding-large"},Button:{marginLeft:"component-padding-small",marginRight:"component-padding-xSmall"},IconButton:{marginLeft:"component-padding-small",marginRight:"component-padding-xSmall"},Dropdown:{marginLeft:"component-padding-small",marginRight:"component-padding-xSmall"}}}},x=D.forwardRef(({type:y="text",beforeComponent:o,afterComponent:n,state:b,custom:oe={},...te},re)=>{const[ae,se]=ue(te),pe=me.merge(oe,ge),{innerComponents:{input:ie,icon:h,text:C},spacing:I,...le}=pe,g=D.useRef(null),ce=de=>{var S;if(de.target===g.current){const P=(S=g.current)==null?void 0:S.querySelector("input");P&&P.focus()}};return e.jsxs(t.div,{ref:g,onClick:ce,...le,pl:!!o&&"0",pr:!!n&&"0",...ae,"data-state":b,"data-testid":"text-input",children:[!!o&&e.jsxs(t.span,{...I.beforeComponent[o.type],children:[o.type==="Icon"&&e.jsx(t.span,{...h,children:e.jsx(v,{...o.props})}),o.type==="Prefix"&&e.jsx(t.span,{...C,children:o.props.text}),o.type==="Dropdown"&&e.jsx(f,{size:"small",variant:"ghost",label:o.props.label,dropdownIndicator:!0})]}),e.jsx(t.input,{...ie,...se,type:y,disabled:b==="disabled",ref:re}),!!n&&e.jsxs(t.span,{...I.afterComponent[n.type],children:[n.type==="Icon"&&e.jsx(t.span,{...h,children:e.jsx(v,{...n.props})}),n.type==="Sufix"&&e.jsx(t.span,{...C,children:n.props.text}),n.type==="Button"&&e.jsx(f,{size:"small",variant:"ghost",label:"Label"}),n.type==="Dropdown"&&e.jsx(f,{size:"small",variant:"ghost",label:n.props.label,dropdownIndicator:!0})]})]})});try{x.displayName="TextInput",x.__docgenInfo={description:"",displayName:"TextInput",props:{type:{defaultValue:{value:"text"},description:"",name:"type",required:!1,type:{name:"enum",value:[{value:'"text"'},{value:'"email"'},{value:'"password"'},{value:'"search"'},{value:'"tel"'},{value:'"url"'}]}},beforeComponent:{defaultValue:null,description:"",name:"beforeComponent",required:!1,type:{name:'InnerComponent<"Icon", IconProps> | InnerComponent<"Prefix", { text: string; }> | InnerComponent<"Dropdown", Pick<ButtonProps<"ghost">, "onClick" | "label">>'}},afterComponent:{defaultValue:null,description:"",name:"afterComponent",required:!1,type:{name:'InnerComponent<"Icon", IconProps> | InnerComponent<"Dropdown", Pick<ButtonProps<"ghost">, "onClick" | "label">> | InnerComponent<...> | InnerComponent<...>'}},state:{defaultValue:null,description:"",name:"state",required:!1,type:{name:"enum",value:[{value:'"disabled"'},{value:'"alert"'}]}},hasClearButton:{defaultValue:null,description:"",name:"hasClearButton",required:!1,type:{name:"boolean"}},custom:{defaultValue:{value:"{}"},description:"",name:"custom",required:!1,type:{name:'DeepPartial<SystemProps<Theme> & { readonly display: "flex"; readonly alignItems: "center"; readonly h: "medium"; readonly padding: "component-padding-small component-padding-large"; ... 14 more ...; readonly spacing: { ...; }; }>'}}}}}catch{}const ve={title:"Components/Text Input",component:x,tags:["autodocs"],args:{placeholder:"Placeholder"}},r={},a={args:{state:"disabled"}},s={args:{state:"alert"}},p={args:{beforeComponent:{type:"Icon",props:{name:"20-bolt"}}}},i={args:{beforeComponent:{type:"Prefix",props:{text:"Prefix"}}}},l={args:{beforeComponent:{type:"Dropdown",props:{label:"Action"}}}},c={args:{afterComponent:{type:"Dropdown",props:{label:"Action"}}}},d={args:{afterComponent:{type:"Icon",props:{name:"20-bolt"}}}},m={args:{afterComponent:{type:"Sufix",props:{text:"Sufix"}}}},u={args:{afterComponent:{type:"Button",props:{label:"Action"}}}};var w,B,A;r.parameters={...r.parameters,docs:{...(w=r.parameters)==null?void 0:w.docs,source:{originalSource:"{}",...(A=(B=r.parameters)==null?void 0:B.docs)==null?void 0:A.source}}};var j,R,_;a.parameters={...a.parameters,docs:{...(j=a.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    state: 'disabled'
  }
}`,...(_=(R=a.parameters)==null?void 0:R.docs)==null?void 0:_.source}}};var k,L,q;s.parameters={...s.parameters,docs:{...(k=s.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    state: 'alert'
  }
}`,...(q=(L=s.parameters)==null?void 0:L.docs)==null?void 0:q.source}}};var V,E,T;p.parameters={...p.parameters,docs:{...(V=p.parameters)==null?void 0:V.docs,source:{originalSource:`{
  args: {
    beforeComponent: {
      type: 'Icon',
      props: {
        name: '20-bolt'
      }
    }
  }
}`,...(T=(E=p.parameters)==null?void 0:E.docs)==null?void 0:T.source}}};var W,z,N;i.parameters={...i.parameters,docs:{...(W=i.parameters)==null?void 0:W.docs,source:{originalSource:`{
  args: {
    beforeComponent: {
      type: 'Prefix',
      props: {
        text: 'Prefix'
      }
    }
  }
}`,...(N=(z=i.parameters)==null?void 0:z.docs)==null?void 0:N.source}}};var O,F,M;l.parameters={...l.parameters,docs:{...(O=l.parameters)==null?void 0:O.docs,source:{originalSource:`{
  args: {
    beforeComponent: {
      type: 'Dropdown',
      props: {
        label: 'Action'
      }
    }
  }
}`,...(M=(F=l.parameters)==null?void 0:F.docs)==null?void 0:M.source}}};var $,G,H;c.parameters={...c.parameters,docs:{...($=c.parameters)==null?void 0:$.docs,source:{originalSource:`{
  args: {
    afterComponent: {
      type: 'Dropdown',
      props: {
        label: 'Action'
      }
    }
  }
}`,...(H=(G=c.parameters)==null?void 0:G.docs)==null?void 0:H.source}}};var J,K,Q;d.parameters={...d.parameters,docs:{...(J=d.parameters)==null?void 0:J.docs,source:{originalSource:`{
  args: {
    afterComponent: {
      type: 'Icon',
      props: {
        name: '20-bolt'
      }
    }
  }
}`,...(Q=(K=d.parameters)==null?void 0:K.docs)==null?void 0:Q.source}}};var U,X,Y;m.parameters={...m.parameters,docs:{...(U=m.parameters)==null?void 0:U.docs,source:{originalSource:`{
  args: {
    afterComponent: {
      type: 'Sufix',
      props: {
        text: 'Sufix'
      }
    }
  }
}`,...(Y=(X=m.parameters)==null?void 0:X.docs)==null?void 0:Y.source}}};var Z,ee,ne;u.parameters={...u.parameters,docs:{...(Z=u.parameters)==null?void 0:Z.docs,source:{originalSource:`{
  args: {
    afterComponent: {
      type: 'Button',
      props: {
        label: 'Action'
      }
    }
  }
}`,...(ne=(ee=u.parameters)==null?void 0:ee.docs)==null?void 0:ne.source}}};const De=["Default","Disabled","Alert","BeforeIconComponent","BeforePrefixComponent","BeforeDropdownComponent","AfterDropdownComponent","AfterIconComponent","AfterPrefixComponent","AfterButtonComponent"];export{u as AfterButtonComponent,c as AfterDropdownComponent,d as AfterIconComponent,m as AfterPrefixComponent,s as Alert,l as BeforeDropdownComponent,p as BeforeIconComponent,i as BeforePrefixComponent,r as Default,a as Disabled,De as __namedExportsOrder,ve as default};
//# sourceMappingURL=TextInput.stories-5c193f20.js.map
