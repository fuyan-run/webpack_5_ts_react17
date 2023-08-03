const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const path = require('path');

const pathResolve = src => {
    return path.resolve(__dirname, src)
}

module.exports = {
    mode: 'production',
    entry: [
        pathResolve('../src/index.js')
    ],
    output: {
        path: pathResolve('../dist'),
        filename: './js/[name].[hash].js',
        chunkFilename: './js/[name].[hash].js'
    },
    resolve: {  
        extensions: ['.js', '.jsx', '.scss', '.css', 'less', '.ts', '.tsx'],
        alias: {
            '@': pathResolve('../src'),
            'view': pathResolve('../src/view'),
            'utils': pathResolve('../src/utils'),
            'static': pathResolve('../src/static'),
        }
    },
    // 根据实际项目配置
    externals: {
        'react': 'React',
        'react-dom': 'ReactDOM',
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: [
                    {
                        loader: 'ts-loader',
                        options: {
                            compilerOptions: {
                                noEmit: false
                            },
                        }
                    }
                ],
            },
            {
                test: /\.jsx?$/,
                use: {
                    loader: 'babel-loader'
                }
            },
            {
                test: /\.less$/,
                exclude: [pathResolve('../node_modules')],
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                        options: {
                            hmr: process.env.NODE_ENV === 'development'
                        },
                    },
                    {
                        loader: 'css-loader',
                        options: {
                            modules: {
                                auto: (resourcePath) => resourcePath.endsWith('.module.less'),
                                localIdentName: '__[local]_[hash:base64:10]',
                            },
                        }
                    },
                    'less-loader',
                ]
            },
            {
                test: /\.css$/,
                include: [
                    pathResolve('../node_modules/antd/dist'),
                    pathResolve('../src')
                ],
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                        options: {
                            hmr: process.env.NODE_ENV === 'development'
                        },
                    },
                    {
                        loader: 'css-loader',
                        options: {
                            modules: {
                                auto: (resourcePath) => resourcePath.endsWith('.module.less'),
                                localIdentName: '__[local]_[hash:base64:10]',
                            },
                        }
                    },
                ]
            },
            {
                test: /\.(png|jpe?g|gif|svg)$/i,
                exclude: [pathResolve('../node_modules')],
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            name: './img/[name].[hash:6].[ext]',
                        },
                    }
                ]
            },
            {
                test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
                loader: 'file-loader',
                exclude: [pathResolve('../node_modules')],
                options: {
                    limit: 10000,
                    publicPath: '../',
                    name: './fonts/[name].[hash:6].[ext]'
                }
            },
            {
                test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
                loader: 'file-loader',
                exclude: [pathResolve('../node_modules')],
                options: {
                    name: './media/[name].[hash:6].[ext]?'
                }
            },
        ]
    },
    plugins: [
        new CleanWebpackPlugin(),
        new MiniCssExtractPlugin({
            filename: './css/[name].css',
            chunkFilename: './common/[name].css',
        }),
        new OptimizeCssAssetsPlugin({
            cssProcessorOptions: {
                safe: true
            }
        }),
        new webpack.ProvidePlugin({
            React: 'react',
        })
    ],
}
