const express = require('express')
// console.log(express)
const app = express()
const port = 5500
const web  = require('./routes/web')
const connectdb = require('./db/connectdb')









// dataconnectiondb
connectdb()

// For Data load
app.use(express.urlencoded({ extended: true }))
// ejs html css
app.set('view engine', 'ejs')
app.use(express.static('public'))







//   route load
app.use('/',web)
  app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })