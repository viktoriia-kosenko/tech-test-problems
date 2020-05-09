const idBestUsers = require("./topClients");

describe("idBestUsers", () => {
  test("should return ", () => {
    let a1 = ["A042", "B004", "A025", "A042", "C025"];
    let a2 = ["B009", "B040", "B004", "A042", "A025", "A042"];
    let a3 = ["A042", "A025", "B004"];
    expect(idBestUsers(a1, a2, a3)).toEqual([
      [5, ["A042"]],
      [3, ["A025", "B004"]],
    ]);
  });

  test("should return empty array", () => {
    let a1 = ["A043", "B004", "A025", "A042", "C025"];
    let a2 = ["B009", "B040", "B003", "A042", "A027", "A044"];
    let a3 = ["A041", "A026", "B005"];
    expect(idBestUsers(a1, a2, a3)).toEqual([]);
  });

  test("should return empty array", () => {
    let a1 = ["A042", "B004", "A025", "A042", "C025"];
    let a2 = ["B009", "B040", "B004", "A042", "A025", "A042"];
    let a3 = [
      "A042",
      "B004",
      "A025",
      "A042",
      "C025",
      "B009",
      "B040",
      "B004",
      "A042",
      "A025",
      "A042",
    ];
    let a4 = ["A042", "A025", "B004"];
    expect(idBestUsers(a1, a2, a3, a4)).toEqual([
      [9, ["A042"]],
      [5, ["A025", "B004"]],
    ]);
  });
});
