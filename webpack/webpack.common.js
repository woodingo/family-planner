const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const webpack = require('webpack');
const tsPathsConfig = require('../paths.json');
const FaviconsWebpackPlugin = require('favicons-webpack-plugin');

// Aliases

const alias = {};
Object.keys(tsPathsConfig.compilerOptions.paths).forEach((key) => {
  const pathName = key.replace('/*', '');
  alias[pathName] = path.resolve(
    __dirname,
    `../src/${pathName.replace('@', '')}/`,
  );
});

// Plugins

const htmlPlugin = new HtmlWebpackPlugin({
  template: './public/index.html',
});
const providePlugin = new webpack.ProvidePlugin({
  process: 'process/browser',
});
const faviconsPlugin = new FaviconsWebpackPlugin({
  logo: './public/icon.svg',
  manifest: './public/manifest.json',
  inject: true,
});

// Rules

const filesRule = {
  test: /\.png|svg|jpg|gif$/,
  exclude: [/@ant-design/],
  use: [
    {
      loader: 'file-loader',
      options: {
        name: '[hash:base64:5].[ext]',
        outputPath: 'assets',
      },
    },
  ],
};

const mjsRule = {
  test: /\.m?js/,
  resolve: {
    fullySpecified: false,
  },
};

// Config

module.exports = {
  entry: './src/index.tsx',
  target: 'web',
  resolve: {
    modules: [__dirname, 'src', 'node_modules'],
    extensions: ['*', '.js', '.jsx', '.tsx', '.ts'],
    alias,
    fallback: { util: false },
  },
  output: {
    path: path.resolve(__dirname, '../build'),
    clean: true,
    publicPath: '/',
  },
  plugins: [htmlPlugin, faviconsPlugin, providePlugin],
  module: {
    rules: [filesRule, mjsRule],
  },
};
