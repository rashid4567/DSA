let students = [
  { name: "A", marks: [32, 75, 34, 67, 45] },
  { name: "B", marks: [65, 86, 23, 100, 43] },
  { name: "C", marks: [22, 67, 89, 65, 34] },
];

// Find the student with the highest total marks.

// Expected answer:
// {
//   name: "B",
//   total: 317
// }

function find(arr) {
  let highest = arr.map((std) => {
    let sum = std.marks.reduce((a, b) => a + b, 0);
    return {
      name: std.name,
      total: sum,
    };
  });

  let maxChar = null;
  let max = -Infinity;

  for (let n in highest) {
    if (highest[n].total > max) {
      max = highest[n].total;
      maxChar = highest[n].name;
    }
  }

  return { name: maxChar, total: max };
}

console.log(find(students));
