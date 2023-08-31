import{j as r,t as B}from"./TetrislyProvider-67542124.js";import{r as e}from"./index-76fb7be0.js";import{C as d}from"./Checkbox-afc5a5d3.js";import"./_commonjsHelpers-de833af9.js";import"./tetrisly-icons.es-3ae3ef26.js";import"./lodash-f6b38868.js";import"./HelperText-0c16fbc7.js";import"./isKeyOf-b77e0457.js";import"./extractMarginProps-92c75e8c.js";const X={title:"Components/Checkbox",component:d,tags:["autodocs"]},s={},c={args:{isChecked:!0}},n=()=>{const[a,w]=e.useState(!1),z=e.useRef(null),[m,p]=e.useState(!1),[h,k]=e.useState(!0),x=e.useRef(!0);return e.useLayoutEffect(()=>{if(x.current){x.current=!1;return}p(a),k(a)},[a]),r.jsxs(B.div,{display:"flex",flexDirection:"column",gap:"component-gap-small",children:[r.jsx(d,{ref:z,isIndeterminate:!a&&(m||h),isChecked:a,onChange:t=>w(t.target.checked)}),r.jsx(d,{isChecked:m,onChange:t=>p(t.target.checked)}),r.jsx(d,{isChecked:h,onChange:t=>k(t.target.checked)})]})},o={args:{state:"disabled",label:"Disabled"}},l={args:{state:"alert",label:"Label",helperText:"Helper text"}},i={args:{label:"Label"}},u={args:{label:"Label",helperText:"Helper text"}};var b,C,g;s.parameters={...s.parameters,docs:{...(b=s.parameters)==null?void 0:b.docs,source:{originalSource:"{}",...(g=(C=s.parameters)==null?void 0:C.docs)==null?void 0:g.source}}};var f,V,S;c.parameters={...c.parameters,docs:{...(f=c.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    isChecked: true
  }
}`,...(S=(V=c.parameters)==null?void 0:V.docs)==null?void 0:S.source}}};var R,L,I;n.parameters={...n.parameters,docs:{...(R=n.parameters)==null?void 0:R.docs,source:{originalSource:`() => {
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
}`,...(I=(L=n.parameters)==null?void 0:L.docs)==null?void 0:I.source}}};var D,H,T;o.parameters={...o.parameters,docs:{...(D=o.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: {
    state: 'disabled',
    label: 'Disabled'
  }
}`,...(T=(H=o.parameters)==null?void 0:H.docs)==null?void 0:T.source}}};var j,E,y;l.parameters={...l.parameters,docs:{...(j=l.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    state: 'alert',
    label: 'Label',
    helperText: 'Helper text'
  }
}`,...(y=(E=l.parameters)==null?void 0:E.docs)==null?void 0:y.source}}};var M,v,A;i.parameters={...i.parameters,docs:{...(M=i.parameters)==null?void 0:M.docs,source:{originalSource:`{
  args: {
    label: 'Label'
  }
}`,...(A=(v=i.parameters)==null?void 0:v.docs)==null?void 0:A.source}}};var _,O,q;u.parameters={...u.parameters,docs:{...(_=u.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    label: 'Label',
    helperText: 'Helper text'
  }
}`,...(q=(O=u.parameters)==null?void 0:O.docs)==null?void 0:q.source}}};const Y=["Default","Checked","Indeterminate","Disabled","Alert","Label","HelperText"];export{l as Alert,c as Checked,s as Default,o as Disabled,u as HelperText,n as Indeterminate,i as Label,Y as __namedExportsOrder,X as default};
//# sourceMappingURL=Checkbox.stories-bf34f5f3.js.map
