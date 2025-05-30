// Create a nested array [1, [2, 3], [4, [5]]]. Use flat(2) to flatten it
// completely. Print the result.


const nestedArray = [1, [2, 3], [4, [5]]];
const flattened = nestedArray.flat(2);
console.log(flattened);