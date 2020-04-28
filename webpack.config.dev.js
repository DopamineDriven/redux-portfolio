const webpack = require("webpack");
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
    }
}


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

headers: { "Access-Control-Allow-Origin" : "*" }

https: false
    only run https in prod environment
*/