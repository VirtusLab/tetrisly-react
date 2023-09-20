import{j as i,t as l}from"./TetrislyProvider-dd60e1dd.js";import{r as d}from"./index-76fb7be0.js";import{m as h}from"./TetDocs-709b28a1.js";import{H as b}from"./HelperText-52b844af.js";import{e as g}from"./extractInputProps-bea3ee83.js";const y={display:"flex",flexDirection:"column",alignItems:"flex-start",gap:"component-gap-xSmall",minWidth:"3xSmall",minHeight:"3xSmall",color:"content-primary",opacity:{disabled:"disabled"},pointerEvents:{disabled:"none"},innerElements:{radioButton:{appearance:"none",display:"flex",w:"16px",h:"16px",justifyContent:"center",alignItems:"center",flexShrink:0,backgroundColor:"interaction-background-formField",ring:{_:"focus",checked:"5px"},borderRadius:"full",ringInset:!0,ringColor:{_:"interaction-border-neutral-normal",hover:"interaction-border-hover",checked:{_:"interaction-default-normal",hover:"interaction-default-hover"},alert:{_:"interaction-border-alert",hover:"interaction-border-alert"}},outlineStyle:{focusWithin:"solid"},outlineColor:{focusWithin:"interaction-focus-default"},outlineWidth:{focusWithin:"focus"},outlineOffset:{focusWithin:"small"},transition:!0,transitionDuration:200,cursor:"pointer"},label:{display:"flex",justifyContent:"center",alignItems:"center",gap:"component-gap-small",cursor:"pointer",color:"content-primary",text:"body-medium"},helperText:{pl:"component-padding-2xLarge"}}},_=t=>{const{innerElements:{radioButton:e,label:n,helperText:o},...r}=h({defaultConfig:y,custom:t});return{container:r,radioButton:e,label:n,helperText:o}},c=d.forwardRef(({isChecked:t,state:e,label:n,helperText:o,custom:r,...p},m)=>{const[f,x]=g(p),a=d.useMemo(()=>_(r),[r]),s=d.useId(),u=i.jsx(l.input,{type:"radio",ref:m,id:s,checked:t,disabled:e==="disabled","data-state":e,...a.radioButton,"data-testid":"radio-button-radioButton",...f});return i.jsxs(l.div,{...a.container,"data-state":e,"data-testid":"radio-button",...x,children:[n?i.jsxs(l.label,{htmlFor:s,...a.label,"data-testid":"radio-button-label",children:[u,n]}):u,!!o&&i.jsx(b,{custom:a.helperText,intent:e==="alert"?"alert":"none",beforeIcon:e==="alert",text:o,"data-testid":"radio-button-helperText"})]})});try{c.displayName="RadioButton",c.__docgenInfo={description:"",displayName:"RadioButton",props:{isChecked:{defaultValue:null,description:"",name:"isChecked",required:!1,type:{name:"boolean"}},state:{defaultValue:null,description:"",name:"state",required:!1,type:{name:"enum",value:[{value:'"disabled"'},{value:'"alert"'}]}},custom:{defaultValue:null,description:"",name:"custom",required:!1,type:{name:"RadioButtonConfig"}},label:{defaultValue:null,description:"",name:"label",required:!1,type:{name:"string"}},helperText:{defaultValue:null,description:"",name:"helperText",required:!1,type:{name:"string"}}}}}catch{}export{c as R};
//# sourceMappingURL=RadioButton-51ed7aea.js.map
