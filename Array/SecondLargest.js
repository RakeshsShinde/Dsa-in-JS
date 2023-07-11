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




