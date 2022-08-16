const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')

const app = express()
app.use(bodyParser.json())
app.use(cors())

const posts = {}


app.get('/posts', (req,res) => {
    res.send(posts)
})

app.post('/events', (req,res) => {
    const { type,data } = req.body

    if (type === 'PostCreated') {
        const { id, title} = data
        post[id] == { id,title,  comments: [] }
    }

    if (type === 'CommentCreated') {
        const { id, content, postId, status } = data
        const post = posts[postId]
        posts.comments.push({ id, content, status })
    }

    console.log(posts)

    res.send({})

})

app.listen(3502, () => {
    console.log('listen on 3502')
})