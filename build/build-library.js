const webpack = require('webpack');
const merge = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
let base = require('./base.js');
const CONF = require('./config/index.js');
const pathResolve = src => {
    return path.resolve(__dirname, src)
}

// 是否打包依赖包 ( externals里面的安装包 )
const DELETEEXTERNALS = false
if (DELETEEXTERNALS) {
    delete base.externals
};

module.exports = merge(base, {
    mode: 'production',
    entry: {
        index: pathResolve('../src/index.js')
    },
    output: {
        path: path.resolve(__dirname, '../lib'),
        filename: '[name].js',
        libraryTarget: "umd",
        library: "[name]"
    },
    plugins: [
        new webpack.DefinePlugin({
            CONFIG: JSON.stringify(CONF.prod),
        })
    ]
})