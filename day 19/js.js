// lvl 1
// Create a closure which has one inner function

const add = (function () {
    let counter = 0;
    return function () {counter += 1; return counter;}
  })();
  