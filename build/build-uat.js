const webpack = require('webpack');
const merge = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const base = require('./base.js');
const CONF = require('./config/index.js');
const pathResolve = src => {
    return path.resolve(__dirname, src)
}
module.exports = merge(base, {
    mode: 'production',
    plugins: [
        new webpack.DefinePlugin({
            CONFIG: JSON.stringify(CONF.uat),
        }),
        new HtmlWebpackPlugin({
            title: 'webpack 4.43.0',
            template: pathResolve('./tepHtml/prod.html')
        })
    ]
})