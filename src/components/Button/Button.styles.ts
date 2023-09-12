import { BaseProps } from '@/types/BaseProps';

export type DefaultButtonConfig = {
  appearance?: {
    primary?: {
      intent?: {
        none?: BaseProps;
        success?: BaseProps;
        destructive?: BaseProps;
      };
    } & BaseProps;
    secondary?: {
      intent?: {
        none?: BaseProps;
        success?: BaseProps;
        destructive?: BaseProps;
      };
    } & BaseProps;
    inverted?: {
      intent?: {
        none?: BaseProps;
      };
    } & BaseProps;
  };
  size?: {
    small?: BaseProps;
    medium?: BaseProps;
    large?: BaseProps;
  };
} & BaseProps;

export type GhostButtonConfig = {
  appearance?: {
    primary?: {
      intent?: {
        none?: BaseProps;
        success?: BaseProps;
        destructive?: BaseProps;
      };
    } & BaseProps;
    secondary?: {
      intent?: {
        none?: BaseProps;
      };
    } & BaseProps;
    inverted?: {
      intent?: {
        none?: BaseProps;
      };
    } & BaseProps;
    reverseInverted?: {
      intent?: {
        none?: BaseProps;
      };
    } & BaseProps;
  };
  size?: {
    small?: BaseProps;
    medium?: BaseProps;
    large?: BaseProps;
  };
} & BaseProps;

export type BareButtonConfig = {
  appearance?: {
    primary?: {
      intent?: {
        none?: BaseProps;
        success?: BaseProps;
        destructive?: BaseProps;
      };
    } & BaseProps;
    secondary?: {
      intent?: {
        none?: BaseProps;
      };
    } & BaseProps;
    inverted?: {
      intent?: {
        none?: BaseProps;
      };
    } & BaseProps;
    reverseInverted?: {
      intent?: {
        none?: BaseProps;
      };
    } & BaseProps;
  };
  size?: {
    medium?: BaseProps;
    large?: BaseProps;
  };
} & BaseProps;

const size = {
  small: {
    pl: '100',
    pr: '150',
    h: 'small',
    text: 'body-medium',
  },
  medium: {
    pl: '150',
    pr: '200',
    h: 'medium',
    text: 'body-medium',
  },
  large: {
    pl: '150',
    pr: '200',
    h: 'large',
    text: 'body-large',
  },
} as const satisfies Record<'small' | 'medium' | 'large', BaseProps>;

const commonConfig = {
  display: 'inline-flex',
  gap: '100',
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
} satisfies BaseProps;

const defaultButtonConfig = {
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
      backgroundColor: 'action-inverted-normal',
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
          color: {
            _: 'action-neutral-normal',
            hover: 'action-neutral-hover',
            active: 'action-neutral-active',
            selected: 'action-neutral-selected',
          },
        },
      },
    },
  },
  size,
} satisfies DefaultButtonConfig;

const ghostButtonConfig = {
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
            _: 'action-ghost-normal',
            hover: 'action-ghost-hover',
            active: 'action-ghost-active',
            selected: 'action-ghost-selected',
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
  size,
} satisfies GhostButtonConfig;

const bareButtonConfig = {
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
} satisfies BareButtonConfig;

export type ButtonConfig = {
  default?: DefaultButtonConfig;
  ghost?: GhostButtonConfig;
  bare?: BareButtonConfig;
};

export const defaultConfig = {
  default: defaultButtonConfig,
  ghost: ghostButtonConfig,
  bare: bareButtonConfig,
} satisfies ButtonConfig;
