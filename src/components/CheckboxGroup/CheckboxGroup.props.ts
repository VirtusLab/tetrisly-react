import { CheckboxGroupConfig } from './CheckboxGroup.style';
import { CheckboxProps } from '../Checkbox/Checkbox.props';

import { DeepPartial } from '@/utility-types/DeepPartial';

export type CheckboxItemProps = Omit<CheckboxProps, 'label' | 'helperText'> & {
  label: string;
};

export type CheckboxGroupProps = {
  column?: number;
  label?: string;
  helperText?: string;
  custom?: DeepPartial<CheckboxGroupConfig>;
};
