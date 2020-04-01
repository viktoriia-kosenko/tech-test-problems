function idBestUsers() {
  let args = [...arguments];
  let otherArgs = args.slice(1);
  let clients = args[0].filter(
    (el, index) =>
      args[0].indexOf(el) === index &&
      otherArgs.every(arr => arr.indexOf(el) >= 0)
  );

  if (clients.length === 0) {
    return [];
  } else {
    let answer = [];
    let allPurchases = [].concat(...args);
    clients.sort().forEach(client => {
      let num = allPurchases.filter(el => el === client).length;
      let index = answer.findIndex(el => el[0] === num);
      if (index >= 0) {
        answer[index][1].push(client);
      } else {
        answer.push([num, [client]]);
      }
    });
    return answer.sort((a, b) => b[0] - a[0]);
  }
}
