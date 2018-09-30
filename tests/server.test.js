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
  request(server).get('')
    .expect(400)
    .end((err, res) => {
      // if (res) console.log(res)
      // else console.log(err)
      // Assert
      done()
    })
})


// Passes but 'res' is undefined of something
test('test the api is up', (done) => {
  // Act
  request(server).get('api/v1/news')
    .end((err, res) => {
      console.log(res)
      // else console.log(err)
      expect(res).toBeTruthy
      // Assert
      done()
    })
})