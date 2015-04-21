function buildArray(arrayIn){
  if(arrayIn.length > 10){
    return arrayIn;
  }else{
    arrayIn.push([]);
    for(var i = 0; i < arrayIn.length; i++){
      arrayIn[i].push([Math.round(Math.random()*10)],[Math.round(Math.random()*10)]);
    }
    return buildArray(arrayIn);
  }
  
}
