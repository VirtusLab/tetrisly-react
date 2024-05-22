/// <reference types="react" />
import type { StoryObj } from '@storybook/react';
declare const meta: {
    title: string;
    component: import("react").ForwardRefExoticComponent<{
        custom?: import("./TagInput.styles").TagInputConfig | undefined;
        state?: import("../../types").BasicInputState | undefined;
        isValidationError?: boolean | undefined;
        label?: Pick<import("../Label").LabelProps, "label" | "action" | "optional"> | undefined;
        helperText?: Pick<import("../HelperText").HelperTextProps, "text" | "intent" | "hasBeforeIcon"> | undefined;
    } & Omit<import("react").InputHTMLAttributes<HTMLInputElement>, "type" | "color" | "checked" | "disabled"> & import("@xstyled/system").MarginProps<import("@xstyled/system").Theme> & import("@xstyled/system").MarginLeftProps<import("@xstyled/system").Theme> & import("@xstyled/system").MarginBottomProps<import("@xstyled/system").Theme> & import("@xstyled/system").MarginTopProps<import("@xstyled/system").Theme> & import("@xstyled/system").MarginRightProps<import("@xstyled/system").Theme> & import("@xstyled/system").MarginXProps<import("@xstyled/system").Theme> & import("@xstyled/system").MarginYProps<import("@xstyled/system").Theme> & {
        children?: import("react").ReactNode;
    } & import("react").RefAttributes<HTMLInputElement>>;
    tags: string[];
    args: {
        helperText: {
            text: string;
        };
        label: {
            label: string;
        };
        isValidationError: false;
        children: import("react/jsx-runtime").JSX.Element[];
    };
    argTypes: {
        isValidationError: {
            options: boolean[];
            defaultValue: boolean;
            control: {
                type: string;
            };
        };
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
export declare const ValidationErrorNo: Story;
export declare const ValidationErrorYes: Story;
