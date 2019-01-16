let trees = [];
let x;
let w;
let needs_draw;

class Tree {
    //constructor
    constructor(levels, drawSpeed, color, position, bLength) {
        this.points = [];
        this._color = color;
        this._levels = levels;
        this._bLength = bLength;
        this._position = position;
        this.updateCoords();
    }

    //needs running after every change to blength levels and position so it can re calculate the coordinates
    updateCoords() {
        this._initialPos = createVector(this._position, height);
        this.points = [];
        for (let i = 0; i <= this._levels; i++) {
            this.points.push([]);
        }
        this.drawY(this._levels, 0, this._initialPos);
    }

    //getters and setters
    get position() {
        return this._position;
    }

    set position(value) {
        if (Number.isInteger(value)) {
            this._position = value
        }
    }

    get bLength() {
        return this._bLength;
    }

    set bLength(value) {
        if (Number.isInteger(value)) {
            if (value > 0 && value <= 16) {
                this._bLength = value
            }
        }
    }

    get levels() {
        return this._levels;
    }

    set levels(value) {
        if (Number.isInteger(value)) {
            if (value > 0 && value <= 16) {
                this._levels = value
            }
        }
    }

    get color() {
        return this._color;
    }

    set color(value) {
        if (Number.isInteger(value)) {
            this._color = value % 100
        }
    }

    //calculates points
    drawY(level, angle, lastPos) {

        // base case
        if (level < 0) return;

        // create vector, and add onto last location of branch
        let currentPos = createVector(0, -level * this._bLength).rotate(angle).add(lastPos);

        // other base case, if branch is under ground
        if (currentPos.y > height) return;

        // add the line start end location into the level's array
        this.points[level].push({
            'l': lastPos,
            'c': currentPos
        });

        // do branch if random lets it
        if (parseInt(random(1 + level * level / 10)) != 0)
            this.drawY(level - 1, angle - PI / random(4, 8), currentPos);

        // do branch if random lets it
        if (parseInt(random(1 + level * level / 10)) != 0)
            this.drawY(level - 1, angle + PI / random(4, 8), currentPos);
    }

    //draws points
    draw() {
        // go through the array and draw level
        for (let v = this._levels; v > 0; v--) {
            for (let c = 0; c < this.points[v].length; c++) {
                colorMode(HSB, 100)
                strokeWeight(v);
                stroke(this._color, map(v, 0, this._levels, 100, 50), map(v, 0, this._levels, 100, 0));
                line(this.points[v][c].l.x, this.points[v][c].l.y, this.points[v][c].c.x, this.points[v][c].c.y);
            }
        }
    }


}

//methods to remove trees from the array
function removeAll() {
    trees = [];
    //need to clear and re run setup or trees stay on canvas
    clear();
    setup();
}

function removeLast() {
    trees.pop();
    clear();
    setup();
}

function removeRandom() {
    let s = Math.floor(Math.random() * trees.length);
    trees.splice(s, 1);
    clear();
    setup();
}

//interacts with the html dom to set the specifics of thee tree I want to add
function addTrees() {
    needs_draw = true;
    let randomSpacing = document.getElementById("randomSpacing").checked;
    let variedHeight = document.getElementById("variedHeight").checked;
    x = 0;
    let num_trees = document.getElementById("numTrees").value;
    let c_num = document.getElementById("color").value;
    let bLength = Math.floor(Math.random() * 6) + 4;
    let spacing;
    while (x < num_trees) {
        if (variedHeight) {
            bLength = Math.floor(Math.random() * 6) + 4;
        }
        if (randomSpacing) {
            spacing = width * Math.random();
        }
        else {
            spacing = ((w * 8 / (num_trees - 1)) * x + w);
        }
        trees.push(new Tree(12, 60, c_num, spacing, bLength));
        x++;
    }
}


function setup() {
    let canvas = createCanvas(windowWidth * 0.8, windowHeight * 0.8);
    canvas.parent('sketch-holder');
    canvas.background("#00bfff");
    w = width * 0.1;
    needs_draw = true
}

function modify() {
    if (trees != null) {
        for (let i = 0; i < trees.length; i++) {
            trees[i].color = 67;
            trees[i].bLength = 10;
            trees[i].position = parseInt(w * 10 * Math.random());
            trees[i].levels = 6;
            trees[i].updateCoords();
            clear();
            setup();
        }
    }
    else {
        console.log("No trees")
    }
}

function draw() {
    if (trees != null) {
        if (needs_draw) {
            for (let i = 0; i < trees.length; i++) {
                trees[i].draw();
            }
            needs_draw = false
            console.log("drawing")
        }
        else {
        }
    }
}


function windowResized() {
    canvas.width = windowWidth * 0.8;
    canvas.height = windowHeight * 0.8;
    setup();
}



