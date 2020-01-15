const calculateDays = chips => {
  if (chips.filter(chip => chip === 0).length >= 2) {
    return 0;
  } else {
    let minN = Math.min(...chips);
    let indexOfMin = chips.indexOf(minN);
    chips = chips.map((chip, index) => {
      return index === indexOfMin ? chip : chip - 1;
    });
    return 1 + calculateDays(chips);
  }
};

const calculateDaysMathMethod = chips => {
  const chipsSortedDescendant = chips.sort((a, b) => b - a);
  const [max, mid, min] = chipsSortedDescendant;
  const differenceTwoGreaterNum = max - mid;

  if (differenceTwoGreaterNum > min) {
    return min + mid;
  } else {
    return Math.floor((max + mid + min) / 2);
  }
};

module.exports = { calculateDays, calculateDaysMathMethod };
