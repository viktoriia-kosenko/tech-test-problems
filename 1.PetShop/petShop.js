const findPetsForSale = allPets => {
  const petsForSale = [];
  allPets.forEach(pet => {
    if (!pet.sold) petsForSale.push(pet.species);
  });
  return petsForSale;
};

const findPetsForSale2 = allPets => {
  return allPets.filter(pet => !pet.sold).map(pet => pet.species);
};

const findPetsForSale3 = allPets => {
  return allPets.reduce((petsForSale, pet) => {
    return !pet.sold ? [...petsForSale, pet.species] : petsForSale;
  }, []);
};

module.exports = { findPetsForSale, findPetsForSale2, findPetsForSale3 };
