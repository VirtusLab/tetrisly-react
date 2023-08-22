/// <reference types="react" />
import { StoryObj } from '@storybook/react';
import { Avatar } from './Avatar';
declare const meta: {
    component: import("react").FC<import("./Avatar.props").AvatarProps>;
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
