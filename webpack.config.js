module.exports = {

    //Define Entry Point
    entry: './src/main.js',

    //Define Output Point
    output: {
        path: __dirname + "/dist",
        filename: "bundle.js",
        publicPath: '/'
    },
    //Used to prevent error when refreshing or goig to direct link
    devServer: {
        historyApiFallback: true
    },


    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: "babel-loader",
                query: {
                    presets: ["es2015", "react"],
                    "plugins": ["transform-object-rest-spread"]
                    
                }
            },
            {
                test: /\.scss$/,
                loader: "style-loader!css-loader!sass-loader"
            },
            {
                test: /\.(jpe?g|png|gif|svg)$/i,
                loaders: [
                    {
                        loader: 'file-loader',
                        options: {
                            query: {
                                name: 'assets/[name].[ext]'
                            }
                        }
                    },
                    {
                        loader: 'image-webpack-loader',
                        options: {
                            query: {
                                mozjpeg: {
                                    progressive: true,
                                },
                                gifsicle: {
                                    interlaced: true,
                                },
                                optipng: {
                                    optimizationLevel: 7,
                                }
                            }
                        }
                    }
                ]
            }
        ]
    }

};