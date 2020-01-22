const getSumSquareDifference = require("./sumSquareDifference");

test("Find the difference between the sum of the squares of the first n natural numbers and the square of the sum", () => {
  expect(getSumSquareDifference(10)).toEqual(2640);
});

// test("Find the difference between the sum of the squares of the first n natural numbers and the square of the sum", () => {
//   expect(getSumSquareDifference(20)).toEqual(41230);
// });

// test("Find the difference between the sum of the squares of the first n natural numbers and the square of the sum", () => {
//   expect(getSumSquareDifference(100)).toEqual(25164150);
// });
