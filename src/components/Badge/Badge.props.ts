import { BadgeConfig } from './Badge.styles';
import { BadgeAppearance } from './BadgeAppearance.type';
import { BadgeEmphasis } from './BadgeEmphasis.type';
import { BadgeIntent } from './BadgeIntent.type';

import { DeepPartial } from '@/utility-types/DeepPartial';
import { IconName } from '@/utility-types/IconName';
import { Or } from '@/utility-types/Or';

export type BadgeProps = Or<
  { appearance?: BadgeAppearance },
  { intent?: BadgeIntent }
> &
  Or<
    { label: string; beforeIcon?: IconName<16>; afterIcon?: IconName<16> },
    { icon: IconName<16> }
  > & {
    emphasis?: BadgeEmphasis;
    custom?: DeepPartial<BadgeConfig>;
  };
