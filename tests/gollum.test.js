test('filterOdds should filter the odd numbers', function () {
  // Arrange
  let arr = [1, 2, 3, 4]
  let expected = [1, 3]

  // Act
  let actual = translate.filterOdds(arr)

  // Assert
  expect(actual).toEqual(expected)
})