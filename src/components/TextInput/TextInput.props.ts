import { IconProps } from '@virtuslab/tetrisly-icons';
import { SystemProps } from '@xstyled/styled-components';
import { InputHTMLAttributes } from 'react';

import { config } from './TextInput.style';
import { TextInputType } from './TextInputType.type';
import { ButtonProps } from '../Button';
import { IconButtonProps } from '../IconButton/IconButton.props';

import { Theme } from '@/theme';
import type { BasicInputState } from '@/types';
import { InnerComponent } from '@/types/InnerComponent';
import { DeepPartial } from '@/utility-types/DeepPartial';

export namespace TextInputProps.InnerComponents {
  export type Icon = InnerComponent<'Icon', IconProps>;
  export type IconButton = InnerComponent<
    'IconButton',
    Omit<IconButtonProps<'ghost'>, 'variant' | 'size'>
  >;
  export type Dropdown = InnerComponent<
    'Dropdown',
    Pick<ButtonProps<'ghost'>, 'label' | 'onClick'>
  >;
  export type Prefix = InnerComponent<'Prefix', { text: string }>;
  export type Sufix = InnerComponent<'Sufix', { text: string }>;
  export type Button = InnerComponent<
    'Button',
    Pick<ButtonProps<'ghost'>, 'label' | 'onClick'>
  >;
}

export type TextInputProps = {
  type?: TextInputType;
  beforeComponent?:
    | TextInputProps.InnerComponents.Icon
    | TextInputProps.InnerComponents.Prefix
    | TextInputProps.InnerComponents.Dropdown;
  afterComponent?:
    | TextInputProps.InnerComponents.Icon
    | TextInputProps.InnerComponents.IconButton
    | TextInputProps.InnerComponents.Sufix
    | TextInputProps.InnerComponents.Button
    | TextInputProps.InnerComponents.Dropdown;
  state?: BasicInputState;
  hasClearButton?: boolean;
  custom?: DeepPartial<SystemProps<Theme> & typeof config>;
} & Omit<
  InputHTMLAttributes<HTMLInputElement>,
  'checked' | 'disabled' | 'color' | 'type'
>;
