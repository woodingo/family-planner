const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');
const webpack = require('webpack');
const commonConfig = require('./webpack.common');
const { merge } = require('webpack-merge');
const path = require('path');

const mode = 'development';

// Loaders

const cssLoader = {
  loader: 'css-loader',
  options: {
    sourceMap: true,
    modules: {
      localIdentName: '[local]___[hash:base64:5]',
    },
  },
};

// Dev Server Config

const devServer = {
  hot: true,
  historyApiFallback: true,
  https: false,
  port: 8080,
  open: true,
};

// Rules

const tsRule = {
  test: /\.ts$|tsx/,
  exclude: /node_modules/,
  loader: require.resolve('babel-loader'),
  options: {
    plugins: [require.resolve('react-refresh/babel')].filter(Boolean),
  },
};

const cssModuleRule = {
  test: /\.module\.css$/,
  use: ['style-loader', cssLoader],
  exclude: /\.css$/,
};

const cssRule = {
  test: /\.css$/,
  use: ['style-loader', 'css-loader'],
};

// Plugins

const hotReplacePlugin = new webpack.HotModuleReplacementPlugin();
const reactRefreshPlugin = new ReactRefreshWebpackPlugin();
const definePlugin = new webpack.DefinePlugin({
  'process.env.NODE_ENV': JSON.stringify(mode),
});

// Config

const devConfig = {
  mode,
  stats: 'minimal',
  devtool: 'source-map',
  output: {
    filename: '[name].js',
  },
  devServer,
  plugins: [
    // analizerPlugin,
    hotReplacePlugin,
    reactRefreshPlugin,
    definePlugin,
  ],
  module: {
    rules: [tsRule, cssRule, cssModuleRule],
  },
};

module.exports = merge([commonConfig, devConfig]);
