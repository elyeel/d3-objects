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