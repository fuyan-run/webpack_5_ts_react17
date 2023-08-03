const webpack = require('webpack');
const merge = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
let base = require('./base.js');
const CONF = require('./config/index.js');
const pathResolve = src => {
    return path.resolve(__dirname, src)
}

// 是否打包依赖
const DELETEEXTERNALS = true
if (DELETEEXTERNALS) {
    delete base.externals
};

module.exports = merge(base, {
    mode: 'production',
    plugins: [
        new webpack.DefinePlugin({
            CONFIG: JSON.stringify(CONF.prod),
        }),
        new HtmlWebpackPlugin({
            title: 'webpack 4.43.0',
            template: pathResolve('./tepHtml/prod.html')
        })
    ]
})