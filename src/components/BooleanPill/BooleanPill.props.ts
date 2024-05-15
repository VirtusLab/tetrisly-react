import { HTMLAttributes } from 'react';

import { BooleanPillConfig } from './BooleanPill.styles';
import { AvatarAppearance } from '../Avatar/types';

export type BooleanPillProps = {
  text: string;
  state?: 'default' | 'disabled';
  isSelected?: boolean;
  isInverted?: boolean;
  tabIndex?: number;
  custom?: BooleanPillConfig;
  avatar?:
    | { appearance?: 'image'; image: string }
    | { appearance: Exclude<AvatarAppearance, 'image'>; initials: string };
} & Omit<HTMLAttributes<HTMLSpanElement>, 'color'>;
