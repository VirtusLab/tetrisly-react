import { AvatarShape } from './AvatarShape.type';
import { Appearance, appearances } from '../../types/Appearance';

import { fromEntries } from '@/services/fromEntries';
import { Emphasis } from '@/types/Emphasis';
import { Size, sizes } from '@/types/Size';
import { BaseConfigProps } from '@/utility-types/BaseConfigProps';

export type AvatarConfig = {
  nestedImage: BaseConfigProps;
  shape: Record<AvatarShape, BaseConfigProps>;
  size: Record<Size, BaseConfigProps>;
  appearance: Record<
    Appearance | 'image',
    {
      emphasis: Record<Emphasis, BaseConfigProps>;
    }
  >;
} & BaseConfigProps;

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
    {} as Record<Size, BaseConfigProps>
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
      ])
    ),
  },
} satisfies AvatarConfig;
