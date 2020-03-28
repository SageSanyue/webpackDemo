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
                test: /\.(png|jpg|gif)$/,
                use: {
                    loader: 'url-loader',
                    options: {
                        limit: 2.5*1024
                    }
                }
            },
            {
                test: /\.svg$/,
                loader: 'svg-url-loader',
                options: {
                    // 小于 10kB(10240字节）的内联文件
                    limit: 10 * 1024,
                    // 移除 url 中的引号
                    // (在大多数情况下它们都不是必要的)
                    noquotes: true
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
