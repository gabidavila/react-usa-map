const ESLintWebpackPlugin = require('eslint-webpack-plugin');
const path = require('path');
const TerserPlugin = require('terser-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: [/node_modules/],
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              ['@babel/preset-env', { targets: 'defaults', modules: "auto" }],
              ['@babel/preset-react'],
            ],
            plugins: [
              ['@babel/plugin-transform-runtime']
            ],
          },
        },
      },
    ],
  },
  optimization: {
    minimize: true,
    minimizer: [new TerserPlugin()],
  },
  plugins: [
    new ESLintWebpackPlugin({
      eslintPath: 'eslint',
      extensions: ['js', 'jsx'],
      exclude: ['node_modules'],
    }),
  ],
  output: {
    filename: 'index.js',
    path: path.resolve(__dirname, 'dist'),
  },
};
