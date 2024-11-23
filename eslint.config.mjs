import pluginJs from '@eslint/js';
import prettierConfig from 'eslint-config-prettier';
import noLoops from 'eslint-plugin-no-loops';
import prettier from 'eslint-plugin-prettier';
import globals from 'globals';
import tseslint from 'typescript-eslint';

/** @type {import('eslint').Linter.Config[]} */
export default [
  { files: ['**/*.{js,mjs,cjs,ts}'] },
  { languageOptions: { globals: globals.browser } },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  prettierConfig,
  {
    plugins: { noLoops, prettier }
  },
  {
    ignores: ['node_modules', 'build']
  },
  {
    rules: {
      'no-console': 1,
      'noLoops/no-loops': 2,
      'prettier/prettier': 2
    }
  }
];
