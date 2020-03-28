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
                test: /\.(gif|png|jpe?g|svg)$/i,
                use: [
                    'file-loader',
                    {
                      loader: 'image-webpack-loader',
                      options: {
                        // optipng.enabled: false will disable optipng
                        optipng: {
                          enabled: true,
                        },
                        pngquant: {
                          quality: [0.65, 0.90],
                          speed: 4
                        }
                      }
                    },
                  ],
              }
        ]
    },
    plugins: [
        new HTMLPlugin({
            template: './src/index.html'
        })
    ]
}
