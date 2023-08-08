import { StoryObj } from '@storybook/react';
declare const meta: {
    title: string;
    component: ({ label, tooltip, optional, custom, ...rest }: import("./Label.props").LabelProps & import("@xstyled/system").MarginProps<import("@xstyled/system").Theme> & import("@xstyled/system").MarginLeftProps<import("@xstyled/system").Theme> & import("@xstyled/system").MarginBottomProps<import("@xstyled/system").Theme> & import("@xstyled/system").MarginTopProps<import("@xstyled/system").Theme> & import("@xstyled/system").MarginRightProps<import("@xstyled/system").Theme> & import("@xstyled/system").MarginXProps<import("@xstyled/system").Theme> & import("@xstyled/system").MarginYProps<import("@xstyled/system").Theme>) => import("react/jsx-runtime").JSX.Element;
    tags: string[];
    args: {
        label: string;
    };
};
export default meta;
type Story = StoryObj<typeof meta>;
export declare const Default: Story;
export declare const Optional: Story;
export declare const Tooltip: Story;
export declare const All: Story;
