/// <reference types="react" />
import type { StoryObj } from '@storybook/react';
declare const meta: {
    title: string;
    component: import("react").FC<import("./FileItem.props").FileItemProps>;
    tags: string[];
    argTypes: {};
    args: {
        file: File;
        state: "uploaded";
        isInverted: false;
        isExtended: false;
        thumbnail: "none";
        uploadedPercentage: number;
        timeLeftText: string;
        alertText: string;
        onReplaceClick: import("@storybook/addon-actions").HandlerFunction;
        onRetryClick: import("@storybook/addon-actions").HandlerFunction;
        onCloseClick: import("@storybook/addon-actions").HandlerFunction;
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
export declare const Uploading: Story;
export declare const Uploaded: Story;
export declare const Replaceable: Story;
export declare const Alert: Story;
export declare const ExtendedUploading: Story;
export declare const ExtendedUploaded: Story;
export declare const ExtendedReplaceable: Story;
export declare const ExtendedAlert: Story;
export declare const ExtendedUploadingFile: Story;
export declare const ExtendedAlertImage: Story;
export declare const ExtendedInvertedAlertImage: Story;
