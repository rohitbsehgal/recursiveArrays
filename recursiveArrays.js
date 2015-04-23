function buildArray(arrayIn, intensity){
  if(arrayIn.length > intensity){
    return arrayIn;
  }else{
    arrayIn.push([]);
    for(var i = 0; i < arrayIn.length; i++){
      arrayIn[i].push([Math.round(Math.random()*500), Math.round(Math.random()*500)],[Math.round(Math.random()*500), Math.round(Math.random()*500)]);
    }
    return buildArray(arrayIn, intensity);
  }
}
function drawCanvas(arrayIn){
  var c = document.getElementById("myCanvas");
  var ctx = c.getContext("2d");
  ctx.beginPath();
  for(var i = 0; i < arrayIn.length; i++){
    for(var j = 0; j < arrayIn[i].length-1; j+=2){
      console.log(arrayIn[i]);
      console.log(arrayIn[i][j]);
      ctx.moveTo(arrayIn[i][j][0], arrayIn[i][j][1]);
      ctx.lineTo(arrayIn[i][j+1][0], arrayIn[i][j+1][1]);
    }
  }
  var grd = ctx.createLinearGradient(0,0,500,0);
  grd.addColorStop(0, "red");
  grd.addColorStop(0.25, "green");
  grd.addColorStop(0.5, "blue");
  grd.addColorStop(0.75, "yellow");
  grd.addColorStop(1, "orange");
  ctx.strokeStyle=grd;
  ctx.stroke();
}
function loopThru(times){
  for(var i = 0; i < times; i++){
    drawCanvas(buildArray([], 10));
  }
}
