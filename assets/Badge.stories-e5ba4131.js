import{j as n,t as o}from"./TetrislyProvider-e2de8794.js";import{R as y}from"./tetrisly-icons.es-3ae3ef26.js";import{r as X}from"./index-76fb7be0.js";import{m as _}from"./mergeConfigWithCutom-789678df.js";import"./_commonjsHelpers-de833af9.js";const P={display:"flex",w:"fit-content",h:"xSmall",borderRadius:"large",flexShrink:0,alignItems:"center",gap:"component-gap-xSmall",p:"component-padding-xSmall",hasLabel:{px:"component-padding-small"},appearance:{blue:{high:{color:"nonSemantic-white-content-primary",backgroundColor:"nonSemantic-blue-background-strong"},medium:{color:"nonSemantic-blue-content-primary",backgroundColor:"nonSemantic-blue-background-muted"},low:{color:"nonSemantic-blue-content-primary",backgroundColor:"nonSemantic-blue-background-onSubtle"}},green:{high:{color:"nonSemantic-white-content-primary",backgroundColor:"nonSemantic-green-background-strong"},medium:{color:"nonSemantic-green-content-primary",backgroundColor:"nonSemantic-green-background-muted"},low:{color:"nonSemantic-green-content-primary",backgroundColor:"nonSemantic-green-background-onSubtle"}},grey:{high:{color:"nonSemantic-white-content-primary",backgroundColor:"nonSemantic-grey-background-strong"},medium:{color:"nonSemantic-grey-content-primary",backgroundColor:"nonSemantic-grey-background-muted"},low:{color:"nonSemantic-grey-content-primary",backgroundColor:"nonSemantic-grey-background-onSubtle"}},red:{high:{color:"nonSemantic-white-content-primary",backgroundColor:"nonSemantic-red-background-strong"},medium:{color:"nonSemantic-red-content-primary",backgroundColor:"nonSemantic-red-background-muted"},low:{color:"nonSemantic-red-content-primary",backgroundColor:"nonSemantic-red-background-onSubtle"}},orange:{high:{color:"nonSemantic-white-content-primary",backgroundColor:"nonSemantic-orange-background-strong"},medium:{color:"nonSemantic-orange-content-primary",backgroundColor:"nonSemantic-orange-background-muted"},low:{color:"nonSemantic-orange-content-primary",backgroundColor:"nonSemantic-orange-background-onSubtle"}},raspberry:{high:{color:"nonSemantic-white-content-primary",backgroundColor:"nonSemantic-raspberry-background-strong"},medium:{color:"nonSemantic-raspberry-content-primary",backgroundColor:"nonSemantic-raspberry-background-muted"},low:{color:"nonSemantic-raspberry-content-primary",backgroundColor:"nonSemantic-raspberry-background-onSubtle"}},magenta:{high:{color:"nonSemantic-white-content-primary",backgroundColor:"nonSemantic-magenta-background-strong"},medium:{color:"nonSemantic-magenta-content-primary",backgroundColor:"nonSemantic-magenta-background-muted"},low:{color:"nonSemantic-magenta-content-primary",backgroundColor:"nonSemantic-magenta-background-onSubtle"}},purple:{high:{color:"nonSemantic-white-content-primary",backgroundColor:"nonSemantic-purple-background-strong"},medium:{color:"nonSemantic-purple-content-primary",backgroundColor:"nonSemantic-purple-background-muted"},low:{color:"nonSemantic-purple-content-primary",backgroundColor:"nonSemantic-purple-background-onSubtle"}},grape:{high:{color:"nonSemantic-white-content-primary",backgroundColor:"nonSemantic-grape-background-strong"},medium:{color:"nonSemantic-grape-content-primary",backgroundColor:"nonSemantic-grape-background-muted"},low:{color:"nonSemantic-grape-content-primary",backgroundColor:"nonSemantic-grape-background-onSubtle"}},violet:{high:{color:"nonSemantic-white-content-primary",backgroundColor:"nonSemantic-violet-background-strong"},medium:{color:"nonSemantic-violet-content-primary",backgroundColor:"nonSemantic-violet-background-muted"},low:{color:"nonSemantic-violet-content-primary",backgroundColor:"nonSemantic-violet-background-onSubtle"}},cyan:{high:{color:"nonSemantic-white-content-primary",backgroundColor:"nonSemantic-cyan-background-strong"},medium:{color:"nonSemantic-cyan-content-primary",backgroundColor:"nonSemantic-cyan-background-muted"},low:{color:"nonSemantic-cyan-content-primary",backgroundColor:"nonSemantic-cyan-background-onSubtle"}},teal:{high:{color:"nonSemantic-white-content-primary",backgroundColor:"nonSemantic-teal-background-strong"},medium:{color:"nonSemantic-teal-content-primary",backgroundColor:"nonSemantic-teal-background-muted"},low:{color:"nonSemantic-teal-content-primary",backgroundColor:"nonSemantic-teal-background-onSubtle"}},aquamarine:{high:{color:"nonSemantic-white-content-primary",backgroundColor:"nonSemantic-aquamarine-background-strong"},medium:{color:"nonSemantic-aquamarine-content-primary",backgroundColor:"nonSemantic-aquamarine-background-muted"},low:{color:"nonSemantic-aquamarine-content-primary",backgroundColor:"nonSemantic-aquamarine-background-onSubtle"}},emerald:{high:{color:"nonSemantic-white-content-primary",backgroundColor:"nonSemantic-emerald-background-strong"},medium:{color:"nonSemantic-emerald-content-primary",backgroundColor:"nonSemantic-emerald-background-muted"},low:{color:"nonSemantic-emerald-content-primary",backgroundColor:"nonSemantic-emerald-background-onSubtle"}},outline:{high:{border:"1px solid",borderColor:"nonSemantic-grey-border-strong",color:"nonSemantic-grey-content-primary",backgroundColor:"nonSemantic-white-background-strong"},medium:{border:"1px solid",borderColor:"nonSemantic-grey-border-strong",color:"nonSemantic-grey-content-primary",backgroundColor:"nonSemantic-white-background-strong"},low:{border:"1px solid",borderColor:"nonSemantic-grey-border-strong",color:"nonSemantic-grey-content-primary",backgroundColor:"nonSemantic-white-background-strong"}}},intent:{neutral:{high:{color:"content-primary-inverted",backgroundColor:"background-neutral-strong"},medium:{color:"content-primary",backgroundColor:"background-neutral-muted"},low:{color:"content-primary",backgroundColor:"background-neutral-onSubtle"}},informative:{high:{color:"content-primary-inverted",backgroundColor:"background-informative-strong"},medium:{color:"content-informative-primary",backgroundColor:"background-informative-muted"},low:{color:"content-informative-primary",backgroundColor:"background-informative-onSubtle"}},positive:{high:{color:"content-primary-inverted",backgroundColor:"background-positive-strong"},medium:{color:"content-positive-primary",backgroundColor:"background-positive-muted"},low:{color:"content-positive-primary",backgroundColor:"background-positive-onSubtle"}},warning:{high:{color:"content-primary",backgroundColor:"background-warning-strong"},medium:{color:"content-warning-primary",backgroundColor:"background-warning-muted"},low:{color:"content-warning-primary",backgroundColor:"background-warning-onSubtle"}},negative:{high:{color:"content-primary-inverted",backgroundColor:"background-negative-strong"},medium:{color:"content-negative-primary",backgroundColor:"background-negative-muted"},low:{color:"content-negative-primary",backgroundColor:"background-negative-onSubtle"}}},innerElements:{label:{},iconContainer:{}}},R=(e,m,t,v,l)=>{const{innerElements:c,hasLabel:i,intent:u,appearance:h,...d}=_({defaultConfig:P,custom:e}),r=l?h[l][t]:u[m][t];return{container:{...d,...r,...v?i:{}},iconContainer:c.iconContainer,label:c.label}},a=({appearance:e,intent:m="neutral",emphasis:t="high",icon:v,beforeIcon:l=v,afterIcon:c,label:i,custom:u,...h})=>{const d=!!i,r=X.useMemo(()=>R(u,m,t,d,e),[u,m,t,d,e]);return n.jsxs(o.div,{...r.container,...h,"data-testid":"badge",children:[!!l&&n.jsx(o.span,{...r.iconContainer,children:n.jsx(y,{name:l,"data-testid":"badge-icon"})}),!!i&&n.jsx(o.span,{...r.label,children:i}),!!c&&n.jsx(o.span,{...r.iconContainer,children:n.jsx(y,{name:c,"data-testid":"badge-icon"})})]})};try{a.displayName="Badge",a.__docgenInfo={description:"",displayName:"Badge",props:{appearance:{defaultValue:null,description:"",name:"appearance",required:!1,type:{name:"enum",value:[{value:'"outline"'},{value:'"red"'},{value:'"green"'},{value:'"orange"'},{value:'"aquamarine"'},{value:'"blue"'},{value:'"cyan"'},{value:'"grey"'},{value:'"magenta"'},{value:'"purple"'},{value:'"teal"'},{value:'"violet"'},{value:'"raspberry"'},{value:'"grape"'},{value:'"emerald"'}]}},intent:{defaultValue:{value:"neutral"},description:"",name:"intent",required:!1,type:{name:"enum",value:[{value:'"neutral"'},{value:'"informative"'},{value:'"warning"'},{value:'"negative"'},{value:'"positive"'}]}},label:{defaultValue:null,description:"",name:"label",required:!1,type:{name:"string"}},beforeIcon:{defaultValue:null,description:"",name:"beforeIcon",required:!1,type:{name:"enum",value:[{value:'"16-alert-full"'},{value:'"16-arrowhead-down-small"'},{value:'"16-arrowhead-down"'},{value:'"16-arrowhead-left-small"'},{value:'"16-arrowhead-left"'},{value:'"16-arrowhead-right-small"'},{value:'"16-arrowhead-right"'},{value:'"16-arrowhead-top-small"'},{value:'"16-arrowhead-top"'},{value:'"16-bolt"'},{value:'"16-check"'},{value:'"16-chevron-down"'},{value:'"16-chevron-left"'},{value:'"16-chevron-right"'},{value:'"16-chevron-top"'},{value:'"16-close"'},{value:'"16-dot"'},{value:'"16-info"'},{value:'"16-minus"'},{value:'"16-plus"'}]}},afterIcon:{defaultValue:null,description:"",name:"afterIcon",required:!1,type:{name:"enum",value:[{value:'"16-alert-full"'},{value:'"16-arrowhead-down-small"'},{value:'"16-arrowhead-down"'},{value:'"16-arrowhead-left-small"'},{value:'"16-arrowhead-left"'},{value:'"16-arrowhead-right-small"'},{value:'"16-arrowhead-right"'},{value:'"16-arrowhead-top-small"'},{value:'"16-arrowhead-top"'},{value:'"16-bolt"'},{value:'"16-check"'},{value:'"16-chevron-down"'},{value:'"16-chevron-left"'},{value:'"16-chevron-right"'},{value:'"16-chevron-top"'},{value:'"16-close"'},{value:'"16-dot"'},{value:'"16-info"'},{value:'"16-minus"'},{value:'"16-plus"'}]}},icon:{defaultValue:null,description:"",name:"icon",required:!1,type:{name:"enum",value:[{value:'"16-alert-full"'},{value:'"16-arrowhead-down-small"'},{value:'"16-arrowhead-down"'},{value:'"16-arrowhead-left-small"'},{value:'"16-arrowhead-left"'},{value:'"16-arrowhead-right-small"'},{value:'"16-arrowhead-right"'},{value:'"16-arrowhead-top-small"'},{value:'"16-arrowhead-top"'},{value:'"16-bolt"'},{value:'"16-check"'},{value:'"16-chevron-down"'},{value:'"16-chevron-left"'},{value:'"16-chevron-right"'},{value:'"16-chevron-top"'},{value:'"16-close"'},{value:'"16-dot"'},{value:'"16-info"'},{value:'"16-minus"'},{value:'"16-plus"'}]}},emphasis:{defaultValue:{value:"high"},description:"",name:"emphasis",required:!1,type:{name:"enum",value:[{value:'"low"'},{value:'"high"'},{value:'"medium"'}]}},custom:{defaultValue:null,description:"",name:"custom",required:!1,type:{name:"BadgeConfig"}}}}}catch{}const k=["blue","green","grey","red","orange","raspberry","magenta","purple","grape","violet","cyan","teal","aquamarine","emerald","outline"],S=["neutral","informative","positive","warning","negative"],Y={title:"Components/Badge",component:a,tags:["autodocs"]},p={args:{intent:"informative",emphasis:"high",label:"Label"}},g={args:{appearance:"blue",icon:"16-bolt"}},s={args:{intent:"informative",label:"Label",beforeIcon:"16-bolt",afterIcon:"16-bolt"}},b=()=>n.jsxs(o.div,{spaceY:"component-gap-small",children:[n.jsx(o.p,{children:"High emphasis"}),n.jsx(o.div,{display:"flex",spaceX:"component-gap-small",children:k.filter(e=>e!=="outline").map(e=>n.jsx(a,{appearance:e,icon:"16-bolt"},e))}),n.jsx(o.div,{display:"flex",spaceX:"component-gap-small",children:S.map(e=>n.jsx(a,{intent:e,icon:"16-bolt"},e))}),n.jsx(o.p,{children:"Medium emphasis"}),n.jsx(o.div,{display:"flex",spaceX:"component-gap-small",children:k.map(e=>n.jsx(a,{appearance:e,emphasis:"medium",icon:"16-bolt"},e))}),n.jsx(o.div,{display:"flex",spaceX:"component-gap-small",children:S.map(e=>n.jsx(a,{intent:e,emphasis:"medium",icon:"16-bolt"},e))}),n.jsx(o.p,{children:"Low emphasis"}),n.jsx(o.div,{display:"flex",spaceX:"component-gap-small",children:k.filter(e=>e!=="outline").map(e=>n.jsx(a,{appearance:e,emphasis:"low",icon:"16-bolt"},e))}),n.jsx(o.div,{display:"flex",spaceX:"component-gap-small",children:S.map(e=>n.jsx(a,{intent:e,emphasis:"low",icon:"16-bolt"},e))})]});var w,f,C;p.parameters={...p.parameters,docs:{...(w=p.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    intent: 'informative',
    emphasis: 'high',
    label: 'Label'
  }
}`,...(C=(f=p.parameters)==null?void 0:f.docs)==null?void 0:C.source}}};var x,j,E;g.parameters={...g.parameters,docs:{...(x=g.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    appearance: 'blue',
    icon: '16-bolt'
  }
}`,...(E=(j=g.parameters)==null?void 0:j.docs)==null?void 0:E.source}}};var I,q,A;s.parameters={...s.parameters,docs:{...(I=s.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    intent: 'informative',
    label: 'Label',
    beforeIcon: '16-bolt',
    afterIcon: '16-bolt'
  }
}`,...(A=(q=s.parameters)==null?void 0:q.docs)==null?void 0:A.source}}};var N,B,L;b.parameters={...b.parameters,docs:{...(N=b.parameters)==null?void 0:N.docs,source:{originalSource:`() => <tet.div spaceY="component-gap-small">
    <tet.p>High emphasis</tet.p>
    <tet.div display="flex" spaceX="component-gap-small">
      {APPEARANCES.filter(a => a !== 'outline').map(appearance => <Badge appearance={appearance} icon="16-bolt" key={appearance} />)}
    </tet.div>
    <tet.div display="flex" spaceX="component-gap-small">
      {INTENTS.map(intent => <Badge intent={intent} icon="16-bolt" key={intent} />)}
    </tet.div>
    <tet.p>Medium emphasis</tet.p>
    <tet.div display="flex" spaceX="component-gap-small">
      {APPEARANCES.map(appearance => <Badge appearance={appearance} emphasis="medium" icon="16-bolt" key={appearance} />)}
    </tet.div>
    <tet.div display="flex" spaceX="component-gap-small">
      {INTENTS.map(intent => <Badge intent={intent} emphasis="medium" icon="16-bolt" key={intent} />)}
    </tet.div>
    <tet.p>Low emphasis</tet.p>
    <tet.div display="flex" spaceX="component-gap-small">
      {APPEARANCES.filter(a => a !== 'outline').map(appearance => <Badge appearance={appearance} emphasis="low" icon="16-bolt" key={appearance} />)}
    </tet.div>
    <tet.div display="flex" spaceX="component-gap-small">
      {INTENTS.map(intent => <Badge intent={intent} emphasis="low" icon="16-bolt" key={intent} />)}
    </tet.div>
  </tet.div>`,...(L=(B=b.parameters)==null?void 0:B.docs)==null?void 0:L.source}}};const O=["Default","Icon","LabelIcons","All"];export{b as All,p as Default,g as Icon,s as LabelIcons,O as __namedExportsOrder,Y as default};
//# sourceMappingURL=Badge.stories-e5ba4131.js.map
