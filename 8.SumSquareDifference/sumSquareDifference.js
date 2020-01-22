const getSumSquareDifference = n => {
  let sumOfSquare = 0;
  let sumOfNumber = (n * (n + 1)) / 2;
  for (let i = 1; i <= n; i++) {
    sumOfSquare += Math.pow(i, 2);
  }

  return Math.pow(sumOfNumber, 2) - sumOfSquare;
};

module.exports = getSumSquareDifference;
