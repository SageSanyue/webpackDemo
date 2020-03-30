const webpack = require('webpack');
const path = require('path')

const vendors = ['react', 'react-dom'];

module.exports = {
    mode: 'production',
    entry: {
        // 定义程序中打包公共文件的入口文件vendor.js
        vendor: vendors
    },
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: '[name].[chunkhash].dll.js',
        library: '[name]_[chunkhash]'
    },
    plugins: [
        new webpack.DllPlugin({
            path: 'manifest.json',
            name: '[name]_[chunkhash]',
            context: __dirname
        })
    ]
};
