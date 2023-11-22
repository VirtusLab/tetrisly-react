import{j as r}from"./jsx-runtime-ffb262ed.js";import{r as g}from"./index-76fb7be0.js";import{L as o}from"./index-856612c3.js";import{l as v,T as W}from"./TetDocs-7cd01936.js";import{C as _}from"./Cols-d5f7c3cb.js";import{S as n}from"./SectionHeader-25e04435.js";import{t}from"./TetrislyProvider-e15ac01a.js";import"./_commonjsHelpers-de833af9.js";import"./index-74358f72.js";import"./iframe-eede23c4.js";import"../sb-preview/runtime.js";import"./index-ffc7e5ff.js";import"./index-d37d4223.js";import"./index-356e4a49.js";const A=["bar","circle"],F=["primary","inverted","white","greyscale"],N={primary:void 0,inverted:"$color-background-neutral-subtle",white:"$color-background-inverted",greyscale:void 0},O=()=>r.jsx(r.Fragment,{children:A.map(s=>r.jsx(t.section,{children:r.jsxs(t.div,{children:[r.jsxs(n,{variant:"Hero",as:"h2",px:"$dimension-1000",children:["Shape: ",v.capitalize(s)]}),F.map(e=>{const a=Math.random();return r.jsxs(t.div,{bg:N[e],px:"$dimension-1000",py:"$dimension-500",children:[r.jsx(n,{variant:"H1",as:"h2",py:"$dimension-500",inverted:e==="white",children:v.capitalize(e)}),r.jsxs(_,{children:[r.jsxs(t.div,{children:[r.jsx(n,{variant:"H2",as:"h4",inverted:e==="white",py:"$dimension-500",children:"Progres: No"}),r.jsx(o,{shape:s,appearance:e,my:"$dimension-500"})]}),r.jsxs(t.div,{children:[r.jsxs(n,{variant:"H2",as:"h4",inverted:e==="white",py:"$dimension-500",children:["Progres: Yes (",Math.floor(a*100),"%)"]}),r.jsx(o,{shape:s,appearance:e,progress:a,my:"$dimension-500"})]})]})]},`${s}${e}`)})]})},s))}),tr={title:"Loader",component:o,tags:["autodocs"],parameters:{docs:{description:{component:"A distinctive text input field that allows users to search for content on a website or application, by entering keywords, phrases, or other search terms. Search Inputs often include a search icon and may provide autocomplete suggestions or filters to refine results."},page:()=>r.jsx(W,{docs:"https://docs.tetrisly.com/components/in-progress/loader",children:r.jsx(O,{})})}}},c={args:{shape:"circle"}},i={args:{shape:"bar"}},p=()=>{const[s,e]=g.useState(0);return g.useEffect(()=>{const a=setInterval(()=>e(h=>(h+.01)%1),50);return()=>clearInterval(a)},[]),r.jsx(o,{shape:"circle",progress:s})},d=()=>{const[s,e]=g.useState(0);return g.useEffect(()=>{const a=setInterval(()=>e(h=>(h+.01)%1),50);return()=>clearInterval(a)},[]),r.jsx(o,{shape:"bar",progress:s})},l={args:{shape:"circle",appearance:"white"},parameters:{backgrounds:{default:"dark"}}},m={args:{shape:"bar",appearance:"inverted"},parameters:{backgrounds:{default:"dark"}}},u={args:{shape:"circle",appearance:"greyscale"}};var f,x,j;c.parameters={...c.parameters,docs:{...(f=c.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    shape: 'circle'
  }
}`,...(j=(x=c.parameters)==null?void 0:x.docs)==null?void 0:j.source}}};var b,y,S;i.parameters={...i.parameters,docs:{...(b=i.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    shape: 'bar'
  }
}`,...(S=(y=i.parameters)==null?void 0:y.docs)==null?void 0:S.source}}};var P,$,k;p.parameters={...p.parameters,docs:{...(P=p.parameters)==null?void 0:P.docs,source:{originalSource:`() => {
  const [progress, setProgress] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => setProgress(p => (p + 0.01) % 1), 50);
    return () => clearInterval(interval);
  }, []);
  return <Loader shape="circle" progress={progress} />;
}`,...(k=($=p.parameters)==null?void 0:$.docs)==null?void 0:k.source}}};var I,w,E;d.parameters={...d.parameters,docs:{...(I=d.parameters)==null?void 0:I.docs,source:{originalSource:`() => {
  const [progress, setProgress] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => setProgress(p => (p + 0.01) % 1), 50);
    return () => clearInterval(interval);
  }, []);
  return <Loader shape="bar" progress={progress} />;
}`,...(E=(w=d.parameters)==null?void 0:w.docs)==null?void 0:E.source}}};var C,D,L;l.parameters={...l.parameters,docs:{...(C=l.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    shape: 'circle',
    appearance: 'white'
  },
  parameters: {
    backgrounds: {
      default: 'dark'
    }
  }
}`,...(L=(D=l.parameters)==null?void 0:D.docs)==null?void 0:L.source}}};var H,B,M;m.parameters={...m.parameters,docs:{...(H=m.parameters)==null?void 0:H.docs,source:{originalSource:`{
  args: {
    shape: 'bar',
    appearance: 'inverted'
  },
  parameters: {
    backgrounds: {
      default: 'dark'
    }
  }
}`,...(M=(B=m.parameters)==null?void 0:B.docs)==null?void 0:M.source}}};var z,G,T;u.parameters={...u.parameters,docs:{...(z=u.parameters)==null?void 0:z.docs,source:{originalSource:`{
  args: {
    shape: 'circle',
    appearance: 'greyscale'
  }
}`,...(T=(G=u.parameters)==null?void 0:G.docs)==null?void 0:T.source}}};const or=["DefaultCircle","DefaultBar","ProgressCircle","ProgressBar","White","Inverted","Greyscale"];export{i as DefaultBar,c as DefaultCircle,u as Greyscale,m as Inverted,d as ProgressBar,p as ProgressCircle,l as White,or as __namedExportsOrder,tr as default};
//# sourceMappingURL=Loader.stories-31c70af0.js.map
