import{j as e}from"./jsx-runtime-ffb262ed.js";import{r as S}from"./index-76fb7be0.js";import{S as b}from"./SearchInput-4b2ce407.js";import{m as v,T as _}from"./TetDocs-2be21399.js";import{S as j}from"./States-169872e7.js";import{t as l}from"./TetrislyProvider-e15ac01a.js";import"./_commonjsHelpers-de833af9.js";import"./TextInput-79db0d2b.js";import"./tetrisly-icons.es-3ae3ef26.js";import"./useTextInput-56d8c90c.js";import"./extractInputProps-bea3ee83.js";import"./Avatar-cf971d56.js";import"./Button-c029b701.js";import"./index-0f4c63fc.js";import"./IconButton-97139dc3.js";import"./index-f395c73a.js";import"./iframe-77b73892.js";import"../sb-preview/runtime.js";import"./index-d3ea75b5.js";import"./index-11d98b33.js";import"./index-8fd8397b.js";import"./index-356e4a49.js";const $={position:"relative",display:"inline-flex",w:"auto",h:"$size-small",padding:"$space-component-padding-xSmall $space-component-padding-small",backgroundColor:{hover:{_:"$color-interaction-ghost-hover",focusWithin:"$color-interaction-background-formField"}},ring:{_:"unset"},ringColor:{_:"unset"},innerElements:{input:{w:"unset",h:"unset",minWidth:"50px",backgroundColor:"transparent",padding:0,paddingRight:"36px",display:"inline-block"},clearButton:{position:"absolute",right:"$space-component-padding-small"},beforeComponent:{spacing:{Icon:{marginLeft:"$space-component-padding-small"}}}}},n=({custom:t,...s})=>{const i=S.useMemo(()=>v({defaultConfig:$,custom:t}),[t]);return e.jsx(b,{size:8,...s,custom:i})};try{n.displayName="InlineSearchInput",n.__docgenInfo={description:"",displayName:"InlineSearchInput",props:{custom:{defaultValue:null,description:"",name:"custom",required:!1,type:{name:"TextInputConfig"}},state:{defaultValue:null,description:"",name:"state",required:!1,type:{name:"enum",value:[{value:'"disabled"'}]}},hasClearButton:{defaultValue:null,description:"",name:"hasClearButton",required:!1,type:{name:"boolean"}}}}}catch{}const p=["normal","disabled"],T=()=>e.jsxs(l.section,{px:"$dimension-1000",children:[e.jsx(j,{states:p,gap:"$dimension-500"}),e.jsx(l.div,{display:"flex",gap:"$dimension-500",children:p.map(t=>e.jsx(l.div,{display:"flex",flexBasis:"96px",flexShrink:"0",flexGrow:"1",children:e.jsx(n,{state:t==="normal"?void 0:"disabled"})},t))})]}),U={title:"InlineSearchInput",component:n,tags:["autodocs"],argTypes:{state:{control:{type:"select",options:["normal","disabled"]}}},parameters:{docs:{description:{component:"A distinctive text input field that allows users to search for content on a website or application, by entering keywords, phrases, or other search terms. Search Inputs often include a search icon and may provide autocomplete suggestions or filters to refine results."},page:()=>e.jsx(_,{docs:"https://docs.tetrisly.com/components/in-progress/searchinput",children:e.jsx(T,{})})}}},o={},a={render:function(){const[s,i]=S.useState("Tetrisly.com"),y=C=>{i(C.target.value)};return e.jsx(n,{value:s,onChange:y})}},r={args:{state:"disabled"}};var c,d,m;o.parameters={...o.parameters,docs:{...(c=o.parameters)==null?void 0:c.docs,source:{originalSource:"{}",...(m=(d=o.parameters)==null?void 0:d.docs)==null?void 0:m.source}}};var u,g,h;a.parameters={...a.parameters,docs:{...(u=a.parameters)==null?void 0:u.docs,source:{originalSource:`{
  render: function ControlledSearchInput() {
    const [value, setValue] = useState('Tetrisly.com');
    const handleOnChange: ChangeEventHandler<HTMLInputElement> = e => {
      setValue(e.target.value);
    };
    return <InlineSearchInput value={value} onChange={handleOnChange} />;
  }
}`,...(h=(g=a.parameters)==null?void 0:g.docs)==null?void 0:h.source}}};var f,x,I;r.parameters={...r.parameters,docs:{...(f=r.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    state: 'disabled'
  }
}`,...(I=(x=r.parameters)==null?void 0:x.docs)==null?void 0:I.source}}};const X=["Default","Filled","Disabled"];export{o as Default,r as Disabled,a as Filled,X as __namedExportsOrder,U as default};
