let arr = ["apple", "ant", "banana", "ball", "cat", "car"];

function group(arr) {
  let map = new Map();
  for (let word of arr) {
    let first = word.charAt(0);
    if (!map.has(first)) {
      map.set(first, []);
    }
    map.get(first).push(word);
  }
  return Object.fromEntries(map);
}

console.log(group(arr));

