import { ImgHTMLAttributes } from 'react';

import { AvatarAppearance } from './AvatarAppearances';

export type AvatarProps = (
  | {
      img: Omit<ImgHTMLAttributes<HTMLImageElement>, 'color'>;
      appearance: 'image';
      emphasis?: 'low';
    }
  | {
      appearance?: AvatarAppearance;
      emphasis?: 'low' | 'high';
      initials: string;
    }
) & {
  shape: 'rounded' | 'square';
  size: 'large' | 'medium' | 'small' | 'xSmall' | '2xSmall';
};
