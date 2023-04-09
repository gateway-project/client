module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es2021: true,
    node: true,
  },
  extends: ["airbnb", "airbnb/hooks", "plugin:prettier/recommended"],
  overrides: [],
  plugins: ["prettier"],
  parserOptions: {
    ecmaVersion: "latest",
  },
  rules: {
    "new-cap": "off",
  },
  ignorePatterns: ["!.eslintrc.js", "!.prettierrc.json"],
};
