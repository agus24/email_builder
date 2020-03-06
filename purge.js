const PurgeCSS = require("purgecss").PurgeCSS
const fs = require("fs")

const purged = new PurgeCSS().purge({
    content: ['./templates/receipt_email.html'],
    css: ["./build/receipt_email/receipt_email.css"]
}).then(response => {
    let result = response[0]
    fs.writeFile(result.file, result.css, err => {
        if (err) {
            console.log(err)
        }
        console.log("success write file")
    })
})