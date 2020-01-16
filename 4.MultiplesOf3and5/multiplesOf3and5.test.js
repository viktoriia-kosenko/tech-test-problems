const findSumOfMultiples = require("./multiplesOf3and5");

test("findSumOfMultiples should return sum of multiples of 3 or 5 that are below 10", () => {
  expect(findSumOfMultiples(10)).toEqual(23);
});

test("findSumOfMultiples should return sum of multiples of 3 or 5 that are below 10", () => {
  expect(findSumOfMultiples(1000)).toEqual(233168);
});

test("findSumOfMultiples should return sum of multiples of 3 or 5 that are below 10", () => {
  expect(findSumOfMultiples(49)).toEqual(543);
});
