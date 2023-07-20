import { ImgHTMLAttributes } from 'react';

import { AvatarAppearance } from './AvatarAppearances';

export type AvatarProps = (
  | {
      name: string;
      img: ImgHTMLAttributes<HTMLImageElement>;
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
