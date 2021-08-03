import "./polyfill.ts";

let x = [1,2,3,4];
console.log("ARRAY BEFORE ANY OPS");
console.log(x);
console.log("-----------------------");
console.log("RESULT OF GET HEAD");
console.log(x.head);
console.log("-----------------------");
console.log("RESULT OF SET HEAD");
console.log(x.head = 5);
console.log("-----------------------");
console.log("ARRAY AFTER SET HEAD");
console.log(x);
console.log("-----------------------");