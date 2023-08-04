/*(sorted )
problem statement: Given an array of integers nums and an integer target,
 return indices of the two numbers such that they add up to target.

 Example 1:

Input: nums = [2,7,11,15], target = 9
Output: [0,1]
Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].

Example 2:

Input: nums = [3,2,4], target = 6
Output: [1,2]

Example 3:

Input: nums = [3,3], target = 6
Output: [0,1]

 */


// brute force:

function getPairWithSum(arr, k) {
    const ans = [];
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {           //O(n)
        for (let j = i + 1; j < arr.length; j++) {   //O(n)
            sum = arr[i] + arr[j];
            if (sum === k) {
                ans.push([i, j]);
            }
        }
    }
    return ans;

}
const arr = [1, 2, 6, 7, 8, 10];
const k = 9;
console.log(getPairWithSum(arr, k));

// time complexity:O(n^2)  
// space complexity:O(1) 

// better solution using Map

function getPairs(nums, total) {
    const map = new Map();
    const ans = [];
    for (let i = 0; i < nums.length; i++) {
        if (map.has(total - nums[i])) {
            ans.push([map.get(total - nums[i]), i])
        }
        map.set(nums[i], i);
    }
    return ans;
}

const nums = [1, 2, 3, 6, 7, 8, 10];
const n = 9;
console.log(getPairs(nums, n));


// time complexity:o(n)
// space complexity:o(n) using Map to store key value pair

//optimal solution :using Two pointers

function getPairKsum(arr, total) {
    let i = 0, j = arr.length - 1;
    const ans = [];
    let sum = 0;
    while (i < j) {
        sum = arr[i] + arr[j];
        if (sum === total) {
            ans.push([i, j]);
            i++;
            j--;
        } else if (sum > total) {
            j--;
        } else {
            i++;
        }
    }

    return ans;
}

const arr1 = [1, 2, 3, 6, 7, 8, 10];
const total = 9;
console.log(getPairKsum(arr1, total));