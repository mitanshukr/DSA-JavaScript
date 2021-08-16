const readline = require("./readline");

function swap(arr, p, q) {
  const temp = arr[p];
  arr[p] = arr[q];
  arr[q] = temp;
}

function selectionSort(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    let minIndex = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[minIndex]) {
        minIndex = j;
      }
    }
    if (minIndex !== i) {
      swap(arr, i, minIndex);
    }
  }
  console.log(arr);
}

readline(selectionSort);

//------------------------------
//------------------------------
// Selection Sort
//------------------------------
//------------------------------
// 1. In Selection Sort, we find the smallest value from the given array
//    and place it at first position by swapping the values, similarly then
//    we find the 2nd smallest and place it at 2nd position...likewise,
//    we Select each of the smallest element in the array and place it at
//    appropriate position.

// 2. Complexities:
//      Time Complexity: O(n^2) [For all three cases]
//      Total Comparisons: O(n^2)
//      Total Swaps: O(n)
//      Space Complexity: O(1)

// 3. Selection sorts are in-place, comparison Sorting Alogrithms, and also
//    it is not a stable Sort.

// 4. Selection sort shines at the place where swapping is a cruical parameter
//    and when we want less number of swapping to sort the given data.

// 5. Selection Sort takes O(n) swapping whereas; Insertion sort takes O(n^2) swapping.
