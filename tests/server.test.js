let request = require('supertest')
let server = require('../server/server')


// there is ZERO reason that this passes :o

test('test the home route', (done) => {
  // Act
  request(server).get('/api/v1/news')
    .end((err, res) => {
      // Assert
      console.log(res.text)
      expect(res.text).toMatch('expected')

      done()
    })
})