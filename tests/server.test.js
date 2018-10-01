let request = require('supertest')
let server = require('../server/server')


// there is ZERO reason that this passes :o

// test('test the api response', (done) => {
//   // Act
//   request(server).get('/api/v1/news')
//     .end((err, res) => {
//       // Assert
//       expect(res.text).toMatch('expected')

//       done()
//     })
// })

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

// test the shape of the api res body
test('test the api RES is an array of objects with used matching keys', (done) => {
  // Act
  request(server).get('/api/v1/news')
    .then((res, err) => {
      expect(res.body[0].source.name).toBeTruthy()
      expect(res.body[0].title).toBeTruthy()
      expect(res.body[0].url).toBeTruthy()
      expect(res.body[0].content).toBeTruthy()
      // those ones are not mandatory in our app
      // expect(res.body[0].source).toBeTruthy()
      // expect(res.body[0].source.id).toBeTruthy()
      // expect(res.body[0].author).toBeTruthy()
      // expect(res.body[0].description).toBeTruthy()
      // expect(res.body[0].urlToImage).toBeTruthy()
      // expect(res.body[0].publishedAt).toBeTruthy()
      // Assert
      done()
    })
})