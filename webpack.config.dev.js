// const webpack = require("webpack");
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
process.env.NODE_ENV = "development";

module.exports = {
    mode: "development",
    // (a)
    target: "web",
    devtool: "cheap-module-source-map",
    entry: "./src/index.jsx",
    // (b)
    output: {
        path: path.resolve(__dirname, "build"),
        publicPath: "/",
        filename: "bundle.js"
    },
    devServer: {
        // (c)
        stats: "minimal",
        overlay: "true",
        historyApiFallback: true,
        disableHostCheck: true,
        headers: { "Access-Control-Allow-Origin" : "*" },
        https: false
    },
    // (d)
    plugins: [
        // new webpack.DefinePlugin({
        //     "process.env.API_URL": JSON.stringify("http://localhost:3001")
        // }),
        new HtmlWebpackPlugin({
            template: "src/index.html",
            favicon: "src/favicon.ico"
        })
    ],
    // (e)
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: ["babel-loader", "eslint-loader"]
            },
            {
                test: /(\.css)$/,
                use: ["style-loader", "css-loader"]
            }
        ]
    }
};


// https://webpack.js.org/guides/development/

/*
(a)
target: "web"
    could set to node if running webpack in node, for example
    changes how webpack would bundle the code so node could work
    with it instead of the browser
devtool: "cheap-module-source-map"
    recommended for dev -> source map for debugging
    source maps allow viewing of OG code in browser
*/

/*
(b)
output
    path
        webpack serves app from memory via path
    filename
        webpack requires this so that html can reference bundle
        being served from memory (only actually generated in prod)
*/

/*
(c)
stats: minimal
    reduces info written to command line 
overlay: true
    overlay any errors that occur in browser
historyApiFallback: true
    all requests sent to index.html
        can load deep links and all are handled by react-router
disableHostCheck: true
    issue with webpack in chrome
headers: { "Access-Control-Allow-Origin" : "*" }
    issue with webpack in chrome
https: false
    only run https in prod environment
*/

/*
(d)
Plugins - specify an array
    HtmlWebpackPlugin
        accepts an object to config plugin
            template -> src/index.html
            favicon -> src/favicon.ico
*/

/*
(e)
module - tell webpack which files to handle
    declare array of rules
        (1) js or jsx files 
            how to find files via regex
            which files to exclude (node_modules)
            then use loaders
                eslint first then babel
                    loaders processed from bottom up
        (2) css files
            combo of css-loader and style-loader
                allows for the import of css just like js
*/