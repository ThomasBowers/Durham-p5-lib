/**
 * @class
 */
class Tree {
    //constructor
    /**
     * @constructor
     * @param {Int} levels - depth of tree
     * @param {Int} color - Hue value of tree
     * @param {Int} position - x-coordinate of tree base
     * @param {Int} bLength - length of tree branch
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
     * Gets tree base x - coordinate
     * @returns {position}
     */
    get position() {
        return this._position;
    }

    /**
     * Sets tree base x - coordinate
     * @param value {int} x-coordinate of tree base
     * need to run updateCoords() after to update
     */
    set position(value) {
        if (Number.isInteger(value)) {
            this._position = value
        }
    }

    /**
     * Gets current length of tree branch
     * @returns {bLength}
     */
    get bLength() {
        return this._bLength;
    }

    /**
     * Sets the branch length needs to be between 1 and 16
     * need to run updateCoords() to update object
     * @param value {int} tree branch length
     * need to run updateCoords() after to update
     */
    set bLength(value) {
        if (Number.isInteger(value)) {
            if (value > 0 && value <= 16) {
                this._bLength = value
            }
        }
    }

    /**
     * Gets the depth of the tree
     * @returns {levels}
     */
    get levels() {
        return this._levels;
    }

    /**
     * Sets the value of the tree depth between 1 and 16
     * need to run updateCoords() to update object
     * @param value {int} - tree depth
     * need to run updateCoords() after to update
     */
    set levels(value) {
        if (Number.isInteger(value)) {
            if (value > 0 && value <= 16) {
                this._levels = value
            }
        }
    }

    /**
     * Gets the current hue value of the tree
     * @returns {color}
     */
    get color() {
        return this._color;
    }

    /**
     * Sets the hue value of the tree scaled between 0 - 100
     * @param value {int} - Hue Value
     */
    set color(value) {
        if (Number.isInteger(value)) {
            this._color = value % 100
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
     * Draws tree on canvas with current coordinates set
     */
    draw() {
        // go through the array and draw level
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
