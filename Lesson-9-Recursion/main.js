'use strict'
/**          Lesson 9
 *  Student ------------ Zara Sahakyan
 *  Date ---------------- 10.03.2022
 **/


/**
 *            Task 1
 *  Sum all numbers till the given one
 * 
 * Write a function sumTo(n) that calculates the sum of 
 * numbers 1 + 2 + ... + n.
 * 
 *  Make 3 solution variants: 
 * 
 * 1. Using a for loop. 
 * 2. Using a recursion, cause sumTo(n) = n + sumTo(n-1) for n > 1. 
 * 3. Using the arithmetic progression formula.
 * 
 */

function sumToLoop(n) {
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    sum += i;
  }
  return sum;
}

function sumToRec(n) {
  if (n === 1) {
    return 1;
  } else {
    let sum = 0;
    return sum += n + sumToRec(n -1);
  }
  
}

function sumToProg(n) {
  return (1 + n) * n / 2;
}

console.log('Sum to n')

console.log(sumToLoop(5));  //  15
console.log(sumToLoop(1));  //  1
console.log(sumToLoop(10));  //  55
console.log(sumToLoop(100));  //  5050

console.log(sumToProg(5));  //  15
console.log(sumToProg(1));  //  1
console.log(sumToProg(10));  //  55
console.log(sumToProg(100));  //  5050

console.log(sumToRec(5));  //  15
console.log(sumToRec(1));  //  1
console.log(sumToRec(10));  //  55
console.log(sumToRec(100));  //  5050


/**
 *            Task 2
 *      Calculate factorial
 * 
 * Write a function factorial(n) that calculates n! 
 * using recursive calls.
 * 
 */

function factorial(n) {
  if (n === 1) {
    return 1;
  }
  return n * factorial(n-1);
}

console.log ('Fuctorial');
console.log(factorial(1));  //  1
console.log(factorial(2));  //  2
console.log(factorial(3));  //  6
console.log(factorial(4));  //  24
console.log(factorial(5));  //  120


/**
 *            Task 3
 *       Fibonacci numbers
 * 
 * Write a function fib(n) that returns 
 * the n-th Fibonacci number.
 * 
 */

// // First version (using a formula)

// function fib(n) {
//   const goldenSec = (1 + Math.sqrt(5)) / 2;
//   const pow1 = Math.pow(goldenSec, n);
//   const pow2 = Math.pow(-goldenSec, -n);
//   return Math.trunc((pow1 -pow2) / (2*goldenSec - 1));
// }

// console.log('Fibonacci');

// console.log(fib(1));  //  1
// console.log(fib(2));  //  1
// console.log(fib(3));  //  2
// console.log(fib(4));  //  3
// console.log(fib(7));  //  13
// console.log(fib(77));  //  Not correct started with n = 73;


// // Second version (using a recursion)

// function fib(n) {
//   if (n === 1) {
//     return 1;
//   }

//   if (n === 2) {
//     return 1;
//   }
  
//   return fib(n-1) + fib(n-2);
// }

// console.log('Fibonacci');

// console.log(fib(1));  //  1
// console.log(fib(2));  //  1
// console.log(fib(3));  //  2
// console.log(fib(4));  //  3
// console.log(fib(7));  //  13  For big values of n it's very slow.



// Third version (using a recursion)

function fib(n) {
  let num1 = 1;
  let num2 = 1;

  for (let i = 3; i <= n; i++) {
    let temp;
    temp = num1
    num1 = num2;
    num2 = num1 + temp;
  }

  return num2;
}

console.log('Fibonacci');

console.log(fib(1));  //  1
console.log(fib(2));  //  1
console.log(fib(3));  //  2
console.log(fib(4));  //  3
console.log(fib(7));  //  13  
console.log(fib(77));  //  5527939700884757


/**
 *            Task 4
 *    Output a single-linked list
 * 
 * Write a function printList(list) that outputs list items one-by-one. 
 * Make two variants of the solution: using a loop and using recursion.
 * 
 */

// First version (using a loop)

function  printListLoop(list) {
  let temp = list;
  while (temp) {
    console.log(temp.value);
    temp = temp.next;
  }
}

let list = {
  value: 1,
  next: {
    value: 2,
    next: {
      value: 3,
      next: {
        value: 4,
        next: null
      }
    }
  }
};

console.log('Single-linked list');

printListLoop(list);  //  1, 2, 3, 4

// Second version (using recursion)

function  printListRec(list) {
  if (!list) {
  	return;
  }
  let temp = list;
  console.log(temp.value);
	temp = list.next
  printListRec(temp);
}

let list1 = {
  value: 5,
  next: {
    value: 6,
    next: {
      value: 7,
      next: {
        value: 8,
        next: null
      }
    }
  }
};

console.log('Single-linked list');

printListRec(list1);  //  5, 6, 7, 8


/**
 *            Task 5
 *    Output a single-linked list in the reverse order
 * 
 */

// First version (using a loop)

function  printListRev(list) {
  let arr = [];
  let temp = list;
  while (temp) {
    arr.push(temp.value);
    temp = temp.next;
  }
  for (let i = arr.length - 1; i >= 0; i--) {
    console.log(arr[i]);
  }
}

let list2 = {
  value: 1,
  next: {
    value: 2,
    next: {
      value: 3,
      next: {
        value: 4,
        next: null
      }
    }
  }
};

console.log('Single-linked list reverse');

printListRev(list2);  //  4, 3, 2, 1

// Second version (using recursion)

function  printReverse(list) {
  if (list.next) {
  	printReverse(list.next);
  }
  console.log(list.value);
}

let list3 = {
  value: 5,
  next: {
    value: 6,
    next: {
      value: 7,
      next: {
        value: 8,
        next: null
      }
    }
  }
};

console.log('Single-linked list reverse');

printReverse(list3);  //  8, 7, 6, 5