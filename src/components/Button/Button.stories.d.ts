/// <reference types="react" />
import type { StoryObj } from '@storybook/react';
declare const meta: {
    title: string;
    component: import("react").FC<import("./Button.props").ButtonProps & import("@xstyled/system").MarginProps<import("@xstyled/system").Theme> & import("@xstyled/system").MarginLeftProps<import("@xstyled/system").Theme> & import("@xstyled/system").MarginBottomProps<import("@xstyled/system").Theme> & import("@xstyled/system").MarginTopProps<import("@xstyled/system").Theme> & import("@xstyled/system").MarginRightProps<import("@xstyled/system").Theme> & import("@xstyled/system").MarginXProps<import("@xstyled/system").Theme> & import("@xstyled/system").MarginYProps<import("@xstyled/system").Theme>>;
    tags: string[];
    args: {
        label: string;
    };
    argTypes: {
        state: {
            options: (string | undefined)[];
            defaultValue: undefined;
            control: {
                type: string;
            };
        };
        size: {
            options: string[];
            defaultValue: string;
            control: {
                type: string;
            };
        };
        variant: {
            options: string[];
            defaultValue: string;
            control: {
                type: string;
            };
        };
        intent: {
            options: string[];
            defaultValue: string;
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
export declare const DefaultLoading: Story;
export declare const DefaultDisabled: Story;
export declare const DefaultBeforeIcon: Story;
export declare const DefaultAfterIcon: Story;
export declare const DefaultDropdown: Story;
export declare const Ghost: Story;
export declare const GhostLoading: Story;
export declare const GhostDisabled: Story;
export declare const Bare: Story;
export declare const BareLoading: Story;
export declare const BareDisabled: Story;
export declare const WithFlexContainer: Story;
