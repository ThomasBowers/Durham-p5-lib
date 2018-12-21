class Tree{
    constructor(levels, drawSpeed, color, position, bLength){
        frameRate(drawSpeed);
        this.levels = levels;
        this.points = [];
        this.color = color;
        this._drawLevel = this.levels;
        this._initialPos = createVector(position, height);
        this.bLength = bLength;
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
        if (currentPos.copy().sub(createVector(mouseX,mouseY)).y > height) return;

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
function removeAll() {
    trees = [];
    clear();
    setup();
}
function removeLast() {
    trees.pop()
    clear();
    setup();
}
function removeRandom() {
    let s = Math.floor(Math.random() * trees.length);
    trees.splice(s,1)
    clear();
    setup();
}
function forest() {
     x = 0;
     while(x < num_trees){
        c_num = Math.floor(Math.random() * color.length);
        bLength = Math.floor(Math.random() * 6)+1;
        trees.push(new Tree(12, 60, color[c_num] ,width * Math.random(), bLength));
        x++;
    }
}
function tree() {
    c_num = Math.floor(Math.random() * color.length);
    trees.push(new Tree(12, 60, color[c_num] ,(width/2), 5));

}
function orchard() {
    x = 0;
    c_num = Math.floor(Math.random() * color.length);
    bLength = Math.floor(Math.random() * 6)+1;
    while(x < num_trees){
        trees.push(new Tree(12, 60, color[c_num] ,((w*8/(num_trees-1))*x+w), bLength));
        x++;
    }
}
let trees = [];
let num_trees = 20;
//let type = 3;
let color = ['red', 'green', 'blue', 'greyscale'];
let c_num;
let bLength;
let x;
let w;

function setup() {
	var canvas = createCanvas(windowWidth*0.8, windowHeight*0.6);
    canvas.parent('sketch-holder');
    canvas.background("#00bfff")
    w = width * 0.1;
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
}

function keyTyped() {
  if (key === 'r'){
      removeAll();
  }
  else if (key === 't'){
      tree();
  }else if (key === 'o'){
      orchard();
  }else if (key === 'f'){
      forest();
  }else if (key === 'c'){
      removeLast();
  }

}
function mousePressed() {
	setup();
}

function windowResized() {
    canvas.width = windowWidth*0.8;
    canvas.height = windowHeight*0.6;
    setup();
}



