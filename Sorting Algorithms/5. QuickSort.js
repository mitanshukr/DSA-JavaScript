const readline = require("./readline");

function swap(arr, p, q) {
  const temp = arr[p];
  arr[p] = arr[q];
  arr[q] = temp;
}

function partition(arr, l, h) {
  const pivot = arr[l]; //taking first element as pivot
  let i = l;
  let j = h;

  while (i < j) {
    while (arr[i] <= pivot && i < h) i++;
    while (arr[j] > pivot) j--;
    if (i < j) {
      swap(arr, i, j);
    }
  }
  arr[l] = arr[j];
  arr[j] = pivot;
  return j;
}

// l ---> starting(low) index
// h ---> last(high) index
// p ---> pivot index (partition index)
function quickSort(arr, l, h) {
  if (l < h) {
    let p = partition(arr, l, h);
    quickSort(arr, l, p - 1);
    quickSort(arr, p + 1, h);
  }
}

function main(arr) {
  const l = 0;
  const h = arr.length - 1;
  quickSort(arr, l, h);
  console.log(arr);
}

readline(main);

/****************************
Quick Sort
---------------------

1. Quick Sort is also based on Divide and conquer technique. It is called 
    to be a fast sorting alogrithm, with average time complexity O(n*logn).
    In this sorting type, we divide the given data in two parts recursively, 
    and then combine the sorted parts in the end. 

2. The major difference between Quick Sort and merge sort is their way of 
    diving the data; Merge sort divides the data in almost two equal parts, but 
    in Quick sort we select an element(pivot) from the data(generally, first 
    element); place it at its appropriate position in the data array, so that 
    all the left side data from pivot should be less than equal to pivot and 
    right side data should be greater than pivot.
    We divide the data(array) from the pivot point.

3. In Quick sort, data partitioning is complicated and combining is trivial. 
    In merge sort, data partitioning is trivial and combining is complicated.

4. The another main benefit of Quick sort over Merge sort is Space complexity.
	  Space Complexity of Quick Sort: O(logn)
	  We know, for merge sort it is: O(n)

5. Time complexity:
	  # Worst case: O(n^2) [Data is already sorted or reverse sorted, and 
                         pivot is taken as first element]
	  # Avergae Case: O(n*logn)
	  # Best Case: O(n*logn) [Pivot lies at the mid of data array]~ as 
                           like Merge Sort.

6. If you notice, the space complexity of Quick sort is better than 
    Merge sort, but the worst case time complexity of Quick sort is 
    not better or even equal to Merge sort.
  The deciding factor here seems to be the Selection of pivot element.

7. So, to get this time complexity improved, we can select the pivot 
    randomly to avoid the worst case of O(n^2), this type of Quick sort 
    are called as Randomized Quick Sort.

8. Randomized Quick Sort: (Picking the pivot randomly in each recursion)
	  Time Complexity: O(n*logn) [all the three cases]

9. Quick sort were mostly used in core programming languages to implement data 
    sorting. 
10.Quick Sort is a general purpose, in-place and unstable sorting alogrithm.

**************/
