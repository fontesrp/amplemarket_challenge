module.exports = {
  extends: ['@react-native-community'],
  plugins: ['import-helpers'],
  root: true,
  rules: {
    'arrow-parens': ['error', 'as-needed'],
    'brace-style': 'error',
    'comma-dangle': ['error', 'never'],
    'default-case': 'warn',
    'import-helpers/order-imports': [
      'warn',
      {
        alphabetize: { ignoreCase: true, order: 'asc' },
        groups: [
          '/^react(-native)?$/',
          'module',
          '/^src\\//',
          '/^~/',
          '/^react-shared/',
          ['parent', 'sibling', 'index']
        ],
        newlinesBetween: 'always'
      }
    ],
    'key-spacing': ['error', { afterColon: true, beforeColon: false, mode: 'strict' }],
    'new-cap': 'warn',
    'no-cond-assign': 'error',
    'no-console': 'warn',
    'no-constant-condition': 'error',
    'no-else-return': 'error',
    'no-empty': 'error',
    'no-extra-boolean-cast': 'error',
    'no-extra-parens': 'off',
    'no-inner-declarations': 'warn',
    'no-lonely-if': 'warn',
    'no-multi-spaces': 'error',
    'no-nested-ternary': 'error',
    'no-redeclare': 'error',
    'no-undef': 'warn',
    'no-undefined': 'off',
    'no-unused-expressions': ['error', { allowShortCircuit: true, allowTaggedTemplates: true }],
    'no-unused-vars': ['error', { argsIgnorePattern: '^_', ignoreRestSiblings: true }],
    'react/jsx-boolean-value': 'warn',
    'react/jsx-sort-props': ['warn', { ignoreCase: true }],
    'react/jsx-wrap-multilines': 'warn',
    'react/no-did-mount-set-state': 'off',
    'react/no-did-update-set-state': 'off',
    'react/prop-types': 'warn',
    semi: ['error', 'never'],
    'sort-keys': ['warn', 'asc', { caseSensitive: false, natural: true }]
  },
  settings: {
    react: {
      version: 'latest'
    }
  }
}
