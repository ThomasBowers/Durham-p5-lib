const levels = 18;
let drawLevel;

let points;

function setup() {
	createCanvas(windowWidth, windowHeight);
	background(255);
	
	points = [];
	
	frameRate(30);
	
	for (let i = 0; i <= levels; i++) {
		points.push([]);
	}
	
	drawY(levels,0,createVector(windowWidth/2,windowHeight));
	
	drawLevel = levels;
}

function draw() {
	// go through the array and draw level
	for (let c = 0; c < points[drawLevel].length; c++) {
		let lastPos = points[drawLevel][c].l;
		let currentPos = points[drawLevel][c].c;
		strokeWeight(drawLevel);	
		stroke(map(drawLevel,0,levels,250,0));
		line(lastPos.x, lastPos.y, currentPos.x, currentPos.y);
	}
	// change level if not at end
	if (drawLevel > 0) drawLevel--;
}

function keyTyped() {
  if (key === ' ')
    setup();
}

function drawY(level,angle,lastPos) {
	
	// base case
	if (level < 0) return;
	
	// create vector, and add onto last location of branch
	let currentPos = createVector(0,-level*5).rotate(angle).add(lastPos);
	
	// other base case, if branch is under ground
	if (currentPos.copy().sub(createVector(mouseX,mouseY)).y > windowHeight) return;
	
	// add the line start end location into the level's array
	points[level].push({
		'l' : lastPos, 
		'c' : currentPos});
	
	// do branch if random lets it 
	if (parseInt(random(1+level*level/10)) != 0)
		drawY(level-1,angle-PI/random(4,8),currentPos);
	
	// do branch if random lets it 
	if (parseInt(random(1+level*level/10)) != 0)
		drawY(level-1,angle+PI/random(4,8),currentPos);
}