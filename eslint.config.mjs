import globals from "globals";
import pluginJs from "@eslint/js";
import pluginReact from "eslint-plugin-react";
import prettier from "eslint-config-prettier";

export default [
  // Backend (Node.js, CommonJS)
  {
    files: ["server/**/*.js"],
    languageOptions: {
      sourceType: "commonjs", // CommonJS for backend
      globals: globals.node,  // Node.js global variables
    },
    rules: {
      "no-console": "off", // Allow console logs in backend
      "no-unused-vars": "warn", // Warn on unused variables
      "no-undef": "error", // Error on undefined variables
      "semi": ["error", "always"], // Require semicolons
      "quotes": ["error", "double"], // Use double quotes for strings
    },
  },

  // Frontend (ECMAScript Modules and React)
  {
    files: ["src/**/*.js", "src/**/*.jsx"],
    languageOptions: {
      sourceType: "module",  // ECMAScript Modules for frontend
      globals: globals.browser,  // Browser global variables
    },
    rules: {
      "no-console": "warn", // Warn on console logs in frontend
      "no-unused-vars": "warn", // Warn on unused variables
      "no-undef": "error", // Error on undefined variables
      "semi": ["error", "always"], // Require semicolons
      "quotes": ["error", "single"], // Use single quotes for strings
    },
  },

  // General JS rules (applies to both backend and frontend)
  pluginJs.configs.recommended,

  // Prettier configuration to disable conflicting rules
  prettier,

  // React-specific rules (for JSX/React components)
  {
    files: ["src/**/*.jsx"],
    plugins: {
      react: pluginReact,
    },
    rules: {
      "react/jsx-uses-react": "off", // For React 17+
      "react/react-in-jsx-scope": "off", // For React 17+
      "react/prop-types": "off", // Turn off prop-types requirement
      "react/display-name": "off", // Turn off missing display name warnings
    },
  },
];
