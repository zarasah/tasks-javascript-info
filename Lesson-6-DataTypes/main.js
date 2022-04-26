'use strict'
/**          Lesson 6
 *  Student ------------ Zara Sahakyan
 *  Date ---------------- 27.02.2022
 **/


/**
 *            Task 1
 * Translate border-left-width to borderLeftWidth
 * 
 * Write the function camelize(str) that changes dash-separated words 
 * like "my-short-string" into camel-cased "myShortString".
 * That is: removes all dashes, each word after dash becomes uppercased.
 * 
 */
 
 // First version

//  function camelize(str) {
//     let arr = str.split('-');
//     for (let i = 1; i < arr.length; i++) {
//         arr[i] = arr[i][0].toUpperCase() + arr[i].slice(1);
//     }
//     str = arr.join('');
//     return str;
//  }

//  console.log(camelize("background-color"));
//  console.log(camelize("list-style-image"));
//  console.log(camelize("-webkit-transition"));

 // Second version

 function camelize(str) {
    return str.split('-').map(function (item, index) {
        if (index > 0) {
         return item[0].toUpperCase() + item.slice(1);
      }
      return item;
    })
    .join('');
 }

 console.log(camelize("background-color"));
 console.log(camelize("list-style-image"));
 console.log(camelize("-webkit-transition"));


 /**
 *            Task 2
 *         Filter range
 * 
 * Write a function filterRange(arr, a, b) that gets an array arr, 
 * looks for elements with values higher or equal to a and lower or 
 * equal to b and return a result as an array.The function should not 
 * modify the array. It should return the new array.
 * 
 */

 function filterRange(arr, a, b) {
    return arr.filter(function (item) {
        if (item >= a && item <= b) {
            return item;
        }
    })
 }

 let numberArr = [120, 25, 11, 5, 7, 27, 23];
 
 let filtered = filterRange(numberArr, 5, 15);

 console.log(filtered);


 /**
 *            Task 3
 *     Filter range "in place"
 * 
 * Write a function filterRangeInPlace(arr, a, b) that gets an array arr 
 * and removes from it all values except those that are between a and b. 
 * The test is: a <= arr[i] <= b.The function should only modify the array. 
 * It should not return anything.
 * 
 */

//   function filterRangeInPlace(arr, a, b) {
//       for (let i = 0; i <= arr.length; i++) {
//         if (arr[i] < a || arr[i] > b) {
//             arr.splice(i, 1);
//             i--;
//         }
//       }
//       return arr;
//   }

//   let arr = [5, 21, 3, 11, 7,];

//   filterRangeInPlace(arr, 2, 7);

//   console.log( arr );


/**
 *            Task 4
 *     Sort in decreasing order
 * 
 */

   let arrNum = [5, 2, 1, -10, 8];

   arrNum.sort(sortFn);
   
   console.log(arrNum);

   function sortFn (a, b) {
       return b-a;
   }


/**
 *            Task 5
 *      Copy and sort array
 * 
 * We have an array of strings arr. We'd like to have a sorted 
 * copy of it, but keep arr unmodified. 
 * Create a function copySorted(arr) that returns such a copy.
 * 
 */

 function copySorted (arr) {
     let sortedArr = arr.slice();
     return sortedArr.sort();
 }

 let strArr = ['HTML', 'JavaScript', 'CSS'];

 let sorted = copySorted(strArr);

 console.log(strArr);
 console.log(sorted);


 /**
 *            Task 6
 *     Create an extendable calculator
 *     Այս խնդիրը կփորձեմ մյուս դասին
 */
 

/**
 *            Task 7
 *         Map to names
 * 
 * You have an array of user objects, each one has user.name. 
 * Write the code that converts it into an array of names.
 * 
 */

//    let john = { name: "John", age: 25 };
//    let pete = { name: "Pete", age: 30 };
//    let mary = { name: "Mary", age: 28 };
   
//    let users = [ john, pete, mary ];
   
//    let names = users.map(item => item.name);
   
//    console.log(names);



/**
 *            Task 8
 *         Map to objects
 * 
 * You have an array of user objects, each one has name, surname and id. 
 * Write the code to create another array from it, of objects with id and 
 * fullName, where fullName is generated from name and surname.
 * 
 */

   
//  // First Version

//  let john = { name: "John", surname: "Smith", id: 1 };
//  let pete = { name: "Pete", surname: "Hunt", id: 2 };
//  let mary = { name: "Mary", surname: "Key", id: 3 };
 
//  let users = [ john, pete, mary ];

//  let usersMapped = users.map(function (item) {
// 	item = {
//         fullName: `${item.name} ${item.surname}`,
//         id: item.id
//     }
//   return item;
// }) 

//  console.log( usersMapped[0].id ) // 1
//  console.log( usersMapped[0].fullName ) // John Smith

 // Second Version

//  let john = { name: "John", surname: "Smith", id: 1 };
//  let pete = { name: "Pete", surname: "Hunt", id: 2 };
//  let mary = { name: "Mary", surname: "Key", id: 3 };
 
//  let users = [ john, pete, mary ];

//  let usersMapped = users.map(item => ({
// 	fullName: `${item.name} ${item.surname}`,
//     id: item.id
//  }))

//  console.log( usersMapped[0].id ) // 1
//  console.log( usersMapped[0].fullName ) // John Smith


/**
 *            Task 9
 *        Sort users by age
 * 
 * Write the function sortByAge(users) that gets an array 
 * of objects with the age property and sorts them by age.
 * 
 */

// function sortByAge(arr) {
//     return arr.sort((a, b) => a.age > b.age ? 1 : -1)
// }

// let john = { name: "John", age: 25 };
// let pete = { name: "Pete", age: 30 };
// let mary = { name: "Mary", age: 28 };

// let nameArr = [ pete, john, mary ];

// sortByAge(nameArr);

// console.log(nameArr[0].name);
// console.log(nameArr[1].name);
// console.log(nameArr[2].name);

/**
 *            Task 10
 *        Shuffle an array
 * 
 * Write the function shuffle(array) that shuffles (randomly reorders) elements 
 * of the array.Multiple runs of shuffle may lead to different orders of elements.
 * 
 */

 let arr1 = [1, 2, 3];

 function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1))
     let temp = array[i];
     array[i] = array[j];
     array[j] = temp;
    }
    return array;
 }

 for (let i = 0; i < 5; i++) {
	console.log(shuffle(arr1));
}


/**
 *            Task 11
 *        Get average age
 * 
 * Write the function getAverageAge(users) that gets an array 
 * of objects with property age and returns the average age.
 * 
 */
  
 // First Version

//  function getAverageAge(arr) {
//      let sum = 0;
//      for (let i = 0; i < arr.length; i++) {
//          sum += arr[i].age;
//      }
//      return sum / arr.length;
//  }

//  let john = { name: "John", age: 25 };
//  let pete = { name: "Pete", age: 30 };
//  let mary = { name: "Mary", age: 29 };
 
//  let arr = [ john, pete, mary ];
 
//  console.log( getAverageAge(arr) )

 // Second Version

// function getAverageAge(arr) {
//     return arr.map(item => item.age).reduce(((agger, item) => (agger += item)), 0) / arr.length;
// }

// let john = { name: "John", age: 25 };
// let pete = { name: "Pete", age: 30 };
// let mary = { name: "Mary", age: 29 };

// let arr = [ john, pete, mary ];

// console.log( getAverageAge(arr) );


/**
 *            Task 12
 *    FiLet arr be an array. 
 * 
 * Create a function unique(arr) that should return 
 * an array with unique items of arr.
 * 
 */

 function unique(arr) {
    let uniqueArr = [];
    for (let i = 0; i < arr.length; i++) {
    	if (!uniqueArr.includes(arr[i])) {
      	uniqueArr.push(arr[i])
      }
    }
    return uniqueArr;
  }
  
  let strings = ["Hare", "Krishna", "Hare", "Krishna",
    "Krishna", "Krishna", "Hare", "Hare", ":-O"
  ];
  
  console.log( unique(strings) ); 


/**
 *            Task 13
 *    Create keyed object from array
 * 
 * Let's say we received an array of users in the form {id:..., name:..., age:... }. 
 * Create a function groupById(arr) that creates an object from it, 
 * with id as the key, and array items as values.
 * 
 */

 function groupById(arr) {
    return arr.reduce((obj, item) => {
         obj[item.id] = item;
         return obj;
     }, {})
 }

 let users = [
    {id: 'john', name: "John Smith", age: 20},
    {id: 'ann', name: "Ann Smith", age: 24},
    {id: 'pete', name: "Pete Peterson", age: 31},
  ];
  
  let usersById = groupById(users);

  console.log(usersById);


/**
 *            Task 14
 *    Filter unique array members
 * 
 * Let arr be an array. 
 * Create a function unique(arr) that should return 
 * an array with unique items of arr. 
 * 
 */

//  function unique(arr) {
//   return Array.from(new Set(arr));
// }

// let values = ["Hare", "Krishna", "Hare", "Krishna",
//   "Krishna", "Krishna", "Hare", "Hare", ":-O"
// ];

// console.log(unique(values) ); 


/**
 *            Task 15
 *       Filter anagrams
 * 
 * Anagrams are words that have the same number of same letters, 
 * but in different order.
 * Write a function aclean(arr) that returns an array cleaned 
 * from anagrams.
 * 
 */

 function aclean(arr) {
   let map = new Map();

   for (let item of arr) {
     let sorted = item.toLowerCase().split('').sort().join('');
     map.set(sorted, item)
   }
   return Array.from(map.values());
 }

 let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];

 console.log( aclean(arr) );


 /**
 *            Task 16
 *         Iterable keys
 * 
 * We'd like to get an array of map.keys() in a variable and 
 * then apply array-specific methods to it, e.g. .push. 
 * But that doesn't work:
 * 
 * let map = new Map(); 
 * map.set("name", "John"); 
 * let keys = map.keys(); 
 * // Error: keys.push is not a function 
 * keys.push("more");
 * 
 * Why? How can we fix the code to make keys.push work?
 * 
 */

  let map = new Map();

  map.set("name", "John");
  
  let keys = Array.from(map.keys());
  
  keys.push("more");

  console.log(keys); // ['name', 'more']



/**
 *            Task 17
 *      Sum the properties 
 * 
 * There is a salaries object with arbitrary number of salaries. 
 * Write the function sumSalaries(salaries) that returns the sum 
 * of all salaries using Object.values and the for..of loop. 
 * If salaries is empty, then the result must be 0.
 * 
 */

//  function sumSalaries(salaries) {
//    let sumOfSalaries = 0;
//    for (let value of Object.values(salaries)) {
//      sumOfSalaries += value;
//    }
//    return sumOfSalaries;
//  }

//  let salaries = {
//   "John": 100,
//   "Pete": 300,
//   "Mary": 250
// };

// console.log( sumSalaries(salaries) );


/**
 *            Task 18
 *        Count properties
 * 
 * Write a function count(obj) that returns the number 
 * of properties in the object:
 * 
 */

 function count(obj) {
   return Object.keys(obj).length;
 }

 let user = {
  name: 'John',
  age: 30
};

console.log( count(user) );


/**
 *            Task 19
 *       Destructuring assignment
 * 
 * We have an object:
 * Write the destructuring assignment that reads: 
 * name property into the variable name. 
 * years property into the variable age. 
 * isAdmin property into the variable isAdmin (false, if no such property)
 * 
 */

 let userJ = {
  name: "John",
  years: 30
};

let {name, years: age, isAdmin = false} = userJ;

console.log( name );
console.log( age );
console.log( isAdmin );


/**
 *            Task 20
 *       The maximal salary
 * 
 * Create the function topSalary(salaries) that returns the name of the top-paid person. 
 * If salaries is empty, it should return null. 
 * If there are multiple top-paid persons, return any of them.
 * 
 */

 function topSalary(salaries) {
   let max = 0;
   let topName = null;

   for (let [key, value] of Object.entries(salaries)) {
     if (value > max) {
       max = value;
       topName = key;
     }
   }
   return topName;
 }

 let salaries = {
  "John": 100,
  "Pete": 300,
  "Mary": 250
};

console.log(topSalary(salaries));