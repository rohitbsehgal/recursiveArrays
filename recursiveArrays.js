function buildArray(arrayIn, intensity){
  if(arrayIn.length > intensity){
    return arrayIn;
  }else{
    arrayIn.push([]);
    for(var i = 0; i < arrayIn.length; i++){
      arrayIn[i].push([Math.round(Math.random()*100), Math.round(Math.random()*100)]);
    }
    return buildArray(arrayIn, intensity);
  }
  
}
function drawCanvas(arrayIn){
  var c = document.getElementById("myCanvas");
  var ctx = c.getContext("2d");
  ctx.beginPath();
  for(var i = 0; i < arrayIn.length; i++){
    for(var j = 0; j < arrayIn[i].length; j++){
      console.log(arrayIn[i][j]);
      ctx.moveTo(0, 0);
      ctx.lineTo(arrayIn[i][j][0], arrayIn[i][j][1]);
    }
  }
  
  ctx.stroke();
}
