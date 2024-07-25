module.exports = {
  root: true,
  extends: ["@repo/eslint-config/astro.js"],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    project: true,
  },
};
