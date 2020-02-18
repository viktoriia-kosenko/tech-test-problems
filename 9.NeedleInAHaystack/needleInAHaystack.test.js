const search = require("./needleInAHaystack");

describe("search", () => {
  test("should return true", () => {
    let result = search([["toe", "finger"], ["alien"]], "toe");
    expect(typeof result).toEqual("boolean");
    expect(result).toBeTruthy();
  });

  test("should return false", () => {
    let result = search([["electricity"]], "gas");
    expect(typeof result).toEqual("boolean");
    expect(result).toBeFalsy();
  });
});
