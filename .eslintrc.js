module.exports = {
  extends: ['airbnb-base', 'plugin:react/recommended', 'react-app'],
  parserOptions: {
    ecmaVersion: 6,
    sourceType: 'module',
  },
  parser: 'babel-eslint',
  env: {
    es6: true,
    node: true,
    browser: true,
  },
  globals: {
    __PATH_PREFIX__: true,
    require: true,
    exports: true,
    module: true,
    jest: true,
    describe: true,
    test: true,
    expect: true,
    beforeEach: true,
    beforeAll: true,
    afterEach: true,
    afterAll: true,
    components: true,
  },
  rules: {
    'import/no-useless-path-segments': 'off',
    'import/prefer-default-export': 'off',
    camelcase: 'off',
    'no-console': 'off',
  },
  settings: {
    'import/resolver': {
      alias: [
        ['components', './src/components'],
        ['models', './src/models'],
        ['state', './src/state'],
        ['theme', './src/theme'],
        ['contexts', './src/contexts'],
        ['views', './src/views'],
      ],
    },
  },
};
