module.exports = {
  extends: [
    'plugin:storybook/recommended',
    '@virtuslab/eslint-config-tetrisly',
  ],
  ignorePatterns: ['examples/**/*'],
  rules: {
    '@typescript-eslint/no-use-before-define': [
      2,
      {
        functions: false,
        typedefs: false,
      },
    ],
    'react/prop-types': 'off',
  },
};
