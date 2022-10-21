const webpack = require('webpack');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const commonConfig = require('./webpack.common');
const { merge } = require('webpack-merge');

const mode = 'production';

// Loaders

const cssLoader = {
  loader: 'css-loader',
  options: {
    sourceMap: false,
    modules: {
      localIdentName: '[hash:base64:5]',
    },
  },
};

// Rules

const tsRule = {
  test: /\.ts$|tsx/,
  exclude: /node_modules/,
  loader: require.resolve('babel-loader'),
  options: {},
};

const cssModulesRule = {
  test: /\.module\.css$/,
  use: [MiniCssExtractPlugin.loader, cssLoader],
};

const cssRule = {
  test: /\.css$/,
  use: [MiniCssExtractPlugin.loader, 'css-loader'],
};

// Plugins

const cssExtractPlugin = new MiniCssExtractPlugin({
  filename: 'styles/[name].css',
  ignoreOrder: true,
});

const definePlugin = new webpack.DefinePlugin({
  'process.env.NODE_ENV': JSON.stringify(mode),
});

// Config

const prodConfig = {
  mode,
  target: 'web',
  output: {
    filename: 'js/[hash].js',
  },
  optimization: {
    minimizer: [
      new UglifyJsPlugin({
        uglifyOptions: {
          output: {
            comments: false,
            beautify: false,
          },
        },
      }),
    ],
  },
  plugins: [cssExtractPlugin, definePlugin],
  module: {
    rules: [tsRule, cssModulesRule, cssRule],
  },
};

module.exports = merge([commonConfig, prodConfig]);
