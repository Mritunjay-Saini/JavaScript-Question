// Use toSpliced() to remove the second element of an array [9, 8, 7, 6] and
// insert 10, 11 at that position. Print original and new array.

const o = [9, 8, 7, 6];
const m = o.toSpliced(1, 1, 10, 11);
console.log(o);
console.log(m);