function binarySearch(arr,target){
    arr = arr.sort((a,b)=> a - b,0);
    
    let left = 0;
    let right = arr.length-1;

    while(left <= right){
        let mid = Math.floor((left + right)/2);

        if(arr[mid] === target){
            return mid;
        }else if(arr[mid] < target){
            left = mid + 1
        }else {
            right = mid - 1
        }
    }
    return -1;
}

console.log(binarySearch([5,4,3,2,6,7,8,9,1],5))