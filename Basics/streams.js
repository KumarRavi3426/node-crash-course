const fs = require('fs');

const readStream = fs.createReadStream('./docs/blog3.txt', { encoding: 'utf8' })
const writeStream = fs.createWriteStream('./docs/blog4.txt')

readStream.on('data', (chunk) => {      //data is the event
    console.log('\n____ NEW CHUNK ____\n')
    console.log(chunk)
    writeStream.write('\n____ NEW CHUNK ____\n')
    writeStream.write(chunk)
})