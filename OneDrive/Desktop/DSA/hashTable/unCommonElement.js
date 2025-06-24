function uncommonElement(arr1,arr2){
    let map = {};
    for(let item of arr1) map[item] = (map[item] || 0) + 1;
    for(let item of arr2) map[item] = (map[item] || 0) + 1;
    return Object.keys(map).filter(key => map[key] ===1)
}

let arr1 =[1,2,3,4,5,6]
let arr2 = [5,6,7,8,0,2,1]
console.log(uncommonElement(arr1,arr2))