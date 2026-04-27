/* eslint-disable no-undef */

const { FlatCompat } = require('@eslint/eslintrc');
const prettierConfig = require('eslint-config-prettier/flat');
const prettierPlugin = require('eslint-plugin-prettier/recommended');
const react = require('eslint-plugin-react');
const sonarjs = require('eslint-plugin-sonarjs');
const unicorn = require('eslint-plugin-unicorn');
const tseslint = require('typescript-eslint');

const compat = new FlatCompat({
  baseDirectory: __dirname
});

/** @type {import("eslint").Linter.Config} */
module.exports = tseslint.config(
  {
    ignores: ['.expo']
  },
  ...compat.config({
    /**
     * Under the hood 'expo' automatically configures:
     * - eslint-plugin-react-hooks
     */
    extends: ['expo']
  }),
  prettierConfig,
  prettierPlugin,
  sonarjs.configs.recommended,
  unicorn['default']['configs']['recommended'],
  {
    files: ['**/*.ts', '**/*.tsx'],
    ...react.configs.flat.recommended,
    languageOptions: {
      ...react.configs.flat.recommended.languageOptions
    }
  },
  {
    files: ['**/*.ts', '**/*.tsx'],
    extends: [
      ...tseslint.configs.strict,
      ...tseslint.configs.strictTypeChecked,
      ...tseslint.configs.stylistic,
      ...tseslint.configs.stylisticTypeChecked
    ],
    rules: {
      '@typescript-eslint/array-type': 'off',
      '@typescript-eslint/consistent-type-definitions': 'off',
      '@typescript-eslint/consistent-type-imports': [
        'warn',
        { prefer: 'type-imports', fixStyle: 'inline-type-imports' }
      ],
      '@typescript-eslint/no-unused-vars': ['warn', { argsIgnorePattern: '^_' }],
      '@typescript-eslint/require-await': 'off',
      '@typescript-eslint/no-misused-promises': [
        'error',
        { checksVoidReturn: { attributes: false } }
      ]
    }
  },
  {
    linterOptions: {
      reportUnusedDisableDirectives: true
    },
    languageOptions: {
      parserOptions: {
        projectService: true
      }
    }
  },
  {
    rules: {
      'unicorn/no-null': 'off',
      'unicorn/prevent-abbreviations': [
        'error',
        {
          allowList: {
            env: true
          }
        }
      ]
    }
  }
);
