import { InputHTMLAttributes } from 'react';
import { CheckboxConfig } from './Checkbox.styles';
export type CheckboxProps = {
    isChecked?: boolean;
    isIndeterminate?: boolean;
    state?: 'alert' | 'disabled';
    custom?: CheckboxConfig;
} & Omit<InputHTMLAttributes<HTMLInputElement>, 'checked' | 'disabled' | 'color' | 'type'> & ({
    label?: string;
    helperText?: undefined;
} | {
    label: string;
    helperText?: string;
});
