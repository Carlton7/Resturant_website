const express = require('express')
const app = express()
const RestaurantRouter = require('./routes/restaurant')

app.set('view engine', 'ejs')

app.get('/', (req,res) => {
  res.render('index.ejs')
})

app.use('/italian', RestaurantRouter)

app.listen(5000)