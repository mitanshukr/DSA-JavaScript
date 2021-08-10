const readline = require("./readline");

readline().then((data) => {
  const arrTemp = data.split(" ");
  const arr = arrTemp.map((num) => {
    if (isNaN(num)) {
      throw new Error("Please provide valid input data.");
    }
    return +num;
  });
  main(arr);
});

function main(arr) {
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
