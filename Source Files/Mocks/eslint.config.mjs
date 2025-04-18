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
      "@typescript-eslint/no-namespace": ["warn", {}],
      "no-warning-comments": ["warn", {}],
      "no-irregular-whitespace": ["warn", {}],
      "no-console": ["warn", { allow: ["warn", "error"] }],
      "@typescript-eslint/ban-ts-comment": ["warn", { "ts-ignore": "allow-with-description" }]
    }
  },
  {
    ignores: ["dist/", "build/", "eslint.config.mjs", "vite.config.js", "postcss.config.js"]
  }
];
