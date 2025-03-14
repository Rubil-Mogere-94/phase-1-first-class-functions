// 1. Function that receives a function and calls it
function receivesAFunction(callback) {
    callback();
  }
  
  // 2. Function that returns a named function
  function returnsANamedFunction() {
    return function namedFunction() {
      console.log("This is a named function.");
    };
  }
  
  // 3. Function that returns an anonymous function
  function returnsAnAnonymousFunction() {
    return function() {
      console.log("This is an anonymous function.");
    };
  }
  
  // Export the functions for testing
  module.exports = {
    receivesAFunction,
    returnsANamedFunction,
    returnsAnAnonymousFunction
  };
  