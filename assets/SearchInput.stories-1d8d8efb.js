import{j as l}from"./TetrislyProvider-7061dade.js";import{r as w}from"./index-61bf1805.js";import{T as E}from"./TextInput-e3d545ed.js";import{T as O}from"./TetDocs-826f09a7.js";import"./_commonjsHelpers-de833af9.js";import"./tetrisly-icons.es-9149c524.js";import"./lodash-f6b38868.js";import"./Button-61355177.js";import"./isKeyOf-b77e0457.js";import"./index-ee6748f9.js";import"./Loader-32b4d486.js";import"./IconButton-8fe213bb.js";import"./extractMarginProps-92c75e8c.js";import"./index-b548f5b7.js";import"./iframe-a3e680b1.js";import"../sb-preview/runtime.js";import"./index-d475d2ea.js";import"./index-6a5bd4ef.js";import"./index-d37d4223.js";import"./index-356e4a49.js";const V={type:"Icon",props:{name:"20-search"}},n=({placeholder:s="Search...",hasClearButton:p=!0,...c})=>l.jsx(E,{placeholder:s,type:"search",hasClearButton:p,beforeComponent:V,...c});try{n.displayName="SearchInput",n.__docgenInfo={description:"",displayName:"SearchInput",props:{custom:{defaultValue:null,description:"",name:"custom",required:!1,type:{name:"DeepPartial<TextInputConfig>"}},state:{defaultValue:null,description:"",name:"state",required:!1,type:{name:"enum",value:[{value:'"disabled"'},{value:'"alert"'}]}},hasClearButton:{defaultValue:{value:"true"},description:"",name:"hasClearButton",required:!1,type:{name:"boolean"}},afterComponent:{defaultValue:null,description:"",name:"afterComponent",required:!1,type:{name:"Dropdown | IconButton"}}}}}catch{}const Y={component:n,tags:["autodocs"],argTypes:{},parameters:{docs:{description:{component:"A distinctive text input field that allows users to search for content on a website or application, by entering keywords, phrases, or other search terms. Search Inputs often include a search icon and may provide autocomplete suggestions or filters to refine results."},page:()=>l.jsx(O,{docs:"https://docs.tetrisly.com/components/in-progress/searchinput"})}}},e={},r={render:function(){const[p,c]=w.useState("Tetrisly.com"),D=T=>{c(T.target.value)};return l.jsx(n,{value:p,onChange:D})}},t={args:{state:"disabled"}},o={args:{afterComponent:{type:"Dropdown",props:{label:"All"}}}},a={args:{afterComponent:{type:"IconButton",props:{icon:"20-filter"}}}};var i,u,m;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:"{}",...(m=(u=e.parameters)==null?void 0:u.docs)==null?void 0:m.source}}};var d,f,h;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`{
  render: function ControlledSearchInput() {
    const [value, setValue] = useState('Tetrisly.com');
    const handleOnChange: ChangeEventHandler<HTMLInputElement> = e => {
      setValue(e.target.value);
    };
    return <SearchInput value={value} onChange={handleOnChange} />;
  }
}`,...(h=(f=r.parameters)==null?void 0:f.docs)==null?void 0:h.source}}};var g,y,C;t.parameters={...t.parameters,docs:{...(g=t.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    state: 'disabled'
  }
}`,...(C=(y=t.parameters)==null?void 0:y.docs)==null?void 0:C.source}}};var I,S,v;o.parameters={...o.parameters,docs:{...(I=o.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    afterComponent: {
      type: 'Dropdown',
      props: {
        label: 'All'
      }
    }
  }
}`,...(v=(S=o.parameters)==null?void 0:S.docs)==null?void 0:v.source}}};var _,b,x;a.parameters={...a.parameters,docs:{...(_=a.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    afterComponent: {
      type: 'IconButton',
      props: {
        icon: '20-filter'
      }
    }
  }
}`,...(x=(b=a.parameters)==null?void 0:b.docs)==null?void 0:x.source}}};const Z=["Default","Filled","Disabled","Dropdown","Icon"];export{e as Default,t as Disabled,o as Dropdown,r as Filled,a as Icon,Z as __namedExportsOrder,Y as default};
//# sourceMappingURL=SearchInput.stories-1d8d8efb.js.map
