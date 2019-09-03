
module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 2018,
    sourceType: 'module'
  },
  extends: [
    'standard' // Out of the box StandardJS rules
  ],
  plugins: [
    'react',
    '@typescript-eslint' // Let's us override rules below.
  ],
  env: {
    browser: true,
    es6: true,
    node: true,
    jest: true
  },
  rules: {   
    'react/jsx-uses-react': 'error',   
    'react/jsx-uses-vars': 'error' 
  }
}
