const   webpack             = require('webpack'),
        HtmlWebpackPlugin = require('html-webpack-plugin'),
        CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
    context: __dirname + '/front',
    entry: {
        home: "./js/home"
    },
    output: {
        path: __dirname + '/prod',
        filename: "./js/[name].js",
        publicPath: '/'
    },

    module: {
        loaders: [
                {
                    test: /\.(js|jsx)$/,
                    exclude: /(node_modules|bower_components)/,
                    use: {
                        loader: 'babel-loader',
                        options: {
                            presets: ['es2015', 'react']
                        }
                    },
                   
                },
                {
                    test: /\.css$/,
                    use: ['style-loader','css-loader','csso-loader','postcss-loader']
                },

                { 
                    test: /\.(png|jpe?g|gif|svg|woff2|woff|eot|ttf)$/,
                    loader: 'file-loader?name=./file/[name].[ext]'
                }
            ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './index.html',
            filename: './index.html'
        }),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.LoaderOptionsPlugin({
            options: {
                postcss: () => {
                    return [
                        require('postcss-import')(),
                        require('postcss-cssnext')({
                            browsers: ['last 4 versions', '> 2%']
                        })
                    ];
                }
            }
        }),
        new CopyWebpackPlugin([
            {
                context: '/node_modules/semantic-ui-css/themes/default/assets/',
                from: '**/*.*',
                to: '/front/file'
            }
        ])
    ],
    
    devServer: {
        inline:true,
        hot:true
    } 
}
