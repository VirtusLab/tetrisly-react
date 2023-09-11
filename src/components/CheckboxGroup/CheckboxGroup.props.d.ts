import { CheckboxGroupConfig } from './CheckboxGroup.style';
import { CheckboxProps } from '../Checkbox/Checkbox.props';
import { HelperTextProps } from '../HelperText/HelperText.props';
import type { LabelProps } from '../Label';
import { DeepPartial } from '../../utility-types/DeepPartial';
export type CheckboxGroupItemProps = Omit<CheckboxProps, 'label' | 'helperText'> & {
    label: string;
};
export type CheckboxGroupProps = {
    column?: number;
    label?: string | Omit<LabelProps, 'custom'>;
    helperText?: string | Omit<HelperTextProps, 'custom'>;
    custom?: DeepPartial<CheckboxGroupConfig>;
};
