let path = require('path'),
    webpack = require('webpack'),
    ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    context: __dirname,
    entry: {
        'app.min.js': './assets/scripts/App_Events.js'
    },
    output: {
        path: path.join(__dirname, 'assets/dist'),
        filename: '[name]'
    },
    module: {
        rules: [{
            test: /\.js$/,
            exclude: /(node_modules|bower_components)/,
            use: {
                loader: 'babel-loader',
                options: {
                    presets: ['latest', 'stage-3']
                }
            }
        }, {
            test: /\.css$/,
            use: ExtractTextPlugin.extract({
                // fallback: 'style-loader',
                use: {
                    loader: 'css-loader',
                    options: {
                        minimize: true
                    }
                }
            })
        }, {
            test: /\.(jpe?g|png|gif|svg|mp3|mp4|eot|ijmap|ttf|woff|woff2)$/i,
            loader: 'file-loader',
            // loader: 'file-loader?name=[path][name].[ext]',
            query: {
                useRelativePath: process.env.NODE_ENV === 'production'
            }
        }]
    },
    externals: [
        (function() {
            var IGNORES = [
                'fs',
                'path',
                'electron',
                'music-metadata'
            ];
            return function(context, request, callback) {
                if (IGNORES.indexOf(request) >= 0) {
                    return callback(null, `require('${request}')`);
                }
                return callback();
            };
        })()
    ],
    node: {
        __dirname: true
    },
    cache: false,
    devtool: 'source-map',
    plugins: [
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': '"production"'
        }),
        new ExtractTextPlugin('app.min.css'),
        new webpack.optimize.UglifyJsPlugin({
            mangle: false,
            sourceMap: true
        }),
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery',
            'window.$': 'jquery',
            'window.jQuery': 'jquery',
            'Hammer': 'hammerjs/hammer'
        })
    ]
};
