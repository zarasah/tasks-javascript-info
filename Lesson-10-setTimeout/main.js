'use strict'
/**          Lesson 10
 *  Student ------------ Zara Sahakyan
 *  Date ---------------- 13.03.2022
 **/


/**
 *            Task 1
 *      Output every second
 * 
 * Write a function printNumbers(from, to) that outputs a number every second, 
 * starting from from and ending with to. 
 * Make two variants of the solution. 
 * 
 * 1. Using setInterval. 
 * 2. Using nested setTimeout.
 * 
 */

// // 1. Using setInterval. 
// function printNumbers(from, to) {
//   function print() {
//     if (from <= to) {
//       console.log(from++);
//     }
//   }
//   let timerId = setInterval(print, 1000);
// }

// printNumbers(3, 7); // 3, 4, 5, 6, 7

// 2. Using nested setTimeout.

function printNumbers2(from, to) {
  let timerId = setTimeout(function print() {
    if (from <= to) {
    console.log(from++);
    }
    timerId = setTimeout(print, 1000);
  }, 1000)
}

printNumbers2(5, 11); // 5, 6, 7, 8, 9, 10, 11


/**
 *            Task 2
 *    What will setTimeout show?
 * 
 * When will the scheduled function run? 
 * 
 * After the loop. 
 * Before the loop. 
 * In the beginning of the loop. 
 * 
 * What is alert going to show?
 * 
 */

//  let i = 0;

//  setTimeout(() => console.log(i), 100); //  100000000 
 
//  // assume that the time to execute this function is >100ms
//  for(let j = 0; j < 100000000; j++) {
//    i++;
//  }


//  /* ************************************* */

//  const userName = 'Zara';

// let timerId2 = setTimeout (name, 5000, 'Hello');

// function name(phrase) {
// 	console.log(`${phrase} ${userName}`)
// }

// console.log('You can see the message after 5 seconds');


//  /* ************************************* */

//  let num = 1;

//  function printNum() {
//      console.log(num++);
//  }

//  let timerId = setInterval(printNum, 2000);

//  let timerId1 = setTimeout (() => {clearTimeout(timerId)}, 20000);  // 1, 2, 3, 4, 5, 6, 7, 8, 9, 10


// /* ************************************* */

let user1 = {
	name: 'Zara',
  surname: 'Sahakyan',
  age: 32,
  
}

let descriptorN = Object.getOwnPropertyDescriptor(user1, 'name');

let descriptorS = Object.getOwnPropertyDescriptor(user1, 'surname');

console.log(descriptorN);  //  {value: 'Zara', writable: true, enumerable: true, configurable: true}
console.log(descriptorS);  //  {value: 'Sahakyan', writable: true, enumerable: true, configurable: true}

Object.defineProperty(user1, 'name', {
writable: false
});

descriptorN = Object.getOwnPropertyDescriptor(user1, 'name');

console.log(descriptorN);  //  {value: 'Zara', writable: false, enumerable: true, configurable: true}

// user1.name = 'Ani';  //  TypeError: Cannot assign to read only property 'name' of object 

console.log(user1.name);  //  Zara 

// Object.defineProperty(user1, 'surname', {
//   writable: false,
//   configurable: false,
// });

// delete user1.surname;   //  TypeError: Cannot delete property 'surname' 

// descriptorS = Object.getOwnPropertyDescriptor(user1, 'surname');

// console.log(descriptorS);

// console.log(user1.surname);

// Object.defineProperty(user1, 'surname', {   //  TypeError: Cannot redefine property: surname at Function.defineProperty
//   writable: true,
//   configurable: true,
// });        

Object.defineProperty(user1, 'surname', {
  enumerable: false
  });

  for (let key in user1) {
    console.log(key);   //   name, age
  }

let newdef = Object.getOwnPropertyDescriptors(user1);

console.log(newdef);   // name: {...}, age: {value: 32, writable: true, enumerable: true, configurable: true},  surname: {...}

let cloneUser1 = Object.defineProperties({}, Object.getOwnPropertyDescriptors(user1));

console.log(cloneUser1);  //  cloneUser1 = user1;

// /* ************************************* */

let user2 = {
  name: 'Viak',
  surname: 'Baghdasaryan',

  get fullName() {
    return `${this.name} ${this.surname}`;
  },

  set fullName (value) {
    return [this.name, this.surname] = value.split(' ');
  }
}

console.log(user2.fullName);  //  Vika Baghdasaryan

user2.fullName = 'Vahagn Baghdasaryan';

console.log(user2.name);  //  Vahagn 
console.log(user2.surname);  //  Baghdasaryan
console.log(user2.fullName);  //  Vahagn Baghdasaryan



