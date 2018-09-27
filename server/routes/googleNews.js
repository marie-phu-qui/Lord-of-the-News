const express = require('express')
const router = express.Router()
const request = require('superagent')


// const db = require('../db/googleNews')
const googleAPI_KEY = 'apiKey=4db317e841ff4a9ab8831f158ed48c29'
const country = 'country=nz&'

router.get('/', (req, res) => {
  request.get('https://newsapi.org/v2/top-headlines?' + country + googleAPI_KEY)
    .then(ApiRes => {
      res.json(ApiRes.body.articles)
    })
    .catch(err => {
      console.log(err)
    })
})


module.exports = router