import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";

export default defineConfig([
  ...nextVitals,
  ...nextTs,
  {
    // Node build and QA scripts: CommonJS is used where Playwright is loaded, and gate checks use ternary statements.
    files: ["scripts/**/*.{js,mjs,cjs}"],
    rules: {
      "@typescript-eslint/no-require-imports": "off",
      "@typescript-eslint/no-unused-expressions": ["error", { allowTernary: true }],
    },
  },
  globalIgnores([".next/**", "out/**", "node_modules/**", "next-env.d.ts", "scripts/apps-script/**", ".qa/**"]),
]);
