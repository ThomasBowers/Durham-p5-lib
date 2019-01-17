Based on the sketch found at https://www.openprocessing.org/sketch/504377
## My example Implementation
I've implemented my tree class so that it pushes multiple tree objects into an array and
 draws them on to a canvas appearing like a forest. I've added html form controls to demonstrate 
 initialising tree objects with different parameters. The kill trees button shows is there to show 
how through getters and setters I can manipulate tree objects after creation. There are also
options to remove trees adding to the user experience. Ive also added a reset button that
moves the trees to the bottom of the window if the window is re-sized as p5 coordinates
start from the top and extend downwards.
<a name="Tree"></a>

## Tree
A class to describe a 2- Dimensional tree graphic where the branches are randomly
generated through a recursive algorithm. A tree object holds an array of points
describing the start and end point of each of the branches and a draw method that
draws lines between these points to create the tree object.

**Kind**: global class  

* [Tree](#Tree)
    * [new Tree(levels, color, position, bLength, initialHeight)](#new_Tree_new)
    * [.height](#Tree+height) ⇒ <code>number</code>
    * [.height](#Tree+height)
    * [.position](#Tree+position) ⇒ <code>number</code>
    * [.position](#Tree+position)
    * [.bLength](#Tree+bLength) ⇒ <code>number</code>
    * [.bLength](#Tree+bLength)
    * [.levels](#Tree+levels) ⇒ <code>number</code>
    * [.levels](#Tree+levels)
    * [.color](#Tree+color) ⇒ <code>number</code>
    * [.color](#Tree+color)
    * [.updateCoords()](#Tree+updateCoords)
    * [.draw(g)](#Tree+draw)

<a name="new_Tree_new"></a>

### new Tree(levels, color, position, bLength, initialHeight)

| Param | Type | Description |
| --- | --- | --- |
| levels | <code>number</code> | depth of tree |
| color | <code>number</code> | Hue value of tree |
| position | <code>number</code> | x-coordinate of tree base |
| bLength | <code>number</code> | length of tree branch |
| initialHeight | <code>number</code> | y-coordinate of the tree base |

<a name="Tree+height"></a>

### tree.height ⇒ <code>number</code>
**Kind**: instance property of [<code>Tree</code>](#Tree)  
**Returns**: <code>number</code> - y-coordinate of tree base  
<a name="Tree+height"></a>

### tree.height
Sets tree base y - coordinate
need to run updateCoords() after to update points array

**Kind**: instance property of [<code>Tree</code>](#Tree)  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>number</code> | y-coordinate of tree base |

<a name="Tree+position"></a>

### tree.position ⇒ <code>number</code>
**Kind**: instance property of [<code>Tree</code>](#Tree)  
**Returns**: <code>number</code> - x-coordinate of tree base  
<a name="Tree+position"></a>

### tree.position
Sets tree base x - coordinate
need to run updateCoords() after to update points array

**Kind**: instance property of [<code>Tree</code>](#Tree)  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>number</code> | x-coordinate of tree base |

<a name="Tree+bLength"></a>

### tree.bLength ⇒ <code>number</code>
**Kind**: instance property of [<code>Tree</code>](#Tree)  
**Returns**: <code>number</code> - Current length of all tree branches  
<a name="Tree+bLength"></a>

### tree.bLength
Sets the branch length needs to be between 1 and 16
need to run updateCoords() after to update points array

**Kind**: instance property of [<code>Tree</code>](#Tree)  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>number</code> | tree branch length |

<a name="Tree+levels"></a>

### tree.levels ⇒ <code>number</code>
**Kind**: instance property of [<code>Tree</code>](#Tree)  
**Returns**: <code>number</code> - Depth of the tree  
<a name="Tree+levels"></a>

### tree.levels
Sets the value of the tree depth between 1 and 16
You need to run updateCoords() after to update points array

**Kind**: instance property of [<code>Tree</code>](#Tree)  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>number</code> | tree depth |

<a name="Tree+color"></a>

### tree.color ⇒ <code>number</code>
**Kind**: instance property of [<code>Tree</code>](#Tree)  
**Returns**: <code>number</code> - Hue value of the tree  
<a name="Tree+color"></a>

### tree.color
Sets the hue value of the tree scaled between 0 - 100
You need to run updateCoords() after to update points array

**Kind**: instance property of [<code>Tree</code>](#Tree)  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>number</code> | Hue Value |

<a name="Tree+updateCoords"></a>

### tree.updateCoords()
Re-calculates the coordinates of a tree and pushes them into the points array.
Needs to be called after position, levels, bLength or height is changed or the tree won't be changed.

**Kind**: instance method of [<code>Tree</code>](#Tree)  
<a name="Tree+draw"></a>

### tree.draw(g)
Draws tree on canvas with coordinates in the array of points

**Kind**: instance method of [<code>Tree</code>](#Tree)  

| Param | Type | Description |
| --- | --- | --- |
| g | <code>canvas</code> | Pass in custom canvas to draw to |

