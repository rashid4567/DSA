let str = "abc";

function permutations(str) {
  if (str.length === 0) return [""];

  let result = [];

  for (let i = 0; i < str.length; i++) {
    let char = str[i];
    let remaing = str.slice(0, i) + str.slice(i + 1);
    let res = permutations(remaing);
    for (let word of res) {
      result.push(char + word);
    }
  }
  return result;
}

console.log(permutations(str));
