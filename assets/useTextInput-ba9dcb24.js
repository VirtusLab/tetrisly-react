import{r as o}from"./index-76fb7be0.js";import{m as x}from"./TetDocs-30a5e954.js";import{e as h}from"./extractInputProps-bea3ee83.js";const b={bg:"$color-interaction-background-formField",display:"flex",alignItems:"center",w:"100%",h:"$size-medium",padding:"$space-component-padding-small $space-component-padding-large",flexShrink:0,ringInset:!0,ring:"$border-width-small",ringColor:{_:"$color-interaction-border-neutral-normal",hoverWithoutButton:"$color-interaction-border-hover",alert:"$color-interaction-border-alert"},borderRadius:"$border-radius-large",opacity:{disabled:"$opacity-disabled"},outlineStyle:{"&:has(input:focus)":"solid"},outlineColor:{focusWithin:"$color-interaction-focus-default"},outlineWidth:{"&:has(input:focus)":"$border-width-focus"},outlineOffset:{alert:"$border-width-focus"},transition:!0,transitionDuration:50,cursor:"text",pointerEvents:{disabled:"none"},innerElements:{input:{w:"100%",h:"100%",outline:"none",text:"$typo-body-medium",color:{placeholder:"$color-content-tertiary"},p:0,backgroundColor:"transparent",opacity:{placeholder:1}},icon:{color:"$color-content-secondary"},text:{text:"$typo-body-medium",color:"$color-content-secondary"},clearButton:{marginLeft:"$space-component-gap-small"},beforeComponent:{spacing:{Icon:{marginLeft:"$space-component-padding-medium",marginRight:"$space-component-padding-small"},Avatar:{margin:"0 $space-component-padding-small"},Prefix:{margin:"0 $space-component-padding-large"},Dropdown:{marginLeft:"$space-component-padding-xSmall",marginRight:"$space-component-padding-small"}}},afterComponent:{spacing:{Icon:{marginLeft:"$space-component-padding-small",marginRight:"$space-component-padding-large"},Sufix:{marginLeft:"$space-component-padding-small",marginRight:"$space-component-padding-large"},Button:{marginLeft:"$space-component-padding-small",marginRight:"$space-component-padding-xSmall"},IconButton:{marginLeft:"$space-component-padding-small",marginRight:"$space-component-padding-xSmall"},Dropdown:{marginLeft:"$space-component-padding-small",marginRight:"$space-component-padding-xSmall"}}}}},S=(i,n,e)=>{const{innerElements:{input:t,icon:l,text:s,clearButton:r,beforeComponent:{spacing:p,...d},afterComponent:{spacing:m,...a}},...u}=x({defaultConfig:b,custom:i});return{container:u,input:t,icon:l,text:s,clearButton:r,beforeComponent:{...d,...n&&p[n]},afterComponent:{...a,...e&&m[e]}}},k=({custom:i,beforeComponent:n,afterComponent:e,onChange:t,...l})=>{const[s,r]=o.useState(""),p=o.useMemo(()=>S(i,n==null?void 0:n.type,e==null?void 0:e.type),[e==null?void 0:e.type,n==null?void 0:n.type,i]),[d,m]=h(l),a=o.useRef(null),u=o.useCallback(c=>{var $;if(c.target===a.current){const g=($=a.current)==null?void 0:$.querySelector("input");g==null||g.focus()}},[a]),f=o.useCallback(c=>{r(c.target.value),t==null||t(c)},[t]),y=o.useCallback(()=>{r(""),t==null||t({target:{value:""}})},[t]);return{innerValue:s,styles:p,textInputProps:d,containerProps:m,containerRef:a,handleContainerClick:u,handleOnChange:f,handleOnClear:y}};export{k as u};
//# sourceMappingURL=useTextInput-ba9dcb24.js.map
