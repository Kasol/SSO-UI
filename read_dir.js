const fs = require('fs');
const path = require('path');
let out_dirs =fs.readdirSync(path.resolve(__dirname));
let files = [];

let target = {};

let parse_dic = (cur_path)=>{
  //根据路径读出当前路径所有文件名
     let dirs =fs.readdirSync(cur_path);
     dirs.map((f)=>{
            let info = fs.statSync(path.resolve(cur_path,f));
            if(info.isDirectory()){
                //是文件夹则继续遍历
            //   files.push(f);
            parse_dic(path.resolve(cur_path,f));

            }else{
               //否则保存当前的入口
               let ext_name = path.extname(path.resolve(cur_path,f));
               if (ext_name === '.js'){
                let base_name = path.basename(path.resolve(cur_path,f),ext_name);
                target[base_name] = path.resolve(cur_path,f);
               }
             
            }
    });

}
out_dirs.map((f)=>{
    if(f[0]!=='.' && f !=='node_modules' && f !=='lib'){
        let info = fs.statSync(path.resolve(__dirname,f));
        if(info.isDirectory()){
            parse_dic(path.resolve(__dirname,f));
        }
    }
});

module.exports = target;