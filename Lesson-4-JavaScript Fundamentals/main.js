/**          Lesson 4
 *  Student ------------ Zara Sahakyan
 *  Date ---------------- 13.02.2022
 **/


/**
 *            Task 1
 *    Rewrite the function using '?' or ||
 * 
 * function checkAge(age) {
 *  if (age > 18) {
 *      return true;
 *  } else {
 *    return confirm('Did parents allow you?');
 *  }
 * }
 * 
 */
// let age = prompt('Input your age');

// function checkAge(age) {
//     return age > 18 ? true : confirm('Did parents allow you?');
// }

// console.log (checkAge(+age));

/**
 *            Task 2
 *        Function min(a, b)
 * 
 * Write a function min(a,b) which returns the least of two numbers a and b.
 * 
 */

function min(a, b) {
    return a < b ? a : b;
}

console.log(min(5, 7));


/**
 *            Task 3
 *        Function pow(x, n)
 * 
 * Write a function pow(x,n) that returns x in power n. Or, in other words, 
 * multiplies x by itself n times and returns the result.
 * 
 */

function pow(x, n) {
    if (n > 1) {
        let result = 1;
        for(let i = 0; i < n; i++) {
            result *= x;
        }
        return result;
    }
    return `The function supports only natural values of n: integers up from 1`;
}

console.log(pow(5, 3));
console.log(pow(10, -2));

/**
 *            Task 4
 *   Rewrite with arrow function  
 * 
 * Replace Function Expressions with arrow functions in the code below:
 * 
 *  ask(
 *      "Do you agree?",
 *      function() { alert("You agreed."); },
 *      function() { alert("You canceled the execution."); }
 *  );
 * 
 */

//  function ask(question, yes, no) {
//     if (confirm(question)) yes()
//     else no();
//   }

//   ask(
//     'Do you agree?',
//     () => alert('You agreed.'),
//     () => alert('You canceled the execution.')
//     );

/**
 *            Task 5
 *        Hello, object
 *
 * Write the code, one line for each action:
 * Create an empty object user.
 * Add the property name with the value John.
 * Add the property surname with the value Smith.
 * Change the value of the name to Pete.
 * Remove the property name from the object. 
 * 
 */

let user = {};

user.name = 'John';
user.surname = 'Smith';

console.log(user.name);
console.log(user.surname);

user.name = 'Pete';
console.log(user.name);

delete user.name;

console.log(user.name);

/**
 *            Task 6
 *    Check for emptiness
 *
 * Write the function isEmpty(obj) which returns 
 * true if the object has no properties, false otherwise.
 * 
 */

let person = {};

console.log(isEmpty(person));

person.name = 'Zara';
person.surname = 'Sahakyan';
person.age = 32;

console.log(isEmpty(person));

function isEmpty(obj) {
    let empty;
  for (let key in obj) {
  	empty = key;
  }
  if (empty) {
  	return false;
  } else {
  	return true;
  }
}

/**
 *            Task 7
 *    Sum object properties
 *
 * We have an object storing salaries of our team:
 * 
 *  let salaries = {
 *   John: 100,
 *   Ann: 160,
 *   Pete: 130
 *  }
 * 
 * Write the code to sum all salaries and store in the variable sum. 
 * Should be 390 in the example above.
 * If salaries is empty, then the result must be 0.
 * 
 */

 let salaries = {
     John: 100,
     Ann: 160,
     Pete: 130
 }

 let sum = 0;

 for (let prop in salaries) {
     sum = sum + salaries[prop];
 }

 console.log(sum);

 /**
 *            Task 8
 *   Multiply numeric property values by 2
 *
 * Create a function multiplyNumeric(obj) that multiplies 
 * all numeric property values of obj by 2.
 * 
 */

  let menu = {
    width: 200,
    height: 300,
    title: "My menu"
  };
  
  console.log(menu);

  multiplyNumeric(menu);

  console.log(menu);

  function multiplyNumeric(obj) {
    for (let key in obj) {
        if(typeof obj[key] === 'number') {
            obj[key] = obj[key] * 2;
        }
    }
}