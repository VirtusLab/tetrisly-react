/// <reference types="react" />
import type { StoryObj } from '@storybook/react';
declare const meta: {
    title: string;
    component: import("react").FC<Omit<import("../TextInput").TextInputProps, "type" | "beforeComponent" | "afterComponent"> & {
        beforeComponent?: import("../TextInput").TextInputProps.InnerComponents.Icon | import("../TextInput").TextInputProps.InnerComponents.Avatar | undefined;
    } & import("@xstyled/system").MarginProps<import("@xstyled/system").Theme> & import("@xstyled/system").MarginLeftProps<import("@xstyled/system").Theme> & import("@xstyled/system").MarginBottomProps<import("@xstyled/system").Theme> & import("@xstyled/system").MarginTopProps<import("@xstyled/system").Theme> & import("@xstyled/system").MarginRightProps<import("@xstyled/system").Theme> & import("@xstyled/system").MarginXProps<import("@xstyled/system").Theme> & import("@xstyled/system").MarginYProps<import("@xstyled/system").Theme>>;
    tags: string[];
    args: {
        placeholder: string;
    };
    argTypes: {};
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
export declare const BeforeIconComponent: Story;
export declare const BeforeAvatarComponent: Story;
