const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
require("dotenv").config({ path: "./.env" });

const port = process.env.PORT || 3000;

module.exports = {
    mode: "development",
    entry: path.resolve(__dirname, "./src/index.js"),
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: ["babel-loader"],
            },
            {
                test: /\.css$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    "css-loader",
                    "postcss-loader",
                ],
            },
            {
                test: /\.(png|jpe?g|gif)$/i,
                loader: "file-loader",
                options: {
                    name: "[name].[ext]",
                },
            },
        ],
    },
    resolve: {
        extensions: ["*", ".js", ".jsx"],
    },
    output: {
        filename: "[name].[fullhash].js",
    },
    plugins: [
        new webpack.DefinePlugin({
            "process.env": {
                MODE: '"development"',
                VERSION: `'${process.env.npm_package_version}'`,
            },
        }),
        new MiniCssExtractPlugin({
            filename: "styles.css",
            chunkFilename: "styles.css",
        }),
        new webpack.HotModuleReplacementPlugin(),
        new HtmlWebpackPlugin({
            favicon: "./public/favicon.ico",
            template: "./public/index.html",
        }),
    ],
    devServer: {
        host: "localhost",
        port: port,
        historyApiFallback: true,
        open: true,
        hot: true,
    },
};
