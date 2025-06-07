const express = require("express");
const morgan = require("morgan");
const mongoose = require("mongoose"); //mongoose wraps the mongoDB api and helps in communication with the database
const blogRoutes = require("./routes/blogRoutes");
// const { result } = require('lodash')

//express app
const app = express();

//connect to mongodb
const dbURI =
  "mongodb+srv://netninja:test1234@nodetuts.syfifvs.mongodb.net/nodetuts?retryWrites=true&w=majority&appName=nodetuts";

  // .then is generally used with mongoose or model work
  mongoose
  .connect(dbURI)
  .then((result) => app.listen(3000))
  .then((result) => console.log("Connected to db"))
  .catch((err) => console.log(err));

//register view engine
app.set("view engine", "ejs");

//views is the default folder where all the ejs files are stored
// app.set('views', 'myviews')      if you want to change the default folder

//listen for requests, moved it inside mongoose.connect as we want to listen to requests only after connecting to db
// app.listen(3000)

//middleware & static files

// app.use((req, res, next) => {       //we get access to res, req, and next by default
//     console.log('new request made')
//     console.log('host: ', req.hostname)
//     console.log('path: ', req.path)
//     console.log('method: ', req.method)
//     next();
// })

// app.use((req, res, next) => {
//     console.log('in the next middleware')
//     next()
// })

//static files

app.use(morgan("dev"));

//static made the "public" folder available in the root, making it publicly accessible to the browser
// Purpose: Serves static files such as HTML, CSS, JavaScript, images, etc., from the 'public' directory.
// Usage: When a request is made for a static file, Express will look for the file in the 'public' directory and serve it if found.
app.use(express.static("public"));

// Purpose: Parses incoming requests with URL-encoded payloads, typically from HTML forms.
// extended: true: Allows for rich objects and arrays to be encoded into the URL-encoded format using the qs library. If set to false, it uses the querystring library, which supports only simple key-value pairs.
// Usage: Makes form data available on req.body.
app.use(express.urlencoded({ extended: true }));

// Purpose: Parses incoming requests with JSON payloads.
// Usage: Makes JSON data available on req.body.
app.use(express.json());

//mongoose and mongo sandbox routes

// app.get('/add-blog', (req, res) => {
//     const blog = new Blog({     // model will be used to create a new instance of blog document
//         title: 'new Blog 2',
//         snippet: 'this one is the snippet',
//         body: 'this one is body'
//     })

//     blog.save()
//         .then((result) => {
//             res.send(result)
//         })
//         .catch((err) => {
//             console.log(err)
//         })
// })

// app.get('/all-blogs', (req, res) => {
//     Blog.find()
//         .then((result) => {
//             res.send(result)
//         })
//         .catch((err) => {
//             console.log(err)
//         })

// })

// app.get('/single-blog', (req, res) => {
//     Blog.findById("65f16b4133f2a3e9ac67aca5")
//         .then((result) => {
//             res.send(result)
//         })
//         .catch((err) => {
//             console.log(err)
//         })
// })

app.get("/", (req, res) => {
  res.redirect("/blogs");
  // const blogs = [
  //     { title: 'Yoshi finds eggs', snippet: 'Lorem ipsum dolor sit amet consectetur' },
  //     { title: 'Mario finds stars', snippet: 'Lorem ipsum dolor sit amet consectetur' },
  //     { title: 'How to defeat bowser', snippet: 'Lorem ipsum dolor sit amet consectetur' }
  // ]

  // res.render('index', { title: 'Home', blogs })        // it can also be "blogs: blogs"
});

app.get("/about", (req, res) => {
  res.render("about", { title: "about" });
});

//blog routes
app.use("/blogs", blogRoutes); // This can also be 'app.use(blogRoutes)', then we will have to add '/blogs' to every request in every request in blogRoutes

app.use((req, res) => {
  res.status(404).render("404", { title: "404" });
});
