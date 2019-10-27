module.exports = {
  "env": {
    "browser": true,
    "commonjs": true,
    "es6": true
  },
  "extends": "airbnb-base",
  "globals": {
    "Atomics": "readonly",
    "SharedArrayBuffer": "readonly"
  },
  "parserOptions": {
    "ecmaVersion": 2018,
    "sourceType": "module"
  },
  "rules": {
    "no-underscore-dangle": ['error', { 'allow': ['_shadowRoot', '_onSubmit', '_onKeyPress'] }],
    "no-restricted-syntax": ["error", "ForInStatement", "LabeledStatement", "WithStatement"],
    "prefer-template": 1,
    "object-shorthand": 1,
    "no-restricted-globals": 1,
    "no-plusplus": 0,
    "semi": 1,
    "default-case": 1,
    "no-case-declarations": 1
  }
};
