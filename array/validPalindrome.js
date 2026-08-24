let str = "A man, a plan, a canal: Panama";

// Output: true


function check(str){
    str = str.toLowerCase().replace(/[^a-z0-9]/g,"");

    let left = 0;
    let right = str.length-1;

    while(left < right){
        if(str[left] !== str[right]){
            return false;
        }
        left++;
        right--
    }
    return true;
}

console.log(check(str))