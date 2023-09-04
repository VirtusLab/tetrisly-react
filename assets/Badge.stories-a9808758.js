import{j as a,t as l}from"./TetrislyProvider-e2de8794.js";import{R as d}from"./tetrisly-icons.es-3ae3ef26.js";import{l as Y}from"./lodash-f6b38868.js";import{f,a as i}from"./Appearance-1fbd3c1a.js";import"./index-76fb7be0.js";import"./_commonjsHelpers-de833af9.js";const p=["neutral","informative","positive","warning","negative"],O={appearance:{...f(i.map(e=>[e,{high:{color:"nonSemantic-white-content-primary",backgroundColor:`nonSemantic-${e}-background-strong`},medium:{color:`nonSemantic-${e}-content-primary`,backgroundColor:`nonSemantic-${e}-background-muted`},low:{color:`nonSemantic-${e}-content-primary`,backgroundColor:`nonSemantic-${e}-background-onSubtle`}}]))},intent:{...f(p.map(e=>[e,{high:{color:`content-primary${e!=="warning"?"-inverted":""}`,backgroundColor:`background-${e}-strong`},medium:{color:`content-${e!=="neutral"?`${e}-`:""}primary`,backgroundColor:`background-${e}-muted`},low:{color:`content-${e!=="neutral"?`${e}-`:""}-primary`,backgroundColor:`background-${e}-onSubtle`}}]))},display:"flex",w:"fit-content",h:"xSmall",borderRadius:"large",flexShrink:0,alignItems:"center",label:{padding:"component-padding-small"},icon:{padding:"component-padding-xSmall"},gap:"component-gap-xSmall"},n=({appearance:e,intent:c,emphasis:u="high",beforeIcon:m,afterIcon:v,icon:g,label:h,custom:C={},...I})=>{const L=Y.merge(O,C),{appearance:V,intent:E,label:R,icon:D,...H}=L;if(!e&&!c)throw new Error("Badge needs to have defined appearance or intent prop");const M=e?V[e][u]:E[c][u],N=h?R:D;return a.jsxs(l.div,{...M,...N,...H,...I,"data-testid":"badge",children:[!!m&&a.jsx(d,{name:m,"data-testid":"badge-icon"}),!!g&&a.jsx(d,{name:g,"data-testid":"badge-icon"}),h,!!v&&a.jsx(d,{name:v,"data-testid":"badge-icon"})]})};try{n.displayName="Badge",n.__docgenInfo={description:"",displayName:"Badge",props:{appearance:{defaultValue:null,description:"",name:"appearance",required:!1,type:{name:"enum",value:[{value:'"red"'},{value:'"green"'},{value:'"orange"'},{value:'"aquamarine"'},{value:'"blue"'},{value:'"cyan"'},{value:'"grey"'},{value:'"magenta"'},{value:'"purple"'},{value:'"teal"'},{value:'"violet"'},{value:'"raspberry"'},{value:'"grape"'},{value:'"emerald"'}]}},intent:{defaultValue:null,description:"",name:"intent",required:!1,type:{name:"enum",value:[{value:'"neutral"'},{value:'"informative"'},{value:'"warning"'},{value:'"negative"'},{value:'"positive"'}]}},label:{defaultValue:null,description:"",name:"label",required:!1,type:{name:"string"}},beforeIcon:{defaultValue:null,description:"",name:"beforeIcon",required:!1,type:{name:"enum",value:[{value:'"16-alert-full"'},{value:'"16-arrowhead-down-small"'},{value:'"16-arrowhead-down"'},{value:'"16-arrowhead-left-small"'},{value:'"16-arrowhead-left"'},{value:'"16-arrowhead-right-small"'},{value:'"16-arrowhead-right"'},{value:'"16-arrowhead-top-small"'},{value:'"16-arrowhead-top"'},{value:'"16-bolt"'},{value:'"16-check"'},{value:'"16-chevron-down"'},{value:'"16-chevron-left"'},{value:'"16-chevron-right"'},{value:'"16-chevron-top"'},{value:'"16-close"'},{value:'"16-dot"'},{value:'"16-info"'},{value:'"16-minus"'},{value:'"16-plus"'}]}},afterIcon:{defaultValue:null,description:"",name:"afterIcon",required:!1,type:{name:"enum",value:[{value:'"16-alert-full"'},{value:'"16-arrowhead-down-small"'},{value:'"16-arrowhead-down"'},{value:'"16-arrowhead-left-small"'},{value:'"16-arrowhead-left"'},{value:'"16-arrowhead-right-small"'},{value:'"16-arrowhead-right"'},{value:'"16-arrowhead-top-small"'},{value:'"16-arrowhead-top"'},{value:'"16-bolt"'},{value:'"16-check"'},{value:'"16-chevron-down"'},{value:'"16-chevron-left"'},{value:'"16-chevron-right"'},{value:'"16-chevron-top"'},{value:'"16-close"'},{value:'"16-dot"'},{value:'"16-info"'},{value:'"16-minus"'},{value:'"16-plus"'}]}},icon:{defaultValue:null,description:"",name:"icon",required:!1,type:{name:"enum",value:[{value:'"16-alert-full"'},{value:'"16-arrowhead-down-small"'},{value:'"16-arrowhead-down"'},{value:'"16-arrowhead-left-small"'},{value:'"16-arrowhead-left"'},{value:'"16-arrowhead-right-small"'},{value:'"16-arrowhead-right"'},{value:'"16-arrowhead-top-small"'},{value:'"16-arrowhead-top"'},{value:'"16-bolt"'},{value:'"16-check"'},{value:'"16-chevron-down"'},{value:'"16-chevron-left"'},{value:'"16-chevron-right"'},{value:'"16-chevron-top"'},{value:'"16-close"'},{value:'"16-dot"'},{value:'"16-info"'},{value:'"16-minus"'},{value:'"16-plus"'}]}},emphasis:{defaultValue:{value:"high"},description:"",name:"emphasis",required:!1,type:{name:"enum",value:[{value:'"low"'},{value:'"high"'},{value:'"medium"'}]}},custom:{defaultValue:{value:"{}"},description:"",name:"custom",required:!1,type:{name:"DeepPartial<BadgeConfig>"}}}}}catch{}const Q={title:"Components/Badge",component:n,tags:["autodocs"]},o={args:{intent:"informative",emphasis:"high",label:"Label"}},t={args:{appearance:"blue",icon:"16-bolt"}},r={args:{intent:"informative",label:"Label",beforeIcon:"16-bolt",afterIcon:"16-bolt"}},s=()=>a.jsxs(l.div,{spaceY:"component-gap-small",children:[a.jsx(l.p,{children:"High emphasis"}),a.jsx(l.div,{display:"flex",spaceX:"component-gap-small",children:i.map(e=>a.jsx(n,{appearance:e,icon:"16-bolt"},e))}),a.jsx(l.div,{display:"flex",spaceX:"component-gap-small",children:p.map(e=>a.jsx(n,{intent:e,icon:"16-bolt"},e))}),a.jsx(l.p,{children:"Medium emphasis"}),a.jsx(l.div,{display:"flex",spaceX:"component-gap-small",children:i.map(e=>a.jsx(n,{appearance:e,emphasis:"medium",icon:"16-bolt"},e))}),a.jsx(l.div,{display:"flex",spaceX:"component-gap-small",children:p.map(e=>a.jsx(n,{intent:e,emphasis:"medium",icon:"16-bolt"},e))}),a.jsx(l.p,{children:"Low emphasis"}),a.jsx(l.div,{display:"flex",spaceX:"component-gap-small",children:i.map(e=>a.jsx(n,{appearance:e,emphasis:"low",icon:"16-bolt"},e))}),a.jsx(l.div,{display:"flex",spaceX:"component-gap-small",children:p.map(e=>a.jsx(n,{intent:e,emphasis:"low",icon:"16-bolt"},e))})]});var b,w,y;o.parameters={...o.parameters,docs:{...(b=o.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    intent: 'informative',
    emphasis: 'high',
    label: 'Label'
  }
}`,...(y=(w=o.parameters)==null?void 0:w.docs)==null?void 0:y.source}}};var x,j,k;t.parameters={...t.parameters,docs:{...(x=t.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    appearance: 'blue',
    icon: '16-bolt'
  }
}`,...(k=(j=t.parameters)==null?void 0:j.docs)==null?void 0:k.source}}};var S,$,B;r.parameters={...r.parameters,docs:{...(S=r.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    intent: 'informative',
    label: 'Label',
    beforeIcon: '16-bolt',
    afterIcon: '16-bolt'
  }
}`,...(B=($=r.parameters)==null?void 0:$.docs)==null?void 0:B.source}}};var X,_,q;s.parameters={...s.parameters,docs:{...(X=s.parameters)==null?void 0:X.docs,source:{originalSource:`() => <tet.div spaceY="component-gap-small">
    <tet.p>High emphasis</tet.p>
    <tet.div display="flex" spaceX="component-gap-small">
      {appearances.map(appearance => <Badge appearance={appearance} icon="16-bolt" key={appearance} />)}
    </tet.div>
    <tet.div display="flex" spaceX="component-gap-small">
      {basicIntents.map(intent => <Badge intent={intent} icon="16-bolt" key={intent} />)}
    </tet.div>
    <tet.p>Medium emphasis</tet.p>
    <tet.div display="flex" spaceX="component-gap-small">
      {appearances.map(appearance => <Badge appearance={appearance} emphasis="medium" icon="16-bolt" key={appearance} />)}
    </tet.div>
    <tet.div display="flex" spaceX="component-gap-small">
      {basicIntents.map(intent => <Badge intent={intent} emphasis="medium" icon="16-bolt" key={intent} />)}
    </tet.div>
    <tet.p>Low emphasis</tet.p>
    <tet.div display="flex" spaceX="component-gap-small">
      {appearances.map(appearance => <Badge appearance={appearance} emphasis="low" icon="16-bolt" key={appearance} />)}
    </tet.div>
    <tet.div display="flex" spaceX="component-gap-small">
      {basicIntents.map(intent => <Badge intent={intent} emphasis="low" icon="16-bolt" key={intent} />)}
    </tet.div>
  </tet.div>`,...(q=(_=s.parameters)==null?void 0:_.docs)==null?void 0:q.source}}};const T=["Default","Icon","LabelIcons","All"];export{s as All,o as Default,t as Icon,r as LabelIcons,T as __namedExportsOrder,Q as default};
//# sourceMappingURL=Badge.stories-a9808758.js.map
