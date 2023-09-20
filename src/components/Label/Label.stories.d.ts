/// <reference types="react" />
import { StoryObj } from '@storybook/react';
declare const meta: {
    title: string;
    component: import("react").FC<{
        label: string;
        action?: import("../../types").Action | undefined;
        tooltip?: boolean | undefined;
        optional?: string | undefined;
        custom?: import("./Label.styles").LabelConfig | undefined;
    } & Omit<import("react").LabelHTMLAttributes<HTMLLabelElement>, "color"> & import("@xstyled/system").MarginProps<import("@xstyled/system").Theme> & import("@xstyled/system").MarginLeftProps<import("@xstyled/system").Theme> & import("@xstyled/system").MarginBottomProps<import("@xstyled/system").Theme> & import("@xstyled/system").MarginTopProps<import("@xstyled/system").Theme> & import("@xstyled/system").MarginRightProps<import("@xstyled/system").Theme> & import("@xstyled/system").MarginXProps<import("@xstyled/system").Theme> & import("@xstyled/system").MarginYProps<import("@xstyled/system").Theme>>;
    tags: string[];
    args: {
        label: string;
    };
    parameters: {
        docs: {
            page: () => import("react/jsx-runtime").JSX.Element;
        };
    };
};
export default meta;
type Story = StoryObj<typeof meta>;
export declare const Default: Story;
export declare const Optional: Story;
export declare const Tooltip: Story;
export declare const Action: Story;
export declare const All: Story;
