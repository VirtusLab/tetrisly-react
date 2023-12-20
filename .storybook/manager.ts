declare global {
  interface Window {
    STORYBOOK_GA_ID: string;
  }
}

import { addons } from '@storybook/manager-api';

import lightTheme from './lightTheme';

addons.setConfig({
  theme: lightTheme,
});

window.STORYBOOK_GA_ID = 'G-3011WK9KYZ';
