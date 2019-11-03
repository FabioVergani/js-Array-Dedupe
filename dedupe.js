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
