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
    small?: {
      hasDropdownIndicator?: BaseProps;
      hasBeforeIcon?: BaseProps;
      hasAfterIcon?: BaseProps;
    } & BaseProps;
    medium?: {
      hasDropdownIndicator?: BaseProps;
      hasBeforeIcon?: BaseProps;
      hasAfterIcon?: BaseProps;
    } & BaseProps;
    large?: {
      hasDropdownIndicator?: BaseProps;
      hasBeforeIcon?: BaseProps;
      hasAfterIcon?: BaseProps;
    } & BaseProps;
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
    small?: {
      hasDropdownIndicator?: BaseProps;
      hasBeforeIcon?: BaseProps;
      hasAfterIcon?: BaseProps;
    } & BaseProps;
    medium?: {
      hasDropdownIndicator?: BaseProps;
      hasBeforeIcon?: BaseProps;
      hasAfterIcon?: BaseProps;
    } & BaseProps;
    large?: {
      hasDropdownIndicator?: BaseProps;
      hasBeforeIcon?: BaseProps;
      hasAfterIcon?: BaseProps;
    } & BaseProps;
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
    medium?: {
      hasDropdownIndicator?: BaseProps;
      hasBeforeIcon?: BaseProps;
      hasAfterIcon?: BaseProps;
    } & BaseProps;
    large?: {
      hasDropdownIndicator?: BaseProps;
      hasBeforeIcon?: BaseProps;
      hasAfterIcon?: BaseProps;
    } & BaseProps;
  };
} & BaseProps;

const size = {
  small: {
    px: '$space-component-padding-medium',
    h: '$size-small',
    text: '$typo-body-medium',
    hasDropdownIndicator: {
      pr: '$space-component-padding-small',
    },
    hasBeforeIcon: {
      pl: '$space-component-padding-small',
    },
    hasAfterIcon: {
      pr: '$space-component-padding-small',
    },
  },
  medium: {
    px: '$space-component-padding-large',
    h: '$size-medium',
    text: '$typo-body-medium',
    hasDropdownIndicator: {
      pr: '$space-component-padding-medium',
    },
    hasBeforeIcon: {
      pl: '$space-component-padding-medium',
    },
    hasAfterIcon: {
      pr: '$space-component-padding-medium',
    },
  },
  large: {
    px: '$space-component-padding-large',
    h: '$size-large',
    text: '$typo-body-large',
    hasDropdownIndicator: {
      pr: '$space-component-padding-medium',
    },
    hasBeforeIcon: {
      pl: '$space-component-padding-medium',
    },
    hasAfterIcon: {
      pr: '$space-component-padding-medium',
    },
  },
} as const satisfies Record<
  'small' | 'medium' | 'large',
  {
    hasDropdownIndicator?: BaseProps;
    hasBeforeIcon?: BaseProps;
    hasAfterIcon?: BaseProps;
  } & BaseProps
>;

const commonConfig = {
  display: 'inline-flex',
  gap: '$space-component-gap-small',
  w: 'fit-content',
  justifyContent: 'center',
  alignItems: 'center',
  textAlign: 'center',
  whiteSpace: 'nowrap',
  opacity: {
    disabled: '$opacity-disabled',
  },
  outline: {
    focus: 'solid',
  },
  outlineColor: {
    focus: '$color-interaction-focus-default',
  },
  outlineWidth: {
    focus: '$border-width-focus',
  },
  outlineOffset: 1,
  pointerEvents: {
    loading: 'none',
    disabled: 'none',
  },
  transition: true,
  transitionDuration: 200,
} satisfies BaseProps;

const defaultButtonConfig = {
  ...commonConfig,
  borderRadius: '$border-radius-medium',
  boxShadow: '$elevation-bottom-100',
  appearance: {
    primary: {
      color: '$color-action-inverted-normal',
      intent: {
        none: {
          backgroundColor: {
            _: '$color-action-primary-normal',
            hover: '$color-action-primary-hover',
            active: '$color-action-primary-active',
            selected: '$color-action-primary-selected',
            loading: '$color-action-primary-loading',
          },
        },
        success: {
          backgroundColor: {
            _: '$color-action-success-normal',
            hover: '$color-action-success-hover',
            active: '$color-action-success-active',
            selected: '$color-action-success-selected',
            loading: '$color-action-success-loading',
          },
        },
        destructive: {
          backgroundColor: {
            _: '$color-action-destructive-normal',
            hover: '$color-action-destructive-hover',
            active: '$color-action-destructive-active',
            selected: '$color-action-destructive-selected',
            loading: '$color-action-destructive-loading',
          },
        },
      },
    },
    secondary: {
      backgroundColor: '$color-action-inverted-normal',
      ringInset: true,
      ring: '$border-width-small',
      ringColor: {
        _: '$color-action-outline-normal',
        hover: '$color-action-outline-hover',
        active: '$color-action-outline-active',
        selected: '$color-action-outline-selected',
      },
      intent: {
        none: {
          color: {
            _: '$color-action-neutral-normal',
            hover: '$color-action-neutral-hover',
            active: '$color-action-neutral-active',
            selected: '$color-action-neutral-selected',
          },
        },
        success: {
          color: {
            _: '$color-action-success-normal',
            hover: '$color-action-success-hover',
            active: '$color-action-success-active',
            selected: '$color-action-success-selected',
          },
        },
        destructive: {
          color: {
            _: '$color-action-destructive-normal',
            hover: '$color-action-destructive-hover',
            active: '$color-action-destructive-active',
            selected: '$color-action-destructive-selected',
          },
        },
      },
    },
    inverted: {
      intent: {
        none: {
          backgroundColor: {
            _: '$color-action-inverted-normal',
            hover: '$color-action-inverted-hover',
            active: '$color-action-inverted-active',
            selected: '$color-action-inverted-selected',
            loading: '$color-action-inverted-loading',
          },
          color: {
            _: '$color-action-neutral-normal',
            hover: '$color-action-neutral-hover',
            active: '$color-action-neutral-active',
            selected: '$color-action-neutral-selected',
          },
        },
      },
    },
  },
  size,
} satisfies DefaultButtonConfig;

const ghostButtonConfig = {
  ...commonConfig,
  borderRadius: '$border-radius-medium',
  backgroundColor: {
    _: 'transparent',
    hover: '$color-action-ghost-hover',
    active: '$color-action-ghost-active',
    selected: '$color-action-ghost-selected',
  },
  appearance: {
    primary: {
      intent: {
        none: {
          color: {
            _: '$color-action-primary-normal',
            hover: '$color-action-primary-hover',
            active: '$color-action-primary-active',
            selected: '$color-action-primary-selected',
          },
        },
        success: {
          color: {
            _: '$color-action-success-normal',
            hover: '$color-action-success-hover',
            active: '$color-action-success-active',
            selected: '$color-action-success-selected',
          },
        },
        destructive: {
          color: {
            _: '$color-action-destructive-normal',
            hover: '$color-action-destructive-hover',
            active: '$color-action-destructive-active',
            selected: '$color-action-destructive-selected',
          },
        },
      },
    },
    secondary: {
      intent: {
        none: {
          color: {
            _: '$color-action-neutral-normal',
            hover: '$color-action-neutral-hover',
            active: '$color-action-neutral-active',
            selected: '$color-action-neutral-selected',
          },
        },
      },
    },
    inverted: {
      intent: {
        none: {
          backgroundColor: {
            _: '$color-action-ghost-normal',
            hover: '$color-action-ghost-inverted-hover',
            active: '$color-action-ghost-inverted-active',
            selected: '$color-action-ghost-inverted-selected',
          },
          color: {
            _: '$color-action-inverted-normal',
            hover: '$color-action-inverted-hover',
            active: '$color-action-inverted-active',
            selected: '$color-action-inverted-selected',
          },
        },
      },
    },
    reverseInverted: {
      intent: {
        none: {
          color: {
            _: '$color-action-reverseInverted-normal',
            hover: '$color-action-reverseInverted-hover',
            active: '$color-action-reverseInverted-active',
            selected: '$color-action-reverseInverted-selected',
          },
        },
      },
    },
  },
  size,
} satisfies GhostButtonConfig;

const bareButtonConfig = {
  ...commonConfig,
  outlineOffset: 0,
  p: '$space-component-padding-2xSmall',
  backgroundColor: 'transparent',
  appearance: {
    primary: {
      intent: {
        none: {
          color: {
            _: '$color-action-primary-normal',
            hover: '$color-action-primary-hover',
            active: '$color-action-primary-active',
            selected: '$color-action-primary-selected',
          },
        },
        success: {
          color: {
            _: '$color-action-success-normal',
            hover: '$color-action-success-hover',
            active: '$color-action-success-active',
            selected: '$color-action-success-selected',
          },
        },
        destructive: {
          color: {
            _: '$color-action-destructive-normal',
            hover: '$color-action-destructive-hover',
            active: '$color-action-destructive-active',
            selected: '$color-action-destructive-selected',
          },
        },
      },
    },
    secondary: {
      intent: {
        none: {
          color: {
            _: '$color-action-neutral-normal',
            hover: '$color-action-neutral-hover',
            active: '$color-action-neutral-active',
            selected: '$color-action-neutral-selected',
          },
        },
      },
    },
    inverted: {
      intent: {
        none: {
          color: {
            _: '$color-action-inverted-normal',
            hover: '$color-action-inverted-hover',
            active: '$color-action-inverted-active',
            selected: '$color-action-inverted-selected',
          },
        },
      },
      textDecoration: 'underline',
    },
    reverseInverted: {
      intent: {
        none: {
          color: {
            _: '$color-action-reverseInverted-normal',
            hover: '$color-action-reverseInverted-hover',
            active: '$color-action-reverseInverted-active',
            selected: '$color-action-reverseInverted-selected',
          },
        },
      },
      textDecoration: 'underline',
    },
  },
  size: {
    medium: {
      text: '$typo-body-medium',
      hasDropdownIndicator: {},
      hasBeforeIcon: {},
      hasAfterIcon: {},
    },
    large: {
      text: '$typo-body-large',
      hasDropdownIndicator: {},
      hasBeforeIcon: {},
      hasAfterIcon: {},
    },
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
