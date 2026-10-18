import globals from "globals";
import js from "@eslint/js";
import eslintPluginJsonc from 'eslint-plugin-jsonc';
import tseslint from 'typescript-eslint';

export default tseslint.config(
  {
    ignores: ["node_modules/*", "docs/*", "themes/*", "resources/*", "static/*", "scripts/*"],
  },
  js.configs.recommended,
  {
    languageOptions: {
        globals: {
            ...globals.browser,
            ...globals.node,
        },

        ecmaVersion: 12,
        sourceType: "module",
    },
    rules: {
        "no-unused-vars": 1,
        "no-prototype-builtins": 0,
    },
  },
  ...tseslint.configs.recommended,
  {
    files: ["**/*.ts"],
    languageOptions: {
        globals: {
            ...globals.browser,
        },
    },
    rules: {
        "@typescript-eslint/no-unused-vars": [1, {
            "argsIgnorePattern": "^_",
            "varsIgnorePattern": "^_",
        }],
        "@typescript-eslint/no-explicit-any": 1,
        "no-unassigned-vars": 1,
    },
  },
  ...eslintPluginJsonc.configs["flat/recommended-with-jsonc"].map(config => ({
    ...config,
    files: ["**/*.gjson", "**/*.geojson", "test-urls.json"],
  }))
);
