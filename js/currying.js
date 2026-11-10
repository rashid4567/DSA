function add(a, b, c) {
  return function (a) {
    return function (b) {
      return function (c) {
        return a + b + c;
      };
    };
  };
}

console.log(add(4)(6)(23));
