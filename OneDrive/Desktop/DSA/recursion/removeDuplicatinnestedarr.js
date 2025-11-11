// Remove duplicate numbers from an nested array using recursion

function removeDuplicates(arr, seen = new Set()){
    if(arr.length === 0)return;
    let res = [];
    for(let n of arr){
        if(Array.isArray(n)){
            res.push([...removeDuplicates(arr, seen)])
        }else{
            if(!seen.has(n)){
                seen.add(n);
                res.push(n)
            }
        }
    }
    return res
}
console.log(removeDuplicates([1, [2, 3, [2, 1]], 4, 3, [5, [1, 6]]])); 