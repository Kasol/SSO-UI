const env = process.env.NODE_ENV || 'dev';
const path = require('path');
const fs = require('fs');
let config = {
    output: {
        path: path.resolve(__dirname, '.build')
    },
    ExtractTextPlugin:{}
};
switch (env) {
    case 'pro':
    let packageInfo = fs.readFileSync(path.resolve(__dirname,'package.json'));
    packageInfo = packageInfo.toString();
    packageInfo = JSON.parse(packageInfo)
    config.version = packageInfo.version;
    config.appName = packageInfo.name;
        config.output.filename = `${config.appName}/${config.version}/[name]/[name].[chunkhash:8].js`;
        config.ExtractTextPlugin.filename = `${config.appName}/${config.version}/[name]/[name].[chunkhash:8].css`;
        // config.output.hashpath = `${config.appName}/${config.version}`;

        break;
    case 'dev':
        config.output.filename = '[name]/[name].js';
        config.ExtractTextPlugin.filename = '[name]/[name].css';
        break;

}

module.exports = config;