const eslintPluginNode = require('eslint-plugin-node');

module.exports = {
  root: true,
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: [
    'ember',
  ],
  extends: [
    'airbnb',
    'eslint:recommended',
    'plugin:ember/recommended',
  ],
  env: {
    browser: true,
  },
  rules: {
    'array-callback-return': ['off'],
    'func-names': ['off'],
    'import/no-extraneous-dependencies': ['off'],
    'import/no-unresolved': ['off'],
    'prefer-arrow-callback': ['off'],
    'prefer-object-spread': ['off'],
    'quote-props': ['off'],
    'space-before-function-paren': ['error', 'never'],
    'strict': ['off'],
  },
  overrides: [
    // node files
    {
      files: [
        '.eslintrc.js',
        '.template-lintrc.js',
        'ember-cli-build.js',
        'testem.js',
        'blueprints/*/index.js',
        'config/**/*.js',
        'lib/*/index.js',
        'server/**/*.js',
      ],
      parserOptions: {
        sourceType: 'script',
      },
      env: {
        browser: false,
        node: true,
      },
      plugins: ['node'],
      rules: Object.assign({}, eslintPluginNode.configs.recommended.rules, {
        // add your custom rules and overrides for node files here

        // this can be removed once the following is fixed
        // https://github.com/mysticatea/eslint-plugin-node/issues/77
        'node/no-unpublished-require': 'off',
      }),
    },
  ],
};
