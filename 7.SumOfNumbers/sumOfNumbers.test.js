const getSumOfNumbers = require("./sumOfnumbers");

test(" find the sum of all the numbers between including them too", () => {
  expect(getSumOfNumbers(-1, 2)).toEqual(2);
});

test(" find the sum of all the numbers between including them too", () => {
  expect(getSumOfNumbers(1, 1)).toEqual(1);
});

test(" find the sum of all the numbers between including them too", () => {
  expect(getSumOfNumbers(1, 2)).toEqual(3);
});
