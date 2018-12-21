class Tree{
    constructor(levels, drawSpeed, bgColor, color, position, bLength){
        frameRate(drawSpeed);
        background(bgColor);
        this.levels = levels;
        this.points = [];
        this.color = color;
        this._drawLevel = this.levels;
        this._initialPos = position;
        this.bLength = bLength;
        console.log(this.bLength);
        this._bgColor = bgColor;
        for (let i = 0; i <= this.levels; i++) {
            this.points.push([]);
        }

        this.drawY(this.levels,0,this._initialPos);

    }
    set setColor(newColor){
        this.color =newColor;
    }

    set drawLevel(value) {
        this._drawLevel = value;
    }
    set initialPos(value) {
        this._initialPos = value;
    }


    get initialPos() {
        return this._initialPos;
    }

    get bgColor() {
        return this._bgColor;
    }
    get drawLevel() {
        return this._drawLevel;
    }

    drawY(level,angle,lastPos) {

        // base case
        if (level < 0) return;

        // create vector, and add onto last location of branch
        let currentPos = createVector(0,-level*this.bLength).rotate(angle).add(lastPos);

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
        for (let v = this.levels ; v > 0 ; v-- ) {
            for (let c = 0; c < this.points[v].length; c++) {
                strokeWeight(v);
                if (this.color == 'red') {
                    stroke(map(v, 0, this.levels, 250, 0), 0, 0);
                }
                else if (this.color == 'green') {
                    stroke(0, map(v, 0, this.levels, 250, 0), 0);
                }
                else if (this.color == 'blue') {
                    stroke(0, 0, map(v, 0, this.levels, 250, 0));
                }
                else if (this.color == 'greyscale') {
                    stroke(map(v, 0, this.levels, 250, 0))
                }

                line(this.points[v][c].l.x, this.points[v][c].l.y, this.points[v][c].c.x, this.points[v][c].c.y);
            }
        }
    }

}
let trees;
let number_trees = 8;
function setup() {
	createCanvas(windowWidth, windowHeight);
    let w = windowWidth * 0.1;
    trees = [];
	let x = 0;
	let c_num;
	let color = ['red', 'green', 'blue'];
	let bLength;
	while(x <= number_trees){
        c_num = Math.floor(Math.random() * 3);
        bLength = Math.floor(Math.random() * 6)+1;
        trees.push(new Tree(12, 60, 255, color[c_num] ,createVector(((w*8/number_trees)*x+w),windowHeight), bLength));
        console.log("cnum " + c_num);
        x++;
    }
}

function draw() {
    for(let i = 0; i <= number_trees; i++){
        trees[i].draw();
    }
	//tree.inintialPos(createVector((windowWidth/4)*2,windowHeight));
    //tree.setColor('green');
    //tree.draw();
    //tree.initialPos(createVector((windowWidth/4)*3,windowHeight));
    //tree.setColor('blue');
    //tree.draw();

}

function keyTyped() {
  if (key === ' ')
    setup();
}
function mousePressed() {
	setup();
}


