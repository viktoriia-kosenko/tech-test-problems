function idBestUsers() {
  let args = [...arguments];
  let numOfMonth = args.length;

  let otherArgs = args.slice(1);
  let clients = {};
  args[0].forEach((el) => {
    if (!clients[el]) {
      clients[el] = Array(numOfMonth).fill(0);
      clients[el][0] = 1;
    } else {
      clients[el][0]++;
    }
  });

  otherArgs.forEach((month, index) => {
    month.forEach((client) => {
      if (clients[client]) {
        clients[client][index + 1]++;
      }
    });
  });
  const map = new Map();

  for (let key in clients) {
    if (!clients[key].includes(0)) {
      let sum = clients[key].reduce(function (a, b) {
        return a + b;
      }, 0);
      if (map.has(sum)) {
        let oldValue = map.get(sum);
        oldValue.push(key);
        oldValue.sort();
      } else {
        map.set(sum, [key]);
      }
    }
  }

  const arr = Array.from(map);

  return arr.sort((a, b) => b[0] - a[0]);
}

module.exports = idBestUsers;
