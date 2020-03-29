const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')

module.exports = {
    mode: 'production',
    entry: {
        main: './src/index.js'
    },
    output: {
        filename: '[name].[chunkHash:8].js',
        chunkFilename: '[name].[chunkHash:8].js',
        path: path.resolve(__dirname, 'output')
    },
    module: {
        // noParse: /node_modules\/(jquey\.js)/,
        rules: [
            {
                test: /\.js$/,
                loader: ['babel-loader'],
                exclude: /node_modules/
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html',
            filename: 'index.html'
        })
    ]
}