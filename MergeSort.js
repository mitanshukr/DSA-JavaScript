const readline = require("./readline");

function main(inputArr) {
if(inputArr.length>1){
    

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
