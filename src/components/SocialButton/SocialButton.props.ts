import { ButtonHTMLAttributes } from 'react';

import {
  SocialButtonAppearance,
  SocialButtonConfig,
} from './SocialButton.styles';

import { DeepPartial } from '@/utility-types/DeepPartial';

export const platforms = [
  'Apple',
  'Facebook',
  'Figma',
  'Github',
  'Google',
  'X',
] as const;

export type SocialButtonProps = {
  content?: string;
  platform: (typeof platforms)[number];
  appearance?: SocialButtonAppearance;
  state?: 'disabled' | 'loading';
  custom?: DeepPartial<SocialButtonConfig>;
} & Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'color'>;
