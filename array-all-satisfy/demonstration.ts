import "./polyfill.ts";

let x = [1,2,3,4];
console.log("ARRAY");
console.log(x);
console.log("-----------------------");
console.log("RESULT OF ALLSATISFY METHOD WITH PREDICATE \"i >= 1\"");
console.log(x.allSatisfy(i => i >= 1));
console.log("-----------------------");
console.log("RESULT OF ALLSATISFY METHOD WITH PREDICATE \"i => i === 3\"");
console.log(x.allSatisfy(i => i === 3));
console.log("-----------------------");