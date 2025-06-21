function mergeSortArray(arr1,arr2){
    let i=0;
    let j=0;
    let merged = [];
    while(i < arr1[i] && j < arr2[j]){
        if(arr1[i] < arr2[j]){
            merged.push(arr1[i]);
            i++;
        }else{
            merged.push(arr2[j]);
            j++;
        }
    }

    while(i <arr1[i]){
        merged.push(arr1[i]);
        i++;
    }
    while(j < arr2[j]){
        merged.push(arr2[j]);
        j++;
    }
    return merged
}

let arr1 = [1,3,5,7,9,11,13];
let arr2 = [2,4,6,8,10,12,14];
console.log(mergeSortArray(arr1,arr2))