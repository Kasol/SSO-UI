const fs = require('fs');
let dirs =fs.readdirSync('./');
let files = [];
dirs.map((f)=>{
    if(f[0]!=='.' && f !=='node_modules' && f !=='lib'){
        let info = fs.statSync(`./${f}`);
        if(info.isDirectory()){
          files.push(f);
        }
    }
});

module.exports = files;