const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = (env) => {
  return {
    mode: "development",
    entry: {
      index: "./src/index.js",
    },
    output: {
      filename: "[name].bundle.js",
      path: path.resolve(__dirname, "public"),
      clean: true,
    },
    plugins: [
      new HtmlWebpackPlugin({
        title: "Hello Kitty",
        template: "./src/template.html",
        filename: "./public/index.html",
      }),
    ],
    devtool: "inline-source-map",
    devServer: {
      static: "./public",
      port: env.port,
    },
    module: {
      rules: [
        {
          test: /\.(js)$/,
          exclude: /node_modules/,
          use: ["babel-loader"],
        },
      ],
    },
  };
};
