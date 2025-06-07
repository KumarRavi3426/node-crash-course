const express = require('express')

const app = express()

app.listen(3000)

app.get('/', (req, res) => {
    // res.send('<p>hello</p>')        
    // Unlike res.write() res.send automatically sets the content header type & status code

    res.sendFile('./views/index.html', { root: __dirname })     //in Express by default, it takes the relative path as the first argument & the second parameter is options object, having root property specifying the root directory path

    // we use res.sendFile here in case of html files 
    // res.send in case of html tags
    // & res.send/render in case of ejs files
    // render is used with view engines, for dynamic data
})
app.get('/about', (req, res) => {

    res.sendFile('./views/about.html', { root: __dirname })
}
)
app.get('/about-me', (req, res) => {
    res.redirect('/about')
})

app.use((req, res) => {     //this has to be in the last, because express starts from top and it will fire it whenever it encounters this one, after this function runs, it will send back a response to browser, that's why it has to be in last
    res.status(404).sendFile('./views/404.html', { root: __dirname })
    // we need to set the status manually
    // res.status() also sends back a response, that's why we can tack on another sendfile method on it
})

// ______ UPTO LEC 6
// ______ EJS from LEC 7