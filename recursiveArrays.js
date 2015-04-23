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
    for(var j = 0; j < arrayIn[i].length-1; j++){
      console.log(arrayIn[i]);
      console.log(arrayIn[i][j]);
      ctx.moveTo(arrayIn[i][j][0], arrayIn[i][j][1]);
      ctx.lineTo(arrayIn[i][j+1][0], arrayIn[i][j+1][1]);
    }
  }
  var w = Math.random();
  var x = Math.random();
  var y = Math.random();
  var z = Math.random();
  if(w < 0.5){
    w = 0;
  }else{
    w = 500;
  }
  if(x < 0.5){
    x = 0;
  }else{
    x = 500;
  }
  if(w == 0){
    y = 500;
  }else{
    y = 0;
  }
  if(x == 0){
    z = 500;
  }else{
    z = 0;
  }
  var grd = ctx.createLinearGradient(w, x, y, z);
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
