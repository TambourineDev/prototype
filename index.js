const path = require('path')

const express = require('express')
const nunjucks = require('nunjucks')

const db = require('./core/server/db')
const app = express()

app.set('view engine', 'njk')
nunjucks.configure(path.resolve(__dirname, 'content/theme/'), {
  watch: true,
  autoescape: true,
  express: app
})

app.get('/:id', async (req, res) => {
  const subscription = await db.select().table('Subscriptions').where({ subscription_id: req.params.id }).first()
  res.render('index', subscription)
})

app.get('/subscription/', async (req, res) => {
  const subscriptions = await db('Subscriptions')

  res.json(subscriptions)
})
app.get('/subscription/:id', async (req, res) => {
  const subscription = await db.select().table('Subscriptions').where({ subscription_id: req.params.id }).first()

  res.json(subscription)
})

app.get('/page/:id', async (req, res) => {
  const pages = await db('Pages').where({ site_id: req.params.id })

  res.json(pages)
})

app.get('/blog/:id', async (req, res) => {
  const blog = await db('Blog').where({ site_id: req.params.id })

  res.json(blog)
})

app.listen(3000, () => console.log(`listening on port 3000`))
