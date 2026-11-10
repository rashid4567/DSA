let arr = [1, 2, 3, 4, 5, 6, 7];

Array.prototype.myReduce = function (callback, initializeValue) {
  let acc;
  let sta;

  if (initializeValue !== undefined) {
    acc = initializeValue;
    startIndex = 0;
  } else {
    acc = this[0];
    sta = 1;
  }

  for (let i = sta; i < this.length; i++) {
    acc = callback(acc, this[i], i, this);
  }

  return acc;
};

let result = arr.myReduce((a, b) => {
  return a + b;
});

console.log(result);
