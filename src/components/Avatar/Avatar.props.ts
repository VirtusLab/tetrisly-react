import type { ImgHTMLAttributes } from 'react';

import type { AvatarConfig } from './Avatar.styles';
import type {
  AvatarAppearanceColors,
  AvatarEmphasis,
  AvatarShape,
  AvatarSize,
} from './types';

export type AvatarImageProps = {
  img: Omit<ImgHTMLAttributes<HTMLImageElement>, 'color'>;
  appearance: 'image';
  emphasis?: 'low';
  initials?: never;
};

export type AvatarInitialProps = {
  img?: never;
  appearance?: AvatarAppearanceColors;
  emphasis?: AvatarEmphasis;
  initials: string;
};

export type AvatarProps = (AvatarImageProps | AvatarInitialProps) & {
  shape?: AvatarShape;
  size?: AvatarSize;
  custom?: AvatarConfig;
};
