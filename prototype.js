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

//OBJECT.KEYS, OBJECT.VALUES will ignore inherited props
console.log(Object.keys(burung)); //cuma return array of burung props

for (let props in burung) {
  console.log(props); //terbang, nafas, tidur. Pake for..in loop akan dapet semua string props dari obj dan prototype nya
}

//How to FILTER out INHERITED props from obj own props
//using: obj.hasOwnProperty(key) ==> will return TRUE or FALSE

let buah = {
  berair: true,
  kulit: true,
};

let pisang = {
  pulen: true,
  __proto__: buah,
};

for (let props in pisang) {
  let isOwn = pisang.hasOwnProperty(props);

  if (isOwn) {
    console.log(`Own: ${props}: ${pisang[props]}`); //Own: pulen
  } else {
    console.log(`inherited: ${props}`); //inherited: berair, kulit
  }
}

/**TASK 1
 * Working with prototype
importance: 5
Here’s the code that creates a pair of objects, then modifies them.

Which values are shown in the process?

let animal = {
  jumps: null
};
let rabbit = {
  __proto__: animal,
  jumps: true
};

alert( rabbit.jumps ); // ? (1)

delete rabbit.jumps;

alert( rabbit.jumps ); // ? (2)

delete animal.jumps;

alert( rabbit.jumps ); // ? (3)
There should be 3 answers.
 */

let animal4 = {
  jumps: null,
};
let rabbit4 = {
  __proto__: animal4,
  jumps: true,
};
console.log(rabbit4.jumps); //true

delete rabbit4.jumps;
console.log(rabbit4.jumps); //null

delete animal4.jumps;
console.log(rabbit4.jumps); //undefined

/**TASK 2
 * Searching algorithm
importance: 5
The task has two parts.

Given the following objects:

let head = {
  glasses: 1
};

let table = {
  pen: 3
};

let bed = {
  sheet: 1,
  pillow: 2
};

let pockets = {
  money: 2000
};
Use __proto__ to assign prototypes in a way that any property lookup will follow the path: pockets → bed → table → head. For instance, pockets.pen should be 3 (found in table), and bed.glasses should be 1 (found in head).
Answer the question: is it faster to get glasses as pockets.glasses or head.glasses? Benchmark if needed.
 */

let head = {
  glasses: 1,
};

let table = {
  pen: 3,
  __proto__: head,
};

let bed = {
  sheet: 1,
  pillow: 2,
  __proto__: table,
};

let pockets = {
  money: 2000,
  __proto__: bed,
};
console.log(pockets.pen); // 3
console.log(bed.glasses); // 1
console.log(table.money); // undefined

console.log(head.glasses);
console.log(pockets.glasses); //there is no difference in performance in modern engines

/**TASK 3
 * Where does it write?
importance: 5
We have rabbit inheriting from animal.

If we call rabbit.eat(), which object receives the full property: animal or rabbit?

let animal = {
  eat() {
    this.full = true;
  }
};

let rabbit = {
  __proto__: animal
};

rabbit.eat();
 */

let animal5 = {
  eat() {
    this.full = true;
  },
};

let rabbit5 = {
  __proto__: animal5,
};

rabbit5.eat();
console.log(rabbit5.full);
console.log(animal5.full);
// animal5.eat();
console.log(animal5.full);
// console.log(animal5.eat());
rabbit5.eat();
console.log(rabbit5.full);
console.log(animal5.full);
console.log(rabbit5.eat());
