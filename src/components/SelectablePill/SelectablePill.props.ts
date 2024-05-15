import { HTMLAttributes } from 'react';

import { SelectablePillConfig } from './SelectablePill.styles';
import { AvatarAppearance } from '../Avatar/types';

import { InnerComponent } from '@/types';
import { IconName } from '@/utility-types/IconName';

namespace BeforeComponent {
  export type Icon = InnerComponent<'icon', { name: IconName<20> }>;
  export type Avatar = InnerComponent<
    'avatar',
    | { appearance?: 'image'; image: string }
    | { appearance: Exclude<AvatarAppearance, 'image'>; initials: string }
  >;
}

export type SelectablePillProps = {
  text: string;
  prefix?: string;
  state?: 'default' | 'disabled';
  isSelected?: boolean;
  isInverted?: boolean;
  tabIndex?: number;
  custom?: SelectablePillConfig;
  beforeComponent?: BeforeComponent.Avatar | BeforeComponent.Icon;
} & Omit<HTMLAttributes<HTMLSpanElement>, 'color'>;
