let trees = [];
let x;
let w;
let needs_draw, resized = 0;
let canvas;
//methods to remove trees from the array
function removeAll() {
    trees = [];
    //need to clear and re run setup or trees stay on canvas
    setup();
}

function removeLast() {
    trees.pop();
    setup();
}

function removeRandom() {
    let s = Math.floor(Math.random() * trees.length);
    trees.splice(s, 1);
    setup();
}

//interacts with the html dom to set the specifics of thee tree I want to add
function addTrees() {
    needs_draw = true;
    let randomSpacing = document.getElementById("randomSpacing").checked;
    x = 0;
    let num_trees = document.getElementById("numTrees").value;
    let c_num = document.getElementById("color").value;
    let bLength = document.getElementById("branch_length").value;
    let levels = document.getElementById("tree_depth").value;
    let spacing;
    while (x < num_trees) {
        if (randomSpacing) {
            spacing = width * Math.random();
        }
        else {
            spacing = ((w * 8 / (num_trees - 1)) * x + w);
        }
        trees.push(new Tree(levels, c_num, spacing, bLength));
        x++;
    }
}

//p5.js setup method creates canvas and sets some global variables
function setup() {
    clear();
    canvas = createCanvas(windowWidth * 0.8, windowHeight * 0.8);
    canvas.parent('sketch-holder');
    canvas.background("#00bfff");
    w = width * 0.1;
    needs_draw = true
}

//A function to demonstrate the use of the getters and setters of my tree class
function modify() {
    if (trees != null) {
        for (let i = 0; i < trees.length; i++) {
            trees[i].color = 67;
            trees[i].bLength = 10;
            trees[i].position = parseInt(w * 10 * Math.random());
            trees[i].levels = 6;
            setup();
        }
    }
    else {
        console.log("No trees")
    }
}
//The p5.js draw function runs automatically
function draw() {
    if (trees != null) {
        //needed to prevent constantly redrawing trees
        if (needs_draw) {
            if(resized) {
                canvas.background("#00bfff");
                for (let i = 0; i < trees.length; i++) {
                    //checks if coordinates need updating before redraw
                    trees[i].updateCoords();
                    trees[i].draw(canvas);
                }
                needs_draw = false;
                resized = 0;
            }
            else{
                canvas.background("#00bfff");
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
    w = width * 0.1;
    needs_draw = 1;
}

function updateSlider(value, id) {
    document.getElementById(id).innerHTML=value;

}
function recalc() {
    needs_draw = 1;
    resized = 1;
}