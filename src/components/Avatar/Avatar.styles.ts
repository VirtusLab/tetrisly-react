import { AvatarShape } from './AvatarShape.type';

import { fromEntries } from '@/services/fromEntries';
import { Appearance, appearances } from '@/types/Appearance';
import { BaseProps } from '@/types/BaseProps';
import { Emphasis } from '@/types/Emphasis';
import { Size, sizes } from '@/types/Size';

export type AvatarConfig = {
  nestedImage: BaseProps;
  shape: Record<AvatarShape, BaseProps>;
  size: Record<Size, BaseProps>;
  appearance: Record<
    Appearance | 'image',
    {
      emphasis: Record<Emphasis, BaseProps>;
    }
  >;
} & BaseProps;

export const config = {
  nestedImage: {
    w: '100%',
    h: '100%',
  },
  overflow: 'hidden',
  position: 'relative',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  shape: {
    rounded: {
      borderRadius: 'full',
    },
    square: {
      borderRadius: 'large',
    },
  },
  size: sizes.reduce(
    (acc, size) => ({
      ...acc,
      [size]: {
        w: size,
        h: size,
        text: `body-${size.includes('xSmall') ? 'strong-xSmall' : size}`,
      },
    }),
    {} as Record<Size, BaseProps>,
  ),

  appearance: {
    image: {
      emphasis: {
        high: {},
        low: {},
      },
    },
    ...fromEntries(
      appearances.map((appearance) => [
        appearance,
        {
          emphasis: {
            high: {
              color: 'nonSemantic-white-content-primary',
              backgroundColor: `nonSemantic-${appearance}-background-strong`,
            },
            low: {
              color: `nonSemantic-${appearance}-content-primary`,
              backgroundColor: `nonSemantic-${appearance}-background-muted`,
            },
          },
        },
      ]),
    ),
  },
} satisfies AvatarConfig;
