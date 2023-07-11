//Brute force approach:using set

function rmDuplicate(arr = [], n) {
    let set = new Set(arr);
    arr.length = 0;

    set.forEach((value) => {
        arr.push(value);
    })
    return arr;
}


let input = [1, 2, 2, 3, 4, 4, 4, 5, 5]
console.log(rmDuplicate(input, input.length))

// T.C :O(n)
// S.C:O(n)

/*   Remove duplicate from sorted array :
first approch :

1) create the auxillary array temp[] to store unique element 
2) traverse the input array one by one and copy unique element from arr[] to temp[]
  . also keep track of count of unique elements ,let this be j
3)copy j elements from temp[] to arr[]
 
T.c =>O(n)
S.C => o(n) becuase need extra array to store unique elements 

  */

function removeduplicate(arr, n) {

    if (n < 2) {         //array have one or no elements 
        return arr;
    }

    let temp = [];
    let j = 0;
    for (let i = 0; i < n; i++) {
        if (arr[i] != arr[i + 1]) {
            temp[j++] = arr[i]
        }
    }


    for (let i = 0; i < j; i++) {
        arr[i] = temp[i];
    }

    arr.splice(j)
    return arr;

}


const arr = [2, 2, 2, 2, 2];
console.log(removeduplicate(arr, arr.length));



/*
 reduce the space  complexity by maintaining the a seperate index for same array
 as maintained for different array
 
 1) traverse the input array  from 0 to n
  . if unique element is found then swap the arr[j] & arr[i]
  .keep track of count of unique elements .

2)return arr[]

T.C => o(n)
S.C =>o(1)
*/

function removeduplicateII(arr, n) {
    if (n < 2) return arr;
    let j = 0;

    for (let i = 0; i < n; i++) {
        if (arr[i] != arr[i + 1]) {
            arr[j++] = arr[i];
        }
    }

    arr.splice(j);
    return arr;
}

const ip = [1, 2, 2, 3, 4, 4, 4, 5, 5];
console.log(removeduplicate(ip, ip.length));


