import { ChangeEventHandler, MouseEventHandler } from 'react';
import { TextInputProps } from './TextInput.props';
export declare const useTextInput: ({ custom, beforeComponent, afterComponent, onChange, ...restProps }: Omit<TextInputProps, 'type' | 'state' | 'value' | 'hasClearButton'>) => {
    innerValue: string;
    styles: {
        container: import("../../types").BaseProps;
        input: import("../../types").BaseProps;
        icon: import("../../types").BaseProps;
        text: import("../../types").BaseProps;
        clearButton: import("../../types").BaseProps<"appearance">;
        beforeComponent: import("../../types").BaseProps;
        afterComponent: import("../../types").BaseProps;
    };
    textInputProps: {
        name?: string | undefined;
        value?: string | number | readonly string[] | undefined;
        placeholder?: string | undefined;
        form?: string | undefined;
        pattern?: string | undefined;
        max?: string | number | undefined;
        min?: string | number | undefined;
        onFocus?: import("react").FocusEventHandler<HTMLInputElement> | undefined;
        onBlur?: import("react").FocusEventHandler<HTMLInputElement> | undefined;
        onChange?: ChangeEventHandler<HTMLInputElement> | undefined;
        onKeyDown?: import("react").KeyboardEventHandler<HTMLInputElement> | undefined;
        onKeyUp?: import("react").KeyboardEventHandler<HTMLInputElement> | undefined;
        onClick?: MouseEventHandler<HTMLInputElement> | undefined;
        src?: string | undefined;
        alt?: string | undefined;
        formAction?: string | undefined;
        formEncType?: string | undefined;
        formMethod?: string | undefined;
        formNoValidate?: boolean | undefined;
        formTarget?: string | undefined;
        autoComplete?: string | undefined;
        accept?: string | undefined;
        capture?: boolean | "environment" | "user" | undefined;
        enterKeyHint?: "search" | "enter" | "done" | "go" | "next" | "previous" | "send" | undefined;
        list?: string | undefined;
        maxLength?: number | undefined;
        minLength?: number | undefined;
        multiple?: boolean | undefined;
        readOnly?: boolean | undefined;
        required?: boolean | undefined;
        step?: string | number | undefined;
    };
    containerProps: {
        typeof?: string | undefined;
        slot?: string | undefined;
        style?: import("react").CSSProperties | undefined;
        title?: string | undefined;
        children?: import("react").ReactNode;
        suppressHydrationWarning?: boolean | undefined;
        className?: string | undefined;
        height?: string | number | undefined;
        id?: string | undefined;
        lang?: string | undefined;
        width?: string | number | undefined;
        role?: import("react").AriaRole | undefined;
        tabIndex?: number | undefined;
        "aria-activedescendant"?: string | undefined;
        "aria-atomic"?: (boolean | "true" | "false") | undefined;
        "aria-autocomplete"?: "inline" | "none" | "list" | "both" | undefined;
        "aria-braillelabel"?: string | undefined;
        "aria-brailleroledescription"?: string | undefined;
        "aria-busy"?: (boolean | "true" | "false") | undefined;
        "aria-checked"?: boolean | "true" | "false" | "mixed" | undefined;
        "aria-colcount"?: number | undefined;
        "aria-colindex"?: number | undefined;
        "aria-colindextext"?: string | undefined;
        "aria-colspan"?: number | undefined;
        "aria-controls"?: string | undefined;
        "aria-current"?: boolean | "time" | "step" | "date" | "true" | "false" | "page" | "location" | undefined;
        "aria-describedby"?: string | undefined;
        "aria-description"?: string | undefined;
        "aria-details"?: string | undefined;
        "aria-disabled"?: (boolean | "true" | "false") | undefined;
        "aria-dropeffect"?: "link" | "none" | "copy" | "move" | "execute" | "popup" | undefined;
        "aria-errormessage"?: string | undefined;
        "aria-expanded"?: (boolean | "true" | "false") | undefined;
        "aria-flowto"?: string | undefined;
        "aria-grabbed"?: (boolean | "true" | "false") | undefined;
        "aria-haspopup"?: boolean | "menu" | "tree" | "grid" | "dialog" | "listbox" | "true" | "false" | undefined;
        "aria-hidden"?: (boolean | "true" | "false") | undefined;
        "aria-invalid"?: boolean | "true" | "false" | "grammar" | "spelling" | undefined;
        "aria-keyshortcuts"?: string | undefined;
        "aria-label"?: string | undefined;
        "aria-labelledby"?: string | undefined;
        "aria-level"?: number | undefined;
        "aria-live"?: "off" | "assertive" | "polite" | undefined;
        "aria-modal"?: (boolean | "true" | "false") | undefined;
        "aria-multiline"?: (boolean | "true" | "false") | undefined;
        "aria-multiselectable"?: (boolean | "true" | "false") | undefined;
        "aria-orientation"?: "horizontal" | "vertical" | undefined;
        "aria-owns"?: string | undefined;
        "aria-placeholder"?: string | undefined;
        "aria-posinset"?: number | undefined;
        "aria-pressed"?: boolean | "true" | "false" | "mixed" | undefined;
        "aria-readonly"?: (boolean | "true" | "false") | undefined;
        "aria-relevant"?: "all" | "text" | "additions" | "additions removals" | "additions text" | "removals" | "removals additions" | "removals text" | "text additions" | "text removals" | undefined;
        "aria-required"?: (boolean | "true" | "false") | undefined;
        "aria-roledescription"?: string | undefined;
        "aria-rowcount"?: number | undefined;
        "aria-rowindex"?: number | undefined;
        "aria-rowindextext"?: string | undefined;
        "aria-rowspan"?: number | undefined;
        "aria-selected"?: (boolean | "true" | "false") | undefined;
        "aria-setsize"?: number | undefined;
        "aria-sort"?: "none" | "ascending" | "descending" | "other" | undefined;
        "aria-valuemax"?: number | undefined;
        "aria-valuemin"?: number | undefined;
        "aria-valuenow"?: number | undefined;
        "aria-valuetext"?: string | undefined;
        dangerouslySetInnerHTML?: {
            __html: string | TrustedHTML;
        } | undefined;
        onCopy?: import("react").ClipboardEventHandler<HTMLInputElement> | undefined;
        onCopyCapture?: import("react").ClipboardEventHandler<HTMLInputElement> | undefined;
        onCut?: import("react").ClipboardEventHandler<HTMLInputElement> | undefined;
        onCutCapture?: import("react").ClipboardEventHandler<HTMLInputElement> | undefined;
        onPaste?: import("react").ClipboardEventHandler<HTMLInputElement> | undefined;
        onPasteCapture?: import("react").ClipboardEventHandler<HTMLInputElement> | undefined;
        onCompositionEnd?: import("react").CompositionEventHandler<HTMLInputElement> | undefined;
        onCompositionEndCapture?: import("react").CompositionEventHandler<HTMLInputElement> | undefined;
        onCompositionStart?: import("react").CompositionEventHandler<HTMLInputElement> | undefined;
        onCompositionStartCapture?: import("react").CompositionEventHandler<HTMLInputElement> | undefined;
        onCompositionUpdate?: import("react").CompositionEventHandler<HTMLInputElement> | undefined;
        onCompositionUpdateCapture?: import("react").CompositionEventHandler<HTMLInputElement> | undefined;
        onFocusCapture?: import("react").FocusEventHandler<HTMLInputElement> | undefined;
        onBlurCapture?: import("react").FocusEventHandler<HTMLInputElement> | undefined;
        onChangeCapture?: import("react").FormEventHandler<HTMLInputElement> | undefined;
        onBeforeInput?: import("react").FormEventHandler<HTMLInputElement> | undefined;
        onBeforeInputCapture?: import("react").FormEventHandler<HTMLInputElement> | undefined;
        onInput?: import("react").FormEventHandler<HTMLInputElement> | undefined;
        onInputCapture?: import("react").FormEventHandler<HTMLInputElement> | undefined;
        onReset?: import("react").FormEventHandler<HTMLInputElement> | undefined;
        onResetCapture?: import("react").FormEventHandler<HTMLInputElement> | undefined;
        onSubmit?: import("react").FormEventHandler<HTMLInputElement> | undefined;
        onSubmitCapture?: import("react").FormEventHandler<HTMLInputElement> | undefined;
        onInvalid?: import("react").FormEventHandler<HTMLInputElement> | undefined;
        onInvalidCapture?: import("react").FormEventHandler<HTMLInputElement> | undefined;
        onLoad?: import("react").ReactEventHandler<HTMLInputElement> | undefined;
        onLoadCapture?: import("react").ReactEventHandler<HTMLInputElement> | undefined;
        onError?: import("react").ReactEventHandler<HTMLInputElement> | undefined;
        onErrorCapture?: import("react").ReactEventHandler<HTMLInputElement> | undefined;
        onKeyDownCapture?: import("react").KeyboardEventHandler<HTMLInputElement> | undefined;
        onKeyPress?: import("react").KeyboardEventHandler<HTMLInputElement> | undefined;
        onKeyPressCapture?: import("react").KeyboardEventHandler<HTMLInputElement> | undefined;
        onKeyUpCapture?: import("react").KeyboardEventHandler<HTMLInputElement> | undefined;
        onAbort?: import("react").ReactEventHandler<HTMLInputElement> | undefined;
        onAbortCapture?: import("react").ReactEventHandler<HTMLInputElement> | undefined;
        onCanPlay?: import("react").ReactEventHandler<HTMLInputElement> | undefined;
        onCanPlayCapture?: import("react").ReactEventHandler<HTMLInputElement> | undefined;
        onCanPlayThrough?: import("react").ReactEventHandler<HTMLInputElement> | undefined;
        onCanPlayThroughCapture?: import("react").ReactEventHandler<HTMLInputElement> | undefined;
        onDurationChange?: import("react").ReactEventHandler<HTMLInputElement> | undefined;
        onDurationChangeCapture?: import("react").ReactEventHandler<HTMLInputElement> | undefined;
        onEmptied?: import("react").ReactEventHandler<HTMLInputElement> | undefined;
        onEmptiedCapture?: import("react").ReactEventHandler<HTMLInputElement> | undefined;
        onEncrypted?: import("react").ReactEventHandler<HTMLInputElement> | undefined;
        onEncryptedCapture?: import("react").ReactEventHandler<HTMLInputElement> | undefined;
        onEnded?: import("react").ReactEventHandler<HTMLInputElement> | undefined;
        onEndedCapture?: import("react").ReactEventHandler<HTMLInputElement> | undefined;
        onLoadedData?: import("react").ReactEventHandler<HTMLInputElement> | undefined;
        onLoadedDataCapture?: import("react").ReactEventHandler<HTMLInputElement> | undefined;
        onLoadedMetadata?: import("react").ReactEventHandler<HTMLInputElement> | undefined;
        onLoadedMetadataCapture?: import("react").ReactEventHandler<HTMLInputElement> | undefined;
        onLoadStart?: import("react").ReactEventHandler<HTMLInputElement> | undefined;
        onLoadStartCapture?: import("react").ReactEventHandler<HTMLInputElement> | undefined;
        onPause?: import("react").ReactEventHandler<HTMLInputElement> | undefined;
        onPauseCapture?: import("react").ReactEventHandler<HTMLInputElement> | undefined;
        onPlay?: import("react").ReactEventHandler<HTMLInputElement> | undefined;
        onPlayCapture?: import("react").ReactEventHandler<HTMLInputElement> | undefined;
        onPlaying?: import("react").ReactEventHandler<HTMLInputElement> | undefined;
        onPlayingCapture?: import("react").ReactEventHandler<HTMLInputElement> | undefined;
        onProgress?: import("react").ReactEventHandler<HTMLInputElement> | undefined;
        onProgressCapture?: import("react").ReactEventHandler<HTMLInputElement> | undefined;
        onRateChange?: import("react").ReactEventHandler<HTMLInputElement> | undefined;
        onRateChangeCapture?: import("react").ReactEventHandler<HTMLInputElement> | undefined;
        onResize?: import("react").ReactEventHandler<HTMLInputElement> | undefined;
        onResizeCapture?: import("react").ReactEventHandler<HTMLInputElement> | undefined;
        onSeeked?: import("react").ReactEventHandler<HTMLInputElement> | undefined;
        onSeekedCapture?: import("react").ReactEventHandler<HTMLInputElement> | undefined;
        onSeeking?: import("react").ReactEventHandler<HTMLInputElement> | undefined;
        onSeekingCapture?: import("react").ReactEventHandler<HTMLInputElement> | undefined;
        onStalled?: import("react").ReactEventHandler<HTMLInputElement> | undefined;
        onStalledCapture?: import("react").ReactEventHandler<HTMLInputElement> | undefined;
        onSuspend?: import("react").ReactEventHandler<HTMLInputElement> | undefined;
        onSuspendCapture?: import("react").ReactEventHandler<HTMLInputElement> | undefined;
        onTimeUpdate?: import("react").ReactEventHandler<HTMLInputElement> | undefined;
        onTimeUpdateCapture?: import("react").ReactEventHandler<HTMLInputElement> | undefined;
        onVolumeChange?: import("react").ReactEventHandler<HTMLInputElement> | undefined;
        onVolumeChangeCapture?: import("react").ReactEventHandler<HTMLInputElement> | undefined;
        onWaiting?: import("react").ReactEventHandler<HTMLInputElement> | undefined;
        onWaitingCapture?: import("react").ReactEventHandler<HTMLInputElement> | undefined;
        onAuxClick?: MouseEventHandler<HTMLInputElement> | undefined;
        onAuxClickCapture?: MouseEventHandler<HTMLInputElement> | undefined;
        onClickCapture?: MouseEventHandler<HTMLInputElement> | undefined;
        onContextMenu?: MouseEventHandler<HTMLInputElement> | undefined;
        onContextMenuCapture?: MouseEventHandler<HTMLInputElement> | undefined;
        onDoubleClick?: MouseEventHandler<HTMLInputElement> | undefined;
        onDoubleClickCapture?: MouseEventHandler<HTMLInputElement> | undefined;
        onDrag?: import("react").DragEventHandler<HTMLInputElement> | undefined;
        onDragCapture?: import("react").DragEventHandler<HTMLInputElement> | undefined;
        onDragEnd?: import("react").DragEventHandler<HTMLInputElement> | undefined;
        onDragEndCapture?: import("react").DragEventHandler<HTMLInputElement> | undefined;
        onDragEnter?: import("react").DragEventHandler<HTMLInputElement> | undefined;
        onDragEnterCapture?: import("react").DragEventHandler<HTMLInputElement> | undefined;
        onDragExit?: import("react").DragEventHandler<HTMLInputElement> | undefined;
        onDragExitCapture?: import("react").DragEventHandler<HTMLInputElement> | undefined;
        onDragLeave?: import("react").DragEventHandler<HTMLInputElement> | undefined;
        onDragLeaveCapture?: import("react").DragEventHandler<HTMLInputElement> | undefined;
        onDragOver?: import("react").DragEventHandler<HTMLInputElement> | undefined;
        onDragOverCapture?: import("react").DragEventHandler<HTMLInputElement> | undefined;
        onDragStart?: import("react").DragEventHandler<HTMLInputElement> | undefined;
        onDragStartCapture?: import("react").DragEventHandler<HTMLInputElement> | undefined;
        onDrop?: import("react").DragEventHandler<HTMLInputElement> | undefined;
        onDropCapture?: import("react").DragEventHandler<HTMLInputElement> | undefined;
        onMouseDown?: MouseEventHandler<HTMLInputElement> | undefined;
        onMouseDownCapture?: MouseEventHandler<HTMLInputElement> | undefined;
        onMouseEnter?: MouseEventHandler<HTMLInputElement> | undefined;
        onMouseLeave?: MouseEventHandler<HTMLInputElement> | undefined;
        onMouseMove?: MouseEventHandler<HTMLInputElement> | undefined;
        onMouseMoveCapture?: MouseEventHandler<HTMLInputElement> | undefined;
        onMouseOut?: MouseEventHandler<HTMLInputElement> | undefined;
        onMouseOutCapture?: MouseEventHandler<HTMLInputElement> | undefined;
        onMouseOver?: MouseEventHandler<HTMLInputElement> | undefined;
        onMouseOverCapture?: MouseEventHandler<HTMLInputElement> | undefined;
        onMouseUp?: MouseEventHandler<HTMLInputElement> | undefined;
        onMouseUpCapture?: MouseEventHandler<HTMLInputElement> | undefined;
        onSelect?: import("react").ReactEventHandler<HTMLInputElement> | undefined;
        onSelectCapture?: import("react").ReactEventHandler<HTMLInputElement> | undefined;
        onTouchCancel?: import("react").TouchEventHandler<HTMLInputElement> | undefined;
        onTouchCancelCapture?: import("react").TouchEventHandler<HTMLInputElement> | undefined;
        onTouchEnd?: import("react").TouchEventHandler<HTMLInputElement> | undefined;
        onTouchEndCapture?: import("react").TouchEventHandler<HTMLInputElement> | undefined;
        onTouchMove?: import("react").TouchEventHandler<HTMLInputElement> | undefined;
        onTouchMoveCapture?: import("react").TouchEventHandler<HTMLInputElement> | undefined;
        onTouchStart?: import("react").TouchEventHandler<HTMLInputElement> | undefined;
        onTouchStartCapture?: import("react").TouchEventHandler<HTMLInputElement> | undefined;
        onPointerDown?: import("react").PointerEventHandler<HTMLInputElement> | undefined;
        onPointerDownCapture?: import("react").PointerEventHandler<HTMLInputElement> | undefined;
        onPointerMove?: import("react").PointerEventHandler<HTMLInputElement> | undefined;
        onPointerMoveCapture?: import("react").PointerEventHandler<HTMLInputElement> | undefined;
        onPointerUp?: import("react").PointerEventHandler<HTMLInputElement> | undefined;
        onPointerUpCapture?: import("react").PointerEventHandler<HTMLInputElement> | undefined;
        onPointerCancel?: import("react").PointerEventHandler<HTMLInputElement> | undefined;
        onPointerCancelCapture?: import("react").PointerEventHandler<HTMLInputElement> | undefined;
        onPointerEnter?: import("react").PointerEventHandler<HTMLInputElement> | undefined;
        onPointerEnterCapture?: import("react").PointerEventHandler<HTMLInputElement> | undefined;
        onPointerLeave?: import("react").PointerEventHandler<HTMLInputElement> | undefined;
        onPointerLeaveCapture?: import("react").PointerEventHandler<HTMLInputElement> | undefined;
        onPointerOver?: import("react").PointerEventHandler<HTMLInputElement> | undefined;
        onPointerOverCapture?: import("react").PointerEventHandler<HTMLInputElement> | undefined;
        onPointerOut?: import("react").PointerEventHandler<HTMLInputElement> | undefined;
        onPointerOutCapture?: import("react").PointerEventHandler<HTMLInputElement> | undefined;
        onGotPointerCapture?: import("react").PointerEventHandler<HTMLInputElement> | undefined;
        onGotPointerCaptureCapture?: import("react").PointerEventHandler<HTMLInputElement> | undefined;
        onLostPointerCapture?: import("react").PointerEventHandler<HTMLInputElement> | undefined;
        onLostPointerCaptureCapture?: import("react").PointerEventHandler<HTMLInputElement> | undefined;
        onScroll?: import("react").UIEventHandler<HTMLInputElement> | undefined;
        onScrollCapture?: import("react").UIEventHandler<HTMLInputElement> | undefined;
        onWheel?: import("react").WheelEventHandler<HTMLInputElement> | undefined;
        onWheelCapture?: import("react").WheelEventHandler<HTMLInputElement> | undefined;
        onAnimationStart?: import("react").AnimationEventHandler<HTMLInputElement> | undefined;
        onAnimationStartCapture?: import("react").AnimationEventHandler<HTMLInputElement> | undefined;
        onAnimationEnd?: import("react").AnimationEventHandler<HTMLInputElement> | undefined;
        onAnimationEndCapture?: import("react").AnimationEventHandler<HTMLInputElement> | undefined;
        onAnimationIteration?: import("react").AnimationEventHandler<HTMLInputElement> | undefined;
        onAnimationIterationCapture?: import("react").AnimationEventHandler<HTMLInputElement> | undefined;
        onTransitionEnd?: import("react").TransitionEventHandler<HTMLInputElement> | undefined;
        onTransitionEndCapture?: import("react").TransitionEventHandler<HTMLInputElement> | undefined;
        hidden?: boolean | undefined;
        defaultChecked?: boolean | undefined;
        defaultValue?: string | number | readonly string[] | undefined;
        suppressContentEditableWarning?: boolean | undefined;
        accessKey?: string | undefined;
        autoFocus?: boolean | undefined;
        contentEditable?: "inherit" | (boolean | "true" | "false") | undefined;
        contextMenu?: string | undefined;
        dir?: string | undefined;
        draggable?: (boolean | "true" | "false") | undefined;
        nonce?: string | undefined;
        spellCheck?: (boolean | "true" | "false") | undefined;
        translate?: "no" | "yes" | undefined;
        radioGroup?: string | undefined;
        about?: string | undefined;
        content?: string | undefined;
        datatype?: string | undefined;
        inlist?: any;
        prefix?: string | undefined;
        property?: string | undefined;
        rel?: string | undefined;
        resource?: string | undefined;
        rev?: string | undefined;
        vocab?: string | undefined;
        autoCapitalize?: string | undefined;
        autoCorrect?: string | undefined;
        autoSave?: string | undefined;
        itemProp?: string | undefined;
        itemScope?: boolean | undefined;
        itemType?: string | undefined;
        itemID?: string | undefined;
        itemRef?: string | undefined;
        results?: number | undefined;
        security?: string | undefined;
        unselectable?: "on" | "off" | undefined;
        inputMode?: "search" | "none" | "text" | "email" | "tel" | "url" | "numeric" | "decimal" | undefined;
        is?: string | undefined;
        size?: number | undefined;
    };
    containerRef: import("react").MutableRefObject<HTMLInputElement | null>;
    handleContainerClick: MouseEventHandler;
    handleOnChange: ChangeEventHandler<HTMLInputElement>;
    handleOnClear: MouseEventHandler<HTMLButtonElement>;
};
