module.exports = {
  env: {
    'jest/globals': true,
  },
  root: true,
  extends: ['@react-native-community', 'eslint:recommended'],
  plugins: ['jest', '@typescript-eslint'],
  rules: {
    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': 'off',
    semi: ['error', 'never'],
    'object-curly-spacing': ['error', 'always'],
    'array-bracket-spacing': ['error', 'never'],
    'react/require-default-props': ['error'],
    'react/default-props-match-prop-types': ['error'],
    'react/sort-prop-types': ['error'],
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': [
      'error',
      {
        additionalHooks: '(useStyle|useFlatStyle)',
      },
    ],
    'react/forbid-elements': [
      'error',
      {
        forbid: [
          {
            element: 'Text',
            message: 'Use <SuperText> from @/components/SuperText instead',
          },
        ],
      },
    ],
  },
  settings: {
    'import/resolver': {
      'babel-module': {},
    },
  },
}
