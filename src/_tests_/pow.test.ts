function pow(a: number) {
  return a ** 2;
}

describe("TS", () => {
  test("pow", async () => {
    expect(pow(3)).toEqual(9);
  });
});
