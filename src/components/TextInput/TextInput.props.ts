import { IconProps } from '@virtuslab/tetrisly-icons';
import { SystemProps } from '@xstyled/styled-components';
import { InputHTMLAttributes } from 'react';

import { config } from './TextInput.style';
import { TextInputType } from './TextInputType.type';
import { ButtonProps } from '../Button';

import { Theme } from '@/theme';
import { DeepPartial } from '@/utility-types/DeepPartial';

type Component<N, P = object> = {
  type: N;
  props: P;
};

export interface TextInputProps
  extends Omit<
    InputHTMLAttributes<HTMLInputElement>,
    'disabled' | 'color' | 'type'
  > {
  type?: TextInputType;
  beforeComponent?:
  | Component<'Icon', IconProps>
  | Component<'Prefix', { text: string }>
  | Component<'Dropdown', Pick<ButtonProps<'ghost'>, 'label' | 'onClick'>>;
  afterComponent?:
  | Component<'Icon', IconProps>
  | Component<'Sufix', { text: string }>
  | Component<'Button', Pick<ButtonProps<'ghost'>, 'label' | 'onClick'>>
  | Component<'Dropdown', Pick<ButtonProps<'ghost'>, 'label' | 'onClick'>>;
  state?: 'disabled' | 'alert' | 'alert-focus';
  hasClearButton?: boolean;
  custom?: DeepPartial<SystemProps<Theme> & typeof config>;
}
