const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  entry: {
    app: "./src/app/app.js"
  },
  output: {
    filename: "[name].js",
    path: path.resolve(__dirname, "dist")
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "My App",
      template: "./src/app/app.html"
    }),
    new MiniCssExtractPlugin({
      filename: "[name].css",
      chunkFilename: "[id].css"
  })
  ],
  devtool: "source-map",
  module: {
    rules: [
      { 
        test: /\.js$/, exclude: /node_modules/, loader: "babel-loader"
      },
      {
        test: /\.scss$/,
        use: [{
            loader: "style-loader", options: {
                sourceMap: true
            }
        }, {
            loader: "css-loader", options: {
                sourceMap: true
            }
        }, {
            loader: "sass-loader", options: {
                sourceMap: true
            }
        },
        {
          loader: 'postcss-loader'
        }
    ]},
    {
      test: /\.css$/,
      use: ['style-loader', 'postcss-loader'],
    },
    ]}
  }
