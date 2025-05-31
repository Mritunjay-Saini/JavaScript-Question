// Create a function to reverse an array without using reverse() method (use
// unshift() inside a loop).

function reversearray(arr){
    let reversed =[]
    for (let i = 0; i < arr.length; i++) {
    reversed.unshift(arr[i]);
  }
  return reversed;
}
 console.log(reversearray([10,20,30,40,50]))