import{j as a,t as i}from"./TetrislyProvider-dd60e1dd.js";import{R as m}from"./tetrisly-icons.es-3ae3ef26.js";import{r as d}from"./index-76fb7be0.js";import{m as p}from"./TetDocs-709b28a1.js";const f={display:"flex",alignItems:"flex-start",gap:"component-gap-xSmall",text:"medium-150",intent:{none:{color:"content-secondary"},alert:{color:"content-negative-secondary"},success:{color:"content-positive-secondary"}},innerElements:{iconContainer:{display:"flex",alignItems:"center",minHeight:"2xSmall"}}},x=e=>({none:"16-info",success:"16-check",alert:"16-alert-full"})[e],y=(e,n)=>{const{innerElements:t,intent:o,...r}=p({defaultConfig:f,custom:n}),{iconContainer:s}=t;return{container:{...o[e],...r},iconContainer:s}},c=({intent:e="none",beforeIcon:n=!1,counter:t,text:o,custom:r,...s})=>{const l=d.useMemo(()=>y(e,r),[e,r]),u=x(e);return a.jsxs(i.div,{...l.container,"data-testid":"helper-text",...s,children:[n&&a.jsx(i.span,{...l.iconContainer,"data-testid":"helper-text-iconContainer",children:a.jsx(m,{name:u,"data-testid":"helper-text-icon"})}),o,!!t&&a.jsx(i.span,{"data-testid":"helper-text-counter",children:`${t.current}/${t.max}`})]})};try{c.displayName="HelperText",c.__docgenInfo={description:"",displayName:"HelperText",props:{intent:{defaultValue:{value:"none"},description:"",name:"intent",required:!1,type:{name:"enum",value:[{value:'"success"'},{value:'"alert"'},{value:'"none"'}]}},counter:{defaultValue:null,description:"",name:"counter",required:!1,type:{name:"{ current: number; max: number; }"}},beforeIcon:{defaultValue:{value:"false"},description:"",name:"beforeIcon",required:!1,type:{name:"boolean"}},text:{defaultValue:null,description:"",name:"text",required:!0,type:{name:"string"}},custom:{defaultValue:null,description:"",name:"custom",required:!1,type:{name:"HelperTextConfig"}}}}}catch{}export{c as H};
//# sourceMappingURL=HelperText-52b844af.js.map
