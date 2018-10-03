let { nazgulify } = require('../server/lib/nazgul')
// import { nazgulify } from '../server/lib/nazgul'



test('test nazgulify changing a parsed sentence to something else ?', function () {
  let string = 'Once in a blue moon'
  let expected = 'Once in a dark moon'

  // Act
  let actual = nazgulify(string)

  // Assert
  expect(actual).toEqual(expected)
})