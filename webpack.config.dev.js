const path = require('path');

module.exports = {
    entry: './app/static/src/index.js',
    output: {
        filename: 'main.js',
        path: path.resolve('app/static/dist'),
    },
    module: {
        rules: [
            {
                test: /\.scss$/,
                loader: ['style-loader', 'css-loader', 'sass-loader']
            }]
    },
    mode: 'development',
    devtool: 'inline-source-map'
};
