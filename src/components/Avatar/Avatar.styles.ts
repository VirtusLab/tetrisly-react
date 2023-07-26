import { SystemProps } from '@xstyled/styled-components';

import { AvatarAppearance, avatarAppearances } from './AvatarAppearances';

import { fromEntries } from '@/services/fromEntries';
import { BaseProps } from '@/types/BaseProps';

type Config = {
  nestedImage: SystemProps;
  shape: Record<'rounded' | 'square', SystemProps>;
  size: Record<
    'large' | 'medium' | 'small' | 'xSmall' | '2xSmall',
    SystemProps
  >;
  appearance: Record<
    AvatarAppearance | 'image',
    {
      emphasis: Record<'high' | 'low', SystemProps>;
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
  size: {
    large: {
      w: 'large',
      h: 'large',
      text: 'body-large',
    },
    medium: {
      w: 'medium',
      h: 'medium',
      text: 'body-medium',
    },
    small: {
      w: 'small',
      h: 'small',
      text: 'body-small',
    },
    xSmall: {
      w: 'xSmall',
      h: 'xSmall',
      text: 'body-strong-xSmall',
    },
    '2xSmall': {
      w: '2xSmall',
      h: '2xSmall',
      text: 'body-strong-xSmall',
    },
  },
  appearance: {
    image: {
      emphasis: {
        high: {},
        low: {},
      },
    },
    ...fromEntries(
      avatarAppearances.map((appearance) => [
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
} satisfies Config;
