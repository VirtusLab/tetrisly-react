import{j as i}from"./TetrislyProvider-dd60e1dd.js";import{r as C}from"./index-76fb7be0.js";import{S}from"./SearchInput-f4163610.js";import{m as v}from"./mergeConfigWithCutom-789678df.js";import{T as x}from"./TetDocs-fb54da3c.js";import"./_commonjsHelpers-de833af9.js";import"./TextInput-d22002cc.js";import"./tetrisly-icons.es-3ae3ef26.js";import"./Avatar-f9815578.js";import"./Button-fd1576ae.js";import"./index-b1385167.js";import"./Loader-b026e082.js";import"./IconButton-91e88406.js";import"./extractInputProps-bea3ee83.js";import"./index-5858334a.js";import"./iframe-63468a1e.js";import"../sb-preview/runtime.js";import"./index-ffc7e5ff.js";import"./index-d37d4223.js";import"./index-356e4a49.js";const b={display:"inline-flex",h:"small",padding:"component-padding-xSmall component-padding-small",backgroundColor:{hover:"interaction-ghost-hover"},ring:{_:"unset"},ringColor:{_:"unset"},innerElements:{input:{w:"unset",h:"unset",minWidth:"50px",backgroundColor:"unset",padding:"unset",display:"inline-block"},beforeComponent:{spacing:{Icon:{marginLeft:"component-padding-small"}}}}},o=({custom:e,...a})=>{const s=C.useMemo(()=>v({defaultConfig:b,custom:e}),[e]);return i.jsx(S,{size:8,...a,custom:s})};try{o.displayName="InlineSearchInput",o.__docgenInfo={description:"",displayName:"InlineSearchInput",props:{custom:{defaultValue:null,description:"",name:"custom",required:!1,type:{name:"TextInputConfig"}},state:{defaultValue:null,description:"",name:"state",required:!1,type:{name:"enum",value:[{value:'"disabled"'}]}},hasClearButton:{defaultValue:null,description:"",name:"hasClearButton",required:!1,type:{name:"boolean"}}}}}catch{}const G={component:o,tags:["autodocs"],argTypes:{},parameters:{docs:{description:{component:"A distinctive text input field that allows users to search for content on a website or application, by entering keywords, phrases, or other search terms. Search Inputs often include a search icon and may provide autocomplete suggestions or filters to refine results."},page:()=>i.jsx(x,{docs:"https://docs.tetrisly.com/components/in-progress/searchinput"})}}},t={},n={render:function(){const[a,s]=C.useState("Tetrisly.com"),y=I=>{s(I.target.value)};return i.jsx(o,{value:a,onChange:y})}},r={args:{state:"disabled"}};var l,p,c;t.parameters={...t.parameters,docs:{...(l=t.parameters)==null?void 0:l.docs,source:{originalSource:"{}",...(c=(p=t.parameters)==null?void 0:p.docs)==null?void 0:c.source}}};var u,m,d;n.parameters={...n.parameters,docs:{...(u=n.parameters)==null?void 0:u.docs,source:{originalSource:`{
  render: function ControlledSearchInput() {
    const [value, setValue] = useState('Tetrisly.com');
    const handleOnChange: ChangeEventHandler<HTMLInputElement> = e => {
      setValue(e.target.value);
    };
    return <InlineSearchInput value={value} onChange={handleOnChange} />;
  }
}`,...(d=(m=n.parameters)==null?void 0:m.docs)==null?void 0:d.source}}};var g,h,f;r.parameters={...r.parameters,docs:{...(g=r.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    state: 'disabled'
  }
}`,...(f=(h=r.parameters)==null?void 0:h.docs)==null?void 0:f.source}}};const J=["Default","Filled","Disabled"];export{t as Default,r as Disabled,n as Filled,J as __namedExportsOrder,G as default};
//# sourceMappingURL=InlineSearchInput.stories-a62cfca5.js.map
