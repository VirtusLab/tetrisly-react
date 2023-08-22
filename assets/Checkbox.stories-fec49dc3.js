import{s as oe,t as i,j as t}from"./TetrislyProvider-1d2dd998.js";import{r as n}from"./index-61bf1805.js";import{R as _}from"./tetrisly-icons.es-11665055.js";import{l as se}from"./lodash-f6b38868.js";import{H as ce}from"./HelperText-cd1bf2fc.js";import{e as le}from"./extractMarginProps-92c75e8c.js";import"./_commonjsHelpers-de833af9.js";import"./isKeyOf-b77e0457.js";const R={display:"flex",flexDirection:"column",alignItems:"flex-start",gap:"component-gap-xSmall",minWidth:"3xSmall",minHeight:"3xSmall",color:"content-primary",opacity:{disabled:"disabled"},pointerEvents:{disabled:"none"},innerComponents:{checkboxContainer:{position:"relative",cursor:"pointer"},checkbox:{appearance:"none",display:"block",w:"3xSmall",h:"3xSmall",pointerEvents:"none",backgroundColor:{_:"interaction-background-formField",checked:{_:"interaction-default-normal",hover:"interaction-default-hover"},indeterminate:{_:"interaction-default-normal",hover:"interaction-default-hover"}},color:"white",ring:"focus",borderRadius:"medium",ringInset:!0,ringColor:{_:"interaction-border-neutral-normal",hover:"interaction-border-hover",checked:{_:"interaction-ghost-normal",hover:"interaction-ghost-normal"},alert:{_:"interaction-border-alert",hover:"interaction-border-alert"},indeterminate:"transparent"},outlineStyle:{focusWithin:"solid"},outlineColor:{focusWithin:"interaction-focus-default"},outlineWidth:{focusWithin:"focus"},outlineOffset:{focusWithin:"small"},transition:!0,transitionDuration:200},checkboxIcon:{position:"absolute",color:"interaction-inverted-normal",w:"3xSmall",h:"3xSmall",left:0,top:0},label:{display:"flex",justifyContent:"center",alignItems:"center",gap:"component-gap-small",cursor:"pointer",color:"content-primary",text:"body-medium"},helperText:{paddingLeft:"component-padding-2xLarge"}}},ie=e=>{const a=n.useRef(null);return n.useEffect(()=>{a.current!==null&&(a.current.indeterminate=e)},[a,e]),a},S=oe(i.div)`
  input + div > #checkmark {
    display: none;
    pointer-events: none;
  }

  input:checked + div > #checkmark {
    display: block;
  }
`,d=n.forwardRef(({isChecked:e,isIndeterminate:a=!1,state:r,label:c,helperText:u,custom:m,...p},o)=>{const[s,U]=le(p),X=m?se.merge(R,m):R,{innerComponents:{checkbox:Y,checkboxContainer:Z,checkboxIcon:F,label:ee,helperText:te},...ne}=X,v=n.useId(),y=ie(a),ae=l=>{y.current=l,typeof o=="function"?o(l):o&&(o.current=l)},re=()=>{var l,V;(l=y.current)==null||l.click(),(V=y.current)==null||V.focus()},I=t.jsxs(S,{...Z,children:[t.jsx(i.input,{type:"checkbox",ref:ae,checked:e,disabled:r==="disabled","data-state":r,id:v,...U,...Y}),t.jsxs(i.div,{...F,onClick:()=>!c&&re(),children:[a&&t.jsx(_,{name:"16-minus"}),t.jsx(_,{name:"16-check",id:"checkmark"})]})]});return t.jsxs(i.div,{...ne,...s,"data-state":r,"data-testid":"checkbox",children:[c?t.jsxs(i.label,{htmlFor:v,...ee,"data-testid":"checkbox-label",children:[I,c]}):I,!!u&&t.jsx(ce,{intent:r==="alert"?"alert":"none",beforeIcon:r==="alert",...te,text:u})]})});try{S.displayName="CheckboxIcon",S.__docgenInfo={description:"",displayName:"CheckboxIcon",props:{ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"((instance: HTMLDivElement | null) => void) | RefObject<HTMLDivElement> | null"}},theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"Theme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"undefined"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"undefined"}}}}}catch{}try{d.displayName="Checkbox",d.__docgenInfo={description:"",displayName:"Checkbox",props:{isChecked:{defaultValue:null,description:"",name:"isChecked",required:!1,type:{name:"boolean"}},isIndeterminate:{defaultValue:{value:"false"},description:"",name:"isIndeterminate",required:!1,type:{name:"boolean"}},state:{defaultValue:null,description:"",name:"state",required:!1,type:{name:"enum",value:[{value:'"disabled"'},{value:'"alert"'}]}},custom:{defaultValue:null,description:"",name:"custom",required:!1,type:{name:'DeepPartial<SystemProps<Theme> & { readonly display: "flex"; readonly flexDirection: "column"; readonly alignItems: "flex-start"; readonly gap: "component-gap-xSmall"; ... 5 more ...; readonly innerComponents: { ...; }; }>'}},label:{defaultValue:null,description:"",name:"label",required:!1,type:{name:"string"}},helperText:{defaultValue:null,description:"",name:"helperText",required:!1,type:{name:"string"}}}}}catch{}const ke={title:"Components/Checkbox",component:d,tags:["autodocs"]},h={},f={args:{isChecked:!0}},x=()=>{const[e,a]=n.useState(!1),r=n.useRef(null),[c,u]=n.useState(!1),[m,p]=n.useState(!0),o=n.useRef(!0);return n.useLayoutEffect(()=>{if(o.current){o.current=!1;return}u(e),p(e)},[e]),t.jsxs(i.div,{display:"flex",flexDirection:"column",gap:"component-gap-small",children:[t.jsx(d,{ref:r,isIndeterminate:!e&&(c||m),isChecked:e,onChange:s=>a(s.target.checked)}),t.jsx(d,{isChecked:c,onChange:s=>u(s.target.checked)}),t.jsx(d,{isChecked:m,onChange:s=>p(s.target.checked)})]})},b={args:{state:"disabled",label:"Disabled"}},k={args:{state:"alert",label:"Label",helperText:"Helper text"}},g={args:{label:"Label"}},C={args:{label:"Label",helperText:"Helper text"}};var j,T,L;h.parameters={...h.parameters,docs:{...(j=h.parameters)==null?void 0:j.docs,source:{originalSource:"{}",...(L=(T=h.parameters)==null?void 0:T.docs)==null?void 0:L.source}}};var D,E,H;f.parameters={...f.parameters,docs:{...(D=f.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: {
    isChecked: true
  }
}`,...(H=(E=f.parameters)==null?void 0:E.docs)==null?void 0:H.source}}};var q,M,W;x.parameters={...x.parameters,docs:{...(q=x.parameters)==null?void 0:q.docs,source:{originalSource:`() => {
  const [mainChecked, setMainChecked] = useState(false);
  const checkboxRef = useRef<HTMLInputElement | null>(null);
  const [checkbox1Value, setCheckbox1Value] = useState(false);
  const [checkbox2Value, setCheckbox2Value] = useState(true);
  const isInitialRender = useRef(true);
  useLayoutEffect(() => {
    if (isInitialRender.current) {
      isInitialRender.current = false;
      return;
    }
    setCheckbox1Value(mainChecked);
    setCheckbox2Value(mainChecked);
  }, [mainChecked]);
  return <tet.div display="flex" flexDirection="column" gap="component-gap-small">
      <Checkbox ref={checkboxRef} isIndeterminate={!mainChecked && (checkbox1Value || checkbox2Value)} isChecked={mainChecked} onChange={e => setMainChecked(e.target.checked)} />
      <Checkbox isChecked={checkbox1Value} onChange={e => setCheckbox1Value(e.target.checked)} />
      <Checkbox isChecked={checkbox2Value} onChange={e => setCheckbox2Value(e.target.checked)} />
    </tet.div>;
}`,...(W=(M=x.parameters)==null?void 0:M.docs)==null?void 0:W.source}}};var P,A,N;b.parameters={...b.parameters,docs:{...(P=b.parameters)==null?void 0:P.docs,source:{originalSource:`{
  args: {
    state: 'disabled',
    label: 'Disabled'
  }
}`,...(N=(A=b.parameters)==null?void 0:A.docs)==null?void 0:N.source}}};var w,O,$;k.parameters={...k.parameters,docs:{...(w=k.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    state: 'alert',
    label: 'Label',
    helperText: 'Helper text'
  }
}`,...($=(O=k.parameters)==null?void 0:O.docs)==null?void 0:$.source}}};var z,B,G;g.parameters={...g.parameters,docs:{...(z=g.parameters)==null?void 0:z.docs,source:{originalSource:`{
  args: {
    label: 'Label'
  }
}`,...(G=(B=g.parameters)==null?void 0:B.docs)==null?void 0:G.source}}};var J,K,Q;C.parameters={...C.parameters,docs:{...(J=C.parameters)==null?void 0:J.docs,source:{originalSource:`{
  args: {
    label: 'Label',
    helperText: 'Helper text'
  }
}`,...(Q=(K=C.parameters)==null?void 0:K.docs)==null?void 0:Q.source}}};const ge=["Default","Checked","Indeterminate","Disabled","Alert","Label","HelperText"];export{k as Alert,f as Checked,h as Default,b as Disabled,C as HelperText,x as Indeterminate,g as Label,ge as __namedExportsOrder,ke as default};
//# sourceMappingURL=Checkbox.stories-fec49dc3.js.map
