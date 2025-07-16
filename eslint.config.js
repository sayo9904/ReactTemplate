import js from '@eslint/js';
import tseslint from 'typescript-eslint';
import pluginReactConfig from 'eslint-plugin-react/configs/recommended.js';

const commonConfig = {
  files: ['**/*.{js,jsx,ts,tsx}'],
  ignores: ['dist', 'node_modules', '.devcontainer'],
  languageOptions: {
    parserOptions: { ecmaFeatures: { jsx: true } },
    globals: { browser: true },
  },
};

const reactConfig = {
  files: ['**/*.{jsx,tsx}'],
  ...pluginReactConfig,
  rules: {
    ...pluginReactConfig.rules,
    'react/react-in-jsx-scope': 'off',
    'react/jsx-uses-react': 'off',
  },
  settings: { react: { version: 'detect' } },
};

export default [
  js.configs.recommended,
  ...tseslint.configs.recommended,
  reactConfig,
  commonConfig,
];
