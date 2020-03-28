const path = require('path')
const HTMLPlugin = require('html-webpack-plugin')

module.exports = {
    mode: 'development',
    entry: './src/index.js',
    resolve: {
        alias: {
            '@assets': path.resolve(__dirname, './src/assets')
        }
    },
    module: {
        rules: [
            {
                test: /\.html$/,
                use: ['html-loader']
            },
            {
                test: /\.css$/,
                use: [
                    'style-loader', 
                    'css-loader'
                ]
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: {
                    loader: 'url-loader',
                    options: {
                        limit: 3*1024
                    }
                }
            }
        ]
    },
    plugins: [
        new HTMLPlugin({
            template: './src/index.html'
        })
    ]
}
