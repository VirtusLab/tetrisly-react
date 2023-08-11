module.exports = {
  extends: [
    'plugin:storybook/recommended',
    '@virtuslab/eslint-config-tetrisly',
  ],
  rules: {
    'no-use-before-define': [
      'error',
      {
        functions: false,
        classes: false,
        variables: false,
        typedefs: false,
      },
    ],
  },
};
