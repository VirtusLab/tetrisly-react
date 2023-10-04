import{j as r,t}from"./TetrislyProvider-dd60e1dd.js";import{r as g}from"./index-76fb7be0.js";import{L as o}from"./index-018d9c82.js";import{l as v,T as _}from"./TetDocs-45ca3d8e.js";import{C as $}from"./Cols-9b2e5b0f.js";import{S as n}from"./SectionHeader-9752124f.js";import"./_commonjsHelpers-de833af9.js";import"./index-d4b2c1a5.js";import"./iframe-e943747b.js";import"../sb-preview/runtime.js";import"./index-ffc7e5ff.js";import"./index-d37d4223.js";import"./index-356e4a49.js";const A=["bar","circle"],F=["primary","inverted","white","greyscale"],N={primary:void 0,inverted:"background-neutral-subtle",white:"background-inverted",greyscale:void 0},O=()=>r.jsx(r.Fragment,{children:A.map(s=>r.jsx(t.section,{children:r.jsxs(t.div,{children:[r.jsxs(n,{variant:"Hero",as:"h2",px:"1000",children:["Shape: ",v.capitalize(s)]}),F.map(e=>{const a=Math.random();return r.jsxs(t.div,{bg:N[e],px:"1000",py:"500",children:[r.jsx(n,{variant:"H1",as:"h2",py:"500",inverted:e==="white",children:v.capitalize(e)}),r.jsxs($,{children:[r.jsxs(t.div,{children:[r.jsx(n,{variant:"H2",as:"h4",inverted:e==="white",py:"500",children:"Progres: No"}),r.jsx(o,{shape:s,appearance:e,my:"500"})]}),r.jsxs(t.div,{children:[r.jsxs(n,{variant:"H2",as:"h4",inverted:e==="white",py:"500",children:["Progres: Yes (",Math.floor(a*100),"%)"]}),r.jsx(o,{shape:s,appearance:e,progress:a,my:"500"})]})]})]},`${s}${e}`)})]})},s))}),ar={title:"Loader",component:o,tags:["autodocs"],parameters:{docs:{description:{component:"A distinctive text input field that allows users to search for content on a website or application, by entering keywords, phrases, or other search terms. Search Inputs often include a search icon and may provide autocomplete suggestions or filters to refine results."},page:()=>r.jsx(_,{docs:"https://docs.tetrisly.com/components/in-progress/loader",children:r.jsx(O,{})})}}},c={args:{shape:"circle"}},i={args:{shape:"bar"}},p=()=>{const[s,e]=g.useState(0);return g.useEffect(()=>{const a=setInterval(()=>e(h=>(h+.01)%1),50);return()=>clearInterval(a)},[]),r.jsx(o,{shape:"circle",progress:s})},d=()=>{const[s,e]=g.useState(0);return g.useEffect(()=>{const a=setInterval(()=>e(h=>(h+.01)%1),50);return()=>clearInterval(a)},[]),r.jsx(o,{shape:"bar",progress:s})},l={args:{shape:"circle",appearance:"white"},parameters:{backgrounds:{default:"dark"}}},m={args:{shape:"bar",appearance:"inverted"},parameters:{backgrounds:{default:"dark"}}},u={args:{shape:"circle",appearance:"greyscale"}};var f,x,j;c.parameters={...c.parameters,docs:{...(f=c.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    shape: 'circle'
  }
}`,...(j=(x=c.parameters)==null?void 0:x.docs)==null?void 0:j.source}}};var b,y,S;i.parameters={...i.parameters,docs:{...(b=i.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    shape: 'bar'
  }
}`,...(S=(y=i.parameters)==null?void 0:y.docs)==null?void 0:S.source}}};var P,k,I;p.parameters={...p.parameters,docs:{...(P=p.parameters)==null?void 0:P.docs,source:{originalSource:`() => {
  const [progress, setProgress] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => setProgress(p => (p + 0.01) % 1), 50);
    return () => clearInterval(interval);
  }, []);
  return <Loader shape="circle" progress={progress} />;
}`,...(I=(k=p.parameters)==null?void 0:k.docs)==null?void 0:I.source}}};var w,E,C;d.parameters={...d.parameters,docs:{...(w=d.parameters)==null?void 0:w.docs,source:{originalSource:`() => {
  const [progress, setProgress] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => setProgress(p => (p + 0.01) % 1), 50);
    return () => clearInterval(interval);
  }, []);
  return <Loader shape="bar" progress={progress} />;
}`,...(C=(E=d.parameters)==null?void 0:E.docs)==null?void 0:C.source}}};var D,L,H;l.parameters={...l.parameters,docs:{...(D=l.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: {
    shape: 'circle',
    appearance: 'white'
  },
  parameters: {
    backgrounds: {
      default: 'dark'
    }
  }
}`,...(H=(L=l.parameters)==null?void 0:L.docs)==null?void 0:H.source}}};var B,M,z;m.parameters={...m.parameters,docs:{...(B=m.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    shape: 'bar',
    appearance: 'inverted'
  },
  parameters: {
    backgrounds: {
      default: 'dark'
    }
  }
}`,...(z=(M=m.parameters)==null?void 0:M.docs)==null?void 0:z.source}}};var G,T,W;u.parameters={...u.parameters,docs:{...(G=u.parameters)==null?void 0:G.docs,source:{originalSource:`{
  args: {
    shape: 'circle',
    appearance: 'greyscale'
  }
}`,...(W=(T=u.parameters)==null?void 0:T.docs)==null?void 0:W.source}}};const tr=["DefaultCircle","DefaultBar","ProgressCircle","ProgressBar","White","Inverted","Greyscale"];export{i as DefaultBar,c as DefaultCircle,u as Greyscale,m as Inverted,d as ProgressBar,p as ProgressCircle,l as White,tr as __namedExportsOrder,ar as default};
//# sourceMappingURL=Loader.stories-8efa0f8c.js.map
