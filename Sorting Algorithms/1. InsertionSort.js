const readline = require("./readline");

function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    let key = arr[i];
    let j = i - 1;
    while (j >= 0 && arr[j] > key) {
      arr[j + 1] = arr[j];
      j--;
    }
    arr[j + 1] = key;
  }
  console.log(arr);
}

readline(insertionSort);

/************************************
  Insertion Sort
-------------------------------------
1. Insertion sort proceeds by inserting each element at the proper 
    place in a sorted list. We divide our data in two list - sorted and 
    unsorted, then pick each unsorted element and place in sorted list at 
    appropriate place.
    This is also known as `Decrease and Conquer Sort`.

2. This sorting technique is considered same as Card Games.

3. Time Complexity of Insertion Sort:
      Best Case:  O(n) ---> {Data already sorted}
      Average Case: O(n^2)
      Worst Case: O(n^2)  -----> {Data in reverse sorted order}

4. Space Complexity: O(1); as it takes only 3 temporary variables.

5. Insertion sorts make more data movements and swapping, and for large 
    data list, large data swapping and movement is not a best practice.

6. Insertion sorts are best for less data sizes and almost sorted data.
7. Insertion sorts are Stable and in-place sorting algorithm.

**************************/
