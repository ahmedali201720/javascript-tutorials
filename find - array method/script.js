// *************************************
// Slice array method
// *************************************

const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(array);
// slice the first two elements in the array and returns the rest.
console.log(array.slice(2));
// slices elements from index 0 to index 2 (end argument not included in the result)
console.log(array.slice(0, 3));
// returns the second element from the end(-2) and the last element of array(-1) but last element not included
console.log(array.slice(-2, -1));