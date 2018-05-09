const express = require('express')
const app = express()
const mongoose = require('mongoose');
const bodyParser = require('body-parser')
const url = 'mongodb://localhost/blogTestDb'

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended : false}))

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.listen(3000, () => console.log('blog server running on port 3000!'))
