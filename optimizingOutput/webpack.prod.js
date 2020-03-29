const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const webpack = require('webpack')
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = {
    mode: 'production',
    entry: {
        app: './src/index.js'
    },
    output: {
        filename: '[name].[chunkHash:8].js', // 打包代码时，加上 hash 戳
        chunkFilename: '[name].[chunkHash:8].js', // 指定分离出来的代码文件的名称
        path: path.resolve(__dirname, 'dist')
        // publicPath: 'http://cdn.abc.com'  // 修改所有静态文件 url 的前缀（如 cdn 域名），这里暂时用不到
    },
    module: {
        rules: [
            // js
            {
                test: /\.js$/,
                loader: ['babel-loader'],
                exclude: /node_modules/
            },
            // 抽离 css
            {
                test: /\.css$/,
                loader: [
                    MiniCssExtractPlugin.loader,  // 注意，这里不再用 style-loader
                    'css-loader'
                ]
            },
            // 抽离 less
            {
                test: /\.less$/,
                loader: [
                    MiniCssExtractPlugin.loader,  // 注意，这里不再用 style-loader
                    'css-loader',
                    'less-loader'
                ]
            }
        ]
    },
    plugins: [
        new BundleAnalyzerPlugin(),
        // 抽离 css 文件
        new MiniCssExtractPlugin({
            filename: '[name].[contentHash:8].css',
            chunkFilename: '[id].css'
        }),
        new HtmlWebpackPlugin({
            template: './src/index.html',
            filename: 'index.html'
        }),
        // new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/)
        // 配置的参数第一个是匹配引入模块路径的正则表达式，第二个是匹配模块的对应上下文即所在目录名。
    ]
}
