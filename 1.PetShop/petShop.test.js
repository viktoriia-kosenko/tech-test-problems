const {
  findPetsForSale,
  findPetsForSale2,
  findPetsForSale3
} = require("./petShop");

const allPets = [
  { name: "Tom", species: "cat", sold: false },
  { name: "Gromit", species: "dog", sold: true },
  { name: "Daffy", species: "duck", sold: false },
  { name: "Harry", species: "cat", sold: false },
  { name: "Monica", species: "duck", sold: true }
];
const expectedResult = ["cat", "duck", "cat"];

test("findPetsForSale using forEach method", () => {
  expect(findPetsForSale(allPets)).toEqual(expectedResult);
});

test("findPetsForSale using filter&map methods", () => {
  expect(findPetsForSale2(allPets)).toEqual(expectedResult);
});

test("findPetsForSale using reduce method", () => {
  expect(findPetsForSale3(allPets)).toEqual(expectedResult);
});
