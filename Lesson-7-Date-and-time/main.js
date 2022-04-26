'use strict'
/**          Lesson 7
 *  Student ------------ Zara Sahakyan
 *  Date ---------------- 03.03.2022
 **/


/**
 *            Task 1
 *         Create a date
 * 
 * Create a Date object for the date: Feb 20, 2012, 3:12am. 
 * The time zone is local.
 * 
 */
 
let date1 = new Date(2012, 1, 20, 3, 12);

console.log(date1);

/**
 *            Task 2
 *        Show a weekday
 * 
 * Write a function getWeekDay(date) to show the weekday in short format.
 * 
 */

 function getWeekDay(date) {
  let week = ['SU', 'MO', 'TU', 'WE', 'TH', 'FR', 'SA']
   
  return week[date.getDay()];
 }

 let date = new Date(2012, 0, 3);
 let today = new Date();

 console.log(getWeekDay(date));
 console.log(getWeekDay(today));


 /**
 *            Task 3
 *       European weekday
 * 
 * European countries have days of week starting with Monday (number 1), 
 * then Tuesday (number 2) and till Sunday (number 7). 
 * Write a function getLocalDay(date) that returns the 'European' day 
 * of week for date.
 * 
 */
 
  function getLocalDay(date) {
    let week = [7, 1, 2, 3, 4, 5, 6]
     
    return week[date.getDay()];
   }
  
   let date2 = new Date(2012, 0, 3);
   let today1 = new Date();
  
   console.log(getLocalDay(date2));
   console.log(getLocalDay(today1));


/**
 *            Task 4
 *    Which day of month was many days ago?
 * 
 * Create a function getDateAgo(date, days) to return 
 * the day of month days ago from the date.
 * 
 */

//   function getDateAgo(date, days) {
//     let newDate = new Date();
//     newDate.setTime(+date - days * 24 * 3600 * 1000);
//     return newDate;
//   }

//   let daten = new Date(2015, 0, 2);

// console.log( getDateAgo(daten, 1) ); 
// console.log( getDateAgo(daten, 2) );
// console.log( getDateAgo(daten, 365) );


/**
 *            Task 5
 *      Last day of month?
 * 
 * Write a function getLastDayOfMonth(year, month) 
 * that returns the last day of month. 
 * Sometimes it is 30th, 31st or even 28/29th for Feb.
 * 
 */

function getLastDayOfMonth(year, month) {
  let arr31 = [0, 2, 4, 6, 7, 9, 11];

  if (month === 1 && year % 4 === 0) {
    return 29;
  } else if (month === 1) {
    return 28;
  }

  if (arr31.includes(month)) {
    return 31;
  }
  return 30;
}

console.log(getLastDayOfMonth(2022, 0));
console.log(getLastDayOfMonth(2012, 1));
console.log(getLastDayOfMonth(2021, 2));
console.log(getLastDayOfMonth(2022, 5));


/**
 *            Task 6
 *   How many seconds have passed today?
 * 
 * Write a function getSecondsToday() that returns 
 * the number of seconds from the beginning of today.
 * 
 */

 function getSecondsToday() {
  let today = new Date();
  today.setHours(0, 0, 0)
  let now = new Date();

  return ((now - today) / 1000);
 }

 console.log(getSecondsToday());


 /**
 *            Task 7
 *   How many seconds till tomorrow?
 * 
 * Create a function getSecondsToTomorrow() that returns 
 * the number of seconds till tomorrow.
 * 
 */

 

  function getSecondsToTomorrow() {
    let oneDay = 86400;
  
    return (oneDay - getSecondsToday());
   }
  
   console.log(getSecondsToTomorrow());


/**
 *            Task 8
 *   Format the relative date
 * 
 * Write a function formatDate(date) that should format date as follows: 
 * If since date passed less than 1 second, then "right now". 
 * Otherwise, if since date passed less than 1 minute, then "n sec. ago". 
 * Otherwise, if less than an hour, then "m min. ago". 
 * Otherwise, the full date in the format "DD.MM.YY HH:mm". 
 * That is: "day.month.year hours:minutes", all in 2-digit format, e.g. 31.12.16 10:00.
 * 
 */

 function formatDate(date) {
	let now = new Date();
  let diff = now - date;
  
  if (diff < 1000) {
  	return 'right now';
  }
  
  if (diff < 60 * 1000) {
  	let sec = Math.round(diff / 1000);
  	return `${sec} sec. ago`;
  }
  
  if (diff < 60 * 60 * 1000) {
  	let minutes = Math.round(diff / (60 * 1000));
    return `${minutes} min. ago`
  }
  
  let day = date.getDate();
  if (day < 10) {
	  day = '0' + day;
  }

  let month = date.getMonth() + 1;
  if (month < 10) {
    month = '0' + month;
  }

  let year = String(date.getFullYear()).slice(2);

  let hours = date.getHours();
  if (hours < 10) {
    hours = '0' + hours;
  }
  
  let minutes = date.getMinutes();
  if (minutes < 10) {
    minutes = '0' + minutes;
  }
  return `${day}.${month}.${year} ${hours}:${minutes}`
}

console.log( formatDate(new Date(new Date - 1)) ); // "right now"
console.log( formatDate(new Date(new Date - 30 * 1000)) ); // "30 sec. ago"
console.log( formatDate(new Date(new Date - 5 * 60 * 1000)) ); // "5 min. ago"
console.log( formatDate(new Date(new Date - 86400 * 1000)) ); 


/**
 *            Task 9
 *   Turn the object into JSON and back
 * 
 * Turn the user into JSON and then read it back into another variable.
 * 
 */

 let user = {
  name: "John Smith",
  age: 35
 }

 let str = JSON.stringify(user);

 console.log(str);

 let newUser = JSON.parse(str);

 console.log(newUser);


/**
 *            Task 10
 *            Reduce
 * 
 * 1. Return array with even numbers
 * 2. Return array with odd numbers
 * 3. Sum of elements
 * 
 */


let array = [1, 5, 12, 15, 17, 0, 22, 44, 7];

let arrayOfEven = array.reduce((aggr, item) => {
  if (item % 2 === 0) {
    aggr.push(item);
  }
  return aggr;
}, []);

let arrayOfOdd = array.reduce((aggr, item) => {
  if (item % 2 === 1) {
    aggr.push(item);
  }
  return aggr;
}, []);


function sum(arr) {
  return arr.reduce((sum, item) => sum + item);
}

console.log(array);
console.log(arrayOfEven);
console.log(arrayOfOdd);
console.log(sum(array));
console.log(sum(arrayOfEven));
console.log(sum(arrayOfOdd));
