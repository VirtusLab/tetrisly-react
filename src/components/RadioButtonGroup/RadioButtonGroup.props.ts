import { RadioButtonGroupConfig } from './RadioButtonGroup.styles';
import { RadioButtonProps } from '../RadioButton/RadioButton.props';

import { DeepPartial } from '@/utility-types/DeepPartial';

export type RadioButtonItemProps = Omit<
  RadioButtonProps,
  'label' | 'helperText'
> & {
  label: string;
};

export type RadioButtonGroupProps = {
  name: string;
  column?: number;
  label?: string;
  helperText?: string;
  custom?: DeepPartial<RadioButtonGroupConfig>;
};
