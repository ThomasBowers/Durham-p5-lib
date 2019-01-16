Based on the sketch found at https://www.openprocessing.org/sketch/504377
<a name="Tree"></a>

## Tree
**Kind**: global class  

* [Tree](#Tree)
    * [new Tree(levels, color, position, bLength)](#new_Tree_new)
    * [.position](#Tree+position) ⇒ <code>int</code>
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

### new Tree(levels, color, position, bLength)

| Param | Type | Description |
| --- | --- | --- |
| levels | <code>number</code> | depth of tree |
| color | <code>number</code> | Hue value of tree |
| position | <code>number</code> | x-coordinate of tree base |
| bLength | <code>number</code> | length of tree branch |

<a name="Tree+position"></a>

### tree.position ⇒ <code>int</code>
**Kind**: instance property of [<code>Tree</code>](#Tree)  
**Returns**: <code>int</code> - X-coordinate of tree base  
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
need to run updateCoords() after to update points array

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
need to run updateCoords() after to update points array

**Kind**: instance property of [<code>Tree</code>](#Tree)  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>number</code> | Hue Value |

<a name="Tree+updateCoords"></a>

### tree.updateCoords()
Re calculates the coordinates of a tree needed when position,
     levels or blength is changed

**Kind**: instance method of [<code>Tree</code>](#Tree)  
<a name="Tree+draw"></a>

### tree.draw(g)
Draws tree on canvas

**Kind**: instance method of [<code>Tree</code>](#Tree)  

| Param | Type | Description |
| --- | --- | --- |
| g | <code>canvas</code> | Pass in custom canvas to draw to |

