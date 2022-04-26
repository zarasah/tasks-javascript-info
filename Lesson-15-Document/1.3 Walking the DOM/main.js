"use strict";
/**          Lesson 15
 *  Student ------------ Zara Sahakyan
 *  Date ---------------- 02.04.2022
 **/

/**
 *            Task 1
 *         DOM children
 * 
 * <html> 
 * <body> 
 *  <div>Users:</div> 
 *  <ul> 
 *   <li>John</li> 
 *   <li>Pete</li>
 *  </ul> 
 * </body> 
 * </html>
 * 
 * For each of the following, give at least one way of how to access them:
 * 
 * 1. The <div> DOM node?
 * 2. The <ul> DOM node?
 * 3. The second <li> (with Pete)?
 *
 */

console.log('1.3 --- Walking the DOM ---');
console.log('1.3 DOM children');

// 1.
console.log('For <div> - document.body.fisrtElementChild  OR  document.body.children[0]');

// 2.
console.log('For <ul> - document.body.children[1]  OR  document.body.fisrtElementChild.nextElementSibling');

// 3.
console.log('For <li> with Pete - document.body.children[1].children[1]  OR  document.body.lastElementChild.lastElementChild');

/**
 *            Task 2
 *      The sibling question
 *
 */

 console.log('1.3 --- Walking the DOM ---');
 console.log('1.3 The sibling question');

//  If elem - is an arbitrary DOM element node...

// Is it true that elem.lastChild.nextSibling is always null?          //  YES
// Is it true that elem.children[0].previousSibling is always null ?   //  NO

/**
 *            Task 3
 *      Select all diagonal cells
 *
 */

 console.log('1.3 --- Walking the DOM ---');
 console.log('1.3 Select all diagonal cells');

//  // First Version

//  for (let i = 0; i < 5; i++) {
//     for (let j = 0; j < 5; j++) {
//         if (i === j) {
//             document.body.firstElementChild.firstElementChild.children[i].children[j].style.backgroundColor = 'red';
//         }
//     }
// }

// Second Version

const table = document.body.firstElementChild;

for (let i = 0; i < 5; i++) {
    for (let j = 0; j < 5; j++) {
        if (i === j) {
            table.rows[i].cells[j].style.backgroundColor = 'red';
        }
    }
}
