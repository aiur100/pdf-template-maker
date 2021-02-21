import { fabric } from "fabric";

console.log("hello world");

const canvas = new fabric.Canvas('app',{
    hoverCursor: 'pointer',
    selection: false
});

canvas.on({
    'object:moving': function(e) {
      e.target.opacity = 0.5;
      console.log(e.target);
    },
    'object:modified': function(e) {
      e.target.opacity = 1;
    }
});

const text = new fabric.Text('foo', { 
    fontFamily: 'Arial', 
    left: 100, 
    top: 100,
    fontSize: 15,
    fill: "black"
});

canvas.add(text);
