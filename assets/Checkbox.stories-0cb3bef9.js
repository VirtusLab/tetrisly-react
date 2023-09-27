import{j as t,t as r}from"./TetrislyProvider-dd60e1dd.js";import{r as n}from"./index-76fb7be0.js";import{C as c}from"./Checkbox-710dce84.js";import{S as g}from"./SectionHeader-9752124f.js";import{S as U}from"./States-4e1d4491.js";import{T as q}from"./TetDocs-04998d33.js";import"./_commonjsHelpers-de833af9.js";import"./tetrisly-icons.es-3ae3ef26.js";import"./HelperText-1d99b7f8.js";import"./extractInputProps-bea3ee83.js";import"./index-812ad9f8.js";import"./iframe-f4ac13df.js";import"../sb-preview/runtime.js";import"./index-ffc7e5ff.js";import"./index-d37d4223.js";import"./index-356e4a49.js";const j=e=>e?"Yes":"No",z=(e,s)=>[`Label: ${j(e)}`,`Helper Text: ${j(s)}`],u=()=>t.jsx(r.div,{children:["Unchecked","Checked","Indeterminate"].map(e=>t.jsxs(r.section,{py:"500",children:[t.jsx(g,{variant:"H1",as:"h2",px:"1000",py:"500",children:e}),[{label:!1,helperText:!1},{label:!0,helperText:!1},{label:!0,helperText:!0}].map(({label:s,helperText:a})=>t.jsxs(r.div,{px:"1000",pb:"500",children:[t.jsx(g,{variant:"H2",as:"h3",py:"500",labels:z(s,a)}),t.jsx(U,{states:["normal","disabled","alert"],flexBasis:"130px",gap:"500"}),t.jsxs(r.div,{display:"flex",alignItems:"center",justifyContent:"center",gap:"500",children:[t.jsx(r.div,{flexBasis:"130px",flexGrow:"1",flexShrink:"0",children:t.jsx(c,{isChecked:e==="Checked",isIndeterminate:e==="Indeterminate",mt:"500",label:s?"Checkbox Label":void 0,helperText:a?"Helper Text":void 0})}),t.jsx(r.div,{flexBasis:"130px",flexGrow:"1",flexShrink:"0",children:t.jsx(c,{isChecked:e==="Checked",isIndeterminate:e==="Indeterminate",state:"disabled",mt:"500",label:s?"Checkbox Label":void 0,helperText:a?"Helper Text":void 0})}),t.jsx(r.div,{flexBasis:"130px",flexGrow:"1",flexShrink:"0",children:t.jsx(c,{isChecked:e==="Checked",isIndeterminate:e==="Indeterminate",state:"alert",mt:"500",label:s?"Checkbox Label":void 0,helperText:a?"Helper Text":void 0})})]})]},`${s}${a}`))]},e))});try{u.displayName="CheckboxDocs",u.__docgenInfo={description:"",displayName:"CheckboxDocs",props:{}}}catch{}const le={title:"Checkbox",component:c,tags:["autodocs"],parameters:{docs:{description:{component:"A component that allows users to select one or multiple options from a set. Checkboxes present a clear visual indication of the selected state, making them ideal for forms and settings."},page:()=>t.jsx(q,{docs:"https://docs.tetrisly.com/components/list/checkbox",children:t.jsx(u,{})})}}},l={},i={args:{isChecked:!0}},d=()=>{const[e,s]=n.useState(!1),[a,k]=n.useState(!1),[b,C]=n.useState(!0),f=n.useRef(!0);return n.useLayoutEffect(()=>{if(f.current){f.current=!1;return}k(e),C(e)},[e]),t.jsxs(r.div,{display:"flex",flexDirection:"column",gap:"component-gap-small",children:[t.jsx(c,{isIndeterminate:!e&&(a||b),isChecked:e,onChange:o=>s(o.target.checked)}),t.jsx(c,{isChecked:a,onChange:o=>k(o.target.checked)}),t.jsx(c,{isChecked:b,onChange:o=>C(o.target.checked)})]})},p={args:{state:"disabled",label:"Disabled"}},m={args:{state:"alert",label:"Label",helperText:"Helper text"}},h={args:{label:"Label"}},x={args:{label:"Label",helperText:"Helper text"}};var S,v,I;l.parameters={...l.parameters,docs:{...(S=l.parameters)==null?void 0:S.docs,source:{originalSource:"{}",...(I=(v=l.parameters)==null?void 0:v.docs)==null?void 0:I.source}}};var V,L,y;i.parameters={...i.parameters,docs:{...(V=i.parameters)==null?void 0:V.docs,source:{originalSource:`{
  args: {
    isChecked: true
  }
}`,...(y=(L=i.parameters)==null?void 0:L.docs)==null?void 0:y.source}}};var T,H,D;d.parameters={...d.parameters,docs:{...(T=d.parameters)==null?void 0:T.docs,source:{originalSource:`() => {
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
  return <tet.div display="flex" flexDirection="column" gap="component-gap-small">
      <Checkbox isIndeterminate={!mainChecked && (checkbox1Value || checkbox2Value)} isChecked={mainChecked} onChange={e => setMainChecked(e.target.checked)} />
      <Checkbox isChecked={checkbox1Value} onChange={e => setCheckbox1Value(e.target.checked)} />
      <Checkbox isChecked={checkbox2Value} onChange={e => setCheckbox2Value(e.target.checked)} />
    </tet.div>;
}`,...(D=(H=d.parameters)==null?void 0:H.docs)==null?void 0:D.source}}};var _,R,E;p.parameters={...p.parameters,docs:{...(_=p.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    state: 'disabled',
    label: 'Disabled'
  }
}`,...(E=(R=p.parameters)==null?void 0:R.docs)==null?void 0:E.source}}};var w,B,N;m.parameters={...m.parameters,docs:{...(w=m.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    state: 'alert',
    label: 'Label',
    helperText: 'Helper text'
  }
}`,...(N=(B=m.parameters)==null?void 0:B.docs)==null?void 0:N.source}}};var $,A,G;h.parameters={...h.parameters,docs:{...($=h.parameters)==null?void 0:$.docs,source:{originalSource:`{
  args: {
    label: 'Label'
  }
}`,...(G=(A=h.parameters)==null?void 0:A.docs)==null?void 0:G.source}}};var M,Y,O;x.parameters={...x.parameters,docs:{...(M=x.parameters)==null?void 0:M.docs,source:{originalSource:`{
  args: {
    label: 'Label',
    helperText: 'Helper text'
  }
}`,...(O=(Y=x.parameters)==null?void 0:Y.docs)==null?void 0:O.source}}};const ie=["Default","Checked","Indeterminate","Disabled","Alert","Label","HelperText"];export{m as Alert,i as Checked,l as Default,p as Disabled,x as HelperText,d as Indeterminate,h as Label,ie as __namedExportsOrder,le as default};
//# sourceMappingURL=Checkbox.stories-0cb3bef9.js.map
