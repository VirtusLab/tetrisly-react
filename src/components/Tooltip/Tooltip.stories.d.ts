/// <reference types="react" />
import type { StoryObj } from '@storybook/react';
declare const meta: {
    title: string;
    component: import("react").ForwardRefExoticComponent<import("./Tooltip.props").TooltipProps & {
        position?: {
            left: number;
            top: number;
        } | undefined;
    } & import("react").RefAttributes<HTMLDivElement>>;
    tags: string[];
    args: {
        text: string;
        arrowheadPosition: "start";
        tooltipPosition: "top";
    };
    argTypes: {
        arrowheadPosition: {
            options: string[];
            defaultValue: string;
            control: {
                type: string;
            };
        };
        tooltipPosition: {
            options: string[];
            defaultValue: string;
            control: {
                type: string;
            };
        };
    };
    parameters: {
        docs: {
            Description: {
                component: string;
            };
            page: () => import("react/jsx-runtime").JSX.Element;
        };
    };
};
export default meta;
type Story = StoryObj<typeof meta>;
export declare const Default: Story;
export declare const WithButtonTootlip: Story;
