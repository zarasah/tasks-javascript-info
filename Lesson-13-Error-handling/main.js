'use strict'
/**          Lesson 13
 *  Student ------------ Zara Sahakyan
 *  Date ---------------- 25.03.2022
 **/


/**
 *            Task 1
 *     Finally or just the code?
 * 
 */

console.log('10.1 ---Error handling, "try...catch"---');
console.log('10.1 Finally or just the code?');

//  There is no difference between 1 or 2

//  1. 

try {
  console.log('Everything is Ok')  //  Everything is Ok
} catch {
  // Ignore catch block
} finally {
  console.log('END');  //  END
}

//  2. 

try {
  console.log('Everything is Ok')  //  Everything is Ok
} catch {
  // Ignore catch block
} 

console.log('END');  //  END

//  There is a difference between 3 and 4

//  3.

function log3() {
  try {
    console.log('Everything is Ok')  //  Everything is Ok
    return 5;
  } catch {
    // Ignore catch block
  } finally {
    console.log('END');  //  END
  }
}

log3();

//  4.

function log4() {
  try {
    console.log('Everything is Ok')  //  Everything is Ok
    return 5;
  } catch {
    // Ignore catch block
  } 
    
  console.log('END');  //  This code will not be executed
  
}

log4();
   
/**
 *            Task 2
 *     Inherit from SyntaxError
 * 
 * Create a class FormatError that inherits from the built-in SyntaxError class. 
 * It should support message, name and stack properties.
 * 
 */

 console.log('10.2 ---Custom errors, extending Error---');
 console.log('10.2 Inherit from SyntaxError');

 class FormatError extends SyntaxError {
   constructor(message) {
     super(message),
     this.name = 'FormatError'
   }
 }
 
 let err = new FormatError("formatting error");

 console.log( err.message ); // formatting error
 console.log( err.name ); // FormatError
 console.log( err.stack ); // stack
 
 console.log( err instanceof FormatError ); // true
 console.log( err instanceof SyntaxError ); // true 



/**
 *            Task 3
 *        Retrun Obj Age
 * 
 */

 console.log('Retrun Obj Age');

 let user1 = {
   name: 'Zara',
   age: 32
 }

 let user2 = {
   name: 'Vika',
 }

 const number = 25;
 const str = 'Vahagn';
 const n = null;
 
 function getObjAge (obj) {
   if (typeof obj === 'object' && obj != null) {
     if (obj.age) {
      return obj.age;
     }
     throw new Error('Object does not have age property');
   }

   throw new Error('Argument is not an object');
 }

 console.log(getObjAge (user1));  //  32

 try {
  console.log(getObjAge (user2));
 } catch(err) {
  console.log(err);  //  Error: Object does not have age property
 }

 try {
  console.log(getObjAge (number));
 } catch(err) {
  console.log(err);  //  Error: Argument is not an object
 }

 try {
  console.log(getObjAge (str));  //
 } catch (err) {
   console.log(err);  //  Error: Argument is not an object
 }

 try {
  console.log(getObjAge (n));  //
 } catch (err) {
   console.log(err);  //  Error: Argument is not an object
 }


/**
 *            Task 4
 *         Discriminant
 * 
 */

 console.log('Discriminant');

 function discrim (a, b, c) {
  if(a === 0) {
    throw new Error('It is not a quadratic equation')
  }

   const d = b**2 - 4 * a * c;
   let x1;
   let x2;

   if (d >= 0) {
     x1 = (-1 * b + Math.sqrt(d)) / (2 * a);
     x2 = (-1 * b - Math.sqrt(d)) / (2 * a);

     return (`${x1} and ${x2}`)
   }

   throw new Error('The equation has no solution')
 }

  console.log(discrim (1, -70, 600));

  try {
    console.log(discrim (0, 3, 5));
  } catch (err) {
    console.log(err);  //  It is not a quadratic equation
  }
 
  try {
    console.log(discrim (1, 1, 1));
  } catch (err) {
    console.log(err);  //  The equation has no solutions
  }
 