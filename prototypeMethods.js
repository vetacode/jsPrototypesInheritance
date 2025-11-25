'use strict';

/**
 * The modern methods to get/set a prototype are:

Object.getPrototypeOf(obj) – returns the [[Prototype]] of obj.
Object.setPrototypeOf(obj, proto) – sets the [[Prototype]] of obj to proto.
 */

//OBJECT.CREATE
//Object.create(proto[, descriptors]) – creates an empty object with given proto as [[Prototype]] and optional property descriptors.

let dog = {
  bark: true,
};

let golden = Object.create(dog); //same as {__proto__: dog}
console.log(golden.bark); //true

console.log(Object.getPrototypeOf(golden) == dog); //true
Object.setPrototypeOf(golden, {}); //change/set prototype of golden to {}
console.log(golden.bark); //undefined

//using descriptors
let animal = {
  eats: true,
};

let rabbit = Object.create(animal, {
  jumps: {
    value: true,
  },
});

console.log(rabbit.jumps); // true

//use OBJECT.CREATE to perform an object cloning MORE POWERFUL than copying properties in for..in:
//This call makes a truly exact copy of obj, including all properties: enumerable and non-enumerable, data properties and setters/getters – everything, and with the right [[Prototype]].
//ITS SHALLOW COPY

let obj = {};
let clone = Object.create(
  Object.getPrototypeOf(obj),
  Object.getOwnPropertyDescriptors(obj)
);

/**TASK 1
 * Add toString to the dictionary
importance: 5
There’s an object dictionary, created as Object.create(null), to store any key/value pairs.

Add method dictionary.toString() into it, that should return a comma-delimited list of keys. Your toString should not show up in for..in over the object.

Here’s how it should work:

let dictionary = Object.create(null);

// your code to add dictionary.toString method

// add some data
dictionary.apple = "Apple";
dictionary.__proto__ = "test"; // __proto__ is a regular property key here

// only apple and __proto__ are in the loop
for(let key in dictionary) {
  alert(key); // "apple", then "__proto__"
}

// your toString in action
alert(dictionary); // "apple,__proto__"

 */

let dictionary = Object.create(null, {
  toString: {
    // define toString property
    value() {
      // the value is a function
      return Object.keys(this).join();
    },
  },
});

// add some data
dictionary.apple = 'Apple';
dictionary.__proto__ = 'test'; // __proto__ is a regular property key here

// only apple and __proto__ are in the loop
for (let key in dictionary) {
  console.log(key); // "apple", then "__proto__"
}

// your toString in action
console.log(dictionary); // "apple,__proto__"
