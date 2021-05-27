const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const ModuleFederationPlugin = require("webpack").container
  .ModuleFederationPlugin;

module.exports = {
    entry: "./src/index",
    mode: "development",
    devServer: {
        contentBase: path.join(__dirname, "dist"),
        port: 3002,
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
          name: "app2",
          library: { type: "var", name: "app2" },
          filename: "remoteEntry.js",
          exposes: {
            "./Button": "./src/Button",
          },
          shared: { react: { singleton: true }, "react-dom": { singleton: true } },
        }),
        new HtmlWebpackPlugin({
          template: "./src/index.html",
        }),
    ],
}