const { Potion } = require("./potionClass");

describe("Basic tests", () => {
  test("Should return correct volume of portion", () => {
    let potion = new Potion([153, 210, 199], 32);
    expect(potion.volume).toBe(32);
  });

  test("Should return correct color of potion", () => {
    let potion = new Potion([255, 23, 148], 19);
    expect(potion.color).toEqual([255, 23, 148]);
  });

  test("Should return new potion whith the same credentials", () => {
    let felix_felicis = new Potion([255, 255, 255], 7);
    let shrinking_solution = new Potion([51, 102, 51], 12);
    let new_potion = felix_felicis.mix(shrinking_solution);

    expect(new_potion).toEqual({ color: [127, 159, 127], volume: 19 });
  });
});
