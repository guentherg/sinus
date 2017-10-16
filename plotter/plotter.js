var as;
var bs;
var a = 2;
var b = 1/3;

function setup() {
	createCanvas(innerWidth, innerHeight);
	background(235);
	textSize(22);
	stroke(0);
	strokeWeight(1);
  	as = createSlider(0, 4, 1, 0.5);
  	bs = createSlider(0, 13, 1, 0.1);
  	as.position(300, 35);
  	bs.position(300, 55);
}

function draw() {
	background(235);

  	line(width/2, 0, width/2, height);
  	line(0, height/2, width, height/2);

	fill(0);
  	text("a = "+String(a), 50, 50);
  	text("b = "+String(b), 50, 70);
  	text("x", width-20, height/2+20);
  	text("y", width/2+20, 20);
	noFill();

	a = as.value();
	b = bs.value();

	push();
	translate(width/2, height/2);
	beginShape();
	for(var i = -width/2; i < width/2; i++){
		var x = i;
		var y = (a*100)*sin(b*(x/100));
		vertex(x, y);
	}
	endShape(LINES);
	pop();

}
