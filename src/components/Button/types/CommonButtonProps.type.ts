import { ButtonHTMLAttributes } from 'react';

import { ButtonState } from './ButtonState.type';
import { ButtonConfig } from '../Button.styles';

import { IconName } from '@/utility-types/IconName';
import { Or } from '@/utility-types/Or';

type CommonProps = {
  label?: string;
  children?: string;
  state?: ButtonState;
  custom?: ButtonConfig;
  beforeIcon?: IconName<20>;
};

type ButtonHTMLProps = Omit<
  ButtonHTMLAttributes<HTMLButtonElement>,
  'disabled' | 'color'
>;

type DropdownOrAfterIcon = Or<
  { afterIcon?: IconName<20> },
  { dropdownIndicator?: boolean }
>;

export type CommonButtonProps = CommonProps &
  ButtonHTMLProps &
  DropdownOrAfterIcon;
