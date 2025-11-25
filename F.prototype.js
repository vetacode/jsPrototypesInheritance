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

//DEFAULT F.prototype, constructor property
function Rabbit() {}
/* default prototype
Rabbit.prototype = { constructor: Rabbit };
*/

//TO CHECK:
function Rabbit2() {}
// by default:
// Rabbit2.prototype = { constructor: Rabbit2 }
console.log(Rabbit2.prototype.constructor == Rabbit2);
//so we can use rabbit.constructor to create new Rabbit with prototyping animal

function Rabbit3(name) {
  this.name = name;
  console.log(name);
}

let rabbit3 = new Rabbit3('White Rabbit3');
let rabbit4 = new rabbit3.constructor('Black Rabbit3');
console.log(rabbit3);
console.log(rabbit4);
