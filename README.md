# js-Array-Dedupe
Performant array duplicate removal, disruptive OR Conservative.

console.log(test,dedupeConservative(test));
/*
§
  [1,33,2,3,4,5,6,7,undefined,8,undefined,9,0,1,2,2,2,2,1,"a","a","b"]
  [1,33,2,3,4,5,6,7,undefined,8,undefined,9,0,"a","b"]
§
  [1,5,undefined,2,3,4,4,undefined,5,5,6]
  [1,5,undefined,2,3,4,undefined,6]
*/
console.log(test,dedupeDisruptive(test));
/*
§
  [1,33,2,3,4,5,6,7,undefined,8,undefined,9,0,"a","b"]
  [1,33,2,3,4,5,6,7,undefined,8,undefined,9,0,"a","b"]
§
  [1,5,undefined,2,3,4,undefined,6]
  [1,5,undefined,2,3,4,undefined,6]
*/
