import { IconProps } from '@virtuslab/tetrisly-icons';
import { InputHTMLAttributes } from 'react';

import { TextInputConfig } from './TextInput.styles';
import { TextInputType } from './TextInputType.type';
import { AvatarImageProps, AvatarInitialProps } from '../Avatar/Avatar.props';
import { GhostButtonProps } from '../Button/Button.props';
import { GhostIconButtonProps } from '../IconButton/IconButton.props';

import type { BasicInputState } from '@/types';
import { InnerComponent } from '@/types/InnerComponent';

export namespace TextInputProps.InnerComponents {
  export type Icon = InnerComponent<'Icon', IconProps>;
  export type IconButton = InnerComponent<
    'IconButton',
    Omit<GhostIconButtonProps, 'variant' | 'size'>
  >;
  export type Dropdown = InnerComponent<
    'Dropdown',
    Pick<GhostButtonProps, 'label' | 'onClick'>
  >;
  export type Prefix = InnerComponent<'Prefix', { text: string }>;
  export type Sufix = InnerComponent<'Sufix', { text: string }>;
  export type Button = InnerComponent<
    'Button',
    Pick<GhostButtonProps, 'label' | 'onClick'>
  >;
  export type Avatar = InnerComponent<
    'Avatar',
    AvatarImageProps | AvatarInitialProps
  >;
}

export type TextInputProps = {
  type?: TextInputType;
  beforeComponent?:
    | TextInputProps.InnerComponents.Icon
    | TextInputProps.InnerComponents.Avatar
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
  custom?: TextInputConfig;
} & Omit<
  InputHTMLAttributes<HTMLInputElement>,
  'checked' | 'disabled' | 'color' | 'type'
>;
