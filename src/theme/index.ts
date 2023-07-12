import { theme as defaultTheme } from './theme';

const ringWidths = defaultTheme.borderWidths;

const themeExtension = {
  screens: {
    _: 0,
    xs: 0,
    sm: 640,
    md: 768,
    lg: 1024,
    xl: 1280,
    '2xl': 1536,
  },
  states: {
    _: null,
    motionSafe: '@media (prefers-reduced-motion: no-preference)',
    motionReduce: '@media (prefers-reduced-motion: reduce)',
    first: '&:first-child',
    last: '&:last-child',
    odd: '&:odd',
    even: '&:even',
    visited: '&:visited',
    checked: '&:checked',
    focusWithin: '&:focus-within',
    hover: '&:hover',
    focus: '&:focus',
    focusVisible: '&:focus-visible',
    active: '&:active',
    placeholder: '&::placeholder',
    disabled: '&:disabled, &[aria-disabled=true], &[data-state="disabled"]',
    selected: '&[data-state="selected"]',
    loading: '&[data-state="loading"]',
    alert: '&:invalid, &[data-state="alert"]',
  },
  ringWidths,
};

export const theme = {
  ...themeExtension,
  ...defaultTheme,
};

export type Theme = typeof theme;
