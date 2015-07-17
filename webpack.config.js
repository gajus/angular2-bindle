var webpack = require('webpack');

module.exports = {
    // devtool: 'source-map',
    // devtool: 'eval-source-map',
    debug: true,
    devServer: {
        inline: true,
        colors: true,
    },
    context: __dirname + '/src',
    entry: {
        app: [
            'es6-shim',
            'reflect-metadata',
            './app/app'
        ]
    },
    output: {
        path: __dirname + '/endpoint/static',
        filename: '[name].js'
    },
    plugins: [
        new webpack.NoErrorsPlugin()
    ],
    alias: {
        'angular2': 'angular2/es6/dev'
    },
    module: {
        loaders: [
            {
                test: /\.html$/,
                loader: 'html'
            },
            {
                test: /\.scss$/,
                loaders: [
                    'to-string',
                    'css',
                    'sass'
                ]
            },
            {
                test: /\.js$/,
                exclude: [
                    /node_modules/
                ],
                loader: 'babel',
                query: {
                    // optional: ['runtime'],
                    stage: 0
                }
            }
        ]
    }
};
