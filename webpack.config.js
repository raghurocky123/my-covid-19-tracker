var path = require("path");
var HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js"
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react"]
          }
        }
      },
      {
        test: /\.module.css$/,
        exclude: /node_modules/,
        use: ["style-loader", "css-loader"]
      },
      {
        test: /\.module.css$/,
        include: /node_modules/,
        use: ["style-loader", "css-loader"]
      },
      {
        test: /\.scss$/,
        exclude: /node_modules/,
        loaders: [
          require.resolve("style-loader"),
          require.resolve("css-loader"),
          require.resolve("sass-loader")
        ]
      },
      {
        enforce: "pre",
        test: /\.ts$/,
        exclude: [/node_modules/],
        use: [
          {
            loader: "eslint-loader",
            options: {
              emitError: true,
              emitWarning: true,
              extensions: [".js", ".jsx", ".vue", ".ts", ".tsx"]
            }
          }
        ]
      },
      {
        test: /\.(eot|png|gif|woff|woff2|svg|ttf|jpg)([\?]?.*)$/,
        loader: "file-loader"
      }
    ]
  },
  resolve: {
    extensions: [".js", ".jsx", ".scss",".html",".module.css"]
  },
  devServer: {
    historyApiFallback: true
  },
  mode: "development",
  plugins: [
    new HtmlWebpackPlugin({
      template: "./public/index.html"
    })
  ]
};