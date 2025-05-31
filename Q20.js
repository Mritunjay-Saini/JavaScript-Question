// Given two arrays, one of names and one of marks, return a combined array of string
// format like ["Ram: 80", "Shyam: 90"] using join() and loop.

const names = ["Ram", "Shyam"];
const marks = [80, 90];
const result = [];

for (let i = 0; i < names.length; i++) {
  result.push([names[i], marks[i]].join(": "));
}

console.log(result); 