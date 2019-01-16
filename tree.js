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
                strokeWeight(v);
                stroke(this._color, map(v, 0, this._levels, 100, 50), map(v, 0, this._levels, 100, 0));
                line(this.points[v][c].l.x, this.points[v][c].l.y, this.points[v][c].c.x, this.points[v][c].c.y);
            }
        }
    }


}
module.exports.Tree = Tree;
