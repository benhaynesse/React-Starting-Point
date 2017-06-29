module.exports = {

    //Define Entry Point
    entry:'./src/main.js',

    //Define Output Point
    output:{
        path: __dirname + "/dist",
        filename:"bundle.js"
    },


    module:{
        loaders:[
            {
                test: /\.js$/,
                exclude :/node_modules/,
                loader:"babel-loader",
                query:{
                    presets:["es2015"]
                }
            }
        ]
    }

};