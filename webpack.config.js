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
    context: __dirname + '/src',
    entry: {
        /*angular2: [
            'angular2/angular2',
            'angular2/router',
            'angular2/di',
            'angular2/src/facade/browser'
        ],*/
        app: [
            // Required ng2 dependencies
            'es6-shim',
            // 'zone.js/dist/long-stack-trace-zone.js',
            'zone.js',
            'reflect-metadata',

            // The app itself
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
    module: {
        loaders: [
            {
                test: /\.html$/,
                loader: 'html'
            },
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
