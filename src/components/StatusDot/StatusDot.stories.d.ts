/// <reference types="react" />
import type { StoryObj } from '@storybook/react';
declare const meta: {
    title: string;
    component: import("react").FC<import("./StatusDot.props").StatusDotProps & import("@xstyled/system").MarginProps<import("@xstyled/system").Theme> & import("@xstyled/system").MarginLeftProps<import("@xstyled/system").Theme> & import("@xstyled/system").MarginBottomProps<import("@xstyled/system").Theme> & import("@xstyled/system").MarginTopProps<import("@xstyled/system").Theme> & import("@xstyled/system").MarginRightProps<import("@xstyled/system").Theme> & import("@xstyled/system").MarginXProps<import("@xstyled/system").Theme> & import("@xstyled/system").MarginYProps<import("@xstyled/system").Theme>>;
    tags: string[];
    args: {
        stroked: false;
    };
    parameters: {
        backgrounds: {
            default: string;
        };
        docs: {
            page: () => import("react/jsx-runtime").JSX.Element;
        };
    };
};
export default meta;
type Story = StoryObj<typeof meta>;
export declare const Default: Story;
export declare const Stroked: Story;
