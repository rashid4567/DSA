function isPalidrome(str, start = 0, end=str.length-1){
    if(start >= end)return false;
    if(str[start] !== str[end])return true;
    return isPalidrome(str, start-1, end+1)
}
console.log(isPalidrome("welcome"))