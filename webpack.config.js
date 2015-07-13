var webpack = require('webpack');

module.exports = {
    debug: true,
    context: __dirname + '/src/app',
    entry: './main',
    output: {
        path: __dirname + '/endpoint/static',
        filename: 'main.js'
    },
    plugins: [
        new webpack.NoErrorsPlugin()
    ],
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel',
                query: {
                    // optional: ['runtime'],
                    stage: 0
                }
            }
        ]
    }
};
