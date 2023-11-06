import type { AvatarAppearance, AvatarShape } from './types';

import type { BaseProps } from '@/types/BaseProps';
import { Emphasis } from '@/types/Emphasis';
import { Size } from '@/types/Size';

export type AvatarConfig = {
  shape?: Partial<Record<AvatarShape, BaseProps>>;
  size?: Partial<Record<Size, BaseProps>>;
  appearance?: Partial<
    Record<
      AvatarAppearance,
      {
        emphasis?: Partial<Record<Emphasis, BaseProps>>;
      }
    >
  >;
  innerElements?: {
    image?: BaseProps;
  };
} & BaseProps;

export const defaultConfig = {
  overflow: 'hidden',
  position: 'relative',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  shape: {
    rounded: {
      borderRadius: '$border-radius-full',
    },
    square: {
      borderRadius: '$border-radius-large',
    },
  },
  size: {
    large: {
      w: '$size-large',
      h: '$size-large',
      text: '$typo-body-large',
    },
    medium: {
      w: '$size-medium',
      h: '$size-medium',
      text: '$typo-body-medium',
    },
    small: {
      w: '$size-small',
      h: '$size-small',
      text: '$typo-body-small',
    },
    xSmall: {
      w: '$size-xSmall',
      h: '$size-xSmall',
      text: '$typo-body-strong-xSmall',
    },
    '2xSmall': {
      w: '$size-2xSmall',
      h: '$size-2xSmall',
      text: '$typo-body-strong-xSmall',
    },
  },
  appearance: {
    image: {
      emphasis: {
        high: {},
        low: {},
      },
    },
    blue: {
      emphasis: {
        high: {
          color: '$color-nonSemantic-white-content-primary',
          backgroundColor: '$color-nonSemantic-blue-background-strong',
        },
        low: {
          color: '$color-nonSemantic-blue-content-primary',
          backgroundColor: '$color-nonSemantic-blue-background-muted',
        },
      },
    },
    green: {
      emphasis: {
        high: {
          color: '$color-nonSemantic-white-content-primary',
          backgroundColor: '$color-nonSemantic-green-background-strong',
        },
        low: {
          color: '$color-nonSemantic-green-content-primary',
          backgroundColor: '$color-nonSemantic-green-background-muted',
        },
      },
    },
    grey: {
      emphasis: {
        high: {
          color: '$color-nonSemantic-white-content-primary',
          backgroundColor: '$color-nonSemantic-grey-background-strong',
        },
        low: {
          color: '$color-nonSemantic-grey-content-primary',
          backgroundColor: '$color-nonSemantic-grey-background-muted',
        },
      },
    },
    red: {
      emphasis: {
        high: {
          color: '$color-nonSemantic-white-content-primary',
          backgroundColor: '$color-nonSemantic-red-background-strong',
        },
        low: {
          color: '$color-nonSemantic-red-content-primary',
          backgroundColor: '$color-nonSemantic-red-background-muted',
        },
      },
    },
    orange: {
      emphasis: {
        high: {
          color: '$color-nonSemantic-grey-content-primary',
          backgroundColor: '$color-nonSemantic-orange-background-strong',
        },
        low: {
          color: '$color-nonSemantic-orange-content-primary',
          backgroundColor: '$color-nonSemantic-orange-background-muted',
        },
      },
    },
    raspberry: {
      emphasis: {
        high: {
          color: '$color-nonSemantic-white-content-primary',
          backgroundColor: '$color-nonSemantic-raspberry-background-strong',
        },
        low: {
          color: '$color-nonSemantic-raspberry-content-primary',
          backgroundColor: '$color-nonSemantic-raspberry-background-muted',
        },
      },
    },
    magenta: {
      emphasis: {
        high: {
          color: '$color-nonSemantic-white-content-primary',
          backgroundColor: '$color-nonSemantic-magenta-background-strong',
        },
        low: {
          color: '$color-nonSemantic-magenta-content-primary',
          backgroundColor: '$color-nonSemantic-magenta-background-muted',
        },
      },
    },
    purple: {
      emphasis: {
        high: {
          color: '$color-nonSemantic-white-content-primary',
          backgroundColor: '$color-nonSemantic-purple-background-strong',
        },
        low: {
          color: '$color-nonSemantic-purple-content-primary',
          backgroundColor: '$color-nonSemantic-purple-background-muted',
        },
      },
    },
    grape: {
      emphasis: {
        high: {
          color: '$color-nonSemantic-white-content-primary',
          backgroundColor: '$color-nonSemantic-grape-background-strong',
        },
        low: {
          color: '$color-nonSemantic-grape-content-primary',
          backgroundColor: '$color-nonSemantic-grape-background-muted',
        },
      },
    },
    violet: {
      emphasis: {
        high: {
          color: '$color-nonSemantic-white-content-primary',
          backgroundColor: '$color-nonSemantic-violet-background-strong',
        },
        low: {
          color: '$color-nonSemantic-violet-content-primary',
          backgroundColor: '$color-nonSemantic-violet-background-muted',
        },
      },
    },
    cyan: {
      emphasis: {
        high: {
          color: '$color-nonSemantic-white-content-primary',
          backgroundColor: '$color-nonSemantic-cyan-background-strong',
        },
        low: {
          color: '$color-nonSemantic-cyan-content-primary',
          backgroundColor: '$color-nonSemantic-cyan-background-muted',
        },
      },
    },
    teal: {
      emphasis: {
        high: {
          color: '$color-nonSemantic-white-content-primary',
          backgroundColor: '$color-nonSemantic-teal-background-strong',
        },
        low: {
          color: '$color-nonSemantic-teal-content-primary',
          backgroundColor: '$color-nonSemantic-teal-background-muted',
        },
      },
    },
    aquamarine: {
      emphasis: {
        high: {
          color: '$color-nonSemantic-white-content-primary',
          backgroundColor: '$color-nonSemantic-aquamarine-background-strong',
        },
        low: {
          color: '$color-nonSemantic-aquamarine-content-primary',
          backgroundColor: '$color-nonSemantic-aquamarine-background-muted',
        },
      },
    },
    emerald: {
      emphasis: {
        high: {
          color: '$color-nonSemantic-white-content-primary',
          backgroundColor: '$color-nonSemantic-emerald-background-strong',
        },
        low: {
          color: '$color-nonSemantic-emerald-content-primary',
          backgroundColor: '$color-nonSemantic-emerald-background-muted',
        },
      },
    },
  },
  innerElements: {
    image: {
      w: '100%',
      h: '100%',
    },
  },
} satisfies AvatarConfig;
