/// <reference types="react" />
import type { StoryObj } from '@storybook/react';
declare const meta: {
    title: string;
    component: import("react").FC<import("react").PropsWithChildren<import("./CheckboxGroup.props").CheckboxGroupProps & import("@xstyled/system").MarginProps<import("@xstyled/system").Theme> & import("@xstyled/system").MarginLeftProps<import("@xstyled/system").Theme> & import("@xstyled/system").MarginBottomProps<import("@xstyled/system").Theme> & import("@xstyled/system").MarginTopProps<import("@xstyled/system").Theme> & import("@xstyled/system").MarginRightProps<import("@xstyled/system").Theme> & import("@xstyled/system").MarginXProps<import("@xstyled/system").Theme> & import("@xstyled/system").MarginYProps<import("@xstyled/system").Theme>>> & {
        Item: import("react").FC<import("./CheckboxGroup.props").CheckboxGroupItemProps>;
    };
    tags: string[];
    args: {
        label: string;
        helperText: string;
        children: import("react/jsx-runtime").JSX.Element[];
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
export declare const Horizontal: Story;
export declare const Vertical: Story;
