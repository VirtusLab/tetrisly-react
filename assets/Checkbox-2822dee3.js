import{s as I,t as d,j as n}from"./TetrislyProvider-07235cd3.js";import{R as k}from"./tetrisly-icons.es-3ae3ef26.js";import{r as o}from"./index-76fb7be0.js";import{m as j}from"./mergeConfigWithCutom-789678df.js";import{H as q}from"./HelperText-9b1dff4c.js";import{e as V}from"./extractMarginProps-92c75e8c.js";const E=t=>{const e=o.useRef(null);return o.useEffect(()=>{e.current!==null&&(e.current.indeterminate=t)},[e,t]),e},T={display:"flex",flexDirection:"column",alignItems:"flex-start",gap:"component-gap-xSmall",minWidth:"3xSmall",minHeight:"3xSmall",color:"content-primary",opacity:{disabled:"disabled"},pointerEvents:{disabled:"none"},innerElements:{checkboxContainer:{position:"relative",cursor:"pointer"},input:{appearance:"none",display:"block",w:"3xSmall",h:"3xSmall",pointerEvents:"none",backgroundColor:{_:"interaction-background-formField",checked:{_:"interaction-default-normal",hover:"interaction-default-hover"},indeterminate:{_:"interaction-default-normal",hover:"interaction-default-hover"}},color:"white",ring:"focus",borderRadius:"medium",ringInset:!0,ringColor:{_:"interaction-border-neutral-normal",hover:"interaction-border-hover",checked:{_:"interaction-ghost-normal",hover:"interaction-ghost-normal"},alert:{_:"interaction-border-alert",hover:"interaction-border-alert"},indeterminate:"transparent"},outlineStyle:{focusWithin:"solid"},outlineColor:{focusWithin:"interaction-focus-default"},outlineWidth:{focusWithin:"focus"},outlineOffset:{focusWithin:"small"},transition:!0,transitionDuration:200},checkboxIcon:{position:"absolute",color:"interaction-inverted-normal",w:"3xSmall",h:"3xSmall",left:0,top:0},label:{display:"flex",justifyContent:"center",alignItems:"center",gap:"component-gap-small",cursor:"pointer",color:"content-primary",text:"body-medium"},helperText:{paddingLeft:"component-padding-2xLarge"}}},S=t=>{const{innerElements:{input:e,checkboxContainer:r,checkboxIcon:a,label:u,helperText:m},...p}=j({defaultConfig:T,custom:t});return{container:p,input:e,checkboxContainer:r,checkboxIcon:a,label:u,helperText:m}},f=I(d.div)`
  input + div > #checkmark {
    display: none;
    pointer-events: none;
  }

  input:checked + div > #checkmark {
    display: block;
  }
`,y=o.forwardRef(({isChecked:t,isIndeterminate:e=!1,state:r,label:a,helperText:u,custom:m,...p},c)=>{const i=o.useMemo(()=>S(m),[m]),h=o.useId(),s=E(e),[g,C]=V(p),v=o.useCallback(l=>{s.current=l,typeof c=="function"?c(l):c&&(c.current=l)},[c,s]),_=o.useCallback(()=>{var l,b;a||((l=s.current)==null||l.click(),(b=s.current)==null||b.focus())},[s,a]),x=n.jsxs(f,{...i.checkboxContainer,"data-testid":"checkbox-checkboxContainer",children:[n.jsx(d.input,{...i.input,type:"checkbox",ref:v,checked:t,disabled:r==="disabled","data-state":r,id:h,"data-testid":"checkbox-input",...C}),n.jsxs(d.div,{...i.checkboxIcon,onClick:_,"data-testid":"checkbox-checkboxIcon",children:[e&&n.jsx(k,{name:"16-minus"}),n.jsx(k,{name:"16-check",id:"checkmark"})]})]});return n.jsxs(d.div,{...i.container,"data-state":r,"data-testid":"checkbox",...g,children:[a?n.jsxs(d.label,{...i.label,htmlFor:h,"data-testid":"checkbox-label",children:[x,a]}):x,!!u&&n.jsx(q,{custom:i.helperText,intent:r==="alert"?"alert":"none",beforeIcon:r==="alert",text:u,"data-testid":"checkbox-helperText"})]})});try{f.displayName="CheckboxContainer",f.__docgenInfo={description:"",displayName:"CheckboxContainer",props:{ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"((instance: HTMLDivElement | null) => void) | RefObject<HTMLDivElement> | null"}},theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"Theme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"undefined"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"undefined"}}}}}catch{}try{y.displayName="Checkbox",y.__docgenInfo={description:"",displayName:"Checkbox",props:{isChecked:{defaultValue:null,description:"",name:"isChecked",required:!1,type:{name:"boolean"}},isIndeterminate:{defaultValue:{value:"false"},description:"",name:"isIndeterminate",required:!1,type:{name:"boolean"}},state:{defaultValue:null,description:"",name:"state",required:!1,type:{name:"enum",value:[{value:'"disabled"'},{value:'"alert"'}]}},custom:{defaultValue:null,description:"",name:"custom",required:!1,type:{name:"CheckboxConfig"}},label:{defaultValue:null,description:"",name:"label",required:!1,type:{name:"string"}},helperText:{defaultValue:null,description:"",name:"helperText",required:!1,type:{name:"string"}}}}}catch{}export{y as C};
//# sourceMappingURL=Checkbox-2822dee3.js.map
