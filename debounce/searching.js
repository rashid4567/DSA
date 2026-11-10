function debounce(callback, delay) {
  let timer;

  return function (...args) {
    clearTimeout(timer);

    timer = setTimeout(() => {
      callback.apply(this, args);
    }, delay);
  };
}

function search(val) {
  console.log(`API call : ${val}`);
}

const debounceSearch = debounce(search, 500);

debounceSearch("R");
debounceSearch("Ra");
debounceSearch("Ras");
debounceSearch("Rash");
debounceSearch("Rashi");
debounceSearch("Rashid");
