const path = require("path");
const webpack = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin')
const VueLoaderPlugin = require('vue-loader/lib/plugin')

module.exports = {
    entry: path.join(__dirname, "assets", "app.js"),
    module: {
        rules: [
          {
            test: /\.vue$/,
            loader: 'vue-loader'
          },
          {
            test: /\.(js|jsx)$/,
            exclude: /node_modules/,
            use: {
              loader: "babel-loader"
            }
          },
          {
            test: /\.sass$/,
            use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader']
          }
        ]
    },
    resolve: {
        extensions: ['*', '.js', '.jsx', 'vue']
    },
    output: {
        path: path.join(__dirname, "public"),
        filename: "bundle.js",
        publicPath: "/"
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new MiniCssExtractPlugin({ filename: "bundle.css" }),
        new CopyWebpackPlugin([{ from: 'assets/images', to: 'images' }]),
        new VueLoaderPlugin()
    ],
    devServer: {
        hot: true,
        historyApiFallback: true,
        inline: true
    }
};
