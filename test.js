const dedupeArrayDisruptive=a=>{
  for(const v of a){
    const i=a.indexOf(v);
    let j=a.lastIndexOf(v);
    while(i!==j){
      a.splice(j,1);
      j=a.lastIndexOf(v)
    }
  };
  return a
};

const dedupeArrayConservative=a=>{
  const m=[];
  let j=0;
  for(const v of a){
    if(-1===m.indexOf(v)){
      const i=a.indexOf(v);
      m[i-j]=v
    }else{
      ++j
    }
  };
  return m
};

const condenseArrayDisruptive=a=>{
  const u=undefined;
  let i=a.length;
  while(i){
    if(u===a[i]){
      a.splice(i,1)
    };
    --i
  };
  return a
};

const condenseArrayConservative=a=>{
  const u=undefined,m=[],l=a.length;
  let i=0,j=0;
  while(i<l){
    const v=a[i];
    if(u!==v){
      m[j]=v
      ++j
    };
    ++i
  };
  return m
};

//===============================================================================
console.clear();
let test= [1,, 5, , 2, 3, 4, 4, , 5, 5, 6, ];
//
console.log(test,dedupeArrayConservative(test));
/*

  [1,33,2,3,4,5,6,7,undefined,8,undefined,9,0,1,2,2,2,2,1,"a","a","b"]
  [1,33,2,3,4,5,6,7,undefined,8,undefined,9,0,"a","b"]

  [1,5,undefined,2,3,4,4,undefined,5,5,6]
  [1,5,undefined,2,3,4,undefined,6]
  
*/

console.log(test,dedupeArrayDisruptive(test));
/*

  [1,33,2,3,4,5,6,7,undefined,8,undefined,9,0,"a","b"]
  [1,33,2,3,4,5,6,7,undefined,8,undefined,9,0,"a","b"]

  [1,5,undefined,2,3,4,undefined,6]
  [1,5,undefined,2,3,4,undefined,6]

*/


console.log(test,condenseArrayConservative(test));
/*

  [1,undefined,5,undefined,2,3,4,undefined,6]
  [1,5,2,3,4,6]

*/

console.log(test,condenseArrayDisruptive(test));
/*

  [1,5,2,3,4,6]
  [1,5,2,3,4,6]

*/
