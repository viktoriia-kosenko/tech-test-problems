const { calculateDays, calculateDaysMathMethod } = require("./casinoChips");

test("calculateDays", () => {
  expect(calculateDays([0, 0, 10])).toEqual(0);
});

test("calculateDays", () => {
  expect(calculateDays([1, 1, 1])).toEqual(1);
});

test("calculateDays", () => {
  expect(calculateDays([1, 8, 1])).toEqual(2);
});

test("calculateDays", () => {
  expect(calculateDays([5, 3, 0])).toEqual(3);
});

test("calculateDays", () => {
  expect(calculateDays([12, 12, 12])).toEqual(18);
});

test("calculateDays using Math logic when all numbers are equal", () => {
  expect(calculateDaysMathMethod([120, 120, 120])).toEqual(180);
});

test("calculateDays using Math logic when difference between two greater number is less than the smallest one ", () => {
  expect(calculateDaysMathMethod([1200, 1250, 1000])).toEqual(1725);
});

test("calculateDays using Math logic when difference between two greater number is equal the smallest one ", () => {
  expect(calculateDaysMathMethod([1300, 600, 700])).toEqual(1300);
});

test("calculateDays using Math logic when difference between two greater number is more than the smallest one ", () => {
  expect(calculateDaysMathMethod([3200, 1200, 1000])).toEqual(2200);
});
