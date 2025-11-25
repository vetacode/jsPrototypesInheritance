'use strict';

//PROTOTYPE is an Object's special hidden property
//The value of __proto__ has to be: Null or Object

//SETS obj prototype
let animal = {
  eats: true,
};
let rabbit = {
  jumps: true,
};

rabbit.__proto__ = animal; // sets rabbit.[[Prototype]] = animal

// we can find both properties in rabbit now:
console.log(rabbit.eats); // true (**)
console.log(rabbit.jumps); // true

//We can say: “animal is the prototype of rabbit” or “rabbit prototypically inherits from animal”.

let hewan = {
  makan: true,
  jalan() {
    console.log('Bisa jalan dong');
  },
};

let kucing = {
  ngeong: true,
  __proto__: hewan,
};

let tabby = {
  warna: 'belang orange',
  __proto__: kucing,
};

kucing.jalan(); //Bisa jalan dong
console.log(tabby.ngeong); //true
tabby.jalan(); //Bisa jalan dong

//THE DIFFERENCE
// __proto__ is the getter/setter for [[prototype]]
//New Syntax for __proto__: Object.getPrototypeOf/Object.setPrototypeOf

//Writing doesn’t use prototype
//We can directly assign its own method
let animal2 = {
  eats: true,
  walk() {
    /* this method won't be used by rabbit */
  },
};

let rabbit2 = {
  __proto__: animal,
};

rabbit2.walk = function () {
  console.log('Rabbit! Bounce-bounce!');
};

rabbit2.walk(); // Rabbit! Bounce-bounce!

//How to use setters and trigger it
let user = {
  name: 'John',
  surname: 'Smith',

  set fullName(value) {
    [this.name, this.surname] = value.split(' ');
  },

  get fullName() {
    return `${this.name} ${this.surname}`;
  },
};

let admin = {
  __proto__: user,
  isAdmin: true,
};

console.log(admin.fullName); // John Smith (*)

// setter triggers!
admin.fullName = 'Alice Cooper'; // (**) ==> 'This' is belongs to admin, NOT user

console.log(admin.fullName); // Alice Cooper, state of admin modified
console.log(user.fullName); // John Smith, state of user protected

//The value of 'THIS'
//No matter where the method is found: in an object or its prototype.
//In a method call, 'this' is always the object before the dot.
// animal has methods
let animal3 = {
  walk() {
    if (!this.isSleeping) {
      alert(`I walk`);
    }
  },
  sleep() {
    this.isSleeping = true;
  },
};

let rabbit3 = {
  name: 'White Rabbit',
  __proto__: animal3,
};

// modifies rabbit3.isSleeping
rabbit3.sleep();

console.log(rabbit3.isSleeping); // true
console.log(animal3.isSleeping); // undefined (no such property in the prototype)
//NOTES: methods are shared, but the object state is not.

//for…in loop to iterates over inherited properties
let hewan2 = {
  nafas: true,
  tidur: true,
};

let burung = {
  terbang: true,
  __proto__: hewan2,
};

console.log(Object.keys(burung)); //cuma return array of burung props

for (let props in burung) {
  console.log(props); //terbang, nafas, tidur. Pake for..in loop akan dapet semua string props dari obj dan prototype nya
}
