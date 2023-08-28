import{j as a,t as S}from"./TetrislyProvider-51cc1c11.js";import{r as p}from"./index-61bf1805.js";import{R as h}from"./tetrisly-icons.es-9149c524.js";import{l as C}from"./lodash-f6b38868.js";import"./index-5899efbe.js";import{L as V}from"./Loader-f9e3d507.js";import{T as B}from"./TetDocs-067ef22a.js";import"./_commonjsHelpers-de833af9.js";import"./index-25847fad.js";import"./iframe-bcb5d909.js";import"../sb-preview/runtime.js";import"./index-d475d2ea.js";import"./index-6a5bd4ef.js";import"./index-d37d4223.js";import"./index-356e4a49.js";const g={small:{w:"small",h:"small",dropdownIndicator:{w:"xLarge"}},medium:{w:"medium",h:"medium",dropdownIndicator:{w:"2xLarge"}},large:{w:"large",h:"large",dropdownIndicator:{h:"3xLarge"}}},D={p:"component-padding-null",bg:"action-inverted-normal",display:"flex",gap:"component-gap-xSmall",alignItems:"center",justifyContent:"center",borderRadius:"large",whiteSpace:"nowrap",opacity:{disabled:"disabled"},outlineColor:{focus:"interaction-focus-default"},outlineWidth:{focus:"focus"},outlineOffset:2,pointerEvents:{loading:"none",disabled:"none"},transition:!0,transitionDuration:200,variants:{default:{sizes:g,ringInset:!0,ring:"100",ringColor:{_:"action-outline-normal",hover:"action-outline-hover",active:"action-outline-active",selected:"action-outline-selected"},boxShadow:"bottom-100",appearances:{primary:{intents:{none:{color:{_:"action-neutral-normal",hover:"action-neutral-hover",active:"action-neutral-active",selected:"action-neutral-selected"}},success:{color:{_:"action-success-normal",hover:"action-success-hover",active:"action-success-active",selected:"action-success-selected"}},negative:{color:{_:"action-destructive-normal",hover:"action-destructive-hover",active:"action-destructive-active",selected:"action-destructive-selected"}}}},inverted:{bg:{_:"action-inverted-normal",hover:"action-inverted-hover",active:"action-inverted-active",selected:"action-inverted-selected"},color:{_:"action-neutral-normal",hover:"action-neutral-hover",active:"action-neutral-active",selected:"action-neutral-selected"}}}},ghost:{sizes:g,appearances:{primary:{bg:{_:"action-ghost-normal",hover:"action-ghost-hover",active:"action-ghost-active",selected:"action-ghost-selected"},intents:{none:{color:{_:"action-neutral-normal",hover:"action-neutral-hover",active:"action-neutral-active",selected:"action-neutral-selected"}},success:{color:{_:"action-success-normal",hover:"action-success-hover",active:"action-success-active",selected:"action-success-selected"}},negative:{color:{_:"action-destructive-normal",hover:"action-destructive-hover",active:"action-destructive-active",selected:"action-destructive-selected"},bg:{_:"action-ghost-normal",hover:"action-ghost-destructive-hover",active:"action-ghost-destructive-active",selected:"action-ghost-destructive-selected"}}}},inverted:{color:{_:"action-inverted-normal",hover:"action-inverted-hover",active:"action-inverted-active",selected:"action-inverted-selected"},bg:{_:"action-ghost-normal",hover:"action-ghost-inverted-hover",active:"action-ghost-inverted-active",selected:"action-ghost-inverted-selected"}},reverseInverted:{color:{_:"action-reverseInverted-normal",hover:"action-reverseInverted-hover",active:"action-reverseInverted-active",selected:"action-reverseInverted-selected"},bg:{_:"action-reverseInverted-normal",hover:"action-reverseInverted-hover",active:"action-reverseInverted-active",selected:"action-reverseInverted-selected"}}}},bare:{bg:"transparent",appearances:{primary:{intents:{none:{color:{_:"action-neutral-normal",hover:"action-neutral-hover",active:"action-neutral-active",selected:"action-neutral-selected"}},success:{color:{_:"action-success-normal",hover:"action-success-hover",active:"action-success-active",selected:"action-success-selected"}},negative:{color:{_:"action-destructive-normal",hover:"action-destructive-hover",active:"action-destructive-active",selected:"action-destructive-selected"}}}},inverted:{color:{_:"action-inverted-normal",hover:"action-inverted-hover",active:"action-inverted-active",selected:"action-inverted-selected"}},reverseInverted:{color:{_:"action-reverseInverted-normal",hover:"action-reverseInverted-hover",active:"action-reverseInverted-active",selected:"action-reverseInverted-selected"}}}}}};function E(e){const{variants:l,...t}=C.merge(D,e.custom??{}),r=l[e.variant],{appearances:s,sizes:o,...u}=r,d=s[e.appearance],{intents:v,...m}=d,_=v?v[e.intent]:{},x=o&&o[e.size],{dropdownIndicator:z,...j}=x??{dropdownIndicator:{}},q=e.dropdownIndicator?z:{};return{...t,...u,...m,..._,...j,...q}}const c=({intent:e="none",variant:l,appearance:t,size:r="medium",icon:s,dropdownIndicator:o=!1,state:u,custom:d={},...v})=>{const m=E({intent:e,variant:l??"default",appearance:t??"primary",size:r,dropdownIndicator:o,custom:d});return a.jsxs(S.button,{"data-testid":"button",...m,disabled:["disabled","loading"].includes(u??""),"data-state":u,...v,children:[u==="loading"?a.jsx(V,{appearance:t==="inverted"?"white":"greyscale",size:"small",shape:"circle"}):a.jsx(h,{name:s}),o&&a.jsx(h,{name:"20-chevron-down"})]})};try{c.displayName="IconButton",c.__docgenInfo={description:"",displayName:"IconButton",props:{variant:{defaultValue:null,description:"",name:"variant",required:!1,type:{name:"enum",value:[{value:'"ghost"'},{value:'"default"'},{value:'"bare"'}]}},appearance:{defaultValue:null,description:"",name:"appearance",required:!1,type:{name:"enum",value:[{value:'"primary"'},{value:'"inverted"'},{value:'"reverseInverted"'}]}},intent:{defaultValue:{value:"none"},description:"",name:"intent",required:!1,type:{name:"enum",value:[{value:'"none"'},{value:'"success"'},{value:'"negative"'}]}},size:{defaultValue:{value:"medium"},description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"medium"'},{value:'"large"'},{value:'"small"'}]}},dropdownIndicator:{defaultValue:{value:"false"},description:"",name:"dropdownIndicator",required:!1,type:{name:"boolean"}},custom:{defaultValue:{value:"{}"},description:"",name:"custom",required:!1,type:{name:"DeepPartial<IconButtonConfig>"}},icon:{defaultValue:null,description:"",name:"icon",required:!0,type:{name:"enum",value:[{value:'"20-accesibility"'},{value:'"20-activity"'},{value:'"20-alarm-clock"'},{value:'"20-alert-fill"'},{value:'"20-alert"'},{value:'"20-anchor"'},{value:'"20-apps"'},{value:'"20-archive"'},{value:'"20-arrow-down-left"'},{value:'"20-arrow-down-right"'},{value:'"20-arrow-down"'},{value:'"20-arrow-left"'},{value:'"20-arrow-right"'},{value:'"20-arrow-up-left"'},{value:'"20-arrow-up-right"'},{value:'"20-arrow-up"'},{value:'"20-arrowhead-down"'},{value:'"20-arrowhead-left"'},{value:'"20-arrowhead-right"'},{value:'"20-arrowhead-up"'},{value:'"20-attachment"'},{value:'"20-background"'},{value:'"20-backspace"'},{value:'"20-backward"'},{value:'"20-bank"'},{value:'"20-battery-charging"'},{value:'"20-battery-empty"'},{value:'"20-battery-full"'},{value:'"20-battery-low"'},{value:'"20-battery-medium"'},{value:'"20-bell"'},{value:'"20-block"'},{value:'"20-bluetooth-off"'},{value:'"20-bluetooth"'},{value:'"20-bolt"'},{value:'"20-book"'},{value:'"20-bookmark"'},{value:'"20-border-all"'},{value:'"20-border-bottom"'},{value:'"20-border-horizontal"'},{value:'"20-border-inner"'},{value:'"20-border-left"'},{value:'"20-border-right"'},{value:'"20-border-style"'},{value:'"20-border-top"'},{value:'"20-border-vertical"'},{value:'"20-brackets-curly"'},{value:'"20-brain"'},{value:'"20-broadcast"'},{value:'"20-brush"'},{value:'"20-bug"'},{value:'"20-bulb"'},{value:'"20-calculator"'},{value:'"20-calendar-check"'},{value:'"20-calendar-close"'},{value:'"20-calendar-edit"'},{value:'"20-calendar-minus"'},{value:'"20-calendar-plus"'},{value:'"20-calendar"'},{value:'"20-camera"'},{value:'"20-card"'},{value:'"20-chart-bar-box"'},{value:'"20-chart-bar"'},{value:'"20-chart-line"'},{value:'"20-chart-pie"'},{value:'"20-chat"'},{value:'"20-check-badge-fill"'},{value:'"20-check-badge"'},{value:'"20-check-circle-fill"'},{value:'"20-check-circle"'},{value:'"20-check-large"'},{value:'"20-check-small"'},{value:'"20-chevron-down-small-circle"'},{value:'"20-chevron-down-small-fill"'},{value:'"20-chevron-down-small"'},{value:'"20-chevron-down"'},{value:'"20-chevron-left-small-circle"'},{value:'"20-chevron-left-small-fill"'},{value:'"20-chevron-left-small"'},{value:'"20-chevron-left"'},{value:'"20-chevron-right-small-circle"'},{value:'"20-chevron-right-small-fill"'},{value:'"20-chevron-right-small"'},{value:'"20-chevron-right"'},{value:'"20-chevron-up-small-circle"'},{value:'"20-chevron-up-small-fill"'},{value:'"20-chevron-up-small"'},{value:'"20-chevron-up"'},{value:'"20-clipboard"'},{value:'"20-close"'},{value:'"20-cloud"'},{value:'"20-code-2"'},{value:'"20-code"'},{value:'"20-command"'},{value:'"20-comment"'},{value:'"20-company"'},{value:'"20-compass"'},{value:'"20-copy"'},{value:'"20-cpu"'},{value:'"20-crown"'},{value:'"20-cursor-arrow-fill"'},{value:'"20-cursor-arrow"'},{value:'"20-cursor-text"'},{value:'"20-database"'},{value:'"20-delete"'},{value:'"20-desktop"'},{value:'"20-devices"'},{value:'"20-diamond"'},{value:'"20-dns"'},{value:'"20-download"'},{value:'"20-drag-drop-horizontal"'},{value:'"20-drag-drop-vertical"'},{value:'"20-edit"'},{value:'"20-email"'},{value:'"20-emoji-big-smile"'},{value:'"20-emoji-sad"'},{value:'"20-emoji-smile"'},{value:'"20-error-fill"'},{value:'"20-error"'},{value:'"20-extension"'},{value:'"20-eye-off"'},{value:'"20-eye"'},{value:'"20-file-check"'},{value:'"20-file-close"'},{value:'"20-file-edit"'},{value:'"20-file-minus"'},{value:'"20-file-plus"'},{value:'"20-file"'},{value:'"20-filter"'},{value:'"20-fingerprint"'},{value:'"20-fire"'},{value:'"20-flag"'},{value:'"20-folder-check"'},{value:'"20-folder-close"'},{value:'"20-folder-edit"'},{value:'"20-folder-minus"'},{value:'"20-folder-plus"'},{value:'"20-folder"'},{value:'"20-format-align-center"'},{value:'"20-format-align-justify"'},{value:'"20-format-align-left"'},{value:'"20-format-align-right"'},{value:'"20-format-all-small-caps"'},{value:'"20-format-bold"'},{value:'"20-format-font-size"'},{value:'"20-format-indent-decrease"'},{value:'"20-format-indent-increase"'},{value:'"20-format-italic"'},{value:'"20-format-letter-spacing"'},{value:'"20-format-line-height"'},{value:'"20-format-lowercase"'},{value:'"20-format-paragraph-spacing"'},{value:'"20-format-scale-horizontal"'},{value:'"20-format-scale-vertical"'},{value:'"20-format-small-caps"'},{value:'"20-format-strikethrough"'},{value:'"20-format-subscript"'},{value:'"20-format-superscript"'},{value:'"20-format-titlecase"'},{value:'"20-format-underline"'},{value:'"20-format-uppercase"'},{value:'"20-forward"'},{value:'"20-fullscreen-exit"'},{value:'"20-fullscreen"'},{value:'"20-function"'},{value:'"20-git-branch"'},{value:'"20-git-commit"'},{value:'"20-git-diff"'},{value:'"20-git-fork"'},{value:'"20-git-merge"'},{value:'"20-git-pull-request"'},{value:'"20-globe"'},{value:'"20-hashtag"'},{value:'"20-heading"'},{value:'"20-headphones"'},{value:'"20-health"'},{value:'"20-heart"'},{value:'"20-help-fill"'},{value:'"20-help"'},{value:'"20-home"'},{value:'"20-horizontal-align-center"'},{value:'"20-horizontal-align-left"'},{value:'"20-horizontal-align-right"'},{value:'"20-hourglass"'},{value:'"20-image-check"'},{value:'"20-image-close"'},{value:'"20-image-edit"'},{value:'"20-image-minus"'},{value:'"20-image-plus"'},{value:'"20-image"'},{value:'"20-images"'},{value:'"20-inbox"'},{value:'"20-info-circle"'},{value:'"20-info-fill"'},{value:'"20-key"'},{value:'"20-keyboard"'},{value:'"20-label"'},{value:'"20-laptop"'},{value:'"20-layer-align-bottom-center"'},{value:'"20-layer-align-horizontal"'},{value:'"20-layer-align-left-center"'},{value:'"20-layer-align-right-center"'},{value:'"20-layer-align-top-center"'},{value:'"20-layer-align-vertical"'},{value:'"20-layer-three"'},{value:'"20-layer-two"'},{value:'"20-layout-swap-horizontal"'},{value:'"20-layout-swap-vertical"'},{value:'"20-link-broken"'},{value:'"20-link"'},{value:'"20-list-bullet"'},{value:'"20-list-check"'},{value:'"20-list-ordered"'},{value:'"20-list-unordered"'},{value:'"20-lock"'},{value:'"20-log-in"'},{value:'"20-log-out"'},{value:'"20-mail"'},{value:'"20-map"'},{value:'"20-marker-pin"'},{value:'"20-math-alpha"'},{value:'"20-math-angle"'},{value:'"20-math-beta"'},{value:'"20-math-gamma"'},{value:'"20-math-infinite"'},{value:'"20-math-omega"'},{value:'"20-math-pi"'},{value:'"20-math-sigma"'},{value:'"20-math-sine-wawe"'},{value:'"20-math-square-root "'},{value:'"20-math-theta"'},{value:'"20-megaphone"'},{value:'"20-menu"'},{value:'"20-message"'},{value:'"20-mic"'},{value:'"20-minus"'},{value:'"20-mobile"'},{value:'"20-more-horizontal"'},{value:'"20-more-vertical"'},{value:'"20-mouse"'},{value:'"20-navigation"'},{value:'"20-notification"'},{value:'"20-open-in-new"'},{value:'"20-option"'},{value:'"20-package"'},{value:'"20-paintroller"'},{value:'"20-paperplane"'},{value:'"20-paragraph"'},{value:'"20-pause-circle"'},{value:'"20-pause"'},{value:'"20-phone-call"'},{value:'"20-phone-callback"'},{value:'"20-phone-forwarded"'},{value:'"20-phone-incoming"'},{value:'"20-phone-missed"'},{value:'"20-phone-outgoing"'},{value:'"20-phone"'},{value:'"20-pin"'},{value:'"20-placeholder-2"'},{value:'"20-placeholder"'},{value:'"20-play-circle"'},{value:'"20-play"'},{value:'"20-plugin"'},{value:'"20-plus"'},{value:'"20-print"'},{value:'"20-questionmark"'},{value:'"20-quote"'},{value:'"20-rainbow"'},{value:'"20-receipt"'},{value:'"20-redo"'},{value:'"20-refresh"'},{value:'"20-repeat"'},{value:'"20-reply"'},{value:'"20-robot"'},{value:'"20-scissors"'},{value:'"20-search"'},{value:'"20-settings"'},{value:'"20-share"'},{value:'"20-shield"'},{value:'"20-shirt"'},{value:'"20-shopping-basket"'},{value:'"20-shopping-cart"'},{value:'"20-sidebar-hide"'},{value:'"20-sidebar-show"'},{value:'"20-slider"'},{value:'"20-speedmeter"'},{value:'"20-star-filled"'},{value:'"20-star-half-filled"'},{value:'"20-star"'},{value:'"20-stopwatch"'},{value:'"20-suitcase"'},{value:'"20-sun"'},{value:'"20-tablet"'},{value:'"20-tag"'},{value:'"20-target-off"'},{value:'"20-target"'},{value:'"20-terminal-2"'},{value:'"20-terminal"'},{value:'"20-tetrisly"'},{value:'"20-text"'},{value:'"20-thumb-down"'},{value:'"20-thumb-up"'},{value:'"20-ticket"'},{value:'"20-time-clock"'},{value:'"20-toggle-off"'},{value:'"20-toggle-on"'},{value:'"20-transaction-horizontal"'},{value:'"20-transaction-vertical"'},{value:'"20-tree"'},{value:'"20-trend-down"'},{value:'"20-trend-up"'},{value:'"20-turn-off"'},{value:'"20-tv"'},{value:'"20-undo"'},{value:'"20-unfold-less"'},{value:'"20-unfold-more"'},{value:'"20-unlock"'},{value:'"20-upload"'},{value:'"20-user-check"'},{value:'"20-user-close"'},{value:'"20-user-edit"'},{value:'"20-user-minus"'},{value:'"20-user-plus"'},{value:'"20-user"'},{value:'"20-users"'},{value:'"20-vertical-align-bottom"'},{value:'"20-vertical-align-center"'},{value:'"20-vertical-align-top"'},{value:'"20-video-camera"'},{value:'"20-video"'},{value:'"20-view-boxes"'},{value:'"20-view-columns"'},{value:'"20-view-dashboard"'},{value:'"20-view-day"'},{value:'"20-view-layout-bottom"'},{value:'"20-view-layout-grid"'},{value:'"20-view-layout-left"'},{value:'"20-view-layout-right"'},{value:'"20-view-layout-top"'},{value:'"20-view-lp"'},{value:'"20-view-rows"'},{value:'"20-view-schedule"'},{value:'"20-view-slider"'},{value:'"20-view-table"'},{value:'"20-voice"'},{value:'"20-voicemail"'},{value:'"20-volume-max"'},{value:'"20-volume-medium"'},{value:'"20-volume-min"'},{value:'"20-volume-mute"'},{value:'"20-wallet"'},{value:'"20-warning-fill"'},{value:'"20-warning"'},{value:'"20-watch"'},{value:'"20-water-drop"'},{value:'"20-wifi-off"'},{value:'"20-wifi"'}]}},state:{defaultValue:null,description:"",name:"state",required:!1,type:{name:"enum",value:[{value:'"disabled"'},{value:'"selected"'},{value:'"loading"'}]}}}}}catch{}const L=()=>a.jsx("div",{}),Y={component:c,tags:["autodocs"],argTypes:{variant:{description:'Figma "Type" props',table:{defaultValue:{summary:"default"}}},appearance:{table:{defaultValue:{summary:"primary"}}}},parameters:{docs:{description:{component:"Specific  Button that lacks the accompanying text label, relying only on an icon or symbol to convey its purpose. The Icon Button helps to design within limited space, as well as allows for a maintaining cleaner interface."},page:()=>a.jsx(B,{docs:"https://docs.tetrisly.com/components/in-progress/iconbutton",children:a.jsx(L,{})})}}},i={args:{icon:"20-placeholder"}},R=e=>{const[l,t]=p.useState(!1);return p.useEffect(()=>{l&&setTimeout(()=>t(!1),1e3)},[l]),a.jsx(c,{...e,state:l?"loading":void 0,onClick:()=>t(r=>!r)})},n={args:{icon:"20-placeholder"},render:R};var f,b,w;i.parameters={...i.parameters,docs:{...(f=i.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    icon: '20-placeholder'
  }
}`,...(w=(b=i.parameters)==null?void 0:b.docs)==null?void 0:w.source}}};var y,k,I;n.parameters={...n.parameters,docs:{...(y=n.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    icon: '20-placeholder'
  },
  render: ClickableRender
}`,...(I=(k=n.parameters)==null?void 0:k.docs)==null?void 0:I.source}}};const Z=["Default","Clickable"];export{n as Clickable,i as Default,Z as __namedExportsOrder,Y as default};
//# sourceMappingURL=IconButton.stories-7372b441.js.map