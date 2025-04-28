const path = require('path');
const htmlPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: './src/index.js',
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist'),
        clean: true,
    },
    devtool: 'eval-source-map',
    devServer: {
        watchFiles: ['./src/template.html'],
        static: {
            directory: path.join(__dirname, 'src'),
        },
        compress: true,
        port: 8080,
    },
    plugins: [
        new htmlPlugin({
            template: './src/template.html',
            scriptLoading: 'defer',
        }),
    ],
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.html$/i,
                loader: "html-loader",
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: "asset/resource",
                generator: {
                    filename: 'images/[name][hash][ext]'
                }
            }              
        ],
    },
};