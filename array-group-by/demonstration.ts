import "./polyfill.ts";

let x = [1,2,3,4];
console.log("ARRAY");
console.log(x);
console.log("-----------------------");
console.log("RESULT OF GROUPBY METHOD");
console.log(x.groupBy(i => i % 2 === 0 ? "even" : "odd"));
console.log("-----------------------");