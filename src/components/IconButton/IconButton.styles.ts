import { ButtonConfig } from '../Button/Button.styles';

const size = {
  small: {
    w: 'small',
    h: 'small',
    px: 'unset',
    hasDropdownIndicator: {
      w: 'xLarge',
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
    w: 'medium',
    h: 'medium',
    px: 'unset',
    hasDropdownIndicator: {
      w: '2xLarge',
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
    w: 'large',
    h: 'large',
    px: 'unset',
    hasDropdownIndicator: {
      h: '3xLarge',
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
  p: 'component-padding-null',
  gap: 'component-gap-xSmall',
  borderRadius: 'large',
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
      medium: size.medium,
      large: size.medium,
    },
  },
} satisfies ButtonConfig;
