const readline = require("./readline");

function swap(arr, p, q) {
  const temp = arr[p];
  arr[p] = arr[q];
  arr[q] = temp;
}

function partition(arr, p, q) {
  const pivot = arr[p]; //taking first element as pivot
  let i = p - 1;
  let j = q + 1;

  while (i <= j) {
    while (arr[i] <= pivot && i < q) i++;
    while (arr[j] >= pivot) j--;
    if (i <= j) {
      swap(arr, i, j);
    } else {
      i++;
    }
  }
  arr[p] = arr[j];
  arr[j] = pivot;
  return j;
}

// p ---> starting(low) index
// r ---> last(high) index
// q ---> pivot index (partition index)
function quickSort(arr, p, r) {
  if (p < r) {
    let q = partition(arr, p, r);
    quickSort(arr, p, q - 1);
    quickSort(arr, q + 1, r);
  }
}

function main(arr) {
  const p = 0;
  const r = arr.length - 1;
  quickSort(arr, p, r);
  console.log(arr);
}

readline(main);
