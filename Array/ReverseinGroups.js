/*
problem statement: 
Given an array arr[] and an integer K, 
the task is to reverse every subarray formed by consecutive K elements

Examples: 

    Input: arr[] = [1, 2, 3, 4, 5, 6, 7, 8, 9], K = 3 
    Output: 3, 2, 1, 6, 5, 4, 9, 8, 7

    Input: arr[] = [1, 2, 3, 4, 5, 6, 7, 8], K = 5 
    Output: 5, 4, 3, 2, 1, 8, 7, 6

 */



function reverse(arr, n, k) {
    for (let i = 0; i < n; i = i + k) {
        let low = i;
        let high = Math.min(i + k - 1, n - 1);   //k is not multiple of n 
        let temp;
        while (low < high) {
            temp = arr[low];
            arr[low] = arr[high];
            arr[high] = temp;
            low++;
            high--;
        }
    }

    return arr;


}


let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
let n = arr.length;
k = 3;
console.log(reverse(arr, n, k));