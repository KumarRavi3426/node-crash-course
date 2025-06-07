const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const blogSchema = new Schema({         // schema is a blueprint of the model
    title: {
        type: String,
        required: true
    },
    snippet: {
        type: String,
        required: true
    },
    body: {
        type: String,
        required: true
    }
}, { timestamps: true });

const Blog = mongoose.model('Blog', blogSchema);        // inside model, name of the model and schema
module.exports = Blog;
// Blog const is what we will use to access the model, to create new instances of the model, and interact with database
// to save them to the database, to find them in the database, and to delete them from the database
// And Blog parameter is the model name which will look in the collections
// name of model parameter should be singular of the collection name

// Schema defines the structure of the document, and model is used to create instances of the document


// schema defines the structure of the document, the properties it will have
// model surrounds the schema, and provides an interface to communicate with the database
// model will be used to create a new instance of blog document
// the name of the collection should be plural of the name of the model