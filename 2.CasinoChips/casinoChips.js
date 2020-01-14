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

calculateDays([5, 3, 2]);
module.exports = calculateDays;
