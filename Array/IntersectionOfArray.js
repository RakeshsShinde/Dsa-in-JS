/*
 problem statement:
Given two integer arrays(sorted) nums1 and nums2, return an array of their intersection.
  may return the result in sorted order.

*/

function interSectionOfArray(a = [], b = []) {
    let n1 = a.length;
    let n2 = b.length;
    let visited = Array(n2).fill(0);
    var ans = [];
    for (let i = 0; i < n1; i++) {
        for (let j = 0; j < n2; j++) {
            if (a[i] === b[j] && visited[j] == 0) {   //check the corresponding pair check present in visited in b[]
                ans.push(a[i]);
                visited[j] = 1;
                break;
            }
            if (b[j] > a[i]) break;
        }
    }
    return ans;

}

// time complexity:O(n1*n2);
// Space complexity:O(n2)  -- for visited Array

let a = [1, 2, 2, 3, 3, 4, 5, 6];
let b = [2, 3, 3, 5, 6, 6, 7];
console.log(interSectionOfArray(a, b))


function getInterSection(a1, b1) {
    let i = 0;
    let j = 0;
    let ans = [];
    if (a1[i] < b1[j]) {
        i++;
    } else if (b1[j] > a1[i]) {
        j++;
    } else {
        ans.push(a1[i]);
        i++;
        j++;
    }

    return ans
}



let a1 = [1, 2, 2, 3, 3, 4, 5, 6];
let b1 = [2, 3, 3, 5, 6, 6, 7];
console.log(interSectionOfArray(a1, b1))

// Time complexity:O(n1+n2)
// Space complexity:O(1)