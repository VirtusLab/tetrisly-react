import{j as t}from"./jsx-runtime-ffb262ed.js";import{B as o}from"./Button-f755ee30.js";import{m as i}from"./TetDocs-d097c0ab.js";const a={small:{w:"$size-small",h:"$size-small",px:"unset",hasDropdownIndicator:{w:"$size-xLarge",pr:"unset"},hasBeforeIcon:{pl:"unset"},hasAfterIcon:{pr:"unset"}},medium:{w:"$size-medium",h:"$size-medium",px:"unset",hasDropdownIndicator:{w:"$size-2xLarge",pr:"unset"},hasBeforeIcon:{pl:"unset"},hasAfterIcon:{pr:"unset"}},large:{w:"$size-large",h:"$size-large",px:"unset",hasDropdownIndicator:{h:"$size-3xLarge",pr:"unset"},hasBeforeIcon:{pl:"unset"},hasAfterIcon:{pr:"unset"}}},v={p:"$space-component-padding-null",gap:"$space-component-gap-xSmall",borderRadius:"$border-radius-large"},n={default:{...v,size:a},ghost:{...v,size:a},bare:{...v,size:{medium:a.medium,large:a.medium}}},c=({children:l,...e})=>{const u=e.appearance==="primary"?"secondary":e.appearance;return{...e,appearance:u,intent:e.intent,beforeIcon:e.icon,label:""}},r=l=>{const e=c(l),u=i({defaultConfig:n,custom:e.custom});return t.jsx(o,{...e,custom:u})};try{r.displayName="IconButton",r.__docgenInfo={description:"",displayName:"IconButton",props:{icon:{defaultValue:null,description:"",name:"icon",required:!0,type:{name:"enum",value:[{value:'"20-accesibility"'},{value:'"20-activity"'},{value:'"20-alarm-clock"'},{value:'"20-alert-fill"'},{value:'"20-alert"'},{value:'"20-anchor"'},{value:'"20-apps"'},{value:'"20-archive"'},{value:'"20-arrow-down-left"'},{value:'"20-arrow-down-right"'},{value:'"20-arrow-down"'},{value:'"20-arrow-left"'},{value:'"20-arrow-right"'},{value:'"20-arrow-up-left"'},{value:'"20-arrow-up-right"'},{value:'"20-arrow-up"'},{value:'"20-arrowhead-down"'},{value:'"20-arrowhead-left"'},{value:'"20-arrowhead-right"'},{value:'"20-arrowhead-up"'},{value:'"20-attachment"'},{value:'"20-background"'},{value:'"20-backspace"'},{value:'"20-backward"'},{value:'"20-bank"'},{value:'"20-battery-charging"'},{value:'"20-battery-empty"'},{value:'"20-battery-full"'},{value:'"20-battery-low"'},{value:'"20-battery-medium"'},{value:'"20-bell"'},{value:'"20-block"'},{value:'"20-bluetooth-off"'},{value:'"20-bluetooth"'},{value:'"20-bolt"'},{value:'"20-book"'},{value:'"20-bookmark"'},{value:'"20-border-all"'},{value:'"20-border-bottom"'},{value:'"20-border-horizontal"'},{value:'"20-border-inner"'},{value:'"20-border-left"'},{value:'"20-border-right"'},{value:'"20-border-style"'},{value:'"20-border-top"'},{value:'"20-border-vertical"'},{value:'"20-brackets-curly"'},{value:'"20-brain"'},{value:'"20-broadcast"'},{value:'"20-brush"'},{value:'"20-bug"'},{value:'"20-bulb"'},{value:'"20-calculator"'},{value:'"20-calendar-check"'},{value:'"20-calendar-close"'},{value:'"20-calendar-edit"'},{value:'"20-calendar-minus"'},{value:'"20-calendar-plus"'},{value:'"20-calendar"'},{value:'"20-camera"'},{value:'"20-card"'},{value:'"20-chart-bar-box"'},{value:'"20-chart-bar"'},{value:'"20-chart-line"'},{value:'"20-chart-pie"'},{value:'"20-chat"'},{value:'"20-check-badge-fill"'},{value:'"20-check-badge"'},{value:'"20-check-circle-fill"'},{value:'"20-check-circle"'},{value:'"20-check-large"'},{value:'"20-check-small"'},{value:'"20-chevron-down-small-circle"'},{value:'"20-chevron-down-small-fill"'},{value:'"20-chevron-down-small"'},{value:'"20-chevron-down"'},{value:'"20-chevron-left-small-circle"'},{value:'"20-chevron-left-small-fill"'},{value:'"20-chevron-left-small"'},{value:'"20-chevron-left"'},{value:'"20-chevron-right-small-circle"'},{value:'"20-chevron-right-small-fill"'},{value:'"20-chevron-right-small"'},{value:'"20-chevron-right"'},{value:'"20-chevron-up-small-circle"'},{value:'"20-chevron-up-small-fill"'},{value:'"20-chevron-up-small"'},{value:'"20-chevron-up"'},{value:'"20-clipboard"'},{value:'"20-close"'},{value:'"20-cloud"'},{value:'"20-code-2"'},{value:'"20-code"'},{value:'"20-command"'},{value:'"20-comment"'},{value:'"20-company"'},{value:'"20-compass"'},{value:'"20-copy"'},{value:'"20-cpu"'},{value:'"20-crown"'},{value:'"20-cursor-arrow-fill"'},{value:'"20-cursor-arrow"'},{value:'"20-cursor-text"'},{value:'"20-database"'},{value:'"20-delete"'},{value:'"20-desktop"'},{value:'"20-devices"'},{value:'"20-diamond"'},{value:'"20-dns"'},{value:'"20-download"'},{value:'"20-drag-drop-horizontal"'},{value:'"20-drag-drop-vertical"'},{value:'"20-edit"'},{value:'"20-email"'},{value:'"20-emoji-big-smile"'},{value:'"20-emoji-sad"'},{value:'"20-emoji-smile"'},{value:'"20-error-fill"'},{value:'"20-error"'},{value:'"20-extension"'},{value:'"20-eye-off"'},{value:'"20-eye"'},{value:'"20-file-check"'},{value:'"20-file-close"'},{value:'"20-file-edit"'},{value:'"20-file-minus"'},{value:'"20-file-plus"'},{value:'"20-file"'},{value:'"20-filter"'},{value:'"20-fingerprint"'},{value:'"20-fire"'},{value:'"20-flag"'},{value:'"20-folder-check"'},{value:'"20-folder-close"'},{value:'"20-folder-edit"'},{value:'"20-folder-minus"'},{value:'"20-folder-plus"'},{value:'"20-folder"'},{value:'"20-format-align-center"'},{value:'"20-format-align-justify"'},{value:'"20-format-align-left"'},{value:'"20-format-align-right"'},{value:'"20-format-all-small-caps"'},{value:'"20-format-bold"'},{value:'"20-format-font-size"'},{value:'"20-format-indent-decrease"'},{value:'"20-format-indent-increase"'},{value:'"20-format-italic"'},{value:'"20-format-letter-spacing"'},{value:'"20-format-line-height"'},{value:'"20-format-lowercase"'},{value:'"20-format-paragraph-spacing"'},{value:'"20-format-scale-horizontal"'},{value:'"20-format-scale-vertical"'},{value:'"20-format-small-caps"'},{value:'"20-format-strikethrough"'},{value:'"20-format-subscript"'},{value:'"20-format-superscript"'},{value:'"20-format-titlecase"'},{value:'"20-format-underline"'},{value:'"20-format-uppercase"'},{value:'"20-forward"'},{value:'"20-fullscreen-exit"'},{value:'"20-fullscreen"'},{value:'"20-function"'},{value:'"20-git-branch"'},{value:'"20-git-commit"'},{value:'"20-git-diff"'},{value:'"20-git-fork"'},{value:'"20-git-merge"'},{value:'"20-git-pull-request"'},{value:'"20-globe"'},{value:'"20-hashtag"'},{value:'"20-heading"'},{value:'"20-headphones"'},{value:'"20-health"'},{value:'"20-heart"'},{value:'"20-help-fill"'},{value:'"20-help"'},{value:'"20-home"'},{value:'"20-horizontal-align-center"'},{value:'"20-horizontal-align-left"'},{value:'"20-horizontal-align-right"'},{value:'"20-hourglass"'},{value:'"20-image-check"'},{value:'"20-image-close"'},{value:'"20-image-edit"'},{value:'"20-image-minus"'},{value:'"20-image-plus"'},{value:'"20-image"'},{value:'"20-images"'},{value:'"20-inbox"'},{value:'"20-info-circle"'},{value:'"20-info-fill"'},{value:'"20-key"'},{value:'"20-keyboard"'},{value:'"20-label"'},{value:'"20-laptop"'},{value:'"20-layer-align-bottom-center"'},{value:'"20-layer-align-horizontal"'},{value:'"20-layer-align-left-center"'},{value:'"20-layer-align-right-center"'},{value:'"20-layer-align-top-center"'},{value:'"20-layer-align-vertical"'},{value:'"20-layer-three"'},{value:'"20-layer-two"'},{value:'"20-layout-swap-horizontal"'},{value:'"20-layout-swap-vertical"'},{value:'"20-link-broken"'},{value:'"20-link"'},{value:'"20-list-bullet"'},{value:'"20-list-check"'},{value:'"20-list-ordered"'},{value:'"20-list-unordered"'},{value:'"20-lock"'},{value:'"20-log-in"'},{value:'"20-log-out"'},{value:'"20-mail"'},{value:'"20-map"'},{value:'"20-marker-pin"'},{value:'"20-math-alpha"'},{value:'"20-math-angle"'},{value:'"20-math-beta"'},{value:'"20-math-gamma"'},{value:'"20-math-infinite"'},{value:'"20-math-omega"'},{value:'"20-math-pi"'},{value:'"20-math-sigma"'},{value:'"20-math-sine-wawe"'},{value:'"20-math-square-root "'},{value:'"20-math-theta"'},{value:'"20-megaphone"'},{value:'"20-menu"'},{value:'"20-message"'},{value:'"20-mic"'},{value:'"20-minus"'},{value:'"20-mobile"'},{value:'"20-more-horizontal"'},{value:'"20-more-vertical"'},{value:'"20-mouse"'},{value:'"20-navigation"'},{value:'"20-notification"'},{value:'"20-open-in-new"'},{value:'"20-option"'},{value:'"20-package"'},{value:'"20-paintroller"'},{value:'"20-paperplane"'},{value:'"20-paragraph"'},{value:'"20-pause-circle"'},{value:'"20-pause"'},{value:'"20-phone-call"'},{value:'"20-phone-callback"'},{value:'"20-phone-forwarded"'},{value:'"20-phone-incoming"'},{value:'"20-phone-missed"'},{value:'"20-phone-outgoing"'},{value:'"20-phone"'},{value:'"20-pin"'},{value:'"20-placeholder-2"'},{value:'"20-placeholder"'},{value:'"20-play-circle"'},{value:'"20-play"'},{value:'"20-plugin"'},{value:'"20-plus"'},{value:'"20-print"'},{value:'"20-questionmark"'},{value:'"20-quote"'},{value:'"20-rainbow"'},{value:'"20-receipt"'},{value:'"20-redo"'},{value:'"20-refresh"'},{value:'"20-repeat"'},{value:'"20-reply"'},{value:'"20-robot"'},{value:'"20-scissors"'},{value:'"20-search"'},{value:'"20-settings"'},{value:'"20-share"'},{value:'"20-shield"'},{value:'"20-shirt"'},{value:'"20-shopping-basket"'},{value:'"20-shopping-cart"'},{value:'"20-sidebar-hide"'},{value:'"20-sidebar-show"'},{value:'"20-slider"'},{value:'"20-speedmeter"'},{value:'"20-star-filled"'},{value:'"20-star-half-filled"'},{value:'"20-star"'},{value:'"20-stopwatch"'},{value:'"20-suitcase"'},{value:'"20-sun"'},{value:'"20-tablet"'},{value:'"20-tag"'},{value:'"20-target-off"'},{value:'"20-target"'},{value:'"20-terminal-2"'},{value:'"20-terminal"'},{value:'"20-tetrisly"'},{value:'"20-text"'},{value:'"20-thumb-down"'},{value:'"20-thumb-up"'},{value:'"20-ticket"'},{value:'"20-time-clock"'},{value:'"20-toggle-off"'},{value:'"20-toggle-on"'},{value:'"20-transaction-horizontal"'},{value:'"20-transaction-vertical"'},{value:'"20-tree"'},{value:'"20-trend-down"'},{value:'"20-trend-up"'},{value:'"20-turn-off"'},{value:'"20-tv"'},{value:'"20-undo"'},{value:'"20-unfold-less"'},{value:'"20-unfold-more"'},{value:'"20-unlock"'},{value:'"20-upload"'},{value:'"20-user-check"'},{value:'"20-user-close"'},{value:'"20-user-edit"'},{value:'"20-user-minus"'},{value:'"20-user-plus"'},{value:'"20-user"'},{value:'"20-users"'},{value:'"20-vertical-align-bottom"'},{value:'"20-vertical-align-center"'},{value:'"20-vertical-align-top"'},{value:'"20-video-camera"'},{value:'"20-video"'},{value:'"20-view-boxes"'},{value:'"20-view-columns"'},{value:'"20-view-dashboard"'},{value:'"20-view-day"'},{value:'"20-view-layout-bottom"'},{value:'"20-view-layout-grid"'},{value:'"20-view-layout-left"'},{value:'"20-view-layout-right"'},{value:'"20-view-layout-top"'},{value:'"20-view-lp"'},{value:'"20-view-rows"'},{value:'"20-view-schedule"'},{value:'"20-view-slider"'},{value:'"20-view-table"'},{value:'"20-voice"'},{value:'"20-voicemail"'},{value:'"20-volume-max"'},{value:'"20-volume-medium"'},{value:'"20-volume-min"'},{value:'"20-volume-mute"'},{value:'"20-wallet"'},{value:'"20-warning-fill"'},{value:'"20-warning"'},{value:'"20-watch"'},{value:'"20-water-drop"'},{value:'"20-wifi-off"'},{value:'"20-wifi"'}]}},hasDropdownIndicator:{defaultValue:null,description:"",name:"hasDropdownIndicator",required:!1,type:{name:"boolean"}},state:{defaultValue:null,description:"",name:"state",required:!1,type:{name:"enum",value:[{value:'"disabled"'},{value:'"loading"'},{value:'"selected"'}]}},custom:{defaultValue:null,description:"",name:"custom",required:!1,type:{name:"ButtonConfig"}},variant:{defaultValue:null,description:"",name:"variant",required:!1,type:{name:"enum",value:[{value:'"ghost"'},{value:'"default"'},{value:'"bare"'}]}},appearance:{defaultValue:null,description:"",name:"appearance",required:!1,type:{name:"enum",value:[{value:'"primary"'},{value:'"inverted"'},{value:'"reverseInverted"'}]}},intent:{defaultValue:null,description:"",name:"intent",required:!1,type:{name:"enum",value:[{value:'"success"'},{value:'"none"'},{value:'"destructive"'}]}},size:{defaultValue:null,description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"large"'},{value:'"medium"'},{value:'"small"'}]}}}}}catch{}export{r as I};
//# sourceMappingURL=IconButton-0bbb783c.js.map
