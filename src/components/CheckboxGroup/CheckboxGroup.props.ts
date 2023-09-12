import type { CheckboxGroupConfig } from './CheckboxGroup.style';
import type { CheckboxProps } from '../Checkbox';

import type { HelperTextProp, LabelProp } from '@/types';

export type CheckboxGroupItemProps = Omit<
  CheckboxProps,
  'label' | 'helperText'
> & {
  label: string;
};

export type CheckboxGroupProps = {
  column?: number;
  label?: LabelProp;
  helperText?: HelperTextProp;
  custom?: CheckboxGroupConfig;
};
