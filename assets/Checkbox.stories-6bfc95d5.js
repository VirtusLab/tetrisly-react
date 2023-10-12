import{j as s,t as r}from"./TetrislyProvider-66490fd0.js";import{r as c}from"./index-76fb7be0.js";import{C as n}from"./Checkbox-b9647d96.js";import{S as g}from"./SectionHeader-36595b54.js";import{S as U}from"./States-6e71c3b1.js";import{T as q}from"./TetDocs-ce3911fc.js";import"./_commonjsHelpers-de833af9.js";import"./tetrisly-icons.es-3ae3ef26.js";import"./HelperText-4c49cef0.js";import"./extractInputProps-bea3ee83.js";import"./index-f1f1ebd1.js";import"./iframe-709f8cf9.js";import"../sb-preview/runtime.js";import"./index-ffc7e5ff.js";import"./index-d37d4223.js";import"./index-356e4a49.js";const j=e=>e?"Yes":"No",z=(e,t)=>[`Label: ${j(e)}`,`Helper Text: ${j(t)}`],u=()=>s.jsx(r.div,{children:["Unchecked","Checked","Indeterminate"].map(e=>s.jsxs(r.section,{py:"$dimension-500",children:[s.jsx(g,{variant:"H1",as:"h2",px:"$dimension-1000",py:"$dimension-500",children:e}),[{label:!1,helperText:!1},{label:!0,helperText:!1},{label:!0,helperText:!0}].map(({label:t,helperText:a})=>s.jsxs(r.div,{px:"$dimension-1000",pb:"$dimension-500",children:[s.jsx(g,{variant:"H2",as:"h3",py:"$dimension-500",labels:z(t,a)}),s.jsx(U,{states:["normal","disabled","alert"],flexBasis:"130px",gap:"$dimension-500"}),s.jsxs(r.div,{display:"flex",alignItems:"center",justifyContent:"center",gap:"$dimension-500",children:[s.jsx(r.div,{flexBasis:"130px",flexGrow:"1",flexShrink:"0",children:s.jsx(n,{isChecked:e==="Checked",isIndeterminate:e==="Indeterminate",mt:"$dimension-500",label:t?"Checkbox Label":void 0,helperText:a?"Helper Text":void 0})}),s.jsx(r.div,{flexBasis:"130px",flexGrow:"1",flexShrink:"0",children:s.jsx(n,{isChecked:e==="Checked",isIndeterminate:e==="Indeterminate",state:"disabled",mt:"$dimension-500",label:t?"Checkbox Label":void 0,helperText:a?"Helper Text":void 0})}),s.jsx(r.div,{flexBasis:"130px",flexGrow:"1",flexShrink:"0",children:s.jsx(n,{isChecked:e==="Checked",isIndeterminate:e==="Indeterminate",state:"alert",mt:"$dimension-500",label:t?"Checkbox Label":void 0,helperText:a?"Helper Text":void 0})})]})]},`${t}${a}`))]},e))});try{u.displayName="CheckboxDocs",u.__docgenInfo={description:"",displayName:"CheckboxDocs",props:{}}}catch{}const ie={title:"Checkbox",component:n,tags:["autodocs"],parameters:{docs:{description:{component:"A component that allows users to select one or multiple options from a set. Checkboxes present a clear visual indication of the selected state, making them ideal for forms and settings."},page:()=>s.jsx(q,{docs:"https://docs.tetrisly.com/components/list/checkbox",children:s.jsx(u,{})})}}},i={},l={args:{isChecked:!0}},d=()=>{const[e,t]=c.useState(!1),[a,k]=c.useState(!1),[b,C]=c.useState(!0),f=c.useRef(!0);return c.useLayoutEffect(()=>{if(f.current){f.current=!1;return}k(e),C(e)},[e]),s.jsxs(r.div,{display:"flex",flexDirection:"column",gap:"$space-component-gap-small",children:[s.jsx(n,{isIndeterminate:!e&&(a||b),isChecked:e,onChange:o=>t(o.target.checked)}),s.jsx(n,{isChecked:a,onChange:o=>k(o.target.checked)}),s.jsx(n,{isChecked:b,onChange:o=>C(o.target.checked)})]})},m={args:{state:"disabled",label:"Disabled"}},p={args:{state:"alert",label:"Label",helperText:"Helper text"}},h={args:{label:"Label"}},x={args:{label:"Label",helperText:"Helper text"}};var S,v,I;i.parameters={...i.parameters,docs:{...(S=i.parameters)==null?void 0:S.docs,source:{originalSource:"{}",...(I=(v=i.parameters)==null?void 0:v.docs)==null?void 0:I.source}}};var $,V,L;l.parameters={...l.parameters,docs:{...($=l.parameters)==null?void 0:$.docs,source:{originalSource:`{
  args: {
    isChecked: true
  }
}`,...(L=(V=l.parameters)==null?void 0:V.docs)==null?void 0:L.source}}};var y,T,H;d.parameters={...d.parameters,docs:{...(y=d.parameters)==null?void 0:y.docs,source:{originalSource:`() => {
  const [mainChecked, setMainChecked] = useState(false);
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
  return <tet.div display="flex" flexDirection="column" gap="$space-component-gap-small">
      <Checkbox isIndeterminate={!mainChecked && (checkbox1Value || checkbox2Value)} isChecked={mainChecked} onChange={e => setMainChecked(e.target.checked)} />
      <Checkbox isChecked={checkbox1Value} onChange={e => setCheckbox1Value(e.target.checked)} />
      <Checkbox isChecked={checkbox2Value} onChange={e => setCheckbox2Value(e.target.checked)} />
    </tet.div>;
}`,...(H=(T=d.parameters)==null?void 0:T.docs)==null?void 0:H.source}}};var D,_,R;m.parameters={...m.parameters,docs:{...(D=m.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: {
    state: 'disabled',
    label: 'Disabled'
  }
}`,...(R=(_=m.parameters)==null?void 0:_.docs)==null?void 0:R.source}}};var E,w,B;p.parameters={...p.parameters,docs:{...(E=p.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    state: 'alert',
    label: 'Label',
    helperText: 'Helper text'
  }
}`,...(B=(w=p.parameters)==null?void 0:w.docs)==null?void 0:B.source}}};var N,A,G;h.parameters={...h.parameters,docs:{...(N=h.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: {
    label: 'Label'
  }
}`,...(G=(A=h.parameters)==null?void 0:A.docs)==null?void 0:G.source}}};var M,Y,O;x.parameters={...x.parameters,docs:{...(M=x.parameters)==null?void 0:M.docs,source:{originalSource:`{
  args: {
    label: 'Label',
    helperText: 'Helper text'
  }
}`,...(O=(Y=x.parameters)==null?void 0:Y.docs)==null?void 0:O.source}}};const le=["Default","Checked","Indeterminate","Disabled","Alert","Label","HelperText"];export{p as Alert,l as Checked,i as Default,m as Disabled,x as HelperText,d as Indeterminate,h as Label,le as __namedExportsOrder,ie as default};
//# sourceMappingURL=Checkbox.stories-6bfc95d5.js.map
