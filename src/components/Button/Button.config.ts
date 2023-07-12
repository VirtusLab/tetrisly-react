import { SystemProps } from '@xstyled/styled-components';

import { ButtonAppearance } from './types/ButtonAppearance.type';
import { ButtonIntent } from './types/ButtonIntent.type';
import { ButtonSize } from './types/ButtonSize.type';
import { ButtonVariant } from './types/ButtonType.type';
import { Theme } from '../../theme';

type BaseProps = Omit<SystemProps<Theme>, 'appearance'>;

export type VariantConfig<TVariant extends ButtonVariant> = {
  appearance: {
    [Appearance in ButtonAppearance<TVariant>]: {
      intent: {
        [Intent in ButtonIntent<TVariant, Appearance>]: BaseProps;
      };
    } & BaseProps;
  };
  size: {
    [Size in ButtonSize<TVariant>]: BaseProps;
  };
} & BaseProps;

const commonConfig = {
  display: 'inline-flex',
  justifyContent: 'center',
  alignItems: 'center',
  borderRadius: 'medium',
  textAlign: 'center',
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
} as const satisfies BaseProps;

const defaultConfig = {
  ...commonConfig,
  boxShadow: 'bottom-100',
  appearance: {
    primary: {
      color: 'action-inverted-normal',
      intent: {
        none: {
          backgroundColor: {
            _: 'action-primary-normal',
            hover: 'action-primary-hover',
            active: 'action-primary-active',
            selected: 'action-primary-selected',
            // loading: "action-primary-loading",
          },
        },
        success: {
          backgroundColor: {
            _: 'action-success-normal',
            hover: 'action-success-hover',
            active: 'action-success-active',
            selected: 'action-success-selected',
            // loading: "action-success-loading",
          },
        },
        destructive: {
          backgroundColor: {
            _: 'action-destructive-normal',
            hover: 'action-destructive-hover',
            active: 'action-destructive-active',
            selected: 'action-destructive-selected',
            // loading: "action-destructive-loading",
          },
        },
      },
    },
    secondary: {
      backgroundColor: 'transparent',
      ringInset: true,
      ring: '100',
      ringColor: {
        _: 'action-outline-normal',
        hover: 'action-outline-hover',
        active: 'action-outline-active',
        selected: 'action-outline-selected',
      },
      intent: {
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
        destructive: {
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
      intent: {
        none: {
          backgroundColor: {
            _: 'action-inverted-normal',
            hover: 'action-inverted-hover',
            active: 'action-inverted-active',
            selected: 'action-inverted-selected',
            // loading: "action-inverted-loading",
          },
        },
      },
    },
  },
  size: {
    small: { h: '250', text: 'body-medium', px: '150' },
    medium: { h: '300', text: 'body-medium', px: '200' },
    large: { h: '350', text: 'body-large', px: '200' },
  },
} as const satisfies VariantConfig<'default'>;

const ghostConfig = {
  ...commonConfig,
  backgroundColor: {
    _: 'transparent',
    hover: 'action-ghost-hover',
    active: 'action-ghost-active',
    selected: 'action-ghost-selected',
  },
  appearance: {
    primary: {
      intent: {
        none: {
          color: {
            _: 'action-primary-normal',
            hover: 'action-primary-hover',
            active: 'action-primary-active',
            selected: 'action-primary-selected',
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
        destructive: {
          color: {
            _: 'action-destructive-normal',
            hover: 'action-destructive-hover',
            active: 'action-destructive-active',
            selected: 'action-destructive-selected',
          },
        },
      },
    },
    secondary: {
      intent: {
        none: {
          color: {
            _: 'action-neutral-normal',
            hover: 'action-neutral-hover',
            active: 'action-neutral-active',
            selected: 'action-neutral-selected',
          },
        },
      },
    },
    inverted: {
      intent: {
        none: {
          backgroundColor: {
            hover: 'action-ghost-inverted-hover',
            active: 'action-ghost-inverted-active',
            selected: 'action-ghost-inverted-selected',
          },
          color: {
            _: 'action-inverted-normal',
            hover: 'action-inverted-hover',
            active: 'action-inverted-active',
            selected: 'action-inverted-selected',
          },
        },
      },
    },
    reverseInverted: {
      intent: {
        none: {
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
  size: {
    small: { h: '250', text: 'body-medium', px: '150' },
    medium: { h: '300', text: 'body-medium', px: '200' },
    large: { h: '350', text: 'body-large', px: '200' },
  },
} as const satisfies VariantConfig<'ghost'>;

const bareConfig = {
  ...commonConfig,
  p: 0,
  backgroundColor: 'transparent',
  appearance: {
    primary: {
      intent: {
        none: {
          color: {
            _: 'action-primary-normal',
            hover: 'action-primary-hover',
            active: 'action-primary-active',
            selected: 'action-primary-selected',
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
        destructive: {
          color: {
            _: 'action-destructive-normal',
            hover: 'action-destructive-hover',
            active: 'action-destructive-active',
            selected: 'action-destructive-selected',
          },
        },
      },
    },
    secondary: {
      intent: {
        none: {
          color: {
            _: 'action-neutral-normal',
            hover: 'action-neutral-hover',
            active: 'action-neutral-active',
            selected: 'action-neutral-selected',
          },
        },
      },
    },
    inverted: {
      intent: {
        none: {
          color: {
            _: 'action-inverted-normal',
            hover: 'action-inverted-hover',
            active: 'action-inverted-active',
            selected: 'action-inverted-selected',
          },
        },
      },
      textDecoration: 'underline',
    },
    reverseInverted: {
      intent: {
        none: {
          color: {
            _: 'action-reverseInverted-normal',
            hover: 'action-reverseInverted-hover',
            active: 'action-reverseInverted-active',
            selected: 'action-reverseInverted-selected',
          },
        },
      },
      textDecoration: 'underline',
    },
  },
  size: {
    medium: { text: 'body-medium' },
    large: { text: 'body-large' },
  },
} as const satisfies VariantConfig<'bare'>;

export const config = {
  default: defaultConfig,
  ghost: ghostConfig,
  bare: bareConfig,
} as const satisfies Record<ButtonVariant, unknown>;
