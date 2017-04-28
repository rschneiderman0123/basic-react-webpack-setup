var path = require("path");

module.exports = {
     entry: {
        app: ["./src/app.js"]
     }, 
     output: {
         path: path.resolve(__dirname, "dist"),
         filename: 'app.bundle.js',
         publicPath: "/dist/",
     },
     module: {
         loaders: [
             {
             test: /\.js?$/,
             exclude: /node_modules/,
             loader: 'babel-loader',
             query: {
                presets: ['react','es2015',"stage-2"],
                "plugins": ["transform-decorators-legacy"]
                }
             },
             {
                test: /\.css/,
                loaders: ['style', 'css'],
                include: path.resolve(__dirname,"src")
             },
             {
                test: /\.woff(\?v=\d+\.\d+\.\d+)?$/,
                loader: "url?limit=10000&mimetype=application/font-woff"
             }, 
             {
                test: /\.woff2(\?v=\d+\.\d+\.\d+)?$/,
                loader: "url?limit=10000&mimetype=application/font-woff"
             }, 
             {
                test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
                loader: "url?limit=10000&mimetype=application/octet-stream"
             },
             {
                test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
                loader: "file"
             }, 
             {
                test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
                loader: "url?limit=10000&mimetype=image/svg+xml"
             }
         ]
     },
     devServer: {
        inline : true,
        port : 3033,
        disableHostCheck: true
     }
 }