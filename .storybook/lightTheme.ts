import { create } from '@storybook/theming/create';

export default create({
  base: 'light',
  colorPrimary: '#272E35',
  colorSecondary: '#272E35',

  // Typography
  fontBase: '"Inter", sans-serif',

  // Branding
  brandTitle: 'Tetrisly - React Components',
  brandUrl: 'https://tetrisly.com',
  brandImage: '/logo.svg',
  brandTarget: '_self',

  // UI
  appBg: '#ffffff',
  appContentBg: '#ffffff',
  appBorderColor: '#EAEDF0',
  appBorderRadius: 8,

  // Form colors
  inputBg: '#ffffff',
  inputBorder: '#CFD6DD',
  inputTextColor: '#272E35',
  inputBorderRadius: 8,
});
