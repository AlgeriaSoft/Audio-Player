let path = require('path'),
    webpack = require('webpack'),
    ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    context: __dirname,
    entry: {
        'app.min.js': './assets-dev/scripts/App_Events.js'
    },
    output: {
        path: path.join(__dirname, 'assets'),
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
                use: {
                    loader: 'css-loader',
                    options: {
                        minimize: true,
                        sourceMap: true
                    }
                }
            })
        }, {
            test: /\.(jpe?g|png|gif|svg|mp3|mp4|eot|ijmap|ttf|woff|woff2)$/i,
            loader: 'file-loader',
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
            'process.env': {
                'NODE_ENV': JSON.stringify('production')
            }
        }),
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery',
            'window.$': 'jquery',
            'window.jQuery': 'jquery',
            'Hammer': 'hammerjs/hammer'
        }),
        new ExtractTextPlugin('app.min.css'),
        new webpack.optimize.MinChunkSizePlugin({}),
        new webpack.optimize.UglifyJsPlugin({
            mangle: false,
            // compress: {
            //     comment: false
            // },
            sourceMap: true,
            comments: false
        })
    ]
};
