import { IconButtonAppearance } from './IconButtonAppearance.type';
import { IconButtonIntent } from './IconButtonIntent.type';
import { ButtonVariant } from '../Button/types/ButtonType.type';

import { BaseProps } from '@/types/BaseProps';

type IconButtonConfig = {
  variants: {
    [TVariant in ButtonVariant]: {
      appearances: {
        [TAppearance in IconButtonAppearance<TVariant>]: {
          intents?: Record<IconButtonIntent<TAppearance>, BaseProps>;
        };
      } & BaseProps;
    };
  };
} & BaseProps;

export const iconButtonConfig: IconButtonConfig = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  borderRadius: 'medium',
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
