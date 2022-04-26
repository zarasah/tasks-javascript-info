"use strict";
/**          Lesson 14
 *  Student ------------ Zara Sahakyan
 *  Date ---------------- 28.03.2022
 **/

/**
 *            Task 1
 *     Re-resolve a promise?
 *
 * What's the output of the code below?
 *
 */

console.log("11.2 ---Promise---");
console.log("11.2 Re-resolve a promise?");

let promise = new Promise(function (resolve, reject) {
  resolve(1);

  setTimeout(() => resolve(2), 1000); // This resolve is ignored
});

promise.then(console.log); // 1

/**
 *            Task 2
 *     Delay with a promise
 *
 * The built-in function setTimeout uses callbacks.
 * Create a promise-based alternative.
 *
 * The function delay(ms) should return a promise.
 * That promise should resolve after ms milliseconds,
 * so that we can add .then to it
 *
 */

console.log("11.2 ---Promise---");
console.log("11.2 Delay with a promise");

function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

delay(3000).then(() => console.log("runs after 3 seconds"));

/**
 *            Task 3   //  ????????
 *     Animated circle with promise
 *
 * Rewrite the showCircle function in the solution of the task Animated circle
 * with callback so that it returns a promise instead of accepting a callback.
 * The new usage:
 *
 * showCircle(150, 150, 100).then(div => {
 * div.classList.add('message-ball');
 * div.append("Hello, world!");
 * });
 *
 */

console.log("11.2 ---Promise---");
console.log("11.2 Animated circle with promise");

/**
 *            Task 4
 *    Promise: then versus catch
 *
 */

console.log("11.3 ---Promises chaining---");
console.log("11.3 Promise: then versus catch");

// // 1.

// promise.then(f1).catch(f2);

// // 2.

// promise.then(f1, f2);

// // 1 and 2 --- they are not equal

/**
 *            Task 5
 *       Error in setTimeout
 *
 * What do you think? Will the .catch trigger?
 * Explain your answer.
 *
 */

console.log("11.4 ---Error handling with promises---");
console.log("11.4 Error in setTimeout");

//  // 1

//   new Promise(function(resolve, reject) {
//    setTimeout(() => {
//      throw new Error("Whoops!");
//    }, 1000);
//  }).catch(console.log);  //  no, it won't

//  // 2

//  new Promise(function(resolve, reject) {
//    setTimeout(() => {
//      reject ( new Error("Whoops!"));
//    }, 1000);
//  }).catch(console.log);  //  my version

/**
 *            Task 6
 *     Rewrite using async/await
 *
 * Rewrite this example code from the chapter Promises chaining
 * using async/await instead of .then/catch:
 *
 */

console.log("11.8 ---Async/await---");
console.log("11.8 Rewrite using async/await");

async function loadJson(url) {
  const response = await fetch(url);
  if (response.status == 200) {
    return response.json();
  } else {
    throw new Error(response.status);
  }
}

loadJson("https://javascript.info/no-such-user.json").catch(console.log); // Error: 404

/**
 *            Task 7  //  ?????
 *     Rewrite "rethrow" with async/await 
 *
 */

console.log("11.8 ---Async/await---");
console.log('11.8 Rewrite "rethrow" with async/await');

// class HttpError extends Error {
//   constructor(response) {
//     super(`${response.status} for ${response.url}`);
//     this.name = 'HttpError';
//     this.response = response;
//   }
// }

// function loadJson(url) {
//   return fetch(url)
//     .then(response => {
//       if (response.status == 200) {
//         return response.json();
//       } else {
//         throw new HttpError(response);
//       }
//     });
// }

// // Ask for a user name until github returns a valid user
// function demoGithubUser() {
//   let name = prompt("Enter a name?", "iliakan");

//   return loadJson(`https://api.github.com/users/${name}`)
//     .then(user => {
//       alert(`Full name: ${user.name}.`);
//       return user;
//     })
//     .catch(err => {
//       if (err instanceof HttpError && err.response.status == 404) {
//         alert("No such user, please reenter.");
//         return demoGithubUser();
//       } else {
//         throw err;
//       }
//     });
// }

// demoGithubUser();

/**
 *            Task 8
 *     Call async from non-async
 *
 * We have a 'regular' function called f. How can you call
 * the async function wait() and use its result inside of f?
 *
 */

console.log("11.8 ---Async/await---");
console.log("11.8 Call async from non-async");

async function wait() {
  await new Promise((resolve) => setTimeout(resolve, 1000));

  return 10;
}

function f() {
  wait().then((result) => console.log(result));
}

f(); //  show 10

let a = [1, 2, 3];

console.log(a.map(function (item) {
  return item*2;
}))