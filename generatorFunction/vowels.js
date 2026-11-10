function* vowels(str) {
  const vowel = "aeiouAEIOU";
  for (let char of str) {
    if (vowel.includes(char)) {
      yield char;
    }
  }
}

const gen = vowels("helloworld");

for (let char of gen) {
  console.log(char);
}
