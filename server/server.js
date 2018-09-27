const express = require('express')
const path = require('path')
const server = express()

const googleNewsRoutes = require('./routes/googleNews');
const gollumRoutes = require('./routes/gollum');


server.use(express.static(path.join(__dirname, '..', 'public')))
server.use(express.json())

server.get('/news', (req, res) => {
  res.send('print something')
})

server.use('/news', googleNewsRoutes)
// server.use('/api/v1/gollum', gollumRoutes)


module.exports = server