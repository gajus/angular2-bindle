var webpack = require('webpack');

module.exports = {
    // devtool: 'source-map',
    // devtool: 'eval-source-map',
    debug: true,
    devServer: {
        contentBase: __dirname + '/src/endpoint',
        colors: true,
        noInfo: true,
        host: '127.0.0.1',
        port: 8000,
        // inline: true,
        // hot: true,
        // This does _not_ add the `HotModuleReplacementPlugin` like the CLI option does.
        publicPath: '/static/',
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
        path: __dirname + '/src/endpoint/static',
        filename: '[name].js'
    },
    plugins: [
        // https://github.com/webpack/docs/wiki/optimization#deduplication
        new webpack.optimize.DedupePlugin(),
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
                    stage: 0
                }
            }
        ]
    }
};
