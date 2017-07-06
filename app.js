let fs = require('fs')

let encryptedText = 'encrypted.txt'

fs.readFile(encryptedText, 'utf8', (err, text) => {
    console.log(text)
})
