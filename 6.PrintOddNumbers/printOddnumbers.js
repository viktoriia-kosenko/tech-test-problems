const printOddnumbers = () => {
  let number = 1;
  do {
    number % 11 === 0 ? console.log("SNAP") : console.log(number);
    number += 2;
  } while (number < 100);
};

printOddnumbers();
