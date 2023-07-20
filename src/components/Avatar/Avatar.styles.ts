import { SystemProps } from '@xstyled/styled-components';

import { AvatarAppearance, avatarAppearances } from './AvatarAppearances';

import { fromEntries } from '@/services/fromEntries';

type Config = {
  shape: Record<'rounded' | 'square', SystemProps>;
  size: Record<
    'large' | 'medium' | 'small' | 'xSmall' | '2xSmall',
    SystemProps
  >;
  appearance: Record<
    AvatarAppearance,
    {
      emphasis: Record<'high' | 'low', SystemProps>;
    }
  >;
  isBoolean: SystemProps;
};

export const config = {
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
    },
    medium: {
      w: 'medium',
      h: 'medium',
    },
    small: {
      w: 'small',
      h: 'small',
    },
    xSmall: {
      w: 'xSmall',
      h: 'xSmall',
    },
    '2xSmall': {
      w: '2xSmall',
      h: '2xSmall',
    },
  },
  isBoolean: {
    color: 'nonSemantic-white-content-primary',
  },
  appearance: fromEntries(
    avatarAppearances.map((appearance) => [
      appearance,
      {
        emphasis: {
          high: {
            color: `nonSemantic-${appearance}-content-primary`,
            backgroundColor: `nonSemantic-${appearance}-background-muted`,
          },
          low: {
            color: 'nonSemantic-white-content-primary',
            backgroundColor: `nonSemantic-${appearance}-background-strong`,
          },
        },
      },
    ])
  ),
} satisfies Config;
