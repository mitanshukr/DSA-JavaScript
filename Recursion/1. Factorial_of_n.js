const readInput = require("./readInput");

function factorial(n) {
  if (n === 0 || n === 1) {
    // process.stdout.write(`${n} = `);
    return 1;
  }
  // process.stdout.write(`${n} x `);
  return n * factorial(n - 1);
}
function main(input) {
  console.log(`Factorial of ${input} is: ${factorial(input)}`);
  // console.log(factorial(input));
}

readInput(main);
