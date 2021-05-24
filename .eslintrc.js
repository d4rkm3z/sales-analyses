const localePrettierConfig = require('./.prettierrc.js');

module.exports = {
  extends: ['react-app', 'react-app/jest', 'prettier'],
  plugins: ['simple-import-sort', 'prettier'],
  parserOptions: {
    sourceType: 'module',
  },
  rules: {
    'max-len': ['warn', { code: 80 }],
    'comma-dangle': 'off',
    'no-unused-vars': 'warn',
    'no-console': 'off',
    'simple-import-sort/imports': 'warn',
    'prettier/prettier': ['error', localePrettierConfig],
  },
  overrides: [
    {
      files: ['**/*.ts?(x)'],
      rules: {
        '@typescript-eslint/explicit-function-return-type': ['error'],
        '@typescript-eslint/naming-convention': [
          'error',
          {
            selector: 'interface',
            format: ['PascalCase'],
            custom: {
              regex: '^I[A-Z]',
              match: true,
            },
          },
        ],
        'simple-import-sort/imports': [
          'error',
          {
            groups: [
              [
                '^(assert|buffer|child_process|cluster|console|constants|crypto|dgram|dns|domain|events|fs|http|https|module|net|os|path|punycode|querystring|readline|repl|stream|string_decoder|sys|timers|tls|tty|url|util|vm|zlib|freelist|v8|process|async_hooks|http2|perf_hooks)(/.*|$)',
              ],
              ['^react', '^@?\\w'],
              ['^\\u0000'],
              ['^\\.\\.(?!/?$)', '^\\.\\./?$'],
              ['^\\./(?=.*/)(?!/?$)', '^\\.(?!/?$)', '^\\./?$'],
              ['^.+\\.s?css$'],
            ],
          },
        ],
      },
    },
  ],
};
