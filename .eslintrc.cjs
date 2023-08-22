module.exports = {
  extends: [
    'plugin:storybook/recommended',
    '@virtuslab/eslint-config-tetrisly',
  ],
  rules: {
    '@typescript-eslint/no-use-before-define': [
      2,
      {
        functions: false,
        typedefs: false,
      },
    ],
  },
};
