/// <reference types="react" />
import { TextInputProps } from './TextInput.props';
export declare const TextInput: import("react").ForwardRefExoticComponent<{
    type?: import("react").HTMLInputTypeAttribute | undefined;
    beforeComponent?: TextInputProps.InnerComponents.Icon | TextInputProps.InnerComponents.Dropdown | TextInputProps.InnerComponents.Prefix | TextInputProps.InnerComponents.Avatar | undefined;
    afterComponent?: TextInputProps.InnerComponents.Icon | TextInputProps.InnerComponents.IconButton | TextInputProps.InnerComponents.Dropdown | TextInputProps.InnerComponents.Suffix | TextInputProps.InnerComponents.Button | undefined;
    state?: import("../../types").BasicInputState | undefined;
    hasClearButton?: boolean | undefined;
    custom?: import("./TextInput.styles").TextInputConfig | undefined;
} & Omit<import("react").InputHTMLAttributes<HTMLInputElement>, "type" | "color" | "checked" | "disabled"> & import("@xstyled/system").MarginProps<import("@xstyled/system").Theme> & import("@xstyled/system").MarginLeftProps<import("@xstyled/system").Theme> & import("@xstyled/system").MarginBottomProps<import("@xstyled/system").Theme> & import("@xstyled/system").MarginTopProps<import("@xstyled/system").Theme> & import("@xstyled/system").MarginRightProps<import("@xstyled/system").Theme> & import("@xstyled/system").MarginXProps<import("@xstyled/system").Theme> & import("@xstyled/system").MarginYProps<import("@xstyled/system").Theme> & import("react").RefAttributes<HTMLInputElement>>;
