const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'production',
    entry: './src/index.js',
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                use: {
                    loader: 'babel-loader'
                }
            },
            {
                test: /\.(css|scss|less)$/,
                use: ['style-loader', 'css-loader']
            },
        ]
    },
    plugins: [
        new HtmlWebPackPlugin({
            template: 'index.html',
          })
    ],
    devServer: {
        static: {
            directory: path.join(__dirname, 'public'),
          },
        compress: true,
        port: 9999
    },
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist'),
        clean: true
    }
}