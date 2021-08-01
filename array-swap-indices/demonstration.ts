import "./polyfill.ts";

let x = [1,2,3,4];
console.log("ARRAY BEFORE SWAPAT");
console.log(x);
console.log("-----------------------");
console.log("RESULT OF SWAPAT METHOD");
console.log(x.swapAt(1, 2));
console.log("-----------------------");
console.log("ARRAY AFTER SWAPAT");
console.log(x);
console.log("-----------------------");