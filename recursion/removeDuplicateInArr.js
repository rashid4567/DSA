function duplicate(arr, index=0, seen = new Set()){
    if(index >=arr.length)return [];
    let char = arr[index];
    if(seen.has(char)){
        return duplicate(arr, index+1, seen)
    }else{
        seen.add(char)
        return [char, ...duplicate(arr, index+1, seen)]
    }
}
console.log(duplicate([1,2,1,2,3,4,1,2,3,5,6,7]))