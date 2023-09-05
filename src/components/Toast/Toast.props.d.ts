import { MouseEvent } from 'react';
import { ToastConfig } from './Toast.styles';
import { ToastIntent } from './types';
import { ActionProp } from '../../types';
import { Emphasis } from '../../types/Emphasis';
import { DeepPartial } from '../../utility-types/DeepPartial';
export type ToastProps = {
    text: string;
    emphasis?: Emphasis;
    intent?: ToastIntent;
    action?: ActionProp;
    onCloseClick?: (e: MouseEvent<HTMLButtonElement>) => void;
    custom?: DeepPartial<ToastConfig>;
};
