import{j as e,t as a}from"./TetrislyProvider-51cc1c11.js";import{r as j}from"./index-61bf1805.js";import{B as le}from"./Button-fe733cbf.js";import"./_commonjsHelpers-de833af9.js";import"./tetrisly-icons.es-9149c524.js";import"./lodash-f6b38868.js";import"./isKeyOf-b77e0457.js";import"./index-5899efbe.js";import"./Loader-f9e3d507.js";const Se={title:"Components/Button",component:le,tags:["autodocs"],args:{label:"Button label"},argTypes:{state:{options:[void 0,"disabled","loading","selected"],defaultValue:void 0,control:{type:"radio"}},size:{options:["small","medium","large"],defaultValue:"medium",control:{type:"radio"}}}},ge=({state:x,...D})=>{const[n,i]=j.useState(!1);return j.useEffect(()=>{const h=setTimeout(()=>{i(!1)},2e3);return()=>clearTimeout(h)},[n]),e.jsx(le,{...D,state:n?"loading":x,onClick:()=>i(!n)})},t={argTypes:{appearance:{options:["primary","secondary","inverted","reverseInverted"],defaultValue:"primary",control:{type:"radio"}}}},c={...t,args:{state:"loading"}},p={...t,args:{state:"disabled"}},l={...t,args:{beforeIcon:"20-placeholder"}},m={...t,args:{afterIcon:"20-placeholder"}},u={...t,args:{dropdownIndicator:!0}},o={args:{variant:"ghost"},argTypes:{appearance:{options:["primary","secondary","inverted","reverseInverted"],defaultValue:"primary",control:{type:"radio"}}}},v={...o,args:{state:"loading"}},g={...o,args:{state:"disabled"}},s={args:{variant:"bare"},argTypes:{appearance:{options:["primary","secondary","inverted","reverseInverted"],defaultValue:"primary",control:{type:"radio"}},size:{options:["medium","large"],defaultValue:"medium",control:{type:"radio"}}}},y={...s,args:{state:"loading"}},b={...s,args:{state:"disabled"}},I={table:{disable:!0}},z=Object.entries,ye={default:{appearance:{primary:["success","destructive","none"],secondary:["success","destructive","none"],inverted:["none"]},size:["small","medium","large"]},ghost:{appearance:{primary:["success","destructive","none"],secondary:["none"],inverted:["none"],reverseInverted:["none"]},size:["small","medium","large"]},bare:{appearance:{primary:["success","destructive","none"],secondary:["none"],inverted:["none"],reverseInverted:["none"]},size:["medium","large"]}},f={argTypes:{appearance:I,intent:I,size:I},render:({state:x,label:D})=>e.jsx(a.div,{children:z(ye).map(([n,{appearance:i,size:h}],me)=>e.jsxs(a.div,{mt:me?"400":void 0,py:"100",mb:"400",children:[e.jsx(a.b,{display:"block",text:"medium-300",color:"content-primary",px:"400",pb:"100",children:n}),z(i).map(([r,ue])=>e.jsx(a.div,{display:"flex",flexDirection:"column",children:ue.map(d=>e.jsxs(a.div,{my:r==="inverted"?"200":void 0,px:"400",py:r==="inverted"?"400":"200",borderRadius:"large",backgroundColor:r==="inverted"?"background-inverted":void 0,color:r==="inverted"?"content-secondary-inverted":"content-secondary",children:[e.jsxs(a.div,{display:"flex",gap:"100",text:"medium-100",mb:"300",pb:"200",borderBottom:"1px solid",borderColor:r==="inverted"?"border-neutral":"border-default",children:[e.jsxs("div",{children:["Appearance:"," ",e.jsx(a.span,{color:r==="inverted"?"content-primary-inverted":"content-primary",children:r})]}),"·",e.jsxs("div",{children:["Intent:"," ",e.jsx(a.span,{color:r==="inverted"?"content-primary-inverted":"content-primary",children:d})]})]}),e.jsx(a.div,{display:"flex",alignItems:"center",gap:"400",children:h.map(B=>{const ve={label:D,variant:n,state:x,appearance:r,intent:d,size:B,key:`${n}-${r}-${d}-${B}`};return e.jsx(ge,{...ve})})})]},d))},r))]},n))})};var S,k,T;t.parameters={...t.parameters,docs:{...(S=t.parameters)==null?void 0:S.docs,source:{originalSource:`{
  argTypes: {
    appearance: {
      options: ['primary', 'secondary', 'inverted', 'reverseInverted'],
      defaultValue: 'primary',
      control: {
        type: 'radio'
      }
    }
  }
}`,...(T=(k=t.parameters)==null?void 0:k.docs)==null?void 0:T.source}}};var V,L,G;c.parameters={...c.parameters,docs:{...(V=c.parameters)==null?void 0:V.docs,source:{originalSource:`{
  ...Default,
  args: {
    state: 'loading'
  }
}`,...(G=(L=c.parameters)==null?void 0:L.docs)==null?void 0:G.source}}};var $,A,C;p.parameters={...p.parameters,docs:{...($=p.parameters)==null?void 0:$.docs,source:{originalSource:`{
  ...Default,
  args: {
    state: 'disabled'
  }
}`,...(C=(A=p.parameters)==null?void 0:A.docs)==null?void 0:C.source}}};var O,w,E;l.parameters={...l.parameters,docs:{...(O=l.parameters)==null?void 0:O.docs,source:{originalSource:`{
  ...Default,
  args: {
    beforeIcon: '20-placeholder'
  }
}`,...(E=(w=l.parameters)==null?void 0:w.docs)==null?void 0:E.source}}};var R,W,_;m.parameters={...m.parameters,docs:{...(R=m.parameters)==null?void 0:R.docs,source:{originalSource:`{
  ...Default,
  args: {
    afterIcon: '20-placeholder'
  }
}`,...(_=(W=m.parameters)==null?void 0:W.docs)==null?void 0:_.source}}};var q,F,H;u.parameters={...u.parameters,docs:{...(q=u.parameters)==null?void 0:q.docs,source:{originalSource:`{
  ...Default,
  args: {
    dropdownIndicator: true
  }
}`,...(H=(F=u.parameters)==null?void 0:F.docs)==null?void 0:H.source}}};var J,K,M;o.parameters={...o.parameters,docs:{...(J=o.parameters)==null?void 0:J.docs,source:{originalSource:`{
  args: {
    variant: 'ghost'
  },
  argTypes: {
    appearance: {
      options: ['primary', 'secondary', 'inverted', 'reverseInverted'],
      defaultValue: 'primary',
      control: {
        type: 'radio'
      }
    }
  }
}`,...(M=(K=o.parameters)==null?void 0:K.docs)==null?void 0:M.source}}};var N,P,Q;v.parameters={...v.parameters,docs:{...(N=v.parameters)==null?void 0:N.docs,source:{originalSource:`{
  ...Ghost,
  args: {
    state: 'loading'
  }
}`,...(Q=(P=v.parameters)==null?void 0:P.docs)==null?void 0:Q.source}}};var U,X,Y;g.parameters={...g.parameters,docs:{...(U=g.parameters)==null?void 0:U.docs,source:{originalSource:`{
  ...Ghost,
  args: {
    state: 'disabled'
  }
}`,...(Y=(X=g.parameters)==null?void 0:X.docs)==null?void 0:Y.source}}};var Z,ee,re;s.parameters={...s.parameters,docs:{...(Z=s.parameters)==null?void 0:Z.docs,source:{originalSource:`{
  args: {
    variant: 'bare'
  },
  argTypes: {
    appearance: {
      options: ['primary', 'secondary', 'inverted', 'reverseInverted'],
      defaultValue: 'primary',
      control: {
        type: 'radio'
      }
    },
    size: {
      options: ['medium', 'large'],
      defaultValue: 'medium',
      control: {
        type: 'radio'
      }
    }
  }
}`,...(re=(ee=s.parameters)==null?void 0:ee.docs)==null?void 0:re.source}}};var ae,te,ne;y.parameters={...y.parameters,docs:{...(ae=y.parameters)==null?void 0:ae.docs,source:{originalSource:`{
  ...Bare,
  args: {
    state: 'loading'
  }
}`,...(ne=(te=y.parameters)==null?void 0:te.docs)==null?void 0:ne.source}}};var oe,se,ie;b.parameters={...b.parameters,docs:{...(oe=b.parameters)==null?void 0:oe.docs,source:{originalSource:`{
  ...Bare,
  args: {
    state: 'disabled'
  }
}`,...(ie=(se=b.parameters)==null?void 0:se.docs)==null?void 0:ie.source}}};var de,ce,pe;f.parameters={...f.parameters,docs:{...(de=f.parameters)==null?void 0:de.docs,source:{originalSource:`{
  argTypes: {
    appearance: controlDisabled,
    intent: controlDisabled,
    size: controlDisabled
  },
  render: ({
    state,
    label
  }) => <tet.div>
      {entries(combinations).map(([variant, {
      appearance,
      size: sizes
    }], index) => <tet.div key={variant} mt={index ? '400' : undefined} py="100" mb="400">
            <tet.b display="block" text="medium-300" color="content-primary" px="400" pb="100">
              {variant}
            </tet.b>

            {entries(appearance).map(([appearanceOption, intents]) => <tet.div display="flex" flexDirection="column" key={appearanceOption}>
                {intents.map(intent => <tet.div my={appearanceOption === 'inverted' ? '200' : undefined} px="400" py={appearanceOption === 'inverted' ? '400' : '200'} borderRadius="large" backgroundColor={appearanceOption === 'inverted' ? 'background-inverted' : undefined} color={appearanceOption === 'inverted' ? 'content-secondary-inverted' : 'content-secondary'} key={intent}>
                    <tet.div display="flex" gap="100" text="medium-100" mb="300" pb="200" borderBottom="1px solid" borderColor={appearanceOption === 'inverted' ? 'border-neutral' : 'border-default'}>
                      <div>
                        Appearance:{' '}
                        <tet.span color={appearanceOption === 'inverted' ? 'content-primary-inverted' : 'content-primary'}>
                          {appearanceOption}
                        </tet.span>
                      </div>
                      ·
                      <div>
                        Intent:{' '}
                        <tet.span color={appearanceOption === 'inverted' ? 'content-primary-inverted' : 'content-primary'}>
                          {intent}
                        </tet.span>
                      </div>
                    </tet.div>
                    <tet.div display="flex" alignItems="center" gap="400">
                      {sizes.map(size => {
              const props = {
                label,
                variant,
                state,
                appearance: appearanceOption,
                intent,
                size,
                key: \`\${variant}-\${appearanceOption}-\${intent}-\${size}\`
              };
              return <ButtonWithLoading {...props} />;
            })}
                    </tet.div>
                  </tet.div>)}
              </tet.div>)}
          </tet.div>)}
    </tet.div>
}`,...(pe=(ce=f.parameters)==null?void 0:ce.docs)==null?void 0:pe.source}}};const ke=["Default","DefaultLoading","DefaultDisabled","DefaultBeforeIcon","DefaultAfterIcon","DefaultDropdown","Ghost","GhostLoading","GhostDisabled","Bare","BareLoading","BareDisabled","AllOptions"];export{f as AllOptions,s as Bare,b as BareDisabled,y as BareLoading,t as Default,m as DefaultAfterIcon,l as DefaultBeforeIcon,p as DefaultDisabled,u as DefaultDropdown,c as DefaultLoading,o as Ghost,g as GhostDisabled,v as GhostLoading,ke as __namedExportsOrder,Se as default};
//# sourceMappingURL=Button.stories-fe3fbcb5.js.map
