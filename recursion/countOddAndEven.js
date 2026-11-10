let arr = [1, 2, 4, 7, 8, 9]
//→ { even: 3, odd: 3 }

function countOddAndEven(arr, index = 0, result = {odd : 0, even : 0}){
    if(arr.length === index)return result;
    if(arr[index] % 2 === 0){
        result.even++
    }else{
        result.odd++
    }

    return countOddAndEven(arr,index+1,result);
}

console.log(countOddAndEven(arr))