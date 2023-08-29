import { RadioButtonGroupConfig } from './RadioButtonGroup.styles';
import { HelperTextProps } from '../HelperText/HelperText.props';
import { LabelProps } from '../Label/Label.props';
import { RadioButtonProps } from '../RadioButton/RadioButton.props';

import { DeepPartial } from '@/utility-types/DeepPartial';

export type RadioButtonGroupItemProps = Omit<
  RadioButtonProps,
  'label' | 'helperText'
> & {
  label: string;
};

export type RadioButtonGroupProps = {
  name: string;
  column?: number;
  label?: string | Pick<LabelProps, 'label' | 'tooltip' | 'optional'>;
  helperText?:
    | string
    | Pick<HelperTextProps, 'intent' | 'text' | 'beforeIcon' | 'counter'>;
  custom?: DeepPartial<RadioButtonGroupConfig>;
};
