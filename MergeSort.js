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
  L.push(Number.POSITIVE_INFINITY);
  R.push(Number.POSITIVE_INFINITY);

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

