const VueLoaderPlugin = require('vue-loader/lib/plugin');

module.exports = {
    target: 'node',
    mode: 'development',
    context: __dirname,
    entry: './src/server.ts',
    output: {
        path: __dirname,
        filename: 'build.js',
        libraryTarget: 'commonjs2'
    },
    resolve: {
        alias: {
            vue$: 'vue/dist/vue.esm.js'
        },
        extensions: ['.ts', '.tsx', '.js']
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                exclude: /node_modules/,
                use: [
                    'babel-loader',
                    {
                        loader: 'ts-loader',
                        options: {
                            appendTsSuffixTo: [/\.vue$/],
                            appendTsxSuffixTo: [/\.vue$/]
                        }
                    }
                ]
            },
            {
                test: /\.vue$/,
                use: ['vue-loader']
            }
        ]
    },
    externals: Object.keys(require('./package.json').dependencies),
    devtool: 'source-map',
    plugins: [
        new VueLoaderPlugin()
    ]
};