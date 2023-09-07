import { IconButtonAppearance } from './IconButtonAppearance.type';
import { IconButtonIntent } from './IconButtonIntent.type';
import { IconButtonSize } from './IconButtonSize.type';
import { ButtonVariant } from '../Button/types/ButtonType.type';

import { BaseProps } from '@/types/BaseProps';

type Sizes = Partial<
  Record<
    IconButtonSize,
    BaseProps & {
      dropdownIndicator: BaseProps;
    }
  >
>;

export type Intents<TAppearance extends IconButtonAppearance> = {
  [TIntent in IconButtonIntent<TAppearance>]: BaseProps;
};
export type IconButtonConfig = {
  variants: {
    [TVariant in ButtonVariant]: {
      appearances: {
        [TAppearance in IconButtonAppearance<TVariant>]: {
          intents?: Intents<TAppearance>;
        } & BaseProps;
      };
      sizes?: Sizes;
    } & BaseProps;
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

export const defaultConfig: IconButtonConfig = {
  text: 'body-medium',
  p: 'component-padding-null',
  bg: 'action-inverted-normal',
  display: 'flex',
  gap: 'component-gap-xSmall',
  alignItems: 'center',
  justifyContent: 'center',
  borderRadius: 'large',
  whiteSpace: 'nowrap',

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
  variants: {
    default: {
      sizes,
      ringInset: true,
      ring: '100',
      ringColor: {
        _: 'action-outline-normal',
        hover: 'action-outline-hover',
        active: 'action-outline-active',
        selected: 'action-outline-selected',
      },
      boxShadow: 'bottom-100',
      appearances: {
        primary: {
          intents: {
            none: {
              color: {
                _: 'action-neutral-normal',
                hover: 'action-neutral-hover',
                active: 'action-neutral-active',
                selected: 'action-neutral-selected',
              },
            },
            success: {
              color: {
                _: 'action-success-normal',
                hover: 'action-success-hover',
                active: 'action-success-active',
                selected: 'action-success-selected',
              },
            },
            negative: {
              color: {
                _: 'action-destructive-normal',
                hover: 'action-destructive-hover',
                active: 'action-destructive-active',
                selected: 'action-destructive-selected',
              },
            },
          },
        },
        inverted: {
          bg: {
            _: 'action-inverted-normal',
            hover: 'action-inverted-hover',
            active: 'action-inverted-active',
            selected: 'action-inverted-selected',
          },
          color: {
            _: 'action-neutral-normal',
            hover: 'action-neutral-hover',
            active: 'action-neutral-active',
            selected: 'action-neutral-selected',
          },
        },
      },
    },
    ghost: {
      sizes,

      appearances: {
        primary: {
          bg: {
            _: 'action-ghost-normal',
            hover: 'action-ghost-hover',
            active: 'action-ghost-active',
            selected: 'action-ghost-selected',
          },
          intents: {
            none: {
              color: {
                _: 'action-neutral-normal',
                hover: 'action-neutral-hover',
                active: 'action-neutral-active',
                selected: 'action-neutral-selected',
              },
            },
            success: {
              color: {
                _: 'action-success-normal',
                hover: 'action-success-hover',
                active: 'action-success-active',
                selected: 'action-success-selected',
              },
            },
            negative: {
              color: {
                _: 'action-destructive-normal',
                hover: 'action-destructive-hover',
                active: 'action-destructive-active',
                selected: 'action-destructive-selected',
              },
              bg: {
                _: 'action-ghost-normal',
                hover: 'action-ghost-destructive-hover',
                active: 'action-ghost-destructive-active',
                selected: 'action-ghost-destructive-selected',
              },
            },
          },
        },
        inverted: {
          color: {
            _: 'action-inverted-normal',
            hover: 'action-inverted-hover',
            active: 'action-inverted-active',
            selected: 'action-inverted-selected',
          },
          bg: {
            _: 'action-ghost-normal',
            hover: 'action-ghost-inverted-hover',
            active: 'action-ghost-inverted-active',
            selected: 'action-ghost-inverted-selected',
          },
        },
        reverseInverted: {
          color: {
            _: 'action-reverseInverted-normal',
            hover: 'action-reverseInverted-hover',
            active: 'action-reverseInverted-active',
            selected: 'action-reverseInverted-selected',
          },
          bg: {
            _: 'action-ghost-normal',
            hover: 'action-ghost-hover',
            active: 'action-ghost-active',
            selected: 'action-ghost-selected',
          },
        },
      },
    },
    bare: {
      bg: 'transparent',

      appearances: {
        primary: {
          intents: {
            none: {
              color: {
                _: 'action-neutral-normal',
                hover: 'action-neutral-hover',
                active: 'action-neutral-active',
                selected: 'action-neutral-selected',
              },
            },
            success: {
              color: {
                _: 'action-success-normal',
                hover: 'action-success-hover',
                active: 'action-success-active',
                selected: 'action-success-selected',
              },
            },
            negative: {
              color: {
                _: 'action-destructive-normal',
                hover: 'action-destructive-hover',
                active: 'action-destructive-active',
                selected: 'action-destructive-selected',
              },
            },
          },
        },
        inverted: {
          color: {
            _: 'action-inverted-normal',
            hover: 'action-inverted-hover',
            active: 'action-inverted-active',
            selected: 'action-inverted-selected',
          },
        },
        reverseInverted: {
          color: {
            _: 'action-reverseInverted-normal',
            hover: 'action-reverseInverted-hover',
            active: 'action-reverseInverted-active',
            selected: 'action-reverseInverted-selected',
          },
        },
      },
    },
  },
};
