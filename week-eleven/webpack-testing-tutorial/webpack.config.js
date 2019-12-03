/** Generate HTML to serve my webpack bundles */
const HtmlWebPackPlugin = require("html-webpack-plugin");
/** Generate css as link tag in head for my webpack bundles */
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const htmlPlugin = new HtmlWebPackPlugin({
  template: "./src/index.html",
  filename: "./index.html"
});

module.exports = {
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              hmr: process.env.NODE_ENV === "development"
            }
          },
          "css-loader",
          "sass-loader"
        ]
      }
    ]
  },
  resolve: { extensions: [".js", ".ts"] },
  plugins: [htmlPlugin, new MiniCssExtractPlugin()]
};
