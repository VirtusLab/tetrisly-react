import { IconButtonAppearance } from './IconButtonAppearance.type';
import { IconButtonIntent } from './IconButtonIntent.type';
import { IconButtonSize } from './IconButtonSize.type';
import { ButtonVariant } from '../Button/types/ButtonType.type';

import { BaseProps } from '@/types/BaseProps';

type Sizes = Record<
  IconButtonSize,
  BaseProps & {
    dropdownIndicator: BaseProps;
  }
>;

export type Intents<TAppearance extends IconButtonAppearance> = {
  [TIntent in IconButtonIntent<TAppearance>]: BaseProps;
};
export type IconButtonConfig = {
  sizes: Sizes;
  variants: {
    [TVariant in ButtonVariant]: {
      appearances: {
        [TAppearance in IconButtonAppearance<TVariant>]: {
          intents?: Intents<TAppearance>;
        };
      } & BaseProps;
    };
  };
} & BaseProps;

const sizes = {
  small: {
    w: 'small',
    h: 'small',
    dropdownIndicator: {
      w: 'xLarge',
    },
  },
  medium: {
    w: 'medium',
    h: 'medium',
    dropdownIndicator: {
      w: '2xLarge',
    },
  },
  large: {
    w: 'large',
    h: 'large',
    dropdownIndicator: {
      h: '3xLarge',
    },
  },
} satisfies Sizes;

export const iconButtonConfig: IconButtonConfig = {
  display: 'flex',
  gap: 'component-gap-xSmall',
  alignItems: 'center',
  justifyContent: 'center',
  boxShadow: 'bottom-100',
  borderRadius: 'large',
  borderColor: 'action-outline-normal',
  whiteSpace: 'nowrap',
  ringInset: true,
  ring: '100',
  ringColor: {
    _: 'action-outline-normal',
    hover: 'action-outline-hover',
    active: 'action-outline-active',
    selected: 'action-outline-selected',
  },
  p: 'component-padding-null',
  opacity: {
    disabled: 'disabled',
  },
  outlineColor: {
    focus: 'interaction-focus-default',
  },
  outlineWidth: {
    focus: 'focus',
  },
  outlineOffset: 2,
  pointerEvents: {
    loading: 'none',
    disabled: 'none',
  },
  transition: true,
  transitionDuration: 200,
  sizes,
  variants: {
    default: {
      appearances: {
        primary: {
          intents: {
            none: {},
            success: {},
            negative: {},
          },
        },
        inverted: {},
      },
    },
    ghost: {
      appearances: {
        primary: {
          intents: {
            none: {},
            success: {},
            negative: {},
          },
        },
        inverted: {},
        reverseInverted: {},
      },
    },
    bare: {
      appearances: {
        primary: {
          intents: {
            none: {},
            success: {},
            negative: {},
          },
        },
        inverted: {},
        reverseInverted: {},
      },
    },
  },
};
