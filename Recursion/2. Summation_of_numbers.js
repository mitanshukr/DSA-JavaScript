const readInput = require("./readInput");

function summationFunc(n) {
  if (n === 0) return 0;
  return n + summationFunc(n - 1);
}
function main(input) {
  console.log(`Summation of numbers 1 to ${input} is: {${summationFunc(input)}}`);
}

readInput(main);


// Time Complexity: O(n)
// Space Complexity: O(n); including call-stack
