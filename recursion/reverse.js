function reverse(n){
    if(n === "")return "";
    return reverse(n.substring(1)) + n[0]
}
console.log(reverse("hello world"))


let str = "hello world";

function reverse(str, index = str.length - 1) {
  if (index < 0) return "";
  return str[index] + reverse(str, index - 1);
}

console.log(reverse(str));

function reverseArray(arr,index = arr.length-1){
  if(index < 0)return [];
  return [arr[index], ...reverseArray(arr, index - 1)]
}


const arr = [1,2,3,4,5];
console.log(reverseArray(arr));