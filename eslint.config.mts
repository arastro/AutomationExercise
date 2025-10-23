import js from "@eslint/js";
import globals from "globals";
import tseslint from "typescript-eslint";
import playwright from "eslint-plugin-playwright";
import { defineConfig } from "eslint/config";

export default defineConfig([
  {
    files: ["**/*.{js,mjs,cjs,ts,mts,cts}"],
    extends: [js.configs.recommended],
    languageOptions: {
      globals: globals.node,
    },
  },
  ...tseslint.configs.recommended,

  {
    files: ["tests/**/*.ts", "test/**/*.ts", "playwright.config.ts"],
    plugins: {
      playwright,
    },
    languageOptions: {
      parserOptions: {
        project: "./tsconfig.json",
      },
    },
    rules: {
      // reglas Playwright (imprescindibles para QA)
      "playwright/no-focused-test": "error",     // no .only
      "playwright/no-conditional-in-test": "error",
      "playwright/no-conditional-expect": "error",

      // reglas TypeScript que ayudan con tests asíncronos y errores sutiles
      "@typescript-eslint/no-floating-promises": "error", // obliga a manejar promesas
      "@typescript-eslint/await-thenable": "error",       // asegura await correcto
      "@typescript-eslint/no-unused-vars": ["warn", { "argsIgnorePattern": "^_" }],
      "@typescript-eslint/naming-convention":"error",
      

      // reglas generales de calidad
      //"no-console": ["warn", { "allow": ["warn", "error"] }],
      "eqeqeq": "error",
      "prefer-const": "error",
      "no-var": "error",
      "max-params": ["warn", 4], // máximo 3 parámetros por función
      //"indent": ["error", 2]     // 2 espacios por nivel de indentación
    }
  }

]);
