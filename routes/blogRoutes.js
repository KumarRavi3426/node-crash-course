// const express = require('express')
// const router = express.Router()     // creating a new instance of express router, kind of like a mini-app
// const Blog = require('../models/blog')

// router.get('/', (req, res) => {     //The extra /blog will be removed, because we are already in /blogs (in app.js)
//     Blog.find().sort({ createdAt: -1 })
//         .then(result => {
//             res.render('index', { title: 'All blogs', blogs: result })
//         })
//         .catch(err => { console.log(err) })
// })

// router.get('/create', (req, res) => {         // we need to move the 'create' above '/blog/:id' because otherwise, it will consider 'create' as id & '/blog/:id' will run first
//     res.render('create', { title: 'Create a new blog' });
// });

// router.post('/', (req, res) => {
//     // console.log((req.body));
//     const blog = new Blog(req.body);
//     blog.save()
//         .then((result) => {
//             res.redirect('/blog');
//         })
//         .catch((err) => {
//             console.log(err)
//         })
// })


// router.get('/:id', (req, res) => {        // :id (dynamic route)
//     const id = req.params.id;       //params.id used to grab the id from the url
//     // console.log(id)
//     Blog.findById(id)
//         .then(result => {
//             res.render('details', { blog: result, title: 'Blog details' })
//         })
//         .catch(err => {
//             console.log(err);
//             res.status(404).render('404', { title: 'Blog not found' });
//         })
// })



// router.delete('/:id', (req, res) => {
//     const id = req.params.id;

//     Blog.findByIdAndDelete(id)
//         .then(result => {
//             res.json({ redirect: '/blogs' });
//         })
//         .catch(err => {
//             console.log(err)
//         })
// })



// module.exports = router;


const express = require('express');
const blogController = require('../controllers/blogController');

const router = express.Router();

router.get('/', blogController.blog_index);
router.get('/create', blogController.blog_create_get);
router.post('/', blogController.blog_create_post);
router.get('/:id', blogController.blog_details);
router.delete('/:id', blogController.blog_delete);

module.exports = router;