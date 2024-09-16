import{j as s}from"./jsx-runtime-ffb262ed.js";import{r as o}from"./index-76fb7be0.js";import{T as t}from"./Toggle-11467eed.js";import{T as z}from"./TetDocs-85781681.js";import{S as b}from"./SectionHeader-e7c49046.js";import{S as E}from"./States-c70e8d91.js";import{t as r}from"./TetrislyProvider-679426f7.js";import"./_commonjsHelpers-de833af9.js";import"./mergeConfigWithCustom-aec35d44.js";import"./HelperText-56e11054.js";import"./tetrisly-icons.es-12549e88.js";import"./useIndeterminate-f02e4f88.js";import"./index-74beb656.js";import"./iframe-e2d638c9.js";import"../sb-preview/runtime.js";import"./index-d3ea75b5.js";import"./index-11d98b33.js";import"./index-8fd8397b.js";import"./index-356e4a49.js";const C=e=>e?"Yes":"No",M=(e,a)=>[`Label: ${C(e)}`,`Helper Text: ${C(a)}`],u=()=>s.jsx(r.div,{children:["Unchecked","Checked","Indeterminate"].map(e=>s.jsxs(r.section,{py:"$dimension-500",children:[s.jsx(b,{variant:"H1",as:"h2",px:"$dimension-1000",py:"$dimension-500",children:e}),[{label:!1,helperText:!1},{label:!0,helperText:!1},{label:!0,helperText:!0}].map(({label:a,helperText:n})=>s.jsxs(r.div,{px:"$dimension-1000",pb:"$dimension-500",children:[s.jsx(b,{variant:"H2",as:"h3",py:"$dimension-500",labels:M(a,n)}),s.jsx(E,{states:[":normal",":disabled"],flexBasis:"130px",gap:"$dimension-500"}),s.jsxs(r.div,{display:"flex",alignItems:"center",justifyContent:"center",gap:"$dimension-500",children:[s.jsx(r.div,{flexBasis:"130px",flexGrow:"1",flexShrink:"0",children:s.jsxs(r.div,{display:"flex",flexDirection:"column",gap:"$space-component-gap-2xLarge",children:[a?s.jsx(t,{isIndeterminate:e==="Indeterminate",isChecked:e==="Checked",mt:"$dimension-500",label:"Label",helperText:n?{text:"Helper Text"}:void 0,size:"large"}):s.jsx(t,{isIndeterminate:e==="Indeterminate",isChecked:e==="Checked",mt:"$dimension-500",size:"large"}),a?s.jsx(t,{isIndeterminate:e==="Indeterminate",isChecked:e==="Checked",mt:"$dimension-500",label:"Label",helperText:n?{text:"Helper Text"}:void 0}):s.jsx(t,{isIndeterminate:e==="Indeterminate",isChecked:e==="Checked",mt:"$dimension-500"})]})}),s.jsx(r.div,{flexBasis:"130px",flexGrow:"1",flexShrink:"0",children:s.jsxs(r.div,{display:"flex",flexDirection:"column",gap:"$space-component-gap-2xLarge",children:[a?s.jsx(t,{isIndeterminate:e==="Indeterminate",isChecked:e==="Checked",mt:"$dimension-500",state:"disabled",label:"Label",helperText:n?{text:"Helper Text"}:void 0,size:"large"}):s.jsx(t,{isIndeterminate:e==="Indeterminate",isChecked:e==="Checked",mt:"$dimension-500",state:"disabled",size:"large"}),a?s.jsx(t,{isIndeterminate:e==="Indeterminate",isChecked:e==="Checked",state:"disabled",mt:"$dimension-500",label:"Label",helperText:n?{text:"Helper Text"}:void 0}):s.jsx(t,{isIndeterminate:e==="Indeterminate",isChecked:e==="Checked",state:"disabled",mt:"$dimension-500"})]})})]})]},`${a}${n}`))]},e))});try{u.displayName="ToggleDocs",u.__docgenInfo={description:"",displayName:"ToggleDocs",props:{}}}catch{}const ae={title:"Toggle",component:t,tags:["autodocs"],argTypes:{state:{control:{type:"select",options:[void 0,"disabled"]}}},parameters:{docs:{description:{component:"A visual representation of the switch that allows the user to choose between two states, such as on and off or enable and disable. Toggles are often used in forms or settings to represent binary options and provide clear visual feedback of the active state."},page:()=>s.jsx(z,{docs:"https://docs.tetrisly.com/components/list/toggle",children:s.jsx(u,{})})}}},l={args:{isChecked:!0}},d={args:{state:"disabled"}},c=()=>{const[e,a]=o.useState(!1),[n,x]=o.useState(!0),[g,h]=o.useState(!1),f=o.useRef(!0);return o.useLayoutEffect(()=>{if(f.current){f.current=!1;return}x(e),h(e)},[e]),s.jsxs(r.div,{display:"flex",flexDirection:"column",gap:"$space-component-gap-small",children:[s.jsx(t,{size:"large",isIndeterminate:n||g,isChecked:e||n&&g,onChange:()=>a(i=>!i),label:"Main label"}),s.jsx(t,{isChecked:n,onChange:()=>x(i=>!i),label:"Label 1"}),s.jsx(t,{isChecked:g,onChange:()=>h(i=>!i),label:"Label 2"})]})},m={args:{label:"Label"}},p={args:{label:"Label",helperText:{text:"Helper text"}}};var k,T,j;l.parameters={...l.parameters,docs:{...(k=l.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    isChecked: true
  }
}`,...(j=(T=l.parameters)==null?void 0:T.docs)==null?void 0:j.source}}};var v,I,V;d.parameters={...d.parameters,docs:{...(v=d.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    state: 'disabled'
  }
}`,...(V=(I=d.parameters)==null?void 0:I.docs)==null?void 0:V.source}}};var $,L,y;c.parameters={...c.parameters,docs:{...($=c.parameters)==null?void 0:$.docs,source:{originalSource:`() => {
  const [mainChecked, setMainChecked] = useState(false);
  const [toggle1Value, setToggle1Value] = useState(true);
  const [toggle2Value, setToggle2Value] = useState(false);
  const isInitialRender = useRef(true);
  useLayoutEffect(() => {
    if (isInitialRender.current) {
      isInitialRender.current = false;
      return;
    }
    setToggle1Value(mainChecked);
    setToggle2Value(mainChecked);
  }, [mainChecked]);
  return <tet.div display="flex" flexDirection="column" gap="$space-component-gap-small">
      <Toggle size="large" isIndeterminate={toggle1Value || toggle2Value} isChecked={mainChecked || toggle1Value && toggle2Value} onChange={() => setMainChecked(prevValue => !prevValue)} label="Main label" />
      <Toggle isChecked={toggle1Value} onChange={() => setToggle1Value(prevValue => !prevValue)} label="Label 1" />
      <Toggle isChecked={toggle2Value} onChange={() => setToggle2Value(prevValue => !prevValue)} label="Label 2" />
    </tet.div>;
}`,...(y=(L=c.parameters)==null?void 0:L.docs)==null?void 0:y.source}}};var S,H,D;m.parameters={...m.parameters,docs:{...(S=m.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    label: 'Label'
  }
}`,...(D=(H=m.parameters)==null?void 0:H.docs)==null?void 0:D.source}}};var _,R,w;p.parameters={...p.parameters,docs:{...(_=p.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    label: 'Label',
    helperText: {
      text: 'Helper text'
    }
  }
}`,...(w=(R=p.parameters)==null?void 0:R.docs)==null?void 0:w.source}}};const ne=["Checked","Disabled","Indeterminate","Label","HelperText"];export{l as Checked,d as Disabled,p as HelperText,c as Indeterminate,m as Label,ne as __namedExportsOrder,ae as default};
