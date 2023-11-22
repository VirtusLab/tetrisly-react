import{j as e}from"./jsx-runtime-ffb262ed.js";import{R as o}from"./RadioButton-5d3cc5ce.js";import{S as h}from"./SectionHeader-25e04435.js";import{S as O}from"./States-169872e7.js";import{t as a}from"./TetrislyProvider-e15ac01a.js";import{T as U}from"./TetDocs-a6191c4d.js";import"./index-76fb7be0.js";import"./_commonjsHelpers-de833af9.js";import"./HelperText-dfceae65.js";import"./tetrisly-icons.es-3ae3ef26.js";import"./extractInputProps-bea3ee83.js";import"./index-e7c187bd.js";import"./iframe-6fa839d3.js";import"../sb-preview/runtime.js";import"./index-ffc7e5ff.js";import"./index-d37d4223.js";import"./index-356e4a49.js";const b=r=>r?"Yes":"No",q=(r,s)=>[`Label: ${b(r)}`,`Helper Text: ${b(s)}`],u=()=>e.jsx(a.div,{children:["Unchecked","Checked"].map(r=>e.jsxs(a.section,{py:"$dimension-500",children:[e.jsx(h,{variant:"H1",as:"h2",px:"$dimension-1000",py:"$dimension-500",children:r}),[{label:!1,helperText:!1},{label:!0,helperText:!1},{label:!0,helperText:!0}].map(({label:s,helperText:t})=>e.jsxs(a.div,{px:"$dimension-1000",pb:"$dimension-500",children:[e.jsx(h,{variant:"H2",as:"h3",py:"$dimension-500",labels:q(s,t)}),e.jsx(O,{states:["normal","disabled","alert"].filter(F=>!(r==="Checked"&&F==="alert")),flexBasis:"130px",gap:"$dimension-500"}),e.jsxs(a.div,{display:"flex",alignItems:"center",justifyContent:"center",gap:"$dimension-500",children:[e.jsx(a.div,{flexBasis:"130px",flexGrow:"1",flexShrink:"0",children:e.jsx(o,{isChecked:r==="Checked",onChange:()=>{},mt:"$dimension-500",label:s?"Checkbox Label":void 0,helperText:t?"Helper Text":void 0})}),e.jsx(a.div,{flexBasis:"130px",flexGrow:"1",flexShrink:"0",children:e.jsx(o,{isChecked:r==="Checked",onChange:()=>{},state:"disabled",mt:"$dimension-500",label:s?"Checkbox Label":void 0,helperText:t?"Helper Text":void 0})}),r!=="Checked"&&e.jsx(a.div,{flexBasis:"130px",flexGrow:"1",flexShrink:"0",children:e.jsx(o,{state:"alert",isChecked:!1,onChange:()=>{},mt:"$dimension-500",label:s?"Checkbox Label":void 0,helperText:t?"Helper Text":void 0})})]})]},`${s}${t}`))]},r))});try{u.displayName="RadioButtonDocs",u.__docgenInfo={description:"",displayName:"RadioButtonDocs",props:{}}}catch{}const ie={title:"RadioButton",component:o,tags:["autodocs"],parameters:{docs:{description:{component:"A component that enables users to choose a single option from a set of mutually exclusive choices. Radio buttons provide clear visual feedback for the selected state, and are commonly used in forms and settings."},page:()=>e.jsx(U,{docs:"https://docs.tetrisly.com/components/list/radiobutton",children:e.jsx(u,{})})}}},n={},l={args:{isChecked:!0,onChange:()=>{}}},i={render:()=>e.jsxs(e.Fragment,{children:[e.jsx(o,{name:"drone",label:"Huey"}),e.jsx(o,{name:"drone",label:"Devey"}),e.jsx(o,{name:"drone",label:"Louie"})]})},d={args:{state:"disabled",label:"Disabled"}},c={args:{state:"alert"}},p={args:{label:"Label"}},m={args:{label:"Label",helperText:"Helper text"}},x={args:{state:"alert",label:"Label",helperText:"Helper text"}};var g,f,j;n.parameters={...n.parameters,docs:{...(g=n.parameters)==null?void 0:g.docs,source:{originalSource:"{}",...(j=(f=n.parameters)==null?void 0:f.docs)==null?void 0:j.source}}};var C,k,v;l.parameters={...l.parameters,docs:{...(C=l.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    isChecked: true,
    onChange: () => {}
  }
}`,...(v=(k=l.parameters)==null?void 0:k.docs)==null?void 0:v.source}}};var H,y,T;i.parameters={...i.parameters,docs:{...(H=i.parameters)==null?void 0:H.docs,source:{originalSource:`{
  render: () => <>
      <RadioButton name="drone" label="Huey" />
      <RadioButton name="drone" label="Devey" />
      <RadioButton name="drone" label="Louie" />
    </>
}`,...(T=(y=i.parameters)==null?void 0:y.docs)==null?void 0:T.source}}};var L,S,$;d.parameters={...d.parameters,docs:{...(L=d.parameters)==null?void 0:L.docs,source:{originalSource:`{
  args: {
    state: 'disabled',
    label: 'Disabled'
  }
}`,...($=(S=d.parameters)==null?void 0:S.docs)==null?void 0:$.source}}};var B,D,R;c.parameters={...c.parameters,docs:{...(B=c.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    state: 'alert'
  }
}`,...(R=(D=c.parameters)==null?void 0:D.docs)==null?void 0:R.source}}};var _,A,N;p.parameters={...p.parameters,docs:{...(_=p.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    label: 'Label'
  }
}`,...(N=(A=p.parameters)==null?void 0:A.docs)==null?void 0:N.source}}};var w,G,E;m.parameters={...m.parameters,docs:{...(w=m.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    label: 'Label',
    helperText: 'Helper text'
  }
}`,...(E=(G=m.parameters)==null?void 0:G.docs)==null?void 0:E.source}}};var I,M,Y;x.parameters={...x.parameters,docs:{...(I=x.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    state: 'alert',
    label: 'Label',
    helperText: 'Helper text'
  }
}`,...(Y=(M=x.parameters)==null?void 0:M.docs)==null?void 0:Y.source}}};const de=["Default","Checked","Multiple","Disabled","Alert","Label","HelperText","AlertHelperText"];export{c as Alert,x as AlertHelperText,l as Checked,n as Default,d as Disabled,m as HelperText,p as Label,i as Multiple,de as __namedExportsOrder,ie as default};
//# sourceMappingURL=RadioButton.stories-06d06c41.js.map
