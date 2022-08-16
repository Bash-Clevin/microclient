const express = require('express')
const bodyParser = require('body-parser')
const axios = require('axios')

const app = express()
app.use(bodyParser.json())

app.post('/evemts', (req,res) => {
    const { type, data } = req.body

    if (type === 'CommentCreted') {
        const status = data.content.includes('orange') ? 'rejected' : 'approved'

        await axios.post('http://localhost:3505/events', {
            type: 'CommentModerated',
            data: {
                id: data.id,
                postId: data.postId,
                status,
                content: data.content
            }
        })
    }

    res.send({})
})

app.listen(3503, () => {
    console.log('moderation listening on port 3503')
})