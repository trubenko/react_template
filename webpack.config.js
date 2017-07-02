const path = require("path");
const webpack = require('webpack');
const  HtmlWebpackPlugin = require('html-webpack-plugin');

const VENDORS = ["react","react-dom"];
module.exports = {
    entry: {
        index: "./index.js",
        vendor: VENDORS
    },
    output: {
        path: __dirname + '/dist',
        filename: '[name].[chunkhash].js'
    },
    module: {
        loaders: [
            {
                loader: 'babel-loader',
                exclude: path.join(__dirname, 'node_modules'),
                test: /\.js$/
            }
        ]
    },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin({
            name: ['vendor', 'manifest']
        }),
        new HtmlWebpackPlugin({
            template: './index.html'
        })
    ]
}