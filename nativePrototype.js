'use strict';

//Object.prototype
let obj = {};
//its same as obj = new Object()
console.log(obj); //{}
//Although obj has native prop toString method, but its not visible, the obj is empty
//How to check:
console.log(obj.__proto__.constructor == Object);
console.log(obj.toString == obj.__proto__.toString);
console.log(obj.__proto__.constructor.toString == Object.toString);
console.log(
  (obj.__proto__.constructor.toString == Object.toString) == obj.toString
);
console.log(Object.prototype.toString == obj.toString);
console.log(obj.toString == obj.__proto__.toString);
console.log(obj.toString == Object.prototype.toString);
