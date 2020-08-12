const foo = (function() {
  const x = 10

  const inner = function() {
    console.log("Value of x is: " + x)
  }
  return inner
})() // Notice the () at the end,
      // which will immediately invoke the function,
      // assigning the returned value (inner) to foo

foo()

function makeLoadedDie() {
  const list = [5, 4, 6, 1, 6, 4, 2, 3, 3, 5];
  /* your code here */
  let i = 0;

  return function() {
    /* your code here */
    ++i;
    return list[i-1];
  }
}

const rollLoadedDie = makeLoadedDie();

console.log(rollLoadedDie());  // 5
console.log(rollLoadedDie());  // 4
console.log(rollLoadedDie());  // 6

const countdownGenerator = function (x) {
  /* your code here */
  return function() {
    x -= 1;
    if (x >= 0) {
      return console.log(`T-minus ${x+1}...`)
    } else if (x === -1) {
      return console.log("Blast Off!");
    } else {
      return console.log("Rockets already gone, bub!");
    }
  }
};

const countdown = countdownGenerator(3);
countdown(); // T-minus 3...
countdown(); // T-minus 2...
countdown(); // T-minus 1...
countdown(); // Blast Off!
countdown(); // Rockets already gone, bub!
countdown(); // Rockets already gone, bub!