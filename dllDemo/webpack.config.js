const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const AddAssetHtmlPlugin = require('add-asset-html-webpack-plugin')
const path = require('path')

module.exports = {
    output: {
        filename: '[name].[chunkhash].js'
    },
    entry: {
        app: './src/index.js'
    },
    plugins: [
        new webpack.DllReferencePlugin({
            context: __dirname,
            manifest: require('./manifest.json') // 这里导入 manifest配置内容
        }),
        new HtmlWebpackPlugin({
            template: './src/index.html',
            filename: 'index.html'
        }),
        new AddAssetHtmlPlugin({ filepath: path.resolve(__dirname, './dist/*.dll.js') }),
    ]
};
