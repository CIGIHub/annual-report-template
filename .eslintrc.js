'use strict';

module.exports = {
  root: true,
  parser: 'babel-eslint',
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
    ecmaFeatures: {
      legacyDecorators: true,
    },
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
  globals: {
    'FB': true,
    'Foundation': true,
    'nodes': true,
  },
  rules: {
    'array-callback-return': ['off'],
    'class-methods-use-this': ['off'],
    'ember/avoid-leaking-state-in-ember-objects': ['off'],
    'ember/jquery-ember-run': ['off'],
    'ember/no-jquery': ['off'],
    'ember/no-mixins': ['off'],
    'ember/no-new-mixins': ['off'],
    'ember/no-observers': ['off'],
    'ember/no-side-effects': ['off'],
    'func-names': ['off'],
    'import/extensions': ['off'],
    'import/no-extraneous-dependencies': ['off'],
    'import/no-unresolved': ['off'],
    'lines-between-class-members': ['off'],
    'no-await-in-loop': ['off'],
    'no-restricted-globals': ['off'],
    'no-restricted-syntax': ['off'],
    'no-underscore-dangle': ['off'],
    'prefer-arrow-callback': ['off'],
    'prefer-destructuring': ['off'],
    'prefer-object-spread': ['off'],
    'prefer-rest-params': ['off'],
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
      extends: ['plugin:node/recommended'],
      rules: {
        // this can be removed once the following is fixed
        // https://github.com/mysticatea/eslint-plugin-node/issues/77
        'node/no-unpublished-require': 'off',
      },
    },
  ],
};
