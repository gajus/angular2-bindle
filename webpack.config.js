var webpack = require('webpack');

module.exports = {
    devtool: 'source-map',
    debug: true,
    devServer: {
        inline: true,
        colors: true,
        // historyApiFallback: true,
        // contentBase: 'src/public',
        // publicPath: '/endpoint'
    },
    context: __dirname + '/src/app',
    entry: [
        'zone.js',
        'reflect-metadata',
        'es6-shim',
        './main',
    ],
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
