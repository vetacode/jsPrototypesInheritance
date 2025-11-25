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
