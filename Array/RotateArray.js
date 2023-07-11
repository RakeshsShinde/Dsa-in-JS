/* Given an Array of size N and a values K, around which we need to right rotate the array 

 Input: Array[] = {1, 3, 5, 7, 9}, K = 2.
 Output: 7 9 1 3 5

 Input: Array[] = {1, 2, 3, 4, 5}, K = 4.
 Output: 2 3 4 5 1 
 
 */

//Brute force Solution :
function rotateArr(arr, k) {
    const newArray = new Array(arr.length);
    let rotated = arr.splice(arr.length - r);

    var j = 0

    for (let i = 0; i < rotated.length; i++) {    //add the rotated elements first O(n)
        newArray[j++] = rotated[i];
    }

    for (let i = 0; i < arr.length; i++) {      //add remaining elements then O(n)
        newArray[j++] = arr[i]
    }

    return newArray
}

let ip = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let r = 4;
console.log(rotateArr(ip, r))

// Time complexity:O(n)  
// space complexity:O(n) for Auxillary array (newArray)



//optimized approach : reduce the space complexity (inbulit functions)

function rotateArray(arr, k) {
    if (k > arr.length) {         //rotating the six times is equals to the rotating one time is same 
        k = k % arr.length;
    }
    let removed = arr.splice(arr.length - k);
    arr.unshift(...removed);
    return arr;
}


let arr = [1, 3, 5, 7, 9];
let k = 6;
console.log(rotateArray(arr, k))

// Time complexity:O(n)
// space complexity:O(1)


// optimized approach:without inbuilt functions

// [1, 2, 3, 4, 5, 6, 7, 8, 9] =>  [5,4,3,2,1] + [9,8,7,6] = [5,4,3,2,1,9,8,7,6] => [6, 7, 8, 9, 1,2, 3, 4, 5]

function rotateByd(arr, k) {
    if (k > arr.length) {
        k = k % arr.length;
    }

    reverseArray(arr, arr.length - k, arr.length - 1);   //reverse the elements which need to rotate ..
    reverseArray(arr, 0, arr.length - 1);               //rotate the whole array from 0 to n-1
    return arr;
}

function reverseArray(arr, low, high) {
    while (low < high) {
        let temp = arr[low];
        arr[low] = arr[high];
        arr[high] = temp;
        low++;
        high--;
    }
}


let input = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let d = 4;
console.log(rotateByd(input, d));
