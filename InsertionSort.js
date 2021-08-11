const readline = require("./readline");

function main(inputArr) {
  for (let i = 1; i < inputArr.length; i++) {
    let key = inputArr[i];
    let j = i - 1;
    while (j >= 0 && inputArr[j] > key) {
      inputArr[j + 1] = inputArr[j];
      j--;
    }
    inputArr[j + 1] = key;
  }

  console.log(inputArr);
}

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
