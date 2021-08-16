const readLine = require("readline");

const read = () => {
  const rl = readLine.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  return new Promise((resolve, reject) =>
    rl.question("", (inputData) => {
      resolve(inputData);
      rl.close();
    })
  );
};

const readline = (main) => {
  read().then((data) => {
    const arrTemp = data.split(" ");
    const arr = arrTemp.map((num) => {
      if (isNaN(num)) {
        throw new Error("Please provide valid input data.");
      }
      return +num;
    });
    main(arr);
  });
};

module.exports = readline;

//-----------Ignore-------
// rl.question("", (inputData) => {
//   const arrTemp = inputData.split(" ");
//   const arr = arrTemp.map((data) => {
//     if (isNaN(data)) {
//       throw new Error("Please provide valid input data.");
//     }
//     return +data;
//   });

//   for (let i = 1; i < arr.length; i++) {
//     let key = arr[i];
//     let j = i - 1;
//     while (j >= 0 && arr[j] > key) {
//       arr[j + 1] = arr[j];
//       j--;
//     }
//     arr[j + 1] = key;
//   }

//   rl.close();
//   console.log(arr);
// });

//Method2 - console input reading stream
// var stdin = process.openStdin();

// stdin.addListener("data", function (d) {
//   console.log(d.toString().trim().split(" "));
// });
