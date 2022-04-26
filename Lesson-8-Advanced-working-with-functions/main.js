'use strict'
/**          Lesson 8
 *  Student ------------ Zara Sahakyan
 *  Date ---------------- 07.03.2022
 **/


/**
 *            Task 1
 *        My birtday
 * 
 * Write a function getWeekDay(date) to show the weekday in short format.
 * 
 */

 function getWeekDay(date) {
  let week = ['SU', 'MO', 'TU', 'WE', 'TH', 'FR', 'SA']
   
  return week[date.getDay()];
 }

 let myDay = new Date(1989, 10, 25);

 console.log(getWeekDay(myDay));


/**
 *            Task 2
 *   Does a function pickup latest changes?
 * 
 * The function sayHi uses an external variable name. 
 * When the function runs, which value is it going to use?
 * 
 */

 let name = "John";

 function sayHi() {
   console.log("Hi, " + name);
 }
 
 sayHi(); // here  "Hi, John"

 name = "Pete";
 
 sayHi(); // But here "Hi, Pete"


 /**
 *            Task 3
 *   Which variables are available?
 * 
 * The function makeWorker below makes another function and returns it. 
 * That new function can be called from somewhere else. 
 * Will it have access to the outer variables from its creation place, 
 * or the invocation place, or both?
 * 
 * Which value it will show? "Pete" or "John"?
 * 
 */

  function makeWorker() {
    let name1 = "Pete";
  
    return function() {
      console.log(name1);
    };
  }
  
  let name1 = "John";
  
  // create a function
  let work = makeWorker();
  
  // call it
  work(); // Pete

/**
 *            Task 4
 *   Are counters independent?
 * 
 * Here we make two counters: counter and counter2 
 * using the same makeCounter function. 
 * Are they independent? What is the second counter
 * going to show? 0,1 or 2,3 or something else?
 * 
 */

//  function makeCounter() {
//     let count = 0;
  
//     return function() {
//       return count++;
//     };
//   }
  
//   let counter1 = makeCounter();
//   let counter2 = makeCounter();
  
//   console.log( counter1() ); // 0
//   console.log( counter1() ); // 1
  
//   console.log( counter2() ); // 0
//   console.log( counter2() ); // 1


/**
 *            Task 5
 *        Counter object
 * 
 * Here a counter object is made with the help of 
 * the constructor function. 
 * Will it work? What will it show?
 * 
 */


//  function Counter() {
//     let count = 0;
  
//     this.up = function() {
//       return ++count;
//     };
//     this.down = function() {
//       return --count;
//     };
//   }
  
//   let counter = new Counter();
  
//   console.log( counter.up() ); // 1
//   console.log( counter.up() ); // 2
//   console.log( counter.down() ); // 1


/**
 *            Task 6
 *        Function in if
 * 
 * Look at the code. What will be the result of 
 * the call at the last line?
 * 
 */

//  let phrase = "Hello";

//  if (true) {
//    let user = "John";
 
//    function sayHi() {
//      console.log(`${phrase}, ${user}`);
//    }
//  }
 
//  sayHi(); //  ReferenceError: sayHi is not defined


/**
 *            Task 7
 *        Sum with closures
 * 
 * Write function sum that works like this: sum(a)(b) = a+b. 
 * Yes, exactly this way, using double parentheses (not a mistype).
 * 
 */
 

function sum(first) {
    return function (second) {
        return first + second;
    }
}

console.log(sum(11)(22)) // 33
console.log(sum(11)(-4)) // 7
console.log(sum(2)(23)) // 25


/**
 *            Task 8
 *      Is variable visible?
 * 
 * What will be the result of this code?
 * 
 */

//  let x = 1;

//  function func() {
//    console.log(x); // Error :  Cannot access 'x' before initialization
 
//    let x = 2;
//  }
 
//  func();


 /**
 *            Task 9
 *      Filter through function
 * 
 * Make a set of 'ready to use' filters:  
 *   inBetween(a, b) - between a and b or equal to them (inclusively). 
 *   inArray([...]) - in the given array.
 * 
 */
 

 function inBetween(a, b) {
     return function (item) {
         return item >= a && item <= b;
     }
 }

 function inArray(arg) {
    return function (item) {
    	return arg.includes(item);
    }
 }

 let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

 console.log(arr.filter(inBetween(2, 5)));  // [2, 3, 4, 5]
 console.log(arr.filter(inBetween(7, 8)));  // [7, 8]
 console.log(arr.filter(inArray([1, 11, 20])));  //  [[1]
 console.log(arr.filter(inArray([0, 3, 7, 10])));  //   [3, 7]


 /**
 *            Task 10
 *         Sort by field
 * 
 * We've got an array of objects to sort.
 * So, instead of writing a function, just put byField(fieldName). 
 * Write the function byField that can be used for that.
 * 
 */

  function byField(fieldName) {
      return function (a, b) {
            return a[fieldName] > b[fieldName] ? 1 : -1;    
    }
  } 
 
 let users = [
    { name: "John", age: 20, surname: "Johnson" },
    { name: "Pete", age: 18, surname: "Peterson" },
    { name: "Ann", age: 19, surname: "Hathaway" }
  ];

  users.sort(byField('name'));

  console.log(users);  // Ann, John, Pete

  users.sort(byField('age'));

  console.log(users); // Pete, Ann, John



/**
 *            Task 11
 *       Army of functions
 * 
 */

 function makeArmy() {
    let shooters = [];
  
    let i = 0;
    while (i < 10) {
      let j = i;
      let shooter = function() { 
        console.log( j ); 
      };
      shooters.push(shooter); 
      i++;
    }

    return shooters;
  }
  
  let army = makeArmy();

  army[0](); // 0
  army[1](); // 1
  army[2](); // 2


/**
 *            Task 12
 *     Set and decrease for counter
 * 
 * Modify the code of makeCounter() so that the counter 
 * can also decrease and set the number: 
 * counter() should return the next number (as before). 
 * counter.set(value) should set the counter to value. 
 * counter.decrease() should decrease the counter by 1. 
 * See the sandbox code for the complete usage example. 
 * 
 * P.S. You can use either a closure or the function p
 * roperty to keep the current count. Or write both variants.
 * 
 */

 function makeCounter() {
  
    function counter() {
        
      return counter.count++;
    }
  
    counter.count = 0;
    counter.set = function (value) {
        return counter.count = value;
    };
    counter.decrease = function() {
        return --counter.count;
    }
    return counter;
  }
  
  let counter = makeCounter();

  console.log(counter());  // 0
  console.log(counter()); // 1
  console.log(counter.set(5)); // 5
  console.log(counter.decrease()); // 4
  console.log(counter.decrease()); // 3
  console.log(counter.decrease());  // 2


/**
 *            Task 13
 *     Bound function as a method
 * 
 * What will be the output?
 * 
 */

//  function f() {
//   console.log( this ); // null
// }

// let user = {
//   g: f.bind(null)
// };

// user.g();


/**
 *            Task 14
 *          Second bind
 * 
 * Can we change this by additional binding? 
 * What will be the output?
 * 
 */

 function f() {
  console.log(this.name);
}

f = f.bind( {name: "John"} ).bind( {name: "Ann" } );

f(); // John


/**
 *            Task 15
 *   Fix a function that loses "this"
 * 
 */

function askPassword(ok, fail) {
  let password = prompt("Password?", '');
  if (password == "rockstar") ok();
  else fail();
}

let user = {
  name: 'John',

  loginOk() {
    console.log(`${this.name} logged in`);
  },

  loginFail() {
    console.log(`${this.name} failed to log in`);
  },

};

askPassword(user.loginOk.bind(user), user.loginFail.bind(user));



