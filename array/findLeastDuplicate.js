const arr = [4, 2, 7, 2, 4, 4, 7, 9, 2, 9, 9, 9];


function leastDuplicate(arr){
    
    let freq = {};
    for(let n of arr){
        freq[n] = (freq[n] || 0) + 1
    }
    
    let least = Infinity;
    let result = null;

    for(let n in freq){
        if(freq[n] > 1 && freq[n] < least){
            least = freq[n];
            result = n;
        }
    }

    if(!result){
        return "There is not duplicate value"
    }

    return result;
}

console.log(leastDuplicate(arr))