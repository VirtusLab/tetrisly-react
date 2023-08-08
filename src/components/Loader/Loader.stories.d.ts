import { StoryObj } from '@storybook/react';
declare const meta: {
    title: string;
    component: ({ appearance, progress, shape, size, custom, }: import("./Loader.props").LoaderProps & import("@xstyled/system").MarginProps<import("@xstyled/system").Theme>) => import("react/jsx-runtime").JSX.Element;
    tags: string[];
};
export default meta;
type Story = StoryObj<typeof meta>;
export declare const DefaultCircle: Story;
export declare const DefaultBar: Story;
export declare const ProgressCircle: () => import("react/jsx-runtime").JSX.Element;
export declare const ProgressBar: () => import("react/jsx-runtime").JSX.Element;
export declare const White: Story;
export declare const Inverted: Story;
export declare const Greyscale: Story;
