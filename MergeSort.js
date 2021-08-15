const readline = require("./readline");

function merge(arr, p, q, r) {
  const L = [];
  const R = [];
  for (let i = p; i <= q; i++) {
    L.push(arr[i]);
  }
  for (let i = q + 1; i <= r; i++) {
    R.push(arr[i]);
  }
  L.push(Number.POSITIVE_INFINITY); //sentinel value
  R.push(Number.POSITIVE_INFINITY); //sentinel value

  for (let k = p, i = 0, j = 0; k <= r; k++) {
    if (L[i] <= R[j]) {
      arr[k] = L[i];
      i++;
    } else {
      arr[k] = R[j];
      j++;
    }
  }
  //   return arr;
}

function mergeSort(arr, p, r) {
  if (p >= r) {
    return;
  }
  const q = Math.floor((p + r) / 2);
  mergeSort(arr, p, q);
  mergeSort(arr, q + 1, r);
  merge(arr, p, q, r);
}

function main(arr) {
  mergeSort(arr, 0, arr.length - 1);
  console.log(arr);
}

readline(main);

/*********************************************************
Merge Sort
---------------------
1. Merge Sort works on 'Divide and Conquer technique'. We divide the 
   given array into two equal(almost) parts, sort both the parts seperately 
   and merge them back to get the sorted array.

2. Interesting point here is, the array is recursively divided till we 
   get single element, which is obviously sorted, and then merge the arrays
   repeatedly to get the sorted single array.

3. Time Complexity{All Cases}: O(n*logn) [base2] 
   Brief Explanation:
    T(n) = 2*T(n/2) + [Merging of both subarray T(n/2)]
         = ....recursion....
         = c*log(n) + c*n
         = O(n*logn)
    Here;
      T(n) : Time Complexity of Array of n-size.
      c : Constant

4. Space Complexity: O(n)

5. Merge sort is stable sort, but not an in-place sort.

6. Merge sorts are a good example of External Sorting.
7. Merge sort are useful when there is very large data to sort, and we are 
   short of RAM memory. We can take advantage of External Sorting by dividing 
   the data into small chunks and apply merge sort.

8. Merge sorts take O(n) space complexity which is not good, hence Quick 
   sort is a good altertive where space is a crucial parameter.

9. Merge sorts are not recommended for small and almost sorted arrays.

10. Pseudo Code here: https://stackoverflow.com/questions/43163061/merge-sort-implementation-questions-in-java

***************************************************/
