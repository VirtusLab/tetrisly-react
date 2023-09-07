import { ButtonHTMLAttributes } from 'react';

import {
  SocialButtonAppearance,
  SocialButtonConfig,
} from './SocialButton.styles';

export const platforms = [
  'Apple',
  'Facebook',
  'Figma',
  'Github',
  'Google',
  'X',
] as const;

export type SocialButtonProps = {
  label?: string;
  platform: (typeof platforms)[number];
  appearance?: SocialButtonAppearance;
  state?: 'disabled' | 'loading';
  custom?: SocialButtonConfig;
} & Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'color' | 'disabled'>;
