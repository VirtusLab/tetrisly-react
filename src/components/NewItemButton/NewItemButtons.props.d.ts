import { ButtonHTMLAttributes } from 'react';
import { NewItemButtonConfig } from './NewItemButton.styles';
import { NewItemButtonState } from './NewItemButtonState.type';
export type NewItemButtonProps = {
    state?: NewItemButtonState | undefined;
    text?: string;
    custom?: NewItemButtonConfig;
} & Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'disabled' | 'color'>;
