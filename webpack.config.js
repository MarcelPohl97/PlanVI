const path = require('path');


module.exports = {
    entry: './src/main.js',
    output: {
        path: path.resolve(__dirname, 'dist/assets'),
        filename: 'bundle.js'
    },
    devServer: {
        contentBase: path.resolve(__dirname, 'dist'),
        publicPath: '/assets/'
    },
    module: {
        rules: [{
            test: /\.js$/,
            exclude: /node_modules/,
            use: {
                loader: 'babel-loader',
                options: {
                    presets: ['@babel/preset-env']
                }
            }
        },
        {
            test: /\.s[ac]ss$/,
            use: [
            // Creates `style` nodes from JS strings
            'style-loader',
            // Translates CSS into CommonJS
            'css-loader',
            // Compiles Sass to CSS
            'sass-loader',
        ],
        },
        {
            test: /\.(jpe?g|png|gif|svg)$/i,
            use: [
                {
                    loader: 'url-loader',
                    options: {
                        limit: 50000000
                    }
                }
            ]
        }
        
    ]
    },
    externals: {
        cheerio: 'cheerio'
      }
};
