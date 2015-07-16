var webpack = require('webpack');

module.exports = {
    // devtool: 'source-map',
    // devtool: 'eval-source-map',
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
        app: [
            'es6-shim',
            'zone.js',
            'reflect-metadata',
            './app/app'
        ]
    },
    output: {
        path: __dirname + '/endpoint/static',
        filename: '[name].js'
    },
    plugins: [
        /*new webpack.optimize.CommonsChunkPlugin({
            name: 'angular2',
            minChunks: Infinity,
        }),
        new webpack.optimize.CommonsChunkPlugin({
            name: 'common',
            filename: 'common.js'
        }),
        new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.optimize.DedupePlugin(),*/
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
