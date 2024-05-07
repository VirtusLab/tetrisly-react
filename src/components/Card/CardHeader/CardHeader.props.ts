import type { IconProps } from '@virtuslab/tetrisly-icons';

import type { CardHeaderConfig } from '../Card.styles';

import { AvatarAppearance } from '@/components/Avatar/types';
import type { BareButtonProps } from '@/components/Button/Button.props';

export type CardHeaderProps = {
  title: string;
  description?: string;
  beforeComponent?: BeforeComponentProps;
  styles: CardHeaderConfig;
  // TODO: in the future omit the size from the button props
  actions?: BareButtonProps[];
};
type BeforeComponentProps =
  | {
      icon: IconProps;
    }
  | {
      avatar:
        | { image: string }
        | { appearance: Exclude<AvatarAppearance, 'image'>; initials: string };
    };
