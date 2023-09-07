import{j as I}from"./TetrislyProvider-e2de8794.js";import{r as T}from"./index-76fb7be0.js";import{S as v}from"./SearchInput-c4b6cc5c.js";import{T as E}from"./TetDocs-9620155a.js";import"./_commonjsHelpers-de833af9.js";import"./TextInput-e2872c38.js";import"./tetrisly-icons.es-3ae3ef26.js";import"./Button-1b88b35b.js";import"./isKeyOf-b77e0457.js";import"./mergeConfigWithCutom-789678df.js";import"./index-d903fd8e.js";import"./Loader-65d02216.js";import"./IconButton-a56e72f5.js";import"./extractMarginProps-92c75e8c.js";import"./index-9490f817.js";import"./iframe-11caacb8.js";import"../sb-preview/runtime.js";import"./index-ffc7e5ff.js";import"./index-d37d4223.js";import"./index-356e4a49.js";const W={component:v,tags:["autodocs"],argTypes:{},parameters:{docs:{description:{component:"A distinctive text input field that allows users to search for content on a website or application, by entering keywords, phrases, or other search terms. Search Inputs often include a search icon and may provide autocomplete suggestions or filters to refine results."},page:()=>I.jsx(E,{docs:"https://docs.tetrisly.com/components/in-progress/searchinput"})}}},e={},r={render:function(){const[D,b]=T.useState("Tetrisly.com"),x=w=>{b(w.target.value)};return I.jsx(v,{value:D,onChange:x})}},o={args:{state:"disabled"}},t={args:{afterComponent:{type:"Dropdown",props:{label:"All"}}}},n={args:{afterComponent:{type:"IconButton",props:{icon:"20-filter"}}}};var s,a,p;e.parameters={...e.parameters,docs:{...(s=e.parameters)==null?void 0:s.docs,source:{originalSource:"{}",...(p=(a=e.parameters)==null?void 0:a.docs)==null?void 0:p.source}}};var c,i,m;r.parameters={...r.parameters,docs:{...(c=r.parameters)==null?void 0:c.docs,source:{originalSource:`{
  render: function ControlledSearchInput() {
    const [value, setValue] = useState('Tetrisly.com');
    const handleOnChange: ChangeEventHandler<HTMLInputElement> = e => {
      setValue(e.target.value);
    };
    return <SearchInput value={value} onChange={handleOnChange} />;
  }
}`,...(m=(i=r.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};var l,u,d;o.parameters={...o.parameters,docs:{...(l=o.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    state: 'disabled'
  }
}`,...(d=(u=o.parameters)==null?void 0:u.docs)==null?void 0:d.source}}};var g,h,f;t.parameters={...t.parameters,docs:{...(g=t.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    afterComponent: {
      type: 'Dropdown',
      props: {
        label: 'All'
      }
    }
  }
}`,...(f=(h=t.parameters)==null?void 0:h.docs)==null?void 0:f.source}}};var S,C,y;n.parameters={...n.parameters,docs:{...(S=n.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    afterComponent: {
      type: 'IconButton',
      props: {
        icon: '20-filter'
      }
    }
  }
}`,...(y=(C=n.parameters)==null?void 0:C.docs)==null?void 0:y.source}}};const X=["Default","Filled","Disabled","Dropdown","Icon"];export{e as Default,o as Disabled,t as Dropdown,r as Filled,n as Icon,X as __namedExportsOrder,W as default};
//# sourceMappingURL=SearchInput.stories-b284ccbc.js.map
