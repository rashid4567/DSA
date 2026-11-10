const arr = [5, 2, 8, 5, 2, 5, 9, 8, 2, 2];

function find(arr){
    let freq = {};
    for(let n of arr){
        freq[n] = (freq[n] || 0) + 1;
    }

    let highest = -Infinity;
    let result = null;

    for(let n in freq){
        if(freq[n] > 1 && freq[n] > highest){
            highest = freq[n];
            result = n;
        }
    }

    return result ? result : "No duplicate value in the list";
}

console.log(find(arr))