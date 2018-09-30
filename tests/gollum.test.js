let { gollumify } = require('../server/lib/gollum')


// this is the best test I'll ever write today
test('test gollumify changing a parsed sentence to something else ?', function () {
  let string = 'the police is on the hunt for teens kiwis'
  let expected = 'the orc horde is on the hunt for hobbitses creatures'

  // Act
  let actual = gollumify(string)

  // Assert
  expect(actual).toEqual(expected)
})