module.exports = {
    parser: 'babel-eslint',
    extends: ['prettier'],
    plugins: ['react', 'prettier'], // activating eslint-plugin-prettier (--fix stuff)
    rules: {
      'prettier/prettier': [
        // customizing prettier rules
        'error',
        {
          singleQuote: true
        }
      ],
      eqeqeq: ['error', 'always'], // adding some custom ESLint rules
      'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }]
    }
  };