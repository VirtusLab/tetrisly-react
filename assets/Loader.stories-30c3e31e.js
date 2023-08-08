import{j as _}from"./TetrislyProvider-0a31fa6a.js";import{r as c}from"./index-8db94870.js";import{L as i}from"./Loader-e651dfa4.js";import"./_commonjsHelpers-042e6b4d.js";import"./lodash-bc5bedbb.js";const F={title:"Components/Loader",component:i,tags:["autodocs"]},r={args:{shape:"circle"}},e={args:{shape:"bar"}},s=()=>{const[p,u]=c.useState(0);return c.useEffect(()=>{const l=setInterval(()=>u(d=>(d+.01)%1),50);return()=>clearInterval(l)},[]),_.jsx(i,{shape:"circle",progress:p})},a=()=>{const[p,u]=c.useState(0);return c.useEffect(()=>{const l=setInterval(()=>u(d=>(d+.01)%1),50);return()=>clearInterval(l)},[]),_.jsx(i,{shape:"bar",progress:p})},t={args:{shape:"circle",appearance:"white"},parameters:{backgrounds:{default:"dark"}}},n={args:{shape:"bar",appearance:"inverted"},parameters:{backgrounds:{default:"dark"}}},o={args:{shape:"circle",appearance:"greyscale"}};var m,g,f;r.parameters={...r.parameters,docs:{...(m=r.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    shape: 'circle'
  }
}`,...(f=(g=r.parameters)==null?void 0:g.docs)==null?void 0:f.source}}};var h,v,S;e.parameters={...e.parameters,docs:{...(h=e.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    shape: 'bar'
  }
}`,...(S=(v=e.parameters)==null?void 0:v.docs)==null?void 0:S.source}}};var b,I,P;s.parameters={...s.parameters,docs:{...(b=s.parameters)==null?void 0:b.docs,source:{originalSource:`() => {
  const [progress, setProgress] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => setProgress(p => (p + 0.01) % 1), 50);
    return () => clearInterval(interval);
  }, []);
  return <Loader shape="circle" progress={progress} />;
}`,...(P=(I=s.parameters)==null?void 0:I.docs)==null?void 0:P.source}}};var k,x,E;a.parameters={...a.parameters,docs:{...(k=a.parameters)==null?void 0:k.docs,source:{originalSource:`() => {
  const [progress, setProgress] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => setProgress(p => (p + 0.01) % 1), 50);
    return () => clearInterval(interval);
  }, []);
  return <Loader shape="bar" progress={progress} />;
}`,...(E=(x=a.parameters)==null?void 0:x.docs)==null?void 0:E.source}}};var C,L,j;t.parameters={...t.parameters,docs:{...(C=t.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    shape: 'circle',
    appearance: 'white'
  },
  parameters: {
    backgrounds: {
      default: 'dark'
    }
  }
}`,...(j=(L=t.parameters)==null?void 0:L.docs)==null?void 0:j.source}}};var y,B,D;n.parameters={...n.parameters,docs:{...(y=n.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    shape: 'bar',
    appearance: 'inverted'
  },
  parameters: {
    backgrounds: {
      default: 'dark'
    }
  }
}`,...(D=(B=n.parameters)==null?void 0:B.docs)==null?void 0:D.source}}};var w,G,W;o.parameters={...o.parameters,docs:{...(w=o.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    shape: 'circle',
    appearance: 'greyscale'
  }
}`,...(W=(G=o.parameters)==null?void 0:G.docs)==null?void 0:W.source}}};const H=["DefaultCircle","DefaultBar","ProgressCircle","ProgressBar","White","Inverted","Greyscale"];export{e as DefaultBar,r as DefaultCircle,o as Greyscale,n as Inverted,a as ProgressBar,s as ProgressCircle,t as White,H as __namedExportsOrder,F as default};
//# sourceMappingURL=Loader.stories-30c3e31e.js.map
