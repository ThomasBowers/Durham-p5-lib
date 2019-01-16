# Durham p5 Library

A library of reusable components for [p5js](https://p5js.org/). These are developed by the 1st Year Programming class at Durham University.

## Instructions for adding components

- Fork this repository
- Create a subdirectory of the main repository named after your component containing
   - A `.js` file containing the relevant class definition
   - A `.html` file which uses the .js file and demonstrates its use
- Once everything is complete (including peer review) make a pull request from your forked repository to <https://github.com/stevenaeola/Durham-p5-lib>

<a name="Tree"></a>

## Tree
**Kind**: global class  

* [Tree](#Tree)
    * [new Tree(levels, color, position, bLength)](#new_Tree_new)
    * [.position](#Tree+position) ⇒ <code>position</code>
    * [.position](#Tree+position)
    * [.bLength](#Tree+bLength) ⇒ <code>bLength</code>
    * [.bLength](#Tree+bLength)
    * [.levels](#Tree+levels) ⇒ <code>levels</code>
    * [.levels](#Tree+levels)
    * [.color](#Tree+color) ⇒ <code>color</code>
    * [.color](#Tree+color)
    * [.updateCoords()](#Tree+updateCoords)
    * [.draw()](#Tree+draw)

<a name="new_Tree_new"></a>

### new Tree(levels, color, position, bLength)

| Param | Type | Description |
| --- | --- | --- |
| levels | <code>Int</code> | depth of tree |
| color | <code>Int</code> | Hue value of tree |
| position | <code>Int</code> | x-coordinate of tree base |
| bLength | <code>Int</code> | length of tree branch |

<a name="Tree+position"></a>

### tree.position ⇒ <code>position</code>
Gets tree base x - coordinate

**Kind**: instance property of [<code>Tree</code>](#Tree)  
<a name="Tree+position"></a>

### tree.position
Sets tree base x - coordinate

**Kind**: instance property of [<code>Tree</code>](#Tree)  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>int</code> | x-coordinate of tree base need to run updateCoords() after to update |

<a name="Tree+bLength"></a>

### tree.bLength ⇒ <code>bLength</code>
Gets current length of tree branch

**Kind**: instance property of [<code>Tree</code>](#Tree)  
<a name="Tree+bLength"></a>

### tree.bLength
Sets the branch length needs to be between 1 and 16
need to run updateCoords() to update object

**Kind**: instance property of [<code>Tree</code>](#Tree)  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>int</code> | tree branch length need to run updateCoords() after to update |

<a name="Tree+levels"></a>

### tree.levels ⇒ <code>levels</code>
Gets the depth of the tree

**Kind**: instance property of [<code>Tree</code>](#Tree)  
<a name="Tree+levels"></a>

### tree.levels
Sets the value of the tree depth between 1 and 16
need to run updateCoords() to update object

**Kind**: instance property of [<code>Tree</code>](#Tree)  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>int</code> | tree depth need to run updateCoords() after to update |

<a name="Tree+color"></a>

### tree.color ⇒ <code>color</code>
Gets the current hue value of the tree

**Kind**: instance property of [<code>Tree</code>](#Tree)  
<a name="Tree+color"></a>

### tree.color
Sets the hue value of the tree scaled between 0 - 100

**Kind**: instance property of [<code>Tree</code>](#Tree)  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>int</code> | Hue Value |

<a name="Tree+updateCoords"></a>

### tree.updateCoords()
Re calculates the coordinates of a tree needed when position,
     levels or blength is changed

**Kind**: instance method of [<code>Tree</code>](#Tree)  
<a name="Tree+draw"></a>

### tree.draw()
Draws tree on canvas with current coordinates set

**Kind**: instance method of [<code>Tree</code>](#Tree)  