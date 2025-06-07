const express = require('express')
const morgan = require('morgan')
const mongoose = require('mongoose')
// const Blog = require('./models/blog')    // not needed here
const { result, create } = require('lodash')

const app = express()

const dbURI = 'mongodb+srv://netninja:test1234@nodetuts.syfifvs.mongodb.net/nodetuts?retryWrites=true&w=majority&appName=nodetuts'  // In connection string, you need to write collection name after the single /

mongoose.connect(dbURI)
    .then((result) => app.listen(3000))
    .then((result) => console.log("Connected to db"))
    .catch((err) => console.log(err))

app.set('view engine', 'ejs')

app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }))


app.get('/', (req, res) => {

    res.redirect('blogs')        // it can also be "blogs: blogs"
})
app.get('/about', (req, res) => {

    res.render('about', { title: 'About' })
})

app.get('/blogs', (req, res) => {
    Blog.find().sort({ createdAt: -1 })
        .then(result => {
            res.render('index', { title: 'All blogs', blogs: result })
        })
        .catch(err => {
            console.log(err)
        })
})

app.get('/blogs/create', (req, res) => {
    res.render('create', { title: 'New blog' })
})

app.post('/blogs', (req, res) => {
    // console.log((req.body));
    const blog = new Blog(req.body);
    blog.save()
        .then((result) => {
            res.redirect('/blogs');
        })
        .catch((err) => {
            console.log(err)
        })
})

app.get('/blogs/:id', (req, res) => {
    const id = req.params.id;
    Blog.findById(id)
        .then(result => {
            res.render('details', { title: 'Blog details', blog: result })
        })
})

app.delete('/blogs/:id', (req, res) => {
    const id = req.params.id;

    Blog.findByIdAndDelete(id)
        .then(result => {
            res.json({ redirect: '/blogs' });   // sending back json data to browser
        })
        .catch(err => {
            console.log(err)
        })
})

app.use((req, res) => {
    res.status(404).render('404', { title: '404' })
})
