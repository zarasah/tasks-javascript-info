/**          Lesson 3
 *  Student ------------ Zara Sahakyan
 *  Date ---------------- 10.02.2022
 **/


/**
 *            Task 1
 *  The postfix and prefix forms
 * 
 * What are the final values of all variables a, b, c and d after the code below?
 * 
 */

let a = 1;
let b = 1;

let c = ++a; // c = 2, a = 2
let d = b++; // d = 1, b = 2

console.log(`a = ${a}, b = ${b}, c = ${c} and d = ${d}`);

/**
 *            Task 2
 *       Assignment result
 * 
 * What are the values of y and x after the code below?
 * 
 */

let y = 2;

let x = 1 + (y *= 2); // y = 4, x = 5

console.log(`y = ${y}, x = ${x}`);

/**
 *            Task 3
 *        Type conversions
 * 
 * What are results of these expressions?
 * 
 */

/*
            "" + 1 + 0          // 10
            "" - 1 + 0          // -1
            true + false        // 1
            6 / "3"             // 2
            "2" * "3"           // 6
            4 + 5 + "px"        // 9px
            "$" + 4 + 5         // $45
            "4" - 2             // 2
            "4px" - 2           // NaN
            "  -9  " + 5        //  -9  5
            "  -9  " - 5        // -14
            null + 1            // 1
            undefined + 1       // NaN
            " \t \n" - 2        // -2
 */


/**
 *            Task 4
 *        Fix the addition
 * 
 * Here's a code that asks the user for two numbers and shows their sum.
 * It works incorrectly. The output in the example below is 12 (for default prompt values).
 * Why? Fix it. The result should be 3.
 * 
 */

 //     let a1 = prompt("First number?", 1);
 //     let b1 = prompt("Second number?", 2);
 
 //     alert(a1 + b1); // 12

 //     alert(+a1 + +b1); // result 3

/**
 *            Task 5
 *          Comparisons
 * 
 * What will be the result for these expressions?
 * 
 */
/*
        5 > 4                       //  ture
        "apple" > "pineapple"       //  false
        "2" > "12"                  //  true
        undefined == null           //  true
        undefined === null          //  false
        null == "\n0\n"             //  false
        null === +"\n0\n"           //  false
*/

/**
 *            Task 6
 *       If (a string with 0)
 * 
 * Will alert be shown?
 * 
 */

 if ("0") {
     console.log('Hello');   // Yes, because "0" is true
 }   

 /**
 *            Task 7
 *     The name of JavaScript
 * 
 * Using the if..else construct, write the code which asks: 'What is the "official" name of JavaScript?'
 * If the visitor enters "ECMAScript", then output "Right!"", otherwise - output: "You don't know? ECMAScript!""
 * 
 */

//  let answer = prompt('What is the "official" name of JavaScript?');

//  if (answer === 'ECMAScript') {
//      console.log('Right!');
// } else {
//     console.log('You don't know? ECMAScript!');
// }

/**
 *            Task 8
 *        Show the sign
 * 
 * Using if..else, write the code which gets a number via prompt and then shows in alert:
 * 
 * 1, if the value is greater than zero,
 * -1, if less than zero,
 * 0, if equals zero.
 * 
 * In this task we assume that the input is always a number.
 * 
 */

// let number = +prompt('Please input a number');

// if (number > 0){
//     console.log(1);
// } else if (number < 0) {
//     console.log(-1);
// } else {
//     console.log(0);
// }

/**
 *            Task 9
 *       Rewrite 'if' into '?'
 * 
 * Rewrite this if using the conditional operator '?':
 * 
 * let result;
 * if (a + b < 4) {
 * result = 'Below';
 * } else {
 * result = 'Over';
 * }
 * 
 */

// let a1 = prompt('Input first number');
// let b1 = prompt('Input second number');

// let result = (a1 + b1 < 4) ? 'Below' : 'Over';

// console.log(result);

/**
 *            Task 10
 *       Rewrite 'if .. else' into '?'
 * 
 * let message;
 * 
 * if (login == 'Employee') {
 *      message = 'Hello';
 * } else if (login == 'Director') {
 *      message = 'Greetings';
 * } else if (login == '') {
 *      message = 'No login';
 * } else {
 *      message = '';
 * }
 * 
 */

// let login = prompt('Enter login');

// let message = (login == 'Employee') ? 'Hello' : (login == 'Director') ? 'Greetings' : (login == '') ? 'No login' : '';

// console.log(message);


/**
 *            Task 11
 *        What the result ?
 *
 */

// console.log(null || 2 || undefined) // 2
// console.log(alert(1) || 2 || alert(3))  // 1, 2
// console.log(1 && null && 2)  // null
// console.log(alert(1) && alert(2))  // 1, undefined
// console.log(null || 2 && 3 || 4) //  3


/**
 *            Task 12
 *     Check the range between
 * 
 * Write an if condition to check that age is between 14 and 90 inclusively.
 * "Inclusively" means that age can reach the edges 14 or 90.
 *
 */

// let age = prompt('Enter your age');

// if (age >= 14 && age <= 90) {
//     console.log('Good');
// }

/**
 *            Task 13
 *     Check the range outside
 * 
 * Write an if condition to check that age is NOT between 14 and 90 inclusively. 
 * Create two variants: the first one using NOT !, the second one – without it.
 *
 */

//  let age = prompt('Enter your age');

//  if (!(age >= 14 && age <= 90)) {                       // or  (age < 14 || age > 90)
//      console.log('Good');
//  }


/**
 *            Task 14
 *     A question about "if"
 * 
 * Which of these alerts are going to execute?
 *
 */

//  if (-1 || 0) alert( 'first' );
//  if (-1 && 0) alert( 'second' );
//  if (null || -1 && 1) alert( 'third' );    // 'first', 'third'


/**
 *            Task 15
 *         Check the login
 * 
 * Write the code which asks for a login with prompt.
 * If the visitor enters "Admin", then prompt for a password, if the input is an empty line 
 * or Esc – show “Canceled”, if it’s another string – then show “I don’t know you”.
 * 
 * The password is checked as follows:
 * 
 * If it equals “TheMaster”, then show “Welcome!”,
 * Another string – show “Wrong password”,
 * For an empty string or cancelled input, show “Canceled”
 * 
 */

// let login = prompt("Who's there?");

// if (login === 'Admin') {
//     let passWord = prompt('Password?');

//     if (passWord === 'TheMaster') {
//         console.log('Welcome');
//     } else if (passWord === '' || passWord === null) {
//         console.log('Canceled');
//     } else {
//         console.log('Wrong password');
//     }
// } else if (login === '' || login === null) {
//     console.log('Canceled');
// } else {
//     console.log("I don't know you");
// }


/**
 *            Task 16
 *       Last loop value
 * 
 * What is the last value alerted by this code? Why?
 *
 */

//  let i = 3;

//  while (i) {
//    console.log( i-- );           //  1
//  }


/**
 *            Task 17
 *    Which values does the loop show?
 * 
 * For every loop iteration, write down which value it outputs.
 *
 */
//  //     #1
//  let i = 0;
//  while (++i < 5) console.log( i );      //  1, 2, 3, 4

//  //     #2
//  let i = 0;
// while (i++ < 5) console.log( i );       //  1, 2, 3, 4, 5

// //      #3
// for (let i = 0; i < 5; i++) console.log( i );     // 0, 1, 2, 3, 4

// //      #4
// for (let i = 0; i < 5; ++i) console.log( i );     // 0, 1, 2, 3, 4


/**
 *            Task 18
 *    Output even numbers in the loop
 * 
 * Use the for loop to output even numbers from 2 to 10.
 *
 */

// for (let i = 2; i <= 10; i++) {
//     if(i % 2 === 0) {
//         console.log(i);
//     }
// }

/**
 *            Task 19
 *    Replace "for" with "while"
 * 
 * for (let i = 0; i < 3; i++) {
 *      alert( `number ${i}!` );
 * }
 *
 */

// let i = 0;

// while(i < 3) {
//     console.log(`number ${i}!`);
//     i++;
// }

/**
 *            Task 20
 *    Repeat until the input is correct
 * 
 * Write a loop which prompts for a number greater than 100. 
 * If the visitor enters another number – ask them to input again.
 * 
 * The loop must ask for a number until either the visitor enters a number 
 * greater than 100 or cancels the input/enters an empty line.
 * 
 * Here we can assume that the visitor only inputs numbers. 
 * There’s no need to implement a special handling for a non-numeric input in this task.
 *
 */

// while(true) {
//     let userNumber = prompt('Input a number greater than 100');
//     if (+userNumber > 100 || userNumber === null || userNumber === '') {
//         break;
//     }
// }


/**
 *            Task 21
 *    Output prime numbers
 * 
 * Write the code which outputs prime numbers in the interval from 2 to n.
 *
 */

// let number = +prompt('Please input a number');

// next:
// for (let i = 2; i <= number; i++) {
//     for(let j = 2; j < i; j++) {
//         if (i % j === 0) {
//             continue next;
//         } 
//     }
//     console.log(i);
// }


/**
 *            Task 22
 *    Rewrite the "switch" into an "if"
 *
 */

// let browser = prompt('Enter name of your browser');

// if(browser === 'Edge') {
//     console.log("You've got the Edge!");
// } else if (browser === 'Chrome' || browser === 'Firefox' || browser === 'Safari' || browser === 'Opera') {
//     console.log('Okay we support these browsers too');
// } else {
//     console.log('We hope that this page looks ok!');
// }

/**
 *            Task 23
 *    Rewrite "if" into "switch"
 *
 */

// const number = +prompt('Input number from 0 to 3');

// switch (number) {
//     case 0:
//         console.log(0);
//         break;
//     case 1:
//         console.log(1);
//         break;
//     case 2:
//     case 3:
//         console.log('2, 3')
//         break;
// }