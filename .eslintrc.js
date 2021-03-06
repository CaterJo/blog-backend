module.exports = {
  env: {
    es6: true,
    node: true,
  },
  settings: { // 절대경로로 파일찾기.
    "import/resolver": {
      node: {paths: [path.resolve('./src')]}
    }
  },
  extends: [
    'airbnb-base',
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  rules: {
      "no-unused-vars": 1,
      "comma-dangle": 0,
      "eol-last":0,
      "no-console":0,
      "linebreak-style": 0,
      "indent": [0, 2]

  },
};
