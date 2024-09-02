/// <reference types="react" />
import type { StoryObj } from '@storybook/react';
declare const meta: {
    title: string;
    component: import("react").FC<import("react").PropsWithChildren<{
        size?: import("./ButtonGroup.props").ButtonGroupSize | undefined;
        custom?: import("./ButtonGroup.styles").ButtonGroupConfig | undefined;
    } & Omit<import("react").HTMLAttributes<HTMLSpanElement>, "color"> & import("@xstyled/system").MarginProps<import("@xstyled/system").Theme>>> & {
        Item: import("react").FC<import("../Button").ButtonProps & import("@xstyled/system").MarginProps<import("@xstyled/system").Theme>>;
    };
    tags: string[];
    argTypes: {
        size: {
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
