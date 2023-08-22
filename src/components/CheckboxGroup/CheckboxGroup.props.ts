import { SystemProps } from '@xstyled/styled-components';

import { config } from './CheckboxGroup.style';
import { CheckboxProps } from '../Checkbox/Checkbox.props';

import { Theme } from '@/theme';
import { DeepPartial } from '@/utility-types/DeepPartial';

export type CheckboxItemProps = Omit<CheckboxProps, 'label' | 'helperText'> & {
  label: string;
};

export type CheckboxGroupProps = {
  name: string;
  column?: number;
  label?: string;
  helperText?: string;
  custom?: DeepPartial<SystemProps<Theme> & typeof config>;
  children?:
    | React.ReactElement<CheckboxItemProps>
    | React.ReactElement<CheckboxItemProps>[];
};
