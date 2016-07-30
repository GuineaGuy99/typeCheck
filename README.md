## TypeCheck.js
A tiny lightweight script that makes it easy to define types for function arguments.

**Examples:**
```javascript
function Add(x, y){
	TypeCheck('number', 'number');
	return x + y;
}

Add(true, 10);
// TypeError: argument[0] is a <boolean> but should be a <number>

Add(37);
// Error: received an incorrect number of arguments

Add(15, 15);
// 30
```
```javascript
function Item(name){ this.name = name; }

function LogItemName(x){
	TypeCheck(Item); //check if x is an instance of Item
	console.log(x.name);
}

LogItemName({ name: 'Item1' });
// TypeError: argument[0] is not a instance of <Item>

LogItemName(new Item('Item1'));
// Item1
```
```javascript
function DrawImage(ctx, img, x, y, w, h){
	TypeCheck('canvasrenderingcontext', 'htmlimageelement', 'number', 'number', 'number', 'number');

	if (w == 0) w = img.width;
	if (h == 0) h = img.height;
	ctx.drawImage(img, x, y, w, h);
}
```

**Changelog:**
- v1.0 
	- Release
