// https://docs.expo.dev/guides/using-eslint/
module.exports = {
  env: {
    node: true, // Enables Node.js globals
    browser: true, // Enables browser globals if needed
    es2021: true, // Includes modern ECMAScript globals
  },
  globals: {
    __DEV__: "readonly", // Add this line to recognize __DEV__
  },
  extends: [
    "plugin:@typescript-eslint/recommended",
    "plugin:react/recommended",
    "plugin:react-native/all",
    "plugin:react/jsx-runtime",
    "prettier",
  ],
  plugins: ["reactotron", "prettier"],
  rules: {
    "prettier/prettier": "error",
    // typescript-eslint
    "@typescript-eslint/array-type": 0,
    "@typescript-eslint/ban-ts-comment": 0,
    "@typescript-eslint/no-explicit-any": 0,
    "@typescript-eslint/no-unused-vars": [
      "error",
      {
        argsIgnorePattern: "^_",
        varsIgnorePattern: "^_",
      },
    ],
    "@typescript-eslint/no-var-requires": 0,
    // eslint
    "no-use-before-define": 0,
    // react
    "react/prop-types": 0,
    // react-native
    "react-native/no-raw-text": 0,
    // reactotron
    "reactotron/no-tron-in-production": "error",
    // eslint-config-standard overrides
    "comma-dangle": 0,
    "no-global-assign": 0,
    "quotes": 0,
    "space-before-function-paren": 0,
    "no-undef": "error", //check func/var use but not import
    "react-native/no-unused-styles": 0,
  },
  settings: {
    react: {
      version: "detect",
    },
  },
}
