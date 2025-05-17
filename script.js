//define funtion for getting random color on color box functionality.
function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}
//box moving with random color and size functionality.
function movebox(){
var left;
var top;
var wh;
left = Math.random()*300;
top = Math.random()*300;
wh = (Math.random()*400)+100;
document.getElementById('colorbox').style.left = left;
document.getElementById('colorbox').style.top = top;
document.getElementById('colorbox').style.width = wh;
document.getElementById('colorbox').style.height = wh;
document.getElementById('colorbox').style.display="block";
document.getElementById("colorbox").style.position = "absolute";
document.getElementById('colorbox').style.backgroundColor = getRandomColor();
starttime = new Date().getTime(); //initialize click start time
}
movebox(); //call to move box function
document.getElementById('colorbox').onclick = function(){
document.getElementById('colorbox').style.display="none";
var endtime = new Date().getTime(); //initialize click end time
var click_time = (endtime-starttime)/1000; //calculate and time convert miliseconds to in seconds
alert(click_time + ' seconds'); //showing time in seconds on click event
movebox(); //call to move box function
}