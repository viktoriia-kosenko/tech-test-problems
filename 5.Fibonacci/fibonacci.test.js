const findFibonacci = require("./fibonacci");

test("findFibonacci", () => {
  expect(findFibonacci(10)).toEqual(44);
});

test("findFibonacci", () => {
  expect(findFibonacci(18)).toEqual(3382);
});

test("findFibonacci", () => {
  expect(findFibonacci(23)).toEqual(60696);
});

test("findFibonacci", () => {
  expect(findFibonacci(2)).toEqual(2);
});
