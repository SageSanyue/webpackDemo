const {getEntry, getHtmlWebpackPlugins} = require('./utils');
const path = require('path')

module.exports = {
    mode: 'development',
    entry: getEntry(),
    plugins: [
        //...
        ...getHtmlWebpackPlugins()
    ],
    output: {
        filename: '[name].[hash].js',
        path: path.resolve(__dirname, 'dist')
    },
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
};
