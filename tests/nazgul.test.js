let { nazgulify } = require('../server/lib/nazgul')

test('test nazgulify changing a parsed sentence to something else ?', function () {
  let string = 'Once in Paris'
  let expected = 'Once ishi Minas Morgul'

  // Act
  let actual = nazgulify(string)

  // Assert
  expect(actual).toEqual(expected)
})