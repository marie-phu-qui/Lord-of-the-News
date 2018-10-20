let request = require('supertest')
let server = require('../server/server')


test('test if the server is up', (done) => {
  // Act
  request(server).get('/')
    .then((res, err) => {
      expect(res.statusCode).toBe(200)
      // Assert
      done()
    })
})

test('test the api is up', (done) => {
  // Act
  request(server).get('/api/v1/news')
    .then((res, err) => {
      expect(res).toBeTruthy()
      expect(res.body.length).toBeTruthy()
      // Assert
      done()
    })
})

test('test the api RES is an array of objects with used matching keys', (done) => {
  // Act
  request(server).get('/api/v1/news')
    .then((res, err) => {
      expect(res.body[0].source.name).toBeTruthy()
      expect(res.body[0].title).toBeTruthy()
      expect(res.body[0].url).toBeTruthy()
      expect(res.body[0].content).toBeTruthy()
      // Assert
      done()
    })
})