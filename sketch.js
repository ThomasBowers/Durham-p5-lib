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
        this._bgColor = bgColor;
        for (let i = 0; i <= this.levels; i++) {
            this.points.push([]);
        }

        this.drawY(this.levels,0,this._initialPos);

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
let trees = [];
let number_trees = 8;
let type = 7;
function setup() {

	createCanvas(windowWidth, windowHeight);
    let w = windowWidth * 0.1;
    trees = [];
	let x = 0;
	let c_num;
	let color = ['red', 'green', 'blue', 'greyscale'];
	let bLength;
    switch (type) {
        case 1:
            //draws single tree
            trees.push(new Tree(12, 60, 255, color[3] ,createVector((windowWidth/2),windowHeight), 5));

            break;
        case 2:
            //orchard is uniform spacing ,color and height
            c_num = Math.floor(Math.random() * color.length);
            bLength = Math.floor(Math.random() * 6)+1;
            while(x <= number_trees){
                trees.push(new Tree(12, 60, 255, color[c_num] ,createVector(((w*8/number_trees)*x+w),windowHeight), bLength));
                x++;
            }
            break;

        case 3:
            //random spacing, height and color
            while(x <= number_trees){
                c_num = Math.floor(Math.random() * color.length);
                bLength = Math.floor(Math.random() * 6)+1;
                trees.push(new Tree(12, 60, 255, color[c_num] ,createVector(((w*8/number_trees)*x+w),windowHeight), bLength));
                x++;
            }
            break;

        default:
            //just draw one greyscale tree
            //trees.push(new Tree(12, 60, 255, color[3] ,createVector((windowWidth/2),windowHeight), 5));

    }

}
function draw() {
    if (trees != null){
        for (let i = 0; i < trees.length; i++) {
            trees[i].draw();
        }
    }
    else{
        console.log("No trees")
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


