import type { Preview } from "@storybook/react";

import { createGlobalStyle, ThemeProvider } from "styled-components";
import { withThemeFromJSXProvider } from "@storybook/addon-styling";
import { TetrislyProvider } from "../src/theme/TetrislyProvider";
import { GlobalStyles } from "../src/theme/GlobalStyles.styled";

/* TODO: update import for your custom theme configurations */
// import { lightTheme, darkTheme } from '../path/to/themes';

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },

  decorators: [
    // Adds global styles and theme switching support.
    withThemeFromJSXProvider({
      /* Uncomment for theme switching support */
      // themes: {
      //   light: lightTheme,
      //   dark: darkTheme,
      // }
      // defaultTheme: 'light',
      Provider: TetrislyProvider,
      GlobalStyles,
    }),
  ],
};

export default preview;
