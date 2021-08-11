module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2018, // Allows for the parsing of modern ECMAScript features
    sourceType: 'module', // Allows for the use of imports
    ecmaFeatures: {
      jsx: true,
    },
  },
  plugins: ['@typescript-eslint', 'prettier', 'react', 'jsx-a11y'],
  env: {
    browser: true,
    node: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:jsx-a11y/recommended',
    'prettier',
  ],
  settings: {
    react: {
      version: 'detect',
    },
  },
  rules: {
    'react/prop-types': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    'prettier/prettier': [
      'error',
      {
        trailingComma: 'es5',
        semi: false,
        singleQuote: true,
        printWidth: 120,
      },
    ],
  },
  overrides: [
    // Override some TypeScript rules just for .js files
    {
      files: ['*.js'],
      rules: {
        '@typescript-eslint/no-var-requires': 'off', //
      },
    },
  ],
}
