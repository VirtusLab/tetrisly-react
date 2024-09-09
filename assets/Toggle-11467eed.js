import{j as a}from"./jsx-runtime-ffb262ed.js";import{r as g}from"./index-76fb7be0.js";import{m as $}from"./mergeConfigWithCustom-aec35d44.js";import{H as y}from"./HelperText-56e11054.js";import{u as _}from"./useIndeterminate-f02e4f88.js";import{t as i}from"./TetrislyProvider-679426f7.js";const T={display:"inline-flex",flexDirection:"column",alignItems:"flex-start",gap:"$space-component-gap-xSmall",opacity:{_:1,disabled:.5},innerElements:{toggle:{toggleOval:{size:{large:{w:"36px",h:"20px"},small:{w:"28px",h:"16px"}},p:"$space-component-padding-2xSmall",backgroundColor:{_:"$color-interaction-disabled-normal",hover:"$color-interaction-disabled-hover",focus:"$color-interaction-disabled-focus",active:"$color-interaction-disabled-active",disabled:"$color-interaction-disabled-normal",selected:{_:"$color-interaction-default-normal",hover:"$color-interaction-default-hover",focus:"$color-interaction-default-focus",active:"$color-interaction-default-active",disabled:"$color-interaction-default-normal"},indeterminate:{_:"$color-interaction-default-normal",hover:"$color-interaction-default-hover",focus:"$color-interaction-default-focus",active:"$color-interaction-default-active",disabled:"$color-interaction-default-normal"}},transition:"0.2s",borderRadius:"100px",display:"flex",position:"relative",alignItems:"center",outlineColor:{focusWithin:"$color-interaction-focus-default"},outlineWidth:{focusWithin:"$border-width-focus"},outlineStyle:{focusWithin:"solid"},outlineOffset:{focusWithin:"$border-width-small"}},slider:{size:{large:{w:{_:"16px",indeterminate:"15px"},h:{_:"16px",indeterminate:"1.5px"},transform:{selected:"translateX(16px)",indeterminate:"translateX(8px)"}},small:{w:{_:"12px",indeterminate:"10px"},h:{_:"12px",indeterminate:"1.5px"},transform:{selected:"translateX(12px)",indeterminate:"translateX(7px)"}}},transition:"transform 0.2s ease-in-out",backgroundColor:"$color-whiteA-0",borderRadius:"$border-radius-full",borderWidth:"$border-width-small",borderStyle:"$border-style-solid",borderColor:"$color-border-defaultA",boxShadow:"$elevation-bottom-100",position:"absolute"},input:{borderRadius:"100px",w:"100%",h:"100%",appearance:"none",zIndex:1,cursor:{_:"pointer",disabled:"default"}}},labelContainer:{display:"flex",justifyContent:"center",alignItems:"center",gap:"$space-component-gap-medium",text:"$typo-body-medium",color:"$color-content-primary"},label:{cursor:{_:"pointer",disabled:"default"}},helperText:{paddingLeft:"$space-component-padding-2xLarge",cursor:"default"}}},w=(t,n)=>{const{innerElements:{toggle:{input:d,slider:{size:o,...p},toggleOval:{size:s,...c}},labelContainer:l,label:m,helperText:e},...u}=$({defaultConfig:T,custom:n});return{container:u,input:d,slider:{...o[t],...p},toggleOval:{...s[t],...c},labelContainer:l,label:m,helperText:e}},b=({isChecked:t=!1,helperText:n,label:d,state:o,isIndeterminate:p=!1,size:s="small",custom:c,onChange:l,...m})=>{const e=g.useMemo(()=>w(s,c),[c,s]),u=g.useId(),r=o==="disabled",f=!t&&p,x=_(f),v=g.useCallback(h=>{o!=="disabled"&&(l==null||l(h))},[l,o]);return a.jsxs(i.div,{...e.container,"aria-disabled":r,"data-testid":"toggle",...m,children:[a.jsxs(i.span,{...e.labelContainer,"aria-disabled":r,"data-testid":"toggle-label-container",children:[a.jsxs(i.span,{...e.toggleOval,"data-indeterminate":f?"indeterminate":void 0,"data-state":t?"selected":void 0,"aria-disabled":r,"data-testid":"toggle-oval",children:[a.jsx(i.span,{...e.slider,"data-indeterminate":f?"indeterminate":void 0,"data-state":t?"selected":void 0,"data-testid":"toggle-slider"}),a.jsx(i.input,{...e.input,type:"checkbox",role:"switch",disabled:r,checked:t,"data-testid":"toggle-input",id:u,onChange:v,ref:x})]}),d?a.jsx(i.label,{...e.label,"aria-disabled":r,"data-testid":"toggle-label",htmlFor:u,children:d}):null]}),!!n&&a.jsx(y,{custom:e.helperText,...n,"data-testid":"toggle-helper-text"})]})};try{b.displayName="Toggle",b.__docgenInfo={description:"",displayName:"Toggle",props:{isIndeterminate:{defaultValue:{value:"false"},description:"",name:"isIndeterminate",required:!1,type:{name:"boolean"}},isChecked:{defaultValue:{value:"false"},description:"",name:"isChecked",required:!1,type:{name:"boolean"}},size:{defaultValue:{value:"small"},description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"large"'},{value:'"small"'}]}},state:{defaultValue:null,description:"",name:"state",required:!1,type:{name:"enum",value:[{value:'"disabled"'}]}},custom:{defaultValue:null,description:"",name:"custom",required:!1,type:{name:"ToggleConfig"}},label:{defaultValue:null,description:"",name:"label",required:!1,type:{name:"string"}},helperText:{defaultValue:null,description:"",name:"helperText",required:!1,type:{name:'Pick<HelperTextProps, "text">'}}}}}catch{}export{b as T};
