const readInput = require("./readInput");

/*
//Conversion rule:
    1. Divide the given number by base value.
    2. Keep noting the Reminders.
    3. Repeat above steps with the quotients of each division until getting zero.
    4. The reminder values in reverse is the converted value.
*/
function baseConvertor(num, base) {
  let rem = num % base;
  if (num == 0) return;
  baseConvertor(Math.floor(num / base), base);

  if (rem < 10) {
    process.stdout.write(`${rem}`);
  } else {
    //else condition for hexa values greater than 10.
    process.stdout.write(
      `${String.fromCharCode(rem - 10 + "A".charCodeAt(0))}`
    );
  }
}

//decimal to binary, octal, and hexadecimal conversion.
function main(input) {
  console.log("Binary Output:");
  baseConvertor(input, 2);
  console.log("\nOctal Output:");
  baseConvertor(input, 8);
  console.log("\nHexadecimal Output:");
  baseConvertor(input, 16);
}

readInput(main);
