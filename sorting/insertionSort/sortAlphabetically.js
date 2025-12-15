function insertionSort(str) {
  str = str.split(" ");
  for (let i = 1; i < str.length; i++) {
    let current = str[i];
    let j = i - 1;
    while (j >= 0 && str[j] > current) {
      str[j + 1] = str[j];
      j--;
    }
    str[j + 1] = current;
  }
  return str.join(" ");
}
let str = "welcome every one i am here how you are here";
console.log(insertionSort(str));
