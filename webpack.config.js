const path = require('path');
const resource = require('./read_dir');
const webpack = require('webpack');
// const ManifestPlugin = require('webpack-plugin-manifest');
var AssetsPlugin = require('assets-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const base_config = require('./base_config');


// console.log(resource);

// const ignoreFiles = new webpack.IgnorePlugin(/\.\/jquery.js$/);
// const read_entry = {
    
// };
// resource.map((f)=>{
//     read_entry[f] = `./${f}/${f}.js`;
// });
module.exports={
    mode : 'development',
    devtool: 'cheap-module-eval-source-map',
    //入口文件的配置项
    entry:Object.assign({},resource),
    //出口文件的配置项
    output:base_config.output,
    //模块：例如解读CSS,图片如何转换，压缩
    module:{
        rules: [
            { test: /\.css$/,
            //   use: ['style-loader','css-loader']
            //   include:[path.resolve(__dirname, "./css")],
              use: ExtractTextPlugin.extract({
                fallback: "style-loader",
                use: "css-loader"
              })
            }
        ]
    },
    //插件，用于生产模版和各项功能
        plugins: [
            // ignoreFiles
            new AssetsPlugin({
                filename:'hash.json',
                path:path.resolve(__dirname,'.build',base_config.appName||'',base_config.version||'')
            }),
            new ExtractTextPlugin(base_config.ExtractTextPlugin),
            new CleanWebpackPlugin(['.build'])
        ],
    //配置webpack开发服务功能
    devServer: {
        contentBase: path.join(__dirname, ".build"),//本地服务器所加载的页面所在的目录
        historyApiFallback: true,//不跳转
        inline: true,//实时刷新
        port:process.env.NODE_ENV === 'pro' ? 80:8081,
        open:true,
        host:process.env.NODE_ENV === 'pro' ? '172.17.243.179':'localhost'
      },
      watchOptions:{
        poll:1000,//监测修改的时间(ms)
        aggregateTimeout:500, //防止重复按键，500毫米内算按键一次
        ignored:/node_modules/,//不监测
    }
}
