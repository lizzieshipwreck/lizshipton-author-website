const reactPlugin = require("eslint-plugin-react");
const globals = require("globals");

module.exports = [
  {
    // 1. Tell ESLint to check all JavaScript and React/JSX files
    files: ["**/*.{js,jsx,mjs,cjs}"],

    // 2. Load the React plugin engine
    plugins: {
      react: reactPlugin,
    },

    // 3. Define the environments (replaces the old 'env' block)
    languageOptions: {
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
      globals: {
        ...globals.browser,
        ...globals.node,
      },
    },

    // 4. Set up the exact rule triggers
    rules: {
      "no-unused-vars": "warn", // Highlights unused imports in yellow
      "react/jsx-key": "error", // Highlights missing list keys in red
    },

    // 5. Automatically look up your project's React version
    settings: {
      react: {
        version: "detect",
      },
    },
  },
];
