const getSumOfNumbers = (a, b) => {
  let sum = 0;
  if (a === b) {
    sum = a;
  } else {
    let arr = [a, b].sort((a, b) => a - b);
    sum = (arr[1] - arr[0] + 1) * ((a + b) / 2);
  }

  return sum;
};

module.exports = getSumOfNumbers;
