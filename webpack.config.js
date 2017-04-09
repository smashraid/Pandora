

const config = {
    entry: "./main",
    output: {
        filename: "main.js"
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                loader: 'ts-loader',
                exclude: /node_modules/,
            },
        ]
    },
    resolve: {
        extensions: [".ts", ".js"]
    },
    target: "node"
}
module.exports = config;