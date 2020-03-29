const { partsSums, sumsOfParts } = require("./sumsOfParts");

describe("partsSums", () => {
  test("with empty array as an argument should return array with one element", () => {
    expect(partsSums([])).toEqual([0]);
  });

  test("should return array of sums", () => {
    let result = partsSums([0, 1, 3, 6, 10]);
    let expectedResult = [20, 20, 19, 16, 10, 0];
    expect(result).toEqual(expectedResult);
  });

  test("should return false", () => {
    let result = partsSums([1, 2, 3, 4, 5, 6]);
    let expectedResult = [21, 20, 18, 15, 11, 6, 0];
    expect(result).toEqual(expectedResult);
  });
});

describe("sumsOfParts", () => {
  test("with empty array as an argument should return array with one element", () => {
    expect(sumsOfParts([])).toEqual([0]);
  });

  test("should return array of sums", () => {
    let result = sumsOfParts([0, 1, 3, 6, 10]);
    let expectedResult = [20, 20, 19, 16, 10, 0];
    expect(result).toEqual(expectedResult);
  });

  test("should return false", () => {
    let result = sumsOfParts([1, 2, 3, 4, 5, 6]);
    let expectedResult = [21, 20, 18, 15, 11, 6, 0];
    expect(result).toEqual(expectedResult);
  });
});
