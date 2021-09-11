// Recursive function of Binary Search.
function r_binarySearch(arr, l, r, searchElem) {
  if (l > r) {
    return "DATA NOT FOUND";
  }
  const m = Math.floor((l + r) / 2); //middle index
  if (arr[m] === searchElem) {
    return `DATA FOUND AT INDEX {${m}}`;
  } else if (arr[m] > searchElem) {
    //search in left half
    return r_binarySearch(arr, l, m - 1, searchElem);
  } else if (arr[m] < searchElem) {
    //search in right half
    return r_binarySearch(arr, m + 1, r, searchElem);
  }
}

// Iterative function of Binary Search.
function i_binarySearch(arr, l, r, searchElem) {
  while (l <= r) {
    const m = Math.floor((l + r) / 2); //middle index
    if (arr[m] === searchElem) {
      return `DATA FOUND AT INDEX {${m}}`;
    } else if (arr[m] > searchElem) {
      r = m - 1;
    } else if (arr[m] < searchElem) {
      l = m + 1;
    }
  }
  return "DATA NOT FOUND";
}

function main() {
  //given input array, must be sorted.
  const arr = [2, 5, 8, 14, 19, 26, 27, 34, 40];
  const search_elem = 40; //element to find within the given array.

  //params: (inputArr, startingIndex, lastIndex, searchElement)
  //   const result = r_binarySearch(arr, 0, arr.length - 1, search_elem);
  const result = i_binarySearch(arr, 0, arr.length - 1, search_elem);
  console.log(result);
}

main();

// Time Complexity: O(log n)
// T(n) = T(n/2) + C [Recursion Tree]
// 1 + 1/2 + 1/3 + .... + 1/n = (log n)

// Space Complexity: O(1)
