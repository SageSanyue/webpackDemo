const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    mode: 'development',
    entry: {
        'index': './src/entry/index.js',
        'list': './src/entry/list.js',
        'detail': './src/entry/detail.js'
    },
    output: {
        filename: '[name].[hash].js',
        path: path.resolve(__dirname, 'dist')
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './template/index.html',
            filename: 'index.html',
            chunks: ['index']
        }),
        new HtmlWebpackPlugin({
            template: './template/list.html',
            filename: 'list.html',
            chunks: ['list']
        }),
        new HtmlWebpackPlugin({
            template: './template/detail.html',
            filename: 'detail.html',
            chunks: ['detail']
        })
    ],
    module: {
        rules: [{
            test: /\.js$/,
            exclude: /node_modules/,
            loader: 'babel-loader',
            options: {
                presets: ['@babel/preset-env']
            }
        }]
    }
}
