import type { RadioButtonGroupConfig } from './RadioButtonGroup.styles';
import type { HelperTextProps } from '../HelperText/HelperText.props';
import type { LabelProps } from '../Label/Label.props';
import type { RadioButtonProps } from '../RadioButton';

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
  custom?: RadioButtonGroupConfig;
};
