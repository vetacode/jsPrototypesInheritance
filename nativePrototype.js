'use strict';

//Object.prototype
let obj = {};
//its same as obj = new Object()
console.log(obj); //{}
//Although obj has native prop toString method, but its not visible, the obj is empty
//How to check:
console.log(obj.toString == obj.__proto__.toString);
console.log(obj.toString == Object.prototype.toString);
console.log(obj.__proto__ == Object.prototype);
console.log(obj.__proto__.toString == Object.prototype.toString);
console.log(obj.__proto__.constructor == Object);
console.log(obj.__proto__.constructor.toString == Object.toString);

console.log(Object.toString == Object.prototype.constructor.toString);
console.log(Object.toString == obj.__proto__.constructor.toString);

//Object == obj.__proto__.constructor !== Function.prototype
console.log(Object == obj.__proto__.constructor);
console.log(Object.__proto__ == Function.__proto__);
console.log(Function.__proto__ == Function.prototype);
console.log(Object.__proto__ == Function.prototype);
console.log(obj.prototype == Object.prototype);

console.log(Function == Object.constructor);
console.log(Object.prototype == obj.__proto__);
console.log(Object.prototype.toString == obj.__proto__.toString);

/**
                                      ┌──────────────────────────────┐
                                      │        Function.prototype     │
                                      │  (prototype of all functions) │
                                      └──────────────────────────────┘
                                                    ▲
                                                    │ [[Prototype]]
                                                    │
                         ┌──────────────────────────────────────────────────┐
                         │                     Function                     │
                         │      (constructor of all functions)              │
                         └──────────────────────────────────────────────────┘
                                                    ▲
                                                    │ constructor
                                                    │
                                      ┌──────────────────────────────┐
                                      │        Object (Function)      │
                                      │    (constructor for objects)  │
                                      └──────────────────────────────┘
                                                    ▲
                                                    │ constructor
                                                    │
                         ┌──────────────────────────────────────────────────┐
                         │               Object.prototype                   │
                         │  (prototype for all plain objects like `{}`)     │
                         └──────────────────────────────────────────────────┘
                                                    ▲
                                                    │ [[Prototype]]
                                                    │
                         ┌──────────────────────────────────────────────────┐
                         │                       obj                        │
                         │                (your `{}` object)                │
                         └──────────────────────────────────────────────────┘
 */
