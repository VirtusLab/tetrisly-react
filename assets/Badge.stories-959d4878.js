import{j as a,t as l}from"./TetrislyProvider-3a5fffa3.js";import{q as c}from"./tetrisly-icons.es-4ed30ffb.js";import{l as P}from"./lodash-bc5bedbb.js";import"./index-8db94870.js";import"./_commonjsHelpers-042e6b4d.js";const f=e=>Object.fromEntries(e),i=["blue","green","grey","red","orange","raspberry","magenta","purple","grape","violet","cyan","teal","aquamarine","emerald"],p=["neutral","informative","positive","warning","negative"],R={appearance:{...f(i.map(e=>[e,{high:{color:"nonSemantic-white-content-primary",backgroundColor:`nonSemantic-${e}-background-strong`},medium:{color:`nonSemantic-${e}-content-primary`,backgroundColor:`nonSemantic-${e}-background-muted`},low:{color:`nonSemantic-${e}-content-primary`,backgroundColor:`nonSemantic-${e}-background-onSubtle`}}]))},intent:{...f(p.map(e=>[e,{high:{color:`content-primary${e!=="warning"?"-inverted":""}`,backgroundColor:`background-${e}-strong`},medium:{color:`content-${e!=="neutral"?`${e}-`:""}primary`,backgroundColor:`background-${e}-muted`},low:{color:`content-${e!=="neutral"?`${e}-`:""}-primary`,backgroundColor:`background-${e}-onSubtle`}}]))},display:"flex",w:"fit-content",h:"xSmall",borderRadius:"large",flexShrink:0,alignItems:"center",label:{padding:"component-padding-small"},icon:{padding:"component-padding-xSmall"},gap:"component-gap-xSmall"},n=({appearance:e,intent:d,emphasis:u="high",beforeIcon:m,afterIcon:v,icon:g,label:h,custom:_={},...I})=>{const L=P.merge(R,_),{appearance:V,intent:E,label:D,icon:H,...M}=L;if(!e&&!d)throw new Error("Badge needs to have defined appearance or intent prop");const N=e?V[e][u]:E[d][u],O=h?D:H;return a.jsxs(l.div,{...N,...O,...M,...I,"data-testid":"badge",children:[!!m&&a.jsx(c,{name:m,"data-testid":"badge-icon"}),!!g&&a.jsx(c,{name:g,"data-testid":"badge-icon"}),h,!!v&&a.jsx(c,{name:v,"data-testid":"badge-icon"})]})};try{n.displayName="Badge",n.__docgenInfo={description:"",displayName:"Badge",props:{appearance:{defaultValue:null,description:"",name:"appearance",required:!1,type:{name:"enum",value:[{value:'"blue"'},{value:'"green"'},{value:'"grey"'},{value:'"red"'},{value:'"orange"'},{value:'"raspberry"'},{value:'"magenta"'},{value:'"purple"'},{value:'"grape"'},{value:'"violet"'},{value:'"cyan"'},{value:'"teal"'},{value:'"aquamarine"'},{value:'"emerald"'}]}},intent:{defaultValue:null,description:"",name:"intent",required:!1,type:{name:"enum",value:[{value:'"neutral"'},{value:'"informative"'},{value:'"positive"'},{value:'"warning"'},{value:'"negative"'}]}},label:{defaultValue:null,description:"",name:"label",required:!1,type:{name:"string"}},beforeIcon:{defaultValue:null,description:"",name:"beforeIcon",required:!1,type:{name:"enum",value:[{value:'"16-alert-full"'},{value:'"16-arrowhead-down-small"'},{value:'"16-arrowhead-down"'},{value:'"16-arrowhead-left-small"'},{value:'"16-arrowhead-left"'},{value:'"16-arrowhead-right-small"'},{value:'"16-arrowhead-right"'},{value:'"16-arrowhead-top-small"'},{value:'"16-arrowhead-top"'},{value:'"16-bolt"'},{value:'"16-check"'},{value:'"16-chevron-down"'},{value:'"16-chevron-left"'},{value:'"16-chevron-right"'},{value:'"16-chevron-top"'},{value:'"16-close"'},{value:'"16-dot"'},{value:'"16-info"'},{value:'"16-minus"'},{value:'"16-plus"'}]}},afterIcon:{defaultValue:null,description:"",name:"afterIcon",required:!1,type:{name:"enum",value:[{value:'"16-alert-full"'},{value:'"16-arrowhead-down-small"'},{value:'"16-arrowhead-down"'},{value:'"16-arrowhead-left-small"'},{value:'"16-arrowhead-left"'},{value:'"16-arrowhead-right-small"'},{value:'"16-arrowhead-right"'},{value:'"16-arrowhead-top-small"'},{value:'"16-arrowhead-top"'},{value:'"16-bolt"'},{value:'"16-check"'},{value:'"16-chevron-down"'},{value:'"16-chevron-left"'},{value:'"16-chevron-right"'},{value:'"16-chevron-top"'},{value:'"16-close"'},{value:'"16-dot"'},{value:'"16-info"'},{value:'"16-minus"'},{value:'"16-plus"'}]}},icon:{defaultValue:null,description:"",name:"icon",required:!1,type:{name:"enum",value:[{value:'"16-alert-full"'},{value:'"16-arrowhead-down-small"'},{value:'"16-arrowhead-down"'},{value:'"16-arrowhead-left-small"'},{value:'"16-arrowhead-left"'},{value:'"16-arrowhead-right-small"'},{value:'"16-arrowhead-right"'},{value:'"16-arrowhead-top-small"'},{value:'"16-arrowhead-top"'},{value:'"16-bolt"'},{value:'"16-check"'},{value:'"16-chevron-down"'},{value:'"16-chevron-left"'},{value:'"16-chevron-right"'},{value:'"16-chevron-top"'},{value:'"16-close"'},{value:'"16-dot"'},{value:'"16-info"'},{value:'"16-minus"'},{value:'"16-plus"'}]}},emphasis:{defaultValue:{value:"high"},description:"",name:"emphasis",required:!1,type:{name:"enum",value:[{value:'"high"'},{value:'"medium"'},{value:'"low"'}]}},custom:{defaultValue:{value:"{}"},description:"",name:"custom",required:!1,type:{name:'DeepPartial<SystemProps<Theme> & { readonly appearance: { readonly blue: { high: { color: string; backgroundColor: string; }; medium: { color: string; backgroundColor: string; }; low: { color: string; backgroundColor: string; }; }; ... 12 more ...; readonly emerald: { ...; }; }; ... 9 more ...; readonly gap: "compon...'}}}}}catch{}const G={title:"Components/Badge",component:n,tags:["autodocs"]},o={args:{intent:"informative",emphasis:"high",label:"Label"}},r={args:{appearance:"blue",icon:"16-bolt"}},t={args:{intent:"informative",label:"Label",beforeIcon:"16-bolt",afterIcon:"16-bolt"}},s=()=>a.jsxs(l.div,{spaceY:"component-gap-small",children:[a.jsx(l.p,{children:"High emphasis"}),a.jsx(l.div,{display:"flex",spaceX:"component-gap-small",children:i.map(e=>a.jsx(n,{appearance:e,icon:"16-bolt"},e))}),a.jsx(l.div,{display:"flex",spaceX:"component-gap-small",children:p.map(e=>a.jsx(n,{intent:e,icon:"16-bolt"},e))}),a.jsx(l.p,{children:"Medium emphasis"}),a.jsx(l.div,{display:"flex",spaceX:"component-gap-small",children:i.map(e=>a.jsx(n,{appearance:e,emphasis:"medium",icon:"16-bolt"},e))}),a.jsx(l.div,{display:"flex",spaceX:"component-gap-small",children:p.map(e=>a.jsx(n,{intent:e,emphasis:"medium",icon:"16-bolt"},e))}),a.jsx(l.p,{children:"Low emphasis"}),a.jsx(l.div,{display:"flex",spaceX:"component-gap-small",children:i.map(e=>a.jsx(n,{appearance:e,emphasis:"low",icon:"16-bolt"},e))}),a.jsx(l.div,{display:"flex",spaceX:"component-gap-small",children:p.map(e=>a.jsx(n,{intent:e,emphasis:"low",icon:"16-bolt"},e))})]});var b,y,w;o.parameters={...o.parameters,docs:{...(b=o.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    intent: 'informative',
    emphasis: 'high',
    label: 'Label'
  }
}`,...(w=(y=o.parameters)==null?void 0:y.docs)==null?void 0:w.source}}};var x,k,j;r.parameters={...r.parameters,docs:{...(x=r.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    appearance: 'blue',
    icon: '16-bolt'
  }
}`,...(j=(k=r.parameters)==null?void 0:k.docs)==null?void 0:j.source}}};var S,$,q;t.parameters={...t.parameters,docs:{...(S=t.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    intent: 'informative',
    label: 'Label',
    beforeIcon: '16-bolt',
    afterIcon: '16-bolt'
  }
}`,...(q=($=t.parameters)==null?void 0:$.docs)==null?void 0:q.source}}};var X,B,C;s.parameters={...s.parameters,docs:{...(X=s.parameters)==null?void 0:X.docs,source:{originalSource:`() => <tet.div spaceY="component-gap-small">
    <tet.p>High emphasis</tet.p>
    <tet.div display="flex" spaceX="component-gap-small">
      {basicAppearances.map(appearance => <Badge appearance={appearance} icon="16-bolt" key={appearance} />)}
    </tet.div>
    <tet.div display="flex" spaceX="component-gap-small">
      {basicIntents.map(intent => <Badge intent={intent} icon="16-bolt" key={intent} />)}
    </tet.div>
    <tet.p>Medium emphasis</tet.p>
    <tet.div display="flex" spaceX="component-gap-small">
      {basicAppearances.map(appearance => <Badge appearance={appearance} emphasis="medium" icon="16-bolt" key={appearance} />)}
    </tet.div>
    <tet.div display="flex" spaceX="component-gap-small">
      {basicIntents.map(intent => <Badge intent={intent} emphasis="medium" icon="16-bolt" key={intent} />)}
    </tet.div>
    <tet.p>Low emphasis</tet.p>
    <tet.div display="flex" spaceX="component-gap-small">
      {basicAppearances.map(appearance => <Badge appearance={appearance} emphasis="low" icon="16-bolt" key={appearance} />)}
    </tet.div>
    <tet.div display="flex" spaceX="component-gap-small">
      {basicIntents.map(intent => <Badge intent={intent} emphasis="low" icon="16-bolt" key={intent} />)}
    </tet.div>
  </tet.div>`,...(C=(B=s.parameters)==null?void 0:B.docs)==null?void 0:C.source}}};const J=["Default","Icon","LabelIcons","All"];export{s as All,o as Default,r as Icon,t as LabelIcons,J as __namedExportsOrder,G as default};
//# sourceMappingURL=Badge.stories-959d4878.js.map
