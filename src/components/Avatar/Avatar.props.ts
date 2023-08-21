import { ImgHTMLAttributes } from 'react';

import { AvatarAppearance } from './AvatarAppearances';
import { AvatarConfig } from './Avatar.styles';
import { DeepPartial } from '@/utility-types/DeepPartial';

export type AvatarProps = (
  | {
      img: Omit<ImgHTMLAttributes<HTMLImageElement>, 'color'>;
      appearance: 'image';
      emphasis?: 'low';
      initials?: never;
    }
  | {
      appearance?: AvatarAppearance;
      emphasis?: 'low' | 'high';
      initials: string;
    }
) & {
  shape?: 'rounded' | 'square';
  size?: 'large' | 'medium' | 'small' | 'xSmall' | '2xSmall';
  custom?: DeepPartial<AvatarConfig>;
};
