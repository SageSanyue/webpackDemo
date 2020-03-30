const path = require('path')
let HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    entry: './src/index.js',
    mode: 'development',
    output: { 
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    'style-loader', 
                    {
                        loader: 'css-loader',
                        options: {
                            modules: true
                        }
                    }
                ]
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            // 用哪个html作为模板
            // 在src目录下创建一个index.html页面当做模板来用
            template: 'index.html'
        })
    ]
}