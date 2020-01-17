const findFibonacci = n => {
  let fibonacciArray = [];

  if (n < 2) {
    return 0;
  } else {
    fibonacciArray = [1, 2];
    for (let i = 2; i < n; i++) {
      let nextElement = fibonacciArray[i - 2] + fibonacciArray[i - 1];
      fibonacciArray.push(nextElement);
    }
  }

  return fibonacciArray.reduce((sum, el) => {
    return el % 2 === 0 ? (sum = sum + el) : sum;
  }, 0);
};

module.exports = findFibonacci;
