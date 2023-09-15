import { create } from '@storybook/theming/create';

const STORYBOOK_HOST = process?.env?.STORYBOOK_HOST;

export default create({
  base: 'light',
  colorPrimary: '#272E35',
  colorSecondary: '#272E35',

  // Typography
  fontBase: '"Inter", sans-serif',

  // Branding
  brandTitle: 'Tetrisly - React Components',
  brandImage: `${STORYBOOK_HOST ? '/' + STORYBOOK_HOST : ''}/logo.svg`,

  // UI
  appBg: '#ffffff',
  appContentBg: '#ffffff',
  appBorderColor: '#EAEDF0',
  appBorderRadius: 8,

  // Text colors
  textColor: '#272E35',
  textInverseColor: '#ffffff',

  // Form colors
  inputBg: '#ffffff',
  inputBorder: '#CFD6DD',
  inputTextColor: '#272E35',
  inputBorderRadius: 8,
});
