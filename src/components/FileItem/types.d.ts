import { MouseEvent } from 'react';
export type FileItemState = 'uploading' | 'uploaded' | 'replaceable' | 'alert';
export type FileItemThumbnail = 'none' | 'file' | 'photo';
export type FileItemCommonProps = {
    file: File;
    state?: FileItemState;
    isInverted?: boolean;
    uploadedPercentage?: number;
    alertText?: string;
    onReplaceClick?: (e?: MouseEvent<HTMLButtonElement>) => void;
    onRetryClick?: (e?: MouseEvent<HTMLButtonElement>) => void;
    onCloseClick?: (e?: MouseEvent<HTMLButtonElement>) => void;
};
