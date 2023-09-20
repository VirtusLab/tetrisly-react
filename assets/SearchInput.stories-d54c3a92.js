import{j as n,t as j}from"./TetrislyProvider-dd60e1dd.js";import{r as T}from"./index-76fb7be0.js";import{S as v}from"./SearchInput-50e457aa.js";import{T as E}from"./TetDocs-709b28a1.js";import"./_commonjsHelpers-de833af9.js";import"./TextInput-d8fac4a5.js";import"./tetrisly-icons.es-3ae3ef26.js";import"./Avatar-3f653ac5.js";import"./Button-6c034911.js";import"./index-7730e51e.js";import"./Loader-62647447.js";import"./IconButton-d126fc38.js";import"./extractInputProps-bea3ee83.js";import"./index-6807c2bf.js";import"./iframe-501657e2.js";import"../sb-preview/runtime.js";import"./index-ffc7e5ff.js";import"./index-d37d4223.js";import"./index-356e4a49.js";const O=()=>n.jsx(j.div,{}),X={title:"SearchInput",component:v,tags:["autodocs"],argTypes:{},parameters:{docs:{description:{component:"A distinctive text input field that allows users to search for content on a website or application, by entering keywords, phrases, or other search terms. Search Inputs often include a search icon and may provide autocomplete suggestions or filters to refine results."},page:()=>n.jsx(E,{docs:"https://docs.tetrisly.com/components/in-progress/searchinput",children:n.jsx(O,{})})}}},e={},r={render:function(){const[x,D]=T.useState("Tetrisly.com"),b=w=>{D(w.target.value)};return n.jsx(v,{value:x,onChange:b})}},t={args:{state:"disabled"}},o={args:{afterComponent:{type:"Dropdown",props:{label:"All"}}}},s={args:{afterComponent:{type:"IconButton",props:{icon:"20-filter"}}}};var a,p,c;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:"{}",...(c=(p=e.parameters)==null?void 0:p.docs)==null?void 0:c.source}}};var i,m,l;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
  render: function ControlledSearchInput() {
    const [value, setValue] = useState('Tetrisly.com');
    const handleOnChange: ChangeEventHandler<HTMLInputElement> = e => {
      setValue(e.target.value);
    };
    return <SearchInput value={value} onChange={handleOnChange} />;
  }
}`,...(l=(m=r.parameters)==null?void 0:m.docs)==null?void 0:l.source}}};var u,d,g;t.parameters={...t.parameters,docs:{...(u=t.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    state: 'disabled'
  }
}`,...(g=(d=t.parameters)==null?void 0:d.docs)==null?void 0:g.source}}};var h,f,S;o.parameters={...o.parameters,docs:{...(h=o.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    afterComponent: {
      type: 'Dropdown',
      props: {
        label: 'All'
      }
    }
  }
}`,...(S=(f=o.parameters)==null?void 0:f.docs)==null?void 0:S.source}}};var C,I,y;s.parameters={...s.parameters,docs:{...(C=s.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    afterComponent: {
      type: 'IconButton',
      props: {
        icon: '20-filter'
      }
    }
  }
}`,...(y=(I=s.parameters)==null?void 0:I.docs)==null?void 0:y.source}}};const Y=["Default","Filled","Disabled","Dropdown","Icon"];export{e as Default,t as Disabled,o as Dropdown,r as Filled,s as Icon,Y as __namedExportsOrder,X as default};
//# sourceMappingURL=SearchInput.stories-d54c3a92.js.map
