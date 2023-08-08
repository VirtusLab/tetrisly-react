import type { StoryObj } from '@storybook/react';
declare const meta: {
    title: string;
    component: ({ intent, beforeIcon, counter, text, custom, ...rest }: import("./HelperText.props").HelperTextProps & import("@xstyled/system").MarginProps<import("@xstyled/system").Theme> & import("@xstyled/system").MarginLeftProps<import("@xstyled/system").Theme> & import("@xstyled/system").MarginBottomProps<import("@xstyled/system").Theme> & import("@xstyled/system").MarginTopProps<import("@xstyled/system").Theme> & import("@xstyled/system").MarginRightProps<import("@xstyled/system").Theme> & import("@xstyled/system").MarginXProps<import("@xstyled/system").Theme> & import("@xstyled/system").MarginYProps<import("@xstyled/system").Theme>) => import("react/jsx-runtime").JSX.Element;
    tags: string[];
    args: {
        text: string;
        intent: "none";
    };
    argTypes: {
        intent: {
            options: string[];
            defaultValue: string;
            control: {
                type: string;
            };
        };
    };
};
export default meta;
type Story = StoryObj<typeof meta>;
export declare const Default: Story;
export declare const DefaultWithIcon: Story;
export declare const DefaultWithCounter: Story;
