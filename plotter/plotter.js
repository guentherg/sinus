var as;
var bs;
var a;
var b;
var c;

function setup() {
	createCanvas(innerWidth, innerHeight);
	background(235);
	textSize(22);
	stroke(0);
	strokeWeight(1);
  	as = createSlider(0, 4, 1, 0.5);
  	bs = createSlider(0, 13, 1, 0.1);
  	cs = createSlider(0, (4*PI)+(PI/2), 1, PI/2);
  	as.position(300, 35);
  	bs.position(300, 55);
		cs.position(300, 75);
}

function draw() {
	background(235);

  	line(width/2, 0, width/2, height);
  	line(0, height/2, width, height/2);

		fill(0);
  	text("a = "+String(a), 50, 50);
  	text("b = "+String(b), 50, 70);
  	text("c = "+String(c), 50, 90);
  	text("x", width-20, height/2+20);
  	text("y", width/2+20, 20);

  	for(var i = 0; i <= 400; i+=100){
  		line(width/2-10, height/2-i, width/2+10, height/2-i);
  		text(String(i/100), width/2+20, height/2-i);
  	}

  	for(var i = 0; i <= 400; i+=100){
  		line(width/2-10, height/2+i, width/2+10, height/2+i);
  		text(String(-1*(i/100)), width/2+20, height/2+i);
  	}

  	for(var i = -3; i <= 3; i++){
  		line(width/2+(i*PI*100), height/2-10, width/2+(i*PI*100), height/2+10);
		if(i != 0){
  			text(String(i)+"π", width/2+(i*PI*100), height/2+30);
  		}
  	}

	noFill();

	a = as.value();
	b = bs.value();
	c = cs.value();

	push();
	translate(width/2, height/2);
	beginShape();
	for(var i = -width/2; i < width/2; i++){
		var x = i;
		var y = -(a*100)*sin(b*(x/100) + c);
		vertex(x, y);
	}
	endShape(LINES);
	pop();

}
