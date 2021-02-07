const path = require("path");
const webpack = require("webpack");
module.exports = {
    mode: "development",
    entry: "./js/index.js",
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ["style-loader", "css-loader"],
            },
        ],
    },
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "main.js",
        publicPath: "/dist",
    },
};
