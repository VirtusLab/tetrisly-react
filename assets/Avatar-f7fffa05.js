import{j as m}from"./jsx-runtime-ffb262ed.js";import{r as p}from"./index-76fb7be0.js";import{m as h}from"./TetDocs-0df82f5b.js";import{t as u}from"./TetrislyProvider-e15ac01a.js";const b={overflow:"hidden",position:"relative",display:"flex",alignItems:"center",justifyContent:"center",shape:{rounded:{borderRadius:"$border-radius-full"},square:{borderRadius:"$border-radius-large"}},size:{large:{w:"$size-large",h:"$size-large",text:"$typo-body-large"},medium:{w:"$size-medium",h:"$size-medium",text:"$typo-body-medium"},small:{w:"$size-small",h:"$size-small",text:"$typo-body-small"},xSmall:{w:"$size-xSmall",h:"$size-xSmall",text:"$typo-body-strong-xSmall"},"2xSmall":{w:"$size-2xSmall",h:"$size-2xSmall",text:"$typo-body-strong-xSmall"}},appearance:{image:{emphasis:{high:{},low:{}}},blue:{emphasis:{high:{color:"$color-nonSemantic-white-content-primary",backgroundColor:"$color-nonSemantic-blue-background-strong"},low:{color:"$color-nonSemantic-blue-content-primary",backgroundColor:"$color-nonSemantic-blue-background-muted"}}},green:{emphasis:{high:{color:"$color-nonSemantic-white-content-primary",backgroundColor:"$color-nonSemantic-green-background-strong"},low:{color:"$color-nonSemantic-green-content-primary",backgroundColor:"$color-nonSemantic-green-background-muted"}}},grey:{emphasis:{high:{color:"$color-nonSemantic-white-content-primary",backgroundColor:"$color-nonSemantic-grey-background-strong"},low:{color:"$color-nonSemantic-grey-content-primary",backgroundColor:"$color-nonSemantic-grey-background-muted"}}},red:{emphasis:{high:{color:"$color-nonSemantic-white-content-primary",backgroundColor:"$color-nonSemantic-red-background-strong"},low:{color:"$color-nonSemantic-red-content-primary",backgroundColor:"$color-nonSemantic-red-background-muted"}}},orange:{emphasis:{high:{color:"$color-nonSemantic-white-content-primary",backgroundColor:"$color-nonSemantic-orange-background-strong"},low:{color:"$color-nonSemantic-orange-content-primary",backgroundColor:"$color-nonSemantic-orange-background-muted"}}},raspberry:{emphasis:{high:{color:"$color-nonSemantic-white-content-primary",backgroundColor:"$color-nonSemantic-raspberry-background-strong"},low:{color:"$color-nonSemantic-raspberry-content-primary",backgroundColor:"$color-nonSemantic-raspberry-background-muted"}}},magenta:{emphasis:{high:{color:"$color-nonSemantic-white-content-primary",backgroundColor:"$color-nonSemantic-magenta-background-strong"},low:{color:"$color-nonSemantic-magenta-content-primary",backgroundColor:"$color-nonSemantic-magenta-background-muted"}}},purple:{emphasis:{high:{color:"$color-nonSemantic-white-content-primary",backgroundColor:"$color-nonSemantic-purple-background-strong"},low:{color:"$color-nonSemantic-purple-content-primary",backgroundColor:"$color-nonSemantic-purple-background-muted"}}},grape:{emphasis:{high:{color:"$color-nonSemantic-white-content-primary",backgroundColor:"$color-nonSemantic-grape-background-strong"},low:{color:"$color-nonSemantic-grape-content-primary",backgroundColor:"$color-nonSemantic-grape-background-muted"}}},violet:{emphasis:{high:{color:"$color-nonSemantic-white-content-primary",backgroundColor:"$color-nonSemantic-violet-background-strong"},low:{color:"$color-nonSemantic-violet-content-primary",backgroundColor:"$color-nonSemantic-violet-background-muted"}}},cyan:{emphasis:{high:{color:"$color-nonSemantic-white-content-primary",backgroundColor:"$color-nonSemantic-cyan-background-strong"},low:{color:"$color-nonSemantic-cyan-content-primary",backgroundColor:"$color-nonSemantic-cyan-background-muted"}}},teal:{emphasis:{high:{color:"$color-nonSemantic-white-content-primary",backgroundColor:"$color-nonSemantic-teal-background-strong"},low:{color:"$color-nonSemantic-teal-content-primary",backgroundColor:"$color-nonSemantic-teal-background-muted"}}},aquamarine:{emphasis:{high:{color:"$color-nonSemantic-white-content-primary",backgroundColor:"$color-nonSemantic-aquamarine-background-strong"},low:{color:"$color-nonSemantic-aquamarine-content-primary",backgroundColor:"$color-nonSemantic-aquamarine-background-muted"}}},emerald:{emphasis:{high:{color:"$color-nonSemantic-white-content-primary",backgroundColor:"$color-nonSemantic-emerald-background-strong"},low:{color:"$color-nonSemantic-emerald-content-primary",backgroundColor:"$color-nonSemantic-emerald-background-muted"}}}},innerElements:{image:{w:"100%",h:"100%"}}},$=({custom:o,variant:e})=>{const{appearance:n,shape:r,size:a,innerElements:{image:c},...t}=h({defaultConfig:b,custom:o}),{appearance:i,emphasis:l,shape:d,size:g}=e;return{container:{...n[i].emphasis[l],...r[d],...a[g],...t},image:c}},s=({appearance:o="blue",emphasis:e="low",shape:n="rounded",size:r="medium",custom:a,initials:c,img:t,...i})=>{const l=p.useMemo(()=>$({custom:a,variant:{appearance:o,emphasis:e,shape:n,size:r}}),[a,o,e,n,r]);return m.jsx(u.div,{...l.container,"data-testid":"avatar",...i,children:t?m.jsx(u.img,{...l.image,"data-testid":"avatar-image",...t}):c})};try{s.displayName="Avatar",s.__docgenInfo={description:"",displayName:"Avatar",props:{img:{defaultValue:null,description:"",name:"img",required:!1,type:{name:'Omit<ImgHTMLAttributes<HTMLImageElement>, "color">'}},appearance:{defaultValue:{value:"blue"},description:"",name:"appearance",required:!1,type:{name:"enum",value:[{value:'"red"'},{value:'"green"'},{value:'"orange"'},{value:'"image"'},{value:'"grey"'},{value:'"blue"'},{value:'"aquamarine"'},{value:'"cyan"'},{value:'"magenta"'},{value:'"purple"'},{value:'"teal"'},{value:'"violet"'},{value:'"raspberry"'},{value:'"grape"'},{value:'"emerald"'}]}},emphasis:{defaultValue:{value:"low"},description:"",name:"emphasis",required:!1,type:{name:"enum",value:[{value:'"low"'},{value:'"high"'}]}},initials:{defaultValue:null,description:"",name:"initials",required:!1,type:{name:"string"}},shape:{defaultValue:{value:"rounded"},description:"",name:"shape",required:!1,type:{name:"enum",value:[{value:'"square"'},{value:'"rounded"'}]}},size:{defaultValue:{value:"medium"},description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"large"'},{value:'"medium"'},{value:'"small"'},{value:'"xSmall"'},{value:'"2xSmall"'}]}},custom:{defaultValue:null,description:"",name:"custom",required:!1,type:{name:"AvatarConfig"}}}}}catch{}export{s as A};
//# sourceMappingURL=Avatar-f7fffa05.js.map