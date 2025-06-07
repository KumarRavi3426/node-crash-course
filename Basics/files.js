const fs = require("fs");

// reading files

// fs.readFile('./docs/blog1.txt', (err, data) => { // this is an async function        //automatically takes err and data as parameters
//     if (err) {
//         console.log(err)
//     }
//     else {
//         console.log(data.toString()) // if toString method not applied it will return a buffer
//     }
// })

//writing files

// fs.writeFile('./docs/blog1.txt', 'hello world', () => { // it will replace everything in the file
//     console.log('file written')
// })
// fs.writeFile('./docs/blog12.txt', 'hello world', () => { // if no such file exists, it will create a new file
//     console.log('file written')
// })

//directories

// if (!fs.existsSync("./assets")) {        // sync function -> will stop the execution until its completed
//     fs.mkdir("./assets", () => {         //mkdir, rmdir -> make and remove dir
//         console.log("folder created");
//     });
// } else {
//     fs.rmdir('./assets', (err) => {
//         if (err) {
//             console.log(err);
//         }
//         console.log('folder removed')
//     })
// }

//deleting files
if (fs.existsSync('./deleteme.txt')) {
    fs.unlink('./deleteme.txt', (err) => {
        if (err) {
            console.log(err)
        }
        console.log('file deleted')
    })
}
