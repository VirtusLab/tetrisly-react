import { ButtonHTMLAttributes } from 'react';

import { ButtonConfig } from '@/components/Button/Button.styles';
import { ButtonState } from '@/components/Button/types/ButtonState.type';
import { IconName } from '@/utility-types/IconName';

type CommonProps = {
  icon: IconName<20>;
  hasDropdownIndicator?: boolean;
  state?: ButtonState;
  custom?: ButtonConfig;
};

type ButtonHTMLProps = Omit<
  ButtonHTMLAttributes<HTMLButtonElement>,
  'disabled' | 'color'
>;

export type CommonIconButtonProps = CommonProps & ButtonHTMLProps;
