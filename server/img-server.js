const express = require('express')
const app = express()
const cors = require('cors')

app.use(cors())
app.use(express.static('public'))

app.listen(5009, () => {
  console.log('http://localhost:5009');
})