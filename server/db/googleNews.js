const knex = require('knex')
const config = require('../../knexfile').development
const db = knex(config)

function getRegularNews() {
  return db('googleNews').then(regNews => {
    return googleNews.map(regNews => {
      googleNews
    })
  })
}

module.exports = {
  getRegularNews
}