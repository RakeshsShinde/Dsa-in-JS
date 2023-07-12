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