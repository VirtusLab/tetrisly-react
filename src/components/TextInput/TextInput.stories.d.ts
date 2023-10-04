/// <reference types="react" />
import type { StoryObj } from '@storybook/react';
declare const meta: {
    title: string;
    component: import("react").ForwardRefExoticComponent<{
        type?: import("./TextInputType.type").TextInputType | undefined;
        beforeComponent?: import("./TextInput.props").TextInputProps.InnerComponents.Icon | import("./TextInput.props").TextInputProps.InnerComponents.Dropdown | import("./TextInput.props").TextInputProps.InnerComponents.Prefix | import("./TextInput.props").TextInputProps.InnerComponents.Avatar | undefined;
        afterComponent?: import("./TextInput.props").TextInputProps.InnerComponents.Icon | import("./TextInput.props").TextInputProps.InnerComponents.IconButton | import("./TextInput.props").TextInputProps.InnerComponents.Dropdown | import("./TextInput.props").TextInputProps.InnerComponents.Sufix | import("./TextInput.props").TextInputProps.InnerComponents.Button | undefined;
        state?: import("../../types").BasicInputState | undefined;
        hasClearButton?: boolean | undefined;
        custom?: import("./TextInput.style").TextInputConfig | undefined;
    } & Omit<import("react").InputHTMLAttributes<HTMLInputElement>, "type" | "color" | "checked" | "disabled"> & import("@xstyled/system").MarginProps<import("@xstyled/system").Theme> & import("@xstyled/system").MarginLeftProps<import("@xstyled/system").Theme> & import("@xstyled/system").MarginBottomProps<import("@xstyled/system").Theme> & import("@xstyled/system").MarginTopProps<import("@xstyled/system").Theme> & import("@xstyled/system").MarginRightProps<import("@xstyled/system").Theme> & import("@xstyled/system").MarginXProps<import("@xstyled/system").Theme> & import("@xstyled/system").MarginYProps<import("@xstyled/system").Theme> & import("react").RefAttributes<HTMLInputElement>>;
    tags: string[];
    args: {
        placeholder: string;
    };
    parameters: {
        docs: {
            description: {
                component: string;
            };
            page: () => import("react/jsx-runtime").JSX.Element;
        };
    };
};
export default meta;
type Story = StoryObj<typeof meta>;
export declare const Default: Story;
export declare const Disabled: Story;
export declare const Alert: Story;
export declare const WithClearButton: Story;
export declare const BeforeIconComponent: Story;
export declare const BeforeAvatarComponent: Story;
export declare const BeforePrefixComponent: Story;
export declare const BeforeDropdownComponent: Story;
export declare const AfterDropdownComponent: Story;
export declare const AfterIconComponent: Story;
export declare const AfterIconButtonComponent: Story;
export declare const AfterSufixComponent: Story;
export declare const AfterButtonComponent: Story;
