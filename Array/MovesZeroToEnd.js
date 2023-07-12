/* 

 Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the non-zero elements.
 Note that you must do this in-place without making a copy of the array.

 ip:arr = [1, 0, 2, 3, 2, 0, 1, 0, 0, 4, 5]
 op:arr=[1,2,3,1,4,5,0,0,0,0]


*/


// brute force approach :
function moveallZeros(arr, n) {
    //step one :store all non-negative number inside the Temp[]
    let temp = [];
    var tempIndex = 0;
    for (let i = 0; i < n; i++) {
        if (arr[i] !== 0) {
            temp[tempIndex++] = arr[i]
        }
    }

    //step 2:copy all non negative numebes in front 

    for (let i = 0; i < temp.length; i++) {
        arr[i] = temp[i]
    }
    //step 3:place 0 in remaining places 
    for (let i = temp.length; i < n; i++) {
        arr[i] = 0;
    }
    return arr;
}

const arr = [1, 0, 2, 3, 2, 0, 1, 0, 0, 4, 5];
console.log(moveallZeros(arr, arr.length));

// Time Complexity:O(n)
//Space complexity:O(n)

//optimized approach :using Two pointer 

function moveZeros(arr, n) {
    //step 1:place the first pointer to the first Zero in array
    var first;
    for (let i = 0; i < n; i++) {
        if (arr[i] === 0) {
            first = i;
            break;
        }
    }

    //step 2:traverse the elements from first+1 to n 
    // and if element is non-negative then swap  that non-negative with Zero 
    // increment first++

    for (let i = first + 1; i < n; i++) {
        var temp;
        if (arr[i] !== 0) {
            temp = arr[first];
            arr[first] = arr[i];
            arr[i] = temp;
            first++;
        }
    }

    return arr;
}

const nums = [1, 2, 0, 3, 2, 0, 1, 0, 0, 4, 5];
console.log(moveZeros(nums, nums.length))