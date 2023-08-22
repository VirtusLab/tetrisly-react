import { SystemProps } from '@xstyled/styled-components';
import { InputHTMLAttributes } from 'react';
import { config } from './Checkbox.styles';
import { Theme } from '../../theme';
import { DeepPartial } from '../../utility-types/DeepPartial';
export type CheckboxProps = {
    isChecked?: boolean;
    isIndeterminate?: boolean;
    state?: 'alert' | 'disabled';
    custom?: DeepPartial<SystemProps<Theme> & typeof config>;
} & Omit<InputHTMLAttributes<HTMLInputElement>, 'checked' | 'disabled' | 'color' | 'type'> & ({
    label?: string;
    helperText?: undefined;
} | {
    label: string;
    helperText?: string;
});
