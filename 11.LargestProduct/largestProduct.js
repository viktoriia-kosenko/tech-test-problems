function largestProduct(input) {
  let products = [];
  let numbers = input.split("").map(el => Number(el));

  for (let i = 0; i < numbers.length - 4; i++) {
    let product = numbers.slice(i, i + 5).reduce((a, b) => a * b, 1);
    products.push(product);
  }

  return Math.max(...products);
}

module.exports = largestProduct;
