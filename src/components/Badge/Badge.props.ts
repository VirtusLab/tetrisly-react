import { BadgeConfig } from './Badge.styles';

import type { Appearance, BasicIntent } from '@/types';
import { DeepPartial } from '@/utility-types/DeepPartial';
import { IconName } from '@/utility-types/IconName';
import { Or } from '@/utility-types/Or';

export const emphases = ['high', 'medium', 'low'] as const;

export type BadgeProps = Or<
  { appearance: Appearance },
  { intent: BasicIntent }
> &
  Or<
    { label: string; beforeIcon?: IconName<16>; afterIcon?: IconName<16> },
    { icon: IconName<16> }
  > & {
    emphasis?: (typeof emphases)[number];
    custom?: DeepPartial<BadgeConfig>;
  };
