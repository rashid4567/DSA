let students = [
  { name: "A", marks: [50, 90, 70] },
  { name: "B", marks: [80, 60, 100] },
  { name: "C", marks: [40, 95, 60] },
];

// Find the highest mark scored by each student.

// Expected answer:
// [
//   { name: "A", highest: 90 },
//   { name: "B", highest: 100 },
//   { name: "C", highest: 95 }
// ]

function find(arr) {
  return arr.map((std) => {
    const max = Math.max(...std.marks);
    return {
      name: std.name,
      highest: max,
    };
  });
}

console.log(find(students));
