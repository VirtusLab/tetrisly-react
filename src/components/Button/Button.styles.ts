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
    px: 'component-padding-medium',
    h: 'small',
    text: 'body-medium',
    hasDropdownIndicator: {
      pr: 'component-padding-small',
    },
    hasBeforeIcon: {
      pl: 'component-padding-small',
    },
    hasAfterIcon: {
      pr: 'component-padding-small',
    },
  },
  medium: {
    px: 'component-padding-large',
    h: 'medium',
    text: 'body-medium',
    hasDropdownIndicator: {
      pr: 'component-padding-medium',
    },
    hasBeforeIcon: {
      pl: 'component-padding-medium',
    },
    hasAfterIcon: {
      pr: 'component-padding-medium',
    },
  },
  large: {
    px: 'component-padding-large',
    h: 'large',
    text: 'body-large',
    hasDropdownIndicator: {
      pr: 'component-padding-medium',
    },
    hasBeforeIcon: {
      pl: 'component-padding-medium',
    },
    hasAfterIcon: {
      pr: 'component-padding-medium',
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
  gap: '100',
  w: 'fit-content',
  justifyContent: 'center',
  alignItems: 'center',
  textAlign: 'center',
  whiteSpace: 'nowrap',
  opacity: {
    disabled: 'disabled',
  },
  outline: {
    focus: 'solid',
  },
  outlineColor: {
    focus: 'interaction-focus-default',
  },
  outlineWidth: {
    focus: 'focus',
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
  borderRadius: 'medium',
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
  borderRadius: 'medium',
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
  size,
} satisfies GhostButtonConfig;

const bareButtonConfig = {
  ...commonConfig,
  outlineOffset: 0,
  p: 25,
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
    medium: {
      text: 'body-medium',
      hasDropdownIndicator: {},
      hasBeforeIcon: {},
      hasAfterIcon: {},
    },
    large: {
      text: 'body-large',
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
