const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, '/dist'),
        filename: 'bundle.js'
    },
    plugins: [new HtmlWebpackPlugin({
        template: __dirname + '/src/index.html',
        inject: 'body'
    })],
    module: {
        rules: [
            {
                test: /\.less$/,
                use: [
                    {loader: 'style-loader'},
                    {loader: 'css-loader'},
                    {
                        loader: 'less-loader',
                        options: {paths: [path.resolve(__dirname, 'node_modules')]}
                    }
                ]
            }
        ]
    },
    watch: true,
    devServer: {
        contentBase: 'src',
        compress: true,
        port: 8080,
        hot: true,
        clientLogLevel: 'silent',
        historyApiFallback: true,
        hotOnly: true
    },
};