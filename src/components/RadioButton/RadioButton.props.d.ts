import { InputHTMLAttributes } from 'react';
import { config } from './RadioButton.styles';
import { WithCustom } from '../../utility-types/WithCustom';
export type RadioButtonProps = WithCustom<{
    isChecked?: boolean;
    state?: 'alert' | 'disabled';
} & Omit<InputHTMLAttributes<HTMLInputElement>, 'checked' | 'disabled' | 'color' | 'type'> & ({
    label?: string;
    helperText?: undefined;
} | {
    label: string;
    helperText?: string;
}), typeof config>;
