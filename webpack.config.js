const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin'); //在输入文件夹里添加html页面
const MiniCssExtractPlugin = require('mini-css-extract-plugin'); //从js文件中分离样式文件的插件
const FriendlyErrors = require('friendly-errors-webpack-plugin');
const os = require('os');
const ifaces = os.networkInterfaces();

const publicPath = '/test/';
const port = 8090;
const getLocalIp = function() {
    let host = '127.0.0.1';

    for (const dev in ifaces) {
        ifaces[dev].forEach(function(details) {
            if (
                details.family === 'IPv4' &&
                details.address.indexOf('192.168') >= 0
            ) {
                host = details.address;
            }
        });
    }

    return host;
};

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

    //开启本地服务器
    devServer: {
        noInfo: true, //不显示编译数据
        contentBase: path.join(__dirname, 'lib'), //可以在url上输入lib文件夹下面的文件的名称来访问该静态文件
        overlay: true, //如果报错，则把错误信息显示到浏览器上
        open: true, //服务器启动后打开默认浏览器
        openPage: publicPath.slice(1), //打开浏览器后显示的url参数
        host: getLocalIp(),
        port,
        publicPath, //项目的资源路径 通常与域名后的目录相同，必须是ccp的项目 则是 http://123123.com/ccp，那么publicPath应该是/ccp
        proxy: [
            // {
            //     context: ["/site-web-zw1/**"],
            //     target: "http://192.168.100.97:6088",
            //     changeOrigin: true,
            //     pathRewrite: {
            //         "^/$": "/"
            //     },
            //     cookieDomainRewrite: getLocalIp()
            // },
            {
                context: [`!${publicPath}**`], //要代理的地址 此规则用！取反
                target: 'https://platform-dev.mobilemd.cn', //要代理的目标
                changeOrigin: true, //是否更改源
                pathRewrite: {
                    '^/$': '/' //示例：/a/b代理到https://platform-dev.mobilemd.cn/b
                },
                cookieDomainRewrite: getLocalIp() //cookie域名重写
            }
        ]
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
            favicon: __dirname + '/ico/favicon.ico', //添加网站的图标
            title: 'test' //添加网站的title
        }),

        new FriendlyErrors({
            compilationSuccessInfo: {
                messages: [
                    `编译成功 运行于http://${getLocalIp()}:${port}${publicPath}`
                ]
            }
        })
    ]
};
