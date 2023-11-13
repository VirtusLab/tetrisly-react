import{j as e}from"./jsx-runtime-ffb262ed.js";import{s as C,t as o,c as k,u as q}from"./TetrislyProvider-e15ac01a.js";import{r as V}from"./index-76fb7be0.js";import{m as A,T as J}from"./TetDocs-e278ae14.js";import{A as D}from"./Avatar-a3d20894.js";import{B as m}from"./Button-74c67a4e.js";import{L as O}from"./Label-5d35847e.js";import"./_commonjsHelpers-de833af9.js";import"./index-b46c796a.js";import"./iframe-31d3a9db.js";import"../sb-preview/runtime.js";import"./index-ffc7e5ff.js";import"./index-d37d4223.js";import"./index-356e4a49.js";import"./tetrisly-icons.es-3ae3ef26.js";import"./index-089407de.js";const u=C(o.div)``,E=C(o.div)`
  ${({isOpen:t})=>t===void 0&&k`
      ${u} {
        opacity: 0;
        pointer-events: none;
      }

      &:hover ${u} {
        opacity: 1;
        pointer-events: all;
      }
    `}
`,z={position:"relative",display:"inline-flex",origin:{top:{align:{start:{transform:"translate(0%, -100%) translateZ(0)",left:"50%"},center:{transform:"translate(-50%, -100%) translateZ(0)",left:"50%"},end:{transform:"translate(-100%, -100%) translateZ(0)",left:"50%"}}},bottom:{align:{start:{transform:"translate(0%, 100%) translateZ(0)",left:"50%"},center:{transform:"translate(-50%, 100%) translateZ(0)",left:"50%"},end:{transform:"translate(-100%, 100%) translateZ(0)",left:"50%"}}},left:{align:{start:{transform:"translate(-100%, 0%) translateZ(0)",top:"50%"},center:{transform:"translate(-100%, -50%) translateZ(0)",top:"50%"},end:{transform:"translate(-100%, -100%) translateZ(0)",top:"50%"}}},right:{align:{start:{transform:"translate(100%, 0%) translateZ(0)",top:"50%"},center:{transform:"translate(100%, -50%) translateZ(0)",top:"50%"},end:{transform:"translate(100%, -100%) translateZ(0)",top:"50%"}}}},innerElements:{content:{position:"absolute",text:"$typo-body-medium",color:"$color-content-secondary",padding:"$space-component-padding-large",ring:"$border-width-small",ringColor:"$color-border-defaultA",boxShadow:"$elevation-bottom-300",backgroundColor:"$color-interaction-background-modeless",borderRadius:"$border-radius-large",zIndex:1e3,transition:!0,transitionDuration:200}}},B=({origin:t,align:a,custom:p})=>{const{origin:d,innerElements:{content:r},...n}=A({defaultConfig:z,custom:p});return{container:n,content:{...d[t].align[a],...r}}},c=({align:t="center",origin:a="top",offset:p="$space-component-gap-large",content:d,isOpen:r,custom:n,children:Z,width:P="fit-content",...S})=>{const f=V.useMemo(()=>B({origin:a,align:t,custom:n}),[a,t,n]),_=q(p),I={[a]:`-${_}`};return e.jsxs(E,{isOpen:r,...f.container,"data-testid":"popover",...S,children:[e.jsx(u,{...f.content,...I,w:P,opacity:r===!1?"0":"1","data-testid":"popover-content",children:d}),Z]})};try{c.displayName="Popover",c.__docgenInfo={description:"",displayName:"Popover",props:{content:{defaultValue:null,description:"",name:"content",required:!0,type:{name:"ReactNode"}},offset:{defaultValue:{value:"$space-component-gap-large"},description:"",name:"offset",required:!1,type:{name:"SystemProp<keyof Space, Theme>"}},align:{defaultValue:{value:"center"},description:"",name:"align",required:!1,type:{name:"enum",value:[{value:'"start"'},{value:'"center"'},{value:'"end"'}]}},origin:{defaultValue:{value:"top"},description:"",name:"origin",required:!1,type:{name:"enum",value:[{value:'"top"'},{value:'"right"'},{value:'"bottom"'},{value:'"left"'}]}},isOpen:{defaultValue:null,description:"",name:"isOpen",required:!1,type:{name:"boolean"}},width:{defaultValue:{value:"fit-content"},description:"Width of a content container",name:"width",required:!1,type:{name:"SystemProp<Width<number>, Theme>"}},custom:{defaultValue:null,description:"",name:"custom",required:!1,type:{name:"PopoverConfig"}}}}}catch{}const R=()=>e.jsx(o.div,{}),ae={title:"Popover",component:c,tags:["autodocs"],args:{content:e.jsxs(o.div,{display:"flex",gap:"12px",alignItems:"center",w:"324px",children:[e.jsx(D,{appearance:"image",img:{src:"https://thispersondoesnotexist.com/",alt:"Random person"}}),e.jsxs(o.div,{display:"flex",flexDirection:"column",children:[e.jsx(o.span,{color:"$color-content-primary",text:"$typo-body-strong-large",children:"John Doe"}),e.jsx(o.span,{color:"$color-content-tertiary",text:"$typo-body-medium",children:"johndoe@gmail.com"})]}),e.jsx(m,{appearance:"secondary",size:"small",beforeIcon:"20-check-large",label:"Following",ml:"auto"})]})},parameters:{docs:{description:{component:"A temporary, floating modal view that displays additional information or options when a user interacts with a specific element. Popovers can be triggered by various actions, such as hovering, clicking, or focusing."},page:()=>e.jsx(J,{docs:"https://docs.tetrisly.com/components/in-progress/popover",children:e.jsx(R,{})})}},render:t=>e.jsx(o.div,{h:"320px",w:"100%",display:"flex",justifyContent:"center",alignItems:"center",children:e.jsx(c,{...t,children:e.jsx(m,{label:"John Doe"})})})},s={},i={args:{isOpen:!0}},l={args:{content:e.jsxs(o.div,{display:"flex",alignItems:"center",gap:"$space-component-gap-large",children:[e.jsx(D,{initials:"JD",size:"medium"}),e.jsx(O,{label:"John Doe"}),e.jsx(m,{appearance:"secondary",label:"Following",beforeIcon:"20-check-large"})]}),width:"300px"}};var g,y,v;s.parameters={...s.parameters,docs:{...(g=s.parameters)==null?void 0:g.docs,source:{originalSource:"{}",...(v=(y=s.parameters)==null?void 0:y.docs)==null?void 0:v.source}}};var h,x,b;i.parameters={...i.parameters,docs:{...(h=i.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    isOpen: true
  }
}`,...(b=(x=i.parameters)==null?void 0:x.docs)==null?void 0:b.source}}};var j,$,w;l.parameters={...l.parameters,docs:{...(j=l.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    content: <tet.div display="flex" alignItems="center" gap="$space-component-gap-large">
        <Avatar initials="JD" size="medium" />
        <Label label="John Doe" />
        <Button appearance="secondary" label="Following" beforeIcon="20-check-large" />
      </tet.div>,
    width: '300px'
  }
}`,...(w=($=l.parameters)==null?void 0:$.docs)==null?void 0:w.source}}};const re=["Default","Open","CustomContent"];export{l as CustomContent,s as Default,i as Open,re as __namedExportsOrder,ae as default};
//# sourceMappingURL=Popover.stories-bdaa57a6.js.map
