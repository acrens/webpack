var webpack = require('webpack')

module.exports = {
    entry: './js/index.js',
    output: {
        path: __dirname,
        filename: './dist/bundle.js'
    },
    module: {
        loaders: [
            { test: /\.css$/, loader: 'style!css' }
        ]
    }
}
