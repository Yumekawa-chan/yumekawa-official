import { FlatCompat } from '@eslint/eslintrc';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import eslintPluginPrettier from 'eslint-plugin-prettier';
import typescriptEslintPlugin from '@typescript-eslint/eslint-plugin';
import typescriptEslintParser from '@typescript-eslint/parser';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

export default [
  ...compat.extends('next/core-web-vitals', 'next', 'prettier'),
  {
    files: ['**/*.ts', '**/*.tsx', '**/*.js'],
    languageOptions: {
      parser: typescriptEslintParser,
      parserOptions: {
        ecmaVersion: 2020,
        sourceType: 'module',
      },
    },
    plugins: {
      prettier: eslintPluginPrettier,
      '@typescript-eslint': typescriptEslintPlugin,
    },
    rules: {
      'no-console': ['error', { allow: ['warn', 'error'] }],
      'no-unused-vars': [
        'error',
        { vars: 'all', args: 'after-used', ignoreRestSiblings: false },
      ],
      '@typescript-eslint/explicit-module-boundary-types': 'error',
      '@typescript-eslint/no-explicit-any': 'error',
      '@typescript-eslint/no-unused-vars': [
        'error',
        { vars: 'all', args: 'after-used', ignoreRestSiblings: false },
      ],
      '@typescript-eslint/no-var-requires': 'error',
      'react/react-in-jsx-scope': 'off',
      'react/prop-types': 'off',
      'react/display-name': 'off',
      'react/no-unescaped-entities': 'off',
      'prettier/prettier': 'error',
    },
  },
];
