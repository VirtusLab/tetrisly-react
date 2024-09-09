import { InputHTMLAttributes } from 'react';
import type { ToggleConfig } from './Toggle.styles';
import { HelperTextProps } from '../HelperText';
export type ToggleProps = {
    isIndeterminate?: boolean;
    isChecked?: boolean;
    size?: 'small' | 'large';
    state?: 'disabled';
    custom?: ToggleConfig;
} & Omit<InputHTMLAttributes<HTMLInputElement>, 'checked' | 'disabled' | 'color' | 'type' | 'size'> & ({
    label?: string;
    helperText?: never;
} | {
    label: string;
    helperText?: Pick<HelperTextProps, 'text'>;
});
