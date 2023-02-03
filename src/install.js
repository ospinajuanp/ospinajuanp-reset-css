function installPackage (){
    const { exec } = require("child_process");

    exec("cp -r node_modules/ospinajuanp-reset-css/resetStyle.css . && cp -r node_modules/ospinajuanp-reset-css/resetStyle.scss .", (error, stdout, stderr) => {
        if (error) {
            console.error(`exec error: ${error}`);
            return;
        }
        console.log(`stdout: ${stdout}`);
        console.error(`stderr: ${stderr}`);
    });
}

module.exports={
    installPackage
}