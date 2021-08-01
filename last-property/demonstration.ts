import "./polyfill.ts";

let x = [1,2,3,4];
console.log("ARRAY BEFORE ANY OPS");
console.log(x);
console.log("-----------------------");
console.log("RESULT OF GET LAST");
console.log(x.last);
console.log("-----------------------");
console.log("RESULT OF SET LAST");
console.log(x.last = 5);
console.log("-----------------------");
console.log("ARRAY AFTER SET LAST");
console.log(x);
console.log("-----------------------");