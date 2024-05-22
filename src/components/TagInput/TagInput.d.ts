/// <reference types="react" />
export declare const TagInput: import("react").ForwardRefExoticComponent<{
    custom?: import("./TagInput.styles").TagInputConfig | undefined;
    state?: import("../../types").BasicInputState | undefined;
    isValidationError?: boolean | undefined;
    label?: Pick<import("../Label").LabelProps, "label" | "action" | "optional"> | undefined;
    helperText?: Pick<import("../HelperText").HelperTextProps, "text" | "intent" | "hasBeforeIcon"> | undefined;
} & Omit<import("react").InputHTMLAttributes<HTMLInputElement>, "type" | "color" | "checked" | "disabled"> & import("@xstyled/system").MarginProps<import("@xstyled/system").Theme> & import("@xstyled/system").MarginLeftProps<import("@xstyled/system").Theme> & import("@xstyled/system").MarginBottomProps<import("@xstyled/system").Theme> & import("@xstyled/system").MarginTopProps<import("@xstyled/system").Theme> & import("@xstyled/system").MarginRightProps<import("@xstyled/system").Theme> & import("@xstyled/system").MarginXProps<import("@xstyled/system").Theme> & import("@xstyled/system").MarginYProps<import("@xstyled/system").Theme> & {
    children?: import("react").ReactNode;
} & import("react").RefAttributes<HTMLInputElement>>;
