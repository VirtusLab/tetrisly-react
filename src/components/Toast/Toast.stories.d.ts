/// <reference types="react" />
import type { StoryObj } from '@storybook/react';
declare const meta: {
    title: string;
    component: import("react").FC<import("./Toast.props").ToastProps & import("@xstyled/system").MarginProps<import("@xstyled/system").Theme> & import("@xstyled/system").MarginLeftProps<import("@xstyled/system").Theme> & import("@xstyled/system").MarginBottomProps<import("@xstyled/system").Theme> & import("@xstyled/system").MarginTopProps<import("@xstyled/system").Theme> & import("@xstyled/system").MarginRightProps<import("@xstyled/system").Theme> & import("@xstyled/system").MarginXProps<import("@xstyled/system").Theme> & import("@xstyled/system").MarginYProps<import("@xstyled/system").Theme>>;
    tags: string[];
    args: {
        text: string;
        action: [{
            label: string;
            onClick: import("@storybook/addon-actions").HandlerFunction;
        }, {
            label: string;
            onClick: import("@storybook/addon-actions").HandlerFunction;
        }];
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
export declare const Informative: Story;
export declare const Success: Story;
export declare const Warning: Story;
export declare const Negative: Story;
export declare const NeutralHigh: Story;
export declare const InformativeHigh: Story;
export declare const SuccessHigh: Story;
export declare const WarningHigh: Story;
export declare const NegativeHigh: Story;
