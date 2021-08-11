const readline = require("./readline");

readline(main);

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
