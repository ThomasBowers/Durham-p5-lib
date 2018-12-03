class Tree{
    constructor(levels, drawSpeed, bgColor){
        this.levels = levels;
        frameRate(drawSpeed);
        background(bgColor);
        this.points = [];
        for (let i = 0; i <= this.levels; i++) {
            this.points.push([]);
        }
        this.drawLevel = this.levels;
        this.initialPos = createVector(windowWidth/2,windowHeight);
        this.drawY(this.levels,0,this.initialPos);

    }
    drawY(level,angle,lastPos) {

        // base case
        if (level < 0) return;

        // create vector, and add onto last location of branch
        let currentPos = createVector(0,-level*5).rotate(angle).add(lastPos);

        // other base case, if branch is under ground
        if (currentPos.copy().sub(createVector(mouseX,mouseY)).y > windowHeight) return;

        // add the line start end location into the level's array
        this.points[level].push({
            'l' : lastPos,
            'c' : currentPos});

        // do branch if random lets it
        if (parseInt(random(1+level*level/10)) != 0)
            this.drawY(level-1,angle-PI/random(4,8),currentPos);

        // do branch if random lets it
        if (parseInt(random(1+level*level/10)) != 0)
            this.drawY(level-1,angle+PI/random(4,8),currentPos);
    }
    draw() {
        // go through the array and draw level
        for (let c = 0; c < this.points[this.drawLevel].length; c++) {
            let lastPos = this.points[this.drawLevel][c].l;
            let currentPos = this.points[this.drawLevel][c].c;
            //console.log(lastPos);
            //console.log(currentPos);
            strokeWeight(this.drawLevel);
            stroke(map(this.drawLevel,0,this.levels,250,0));
            line(this.points[this.drawLevel][c].l.x, this.points[this.drawLevel][c].l.y, this.points[this.drawLevel][c].c.x, this.points[this.drawLevel][c].c.y);
        }
        // change level if not at end
        if (this.drawLevel > 0) this.drawLevel--;
    }

}
let tree;
function setup() {
	createCanvas(windowWidth, windowHeight);
	tree = new Tree(10, 60, 255)
    console.log(tree.points);
}

function draw() {
	tree.draw();
}

function keyTyped() {
  if (key === ' ')
    setup();
}
function mousePressed() {
	setup();
}


