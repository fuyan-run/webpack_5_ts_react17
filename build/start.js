const webpack = require('webpack');
const merge = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const base = require('./base.js');
const CONF = require('./config/index.js');
const path = require('path');

const pathResolve = src => {
    return path.resolve(__dirname, src)
}
module.exports = merge(base, {
    mode: 'development',
    devtool: 'source-map',
    entry: [
        pathResolve('../src/start.js')
    ],
    output: {
        path: path.resolve(__dirname, '../dist'),
        filename: 'index.js',
        chunkFilename: 'index.js'
    },
    devServer: {
        static: path.resolve(__dirname, 'dist'),
        // port: CONF.port,
        hot: true,
        historyApiFallback: {
            rewrites: [
                {
                    from: new RegExp(`^/`),
                    to: `/index.html`
                },
            ]
        },
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.DefinePlugin({
            "CONFIG": JSON.stringify(CONF.dev),
        }),
        new HtmlWebpackPlugin({
            title: CONF.description,
            template: pathResolve('./tepHtml/dev.html')
        }),
        new webpack.ProgressPlugin(),
    ]
})
