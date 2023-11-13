import{j as t}from"./jsx-runtime-ffb262ed.js";import{r as c}from"./index-76fb7be0.js";import{C as n}from"./Checkbox-1dcf26ac.js";import{S as g}from"./SectionHeader-25e04435.js";import{S as U}from"./States-169872e7.js";import{t as r}from"./TetrislyProvider-e15ac01a.js";import{T as q}from"./TetDocs-30a5e954.js";import"./_commonjsHelpers-de833af9.js";import"./tetrisly-icons.es-3ae3ef26.js";import"./HelperText-8712a80e.js";import"./extractInputProps-bea3ee83.js";import"./index-fb670bae.js";import"./iframe-38b13a5f.js";import"../sb-preview/runtime.js";import"./index-ffc7e5ff.js";import"./index-d37d4223.js";import"./index-356e4a49.js";const j=e=>e?"Yes":"No",z=(e,s)=>[`Label: ${j(e)}`,`Helper Text: ${j(s)}`],k=()=>t.jsx(r.div,{children:["Unchecked","Checked","Indeterminate"].map(e=>t.jsxs(r.section,{py:"$dimension-500",children:[t.jsx(g,{variant:"H1",as:"h2",px:"$dimension-1000",py:"$dimension-500",children:e}),[{label:!1,helperText:!1},{label:!0,helperText:!1},{label:!0,helperText:!0}].map(({label:s,helperText:a})=>t.jsxs(r.div,{px:"$dimension-1000",pb:"$dimension-500",children:[t.jsx(g,{variant:"H2",as:"h3",py:"$dimension-500",labels:z(s,a)}),t.jsx(U,{states:["normal","disabled","alert"].filter(i=>!(i==="alert"&&e==="Checked")),flexBasis:"130px",gap:"$dimension-500"}),t.jsxs(r.div,{display:"flex",alignItems:"center",justifyContent:"center",gap:"$dimension-500",children:[t.jsx(r.div,{flexBasis:"130px",flexGrow:"1",flexShrink:"0",children:t.jsx(n,{isChecked:e==="Checked",isIndeterminate:e==="Indeterminate",onChange:()=>{},mt:"$dimension-500",label:s?"Checkbox Label":void 0,helperText:a?{text:"Helper Text"}:void 0})}),t.jsx(r.div,{flexBasis:"130px",flexGrow:"1",flexShrink:"0",children:t.jsx(n,{isChecked:e==="Checked",isIndeterminate:e==="Indeterminate",onChange:()=>{},state:"disabled",mt:"$dimension-500",label:s?"Checkbox Label":void 0,helperText:a?{text:"Helper Text"}:void 0})}),e!=="Checked"&&t.jsx(r.div,{flexBasis:"130px",flexGrow:"1",flexShrink:"0",children:t.jsx(n,{isChecked:!1,isIndeterminate:e==="Indeterminate",onChange:()=>{},state:"alert",mt:"$dimension-500",label:s?"Checkbox Label":void 0,helperText:a?{text:"Helper Text"}:void 0})})]})]},`${s}${a}`))]},e))});try{k.displayName="CheckboxDocs",k.__docgenInfo={description:"",displayName:"CheckboxDocs",props:{}}}catch{}const le={title:"Checkbox",component:n,tags:["autodocs"],argTypes:{state:{control:{type:"select",options:[void 0,"disabled","alert"]}}},parameters:{docs:{description:{component:"A component that allows users to select one or multiple options from a set. Checkboxes present a clear visual indication of the selected state, making them ideal for forms and settings."},page:()=>t.jsx(q,{docs:"https://docs.tetrisly.com/components/list/checkbox",children:t.jsx(k,{})})}}},l={},d={args:{isChecked:!0,onChange:()=>{}}},p=()=>{const[e,s]=c.useState(!1),[a,i]=c.useState(!1),[b,C]=c.useState(!0),f=c.useRef(!0);return c.useLayoutEffect(()=>{if(f.current){f.current=!1;return}i(e),C(e)},[e]),t.jsxs(r.div,{display:"flex",flexDirection:"column",gap:"$space-component-gap-small",children:[t.jsx(n,{isIndeterminate:!e&&(a||b),isChecked:e,onChange:o=>s(o.target.checked)}),t.jsx(n,{isChecked:a,onChange:o=>i(o.target.checked)}),t.jsx(n,{isChecked:b,onChange:o=>C(o.target.checked)})]})},m={args:{state:"disabled",label:"Disabled"}},h={args:{state:"alert",label:"Label",helperText:{text:"Helper text"}}},x={args:{label:"Label"}},u={args:{label:"Label",helperText:{text:"Helper text"}}};var S,v,I;l.parameters={...l.parameters,docs:{...(S=l.parameters)==null?void 0:S.docs,source:{originalSource:"{}",...(I=(v=l.parameters)==null?void 0:v.docs)==null?void 0:I.source}}};var $,y,V;d.parameters={...d.parameters,docs:{...($=d.parameters)==null?void 0:$.docs,source:{originalSource:`{
  args: {
    isChecked: true,
    onChange: () => {}
  }
}`,...(V=(y=d.parameters)==null?void 0:y.docs)==null?void 0:V.source}}};var L,T,H;p.parameters={...p.parameters,docs:{...(L=p.parameters)==null?void 0:L.docs,source:{originalSource:`() => {
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
}`,...(H=(T=p.parameters)==null?void 0:T.docs)==null?void 0:H.source}}};var D,_,R;m.parameters={...m.parameters,docs:{...(D=m.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: {
    state: 'disabled',
    label: 'Disabled'
  }
}`,...(R=(_=m.parameters)==null?void 0:_.docs)==null?void 0:R.source}}};var E,w,B;h.parameters={...h.parameters,docs:{...(E=h.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    state: 'alert',
    label: 'Label',
    helperText: {
      text: 'Helper text'
    }
  }
}`,...(B=(w=h.parameters)==null?void 0:w.docs)==null?void 0:B.source}}};var N,A,G;x.parameters={...x.parameters,docs:{...(N=x.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: {
    label: 'Label'
  }
}`,...(G=(A=x.parameters)==null?void 0:A.docs)==null?void 0:G.source}}};var M,Y,O;u.parameters={...u.parameters,docs:{...(M=u.parameters)==null?void 0:M.docs,source:{originalSource:`{
  args: {
    label: 'Label',
    helperText: {
      text: 'Helper text'
    }
  }
}`,...(O=(Y=u.parameters)==null?void 0:Y.docs)==null?void 0:O.source}}};const de=["Default","Checked","Indeterminate","Disabled","Alert","Label","HelperText"];export{h as Alert,d as Checked,l as Default,m as Disabled,u as HelperText,p as Indeterminate,x as Label,de as __namedExportsOrder,le as default};
//# sourceMappingURL=Checkbox.stories-1fa490c7.js.map
