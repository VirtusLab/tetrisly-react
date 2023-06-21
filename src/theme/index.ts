import { defaultTheme as xDefaultTheme } from "@xstyled/system";

import { theme as defaultTheme } from "./theme";
import { Theme as DefaultTheme } from "./Theme.interface";

const { screens, states } = xDefaultTheme;

const ringWidths = defaultTheme.borderWidths;

const themeExtension = {
  screens,
  states: {
    ...states,
    disabled: '&:disabled, &[aria-disabled=true], &[data-state="disabled"]',
    selected: '&[data-state="selected"]',
    loading: '&[data-state="loading"]',
    alert: '&:invalid, &[data-state="alert"]',
  },
  ringWidths,
};

export const theme: Theme = {
  ...themeExtension,
  ...defaultTheme,
};

export type Theme = DefaultTheme & typeof themeExtension;