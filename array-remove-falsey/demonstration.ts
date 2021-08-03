import "./polyfill.ts";

let x = [0, 1, false, 2, '', 3, undefined, 5, null, null, 6];
console.log("ARRAY BEFORE REMOVEFALSEY");
console.log(x);
console.log("-----------------------");
console.log("RESULT OF REMOVEFALSEY");
console.log(x.removeFalsey());
console.log("-----------------------");
