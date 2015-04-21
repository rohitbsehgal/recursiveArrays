function buildArray(arrayIn, intensity){
  if(arrayIn.length > intensity){
    return arrayIn;
  }else{
    arrayIn.push([]);
    for(var i = 0; i < arrayIn.length; i++){
      arrayIn[i].push([Math.round(Math.random()*1000), Math.round(Math.random()*1000)],[Math.round(Math.random()*1000), Math.round(Math.random()*1000)]);
    }
    return buildArray(arrayIn, intensity);
  }
}
function drawCanvas(arrayIn){
  var c = document.getElementById("myCanvas");
  var ctx = c.getContext("2d");
  ctx.beginPath();
  for(var i = 0; i < arrayIn.length; i++){
    for(var j = 0; j < arrayIn[i].length-1; j++){
      console.log(arrayIn[i]);
      console.log(arrayIn[i][j]);
      ctx.moveTo(arrayIn[i][j][0], arrayIn[i][j][1]);
      ctx.lineTo(arrayIn[i][j+1][0], arrayIn[i][j+1][1]);
    }
  }
  ctx.stroke();
}
