
//brute force approach :using set 

function getUnion(arr1 = [], arr2 = []) {

    let set = new Set();

    //add all elements from arr1 
    for (const item of arr1) {     //O(n)
        set.add(item);
    }
    //add all elements from arr2
    for (const item of arr2) {    //O(m)
        set.add(item)
    }

    return Array.from(set).sort((a, b) => a - b)

    //O(n+m) --converting the the set to Array if both array are unique elements 
    //O(n log n) -- for sorting both array elements 

    //time complexity : O((n + m) log(n + m))
    //space complexity:O(n) 

}


const arr1 = [1, 1, 2, 2, 3, 5, 6, 7, 8, 9];
const arr2 = [1, 2, 4, 5, 8, 9, 10, 11]
console.log(getUnion(arr1, arr2));



//optimized approach using two pointer :

function getUnionofSorted(nums1, nums2) {
    let n1 = nums1.length;
    let n2 = nums2.length;
    let temp = [];
    let k = 0, i = 0, j = 0;

    while (i < n1 && j < n2) {
        if (arr1[i] <= arr2[j]) {
            if (temp[temp.length - 1] !== arr1[i] || temp.length == 0) {
                temp[k++] = arr1[i++];
            } else {
                i++;
            }
        } else {
            if (temp[temp.length - 1] !== arr2[j] || temp.length == 0) {
                temp[k++] = arr2[j++];
            }
            else {
                j++;

            }
        }
    }

    while (i < n1) {
        if (temp[temp.length - 1] !== arr1[i] || temp.length == 0) {
            temp[k++] = arr1[i++];
        } else {
            i++;
        }
    }

    while (j < n2) {
        if (temp[temp.length - 1] !== arr2[j] || temp.length == 0) {
            temp[k++] = arr2[j++];
        }
        else {
            j++;

        }
    }


    return temp;
}

//Time complexity:O(n1+n2)
//Space complexity:O(n1+n2) --for returning the result 


const nums1 = [1, 1, 2, 2, 3, 5, 6, 7, 8, 9];
const nums2 = [1, 2, 4, 5, 8, 9, 10, 11]
console.log(getUnionofSorted(nums1, nums2));




