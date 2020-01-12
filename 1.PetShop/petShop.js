const findPetsForSale = allPets => {
  const result = [];
  allPets.forEach(pet => {
    if (!pet.sold) result.push(pet.species);
  });
  return result;
};

module.exports = findPetsForSale;
