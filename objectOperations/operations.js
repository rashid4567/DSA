// 1 - function to delete the last property of an obj 

function deleteLast(obj){
    let key = Object.keys(obj);
    if(key.length === 0)return {};
    let last = key[key.length-1];
    delete obj[last]
    return obj
}
const obj = {a : 1, b : 2 , c : 3}
console.log(deleteLast(obj))
// 2 - make an obj immutable - recursion

function deepFreeze(obj){
    Object.freeze(obj);

    for(let key in obj){
        if(obj[key] === 'object' && obj[key] !== null && !Object.isFrozen(obj[key])){
            deepFreeze(obj[key])
        }
    }
    return obj
}
const user = {
    name : "Rashid",
    age : 21,
    address : {
        city : "kochi",
        pincode : 532255
    }
}
deepFreeze(user);
console.log("orginal one :-")
console.log(user)
user.name = "Midhun";
user.address.city = "mumbai";
console.log(user)

// 3 - how to remove a property from object?

function remove(obj, property){
    for(let key in obj){
        if(obj[key] === property){
            delete obj[key]
            return obj
        }
    }
    console.log("item in the object")
    return obj
}

let list = {a : 1, b : 2, c : 3, d : 4}
console.log(remove(list,3))


// 4 - check if object is empty

Object.keys(obj).length === 0
Object.values(obj).length === 0

// 5 - destructuring nested objects

const user12 = {
    name: "Rashid",
    address: {
        city: "Kochi",
        pin: 682001
    }
};

const {name, address:{city,pin}} = user12
console.log(name)
console.log(address)
console.log(city)
console.log(pin)
// 6 - key with highest value in objoct

function findHighest(obj){
    let maxChar = null;
    let max = -Infinity;
    for(let key in obj){
        if(obj[key] > maxChar){
            maxChar = obj[key]
            max = key
        }
    }
    return max
}

let count = {1 : 3, 2 :5, 3 :32, 4:43}
console.log(findHighest(obj))
// •⁠ ⁠remove last property from object


// •⁠ ⁠find sum of keys of an object
function sums(obj){
    let key = Object.keys(obj);
   let sum = 0
   for(let n of key){
       sum += Number(n)
   }
    return sum
}
console.log(sums(count))


// find key corresponds to highest value in an object

function highValue(obj){
    let maxValue = null;
    let maxKey = -Infinity;
    for(let key in obj){
        if(obj[key] > maxKey){
            maxValue = obj[key];
            maxKey = key
        }
    }
    return maxValue
}

console.log(highValue(count))
// remove object from array that has the lowest value for a key


function lowest(obj){
    let minValue = Infinity;
    let minKey = null
    for(let key in obj){
        if(obj[key] < minValue){
            minValue = obj[key]
            minKey = key
        }
    }
    delete obj[minKey]
    return obj
}
console.log(lowest(count))
//  throw error if all object values are not the same datatype
// sort array of objects based on a property
// remove the first and last keys in object

// conditional merging of 2 objects
// Convert nested object into flat object

// find average score of each class from an array of student objects