function countVowels(str, index = 0) {
  if (index === str.length) return 0;
  let vowels = "aeiouAEIOU";
  let count = vowels.includes(str[index]) ? 1 : 0;
  return count + countVowels(str, index + 1);
}
console.log(countVowels("welcome"));
