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

/**TASK 1
 * Changing "prototype"
importance: 5
In the code below we create new Rabbit, and then try to modify its prototype.

In the start, we have this code:

function Rabbit() {}
Rabbit.prototype = {
  eats: true
};

let rabbit = new Rabbit();

alert( rabbit.eats ); // true
We added one more string (emphasized). What will alert show now?

function Rabbit() {}
Rabbit.prototype = {
  eats: true
};

let rabbit = new Rabbit();

Rabbit.prototype = {};

alert( rabbit.eats ); // TRUE
…And if the code is like this (replaced one line)?

function Rabbit() {}
Rabbit.prototype = {
  eats: true
};

let rabbit = new Rabbit();

Rabbit.prototype.eats = false;

alert( rabbit.eats ); // FALSE
And like this (replaced one line)?

function Rabbit() {}
Rabbit.prototype = {
  eats: true
};

let rabbit = new Rabbit();

delete rabbit.eats;

alert( rabbit.eats ); // TRUE
The last variant:

function Rabbit() {}
Rabbit.prototype = {
  eats: true
};

let rabbit = new Rabbit();

delete Rabbit.prototype.eats;

alert( rabbit.eats ); // UNDEFINED
 */

function Rabbit2() {}
Rabbit2.prototype = {
  eats: true,
};

let rabbit2 = new Rabbit2();

// Rabbit2.prototype.eats = false;
// delete rabbit2.eats;
delete Rabbit2.prototype.eats;

console.log(rabbit2.eats); //

/**TASK 2
 * Create an object with the same constructor
importance: 5
Imagine, we have an arbitrary object obj, created by a constructor function – we don’t know which one, but we’d like to create a new object using it.

Can we do it like that?

let obj2 = new obj.constructor();
Give an example of a constructor function for obj which lets such code work right. And an example that makes it work wrong.
 */

function Car(type) {
  this.type = type;
  console.log(type);
}

let car = new Car('Honda');
console.log(car.type);

let car2 = new car.constructor('Volvo');
console.log(Car.prototype.constructor == Car);
console.log(car2.type);
