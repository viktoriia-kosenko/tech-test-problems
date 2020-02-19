const search = (arr, word) => {
  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] === "string" && arr[i] === word) {
      return true;
    } else if (Array.isArray(arr[i])) {
      let shortArr = [...arr[i], ...arr.slice(i + 1)];
      return search(shortArr, word);
    }
  }
  return false;
};

module.exports = search;
