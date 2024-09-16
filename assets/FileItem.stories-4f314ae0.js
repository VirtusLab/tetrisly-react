import{j as e}from"./jsx-runtime-ffb262ed.js";import{a as r}from"./chunk-WFFRPTHA-80d37c1b.js";import{b as oe,F as s}from"./FileItem-4a53c2b8.js";import{l as Ae}from"./mergeConfigWithCustom-aec35d44.js";import{S as ie}from"./SectionHeader-e7c49046.js";import{S as f}from"./States-c70e8d91.js";import{t as a}from"./TetrislyProvider-679426f7.js";import{T as le}from"./TetDocs-b00055fe.js";import"./index-76fb7be0.js";import"./_commonjsHelpers-de833af9.js";import"./preview-errors-60885292.js";import"./index-356e4a49.js";import"./v4-4a60fe23.js";import"./Button-62f4c63b.js";import"./tetrisly-icons.es-12549e88.js";import"./index-52c2b68d.js";import"./Icon-1631c5ed.js";import"./IconButton-9e77b08a.js";import"./index-8e69feee.js";import"./iframe-6ef61652.js";import"../sb-preview/runtime.js";import"./index-d3ea75b5.js";import"./index-11d98b33.js";import"./index-8fd8397b.js";const ae=()=>new File(["foo bar baz"],"Name",{type:"text/plain"}),h=()=>{const t=oe("data:image/jpeg;base64,/9j/4AAQSkZJRgABAQIAHAAcAAD/2wBDAAgGBgcGBQgHBwcJCQgKDBQNDAsLDBkSEw8UHRofHh0aHBwgJC4nICIsIxwcKDcpLDAxNDQ0Hyc5PTgyPC4zNDL/2wBDAQkJCQwLDBgNDRgyIRwhMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjL/wgARCAAgACADASIAAhEBAxEB/8QAFwAAAwEAAAAAAAAAAAAAAAAAAwQFBv/EABgBAAIDAAAAAAAAAAAAAAAAAAMEAAEC/9oADAMBAAIQAxAAAAEooNQcrOSGtUnnbzSrWP1I45g//8QAHBAAAwACAwEAAAAAAAAAAAAAAQIDAAQREhMi/9oACAEBAAEFAmFaN6suTp2xH4MqsmJvpTAgpiEohok82XQ1kz9xVnisKluFDtH68bvt/wD/xAAbEQACAQUAAAAAAAAAAAAAAAAAASECAxARIv/aAAgBAwEBPwHWH3CK7bUn/8QAHBEAAgICAwAAAAAAAAAAAAAAAAEDEQIhEzFB/9oACAECAQE/AbFfolx7fZHIstH/xAAhEAABBAEEAwEAAAAAAAAAAAABAAIDERITISJBEDFhMv/aAAgBAQAGPwIyNk1AVyB8WCv1uqlblXaLoXghcjuqw292rYKPwLgTksSQZKWE/sOWGmB9RcOu6TREDkSv/8QAHRABAAIDAAMBAAAAAAAAAAAAAQARITFBUWFxgf/aAAgBAQABPyElqP0hRAPhIHUQayS+R0zhmo7iZgye50lSZHmUtAsRi/caMTbslfU5dRaX21Up2iinpCqlr6iDFjxC0FiIYPvqf//aAAwDAQACAAMAAAAQQs0E/8QAGREBAQADAQAAAAAAAAAAAAAAAQARITFB/9oACAEDAQE/EOMlqauJA+r/xAAaEQABBQEAAAAAAAAAAAAAAAABABARIUFx/9oACAECAQE/ELThaA0dUitIK//EACAQAQACAgICAwEAAAAAAAAAAAERIQAxQWFxsVGRwdH/2gAIAQEAAT8Qfl5TXLAdfGHAihE4k0IJicbEmRM58MYkJCjnxiqFVUp8p/PrC6nZgX8a5DDWyQITJNdlCJDNNyvrL320HhZ6xLaeS99n7WBgWRCX03UmPn5qAQhOmGPOcd0BsdPL1g0qCJIml3RlK22LNyNDnrP/2Q==");return new File([t],"Name",{type:"image/jpeg"})},de=[{inverted:!1,extended:!1,thumbnail:"none"},{inverted:!0,extended:!1,thumbnail:"none"},{inverted:!1,extended:!0,thumbnail:"none"},{inverted:!0,extended:!0,thumbnail:"none"},{inverted:!1,extended:!0,thumbnail:"file"},{inverted:!0,extended:!0,thumbnail:"file"},{inverted:!1,extended:!0,thumbnail:"photo"},{inverted:!0,extended:!0,thumbnail:"photo"}],ce=()=>e.jsx(a.section,{display:"flex",flexDirection:"column",children:de.map(t=>{const C=Object.entries(t).map(([se,ne])=>`${Ae.capitalize(se)}: ${pe(ne)}`),n=t.thumbnail==="photo"?h():ae();return e.jsxs(a.div,{children:[e.jsx(ie,{variant:"H2",as:"h3",paddingBottom:"$dimension-250",labels:C}),e.jsxs(a.div,{py:"$dimension-250",display:"flex",flexDirection:"column",justifyContent:"space-between",children:[e.jsxs(a.div,{children:[e.jsx(f,{states:[":uploading",":uploaded"],gap:"$dimension-500",flexBasis:"50%"}),e.jsxs(a.div,{display:"flex",gap:"$dimension-500",py:"$dimension-250",children:[e.jsx(a.div,{flexShrink:"0",flexGrow:"1",flexBasis:"50%",children:e.jsx(s,{file:n,state:"uploading",isInverted:t.inverted,isExtended:t.extended,thumbnail:t.thumbnail,uploadedPercentage:44,timeLeftText:"7 seconds left",onReplaceClick:r("onReplaceClick"),onRetryClick:r("onRetryClick"),onCloseClick:r("onCloseClick")})}),e.jsx(a.div,{flexShrink:"0",flexGrow:"1",flexBasis:"50%",children:e.jsx(s,{file:n,state:"uploaded",isInverted:t.inverted,isExtended:t.extended,thumbnail:t.thumbnail,onReplaceClick:r("onReplaceClick"),onRetryClick:r("onRetryClick"),onCloseClick:r("onCloseClick")})})]})]}),e.jsxs(a.div,{children:[e.jsx(f,{states:[":replaceable",":alert"],gap:"$dimension-500",flexBasis:"50%"}),e.jsxs(a.div,{display:"flex",gap:"$dimension-500",py:"$dimension-250",children:[e.jsx(a.div,{flexShrink:"0",flexGrow:"1",flexBasis:"50%",children:e.jsx(s,{file:n,state:"replaceable",isInverted:t.inverted,isExtended:t.extended,thumbnail:t.thumbnail,onReplaceClick:r("onReplaceClick"),onRetryClick:r("onRetryClick"),onCloseClick:r("onCloseClick")})}),e.jsx(a.div,{flexShrink:"0",flexGrow:"1",flexBasis:"50%",children:e.jsx(s,{file:n,state:"alert",isInverted:t.inverted,isExtended:t.extended,thumbnail:t.thumbnail,alertText:"Short alert Text",onReplaceClick:r("onReplaceClick"),onRetryClick:r("onRetryClick"),onCloseClick:r("onCloseClick")})})]})]})]})]},C.join())})}),pe=t=>{switch(t){case!0:return"Yes";case"file":return"File";case"photo":return"Photo";default:return"No"}},He={title:"FileItem",component:s,tags:["autodocs"],argTypes:{},args:{file:ae(),state:"uploaded",isInverted:!1,isExtended:!1,thumbnail:"none",uploadedPercentage:25,timeLeftText:"7 seconds left",alertText:"Short alert text",onReplaceClick:r("onReplaceClick"),onRetryClick:r("onRetryClick"),onCloseClick:r("onCloseClick")},parameters:{docs:{description:{component:"Enable users to upload specific files, such as images, documents, or videos, to a particular location. The user can perform this action by dragging and dropping files into the designated area or browsing local storage."},page:()=>e.jsx(le,{docs:"https://docs.tetrisly.com/components/in-progress/fileuploader",children:e.jsx(ce,{})})}}},o={args:{}},A={args:{state:"uploading"}},i={args:{}},l={args:{state:"replaceable"}},d={args:{state:"alert"}},c={args:{state:"uploading",isExtended:!0}},p={args:{isExtended:!0}},m={args:{state:"replaceable",isExtended:!0}},u={args:{state:"alert",isExtended:!0}},x={args:{state:"uploading",isExtended:!0,thumbnail:"file"}},g={args:{file:h(),state:"alert",isExtended:!0,thumbnail:"photo"}},E={args:{file:h(),state:"alert",isExtended:!0,isInverted:!0,thumbnail:"photo"}};var I,b,B;o.parameters={...o.parameters,docs:{...(I=o.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {}
}`,...(B=(b=o.parameters)==null?void 0:b.docs)==null?void 0:B.source}}};var y,R,j;A.parameters={...A.parameters,docs:{...(y=A.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    state: 'uploading'
  }
}`,...(j=(R=A.parameters)==null?void 0:R.docs)==null?void 0:j.source}}};var k,Q,D;i.parameters={...i.parameters,docs:{...(k=i.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {}
}`,...(D=(Q=i.parameters)==null?void 0:Q.docs)==null?void 0:D.source}}};var w,S,v;l.parameters={...l.parameters,docs:{...(w=l.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    state: 'replaceable'
  }
}`,...(v=(S=l.parameters)==null?void 0:S.docs)==null?void 0:v.source}}};var F,M,T;d.parameters={...d.parameters,docs:{...(F=d.parameters)==null?void 0:F.docs,source:{originalSource:`{
  args: {
    state: 'alert'
  }
}`,...(T=(M=d.parameters)==null?void 0:M.docs)==null?void 0:T.source}}};var U,H,P;c.parameters={...c.parameters,docs:{...(U=c.parameters)==null?void 0:U.docs,source:{originalSource:`{
  args: {
    state: 'uploading',
    isExtended: true
  }
}`,...(P=(H=c.parameters)==null?void 0:H.docs)==null?void 0:P.source}}};var L,N,G;p.parameters={...p.parameters,docs:{...(L=p.parameters)==null?void 0:L.docs,source:{originalSource:`{
  args: {
    isExtended: true
  }
}`,...(G=(N=p.parameters)==null?void 0:N.docs)==null?void 0:G.source}}};var J,q,W;m.parameters={...m.parameters,docs:{...(J=m.parameters)==null?void 0:J.docs,source:{originalSource:`{
  args: {
    state: 'replaceable',
    isExtended: true
  }
}`,...(W=(q=m.parameters)==null?void 0:q.docs)==null?void 0:W.source}}};var $,K,O;u.parameters={...u.parameters,docs:{...($=u.parameters)==null?void 0:$.docs,source:{originalSource:`{
  args: {
    state: 'alert',
    isExtended: true
  }
}`,...(O=(K=u.parameters)==null?void 0:K.docs)==null?void 0:O.source}}};var z,X,Z;x.parameters={...x.parameters,docs:{...(z=x.parameters)==null?void 0:z.docs,source:{originalSource:`{
  args: {
    state: 'uploading',
    isExtended: true,
    thumbnail: 'file'
  }
}`,...(Z=(X=x.parameters)==null?void 0:X.docs)==null?void 0:Z.source}}};var V,Y,_;g.parameters={...g.parameters,docs:{...(V=g.parameters)==null?void 0:V.docs,source:{originalSource:`{
  args: {
    file: mockImageFile(),
    state: 'alert',
    isExtended: true,
    thumbnail: 'photo'
  }
}`,...(_=(Y=g.parameters)==null?void 0:Y.docs)==null?void 0:_.source}}};var ee,te,re;E.parameters={...E.parameters,docs:{...(ee=E.parameters)==null?void 0:ee.docs,source:{originalSource:`{
  args: {
    file: mockImageFile(),
    state: 'alert',
    isExtended: true,
    isInverted: true,
    thumbnail: 'photo'
  }
}`,...(re=(te=E.parameters)==null?void 0:te.docs)==null?void 0:re.source}}};const Pe=["Default","Uploading","Uploaded","Replaceable","Alert","ExtendedUploading","ExtendedUploaded","ExtendedReplaceable","ExtendedAlert","ExtendedUploadingFile","ExtendedAlertImage","ExtendedInvertedAlertImage"];export{d as Alert,o as Default,u as ExtendedAlert,g as ExtendedAlertImage,E as ExtendedInvertedAlertImage,m as ExtendedReplaceable,p as ExtendedUploaded,c as ExtendedUploading,x as ExtendedUploadingFile,l as Replaceable,i as Uploaded,A as Uploading,Pe as __namedExportsOrder,He as default};
