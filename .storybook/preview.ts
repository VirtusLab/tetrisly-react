import type { Preview } from "@storybook/react";

import { withThemeFromJSXProvider } from "@storybook/addon-styling";
import { TetrislyProvider } from "../src/tetrisly/TetrislyProvider";

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
    withThemeFromJSXProvider({
      Provider: TetrislyProvider,
    }),
  ],
};

export default preview;
