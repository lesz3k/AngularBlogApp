const express = require('express')
const app = express()
const mongoose = require('mongoose');
const bodyParser = require('body-parser')
const url = 'mongodb://localhost/blogTestDb'
const Post = require('./model/post')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended : false}))

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.post('/', (req, res) => {
    mongoose.connect(url, function(err){
        if(err) throw err;
        console.log('connected successfully');
    });
})

app.post('/api/post/getAllPost', (req, res) => {
    mongoose.connect(url, { useMongoClient: true } , function(err){
        if(err) throw err;
        Post.find({},[],{ sort: { _id: -1 } },(err, doc) => {
            if(err) throw err;
            console.log('post is:')
            console.log(doc);
            return res.status(200).json(doc)
        })
    });
})

app.listen(3000, () => console.log('blog server running on port 3000!'))
