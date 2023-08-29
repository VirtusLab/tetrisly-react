import { InputHTMLAttributes } from 'react';
import { RadioButtonConfig } from './RadioButton.styles';
import { DeepPartial } from '../../utility-types/DeepPartial';
export type RadioButtonProps = {
    isChecked?: boolean;
    state?: 'alert' | 'disabled';
    custom?: DeepPartial<RadioButtonConfig>;
} & Omit<InputHTMLAttributes<HTMLInputElement>, 'checked' | 'disabled' | 'color' | 'type'> & ({
    label?: string;
    helperText?: undefined;
} | {
    label: string;
    helperText?: string;
});
