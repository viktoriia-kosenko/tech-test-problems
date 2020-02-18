const search = require("./needleInAHaystack");

describe("search", () => {
  test("should return 1", () => {
    let result = search([["toe", "finger"], ["alien"]], "toe");
    expect(result).toBe(1);
  });
});
