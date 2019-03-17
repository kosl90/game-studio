const path = require('path');
const ForkTsCheckerPlugin = require('fork-ts-checker-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  // use development as default, use `yarn build:electron -p` for production
  mode: 'development',
  context: path.resolve(__dirname, 'src'),
  entry: {
    index: './index.ts',
  },
  output: {
    path: path.resolve(__dirname, 'app', 'dist'),
    filename: '[name].[hash].js',
  },
  target: 'electron-renderer',
  resolve: {
    extensions: ['.ts', '.tsx'],
  },
  module: {
    rules: [
      {
        test: /\.ts$|\.js$/,
        exclude: /node_modules/,
        use: [
          'cache-loader',
          'thread-loader',
          'babel-loader',
        ],
      }
    ],
  },
  plugins: [
    new ForkTsCheckerPlugin({
                            tslint: path.resolve(__dirname, 'tslint.json'),
    }),
    new HtmlWebpackPlugin({
                          template: 'index.html',
                          inject: true,
    }),
  ],
};
