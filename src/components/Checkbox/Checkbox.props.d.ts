import { InputHTMLAttributes } from 'react';
import { CheckboxConfig } from './Checkbox.styles';
import { DeepPartial } from '../../utility-types/DeepPartial';
export type CheckboxProps = {
    isChecked?: boolean;
    isIndeterminate?: boolean;
    state?: 'alert' | 'disabled';
    custom?: DeepPartial<CheckboxConfig>;
} & Omit<InputHTMLAttributes<HTMLInputElement>, 'checked' | 'disabled' | 'color' | 'type'> & ({
    label?: string;
    helperText?: undefined;
} | {
    label: string;
    helperText?: string;
});
