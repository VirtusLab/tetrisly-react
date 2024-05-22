import{j as e}from"./jsx-runtime-ffb262ed.js";import{R as f}from"./tetrisly-icons.es-12549e88.js";import{r as u}from"./index-76fb7be0.js";import{m as v}from"./mergeConfigWithCustom-aec35d44.js";import{B as m}from"./Button-66056bbc.js";import{I as y}from"./IconButton-2cfc90d7.js";import{u as C}from"./useAction-275346b1.js";import{t as c}from"./TetrislyProvider-fe6220a9.js";const x={p:"$space-component-padding-medium",pl:"$space-component-padding-2xLarge",display:"flex",alignItems:"center",text:"$typo-body-medium",intent:{none:{backgroundColor:"$color-background-neutral-strong",color:"$color-content-primary-inverted"},success:{backgroundColor:"$color-background-positive-strong",color:"$color-content-primary-inverted"},warning:{backgroundColor:"$color-background-warning-strong",color:"$color-content-primary"},negative:{backgroundColor:"$color-background-negative-strong",color:"$color-content-primary-inverted"}},innerElements:{iconContainer:{mr:"$space-component-gap-small"},actionContainer:{display:"flex",alignItems:"center",justifyContent:"center",gap:"$space-component-gap-small",ml:"$space-component-gap-large"},closeButton:{ml:"auto"}}},b=o=>({none:"20-info-fill",success:"20-check-circle-fill",warning:"20-warning-fill",negative:"20-alert-fill"})[o],B=(o,t)=>{const{intent:r,innerElements:{iconContainer:l,actionContainer:a,closeButton:p},...n}=v({defaultConfig:x,custom:t}),i={appearance:o==="warning"?"reverseInverted":"inverted"},s={appearance:o==="warning"?"primary":"inverted"};return{container:{...r[o],...n},iconContainer:l,actionContainer:a,actionProps:i,closeButtonProps:s,closeButton:p}},d=({text:o,intent:t="none",custom:r,action:l,onCloseClick:a,...p})=>{const n=u.useMemo(()=>B(t,r),[t,r]),[i,s]=C(l),g=u.useMemo(()=>b(t),[t]);return e.jsxs(c.div,{...n.container,"data-testid":"alert-banner",...p,children:[e.jsx(c.span,{...n.iconContainer,"data-testid":"alert-banner-iconContainer",children:e.jsx(f,{name:g})}),o,i&&e.jsxs(c.div,{...n.actionContainer,"data-testid":"alert-banner-actionContainer",children:[e.jsx(m,{variant:"bare",...n.actionProps,...i}),s&&e.jsxs(e.Fragment,{children:[e.jsx(c.div,{children:"·"}),e.jsx(m,{variant:"bare",...n.actionProps,...s})]})]}),!!a&&e.jsx(y,{size:"small",variant:"ghost",intent:"none",icon:"20-close",onClick:a,...n.closeButton,...n.closeButtonProps,"data-testid":"alert-banner-closeButton"})]})};try{d.displayName="AlertBanner",d.__docgenInfo={description:"",displayName:"AlertBanner",props:{text:{defaultValue:null,description:"",name:"text",required:!0,type:{name:"string"}},intent:{defaultValue:{value:"none"},description:"",name:"intent",required:!1,type:{name:"enum",value:[{value:'"none"'},{value:'"success"'},{value:'"warning"'},{value:'"negative"'}]}},action:{defaultValue:null,description:"",name:"action",required:!1,type:{name:"ActionProp"}},onCloseClick:{defaultValue:null,description:"",name:"onCloseClick",required:!1,type:{name:"((e: MouseEvent<HTMLButtonElement, MouseEvent>) => void)"}},custom:{defaultValue:null,description:"",name:"custom",required:!1,type:{name:"AlertBannerConfig"}}}}}catch{}export{d as A};
