// Linear Search Algorithm to search for the first occurance of element.

function main() {
  const arr = [24, 5, 32, 6, 13, 43, 7, 23, 32]; //given input array
  const search_elem = 32; //element to find within the given array.

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === search_elem) {
      console.log(`DATA FOUND AT INDEX {${i}}`);
      return "DATA FOUND";
    }
  }
  console.log("SEARCH ELEM NOT FOUND");
  return "DATA NOT FOUND";
}

main();


// Linear search searches for the data in Linear time complexity.
// i.e. time complexity: O(n)
// space complexity: O(1)

//Linear sort is suitable for LinkedLists.
