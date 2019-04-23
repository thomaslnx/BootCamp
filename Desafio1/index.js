const express = require('express')
const nunjucks = require('nunjucks')

const app = express()

nunjucks.configure('views', {
  autoescape: true,
  express: app,
  watch: true
})

const middleware = (req, res, next) => {
  const { age } = req.query

  if (!age) {
    return res.redirect('/')
  }
  return next()
}

app.set('view engine', 'njk')
app.use(express.urlencoded({ extended: false }))

app.get('/', (req, res) => {
  return res.render('age')
})

app.post('/check', (req, res) => {
  const { age } = req.body
  if (age < 18) {
    return res.redirect(`/minor?age=${age}`)
  } else {
    return res.redirect(`/major?age=${age}`)
  }
})

app.get('/minor', middleware, (req, res) => {
  const { age } = req.query
  return res.render('minor', { age })
})

app.get('/major', middleware, (req, res) => {
  const { age } = req.query
  return res.render('minor', { age })
})

app.listen(3000)
