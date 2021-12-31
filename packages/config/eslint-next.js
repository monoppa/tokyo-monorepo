module.exports = {
  extends: ["next", "next/core-web-vitals", "prettier"],
  plugins: ["@typescript-eslint"],
  settings: {
    next: {
      rootDir: ["apps/*/", "packages/*/"],
    },
  },
  rules: {
    "@next/next/no-img-element": 0,
    "no-html-link-for-pages": "off",
    "@typescript-eslint/no-explicit-any": 0,
    "@typescript-eslint/no-explicit-any": 0,
    "@typescript-eslint/no-unused-vars": [
      2,
      {
        argsIgnorePattern: "^_",
      },
    ],
    "no-console": [
      2,
      {
        allow: ["warn", "error"],
      },
    ],
  },
};
