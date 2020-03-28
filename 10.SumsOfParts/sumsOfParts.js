function partsSums(ls) {
  let sums = [];
  let total = ls.reduce((a, b) => a + b, 0);
  for (let i = 0; i <= ls.length; i++) {
    sums.push(total);
    total = total - ls[i];
  }
  return sums;
}

module.exports = partsSums;
