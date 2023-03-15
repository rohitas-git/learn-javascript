/* -------------------------------------------------------------------------- */
/*                                     ES6                                    */
/* -------------------------------------------------------------------------- */

/* -------------------------------------------------------------------------- */
/*                                 JS Promise                                 */
/* -------------------------------------------------------------------------- */

// You use it to make a promise to do something, usually asynchronously. 
// When the task completes, you either fulfill your promise or fail to do so. 

// Promise is a constructor function, so you need to use the new keyword to create one. 
// It takes a function, as its argument, with two parameters - resolve and reject. 
// These are methods used to determine the outcome of the promise. 

const myPromise = new Promise( 
        (resolve, reject) => {

    }
);

/* ---------------- Complete Promise with resovle and reject ---------------- */

// A promise has three states: 
// pending,  (myPromise will always be pending because it doesn't have resolve or reject)
// fulfilled, 
// rejected

// resolve is used when you want your promise to succeed, 
// and reject is used when you want it to fail.

const myPromise2 = new Promise((resolve, reject) => {
    if(true) {
      resolve("Promise was fulfilled");
    } else {
      reject("Promise was rejected");
    }
});


/* ------------------ Handle a Fulfilled Promise with then ------------------ */

// Promises are most useful when you have a process that takes an unknown amount of time 
// in your code (i.e. something asynchronous), often a server request. 

// The 'then' method is executed immediately after your promise is fulfilled with resolve

myPromise.then(result => {
  
});

// result comes from the argument given to the resolve method.

myPromise2.then(result=>{
    console.log(result);
});

/* ------------------ Handle a Rejected Promise with catch ------------------ */

// catch is the method used when your promise has been rejected. 
// It is executed immediately after a promise's reject method is called.

myPromise.catch(error => {
  
});

myPromise2.catch(error=>{
    console.log(error);
});
