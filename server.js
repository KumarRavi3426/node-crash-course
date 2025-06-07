const http = require('http');   // Built-in Node.js module to create an HTTP server.
const fs = require('fs');   // to interact with file system
const _ = require('lodash');

const server = http.createServer((req, res) => {
    // Creates an HTTP server that listens for requests and sends responses

    // console.log(req.url, req.method) 
    // console.log("request made")

    //lodash
    const num = _.random(0, 20)
    console.log(num)

    // Ensures the greet function is only called once, even if invoked multiple times.
    const greet = _.once(() => {
        console.log('hello')
    })
    greet();
    greet();

    //set header content, indicating response will be html
    res.setHeader('Content-Type', 'text/html');


    let path = './views/'
    switch (req.url) {
        case '/':
            path += 'index.html'
            res.statusCode = 200;
            break
        case '/about':
            path += 'about.html'
            res.statusCode = 200;
            break
        case '/about-me':
            res.statusCode = 301;
            res.setHeader('Location', '/about')     //redirecting
            res.end();
            break
        default:
            path += '404.html'
            res.statusCode = 404;
            break
    }

    // main routing, sending files back to browser using fs module
    fs.readFile(path, (err, data) => {
        if (err) {
            console.log(err);
            res.end();
        } else {
            // res.write(data);    // if there are multiple things, then we have to use write on everything
            res.end(data);      //does the work of both the lines
        }

    })

    //sending back html tags to the browser
    // res.write('<head><link rel="stylesheet" href="#"></head>')
    // res.write('<p>Hello World</p>');
    // res.write('<p>Hello again</p>');
    // res.end();

});

server.listen(3000, 'localhost', () => { // localhost is more like domain name; 3000 is port number, which you can consider as a door, to keep the data for different applications separate
    console.log('listening to request')
});