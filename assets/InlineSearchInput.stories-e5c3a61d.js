import{j as o}from"./TetrislyProvider-dd60e1dd.js";import{r as S}from"./index-76fb7be0.js";import{I as s}from"./InlineSearchInput-8c3cc6eb.js";import{T as v}from"./TetDocs-709b28a1.js";import"./_commonjsHelpers-de833af9.js";import"./SearchInput-50e457aa.js";import"./TextInput-d8fac4a5.js";import"./tetrisly-icons.es-3ae3ef26.js";import"./Avatar-3f653ac5.js";import"./Button-6c034911.js";import"./index-7730e51e.js";import"./Loader-62647447.js";import"./IconButton-d126fc38.js";import"./extractInputProps-bea3ee83.js";import"./index-6807c2bf.js";import"./iframe-501657e2.js";import"../sb-preview/runtime.js";import"./index-ffc7e5ff.js";import"./index-d37d4223.js";import"./index-356e4a49.js";const B={title:"InlineSearchInput",component:s,tags:["autodocs"],argTypes:{},parameters:{docs:{description:{component:"A distinctive text input field that allows users to search for content on a website or application, by entering keywords, phrases, or other search terms. Search Inputs often include a search icon and may provide autocomplete suggestions or filters to refine results."},page:()=>o.jsx(v,{docs:"https://docs.tetrisly.com/components/in-progress/searchinput",children:o.jsx(s,{})})}}},e={},t={render:function(){const[h,g]=S.useState("Tetrisly.com"),f=I=>{g(I.target.value)};return o.jsx(s,{value:h,onChange:f})}},r={args:{state:"disabled"}};var a,n,i;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:"{}",...(i=(n=e.parameters)==null?void 0:n.docs)==null?void 0:i.source}}};var c,p,m;t.parameters={...t.parameters,docs:{...(c=t.parameters)==null?void 0:c.docs,source:{originalSource:`{
  render: function ControlledSearchInput() {
    const [value, setValue] = useState('Tetrisly.com');
    const handleOnChange: ChangeEventHandler<HTMLInputElement> = e => {
      setValue(e.target.value);
    };
    return <InlineSearchInput value={value} onChange={handleOnChange} />;
  }
}`,...(m=(p=t.parameters)==null?void 0:p.docs)==null?void 0:m.source}}};var l,u,d;r.parameters={...r.parameters,docs:{...(l=r.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    state: 'disabled'
  }
}`,...(d=(u=r.parameters)==null?void 0:u.docs)==null?void 0:d.source}}};const G=["Default","Filled","Disabled"];export{e as Default,r as Disabled,t as Filled,G as __namedExportsOrder,B as default};
//# sourceMappingURL=InlineSearchInput.stories-e5c3a61d.js.map
