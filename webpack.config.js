const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin'); //在输入文件夹里添加html页面
const MiniCssExtractPlugin = require('mini-css-extract-plugin'); //从js文件中分离样式文件的插件

module.exports = {
    entry: path.resolve(__dirname, 'src/index.js'),
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, './lib')
    },

    //自动解析后缀为下列的格式的文件，意思就是在import引入文件的时候，就不用再写这些后缀了
    resolve: {
        extensions: ['.js', '.jsx', '.less', '.css'],
        alias: {
            component: path.resolve(__dirname, 'src/component') //使用绝对路径
        }
    },

    //处理不同格式的文件
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: 'babel-loader'
                    },
                    {
                        loader: 'eslint-loader'
                    }
                ]
            },
            {
                test: /\.(css|less)$/,
                use: [MiniCssExtractPlugin.loader, 'css-loader', 'less-loader']
            },
            {
                test: /\.(png|jpg|gif|jpeg)$/,
                loader: 'file-loader',
                options: {
                    name: '[name].[hash:5].[ext]',
                    outputPath: 'img'
                }
            },
            {
                test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
                loader: 'file-loader',
                options: {
                    name: '[name].[hash:5].[ext]',
                    outputPath: 'media'
                }
            },
            {
                test: /\.(woff2?|eot|ttf|otf|svg)(\?.*)?$/,
                loader: 'file-loader',
                options: {
                    name: '[name].[hash:5].[ext]',
                    outputPath: 'font'
                }
            }
        ]
    },

    //开启一个服务器
    devServer: {
        overlay: true, //如果报错，则把错误信息显示到浏览器上
        port: 8090, //监听8090端口
        open: true //服务器启动后打开默认浏览器 localhost:8080
    },

    plugins: [
        //将从js中分离出来的样式合并到指定样式文件中
        new MiniCssExtractPlugin({
            filename: '[name].css',
            chunkFilename: '[id].css'
        }),

        //在输出文件夹中添加html页面
        new HtmlWebpackPlugin({
            template: __dirname + '/template/index.html', //将指定的html页面内容覆盖到输出文件夹中的html里,并且会自动引入出口bundle.js以及分离出来的css文件
            favicon: __dirname + '/ico/favicon.ico' //添加网站的图标
        })
    ]
};
