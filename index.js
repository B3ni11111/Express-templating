const express = require('express')
const app = express()
const path = require('path')
const redditData = require('./data.json')
console.log(redditData)

app.set('view engine', 'ejs')
app.set('viewa', path.join(__dirname, '/views'))

app.get('/', (req, res) => {
    res.render('home')
})
app.get('/rand', (req, res) => {
    const rand = Math.floor(Math.random() * 10) + 1
    res.render('random', { rand: rand })
})
app.get('/r/:subreddit', (req, res) => {
    const { subreddit } = req.params
    const data = redditData[subreddit]

    if (data) {
        res.render('subreddit', { ...data })
    } else {
        res.render('notFound', { subreddit })
    }
})
app.get('/dogs', (req, res) => {
    const dogs = ['goosh', 'lolla', 'Micky', 'Yoggy', 'Moomoo']
    res.render('dogs', { dogs })
})
app.listen(3000, () => {
    console.log('Listening on POST 3000!!')
})