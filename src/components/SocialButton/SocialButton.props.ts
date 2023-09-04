import { ButtonHTMLAttributes } from 'react';

import {
  SocialButtonAppearance,
  SocialButtonConfig,
} from './SocialButton.styles';

import { DeepPartial } from '@/utility-types/DeepPartial';

export type SocialButtonProps = {
  content?: string;
  platform: 'Apple' | 'Facebook' | 'Figma' | 'Github' | 'Google' | 'X';
  appearance?: SocialButtonAppearance;
  state?: 'disabled' | 'loading';
  custom?: DeepPartial<SocialButtonConfig>;
} & Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'color'>;
