// Use copyWithin() to copy the first 2 elements of [1, 2, 3, 4, 5] into the last 2
// positions. Print the result.

const arr =[1,2,3,4,5,6,7];
arr.copyWithin(3,0,7);
console.log(arr)