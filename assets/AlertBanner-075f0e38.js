import{j as n,t as l}from"./TetrislyProvider-dd60e1dd.js";import{R as f}from"./tetrisly-icons.es-3ae3ef26.js";import{r as m}from"./index-76fb7be0.js";import{m as v}from"./TetDocs-709b28a1.js";import{B as u}from"./Button-6c034911.js";import{I as y}from"./IconButton-d126fc38.js";import{u as C}from"./useAction-275346b1.js";const x={p:"component-padding-medium",pl:"component-padding-2xLarge",display:"flex",alignItems:"center",text:"body-medium",intent:{none:{backgroundColor:"background-neutral-strong",color:"content-primary-inverted"},positive:{backgroundColor:"background-positive-strong",color:"content-primary-inverted"},warning:{backgroundColor:"background-warning-strong",color:"content-primary"},negative:{backgroundColor:"background-negative-strong",color:"content-primary-inverted"}},innerElements:{iconContainer:{mr:"component-gap-small"},actionContainer:{display:"flex",alignItems:"center",justifyContent:"center",gap:"component-gap-small",ml:"component-gap-large"},closeButton:{ml:"auto"}}},b=t=>({none:"20-info-fill",positive:"20-info-fill",warning:"20-warning-fill",negative:"20-alert-fill"})[t],B=(t,o)=>{const{intent:r,innerElements:{iconContainer:c,actionContainer:a,closeButton:d},...e}=v({defaultConfig:x,custom:o}),i={appearance:t==="warning"?"reverseInverted":"inverted"},s={appearance:t==="warning"?"primary":"inverted"};return{container:{...r[t],...e},iconContainer:c,actionContainer:a,actionProps:i,closeButtonProps:s,closeButton:d}},p=({text:t,intent:o="none",custom:r,action:c,onCloseClick:a,...d})=>{const e=m.useMemo(()=>B(o,r),[o,r]),[i,s]=C(c),g=m.useMemo(()=>b(o),[o]);return n.jsxs(l.div,{...e.container,"data-testid":"alert-banner",...d,children:[n.jsx(l.span,{...e.iconContainer,"data-testid":"alert-banner-iconContainer",children:n.jsx(f,{name:g})}),t,i&&n.jsxs(l.div,{...e.actionContainer,"data-testid":"alert-banner-actionContainer",children:[n.jsx(u,{variant:"bare",...e.actionProps,...i}),s&&n.jsxs(n.Fragment,{children:[n.jsx(l.div,{children:"·"}),n.jsx(u,{variant:"bare",...e.actionProps,...s})]})]}),!!a&&n.jsx(y,{size:"small",variant:"ghost",intent:"none",icon:"20-close",onClick:a,...e.closeButton,...e.closeButtonProps,"data-testid":"alert-banner-closeButton"})]})};try{p.displayName="AlertBanner",p.__docgenInfo={description:"",displayName:"AlertBanner",props:{text:{defaultValue:null,description:"",name:"text",required:!0,type:{name:"string"}},intent:{defaultValue:{value:"none"},description:"",name:"intent",required:!1,type:{name:"enum",value:[{value:'"warning"'},{value:'"negative"'},{value:'"none"'},{value:'"positive"'}]}},action:{defaultValue:null,description:"",name:"action",required:!1,type:{name:"ActionProp"}},onCloseClick:{defaultValue:null,description:"",name:"onCloseClick",required:!1,type:{name:"((e: MouseEvent<HTMLButtonElement, MouseEvent>) => void)"}},custom:{defaultValue:null,description:"",name:"custom",required:!1,type:{name:"AlertBannerConfig"}}}}}catch{}export{p as A};
//# sourceMappingURL=AlertBanner-075f0e38.js.map
