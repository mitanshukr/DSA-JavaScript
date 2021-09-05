const readline = require("./readline");

function countingSort(A, B, k) {
  let C = new Array(k + 1).fill(0);
  //0 to k elements; total (k+1)
  //all index filled with 0.

  A.forEach((elem, i) => {
    C[A[i]] = C[A[i]] + 1;
  });

  for (let i = 1; i < C.length; i++) {
    C[i] = C[i] + C[i - 1];
  }

  for (let i = A.length - 1; i >= 0; i--) {
    B[C[A[i]] - 1] = A[i]; //B[x-1] because our input array starts at index 0.
    C[A[i]] = C[A[i]] - 1;
  }
}

function main(arr) {
  const sortedArr = new Array(arr.length).fill(); //filled with undefined
  let maxElemVal = Number.MIN_SAFE_INTEGER;
  arr.forEach((elem) => {
    if (elem > maxElemVal) maxElemVal = elem;
  });
  countingSort(arr, sortedArr, maxElemVal);
  console.log(sortedArr);
}

readline(main);

/*****************
 *
 * 1. Counting Sort does not sort data by comparing two element values,
 *    like in other sorting techniques (Merge, Quick, etc...).
 *
 * 2. The bestest possible time complexity of Caomparison sorting can be O(nlogn).
 *
 * 3. Counting sort uses counting technqiue to sort the data, hence the time complexity
 *    becomes almost O(n) or to be precise O(n+k).
 *    where; n is length of input array and k = max value of given array element.
 *
 * 4. Space complexity is O(n) or O(n+k).
 *
 * 5. Counting sorts are Stable Sorting and not in-place sorting.
 *
 * 6. Pseudo code: https://images.app.goo.gl/yE3byb2Xmi2WZ39d8
 *
 *****************/
