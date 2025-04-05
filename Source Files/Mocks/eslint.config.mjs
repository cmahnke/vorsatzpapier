import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";

export default [
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  {
    languageOptions: { globals: globals.browser },
    rules: {
      "no-unused-vars": "off",
      "@typescript-eslint/no-unused-vars": ["warn", { vars: "all", args: "after-used", ignoreRestSiblings: false }],
      "no-warning-comments": ["warn", {}],
      "no-irregular-whitespace": ["warn", {}],
      "no-console": ["warn", {}]
    }
  },
  {
    ignores: ["dist/", "eslint.config.mjs", "vite.config.js", "postcss.config.js"]
  }
];
