'use strict'
/**          Lesson 12
 *  Student ------------ Zara Sahakyan
 *  Date ---------------- 22.03.2022
 **/


/**
 *            Task 1
 *        Rewrite to class
 * 
 * The Clock class (see the sandbox) is written in functional style. 
 * Rewrite it in the "class" syntax.
 * 
 */

console.log('9.1 ---Class basic syntax---');
console.log('9.1 Rewrite to class');

// // Function

// function Clock({ template }) {
  
//   let timer;

//   function render() {
//     let date = new Date();

//     let hours = date.getHours();
//     if (hours < 10) hours = '0' + hours;

//     let mins = date.getMinutes();
//     if (mins < 10) mins = '0' + mins;

//     let secs = date.getSeconds();
//     if (secs < 10) secs = '0' + secs;

//     let output = template
//       .replace('h', hours)
//       .replace('m', mins)
//       .replace('s', secs);

//     console.log(output);
//   }

//   this.stop = function() {
//     clearInterval(timer);
//   };

//   this.start = function() {
//     render();
//     timer = setInterval(render, 1000);
//   };

// }

// let clock = new Clock({template: 'h:m:s'});
// clock.start();
// clock.stop();

// // Class

// class Clock {
		
//   constructor({ template }) {
//     	this.template = template;
//   }
  
//   render() {
//       let date = new Date();
  
//       let hours = date.getHours();
//       if (hours < 10) hours = '0' + hours;
  
//       let mins = date.getMinutes();
//       if (mins < 10) mins = '0' + mins;
  
//       let secs = date.getSeconds();
//       if (secs < 10) secs = '0' + secs;
  
//       let output = this.template
//         .replace('h', hours)
//         .replace('m', mins)
//         .replace('s', secs);
  
//       console.log(output);
//     }
  
//     stop() {
//     	clearInterval(this.timer);
//     }
  
//    start() {
//       this.render();
//       this.timer = setInterval(this.render, 1000);
//    }  
//   }
  
  
//   let clock = new Clock({template: 'h:m:s'});
  
//   clock.start();
//   clock.stop();
		
   
/**
 *            Task 2
 *       Error creating an instance
 * 
 *  Here's the code with Rabbit extending Animal. 
 * Unfortunately, Rabbit objects can't be created. What's wrong? Fix it.
 * 
 */

 console.log('9.2 ---Class inheritance---');
 console.log('9.2 Error creating an instance');
 
//  class Animal {

//   constructor(name) {
//     this.name = name;
//   }

// }

// class Rabbit extends Animal {
//   constructor(name) {
//     super(name);
//     this.created = Date.now();
//   }
// }

// let rabbit = new Rabbit("White Rabbit"); // White Rabbit
// console.log(rabbit.name);


/**
 *            Task 3
 *       Extended clock
 * 
 * We've got a Clock class. As of now, it prints the time every second.
 * Create a new class ExtendedClock that inherits from Clock and adds 
 * the parameter precision - the number of ms between 'ticks'. 
 * Should be 1000 (1 second) by default.
 * 
 */

 console.log('9.2 Extended clock');

 class Clock {
  constructor({ template }) {
    this.template = template;
  }

  render() {
    let date = new Date();

    let hours = date.getHours();
    if (hours < 10) hours = '0' + hours;

    let mins = date.getMinutes();
    if (mins < 10) mins = '0' + mins;

    let secs = date.getSeconds();
    if (secs < 10) secs = '0' + secs;

    let output = this.template
      .replace('h', hours)
      .replace('m', mins)
      .replace('s', secs);

    console.log(output);
  }

  stop() {
    clearInterval(this.timer);
  }

  start() {
    this.render();
    this.timer = setInterval(() => this.render(), 1000);
  }
}

class ExtendedClock extends Clock {
  constructor({ template }, precision) {
    super({ template });
    this.precision = precision;
  }

  start() {
    this.render();
    this.timer = setInterval(() => this.render(), this.precision);
  }
}

let clock = new ExtendedClock({template: 'h:m:s'});

clock.start();
clock.stop();

let clock3 = new ExtendedClock({template: 'h:m:s'}, 3000);

clock3.start();
clock3.stop();




/**
 *            Task 4
 *     Class extends Object?
 * 
 * Code doesn't work - why? fix it?
 * 
 */

 console.log('9.3 ---Static properties and methods---');
 console.log('9.3 Class extends Object?');

 class Rabbit extends Object {
  constructor(name) {
    super();
    this.name = name;
  }
}

let rabbit = new Rabbit("Rab");

console.log( rabbit.hasOwnProperty('name') ); // true

 


/**
 *            Task 5
 *      Strange instanceof
 * 
 * In the code below, why does instanceof return true? 
 * We can easily see that a is not created by B().
 * 
 */

 console.log('9.6 ---Class checking: "instanceof"---');
 console.log('9.6 Strange instanceof');

 function A() {}
 function B() {}
 
 A.prototype = B.prototype = {};
 
 let a = new A();
 
 console.log( a instanceof B ); // true

 console.log(a.__proto__ === A.prototype);  //  true
 console.log(A.prototype === B.prototype);  //  true
 console.log(a.__proto__ === B.prototype);  //  true





