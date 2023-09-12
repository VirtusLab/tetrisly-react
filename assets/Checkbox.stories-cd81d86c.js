import{j as r,t as z}from"./TetrislyProvider-07235cd3.js";import{r as t}from"./index-76fb7be0.js";import{C as u}from"./Checkbox-2114efee.js";import"./_commonjsHelpers-de833af9.js";import"./tetrisly-icons.es-3ae3ef26.js";import"./mergeConfigWithCutom-789678df.js";import"./HelperText-9b1dff4c.js";import"./extractInputProps-bea3ee83.js";const U={title:"Components/Checkbox",component:u,tags:["autodocs"]},s={},c={args:{isChecked:!0}},n=()=>{const[e,w]=t.useState(!1),[m,p]=t.useState(!1),[h,k]=t.useState(!0),x=t.useRef(!0);return t.useLayoutEffect(()=>{if(x.current){x.current=!1;return}p(e),k(e)},[e]),r.jsxs(z.div,{display:"flex",flexDirection:"column",gap:"component-gap-small",children:[r.jsx(u,{isIndeterminate:!e&&(m||h),isChecked:e,onChange:a=>w(a.target.checked)}),r.jsx(u,{isChecked:m,onChange:a=>p(a.target.checked)}),r.jsx(u,{isChecked:h,onChange:a=>k(a.target.checked)})]})},o={args:{state:"disabled",label:"Disabled"}},l={args:{state:"alert",label:"Label",helperText:"Helper text"}},i={args:{label:"Label"}},d={args:{label:"Label",helperText:"Helper text"}};var b,C,g;s.parameters={...s.parameters,docs:{...(b=s.parameters)==null?void 0:b.docs,source:{originalSource:"{}",...(g=(C=s.parameters)==null?void 0:C.docs)==null?void 0:g.source}}};var f,V,S;c.parameters={...c.parameters,docs:{...(f=c.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    isChecked: true
  }
}`,...(S=(V=c.parameters)==null?void 0:V.docs)==null?void 0:S.source}}};var L,D,I;n.parameters={...n.parameters,docs:{...(L=n.parameters)==null?void 0:L.docs,source:{originalSource:`() => {
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
}`,...(I=(D=n.parameters)==null?void 0:D.docs)==null?void 0:I.source}}};var R,j,H;o.parameters={...o.parameters,docs:{...(R=o.parameters)==null?void 0:R.docs,source:{originalSource:`{
  args: {
    state: 'disabled',
    label: 'Disabled'
  }
}`,...(H=(j=o.parameters)==null?void 0:j.docs)==null?void 0:H.source}}};var T,E,y;l.parameters={...l.parameters,docs:{...(T=l.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    state: 'alert',
    label: 'Label',
    helperText: 'Helper text'
  }
}`,...(y=(E=l.parameters)==null?void 0:E.docs)==null?void 0:y.source}}};var v,M,A;i.parameters={...i.parameters,docs:{...(v=i.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    label: 'Label'
  }
}`,...(A=(M=i.parameters)==null?void 0:M.docs)==null?void 0:A.source}}};var _,O,q;d.parameters={...d.parameters,docs:{...(_=d.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    label: 'Label',
    helperText: 'Helper text'
  }
}`,...(q=(O=d.parameters)==null?void 0:O.docs)==null?void 0:q.source}}};const W=["Default","Checked","Indeterminate","Disabled","Alert","Label","HelperText"];export{l as Alert,c as Checked,s as Default,o as Disabled,d as HelperText,n as Indeterminate,i as Label,W as __namedExportsOrder,U as default};
//# sourceMappingURL=Checkbox.stories-cd81d86c.js.map
