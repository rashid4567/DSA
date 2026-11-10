const first = () => {
  return new Promise((res, rej) => {
    setTimeout(() => {
      res(5);
    }, 2000);
  });
};

const second = () => {
  return new Promise((res, rej) => {
    setTimeout(() => {
      res(2);
    }, 2000);
  });
};

const main = async () => {
  try {
    const [a, b] = await Promise.all([first(), second()]);
    const sum = a + b;
    console.log(sum);
  } catch (err) {
    console.log(err);
  }
};

main();
