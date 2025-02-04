import js from '@eslint/js';
import globals from 'globals';
import react from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import prettier from 'eslint-plugin-prettier';

export default [
  {
    ignores: ['dist'], // Ignore build output
  },
  {
    files: ['**/*.{js,jsx}'],
    languageOptions: {
      ecmaVersion: 'latest', // Use the latest ECMAScript features
      parserOptions: {
        ecmaFeatures: { jsx: true },
        sourceType: 'module',
      },
      globals: globals.browser, // Browser globals like `window` and `document`
    },
    settings: {
      react: { version: 'detect' }, // Automatically detect the React version
    },
    plugins: {
      react,
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
      prettier, // Plugin to integrate Prettier
    },
    rules: {
      // Base JavaScript rules
      ...js.configs.recommended.rules,
      // React-specific rules
      ...react.configs.recommended.rules,
      ...react.configs['jsx-runtime'].rules,
      // React Hooks rules
      ...reactHooks.configs.recommended.rules,
      // Custom React rules
      'react/jsx-no-target-blank': 'off',
      'react-refresh/only-export-components': [
        'warn',
        { allowConstantExport: true },
      ],
      // Integrate Prettier: report formatting issues as ESLint errors
      'prettier/prettier': [
        'error',
        {
          // Prettier configuration options:
          singleQuote: true,
          semi: false,
          trailingComma: 'es5',
        },
      ],
    },
  },
];
