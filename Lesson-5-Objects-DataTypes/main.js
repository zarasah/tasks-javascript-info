'use strict'
/**          Lesson 5
 *  Student ------------ Zara Sahakyan
 *  Date ---------------- 21.02.2022
 **/


/**
 *            Task 1
 *      Using "this" in object literal
 * 
 * Here the function makeUser returns an object.
 * What is the result of accessing its ref? 
 * 
 */

//  function makeUser() {
//     return {
//       name: 'John',
//       ref: this
//     };
//   }
  
//   let user = makeUser();
  
//   console.log( user.ref.name ); // Error, Cannot read properties of undefined

/**
 *            Task 2
 *      Create a calculator
 * 
 * Create an object calculator with three methods:
 * read() prompts for two values and saves them as object properties.
 * sum() returns the sum of saved values.
 * mul() multiplies saved values and returns the result.
 * 
 */

  //  let calculator = {
  //   read() {
  //       this.value1 = +prompt('Enter first number');
  //       this.value2 = +prompt('Enter second number');
  //   },

  //   sum() {
  //       return this.value1 + this.value2;
  //   },

  //   mul() {
  //       return this.value1 * this.value2;
  //   }
  // };
  
  // calculator.read();
  // console.log( calculator.sum() );
  // console.log( calculator.mul() );

  /**
 *            Task 3
 *           Chaining
 * 
 * There's a ladder object that allows to go up and down:
 * 
 * let ladder = {
 *  step: 0,
 *  up() {
 *      this.step++;
 *  },
 *  down() {
 *      this.step--;
 *  },
 *  showStep: function() { // shows the current step
 *      alert( this.step );
 *  }
 * };
 * 
 * Modify the code of up, down and showStep to make the calls chainable, like this:
 * 
 * ladder.up().up().down().showStep().down().showStep(); // shows 1 then 0
 * 
 */

   let ladder = {
    step: 0,
    up() {
      this.step++;
      return this;
    },
    down() {
      this.step--;
      return this;
    },
    showStep: function() { 
      console.log( this.step );
      return this;
    }
  };

  console.log(ladder.up().up().down().showStep().down().showStep());

/**
 *            Task 4
 *   Two functions - one object
 * 
 * Is it possible to create functions A and B so that new A() == new B()?
 * 
 * function A() { ... }
 * function B() { ... }
 * 
 * let a = new A;
 * let b = new B;
 * 
 * alert( a == b ); // true
 * 
 */

 function A() {
   this.name = 'Zara';
 }
 function B() {
   return a;
 }
 
 let a = new A;
 let b = new B;
 
 console.log( a === b ); // true

 /**
 *            Task 5
 *     Create new Calculator
 * 
 * Create a constructor function Calculator that creates objects with 3 methods:
 * 
 * read() asks for two values using prompt and remembers them in object properties.
 * sum() returns the sum of these properties.
 * mul() returns the multiplication product of these properties.
 * 
 */

  // function Calculator() {
  //   this.read = function() {
  //     this.value1 = +prompt('Enter first number');
  //     this.value2 = +prompt('Enter second number');
  //   }

  //   this.sum = function() {
  //     return this.value1 + this.value2;
  //   }

  //   this.mul = function() {
  //     return this.value1 * this.value2;
  //   }
  // }

  // let calculator = new Calculator();
  // calculator.read();
  
  // console.log( "Sum=" + calculator.sum() );
  // console.log( "Mul=" + calculator.mul() );

/**
 *            Task 6
 *     Create new Accumulator
 * 
 * Create a constructor function Accumulator(startingValue).
 * 
 * Object that it creates should:
 * 
 * Store the "current value" in the property value. The starting 
 * value is set to the argument of the constructor startingValue.
 * 
 * The read() method should use prompt to read a new number 
 * and add it to value.
 * 
 * In other words, the value property is the sum of all user-entered 
 * values with the initial value startingValue.
 * 
 */

//  function Accumulator(startingValue) {
//    this.value = startingValue;
//    this.read = function() {
//      let userValue = +prompt('Enter number');
//      this.value += userValue;
//    }
//  }

//  let accumulator = new Accumulator(1);

//  accumulator.read(); 
//  accumulator.read(); 
 
//  console.log(accumulator.value);


/**
 *            Task 7
 *   Can I add a string property?  
 * 
 * Consider the following code:
 * 
 * let str = "Hello";
 * str.test = 5;
 * alert(str.test);
 * 
 * How do you think, will it work? What will be shown?
 * 
 */

//  let str = "Hello";

//  str.test = 5;
 
//  console.log(str.test);  // TypeError (use strict) or undefined

/**
 *            Task 8
 *   Sum numbers from the visitor  
 * 
 * Create a script that prompts the visitor to enter 
 * two numbers and then shows their sum.
 * 
 */

// let num1 = +prompt('Input first number');
// let num2 = +prompt('Input second number');
// let result = num1 + num2;

// console.log(`${num1} + ${num2} = ${result}`);

/**
 *            Task 9
 *    Why 6.35.toFixed(1) == 6.3? 
 * 
 * How to round 6.35 the right way?
 * 
 */
 
console.log( 1.35.toFixed(1) ); // 1.4
console.log( 6.35.toFixed(1) ); // 6.3
console.log(Math.ceil(6.35*10) / 10); //6.4

/**
 *            Task 10
 *   Repeat until the input is a number 
 * 
 * Create a function readNumber which prompts for a
 * number until the visitor enters a valid numeric value.
 * 
 * The resulting value must be returned as a number.
 * 
 * The visitor can also stop the process by entering an empty line 
 * or pressing 'CANCEL'. In that case, the function should return null.
 * 
 */

//  function readNumber() {
// 	let number;
  
//   do {
//   	number = prompt('Input a number');
//   } while(!isFinite(number))
  
//   if (number === '' || number === null) {
//   	return 0;
//   }
//   return +number;
//  }

//  console.log(`The number is ${readNumber()}`);


 /**
 *            Task 11
 *   An occasional infinite loop 
 * 
 * This loop is infinite. It never ends. Why?
 * 
 * let i = 0;
 * while (i != 10) {
 *  i += 0.2;
 * }
 * 
 */
  // // First version

  //   let i = 0;

  //   while (i !== 10) {
  //     i += 0.2;          // 1.4 + 0.2 = 1.599999
  //     i = +i.toFixed(2); // 1.599999 = 1.60
  //   }

  //   console.log(i);

  // // Second version

  //   let j = 0;
  //   while (j < 10) {
  //     j += 0.2;
  //   }
  //   console.log(j);


/**
 *            Task 12
 *   A random number from min to max
 * 
 * Write the function random(min, max) to generate a random 
 * floating-point number from min to max (not including max).
 * 
 */

 function random(min, max) {
  return Math.random() * (max - min) + min;
 }

 console.log( random(1, 5) );
 console.log( random(1, 5) );
 console.log( random(2, 7) );

/**
 *            Task 13
 *   A random integer from min to max
 * 
 * Create a function randomInteger(min, max) that generates a random integer 
 * number from min to max including both min and max as possible values.
 * 
 */
 
 function randomInteger(min, max) {
  return Math.floor(Math.random() * (max + 1 - min) + min);
 } 

 console.log( randomInteger(1, 5) );
 console.log( randomInteger(1, 5) );
 console.log( randomInteger(10, 12) );


 /**
 *            Task 14
 *   Uppercase the first character
 * 
 * Write a function ucFirst(str) that returns the string 
 * str with the uppercased first character.
 * 
 */
 
  let string1 = 'zara';
  let string2 = 'sahakyan'

  function ucFirst(str) {
    let str1;
    str1 = str[0].toUpperCase();
    for (let i = 1; i < str.length; i++) {
      str1 = str1 + str[i];
    }
    return str1;
  }
  
  console.log(`${ucFirst(string1)} ${ucFirst(string2)}`);

/**
 *            Task 15
 *        Check for spam
 * 
 * Write a function checkSpam(str) that returns true if str 
 * contains 'viagra' or 'XXX', otherwise false.
 * 
 */
 
 function checkSpam(str) {
   let newStr = str.toLowerCase();
   return newStr.includes('viagra') || newStr.includes('xxx');
  }

 console.log(checkSpam('buy ViAgRA now'));
 console.log(checkSpam('free xxxxx'));
 console.log(checkSpam("innocent rabbit"));


 /**
 *            Task 16
 *        Truncate the text
 * 
 * Create a function truncate(str, maxlength) that checks the length of the str and, 
 * if it exceeds maxlength - replaces the end of str with the ellipsis character 
 * "...", to make its length equal to maxlength.
 * 
 */

 function truncate(str, maxlength) {
  if (str.length > maxlength) {
    return str.slice(0, maxlength - 1) + '...';
  }
  return str;
 }

 console.log(truncate("What I'd like to tell on this topic is:", 20));
 console.log(truncate("Hi everyone!", 20));


 /**
 *            Task 17
 *        Extract the money
 * 
 * We have a cost in the form "$120". That is: the dollar sign goes first, 
 * and then the number.
 * Create a function extractCurrencyValue(str) that would extract 
 * the numeric value from such string and return it.
 * 
 */

 function extractCurrencyValue(str) {
  return +str.slice(1)
 }

 console.log(extractCurrencyValue('$120'));
 

/**
 *            Task 18
 *        Is array copied?
 * 
 * What is this code going to show?
 *
 */

   let fruits = ["Apples", "Pear", "Orange"];

   // push a new value into the "copy"
   let shoppingCart = fruits;
   shoppingCart.push("Banana");
   
   // what's in fruits?
   console.log( fruits.length ); //   4

  
/**
 *            Task 19
 *        Array operations.
 * 
 * Let's try 5 array operations.
 * 
 * Create an array styles with items 'Jazz' and 'Blues'.
 * Append 'Rock-n-Roll' to the end.
 * Replace the value in the middle by 'Classics'. Your code 
 * for finding the middle value should work for any arrays with odd length.
 * Strip off the first value of the array and show it.
 * Prepend Rap and Reggae to the array.
 *
 */

let styles = ['Jazz', 'Blues'];

styles.push('Rock-n-Roll');

console.log(styles);

let index = Math.floor(styles.length / 2);

styles[index] = 'Classics';

console.log(styles);

styles.shift(0);

console.log(styles);

styles.unshift('Rap', 'Reggae');

console.log(styles);


/**
 *            Task 20
 *    Calling in an array context
 * 
 * What is the result?
 *
 */

 let arr = ["a", "b"];

 arr.push(function() {
   console.log( this );
 })
 
 arr[2](); //  a, b, function


/**
 *            Task 21
 *       Sum input numbers
 * 
 * Write the function sumInput() that:
 * 
 * Asks the user for values using prompt and stores the values in the array.
 * Finishes asking when the user enters a non-numeric value, an empty string, 
 * or presses 'Cancel'.
 * Calculates and returns the sum of array items.
 *
 */

//  function sumInput() {
//   let sum = 0;
//   let inputNumber = [];
  
//   while (true) {
//   	let number = prompt('Input a number');
//     if (!isFinite(number) || number === '' || number === null) break;
//     inputNumber.push(+number);
//   }
//   for (let element of inputNumber) {
//   	sum += element;
//   }
//   return sum;
//  }

//  console.log(sumInput());


 /**
 *            Task 22
 *            Salary
 *
 */
 function getNetSalary(salary, age) {
   let incomeTax = salary * 0.21;

   let netSalary = salary - incomeTax - pensionPayment(salary, age) - labelPayment(salary);

   return netSalary;
 }

 function pensionPayment(salary, age) {
  if (age <= 1974) {
    return 0;
   }
   if (salary < 5e5) {
     return salary * 0.045;
   } else if (salary >= 5e5 && salary < 10.2e5) {
    return salary * 0.1 - 27500;
   } else {
     return 74500;
   }
 }

 function labelPayment(salary) {
  if (salary < 93300) {
    return 0;
  } else if (salary >= 93300 && salary <= 1e5) {
    return 1500;
  } else if (salary > 1e5 && salary <= 2e5) {
    return 3000;
  } else if (salary > 2e5 && salary <= 5e5) {
    return 5500;
  } else if (salary > 5e5 && salary <= 1e6) {
    return 8500;
  } else {
    return 15000;
  }
 }

 console.log(getNetSalary(100000, 1989));
 console.log(getNetSalary(250000, 1989));
 console.log(getNetSalary(510000, 1989));
 console.log(getNetSalary(1200000, 1989));
 console.log(getNetSalary(350000, 1970));
