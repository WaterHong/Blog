const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const ModuleFederationPlugin = require("webpack").container
  .ModuleFederationPlugin;

module.exports = {
    entry: "./src/index",
    mode: "development",
    devServer: {
        contentBase: path.join(__dirname, "dist"),
        port: 3001,
    },
    output: {
        publicPath: "auto",
    },
    module: {
        rules: [
            {
                test: /\.m?js$/,
                type: "javascript/auto",
                resolve: {
                  fullySpecified: false,
                },
            },
            {
                test: /\.jsx?$/,
                loader: "babel-loader",
                exclude: /node_modules/,
                options: {
                  presets: ["@babel/preset-react"],
                },
            },
        ]
    },
    plugins: [
        new ModuleFederationPlugin({
          name: "app1",
          // adds react as shared module
          // version is inferred from package.json
          // there is no version check for the required version
          // so it will always use the higher version found
          shared: {
            react: {
              import: "react", // the "react" package will be used a provided and fallback module
              shareKey: "react", // under this name the shared module will be placed in the share scope
              shareScope: "default", // share scope with this name will be used
              singleton: true, // 仅允许共享单一版本
            },
            "react-dom": {
              singleton: true, // only a single version of the shared module is allowed
            },
          },
        }),
        new HtmlWebpackPlugin({
          template: "./src/index.html",
        }),
    ],
}