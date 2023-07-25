import type { StoryObj } from '@storybook/react';
declare const meta: {
    title: string;
    component: ({ appearance, stroked, custom, ...rest }: import("./StatusDot.props").StatusDotProps & import("@xstyled/system").MarginProps<import("@xstyled/system").Theme>) => import("react/jsx-runtime").JSX.Element;
    tags: string[];
};
export default meta;
type Story = StoryObj<typeof meta>;
export declare const Default: Story;
export declare const Stroked: Story;
