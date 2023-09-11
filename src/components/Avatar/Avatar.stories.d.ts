/// <reference types="react" />
import { StoryObj } from '@storybook/react';
import { Avatar } from './Avatar';
declare const meta: {
    component: import("react").FC<import("./Avatar.props").AvatarProps & import("@xstyled/system").MarginProps<import("@xstyled/system").Theme> & import("@xstyled/system").MarginLeftProps<import("@xstyled/system").Theme> & import("@xstyled/system").MarginBottomProps<import("@xstyled/system").Theme> & import("@xstyled/system").MarginTopProps<import("@xstyled/system").Theme> & import("@xstyled/system").MarginRightProps<import("@xstyled/system").Theme> & import("@xstyled/system").MarginXProps<import("@xstyled/system").Theme> & import("@xstyled/system").MarginYProps<import("@xstyled/system").Theme>>;
    tags: string[];
    args: {
        img: {
            src: string;
        };
    };
    argTypes: {
        img: {
            if: {
                arg: string;
                eq: string;
            };
        };
        initials: {
            if: {
                arg: string;
                neq: string;
            };
        };
        emphasis: {
            if: {
                arg: string;
                neq: string;
            };
        };
    };
    parameters: {
        controls: {
            sort: string;
        };
        docs: {
            description: {
                component: string;
            };
            page: () => import("react/jsx-runtime").JSX.Element;
        };
    };
};
export default meta;
type Story = StoryObj<typeof Avatar>;
export declare const Initials: Story;
export declare const Image: Story;
