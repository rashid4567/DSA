const students = [
  { id: 1, name: "A", department: "CS", marks: 85 },
  { id: 2, name: "B", department: "IT", marks: 90 },
  { id: 3, name: "C", department: "CS", marks: 75 },
  { id: 4, name: "D", department: "IT", marks: 80 },
  { id: 5, name: "E", department: "EC", marks: 95 },
  { id: 6, name: "F", department: "CS", marks: 85 },
];

function find(arr) {
  return arr.map((std) => {
    if (std.marks >= 85) {
      return {
        ...std,
        status: "PASS",
      };
    } else {
      return {
        ...std,
        status: "FAIL",
      };
    }
  });
}

console.log(find(students));
