console.log("working");

var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");
ctx.beginPath();
ctx.strokeStyle = "green";
ctx.moveTo(150,0);
ctx.lineTo(300,300);
ctx.lineTo(0,300);
ctx.lineTo(150,0);
ctx.closePath();
ctx.stroke();

var	dc = document.getElementById("diamondCanvas");
var diamond = dc.getContext("2d");
diamond.beginPath();
diamond.moveTo(150,0);
diamond.lineTo(225,150);
diamond.lineTo(150,300);
diamond.lineTo(75,150);
diamond.closePath();
diamond.stroke();

var dtc = document.getElementById("duotriCanvas");
var duo = dtc.getContext("2d");
duo.beginPath();
duo.lineTo(150,150);
duo.lineTo(0,300);
duo.lineTo(0,0);
duo.moveTo(300,0);
duo.lineTo(300,300);
duo.lineTo(150,150);
duo.closePath();
duo.stroke();
duo.fillStyle = "blue";
duo.fill();

var a = document.getElementById("Canvas4");
var b = a.getContext("2d");
b.beginPath();
b.lineTo(150,150);
b.lineTo(0,150);
b.lineTo(0,0);
b.moveTo(300,0);
b.lineTo(150,150);
b.lineTo(150,0);
b.lineTo(300,0);
b.moveTo(300,150);
b.lineTo(300,300);
b.lineTo(150,150);
b.lineTo(300,150);
b.moveTo(0,300);
b.lineTo(150,150);
b.lineTo(150,300);
b.lineTo(0,300);
b.stroke();
b.fillStyle = "blue";
b.fill();


// Set up scenery
var c5 = document.getElementById("scene");
var ctx5 = c5.getContext("2d");
//sky and land
ctx5.fillStyle = "green";
ctx5.fillRect(0,350,800,150);
ctx5.fillStyle = "cyan";
ctx5.fillRect(0,0,800,350);
//sun
ctx5.beginPath();
ctx5.arc(100,100,50,0,6.28);
ctx5.closePath();
ctx5.stroke();
ctx5.fillStyle="yellow";
ctx5.fill();
ctx5.beginPath();
ctx5.moveTo(350,350);
ctx5.lineTo(300,500);
ctx5.lineTo(375,500);
ctx5.lineTo(375,350);
ctx5.closePath();
ctx5.stroke();
ctx5.fillStyle = "grey";
ctx5.fill();
ctx5.beginPath();
ctx5.moveTo(400,350);
ctx5.lineTo(450,500);
ctx5.lineTo(375,500);
ctx5.lineTo(375,350);
ctx5.closePath();
ctx5.stroke();
ctx5.fillStyle = "grey";
ctx5.fill();

//building
ctx5.fillRect(100,250,200,100);
ctx5.clearRect(130,310,20,20);
ctx5.clearRect(170,310,20,20);
ctx5.clearRect(210,310,20,20);
ctx5.clearRect(250,310,20,20);
ctx5.clearRect(130,270,20,20);
ctx5.clearRect(170,270,20,20);
ctx5.clearRect(210,270,20,20);
ctx5.clearRect(250,270,20,20);



