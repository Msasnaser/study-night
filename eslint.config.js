import js from "@eslint/js";
import globals from "globals";

export default [
  js.configs.recommended,
  {
    languageOptions: {
      globals: {
        ...globals.browser,
      },
    },
    env: {
    browser: true,
    es2021: true,
    mocha: true,      // <--- هنا تضيف mocha environment
  },
  extends: [
    "eslint:recommended",
  ],
  parserOptions: {
    sourceType: "module",
  },
    rules: {
      "no-var": "error",
      "no-unused-vars": "warn",
      semi: ["error", "always"],
      "prefer-const": "error",
      "quotes": ["error", "double"],
    },
  },
];
