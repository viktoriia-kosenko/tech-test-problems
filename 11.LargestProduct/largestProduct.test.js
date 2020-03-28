const largestProduct = require("./largestProduct");

describe("largestProduct", () => {
  test("should return greatest product of five consecutive digits in the given string of digits", () => {
    expect(largestProduct("123834539327238239583")).toBe(3240);
  });

  test("should return greatest product of five consecutive digits in the given string of digits", () => {
    expect(largestProduct("92494737828244222221111111532909999")).toBe(5292);
  });
});
