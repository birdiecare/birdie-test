/* eslint-disable import/no-extraneous-dependencies */
const babelOptions = {
  presets: ['@babel/env', '@babel/react', 'babel-preset-gatsby'],
};

module.exports = require('babel-jest').createTransformer(babelOptions);
