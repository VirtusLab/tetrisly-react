/// <reference types="react" />
import { StoryObj } from '@storybook/react';
declare const meta: {
    title: string;
    component: import("react").FC<import("./Status.props").StatusProps>;
    tags: string[];
    argTypes: {
        emphasis: {
            control: {
                type: string;
                options: ("medium" | "high" | "low")[];
            };
        };
    };
    args: {
        appearance: "grey";
        emphasis: "high";
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
