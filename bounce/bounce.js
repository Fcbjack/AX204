// declare varible at the top (elevation of scope)
var canvas;
var ctx;
// Hold some coordinates
var x = 600;
var y = 300;
// hold the magnitude of our movement\
var mx = 2;
var my = 4;
// holding width and height of canvas
var width = 600;
var height = 300;
// Initialise our animation
function init() {
	canvas = document.getElementById("myCanvas");
	ctx = canvas.getContext("2d");
	return setInterval(draw, 10);
}

//draw circle
function circle(x, y, r) {
	ctx.beginPath();
	ctx.arc(x, y, r, 0, Math.PI*2);
	ctx.fillStyle = "tomato";
	ctx.fill();
}

// Clear our Canvas
function clear(){
	ctx.clearRect(0, 0, width, height);
}

// Finally, we are drawing each frame with this funtion
function draw() {
	clear();
	circle(x, y, 30);
	// Stays inside our canvas 
	if  (x + mx > width || x + mx < 0) (
		mx = -mx
		)

	if  (y + my > height || y + my < 0) (
		my = -my
		)

		// Moving our canvas by increasing the osition by the magnitude of movement
	x += mx;
	y += my;
	
}

init();