const express = require('express')
const app = express()
const mongoose = require('mongoose');
const bodyParser = require('body-parser')
const url = 'mongodb://localhost/blogTestDb'
const Post = require('./model/post')

mongoose.connect(url)
// Get Mongoose to use the global promise library
mongoose.Promise = global.Promise
//Get the default connection
const db = mongoose.connection,
currentDate = new Date().toLocaleString();

db.once('open', function() {
  console.log('connected to DB!')

const newPostsArr = [{ title : 'First post from MongoDB',
                        description : 'This is first blog entry from MongoDB',
                        tags: ['tech', 'science', 'travel', 'fashion', 'finance', 'business', 'IT'],
                        date: currentDate
                        },
                        { title : 'Fashion & Travel post',
                          description : 'Fashion and travel',
                          tags: ['travel', 'fashion'],
                          date: currentDate
                        },
                        { title : 'Tech & Science post',
                          description : 'Tech and science',
                          tags: ['tech', 'science'],
                          date: currentDate
                        }
  ]
    //add first posts if posts db is empty
    Post.find(function (err, post) {
      if (err) return console.error(err);
      if(post.length===0){
        /*newPost.save(function (err, post) {
          if (err) return console.error(err);
          console.log(post.title + " saved to posts collection.");
        });*/
        for (let item of newPostsArr) {
          let newPost = new Post(item)
          newPost.save(function (err, post) {
            if (err) return console.error(err);
            console.log(post.title + " saved to posts collection.");
          });
        }
      }
    })

});

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

app.post('/api/post/deletePost', (req, res) => {
    mongoose.connect(url, { useMongoClient: true }, function(err){
        if(err) throw err;
        Post.findByIdAndRemove(req.body.id,
            (err, doc) => {
            if(err) throw err;
            return res.status(200).json({
                status: 'success',
                data: doc
            })
        })
    });
})

app.post('/api/post/createPost', (req, res) => {
    mongoose.connect(url, { useMongoClient: true }, function(err){
        if(err) throw err;
        const post = new Post({
            title: req.body.title,
            description: req.body.description,
            tags: req.body.tags,
            date: req.body.date
        })
        post.save(function (err, newPost) {
          if (err) return console.error(err);
          console.log(newPost.title + " saved to posts collection.");
        });
    });
})

app.listen(3000, () => console.log('blog server running on port 3000!'))
