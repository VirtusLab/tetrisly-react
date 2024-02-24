import type { IconProps } from '@virtuslab/tetrisly-icons';

import type { CardHeaderConfig } from './CardHeader.styles';

import type { AvatarProps } from '@/components/Avatar';
import type { BareButtonProps } from '@/components/Button/Button.props';

export type CardHeaderProps = {
  title: string;
  description?: string;
  beforeComponent?: BeforeComponentProps;
  custom?: CardHeaderConfig;
  actions?: BareButtonProps[];
};

type BeforeComponentProps =
  | {
      icon: IconProps;
    }
  | {
      avatar: AvatarProps;
    };
