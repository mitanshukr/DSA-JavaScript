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

const readInput = (main) => {
  read()
    .then((data) => {
      const arrTemp = data.split(" ");
      const firstInput = arrTemp[0];
      if (isNaN(firstInput)) {
        throw new Error("Please provide valid input data.");
      }
      return +firstInput;
    })
    .then((input) => {
      main(input);
    })
    .catch((e) => {
      console.log(e);
    });
};

module.exports = readInput;
