/**
 * @class
 */
class Tree {
    //constructor
    /**
     * @constructor
     * @param {number} levels - depth of tree
     * @param {number} color - Hue value of tree
     * @param {number} position - x-coordinate of tree base
     * @param {number} bLength - length of tree branch
     */
    constructor(levels, color, position, bLength) {
        this.points = [];
        this._color = color;
        this._levels = levels;
        this._bLength = bLength;
        this._position = position;
        this.updateCoords();
    }

    /**
     *Re calculates the coordinates of a tree needed when position,
     levels or blength is changed
     */
    updateCoords() {
        this._initialPos = createVector(this._position, height);
        this.points = [];
        for (let i = 0; i <= this._levels; i++) {
            this.points.push([]);
        }
        this.drawY(this._levels, 0, this._initialPos);
    }

    //getters and setters
    /**
     * @returns {int} X-coordinate of tree base
     */
    get position() {
        return this._position;
    }

    /**
     * Sets tree base x - coordinate
     * need to run updateCoords() after to update points array
     * @param value {number} x-coordinate of tree base
     */
    set position(value) {
        if (Number.isInteger(value)) {
            this._position = value;
        }
    }

    /**
     * @returns {number} Current length of all tree branches
     */
    get bLength() {
        return this._bLength;
    }

    /**
     * Sets the branch length needs to be between 1 and 16
     * need to run updateCoords() after to update points array
     * @param value {number} tree branch length
     */
    set bLength(value) {
        if (Number.isInteger(value)) {
            if (value > 0 && value <= 16) {
                this._bLength = value;
            }
        }
    }

    /**
     * @returns {number} Depth of the tree
     */
    get levels() {
        return this._levels;
    }

    /**
     * Sets the value of the tree depth between 1 and 16
     * need to run updateCoords() after to update points array
     * @param value {number} - tree depth
     */
    set levels(value) {
        if (Number.isInteger(value)) {
            if (value > 0 && value <= 16) {
                this._levels = value;
            }
        }
    }

    /**
     * @returns {number} Hue value of the tree
     */
    get color() {
        return this._color;
    }

    /**
     * Sets the hue value of the tree scaled between 0 - 100
     * need to run updateCoords() after to update points array
     * @param value {number} - Hue Value
     */
    set color(value) {
        if (Number.isInteger(value)) {
            this._color = value % 100;
        }
    }

    /**
     * @private
     * Recursively calculates coordinates for branches to be drawn between
     */
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

    /**
     * Draws tree on canvas
     * @param g {canvas} - Pass in custom canvas to draw to
     */
    draw(g) {
        if (g) {
            // go through the array and draw level
            for (let v = this._levels; v > 0; v--) {
                for (let c = 0; c < this.points[v].length; c++) {
                    g.colorMode(HSB, 100);
                    g.strokeWeight(v);
                    g.stroke(this._color, map(v, 0, this._levels, 100, 50), map(v, 0, this._levels, 100, 0));
                    g.line(this.points[v][c].l.x, this.points[v][c].l.y, this.points[v][c].c.x, this.points[v][c].c.y);
                }
            }
        }
        else {
            for (let v = this._levels; v > 0; v--) {
                for (let c = 0; c < this.points[v].length; c++) {
                    colorMode(HSB, 100);
                    strokeWeight(v);
                    stroke(this._color, map(v, 0, this._levels, 100, 50), map(v, 0, this._levels, 100, 0));
                    line(this.points[v][c].l.x, this.points[v][c].l.y, this.points[v][c].c.x, this.points[v][c].c.y);
                }
            }
        }
    }


}