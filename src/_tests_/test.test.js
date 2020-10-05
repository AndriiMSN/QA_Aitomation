function sum(a, b) {
  return a + b
}

describe('Sum', () => {
  test('sum function ', async () => {
    expect(sum(5, 3)).toEqual(8)
  })
  test('not string ', async () => {
    expect(typeof sum(6, 2)).not.toEqual('string')
  })
  test('is defined ', async () => {
    let variable = 'test'
    expect(variable).toBeDefined()
  })
  let someArray = [1, 2, 3, 4, 5, 6, 7, 8]
  test.only('lengthArray ', async () => {
    expect(someArray.length).toBeLessThan(10)
  })

});
