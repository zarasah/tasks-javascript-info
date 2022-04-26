/**          Lesson 15
 *  Student ------------ Zara Sahakyan
 *  Date ---------------- 02.04.2022
 **/

/**
 *            Task
 *       Search for elements
 * 
 *   How to find?
 * 
 * 1. The table with id="age-table".
 * 2. All label elements inside that table (there should be 3 of them).
 * 3. The first td in that table (with the word 'Age').
 * 4. The form with name="search".
 * 5. The first input in that form.
 * 6. The last input in that form.
 *
 */

// 1.  The table with id="age-table".

const tableWithId = document.getElementById('age-table');

console.log(tableWithId);  //  <table id="age-table"> ... </table>

// 2. All label elements inside that table

const lableTag = tableWithId.getElementsByTagName('label');

console.log(lableTag);  //  [label, label, label]

// 3. The first td in that table (with the word 'Age').

const firstTd = tableWithId.rows[0].cells[0];

console.log(firstTd);  //  <td>Age:</td>

// 4. The form with name="search".

const formSearch =document.getElementsByName('search')[0];

console.log(formSearch);  //  <form name="search-person">...</form>

//  5. The first input in that form.

const firstInput = formSearch.getElementsByTagName('input')[0];

console.log(firstInput);  ///  <input type="text" name="search">

//  6. The last input in that form.

const len = formSearch.getElementsByTagName('input').length;
const lastInput = formSearch.getElementsByTagName('input')[len - 1];

console.log(lastInput);  //  <input type="submit" value="Search!">