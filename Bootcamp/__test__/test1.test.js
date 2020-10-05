
function sum(a, b) {
  return a + b;
}

describe('Sum function', () => {
  test('Returns 8 for 5 and 3', () => {
    // precondition
    //--------

    // action
    const result = sum(5, 3)

    // assertion
    expect(result).toEqual(8)
  });
})