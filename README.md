# Durham p5 Library

A library of reusable components for [p5js](https://p5js.org/). These are developed by the 1st Year Programming class at Durham University.

## Instructions for adding components

- Fork this repository
- Create a subdirectory of the main repository named after your component containing
   - A `.js` file containing the relevant class definition
   - A `.html` file which uses the .js file and demonstrates its use
- Once everything is complete (including peer review) make a pull request from your forked repository to <https://github.com/stevenaeola/Durham-p5-lib>


## The Tree Class

###Methods

- constructor
    - Parametrs(levels (Depth of tree being drawn between 1 - 16), 
    color (hue value of tree), position (x coordinate of the tree's base), 
    blength (length of each branch of the tree between 1 - 16))
    - Use: Initialises a new tree object with the provided parameters
- draw()
    - Parameters (none)
- updateCoords()
    - Parameters (none)
    - Use: Re calculates the coordinates of a tree needed when position,
    levels or blength is changed
