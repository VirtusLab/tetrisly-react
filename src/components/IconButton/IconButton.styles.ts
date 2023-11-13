import { ButtonConfig } from '../Button/Button.styles';

const size = {
  small: {
    w: '$size-small',
    h: '$size-small',
    px: 'unset',
    hasDropdownIndicator: {
      w: '$size-xLarge',
      pr: 'unset',
    },
    hasBeforeIcon: {
      pl: 'unset',
    },
    hasAfterIcon: {
      pr: 'unset',
    },
  },
  medium: {
    w: '$size-medium',
    h: '$size-medium',
    px: 'unset',
    hasDropdownIndicator: {
      w: '$size-2xLarge',
      pr: 'unset',
    },
    hasBeforeIcon: {
      pl: 'unset',
    },
    hasAfterIcon: {
      pr: 'unset',
    },
  },
  large: {
    w: '$size-large',
    h: '$size-large',
    px: 'unset',
    hasDropdownIndicator: {
      h: '$size-3xLarge',
      pr: 'unset',
    },
    hasBeforeIcon: {
      pl: 'unset',
    },
    hasAfterIcon: {
      pr: 'unset',
    },
  },
};

const config = {
  p: '$space-component-padding-null',
  gap: '$space-component-gap-xSmall',
  borderRadius: '$border-radius-large',
};

export const defaultConfig = {
  default: {
    ...config,
    size,
  },
  ghost: {
    ...config,
    size,
  },
  bare: {
    ...config,
    size: {
      medium: {
        w: 'fit-content',
        h: 'fit-content',
      },
    },
  },
} satisfies ButtonConfig;
