//given arr of length n ,return the secondLargest elements 

//brute force approach:
function getSecondLargest(arr, n) {
    arr = Array.from(new Set(arr));
    if (n >= 2) {                     //if array have more than 2 element 
        arr.sort((a, b) => {
            return b - a;
        })

        return arr[1];
    }

    return -1;

}


const arr = [2, 6, 11, 12, 15];
console.log(getSecondLargest(arr, arr.length));

//Time complexity:O(nlogn)   -becuase sorting need o(nlogn)

//optimized way:

function secondLargest(arr, n) {
    let firstMax = -Infinity;
    let secondMax = -Infinity;

    if (arr.length < 2) return -1;

    //find largest number   :O(n)
    for (let i = 0; i < n; i++) {
        if (arr[i] > firstMax) {
            firstMax = arr[i];
        }
    }

    // find second Largest   :O(n)
    for (let i = 0; i < n; i++) {
        if (arr[i] > secondMax && arr[i] < firstMax) {
            secondMax = arr[i];
        }
    }
    return secondMax;

}


const arr1 = [45, 78, 34, 57, 15, 2, 65, 120, 114];
console.log(secondLargest(arr1, arr1.length));


//Time complexity:O(n)


