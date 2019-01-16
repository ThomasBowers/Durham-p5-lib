let trees = [];
let x;
let w;
let needs_draw;

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
        trees.push(new Tree(12, c_num, spacing, bLength));
        x++;
    }
}

//p5.js setup method creates canvas and sets some global variables
function setup() {
    clear();
    let canvas = createCanvas(windowWidth * 0.8, windowHeight * 0.8);
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
            setup();
            for (let i = 0; i < trees.length; i++) {
                //checks if coordinates need updating before redraw
                trees[i].updateCoords();
                trees[i].draw();
            }
            needs_draw = false
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

function updateSlider(value, id) {
    document.getElementById(id).innerHTML=value;

}


