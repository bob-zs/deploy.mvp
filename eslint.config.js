module.exports = [
  {
    files: ["server/**/*.js", "src/**/*.js", "tests/**/*.js", "index.js"],
    plugins: {
      "eslint-plugin-react": require("eslint-plugin-react"),
      "eslint-plugin-jest": require("eslint-plugin-jest"),
      prettier: require("eslint-plugin-prettier"),
      import: require("eslint-plugin-import"),
    },
    languageOptions: {
      ecmaVersion: 2020,
      sourceType: "module",
      globals: {
        browser: true,
        node: true,
        "jest/globals": true,
      },
    },
    settings: {
      react: {
        version: "detect",
      },
    },
    rules: {
      "prettier/prettier": "error",
    },
  },
  {
    files: ["**/server/**/*.js"],
    rules: {
      "import/no-commonjs": "off",
      "no-restricted-syntax": [
        "error",
        {
          selector: "ImportDeclaration",
          message:
            "Use CommonJS syntax (require) instead of ES Modules (import) in server files.",
        },
      ],
    },
  },
  {
    files: ["**/src/**/*.js"],
    rules: {
      "import/no-commonjs": "error",
    },
  },
  {
    files: ["**/tests/**/*.js"],
  },
];
