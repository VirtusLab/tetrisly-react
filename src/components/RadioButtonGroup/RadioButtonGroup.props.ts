import type { RadioButtonGroupConfig } from './RadioButtonGroup.styles';
import type { RadioButtonProps } from '../RadioButton';

import type { HelperTextProp, LabelProp } from '@/types';

export type RadioButtonGroupItemProps = Omit<
  RadioButtonProps,
  'label' | 'helperText'
> & {
  label: string;
};

export type RadioButtonGroupProps = {
  name: string;
  column?: number;
  label?: LabelProp;
  helperText?: HelperTextProp;
  custom?: RadioButtonGroupConfig;
};
