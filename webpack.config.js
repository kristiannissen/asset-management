const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = (env) => {
  return {
    mode: "development",
    entry: {
      index: "./src/index.js",
    },
    output: {
      filename: "[name].bundle.js",
      path: path.resolve(__dirname, "./public"),
      clean: true,
        publicPath: "/"
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: "styles.css",
        }),
      new HtmlWebpackPlugin({
        hash: true,
        showErrors: true,
          filename: "index.html",
          template: "src/template.html"
      }),
    ],
    devtool: "inline-source-map",
    devServer: {
      static: {
          directory: path.resolve(__dirname, "./public")
      },
      port: env.port,
        compress: true,
        watchFiles: ["src/*"]
    },
    module: {
      rules: [
        {
          test: /\.(js)$/,
          exclude: /node_modules/,
          use: ["babel-loader"],
        },
          {
            test: /\.css$/,
              use: [
                "css-loader", "postcss-loader",
              ]
          }
      ],
    },
  };
};
