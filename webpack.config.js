const path = require('path');
const resource = require('./read_dir');
const webpack = require('webpack');
const ManifestPlugin = require('webpack-plugin-manifest');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
// const ignoreFiles = new webpack.IgnorePlugin(/\.\/jquery.js$/);
const read_entry = {
    
};
resource.map((f)=>{
    read_entry[f] = `./${f}/${f}.js`;
});
module.exports={
    mode : 'development',
    devtool: 'eval-source-map',
    //入口文件的配置项
    entry:Object.assign({},read_entry),
    //出口文件的配置项
    output:{
        //输出的路径，用了Node语法
        path:path.resolve(__dirname,'.build'),
        //输出的文件名称
        filename:'[name]/[name].[chunkhash:8].js'
    },
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
            new ManifestPlugin(),
            new ExtractTextPlugin({
                filename: '[name]/[name].[chunkhash:8].css'
            })
        ],
    //配置webpack开发服务功能
    devServer: {
        contentBase: "/",//本地服务器所加载的页面所在的目录
        historyApiFallback: true,//不跳转
        inline: true,//实时刷新
        port:8081
      }
}
