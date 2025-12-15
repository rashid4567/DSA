function reverse(n){
    if(n === "")return "";
    return reverse(n.substring(1)) + n[0]
}
console.log(reverse("hello world"))