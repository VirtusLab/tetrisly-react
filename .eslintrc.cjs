module.exports = {
  extends: [
    'plugin:storybook/recommended',
    '@virtuslab/eslint-config-tetrisly',
  ],
  ignorePatterns: ['examples/**/*'],
  rules: {
    '@typescript-eslint/no-use-before-define': 'off',
    'react/prop-types': 'off',
  },
};
