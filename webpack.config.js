const webpack = require("webpack");
const HtmlWebPackPlugin = require("html-webpack-plugin");
const path = require('path');

module.exports = {
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: "html-loader",
          },
        ],
      },
      {
        test: /\.js$/,
        enforce: "pre",
        use: ["source-map-loader"],
      },
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(png|svg|jpg|gif|jpeg)$/,
        use: ["file-loader"],
      }
    ],
  },
  resolve: {
    alias: {
        components: path.resolve(__dirname, 'src/components/'),
        assets: path.resolve(__dirname, 'src/assets/'),
        store: path.resolve(__dirname, 'src/store/store.js'),
        helpers: path.resolve(__dirname, 'src/utils/helpers')
    }
  },
  devtool: false,
  devServer: {
    historyApiFallback: true,
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: "./public/index.html",
      filename: "./index.html",
    }),
    new webpack.SourceMapDevToolPlugin({}),
  ],
};
