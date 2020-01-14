const calculateDays = require("./casinoChips");

test("calculateDays", () => {
  expect(calculateDays([1, 1, 1])).toEqual(1);
});

test("calculateDays", () => {
  expect(calculateDays([1, 8, 1])).toEqual(2);
});

test("calculateDays", () => {
  expect(calculateDays([5, 3, 0])).toEqual(3);
});
