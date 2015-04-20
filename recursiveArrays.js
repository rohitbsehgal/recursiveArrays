var buildArray = funtcion(arr, length){
  if(arr.length > length){
    return arr;
  }else{
    arr.push([10,10,10])
    return builsArray(arr, length);
  }
}
