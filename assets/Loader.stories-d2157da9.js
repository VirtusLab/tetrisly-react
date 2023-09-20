import{j as e,t as _}from"./TetrislyProvider-dd60e1dd.js";import{r as p}from"./index-76fb7be0.js";import{L as m}from"./Loader-62647447.js";import{T as A}from"./TetDocs-709b28a1.js";import"./_commonjsHelpers-de833af9.js";import"./index-6807c2bf.js";import"./iframe-501657e2.js";import"../sb-preview/runtime.js";import"./index-ffc7e5ff.js";import"./index-d37d4223.js";import"./index-356e4a49.js";const O=()=>e.jsx(_.div,{}),V={title:"Loader",component:m,tags:["autodocs"],parameters:{docs:{description:{component:"A distinctive text input field that allows users to search for content on a website or application, by entering keywords, phrases, or other search terms. Search Inputs often include a search icon and may provide autocomplete suggestions or filters to refine results."},page:()=>e.jsx(A,{docs:"https://docs.tetrisly.com/components/in-progress/loader",children:e.jsx(O,{})})}}},r={args:{shape:"circle"}},s={args:{shape:"bar"}},a=()=>{const[i,l]=p.useState(0);return p.useEffect(()=>{const d=setInterval(()=>l(u=>(u+.01)%1),50);return()=>clearInterval(d)},[]),e.jsx(m,{shape:"circle",progress:i})},t=()=>{const[i,l]=p.useState(0);return p.useEffect(()=>{const d=setInterval(()=>l(u=>(u+.01)%1),50);return()=>clearInterval(d)},[]),e.jsx(m,{shape:"bar",progress:i})},o={args:{shape:"circle",appearance:"white"},parameters:{backgrounds:{default:"dark"}}},n={args:{shape:"bar",appearance:"inverted"},parameters:{backgrounds:{default:"dark"}}},c={args:{shape:"circle",appearance:"greyscale"}};var g,h,f;r.parameters={...r.parameters,docs:{...(g=r.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    shape: 'circle'
  }
}`,...(f=(h=r.parameters)==null?void 0:h.docs)==null?void 0:f.source}}};var v,b,S;s.parameters={...s.parameters,docs:{...(v=s.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    shape: 'bar'
  }
}`,...(S=(b=s.parameters)==null?void 0:b.docs)==null?void 0:S.source}}};var x,I,P;a.parameters={...a.parameters,docs:{...(x=a.parameters)==null?void 0:x.docs,source:{originalSource:`() => {
  const [progress, setProgress] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => setProgress(p => (p + 0.01) % 1), 50);
    return () => clearInterval(interval);
  }, []);
  return <Loader shape="circle" progress={progress} />;
}`,...(P=(I=a.parameters)==null?void 0:I.docs)==null?void 0:P.source}}};var k,y,j;t.parameters={...t.parameters,docs:{...(k=t.parameters)==null?void 0:k.docs,source:{originalSource:`() => {
  const [progress, setProgress] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => setProgress(p => (p + 0.01) % 1), 50);
    return () => clearInterval(interval);
  }, []);
  return <Loader shape="bar" progress={progress} />;
}`,...(j=(y=t.parameters)==null?void 0:y.docs)==null?void 0:j.source}}};var E,D,L;o.parameters={...o.parameters,docs:{...(E=o.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    shape: 'circle',
    appearance: 'white'
  },
  parameters: {
    backgrounds: {
      default: 'dark'
    }
  }
}`,...(L=(D=o.parameters)==null?void 0:D.docs)==null?void 0:L.source}}};var w,B,C;n.parameters={...n.parameters,docs:{...(w=n.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    shape: 'bar',
    appearance: 'inverted'
  },
  parameters: {
    backgrounds: {
      default: 'dark'
    }
  }
}`,...(C=(B=n.parameters)==null?void 0:B.docs)==null?void 0:C.source}}};var G,T,W;c.parameters={...c.parameters,docs:{...(G=c.parameters)==null?void 0:G.docs,source:{originalSource:`{
  args: {
    shape: 'circle',
    appearance: 'greyscale'
  }
}`,...(W=(T=c.parameters)==null?void 0:T.docs)==null?void 0:W.source}}};const X=["DefaultCircle","DefaultBar","ProgressCircle","ProgressBar","White","Inverted","Greyscale"];export{s as DefaultBar,r as DefaultCircle,c as Greyscale,n as Inverted,t as ProgressBar,a as ProgressCircle,o as White,X as __namedExportsOrder,V as default};
//# sourceMappingURL=Loader.stories-d2157da9.js.map
