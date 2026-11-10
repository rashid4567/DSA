function getVowels(str, index = 0){
    if(str.length === index)return "";
    let vowels = "aeiouAEIOU";
    let res = vowels.includes(str[index], index + 1);
    return res + getVowels(str, index + 1)
}

