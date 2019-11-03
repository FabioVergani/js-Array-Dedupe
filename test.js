console.clear();
//
let test;
//test = [1, 33, 2, 3, 4, 5, 6, 7, , 8, , 9, 0, 1, 2, 2, 2, 2, 1, 'a', 'a', 'b'];
test = [1, 5, , 2, 3, 4, 4, , 5, 5, 6, ];
//
//test = [,undefined,undefined,2];
//console.log(test.length,test[3])
//test = [];

//=========================

const dedupeDisruptive=a=>{
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

const dedupeConservative=a=>{
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

//====================================================================
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


