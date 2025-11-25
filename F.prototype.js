'use strict';

//Function.prototype
//Only used at new Function time, it assigns [[prototype]] of the new object

let animal = {
  eats: true,
};

function Rabbit(name) {
  this.name = name;
}

Rabbit.prototype = animal;

let rabbit = new Rabbit('White Ears');

console.log(rabbit.__proto__ == animal); //true
console.log(rabbit.eats); //true

console.log(Rabbit.prototype == rabbit.__proto__); //true
