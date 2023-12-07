import{j as e}from"./jsx-runtime-ffb262ed.js";import{r as A}from"./index-76fb7be0.js";import{S as i}from"./SearchInput-1a12df69.js";import{S as E}from"./SectionHeader-25e04435.js";import{S as k}from"./States-169872e7.js";import{t as c}from"./TetrislyProvider-e15ac01a.js";import{T as H}from"./TetDocs-48bdb334.js";import"./_commonjsHelpers-de833af9.js";import"./TextInput-fe3dcdcd.js";import"./tetrisly-icons.es-3ae3ef26.js";import"./useTextInput-7a1ee342.js";import"./extractInputProps-bea3ee83.js";import"./Avatar-769cbf65.js";import"./Button-9a66af41.js";import"./index-6a86c6f7.js";import"./IconButton-021f626b.js";import"./index-434e8b00.js";import"./iframe-7f6a535b.js";import"../sb-preview/runtime.js";import"./index-d3ea75b5.js";import"./index-11d98b33.js";import"./index-8fd8397b.js";import"./index-356e4a49.js";const l=["normal","disabled"],O=["No","Dropdown","IconButton"],$={No:void 0,Dropdown:{type:"Dropdown",props:{label:"All",onClick:()=>{}}},IconButton:{type:"IconButton",props:{icon:"20-placeholder",onClick:()=>{}}}},F=()=>e.jsx(e.Fragment,{children:O.map(o=>e.jsxs(c.section,{px:"$dimension-1000",children:[e.jsxs(E,{variant:"H2",as:"h2",py:"$dimension-500",children:["AfterComponent: ",o]}),e.jsx(k,{states:l,gap:"$dimension-500"}),e.jsx(c.div,{display:"flex",gap:"$dimension-500",children:l.map(r=>e.jsx(c.div,{display:"flex",flexBasis:"96px",flexShrink:"0",flexGrow:"1",children:e.jsx(i,{afterComponent:$[o],state:r==="normal"?void 0:"disabled"})},r))})]},o))}),se={title:"SearchInput",component:i,tags:["autodocs"],argTypes:{},parameters:{docs:{description:{component:"A distinctive text input field that allows users to search for content on a website or application, by entering keywords, phrases, or other search terms. Search Inputs often include a search icon and may provide autocomplete suggestions or filters to refine results."},page:()=>e.jsx(H,{docs:"https://docs.tetrisly.com/components/in-progress/searchinput",children:e.jsx(F,{})})}}},t={},n={render:function(){const[r,w]=A.useState("Tetrisly.com"),B=T=>{w(T.target.value)};return e.jsx(i,{value:r,onChange:B})}},s={args:{state:"disabled"}},a={args:{afterComponent:{type:"Dropdown",props:{label:"All"}}}},p={args:{afterComponent:{type:"IconButton",props:{icon:"20-filter"}}}};var m,d,u;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:"{}",...(u=(d=t.parameters)==null?void 0:d.docs)==null?void 0:u.source}}};var h,f,g;n.parameters={...n.parameters,docs:{...(h=n.parameters)==null?void 0:h.docs,source:{originalSource:`{
  render: function ControlledSearchInput() {
    const [value, setValue] = useState('Tetrisly.com');
    const handleOnChange: ChangeEventHandler<HTMLInputElement> = e => {
      setValue(e.target.value);
    };
    return <SearchInput value={value} onChange={handleOnChange} />;
  }
}`,...(g=(f=n.parameters)==null?void 0:f.docs)==null?void 0:g.source}}};var x,S,y;s.parameters={...s.parameters,docs:{...(x=s.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    state: 'disabled'
  }
}`,...(y=(S=s.parameters)==null?void 0:S.docs)==null?void 0:y.source}}};var C,I,v;a.parameters={...a.parameters,docs:{...(C=a.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    afterComponent: {
      type: 'Dropdown',
      props: {
        label: 'All'
      }
    }
  }
}`,...(v=(I=a.parameters)==null?void 0:I.docs)==null?void 0:v.source}}};var D,j,b;p.parameters={...p.parameters,docs:{...(D=p.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: {
    afterComponent: {
      type: 'IconButton',
      props: {
        icon: '20-filter'
      }
    }
  }
}`,...(b=(j=p.parameters)==null?void 0:j.docs)==null?void 0:b.source}}};const ae=["Default","Filled","Disabled","Dropdown","IconButton"];export{t as Default,s as Disabled,a as Dropdown,n as Filled,p as IconButton,ae as __namedExportsOrder,se as default};
