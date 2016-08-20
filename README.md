## typeCheck.js
A tiny lightweight script that makes it easy to define types for function arguments.

**Examples:**
```javascript
function add(x, y){
	typeCheck('number', 'number');
	return x + y;
}

add(true, 10);
// TypeError: argument[0] is a <boolean> but should be a <number>

add(37);
// Error: received an incorrect number of arguments

add(15, 15);
// 30
```
```javascript
function Item(name){ this.name = name; }

function logItemName(x){
	typeCheck(Item); //check if x is an instance of Item
	console.log(x.name);
}

logItemName({ name: 'Item1' });
// TypeError: argument[0] is not a instance of <Item>

logItemName(new Item('Item1'));
// Item1
```
```javascript
function drawImage(ctx, img, x, y, w, h){
	typeCheck('canvasrenderingcontext', 'htmlimageelement', 'number', 'number', 'number', 'number');

	if (w == 0) w = img.width;
	if (h == 0) h = img.height;
	ctx.drawImage(img, x, y, w, h);
}
```

**Changelog:**
- v1.0 
	- Release