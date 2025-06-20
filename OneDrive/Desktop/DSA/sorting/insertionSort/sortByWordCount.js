function sortByWordCount(str) {
  str = str.split(" ");
  for (let i = 1; i < str.length; i++) {
    let currnet = str[i];
    let j = i - 1;
    while (j >= 0 && str[j].length > currnet.length) {
      str[j + 1] = str[j];
      j--;
    }
    str[j + 1] = currnet;
  }
  return str.join(" ");
}

let str = "Hello i am learning insertion sort using java script";
console.log(sortByWordCount(str));
