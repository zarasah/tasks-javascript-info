'use strict'
/**          Lesson 11
 *  Student ------------ Zara Sahakyan
 *  Date ---------------- 17.03.2022
 **/


/**
 *            Task 1
 *     Working with prototype
 * 
 * Here's the code that creates a pair of objects, then modifies them. 
 * Which values are shown in the process?
 * 
 */

//  let animal = {
//   jumps: null
// };
// let rabbit = {
//   __proto__: animal,
//   jumps: true
// };

// console.log( rabbit.jumps ); // true

// delete rabbit.jumps;

// console.log( rabbit.jumps ); // null

// delete animal.jumps;

// console.log( rabbit.jumps ); // undefined


/**
 *            Task 2
 *      Searching algorithm
 * 
 * Use __proto__ to assign prototypes in a way that any property 
 * lookup will follow the path: pockets -> bed -> table -> head. 
 * For instance, pockets.pen should be 3 (found in table), 
 * and bed.glasses should be 1 (found in head).
 * 
 */

 let head = {
  glasses: 1
};

let table = {
  pen: 3,
  __proto__: head
};

let bed = {
  sheet: 1,
  pillow: 2,
  __proto__: table
};

let pockets = {
  money: 2000,
  __proto__: bed
};

console.log(pockets.glasses);  //  1
console.log(pockets.pen);  //  3
console.log(pockets.pillow);  //  2
console.log(table.glasses);  //  1
console.log(table.money);  //  undefined


/**
 *            Task 3
 *      Where does it write?
 * 
 * We have rabbit inheriting from animal. 
 * If we call rabbit.eat(), which object receives 
 * the full property: animal or rabbit?
 * 
 */

 let animal1 = {
  eat() {
    this.full = true;
  }
};

let rabbit1 = {
  __proto__: animal1
};

rabbit1.eat();  //  this=rabbit


/**
 *            Task 4
 *    Why are both hamsters full?
 * 
 * We have two hamsters: speedy and lazy inheriting 
 * from the general hamster object. 
 * When we feed one of them, the other one is also full. 
 * Why? How can we fix it?
 * 
 */

 let hamster = {
  //  stomach: [],

  eat(food) {
    this.stomach.push(food);
  }
};

let speedy = {
  stomach: [],
  __proto__: hamster
};

let lazy = {
  stomach: [],
  __proto__: hamster
};

// This one found the food
speedy.eat("apple");
console.log( speedy.stomach ); // apple

// // This one also has it, why? fix please.
// console.log( lazy.stomach ); // apple


console.log( lazy.stomach ); // []


/**
 *            Task 5
 *     Changing "prototype"
 * 
 */

//  function Rabbit() {}
//  Rabbit.prototype = {
//    eats: true
//  };
 
//  let rabbit = new Rabbit();
 
//  console.log( rabbit.eats ); // true

//  //  1. We added one more string (emphasized). What will alert show now?

//  function Rabbit() {}
// Rabbit.prototype = {
//   eats: true
// };

// let rabbit = new Rabbit();

// Rabbit.prototype = {};

// console.log( rabbit.eats ); // true

// //  2. And if the code is like this (replaced one line)?

// function Rabbit() {}
// Rabbit.prototype = {
//   eats: true
// };

// let rabbit = new Rabbit();

// Rabbit.prototype.eats = false;

// console.log( rabbit.eats ); // false

// //  3. And like this (replaced one line)?

// function Rabbit() {}
// Rabbit.prototype = {
//   eats: true
// };

// let rabbit = new Rabbit();

// delete rabbit.eats;

// console.log( rabbit.eats ); // true

// //  4. The last variant.

// function Rabbit() {}
// Rabbit.prototype = {
//   eats: true
// };

// let rabbit = new Rabbit();

// delete Rabbit.prototype.eats;

// console.log( rabbit.eats ); // undefined


/**
 *            Task 6
 *   Create an object with the same constructor
 * 
 * Imagine, we have an arbitrary object obj, created by a constructor function 
 * - we don't know which one, but we'd like to create a new object using it. 
 * Can we do it like that? 
 * 
 * let obj2 = new obj.constructor(); 
 * 
 * Give an example of a constructor function for obj which lets such code work right. 
 * And an example that makes it work wrong.
 * 
 */

// Code work right

function Obj (name, age) {
  this.name = name,
  this.age = age
}

let obj1 = new Obj('Vika', 6);
let obj2 = new obj1.constructor('Vahagn', 9);

console.log(obj1);  //  {name: 'Vika', age: 6}
console.log(obj2);  //  {name: 'Vahagn', age: 9}

// Code work wrong

Obj.prototype = null;

let obj3 = new Obj('Arina', 3);
let obj4 = new obj3.constructor('Serine', 5);

console.log(obj3);  //  {name: 'Arina', age: 3}
console.log(obj4);  //  String {'Serine'}
console.log(obj4.name);  //  undefined


/**
 *            Task 7
 *     Add method "f.defer(ms)" to functions
 * 
 * Add to the prototype of all functions the method defer(ms), 
 * that runs the function after ms milliseconds.
 * 
 */

 function f() {
  console.log("Hello!");
}

if (!Function.prototype.defer) {
  Function.prototype.defer = function(ms) {
    setTimeout(this, ms);
  }
};

f.defer(2000);


/**
 *            Task 8
 *   Add toString to the dictionary
 * 
 * There's an object dictionary, created as Object.create(null), 
 * to store any key/value pairs. Add method dictionary.toString() 
 * into it, that should return a comma-delimited list of keys. 
 * Your toString should not show up in for..in over the object.
 * 
 */

//  let dictionary = Object.create(null, {
// 	toString: {
//   	value() {
//     return Object.keys(this).join(',');
//     }
//   }
// });

// dictionary.apple = "Apple";
// dictionary.__proto__ = "test"; 

// for(let key in dictionary) {
//   console.log(key); 
// }

// alert(dictionary); 


/**
 *            Task 9
 *   The difference between calls
 * 
 */

//  Let's create a new rabbit object:

function Rabbit(name) {
  this.name = name;
}
Rabbit.prototype.sayHi = function() {
  console.log(this.name);
};

let rabbit = new Rabbit("Rabbit");

//  These calls do the same thing or not?

rabbit.sayHi();  //  Rabbit
Rabbit.prototype.sayHi();  // undefined
Object.getPrototypeOf(rabbit).sayHi();  //  undefined
rabbit.__proto__.sayHi();  // undefined




