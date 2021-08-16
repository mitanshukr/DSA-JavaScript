const readline = require("./readline");

function swap(arr, p, q) {
  const temp = arr[p];
  arr[p] = arr[q];
  arr[q] = temp;
}

function bubbleSort(arr) {
  let swapped;
  let j = 0; //no. of sorted index or elements.
  let swapCount = 0; //optional feature
  do {
    swapped = false;
    for (let i = 0; i < arr.length - 1 - j; i++) {
      if (arr[i] > arr[i + 1]) {
        swap(arr, i, i + 1);
        swapped = true;
        swapCount++;
      }
    }
    j++;
  } while (swapped);

  console.log(arr);
  console.log("Total Number of Swaps required: " + swapCount);
}

readline(bubbleSort);

/*****************************************************
* Bubble Sorting:
* ---------------------------------------
* 1. Bubble Sorting Algorithm sorts by swapping adjacent elements, 
     if they are out of order with respect to each other.
*
* 2. Bubble sort is not recommended to be used by experts.
* 3. However, the Time and Space Complexity of Bubble Sort is same as
     Insertion Sort, but experiments shows Bubble sorts performs very 
     badly.(Wikipedia)
*
* 4. Time Complexity of Bubble Sort:
        - Worst Case: O(n^2) -----> O(n^2) swaps.
        - Average Case: O(n^2)
        - Best Case: O(n) -----> No Swapping [O(1)] (Already Sorted).
*
* 5. Space Complexity: O(1) -----> 3 Variables.
*
* 6. Bubble sort is a Stable and In-place sorting algorithm.
*
* 7. Pseudo Code [Bubble Sort]:
        do
            swapped = false;
            for i = 1 to indexOfUnsortedElement-1
                if leftElement > rightElement
                    swap(leftElement, rightElement);
                    swapped = true;
        while swapped;
        END;
*
*
******************************************************/
