import { ButtonConfig } from '../Button/Button.styles';

const size = {
  small: {
    w: 'small',
    h: 'small',
    pl: 'unset',
    pr: 'unset',
    hasDropdownIndicator: {
      w: 'xLarge',
    },
  },
  medium: {
    w: 'medium',
    h: 'medium',
    pl: 'unset',
    pr: 'unset',
    hasDropdownIndicator: {
      w: '2xLarge',
    },
  },
  large: {
    w: 'large',
    h: 'large',
    pl: 'unset',
    pr: 'unset',
    hasDropdownIndicator: {
      h: '3xLarge',
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
