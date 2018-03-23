const path = require('path')

const express = require('express')
const nunjucks = require('nunjucks')

const app = express()
const { getSubcription } = require('./core/api')

app.set('view engine', 'njk')
nunjucks.configure(path.resolve(__dirname, 'content/theme/'), {
  watch: true,
  autoescape: true,
  express: app
})

app.get('/:id', async (req, res) => {
  // const subscription = await db('Subscriptions').where({ subscription_id: req.params.id }).first()
  const subscription = await getSubcription(127)

  console.log(subscription)
  res.render('index', subscription)
})

app.listen(3000, () => console.log(`listening on port 3000`))
