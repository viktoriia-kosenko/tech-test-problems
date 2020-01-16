const findSumOfMultiples = number => {
  let sumOfMultiples = 0;
  for (let i = 3; i < number; i += 3) {
    sumOfMultiples += i;
  }
  for (let q = 5; q < number; q = q + 5) {
    if (q % 3 !== 0) sumOfMultiples += q;
  }
  return sumOfMultiples;
};

module.exports = findSumOfMultiples;
