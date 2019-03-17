const path = require('path');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
  // use development as default, use `yarn build:ui -p` for production
  mode: 'development',
  entry: './app.ts',
  context: path.resolve(__dirname, 'electron'),
  output: {
    path: path.resolve(__dirname, 'app'),
  },
  target: 'electron-main',
  module: {
    rules: [
      {
        test: /\.ts$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'ts-loader',
            options: {
              configFile: 'tsconfig.json',
            }
          },
        ]
      }
    ]
  },
  plugins: [
    new CopyPlugin([
      path.resolve(__dirname, 'package.json'),
    ]),
  ],
}
