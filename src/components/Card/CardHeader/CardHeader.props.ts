import type { IconProps } from '@virtuslab/tetrisly-icons';

import type { CardHeaderConfig } from '../Card.styles';

import type { AvatarProps } from '@/components/Avatar';
import type { BareButtonProps } from '@/components/Button/Button.props';

export type CardHeaderProps = {
  title: string;
  description?: string;
  beforeComponent?: BeforeComponentProps;
  styles: CardHeaderConfig;
  actions?: BareButtonProps[];
};
type BeforeComponentProps =
  | {
      icon: IconProps;
    }
  | {
      avatar: AvatarProps;
    };
