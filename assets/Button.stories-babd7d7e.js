import{r as u}from"./index-8db94870.js";import"./_commonjsHelpers-042e6b4d.js";var d={exports:{}},s={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var y=u,k=Symbol.for("react.element"),v=Symbol.for("react.fragment"),E=Object.prototype.hasOwnProperty,O=y.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,R={key:!0,ref:!0,__self:!0,__source:!0};function _(t,r,c){var e,o={},a=null,i=null;c!==void 0&&(a=""+c),r.key!==void 0&&(a=""+r.key),r.ref!==void 0&&(i=r.ref);for(e in r)E.call(r,e)&&!R.hasOwnProperty(e)&&(o[e]=r[e]);if(t&&t.defaultProps)for(e in r=t.defaultProps,r)o[e]===void 0&&(o[e]=r[e]);return{$$typeof:k,type:t,key:a,ref:i,props:o,_owner:O.current}}s.Fragment=v;s.jsx=_;s.jsxs=_;d.exports=s;var f=d.exports;const x=()=>{const[t,r]=u.useState(!1);return f.jsx("button",{onClick:()=>r(!0),disabled:t,children:t?"Clicked":"Click me"})},b={component:x},n={render:()=>f.jsx(x,{})};var p,l,m;n.parameters={...n.parameters,docs:{...(p=n.parameters)==null?void 0:p.docs,source:{originalSource:`{
  render: () => <Button />
}`,...(m=(l=n.parameters)==null?void 0:l.docs)==null?void 0:m.source}}};const C=["Primary"];export{n as Primary,C as __namedExportsOrder,b as default};
//# sourceMappingURL=Button.stories-babd7d7e.js.map
