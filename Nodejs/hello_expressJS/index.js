const express = require('express')
const app = express()
const port = 8080
const host = '0.0.0.0'

//Routes
app.use(require('./routes'))

app.listen(port, host,() => {
  console.log('App listening at http://'+ host +':'+ port)
})
