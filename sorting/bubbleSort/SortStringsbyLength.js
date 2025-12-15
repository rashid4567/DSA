function bubbleSortByLength(str) {
  str = str.split(" ");
  let n = str.length;
  let swapped;
  do {
    swapped = false;
    for (let i = 0; i < n - 1; i++) {
      if (str[i].length > str[i + 1].length) {
        [str[i], str[i + 1]] = [str[i + 1], str[i]];
        swapped = true;
      }
    }
  } while (swapped);
  return str.join(" ");
}
let str = "every hello one to welcome";
console.log(bubbleSortByLength(str));
