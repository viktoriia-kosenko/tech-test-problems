const findPetsForSale = allPets => {
  const petsForSale = [];
  allPets.forEach(pet => {
    if (!pet.sold) petsForSale.push(pet.species);
  });
  return petsForSale;
};

module.exports = findPetsForSale;
