/** @type {import('eslint').Linter.Config} */
module.exports = {
  extends: ["@remix-run/eslint-config", "@remix-run/eslint-config/node"],
  rules: {
    "eslint-disable-next-line": "jsx-a11y/anchor-is-valid",
  },
};
