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
console.log(obj.prototype == Object.prototype);

console.log(Object.toString == Object.prototype.constructor.toString);
console.log(Object.toString == obj.__proto__.constructor.toString);

//Object == obj.__proto__.constructor !== Function.prototype
console.log(Object == obj.__proto__.constructor);
console.log(Object.__proto__ == Function.__proto__);
console.log(Function.__proto__ == Function.prototype);
console.log(Object.__proto__ == Function.prototype);

console.log(
  Object.prototype.constructor.constructor.__proto__ == Function.prototype
);
console.log(
  Object.prototype.constructor.constructor.__proto__.__proto__ ==
    Object.prototype
);
console.log(
  Object.prototype.constructor.constructor.__proto__.__proto__.__proto__ == null
);
console.log(Object.prototype.__proto__ == null);

console.log(Function == Object.constructor);
console.log(Object.prototype == obj.__proto__);
console.log(Object.prototype.toString == obj.__proto__.toString);

/**
 *                                                 Null
 *                                                  |
 *                                          Object.prototype                           
 *                                                  |
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
/**
                                        null
                                    ▲
                                    │ [[Prototype]]
                                    │
                           ┌──────────────────┐
                           │  Object.prototype│
                           │  toString()      │  ← original toString
                           └──────────────────┘
                 ▲                ▲                        ▲
                 │ [[Prototype]]  │ [[Prototype]]          │ [[Prototype]]
                 │                │                        │

 ┌──────────────────────┐   ┌──────────────────────┐   ┌──────────────────────┐
 │  Array.prototype     │   │ Function.prototype   │   │ Number.prototype     │
 │  toString()  (✗)     │   │ toString()  (✗)      │   │ toString()  (✗)      │
 └──────────────────────┘   └──────────────────────┘   └──────────────────────┘
          ▲                           ▲                          ▲
          │ [[Prototype]]             │ [[Prototype]]            │ [[Prototype]]
          │                           │                          │
   ┌────────────┐             ┌──────────────────┐            ┌──────────┐
   │ [1,2,3]    │             │ function f() {}  │            │   5      │
   └────────────┘             └──────────────────┘            └──────────┘



 ┌──────────────────────────┐
 │  Symbol.prototype        │  (✓ inherits Object.prototype.toString)
 └──────────────────────────┘
               ▲
               │ [[Prototype]]
               │
        ┌───────────┐
        │ Symbol()  │
        └───────────┘


 ┌──────────────────────────┐
 │  BigInt.prototype        │  (✓ inherits Object.prototype.toString)
 └──────────────────────────┐
               ▲
               │ [[Prototype]]
               │
        ┌───────────┐
        │  10n      │
        └───────────┘


 ┌──────────────────────────┐
 │  Map.prototype           │  (✓ inherits Object.prototype.toString)
 └──────────────────────────┘
               ▲
               │ [[Prototype]]
               │
         ┌──────────┐
         │ new Map()│
         └──────────┘


 ┌──────────────────────────┐
 │  Set.prototype           │  (✓ inherits Object.prototype.toString)
 └──────────────────────────┘
               ▲
               │ [[Prototype]]
               │
         ┌──────────┐
         │ new Set()│
         └──────────┘



 ┌──────────────────────────┐
 │  Date.prototype          │  (✗ overrides toString)
 └──────────────────────────┘
               ▲
               │ [[Prototype]]
               │
         ┌──────────────┐
         │ new Date()   │
         └──────────────┘


 ┌──────────────────────────┐
 │  RegExp.prototype        │  (✗ overrides toString)
 └──────────────────────────┘
               ▲
               │ [[Prototype]]
               │
         ┌──────────────┐
         │ /abc/        │
         └──────────────┘


 ┌──────────────────────────┐
 │ Error.prototype          │  (✗ overrides toString)
 └──────────────────────────┘
               ▲
               │ [[Prototype]]
               │
         ┌──────────────┐
         │ new Error()  │
         └──────────────┘

*/

/*
                                           null
                                            ▲
                                            │
                 ┌─────────────────────────────────────────────────────────────┐
                 │                      Object.prototype                      │
                 │  (owns: toString(), valueOf(), hasOwnProperty(), isPrototypeOf)
                 └─────────────────────────────────────────────────────────────┘
                                      ▲    ▲    ▲    ▲
                                      │    │    │    │
                 ┌────────────────────┘    │    │    └────────────────────┐
                 │                         │    │                         │
     ┌────────────────────────┐   ┌────────────────────────┐   ┌────────────────────────┐
     │      Array.prototype   │   │   Function.prototype   │   │     Number.prototype   │
     │ (owns: slice(), map(), │   │ (owns: call(), apply(),│   │ (owns: toFixed(), etc) │
     │ forEach(), push(), ...)│   │  bind(), toString()*)  │   │                        │
     └────────────────────────┘   └────────────────────────┘   └────────────────────────┘
                 ▲                           ▲                            ▲
                 │                           │                            │
        [1,2,3] (array instance)   function f(){} (function)        5 (number primitive)


Notes:
- `Function.prototype.toString` is the implementation used when you call `toString()` on any function (e.g. `Object`, `Function`, or user-defined functions).
- `Object.prototype.toString` is the implementation used when calling `toString()` on ordinary object instances (including arrays, numbers when boxed, plain objects, etc.).


More complete (showing constructors and constructor.__proto__ links):

```

```
                                  null
                                   ▲
                                   │
             ┌─────────────────────────────────────────────────────────────┐
             │                      Object.prototype                      │
             └─────────────────────────────────────────────────────────────┘
                                   ▲
                                   │  (Object.prototype.constructor === Object)
                                   │
             ┌─────────────────────────────────────────────────────────────┐
             │                           Object                            │
             │              (constructor function for objects)             │
             └─────────────────────────────────────────────────────────────┘
                                   ▲
                                   │  (Object.__proto__ === Function.prototype)
                                   │
             ┌─────────────────────────────────────────────────────────────┐
             │                        Function.prototype                    │
             │ (call, apply, bind, toString() for functions — *actual owner*) │
             └─────────────────────────────────────────────────────────────┘
                                   ▲
                                   │
             ┌─────────────────────────────────────────────────────────────┐
             │                          Function                             │
             │                (constructor for all functions)               │
             └─────────────────────────────────────────────────────────────┘
```

Other built-ins (each inherits from Object.prototype):

String.prototype    → (owns: charAt, slice, indexOf, trim, ...)
Boolean.prototype   → (owns: valueOf)
Number.prototype    → (owns: toFixed, toExponential, ...)
Array.prototype     → (owns: slice, push, pop, map, filter, ...)
Date.prototype      → (owns: getFullYear, toISOString, ...)
RegExp.prototype    → (owns: exec, test, ...)
Error.prototype     → (owns: name, message when instantiated)
Map.prototype       → (owns: get, set, has, ...)
Set.prototype       → (owns: add, has, delete, ...)
WeakMap.prototype   → (owns: get, set, has)
WeakSet.prototype   → (owns: add, has, delete)
Promise.prototype   → (owns: then, catch, finally)

Key lookups & examples:

* `obj = {}`

  * `obj.__proto__ === Object.prototype`
  * `obj.toString === Object.prototype.toString`

* `arr = [1,2,3]`

  * `arr.__proto__ === Array.prototype`
  * `arr.__proto__.__proto__ === Object.prototype`
  * `arr.slice === Array.prototype.slice`

* `function f(){}`

  * `f.__proto__ === Function.prototype`
  * `f.__proto__.__proto__ === Object.prototype`
  * `f.toString === Function.prototype.toString`

* `Object` (the constructor function):

  * `Object.__proto__ === Function.prototype`
  * `Object.prototype` is different: it's the prototype for instances created by `new Object()`
  * `Object.toString === Function.prototype.toString`  // inherited

Quick reference (expressed as equality checks):

* `obj.__proto__ === Object.prototype`  // true for `{}`
* `arr.__proto__ === Array.prototype`   // true for `[]`
* `f.__proto__ === Function.prototype`  // true for functions
* `Object.__proto__ === Function.prototype` // true, because Object is a function
* `Function.__proto__ === Function.prototype` // true (Function is a function)
* `Object.prototype.__proto__ === null` // true

```

If you'd like, I can convert this into a prettier ASCII art (with box-drawing characters) or export as a markdown file/Notion-ready snippet.
*/
