module.exports = {
  root: true,
  "env": {
      "browser": true,
      "es6": true,
      "node": true,
  },
  "extends": ["plugin:vue/essential", "eslint:recommended", "@vue/prettier"],
  "globals": {
      "Atomics": "readonly",
      "SharedArrayBuffer": "readonly"
  },
  "parserOptions": {
    "ecmaVersion": 2020,
    "sourceType": "module",
    "parser": "babel-eslint",

  },
  "plugins": [
    "vue"
  ],
  "rules": {
    "no-console": process.env.NODE_ENV === "production" ? "warn" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "warn" : "off",
    "prettier/prettier": ["error", { endOfLine: "auto" }],
  },
};
  