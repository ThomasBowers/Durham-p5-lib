let trees = [];
let needs_draw;
let resized = false;
let canvas;

//methods to remove trees from the array
//empties array then tells draw to redraw
function removeAll() {
    trees = [];
    needs_draw = true;
}

//removes last tree from array then tells draw to redraw
function removeLast() {
    trees.pop();
    needs_draw = true;
}

//removes a random tree from the trees array then tells draw to redraw
function removeRandom() {
    let s = Math.floor(Math.random() * trees.length);
    trees.splice(s, 1);
    needs_draw = true;
}

//interacts with the html dom to set the specifics of the properties tree I want to add
//then adds to tree array
function addTrees() {
    needs_draw = true;
    let randomSpacing = document.getElementById('randomSpacing').checked;
    let num_trees = document.getElementById('numTrees').value;
    let c_num = document.getElementById('color').value;
    let bLength = document.getElementById('branch_length').value;
    let levels = document.getElementById('tree_depth').value;
    let spacing;
    let x = 0;
    //loops to add trees and calculates the spacing apart they should have or lets it be random
    while (x < num_trees) {
        x++;
        if (randomSpacing) {
            spacing = canvas.width * Math.random();
        }
        else {
            spacing = x * (parseInt(canvas.width) / (parseInt(num_trees) + 1));
        }
        trees.push(new Tree(levels, c_num, spacing, bLength, canvas.height));
    }
}

//A function to demonstrate the use of the getters and setters of my tree class
//Changes all trees to look dead then instructs draw to recalculate the coordinates and draw
function kill() {
    if (trees != null) {
        for (let i = 0; i < trees.length; i++) {
            trees[i].color = 67;
            trees[i].bLength = 10;
            trees[i].levels = 6;
            resized = true;
            needs_draw = true;
        }
    }
}

//tells my draw method to redraw trees and reset the height to the bottom of canvas
function recalculate() {
    needs_draw = true;
    resized = true;
}

//function to change the value of the label for my slider on form input
function updateSlider(value, id) {
    document.getElementById(id).innerHTML = value;
}

//p5.js setup method creates canvas and sets some global variables
function setup() {
    canvas = createCanvas(windowWidth * 0.8, windowHeight * 0.8);
    canvas.parent('sketch-holder');
    canvas.background('#00bfff');
    needs_draw = true;
}

//The p5.js draw function runs automatically
function draw() {
    if (trees != null) {
        //needed to prevent constantly redrawing trees
        if (needs_draw) {
            //selects weather or not to recalculate the whole tree or not
            if (resized) {
                canvas.background('#00bfff');
                for (let i = 0; i < trees.length; i++) {
                    //checks if coordinates need updating before redraw
                    trees[i].height = parseInt(canvas.height);
                    trees[i].updateCoords();
                    trees[i].draw(canvas);
                }
                needs_draw = false;
                resized = false;
            }
            else {
                canvas.background('#00bfff');
                for (let i = 0; i < trees.length; i++) {
                    //checks if coordinates need updating before redraw
                    trees[i].draw(canvas);
                }
                needs_draw = false;
            }
        }
    }
}

function windowResized() {
    resizeCanvas(windowWidth * 0.8, windowHeight * 0.8);
    needs_draw = true;
}
