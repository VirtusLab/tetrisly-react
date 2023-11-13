/// <reference types="react" />
import { StoryObj } from '@storybook/react';
import { IconButton } from './IconButton';
import { IconButtonProps } from './IconButton.props';
declare const meta: {
    title: string;
    component: import("react").FC<IconButtonProps & import("@xstyled/system").MarginProps<import("@xstyled/system").Theme> & import("@xstyled/system").MarginLeftProps<import("@xstyled/system").Theme> & import("@xstyled/system").MarginBottomProps<import("@xstyled/system").Theme> & import("@xstyled/system").MarginTopProps<import("@xstyled/system").Theme> & import("@xstyled/system").MarginRightProps<import("@xstyled/system").Theme> & import("@xstyled/system").MarginXProps<import("@xstyled/system").Theme> & import("@xstyled/system").MarginYProps<import("@xstyled/system").Theme>>;
    tags: string[];
    argTypes: {
        variant: {
            description: string;
            table: {
                defaultValue: {
                    summary: string;
                };
            };
        };
        appearance: {
            table: {
                defaultValue: {
                    summary: string;
                };
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
type Story = StoryObj<typeof IconButton>;
export declare const Default: Story;
export declare const Clickable: Story;