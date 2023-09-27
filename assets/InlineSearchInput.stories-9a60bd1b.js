import{j as e,t as l}from"./TetrislyProvider-dd60e1dd.js";import{r as S}from"./index-76fb7be0.js";import{S as v}from"./SearchInput-295cc8f9.js";import{m as b,T as _}from"./TetDocs-04998d33.js";import{S as j}from"./States-4e1d4491.js";import"./_commonjsHelpers-de833af9.js";import"./TextInput-b65d0be1.js";import"./tetrisly-icons.es-3ae3ef26.js";import"./Avatar-13b6b9ee.js";import"./Button-67032d5f.js";import"./index-7258ec25.js";import"./IconButton-dd57e112.js";import"./extractInputProps-bea3ee83.js";import"./index-812ad9f8.js";import"./iframe-f4ac13df.js";import"../sb-preview/runtime.js";import"./index-ffc7e5ff.js";import"./index-d37d4223.js";import"./index-356e4a49.js";const T={display:"inline-flex",h:"small",padding:"component-padding-xSmall component-padding-small",backgroundColor:{hover:"interaction-ghost-hover"},ring:{_:"unset"},ringColor:{_:"unset"},innerElements:{input:{w:"unset",h:"unset",minWidth:"50px",backgroundColor:"unset",padding:"unset",display:"inline-block"},beforeComponent:{spacing:{Icon:{marginLeft:"component-padding-small"}}}}},n=({custom:t,...s})=>{const i=S.useMemo(()=>b({defaultConfig:T,custom:t}),[t]);return e.jsx(v,{size:8,...s,custom:i})};try{n.displayName="InlineSearchInput",n.__docgenInfo={description:"",displayName:"InlineSearchInput",props:{custom:{defaultValue:null,description:"",name:"custom",required:!1,type:{name:"TextInputConfig"}},state:{defaultValue:null,description:"",name:"state",required:!1,type:{name:"enum",value:[{value:'"disabled"'}]}},hasClearButton:{defaultValue:null,description:"",name:"hasClearButton",required:!1,type:{name:"boolean"}}}}}catch{}const p=["normal","disabled"],D=()=>e.jsxs(l.section,{px:"1000",children:[e.jsx(j,{states:p,gap:"500"}),e.jsx(l.div,{display:"flex",gap:"500",children:p.map(t=>e.jsx(l.div,{display:"flex",flexBasis:"96px",flexShrink:"0",flexGrow:"1",children:e.jsx(n,{state:t==="normal"?void 0:"disabled"})},t))})]}),P={title:"InlineSearchInput",component:n,tags:["autodocs"],argTypes:{state:{control:{type:"select",options:["normal","disabled"]}}},parameters:{docs:{description:{component:"A distinctive text input field that allows users to search for content on a website or application, by entering keywords, phrases, or other search terms. Search Inputs often include a search icon and may provide autocomplete suggestions or filters to refine results."},page:()=>e.jsx(_,{docs:"https://docs.tetrisly.com/components/in-progress/searchinput",children:e.jsx(D,{})})}}},a={},r={render:function(){const[s,i]=S.useState("Tetrisly.com"),y=C=>{i(C.target.value)};return e.jsx(n,{value:s,onChange:y})}},o={args:{state:"disabled"}};var c,d,m;a.parameters={...a.parameters,docs:{...(c=a.parameters)==null?void 0:c.docs,source:{originalSource:"{}",...(m=(d=a.parameters)==null?void 0:d.docs)==null?void 0:m.source}}};var u,h,g;r.parameters={...r.parameters,docs:{...(u=r.parameters)==null?void 0:u.docs,source:{originalSource:`{
  render: function ControlledSearchInput() {
    const [value, setValue] = useState('Tetrisly.com');
    const handleOnChange: ChangeEventHandler<HTMLInputElement> = e => {
      setValue(e.target.value);
    };
    return <InlineSearchInput value={value} onChange={handleOnChange} />;
  }
}`,...(g=(h=r.parameters)==null?void 0:h.docs)==null?void 0:g.source}}};var f,x,I;o.parameters={...o.parameters,docs:{...(f=o.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    state: 'disabled'
  }
}`,...(I=(x=o.parameters)==null?void 0:x.docs)==null?void 0:I.source}}};const Q=["Default","Filled","Disabled"];export{a as Default,o as Disabled,r as Filled,Q as __namedExportsOrder,P as default};
//# sourceMappingURL=InlineSearchInput.stories-9a60bd1b.js.map
