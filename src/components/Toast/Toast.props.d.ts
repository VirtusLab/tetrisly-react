import type { MouseEvent } from 'react';
import type { ToastConfig } from './Toast.styles';
import type { ToastEmphasis, ToastIntent } from './types';
import type { ActionProp } from '../../types';
export type ToastProps = {
    text: string;
    emphasis?: ToastEmphasis;
    intent?: ToastIntent;
    action?: ActionProp;
    onCloseClick?: (e: MouseEvent<HTMLButtonElement>) => void;
    custom?: ToastConfig;
};
