let arr = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

function reverseRow(arr) {
  for (let i = 0; i < arr.length; i++) {
    arr[i].reverse();
  }

  return arr;
}

console.log(reverseRow(arr));

// let arr = [
//   [1, 2, 3],
//   [4, 5, 6],
//   [7, 8, 9]
// ];

// Output:
// [
//   [3, 2, 1],
//   [6, 5, 4],
//   [9, 8, 7]
// ]

function find(arr) {
  let res = [];
  for (let i = 0; i < arr.length; i++) {
    let row = [];
    for (let j = arr[0].length - 1; j >= 0; j--) {
      row.push(arr[i][j]);
    }

    res.push(row);
  }
  return res;
}

console.log(find(arr));
