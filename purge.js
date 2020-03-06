const PurgeCSS = require("purgecss").PurgeCSS
const Inliner = require("html-inline")
const fs = require("fs")
const config = require("./convert.config.js")
const result = config.result_file === "" ? "result.html" : config.result_file

new PurgeCSS().purge({
    content: [__dirname + config.file],
    css: [__dirname + config.css]
}).then(response => {
    let result = response[0]
    fs.writeFile(result.file, result.css, err => {
        if (err) {
            console.log(err)
        }
        console.log("success write file")
    })
})

let inliner = Inliner({
    ignoreImages: true,
    ignoreLinks: true,
    ignoreScripts: true,
})

let output = fs.createWriteStream(__dirname + "/converted/" + result)
fs.createReadStream(__dirname + config.file).pipe(inliner).pipe(output)