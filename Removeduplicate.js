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
        return n;
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


