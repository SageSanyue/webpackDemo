const postcssSprites = require('postcss-sprites')

module.exports = {
    plugins: [
        postcssSprites({
            spritePath: 'dist/sprite/'
        })
    ]
}