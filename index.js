const { exec } = require("child_process");
var fs = require('fs');

if (process.argv.length != 4)
{
    console.log("2 params expected");
    console.log("format: node .\\index.js [folder path] [file type to convert]");
    console.log("e.g. node .\\index.js C:\\temp\ .mp4");
}
else {
    var path = process.argv[2];
    var convert_to = process.argv[3];
    var files = fs.readdirSync(path);
    files.forEach(file => {
        var fileName = file.split('.')[0];
        exec(`ffmpeg -i ${path}\\${file} ${path}\\${fileName}${convert_to}`, (error, stdout, stderr) => {
            if (error) {
                console.log("error");
                console.log(`error: ${error.message}`);
                return;
            }
            if (stderr) {
                console.log("stderr");
                console.log(`stderr: ${stderr}`);
                return;
            }
            console.log("stdout");
            console.log(`stdout: ${stdout}`);
        });
    });
}
