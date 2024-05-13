import { HTMLAttributes } from 'react';

import { SelectablePillConfig } from './SelectablePill.styles';
import { AvatarAppearance } from '../Avatar/types';

import { IconName } from '@/utility-types/IconName';

export type SelectablePillProps = {
  text: string;
  prefix?: string;
  state?: 'default' | 'disabled';
  isSelected?: boolean;
  isInverted?: boolean;
  tabIndex?: number;
  custom?: SelectablePillConfig;
  beforeComponent?: BeforeComponentProps;
} & Omit<HTMLAttributes<HTMLSpanElement>, 'color'>;

type BeforeComponentProps =
  | {
      icon: IconName<20>;
    }
  | {
      avatar:
        | { appearance?: 'image'; image: string }
        | { appearance: Exclude<AvatarAppearance, 'image'>; initials: string };
    };
