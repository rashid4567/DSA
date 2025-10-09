const str = "hello world";
function reverse(str){
    let res = "",word = "";
    for(let i=0; i<=str.length; i++){
        if(str[i] === " " || i === str.length){
         for(let j=word.length-1; j>=0; j--)res +=word[j]
             if(i !== str.length) res += " ";
             word = ""
         
        }else{
             word +=str[i]
         }
    }
    return res;
}
console.log(reverse(str))